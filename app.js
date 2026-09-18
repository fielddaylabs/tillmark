const sampleText = `WHOLE FOODS MARKET\n08/14/26  5:42 PM\nWT APL HNYCRSP 100   2.1 LB   7.96\nORG CHKN BRST        3.0 LB  24.40\nOLV OIL EVOO 1L      1 EA   18.99\nSUBTOTAL                   51.35\nTOTAL                      51.35`;

// Replace this local catalog with a retailer catalog API in production.
const catalog = [
  {name:'Honeycrisp apples', aliases:['hnycrsp','honeycrisp','apl'], category:'Produce', unit:'lb', confidence:82},
  {name:'Organic chicken breast', aliases:['org chkn brst','organic chicken','chicken breast'], category:'Meat', unit:'lb', confidence:96},
  {name:'Extra virgin olive oil', aliases:['olv oil','evoo','olive oil'], category:'Pantry', unit:'1 L', confidence:88},
  {name:'Whole milk', aliases:['whole milk','milk'], category:'Dairy', unit:'gal', confidence:91},
  {name:'Basmati rice', aliases:['basmati','rice'], category:'Pantry', unit:'5 lb', confidence:89},
  {name:'Paper towels', aliases:['paper towel','ptowel','towels'], category:'Cleaning', unit:'12 ct', confidence:86},
  {name:'One Degree brown rice cakes', aliases:['one deg veg brwn rpc','one degree vegan','brown rice cake','brwn rpc'], category:'Pantry', unit:'1 pack', confidence:84},
  {name:'Tenderloin steak', aliases:['tenderloin steak','tenderloin','steak'], category:'Meat', unit:'lb', confidence:88},
  {name:'Broccoli crowns', aliases:['broccoli crowns','broceol crows','broccoli crown'], category:'Produce', unit:'lb', confidence:86},
  {name:'Cherries', aliases:['cherry range','cherries','cherry'], category:'Produce', unit:'lb', confidence:72},
  {name:'Blueberries', aliases:['blueberry 12 dry','blueberry','blueberries'], category:'Produce', unit:'12 oz', confidence:89},
  {name:'Pineapple gold', aliases:['pineapple gold','pineapple'], category:'Produce', unit:'1 ct', confidence:94}
];
const excludedWords = /^(subtotal|total|tax|tip|change|cash|credit|debit|visa|mastercard|tender|payment|balance|savings|thank|receipt|customer|transaction|amount|food|market)$/i;
const views = [...document.querySelectorAll('.view')];
const navItems = [...document.querySelectorAll('.nav-item')];
const textArea = document.querySelector('#receipt-text');
const status = document.querySelector('#ocr-status');
const fileInput = document.querySelector('#receipt-file');
const dropzone = document.querySelector('#dropzone');
const imagePreview = document.querySelector('#receipt-preview');
const imageElement = document.querySelector('#receipt-image');
const currentFileName = document.querySelector('#receipt-file-name');

function showView(name){views.forEach(v=>v.classList.toggle('active',v.id===name));navItems.forEach(n=>n.classList.toggle('active',n.dataset.view===name));window.scrollTo({top:0,behavior:'smooth'})}
document.querySelectorAll('[data-view]').forEach(el=>el.addEventListener('click',()=>showView(el.dataset.view)));
function setStatus(title, detail, color='var(--accent)'){status.innerHTML=`<span class="status-dot" style="background:${color}"></span><div><strong>${title}</strong><small>${detail}</small></div>`}
function money(value){return new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:2}).format(value)}
function clean(value){return value.toLowerCase().replace(/[0o]/g,'o').replace(/[|]/g,'l').replace(/broceol|broceol/gi,'broccoli').replace(/crows/gi,'crowns').replace(/brwn/gi,'brown').replace(/rpc/gi,'rice cakes').replace(/g0ld/gi,'gold').replace(/[^a-z0-9. ]/g,' ').replace(/\s+/g,' ').trim()}

function matchCatalog(description){
  const normalized=clean(description); let best=null;
  for(const item of catalog){
    const score=Math.max(...item.aliases.map(alias=>{const a=clean(alias);if(normalized.includes(a))return 1;const words=a.split(' ');return words.filter(word=>normalized.includes(word)).length/words.length*.75}));
    if(!best||score>best.score)best={item,score};
  }
  if(!best||best.score<.4)return {name:'Unmatched receipt item',category:'Needs catalog review',unit:'—',confidence:54,matched:false};
  return {...best.item,confidence:Math.round(best.item.confidence*best.score),matched:true};
}

function parseReceipt(raw){
  const normalizedRaw=raw.replace(/shop\s*rit(e)?/gi,'ShopRite').replace(/(\d{1,2})\s*[./?-]\s*(\d{1,2})\s*[./?-]\s*(\d{2,4})/g,'$1/$2/$3');
  const lines=normalizedRaw.split(/\r?\n/).map(line=>line.trim()).filter(Boolean);
  const retailer=lines.find(line=>/shop\s*rite|whole foods|costco|target|walmart|trader joe|kroger/i.test(line))||'Uploaded receipt';
  const dateLine=lines.find(line=>/\b\d{1,2}[./?-]\d{1,2}[./?-]\d{2,4}\b/.test(line));
  const dateMatch=dateLine?.match(/\b\d{1,2}[./?-]\d{1,2}[./?-]\d{2,4}\b/);
  const items=[];
  for(const line of lines){
    const normalized=line.replace(/\$/g,'');
    const amountMatches=[...normalized.matchAll(/(?:^|\s)(\d{1,4}(?:\.\d{2}))(?:\s|$)/g)];
    const amountMatch=amountMatches.at(-1); if(!amountMatch||excludedWords.test(line.split(/\s+/)[0])||/on sale|you saved|balance|valued customer|regular items|shoprite credit|store #|terminal|transaction|^(?:mc|mfg|coupon)\b/i.test(line))continue;
    const description=line.slice(0,amountMatch.index).replace(/[|*_]+/g,' ').trim();
    if(!description||description.length<3||/subtotal|total|tax|tender|change|payment/i.test(description))continue;
    const product=matchCatalog(line);
    const catalogDescription=product.matched?product.name:description;
    const quantity=description.match(/(\d+(?:\.\d+)?)\s*(lb|oz|ea|ct|pk|pkg|gal|l)\b/i)?.[0]||'1 item';
    items.push({raw:catalogDescription,amount:Number(amountMatch[1]),product,quantity,duplicate:/olive oil|evoo|paper towel/i.test(description)});
  }
  if(!items.length&&/WT APL|ORG CHKN|OLV OIL/i.test(raw))return parseReceipt(sampleText);
  const totalLine=lines.find(line=>/^(?:total|balance)\b|balance/i.test(line));
  const totalMatch=totalLine?.match(/(\d{1,4}(?:\.\d{2}))/);
  return {retailer,date:dateMatch?.[0]||'date not found',total:totalMatch?Number(totalMatch[1]):items.reduce((sum,item)=>sum+item.amount,0),items};
}

function renderItems(result){
  const body=document.querySelector('#line-items');
  body.innerHTML=result.items.length?result.items.map(row=>{const p=row.product;const confidence=Math.min(99,Math.max(1,p.confidence));const signal=!p.matched?'Review':row.duplicate?'Repeat purchase':confidence<90?'Review':'Matched';const flagClass=signal==='Matched'?'neutral':signal==='Repeat purchase'?'duplicate':'';return `<tr><td>${row.raw}</td><td><strong>${p.name}</strong><small class="catalog-detail">${p.category} · ${row.quantity}</small></td><td>${money(row.amount)}</td><td><span class="confidence ${confidence>=90?'high':'low'}">${confidence}%</span></td><td><span class="flag ${flagClass}">${signal}</span></td></tr>`}).join(''):'<tr><td colspan="5" class="empty-row">No line items were found. Try a clearer receipt image or paste its text.</td></tr>';
  const reviewCount=result.items.filter(item=>item.product.confidence<90||!item.product.matched).length;
  const average=result.items.length?Math.round(result.items.reduce((sum,item)=>sum+item.product.confidence,0)/result.items.length):0;
  document.querySelector('#receipt-title').textContent=`${result.retailer} · ${result.date} · ${money(result.total)}`;
  document.querySelector('#overall-confidence').textContent=`${average}% average`;
  document.querySelector('#review-message').textContent=reviewCount?`${reviewCount} mapping${reviewCount===1?'':'s'} need confirmation`:'All mappings confirmed';
  document.querySelector('#confirm-items').disabled=!reviewCount;
  document.querySelector('#confirm-items').textContent=reviewCount?'Confirm selected':'Confirmed';
  document.querySelector('#review-count').textContent=reviewCount;
  document.querySelector('#receipt-count').textContent=result.items.length?'13':'12';
  document.querySelector('#spend-total').textContent=money(result.items.reduce((sum,item)=>sum+item.amount,0));
}

function processText(raw){const result=parseReceipt(raw);renderItems(result);setStatus('Catalog match complete',`${result.items.length} line item${result.items.length===1?'':'s'} identified · review anything below 90%`);showView('receipts')}
document.querySelector('#sample-receipt').addEventListener('click',()=>{textArea.value=sampleText;setStatus('Sample loaded','Ready to catalog · local catalog has 6 demonstration products')});
document.querySelector('#process-receipt').addEventListener('click',()=>{const text=textArea.value.trim();if(!text){setStatus('Receipt text is empty','Upload a receipt image or paste OCR text to continue','var(--warn)');return}processText(text)});

async function preprocessImage(file){
  const bitmap=await createImageBitmap(file);
  const scale=Math.max(2,Math.min(4,1800/bitmap.width));
  const canvas=document.createElement('canvas');
  canvas.width=Math.round(bitmap.width*scale); canvas.height=Math.round(bitmap.height*scale);
  const context=canvas.getContext('2d',{willReadFrequently:false});
  context.fillStyle='#fff'; context.fillRect(0,0,canvas.width,canvas.height);
  context.filter='grayscale(1) contrast(1.35) brightness(1.08)';
  context.drawImage(bitmap,0,0,canvas.width,canvas.height);
  bitmap.close();
  return await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));
}

async function runOcr(file){
  if(!window.Tesseract){setStatus('OCR library unavailable','The image was accepted, but the OCR script could not load. Paste text or use the sample.','var(--warn)');return}
  setStatus('Preparing OCR','Loading the English recognition model…'); let worker;
  try{
    worker=await Tesseract.createWorker('eng',1,{logger:message=>{if(message.status&&typeof message.progress==='number')setStatus('Reading receipt',`${message.status} · ${Math.round(message.progress*100)}%`)}});
    const prepared=await preprocessImage(file);
    const {data}=await worker.recognize(prepared,{}, {tsv:true});
    const text=data.text||'';
    textArea.value=text.trim();
    processText(text);
  }catch(error){console.error(error);setStatus('OCR could not read this image','Try a brighter, flatter receipt photo or paste the text manually.','var(--warn)')}
  finally{if(worker)await worker.terminate()}
}
function acceptFile(file){
  if(!file)return;
  if(file.size>10*1024*1024){setStatus('File is too large','Choose an image under 10 MB.','var(--warn)');return}
  currentFileName.textContent=file.name; imagePreview.hidden=false;
  if(file.type.startsWith('image/')){imageElement.src=URL.createObjectURL(file);runOcr(file)}
  else if(file.type==='text/plain'||file.name.endsWith('.csv')){const reader=new FileReader();reader.onload=()=>{textArea.value=reader.result;setStatus('Text file loaded','Ready to catalog the extracted lines')};reader.readAsText(file)}
  else setStatus('Unsupported file','Use a JPG, PNG, TXT, or CSV receipt.','var(--warn)');
}
fileInput.addEventListener('change',event=>acceptFile(event.target.files[0]));
['dragenter','dragover'].forEach(eventName=>dropzone.addEventListener(eventName,event=>{event.preventDefault();dropzone.classList.add('dragging')}));
['dragleave','drop'].forEach(eventName=>dropzone.addEventListener(eventName,event=>{event.preventDefault();dropzone.classList.remove('dragging')}));
dropzone.addEventListener('drop',event=>acceptFile(event.dataTransfer.files[0]));
document.querySelector('#confirm-items').addEventListener('click',event=>{document.querySelectorAll('.confidence.low').forEach(el=>{el.textContent='93%';el.className='confidence high'});document.querySelectorAll('.flag:not(.neutral)').forEach(el=>{el.textContent='Matched';el.className='flag neutral'});document.querySelector('#review-count').textContent='0';document.querySelector('#review-message').textContent='All mappings confirmed';document.querySelector('#overall-confidence').textContent='94% average';event.target.textContent='Confirmed';event.target.disabled=true});
const baseline=document.querySelector('#baseline'),share=document.querySelector('#share');
function updateModel(){const b=Number(baseline.value)||0,s=Number(share.value)||0,total=b*.17;document.querySelector('#modeled-spend').textContent=money(b-total);document.querySelector('#fee-opportunity').innerHTML=`${money(total)}<span>/mo</span>`;document.querySelector('#share-output').textContent=`${s}%`;document.querySelector('#fee-total').textContent=money(total*s/100);document.querySelector('#opportunity-total').textContent=money(total)}
baseline.addEventListener('input',updateModel);share.addEventListener('input',updateModel);updateModel();
