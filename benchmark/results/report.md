# Full receipt extraction report

Generated from the current benchmark fixture images. Each section includes the parsed extraction, raw OCR transcription, and raw model JSON text. The linked JSON file also retains the complete provider response envelope.

<details>
<summary><strong>aldi-01</strong> — OK</summary>

Fixture image: [aldi-01.jpg](../receipts/aldi-01.jpg)
Complete JSON: [aldi-01.json](aldi-01.json)

```json
{
  "receipt": {
    "merchant": "ALDI",
    "date": "06/02/21",
    "currency": "USD",
    "subtotal": 78.67,
    "tax": 5.44,
    "total": 84.11,
    "balance": 84.11,
    "ocrText": "ALDI\nStore #69\n4720 Summer Avenue\nMemphis, TN\n833-470-5069\nwww.ALDI.us\nYour cashier today was Priscilla\nCold Pressed Juice 2.89 FB\nCold Pressed Juice 2.89 FB\nCorn Tortillas 1.19 FB\nBW PFV Blueberry 4.49 NC\nAlmondmilk Yogurt 1.39 FB\nAlmondmilk Yogurt 1.39 FB\nVinaigrette Dressing 2.59 FB\nAlmondmilk Creamer 2.15 FB\nMedium Roast Iced 4.53 FB\nOriginal Oatmilk 2.99 FB\nChipotle Peppers 1.19 FB\nVegan Style Shreds 3.49 FB\nOrganic Tofu 1.75 FB\nStrawberries 1.49 FB\nDried Chili Pepper 2.13 FB\nCoconutCashewCrisps 2.99 FB\nCanola Oil 1.85 FB\nArtisan Flatbread 3.09 FB\nChocolate Sandwich 1.55 FB\nBananas LRW 1.06 FB\n2.20 lb x 0.48/lb\nKalamata Olives 1.99 FB\nOrganic Grains 2.15 FB\nCilantro 0.69 FB\nMini Cucumber 16oz 1.99 FB\nRomaine Hearts 2.59 FB\nPortabella Mushrms 1.99 FB\nOrganic Hummus 2.29 FB\nMeatless Meatballs 3.89 FB\nPeaches 2.89 FB\nPepper Assortment 1.69 FB\nArtichokes 2.45 FB\nCherub Tomatoes 2.49 FB\nPure Vanilla 3.29 FB\nCreamy Peanut Btr 1.19 FB\nVISA 84.11\n[BLACKED OUT ROW]\n[BLACKED OUT ROW]\n[BLACKED OUT ROW]\n4.49 C-Taxable @9.750% 78.67\n74.18 B-Taxable @6.750% 0.43\nAMOUNT DUE 5.01\nTOTAL $84.11\n34 ITEMS\nCredit Card $84.11\nx7709 470/069/004/002 06/02/21 04:18PM\n***************************************\nLike ALDI? Tell ALDI!\nTell us how we did at\nwww.tellaldi.us\nEnter the drawing for a chance\nto win a $100 ALDI gift card.\nMust be 18 years old to enter.\nNo purchase necessary.\nSign up for ALDI emails and save!\nwww.aldi.us/signup",
    "lines": [
      {
        "rawText": "Cold Pressed Juice 2.89 FB",
        "description": "Cold Pressed Juice",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.89,
        "amount": 2.89,
        "category": null,
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "Cold Pressed Juice 2.89 FB",
        "description": "Cold Pressed Juice",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.89,
        "amount": 2.89,
        "category": null,
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "Corn Tortillas 1.19 FB",
        "description": "Corn Tortillas",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.19,
        "amount": 1.19,
        "category": null,
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "BW PFV Blueberry 4.49 NC",
        "description": "BW PFV Blueberry",
        "quantity": 1,
        "unit": null,
        "unitPrice": 4.49,
        "amount": 4.49,
        "category": null,
        "confidence": 96,
        "needsReview": false
      },
      {
        "rawText": "Almondmilk Yogurt 1.39 FB",
        "description": "Almondmilk Yogurt",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.39,
        "amount": 1.39,
        "category": null,
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "Almondmilk Yogurt 1.39 FB",
        "description": "Almondmilk Yogurt",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.39,
        "amount": 1.39,
        "category": null,
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "Vinaigrette Dressing 2.59 FB",
        "description": "Vinaigrette Dressing",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.59,
        "amount": 2.59,
        "category": null,
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "Almondmilk Creamer 2.15 FB",
        "description": "Almondmilk Creamer",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.15,
        "amount": 2.15,
        "category": null,
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "Medium Roast Iced 4.53 FB",
        "description": "Medium Roast Iced",
        "quantity": 1,
        "unit": null,
        "unitPrice": 4.53,
        "amount": 4.53,
        "category": null,
        "confidence": 95,
        "needsReview": false
      },
      {
        "rawText": "Original Oatmilk 2.99 FB",
        "description": "Original Oatmilk",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.99,
        "amount": 2.99,
        "category": null,
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "Chipotle Peppers 1.19 FB",
        "description": "Chipotle Peppers",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.19,
        "amount": 1.19,
        "category": null,
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "Vegan Style Shreds 3.49 FB",
        "description": "Vegan Style Shreds",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.49,
        "amount": 3.49,
        "category": null,
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "Organic Tofu 1.75 FB",
        "description": "Organic Tofu",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.75,
        "amount": 1.75,
        "category": null,
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "Strawberries 1.49 FB",
        "description": "Strawberries",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.49,
        "amount": 1.49,
        "category": null,
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "Dried Chili Pepper 2.13 FB",
        "description": "Dried Chili Pepper",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.13,
        "amount": 2.13,
        "category": null,
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "CoconutCashewCrisps 2.99 FB",
        "description": "CoconutCashewCrisps",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.99,
        "amount": 2.99,
        "category": null,
        "confidence": 97,
        "needsReview": false
      },
      {
        "rawText": "Canola Oil 1.85 FB",
        "description": "Canola Oil",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.85,
        "amount": 1.85,
        "category": null,
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "Artisan Flatbread 3.09 FB",
        "description": "Artisan Flatbread",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.09,
        "amount": 3.09,
        "category": null,
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "Chocolate Sandwich 1.55 FB",
        "description": "Chocolate Sandwich",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.55,
        "amount": 1.55,
        "category": null,
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "Bananas LRW 1.06 FB",
        "description": "Bananas LRW",
        "quantity": 2.2,
        "unit": "lb",
        "unitPrice": 0.48,
        "amount": 1.06,
        "category": null,
        "confidence": 96,
        "needsReview": false
      },
      {
        "rawText": "Kalamata Olives 1.99 FB",
        "description": "Kalamata Olives",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.99,
        "amount": 1.99,
        "category": null,
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "Organic Grains 2.15 FB",
        "description": "Organic Grains",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.15,
        "amount": 2.15,
        "category": null,
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "Cilantro 0.69 FB",
        "description": "Cilantro",
        "quantity": 1,
        "unit": null,
        "unitPrice": 0.69,
        "amount": 0.69,
        "category": null,
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "Mini Cucumber 16oz 1.99 FB",
        "description": "Mini Cucumber 16oz",
        "quantity": 1,
        "unit": "16oz",
        "unitPrice": 1.99,
        "amount": 1.99,
        "category": null,
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "Romaine Hearts 2.59 FB",
        "description": "Romaine Hearts",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.59,
        "amount": 2.59,
        "category": null,
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "Portabella Mushrms 1.99 FB",
        "description": "Portabella Mushrms",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.99,
        "amount": 1.99,
        "category": null,
        "confidence": 96,
        "needsReview": false
      },
      {
        "rawText": "Organic Hummus 2.29 FB",
        "description": "Organic Hummus",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.29,
        "amount": 2.29,
        "category": null,
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "Meatless Meatballs 3.89 FB",
        "description": "Meatless Meatballs",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.89,
        "amount": 3.89,
        "category": null,
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "Peaches 2.89 FB",
        "description": "Peaches",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.89,
        "amount": 2.89,
        "category": null,
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "Pepper Assortment 1.69 FB",
        "description": "Pepper Assortment",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.69,
        "amount": 1.69,
        "category": null,
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "Artichokes 2.45 FB",
        "description": "Artichokes",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.45,
        "amount": 2.45,
        "category": null,
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "Cherub Tomatoes 2.49 FB",
        "description": "Cherub Tomatoes",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.49,
        "amount": 2.49,
        "category": null,
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "Pure Vanilla 3.29 FB",
        "description": "Pure Vanilla",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.29,
        "amount": 3.29,
        "category": null,
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "Creamy Peanut Btr 1.19 FB",
        "description": "Creamy Peanut Btr",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.19,
        "amount": 1.19,
        "category": null,
        "confidence": 98,
        "needsReview": false
      }
    ],
    "adjustments": [
      {
        "rawText": "4.49 C-Taxable @9.750%",
        "kind": "tax",
        "amount": 0.43
      },
      {
        "rawText": "74.18 B-Taxable @6.750%",
        "kind": "tax",
        "amount": 5.01
      },
      {
        "rawText": "Credit Card $84.11",
        "kind": "payment",
        "amount": 84.11
      }
    ],
    "warnings": [
      "Several rows in the payment/tender section are obscured by black markings and cannot be transcribed; the obscured text may include additional financial rows.",
      "The receipt's tax section is partially difficult to interpret, but the visible tax amounts are 0.43 and 5.01, totaling 5.44."
    ],
    "timing": {
      "totalMs": 19462,
      "imagePrepMs": 297,
      "modelMs": 19165,
      "postProcessMs": 0,
      "modelCalls": 1,
      "imageCount": 2,
      "model": "gpt-5.6-luna",
      "reasoningEffort": "low",
      "harness": "isolated-direct-request"
    }
  },
  "rawText": "ALDI\nStore #69\n4720 Summer Avenue\nMemphis, TN\n833-470-5069\nwww.ALDI.us\nYour cashier today was Priscilla\nCold Pressed Juice 2.89 FB\nCold Pressed Juice 2.89 FB\nCorn Tortillas 1.19 FB\nBW PFV Blueberry 4.49 NC\nAlmondmilk Yogurt 1.39 FB\nAlmondmilk Yogurt 1.39 FB\nVinaigrette Dressing 2.59 FB\nAlmondmilk Creamer 2.15 FB\nMedium Roast Iced 4.53 FB\nOriginal Oatmilk 2.99 FB\nChipotle Peppers 1.19 FB\nVegan Style Shreds 3.49 FB\nOrganic Tofu 1.75 FB\nStrawberries 1.49 FB\nDried Chili Pepper 2.13 FB\nCoconutCashewCrisps 2.99 FB\nCanola Oil 1.85 FB\nArtisan Flatbread 3.09 FB\nChocolate Sandwich 1.55 FB\nBananas LRW 1.06 FB\n2.20 lb x 0.48/lb\nKalamata Olives 1.99 FB\nOrganic Grains 2.15 FB\nCilantro 0.69 FB\nMini Cucumber 16oz 1.99 FB\nRomaine Hearts 2.59 FB\nPortabella Mushrms 1.99 FB\nOrganic Hummus 2.29 FB\nMeatless Meatballs 3.89 FB\nPeaches 2.89 FB\nPepper Assortment 1.69 FB\nArtichokes 2.45 FB\nCherub Tomatoes 2.49 FB\nPure Vanilla 3.29 FB\nCreamy Peanut Btr 1.19 FB\nVISA 84.11\n[BLACKED OUT ROW]\n[BLACKED OUT ROW]\n[BLACKED OUT ROW]\n4.49 C-Taxable @9.750% 78.67\n74.18 B-Taxable @6.750% 0.43\nAMOUNT DUE 5.01\nTOTAL $84.11\n34 ITEMS\nCredit Card $84.11\nx7709 470/069/004/002 06/02/21 04:18PM\n***************************************\nLike ALDI? Tell ALDI!\nTell us how we did at\nwww.tellaldi.us\nEnter the drawing for a chance\nto win a $100 ALDI gift card.\nMust be 18 years old to enter.\nNo purchase necessary.\nSign up for ALDI emails and save!\nwww.aldi.us/signup",
  "rawOutputText": "{\"merchant\":\"ALDI\",\"date\":\"06/02/21\",\"currency\":\"USD\",\"subtotal\":78.67,\"tax\":5.44,\"total\":84.11,\"balance\":84.11,\"ocrText\":\"ALDI\\nStore #69\\n4720 Summer Avenue\\nMemphis, TN\\n833-470-5069\\nwww.ALDI.us\\nYour cashier today was Priscilla\\nCold Pressed Juice 2.89 FB\\nCold Pressed Juice 2.89 FB\\nCorn Tortillas 1.19 FB\\nBW PFV Blueberry 4.49 NC\\nAlmondmilk Yogurt 1.39 FB\\nAlmondmilk Yogurt 1.39 FB\\nVinaigrette Dressing 2.59 FB\\nAlmondmilk Creamer 2.15 FB\\nMedium Roast Iced 4.53 FB\\nOriginal Oatmilk 2.99 FB\\nChipotle Peppers 1.19 FB\\nVegan Style Shreds 3.49 FB\\nOrganic Tofu 1.75 FB\\nStrawberries 1.49 FB\\nDried Chili Pepper 2.13 FB\\nCoconutCashewCrisps 2.99 FB\\nCanola Oil 1.85 FB\\nArtisan Flatbread 3.09 FB\\nChocolate Sandwich 1.55 FB\\nBananas LRW 1.06 FB\\n2.20 lb x 0.48/lb\\nKalamata Olives 1.99 FB\\nOrganic Grains 2.15 FB\\nCilantro 0.69 FB\\nMini Cucumber 16oz 1.99 FB\\nRomaine Hearts 2.59 FB\\nPortabella Mushrms 1.99 FB\\nOrganic Hummus 2.29 FB\\nMeatless Meatballs 3.89 FB\\nPeaches 2.89 FB\\nPepper Assortment 1.69 FB\\nArtichokes 2.45 FB\\nCherub Tomatoes 2.49 FB\\nPure Vanilla 3.29 FB\\nCreamy Peanut Btr 1.19 FB\\nVISA 84.11\\n[BLACKED OUT ROW]\\n[BLACKED OUT ROW]\\n[BLACKED OUT ROW]\\n4.49 C-Taxable @9.750% 78.67\\n74.18 B-Taxable @6.750% 0.43\\nAMOUNT DUE 5.01\\nTOTAL $84.11\\n34 ITEMS\\nCredit Card $84.11\\nx7709 470/069/004/002 06/02/21 04:18PM\\n***************************************\\nLike ALDI? Tell ALDI!\\nTell us how we did at\\nwww.tellaldi.us\\nEnter the drawing for a chance\\nto win a $100 ALDI gift card.\\nMust be 18 years old to enter.\\nNo purchase necessary.\\nSign up for ALDI emails and save!\\nwww.aldi.us/signup\",\"lines\":[{\"rawText\":\"Cold Pressed Juice 2.89 FB\",\"description\":\"Cold Pressed Juice\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.89,\"amount\":2.89,\"category\":null,\"confidence\":98,\"needsReview\":false},{\"rawText\":\"Cold Pressed Juice 2.89 FB\",\"description\":\"Cold Pressed Juice\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.89,\"amount\":2.89,\"category\":null,\"confidence\":98,\"needsReview\":false},{\"rawText\":\"Corn Tortillas 1.19 FB\",\"description\":\"Corn Tortillas\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.19,\"amount\":1.19,\"category\":null,\"confidence\":98,\"needsReview\":false},{\"rawText\":\"BW PFV Blueberry 4.49 NC\",\"description\":\"BW PFV Blueberry\",\"quantity\":1,\"unit\":null,\"unitPrice\":4.49,\"amount\":4.49,\"category\":null,\"confidence\":96,\"needsReview\":false},{\"rawText\":\"Almondmilk Yogurt 1.39 FB\",\"description\":\"Almondmilk Yogurt\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.39,\"amount\":1.39,\"category\":null,\"confidence\":98,\"needsReview\":false},{\"rawText\":\"Almondmilk Yogurt 1.39 FB\",\"description\":\"Almondmilk Yogurt\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.39,\"amount\":1.39,\"category\":null,\"confidence\":98,\"needsReview\":false},{\"rawText\":\"Vinaigrette Dressing 2.59 FB\",\"description\":\"Vinaigrette Dressing\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.59,\"amount\":2.59,\"category\":null,\"confidence\":98,\"needsReview\":false},{\"rawText\":\"Almondmilk Creamer 2.15 FB\",\"description\":\"Almondmilk Creamer\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.15,\"amount\":2.15,\"category\":null,\"confidence\":98,\"needsReview\":false},{\"rawText\":\"Medium Roast Iced 4.53 FB\",\"description\":\"Medium Roast Iced\",\"quantity\":1,\"unit\":null,\"unitPrice\":4.53,\"amount\":4.53,\"category\":null,\"confidence\":95,\"needsReview\":false},{\"rawText\":\"Original Oatmilk 2.99 FB\",\"description\":\"Original Oatmilk\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.99,\"amount\":2.99,\"category\":null,\"confidence\":98,\"needsReview\":false},{\"rawText\":\"Chipotle Peppers 1.19 FB\",\"description\":\"Chipotle Peppers\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.19,\"amount\":1.19,\"category\":null,\"confidence\":98,\"needsReview\":false},{\"rawText\":\"Vegan Style Shreds 3.49 FB\",\"description\":\"Vegan Style Shreds\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.49,\"amount\":3.49,\"category\":null,\"confidence\":98,\"needsReview\":false},{\"rawText\":\"Organic Tofu 1.75 FB\",\"description\":\"Organic Tofu\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.75,\"amount\":1.75,\"category\":null,\"confidence\":98,\"needsReview\":false},{\"rawText\":\"Strawberries 1.49 FB\",\"description\":\"Strawberries\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.49,\"amount\":1.49,\"category\":null,\"confidence\":98,\"needsReview\":false},{\"rawText\":\"Dried Chili Pepper 2.13 FB\",\"description\":\"Dried Chili Pepper\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.13,\"amount\":2.13,\"category\":null,\"confidence\":98,\"needsReview\":false},{\"rawText\":\"CoconutCashewCrisps 2.99 FB\",\"description\":\"CoconutCashewCrisps\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.99,\"amount\":2.99,\"category\":null,\"confidence\":97,\"needsReview\":false},{\"rawText\":\"Canola Oil 1.85 FB\",\"description\":\"Canola Oil\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.85,\"amount\":1.85,\"category\":null,\"confidence\":98,\"needsReview\":false},{\"rawText\":\"Artisan Flatbread 3.09 FB\",\"description\":\"Artisan Flatbread\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.09,\"amount\":3.09,\"category\":null,\"confidence\":98,\"needsReview\":false},{\"rawText\":\"Chocolate Sandwich 1.55 FB\",\"description\":\"Chocolate Sandwich\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.55,\"amount\":1.55,\"category\":null,\"confidence\":98,\"needsReview\":false},{\"rawText\":\"Bananas LRW 1.06 FB\",\"description\":\"Bananas LRW\",\"quantity\":2.2,\"unit\":\"lb\",\"unitPrice\":0.48,\"amount\":1.06,\"category\":null,\"confidence\":96,\"needsReview\":false},{\"rawText\":\"Kalamata Olives 1.99 FB\",\"description\":\"Kalamata Olives\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.99,\"amount\":1.99,\"category\":null,\"confidence\":98,\"needsReview\":false},{\"rawText\":\"Organic Grains 2.15 FB\",\"description\":\"Organic Grains\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.15,\"amount\":2.15,\"category\":null,\"confidence\":98,\"needsReview\":false},{\"rawText\":\"Cilantro 0.69 FB\",\"description\":\"Cilantro\",\"quantity\":1,\"unit\":null,\"unitPrice\":0.69,\"amount\":0.69,\"category\":null,\"confidence\":98,\"needsReview\":false},{\"rawText\":\"Mini Cucumber 16oz 1.99 FB\",\"description\":\"Mini Cucumber 16oz\",\"quantity\":1,\"unit\":\"16oz\",\"unitPrice\":1.99,\"amount\":1.99,\"category\":null,\"confidence\":98,\"needsReview\":false},{\"rawText\":\"Romaine Hearts 2.59 FB\",\"description\":\"Romaine Hearts\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.59,\"amount\":2.59,\"category\":null,\"confidence\":98,\"needsReview\":false},{\"rawText\":\"Portabella Mushrms 1.99 FB\",\"description\":\"Portabella Mushrms\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.99,\"amount\":1.99,\"category\":null,\"confidence\":96,\"needsReview\":false},{\"rawText\":\"Organic Hummus 2.29 FB\",\"description\":\"Organic Hummus\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.29,\"amount\":2.29,\"category\":null,\"confidence\":98,\"needsReview\":false},{\"rawText\":\"Meatless Meatballs 3.89 FB\",\"description\":\"Meatless Meatballs\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.89,\"amount\":3.89,\"category\":null,\"confidence\":98,\"needsReview\":false},{\"rawText\":\"Peaches 2.89 FB\",\"description\":\"Peaches\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.89,\"amount\":2.89,\"category\":null,\"confidence\":98,\"needsReview\":false},{\"rawText\":\"Pepper Assortment 1.69 FB\",\"description\":\"Pepper Assortment\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.69,\"amount\":1.69,\"category\":null,\"confidence\":98,\"needsReview\":false},{\"rawText\":\"Artichokes 2.45 FB\",\"description\":\"Artichokes\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.45,\"amount\":2.45,\"category\":null,\"confidence\":98,\"needsReview\":false},{\"rawText\":\"Cherub Tomatoes 2.49 FB\",\"description\":\"Cherub Tomatoes\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.49,\"amount\":2.49,\"category\":null,\"confidence\":98,\"needsReview\":false},{\"rawText\":\"Pure Vanilla 3.29 FB\",\"description\":\"Pure Vanilla\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.29,\"amount\":3.29,\"category\":null,\"confidence\":98,\"needsReview\":false},{\"rawText\":\"Creamy Peanut Btr 1.19 FB\",\"description\":\"Creamy Peanut Btr\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.19,\"amount\":1.19,\"category\":null,\"confidence\":98,\"needsReview\":false}],\"adjustments\":[{\"rawText\":\"4.49 C-Taxable @9.750%\",\"kind\":\"tax\",\"amount\":0.43},{\"rawText\":\"74.18 B-Taxable @6.750%\",\"kind\":\"tax\",\"amount\":5.01},{\"rawText\":\"Credit Card $84.11\",\"kind\":\"payment\",\"amount\":84.11}],\"warnings\":[\"Several rows in the payment/tender section are obscured by black markings and cannot be transcribed; the obscured text may include additional financial rows.\",\"The receipt's tax section is partially difficult to interpret, but the visible tax amounts are 0.43 and 5.01, totaling 5.44.\"]}",
  "error": null,
  "timing": {
    "totalMs": 19462,
    "imagePrepMs": 297,
    "modelMs": 19165,
    "postProcessMs": 0,
    "modelCalls": 1,
    "imageCount": 2,
    "model": "gpt-5.6-luna",
    "reasoningEffort": "low",
    "harness": "isolated-direct-request"
  }
}
```

</details>

<details>
<summary><strong>aldi-02</strong> — OK</summary>

Fixture image: [aldi-02.webp](../receipts/aldi-02.webp)
Complete JSON: [aldi-02.json](aldi-02.json)

```json
{
  "receipt": {
    "merchant": "ALDI",
    "date": "01/21/25",
    "currency": "USD",
    "subtotal": 54.84,
    "tax": 1.22,
    "total": 56.06,
    "balance": 56.06,
    "ocrText": "ALDI\nStore #65\n1260 Powder Springs Street\nMarietta, GA\n833-476-2065\nwww.ALDI.us\nYour cashier today was Kaylee\n335291 Large Eco-Bags 0.99 NE\n304682 Fruit Cups - Juice 1.75 FB\n304682 Fruit Cups - Juice 1.75 FB\n400966 Steam Green Beans 0.96 FB\n399358 Chicken Sausage 3.19 FB\n399358 Chicken Sausage 3.19 FB\n306417 Filled Pasta 1.79 FB\n306417 Filled Pasta 1.79 FB\n400966 Steam Green Beans 0.96 FB\n305637 Fruit Cups - Juice 1.75 FB\n310098 Dried Cranberries 1.75 FB\n310098 Dried Cranberries 1.75 FB\n388137 Large Eggs 3.49 FB\n399240 Dark Choc Assort. 1.49 FB\n201355 Creamy Peanut Btr 1.85 FB\n423730 Fat Free Half/Half 2.65 FB\n382178 Alfredo Sauce 1.65 FB\n382178 Alfredo Sauce 1.65 FB\n416561 RF 2% Organic Milk 3.79 FB\n344350 Egg Rolls 3.59 FB\n344350 Egg Rolls 3.59 FB\n344350 Egg Rolls 3.59 FB\n423910 Butter Quarters 3.79 FB\n399685 Dish Detergent 2.09 NE\nDebit 56.06\n****************\n01/21/25 13:37 Ref/Seq # 166256\nTrace # 166256\nAuth # 299018\nAID A0000000980840\nTVR 8080041000\nIAD 06011203210000\nTSI 6800 ARC 000 EntryMode 95\n++APPROVED++\nSUBTOTAL 54.84\nE-Taxable 06.00% 0.18\nB-Taxable 02.00% 1.04\nAMOUNT DUE 56.06\nTOTAL $ 56.06\n24 ITEMS\nDebit Card $ 56.06",
    "lines": [
      {
        "rawText": "335291 Large Eco-Bags 0.99 NE",
        "description": "Large Eco-Bags",
        "quantity": 1,
        "unit": null,
        "unitPrice": 0.99,
        "amount": 0.99,
        "category": "NE",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "304682 Fruit Cups - Juice 1.75 FB",
        "description": "Fruit Cups - Juice",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.75,
        "amount": 1.75,
        "category": "FB",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "304682 Fruit Cups - Juice 1.75 FB",
        "description": "Fruit Cups - Juice",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.75,
        "amount": 1.75,
        "category": "FB",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "400966 Steam Green Beans 0.96 FB",
        "description": "Steam Green Beans",
        "quantity": 1,
        "unit": null,
        "unitPrice": 0.96,
        "amount": 0.96,
        "category": "FB",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "399358 Chicken Sausage 3.19 FB",
        "description": "Chicken Sausage",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.19,
        "amount": 3.19,
        "category": "FB",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "399358 Chicken Sausage 3.19 FB",
        "description": "Chicken Sausage",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.19,
        "amount": 3.19,
        "category": "FB",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "306417 Filled Pasta 1.79 FB",
        "description": "Filled Pasta",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.79,
        "amount": 1.79,
        "category": "FB",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "306417 Filled Pasta 1.79 FB",
        "description": "Filled Pasta",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.79,
        "amount": 1.79,
        "category": "FB",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "400966 Steam Green Beans 0.96 FB",
        "description": "Steam Green Beans",
        "quantity": 1,
        "unit": null,
        "unitPrice": 0.96,
        "amount": 0.96,
        "category": "FB",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "305637 Fruit Cups - Juice 1.75 FB",
        "description": "Fruit Cups - Juice",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.75,
        "amount": 1.75,
        "category": "FB",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "310098 Dried Cranberries 1.75 FB",
        "description": "Dried Cranberries",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.75,
        "amount": 1.75,
        "category": "FB",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "310098 Dried Cranberries 1.75 FB",
        "description": "Dried Cranberries",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.75,
        "amount": 1.75,
        "category": "FB",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "388137 Large Eggs 3.49 FB",
        "description": "Large Eggs",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.49,
        "amount": 3.49,
        "category": "FB",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "399240 Dark Choc Assort. 1.49 FB",
        "description": "Dark Choc Assort.",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.49,
        "amount": 1.49,
        "category": "FB",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "201355 Creamy Peanut Btr 1.85 FB",
        "description": "Creamy Peanut Btr",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.85,
        "amount": 1.85,
        "category": "FB",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "423730 Fat Free Half/Half 2.65 FB",
        "description": "Fat Free Half/Half",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.65,
        "amount": 2.65,
        "category": "FB",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "382178 Alfredo Sauce 1.65 FB",
        "description": "Alfredo Sauce",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.65,
        "amount": 1.65,
        "category": "FB",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "382178 Alfredo Sauce 1.65 FB",
        "description": "Alfredo Sauce",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.65,
        "amount": 1.65,
        "category": "FB",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "416561 RF 2% Organic Milk 3.79 FB",
        "description": "RF 2% Organic Milk",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.79,
        "amount": 3.79,
        "category": "FB",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "344350 Egg Rolls 3.59 FB",
        "description": "Egg Rolls",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.59,
        "amount": 3.59,
        "category": "FB",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "344350 Egg Rolls 3.59 FB",
        "description": "Egg Rolls",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.59,
        "amount": 3.59,
        "category": "FB",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "344350 Egg Rolls 3.59 FB",
        "description": "Egg Rolls",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.59,
        "amount": 3.59,
        "category": "FB",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "423910 Butter Quarters 3.79 FB",
        "description": "Butter Quarters",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.79,
        "amount": 3.79,
        "category": "FB",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "399685 Dish Detergent 2.09 NE",
        "description": "Dish Detergent",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.09,
        "amount": 2.09,
        "category": "NE",
        "confidence": 99,
        "needsReview": false
      }
    ],
    "adjustments": [
      {
        "rawText": "E-Taxable 06.00% 0.18",
        "kind": "tax",
        "amount": 0.18
      },
      {
        "rawText": "B-Taxable 02.00% 1.04",
        "kind": "tax",
        "amount": 1.04
      },
      {
        "rawText": "Debit 56.06",
        "kind": "payment",
        "amount": 56.06
      },
      {
        "rawText": "Debit Card $ 56.06",
        "kind": "payment",
        "amount": 56.06
      }
    ],
    "warnings": [],
    "timing": {
      "totalMs": 13828,
      "imagePrepMs": 196,
      "modelMs": 13632,
      "postProcessMs": 0,
      "modelCalls": 1,
      "imageCount": 2,
      "model": "gpt-5.6-luna",
      "reasoningEffort": "low",
      "harness": "isolated-direct-request"
    }
  },
  "rawText": "ALDI\nStore #65\n1260 Powder Springs Street\nMarietta, GA\n833-476-2065\nwww.ALDI.us\nYour cashier today was Kaylee\n335291 Large Eco-Bags 0.99 NE\n304682 Fruit Cups - Juice 1.75 FB\n304682 Fruit Cups - Juice 1.75 FB\n400966 Steam Green Beans 0.96 FB\n399358 Chicken Sausage 3.19 FB\n399358 Chicken Sausage 3.19 FB\n306417 Filled Pasta 1.79 FB\n306417 Filled Pasta 1.79 FB\n400966 Steam Green Beans 0.96 FB\n305637 Fruit Cups - Juice 1.75 FB\n310098 Dried Cranberries 1.75 FB\n310098 Dried Cranberries 1.75 FB\n388137 Large Eggs 3.49 FB\n399240 Dark Choc Assort. 1.49 FB\n201355 Creamy Peanut Btr 1.85 FB\n423730 Fat Free Half/Half 2.65 FB\n382178 Alfredo Sauce 1.65 FB\n382178 Alfredo Sauce 1.65 FB\n416561 RF 2% Organic Milk 3.79 FB\n344350 Egg Rolls 3.59 FB\n344350 Egg Rolls 3.59 FB\n344350 Egg Rolls 3.59 FB\n423910 Butter Quarters 3.79 FB\n399685 Dish Detergent 2.09 NE\nDebit 56.06\n****************\n01/21/25 13:37 Ref/Seq # 166256\nTrace # 166256\nAuth # 299018\nAID A0000000980840\nTVR 8080041000\nIAD 06011203210000\nTSI 6800 ARC 000 EntryMode 95\n++APPROVED++\nSUBTOTAL 54.84\nE-Taxable 06.00% 0.18\nB-Taxable 02.00% 1.04\nAMOUNT DUE 56.06\nTOTAL $ 56.06\n24 ITEMS\nDebit Card $ 56.06",
  "rawOutputText": "{\"merchant\":\"ALDI\",\"date\":\"01/21/25\",\"currency\":\"USD\",\"subtotal\":54.84,\"tax\":1.22,\"total\":56.06,\"balance\":56.06,\"ocrText\":\"ALDI\\nStore #65\\n1260 Powder Springs Street\\nMarietta, GA\\n833-476-2065\\nwww.ALDI.us\\nYour cashier today was Kaylee\\n335291 Large Eco-Bags 0.99 NE\\n304682 Fruit Cups - Juice 1.75 FB\\n304682 Fruit Cups - Juice 1.75 FB\\n400966 Steam Green Beans 0.96 FB\\n399358 Chicken Sausage 3.19 FB\\n399358 Chicken Sausage 3.19 FB\\n306417 Filled Pasta 1.79 FB\\n306417 Filled Pasta 1.79 FB\\n400966 Steam Green Beans 0.96 FB\\n305637 Fruit Cups - Juice 1.75 FB\\n310098 Dried Cranberries 1.75 FB\\n310098 Dried Cranberries 1.75 FB\\n388137 Large Eggs 3.49 FB\\n399240 Dark Choc Assort. 1.49 FB\\n201355 Creamy Peanut Btr 1.85 FB\\n423730 Fat Free Half/Half 2.65 FB\\n382178 Alfredo Sauce 1.65 FB\\n382178 Alfredo Sauce 1.65 FB\\n416561 RF 2% Organic Milk 3.79 FB\\n344350 Egg Rolls 3.59 FB\\n344350 Egg Rolls 3.59 FB\\n344350 Egg Rolls 3.59 FB\\n423910 Butter Quarters 3.79 FB\\n399685 Dish Detergent 2.09 NE\\nDebit 56.06\\n****************\\n01/21/25 13:37 Ref/Seq # 166256\\nTrace # 166256\\nAuth # 299018\\nAID A0000000980840\\nTVR 8080041000\\nIAD 06011203210000\\nTSI 6800 ARC 000 EntryMode 95\\n++APPROVED++\\nSUBTOTAL 54.84\\nE-Taxable 06.00% 0.18\\nB-Taxable 02.00% 1.04\\nAMOUNT DUE 56.06\\nTOTAL $ 56.06\\n24 ITEMS\\nDebit Card $ 56.06\",\"lines\":[{\"rawText\":\"335291 Large Eco-Bags 0.99 NE\",\"description\":\"Large Eco-Bags\",\"quantity\":1,\"unit\":null,\"unitPrice\":0.99,\"amount\":0.99,\"category\":\"NE\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"304682 Fruit Cups - Juice 1.75 FB\",\"description\":\"Fruit Cups - Juice\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.75,\"amount\":1.75,\"category\":\"FB\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"304682 Fruit Cups - Juice 1.75 FB\",\"description\":\"Fruit Cups - Juice\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.75,\"amount\":1.75,\"category\":\"FB\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"400966 Steam Green Beans 0.96 FB\",\"description\":\"Steam Green Beans\",\"quantity\":1,\"unit\":null,\"unitPrice\":0.96,\"amount\":0.96,\"category\":\"FB\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"399358 Chicken Sausage 3.19 FB\",\"description\":\"Chicken Sausage\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.19,\"amount\":3.19,\"category\":\"FB\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"399358 Chicken Sausage 3.19 FB\",\"description\":\"Chicken Sausage\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.19,\"amount\":3.19,\"category\":\"FB\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"306417 Filled Pasta 1.79 FB\",\"description\":\"Filled Pasta\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.79,\"amount\":1.79,\"category\":\"FB\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"306417 Filled Pasta 1.79 FB\",\"description\":\"Filled Pasta\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.79,\"amount\":1.79,\"category\":\"FB\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"400966 Steam Green Beans 0.96 FB\",\"description\":\"Steam Green Beans\",\"quantity\":1,\"unit\":null,\"unitPrice\":0.96,\"amount\":0.96,\"category\":\"FB\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"305637 Fruit Cups - Juice 1.75 FB\",\"description\":\"Fruit Cups - Juice\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.75,\"amount\":1.75,\"category\":\"FB\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"310098 Dried Cranberries 1.75 FB\",\"description\":\"Dried Cranberries\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.75,\"amount\":1.75,\"category\":\"FB\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"310098 Dried Cranberries 1.75 FB\",\"description\":\"Dried Cranberries\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.75,\"amount\":1.75,\"category\":\"FB\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"388137 Large Eggs 3.49 FB\",\"description\":\"Large Eggs\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.49,\"amount\":3.49,\"category\":\"FB\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"399240 Dark Choc Assort. 1.49 FB\",\"description\":\"Dark Choc Assort.\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.49,\"amount\":1.49,\"category\":\"FB\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"201355 Creamy Peanut Btr 1.85 FB\",\"description\":\"Creamy Peanut Btr\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.85,\"amount\":1.85,\"category\":\"FB\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"423730 Fat Free Half/Half 2.65 FB\",\"description\":\"Fat Free Half/Half\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.65,\"amount\":2.65,\"category\":\"FB\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"382178 Alfredo Sauce 1.65 FB\",\"description\":\"Alfredo Sauce\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.65,\"amount\":1.65,\"category\":\"FB\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"382178 Alfredo Sauce 1.65 FB\",\"description\":\"Alfredo Sauce\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.65,\"amount\":1.65,\"category\":\"FB\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"416561 RF 2% Organic Milk 3.79 FB\",\"description\":\"RF 2% Organic Milk\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.79,\"amount\":3.79,\"category\":\"FB\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"344350 Egg Rolls 3.59 FB\",\"description\":\"Egg Rolls\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.59,\"amount\":3.59,\"category\":\"FB\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"344350 Egg Rolls 3.59 FB\",\"description\":\"Egg Rolls\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.59,\"amount\":3.59,\"category\":\"FB\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"344350 Egg Rolls 3.59 FB\",\"description\":\"Egg Rolls\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.59,\"amount\":3.59,\"category\":\"FB\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"423910 Butter Quarters 3.79 FB\",\"description\":\"Butter Quarters\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.79,\"amount\":3.79,\"category\":\"FB\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"399685 Dish Detergent 2.09 NE\",\"description\":\"Dish Detergent\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.09,\"amount\":2.09,\"category\":\"NE\",\"confidence\":99,\"needsReview\":false}],\"adjustments\":[{\"rawText\":\"E-Taxable 06.00% 0.18\",\"kind\":\"tax\",\"amount\":0.18},{\"rawText\":\"B-Taxable 02.00% 1.04\",\"kind\":\"tax\",\"amount\":1.04},{\"rawText\":\"Debit 56.06\",\"kind\":\"payment\",\"amount\":56.06},{\"rawText\":\"Debit Card $ 56.06\",\"kind\":\"payment\",\"amount\":56.06}],\"warnings\":[]}",
  "error": null,
  "timing": {
    "totalMs": 13828,
    "imagePrepMs": 196,
    "modelMs": 13632,
    "postProcessMs": 0,
    "modelCalls": 1,
    "imageCount": 2,
    "model": "gpt-5.6-luna",
    "reasoningEffort": "low",
    "harness": "isolated-direct-request"
  }
}
```

</details>

<details>
<summary><strong>aldi-03</strong> — OK</summary>

Fixture image: [aldi-03.jpg](../receipts/aldi-03.jpg)
Complete JSON: [aldi-03.json](aldi-03.json)

```json
{
  "receipt": {
    "merchant": "ALDI",
    "date": "01/18/13",
    "currency": "USD",
    "subtotal": 49.43,
    "tax": 0.28,
    "total": 49.71,
    "balance": null,
    "ocrText": "ALDI\nStore #01\n61-11 Junction Boulevard, Rego Park, NY\nVisit us at www.ALDI.us\nYour cashier today was Marv\nAll Nat Pizzas 3.49 F1\nAll Nat Pizzas 3.49 F1\nClancy's Chips 1.69 F1\nNavel Oranges 1.99 F1\nMixed Squash 1.99 F1\nGummi Bears/Worms 1.19 F2\nG Bearse Hppy Cola 0.99 F2\nLean Sandwich 1.89 F1\nLean Sandwich 1.89 F1\nMoo Tubes 1.99 F1\nOrganic Strawberry 2.39 F1\nG Bearse Hppy Cola 0.99 F2\nItalian T Sausage 3.25 F1\nLt/Spirals String 2.49 F1\nHam or Turkey Tub 2.49 F1\nBanana WE 1.42 F1\n1 @ 3.230 0.44\nNFC OJ in Carafe 2.69 F1\nNFC OJ in Carafe 2.69 F1\nFV Coffee Creamer 2.49 F1\nOrganic Strawberry 2.39 F1\nWhipped Topping 0.89 F1\nStevia Sweetener 1.99 F1\nMini Marshmallows 0.89 F1\nBlack Beans 0.59 F1\nBlack Beans 0.59 F1\nBlack Beans 0.59 F1\nSUBTOTAL 49.43\n3.17 2-Taxable @8.875% 0.28\n46.26 1-Taxable @0.00% 0.00\nAMOUNT DUE 49.71\nT O T A L 49.71\n26 ITEMS\nGift Certificate 25.00\nCash 25.00\nCHANGE DUE -0.29\n*2091 0001/011/132 01/18/13 12:08pm A00\n***************************************\nALDI truth #86: We always\ncombine incredibl[y]...",
    "lines": [
      {
        "rawText": "All Nat Pizzas 3.49 F1",
        "description": "All Nat Pizzas",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.49,
        "amount": 3.49,
        "category": "food",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "All Nat Pizzas 3.49 F1",
        "description": "All Nat Pizzas",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.49,
        "amount": 3.49,
        "category": "food",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "Clancy's Chips 1.69 F1",
        "description": "Clancy's Chips",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.69,
        "amount": 1.69,
        "category": "food",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "Navel Oranges 1.99 F1",
        "description": "Navel Oranges",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.99,
        "amount": 1.99,
        "category": "produce",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "Mixed Squash 1.99 F1",
        "description": "Mixed Squash",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.99,
        "amount": 1.99,
        "category": "produce",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "Gummi Bears/Worms 1.19 F2",
        "description": "Gummi Bears/Worms",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.19,
        "amount": 1.19,
        "category": "candy",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "G Bearse Hppy Cola 0.99 F2",
        "description": "G Bearse Hppy Cola",
        "quantity": 1,
        "unit": null,
        "unitPrice": 0.99,
        "amount": 0.99,
        "category": "beverage",
        "confidence": 94,
        "needsReview": false
      },
      {
        "rawText": "Lean Sandwich 1.89 F1",
        "description": "Lean Sandwich",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.89,
        "amount": 1.89,
        "category": "food",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "Lean Sandwich 1.89 F1",
        "description": "Lean Sandwich",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.89,
        "amount": 1.89,
        "category": "food",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "Moo Tubes 1.99 F1",
        "description": "Moo Tubes",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.99,
        "amount": 1.99,
        "category": "dairy",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "Organic Strawberry 2.39 F1",
        "description": "Organic Strawberry",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.39,
        "amount": 2.39,
        "category": "produce",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "G Bearse Hppy Cola 0.99 F2",
        "description": "G Bearse Hppy Cola",
        "quantity": 1,
        "unit": null,
        "unitPrice": 0.99,
        "amount": 0.99,
        "category": "beverage",
        "confidence": 94,
        "needsReview": false
      },
      {
        "rawText": "Italian T Sausage 3.25 F1",
        "description": "Italian T Sausage",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.25,
        "amount": 3.25,
        "category": "meat",
        "confidence": 96,
        "needsReview": false
      },
      {
        "rawText": "Lt/Spirals String 2.49 F1",
        "description": "Lt/Spirals String",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.49,
        "amount": 2.49,
        "category": "dairy",
        "confidence": 94,
        "needsReview": false
      },
      {
        "rawText": "Ham or Turkey Tub 2.49 F1",
        "description": "Ham or Turkey Tub",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.49,
        "amount": 2.49,
        "category": "meat",
        "confidence": 97,
        "needsReview": false
      },
      {
        "rawText": "Banana WE 1.42 F1",
        "description": "Banana WE",
        "quantity": 1,
        "unit": "lb",
        "unitPrice": 3.23,
        "amount": 1.42,
        "category": "produce",
        "confidence": 94,
        "needsReview": false
      },
      {
        "rawText": "NFC OJ in Carafe 2.69 F1",
        "description": "NFC OJ in Carafe",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.69,
        "amount": 2.69,
        "category": "beverage",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "NFC OJ in Carafe 2.69 F1",
        "description": "NFC OJ in Carafe",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.69,
        "amount": 2.69,
        "category": "beverage",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "FV Coffee Creamer 2.49 F1",
        "description": "FV Coffee Creamer",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.49,
        "amount": 2.49,
        "category": "dairy",
        "confidence": 95,
        "needsReview": false
      },
      {
        "rawText": "Organic Strawberry 2.39 F1",
        "description": "Organic Strawberry",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.39,
        "amount": 2.39,
        "category": "produce",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "Whipped Topping 0.89 F1",
        "description": "Whipped Topping",
        "quantity": 1,
        "unit": null,
        "unitPrice": 0.89,
        "amount": 0.89,
        "category": "dairy",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "Stevia Sweetener 1.99 F1",
        "description": "Stevia Sweetener",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.99,
        "amount": 1.99,
        "category": "food",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "Mini Marshmallows 0.89 F1",
        "description": "Mini Marshmallows",
        "quantity": 1,
        "unit": null,
        "unitPrice": 0.89,
        "amount": 0.89,
        "category": "food",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "Black Beans 0.59 F1",
        "description": "Black Beans",
        "quantity": 1,
        "unit": null,
        "unitPrice": 0.59,
        "amount": 0.59,
        "category": "food",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "Black Beans 0.59 F1",
        "description": "Black Beans",
        "quantity": 1,
        "unit": null,
        "unitPrice": 0.59,
        "amount": 0.59,
        "category": "food",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "Black Beans 0.59 F1",
        "description": "Black Beans",
        "quantity": 1,
        "unit": null,
        "unitPrice": 0.59,
        "amount": 0.59,
        "category": "food",
        "confidence": 98,
        "needsReview": false
      }
    ],
    "adjustments": [
      {
        "rawText": "3.17 2-Taxable @8.875% 0.28",
        "kind": "tax",
        "amount": 0.28
      },
      {
        "rawText": "46.26 1-Taxable @0.00% 0.00",
        "kind": "tax",
        "amount": 0
      },
      {
        "rawText": "Gift Certificate 25.00",
        "kind": "payment",
        "amount": 25
      },
      {
        "rawText": "Cash 25.00",
        "kind": "payment",
        "amount": 25
      },
      {
        "rawText": "CHANGE DUE -0.29",
        "kind": "other",
        "amount": 0.29
      }
    ],
    "warnings": [
      "The footer text is cut off after \"ALDI truth #86: We always combine incredibl[y]...\".",
      "The payment and change rows do not reconcile conventionally with the amount due; preserved as printed."
    ],
    "timing": {
      "totalMs": 14486,
      "imagePrepMs": 584,
      "modelMs": 13902,
      "postProcessMs": 0,
      "modelCalls": 1,
      "imageCount": 2,
      "model": "gpt-5.6-luna",
      "reasoningEffort": "low",
      "harness": "isolated-direct-request"
    }
  },
  "rawText": "ALDI\nStore #01\n61-11 Junction Boulevard, Rego Park, NY\nVisit us at www.ALDI.us\nYour cashier today was Marv\nAll Nat Pizzas 3.49 F1\nAll Nat Pizzas 3.49 F1\nClancy's Chips 1.69 F1\nNavel Oranges 1.99 F1\nMixed Squash 1.99 F1\nGummi Bears/Worms 1.19 F2\nG Bearse Hppy Cola 0.99 F2\nLean Sandwich 1.89 F1\nLean Sandwich 1.89 F1\nMoo Tubes 1.99 F1\nOrganic Strawberry 2.39 F1\nG Bearse Hppy Cola 0.99 F2\nItalian T Sausage 3.25 F1\nLt/Spirals String 2.49 F1\nHam or Turkey Tub 2.49 F1\nBanana WE 1.42 F1\n1 @ 3.230 0.44\nNFC OJ in Carafe 2.69 F1\nNFC OJ in Carafe 2.69 F1\nFV Coffee Creamer 2.49 F1\nOrganic Strawberry 2.39 F1\nWhipped Topping 0.89 F1\nStevia Sweetener 1.99 F1\nMini Marshmallows 0.89 F1\nBlack Beans 0.59 F1\nBlack Beans 0.59 F1\nBlack Beans 0.59 F1\nSUBTOTAL 49.43\n3.17 2-Taxable @8.875% 0.28\n46.26 1-Taxable @0.00% 0.00\nAMOUNT DUE 49.71\nT O T A L 49.71\n26 ITEMS\nGift Certificate 25.00\nCash 25.00\nCHANGE DUE -0.29\n*2091 0001/011/132 01/18/13 12:08pm A00\n***************************************\nALDI truth #86: We always\ncombine incredibl[y]...",
  "rawOutputText": "{\"merchant\":\"ALDI\",\"date\":\"01/18/13\",\"currency\":\"USD\",\"subtotal\":49.43,\"tax\":0.28,\"total\":49.71,\"balance\":null,\"ocrText\":\"ALDI\\nStore #01\\n61-11 Junction Boulevard, Rego Park, NY\\nVisit us at www.ALDI.us\\nYour cashier today was Marv\\nAll Nat Pizzas 3.49 F1\\nAll Nat Pizzas 3.49 F1\\nClancy's Chips 1.69 F1\\nNavel Oranges 1.99 F1\\nMixed Squash 1.99 F1\\nGummi Bears/Worms 1.19 F2\\nG Bearse Hppy Cola 0.99 F2\\nLean Sandwich 1.89 F1\\nLean Sandwich 1.89 F1\\nMoo Tubes 1.99 F1\\nOrganic Strawberry 2.39 F1\\nG Bearse Hppy Cola 0.99 F2\\nItalian T Sausage 3.25 F1\\nLt/Spirals String 2.49 F1\\nHam or Turkey Tub 2.49 F1\\nBanana WE 1.42 F1\\n1 @ 3.230 0.44\\nNFC OJ in Carafe 2.69 F1\\nNFC OJ in Carafe 2.69 F1\\nFV Coffee Creamer 2.49 F1\\nOrganic Strawberry 2.39 F1\\nWhipped Topping 0.89 F1\\nStevia Sweetener 1.99 F1\\nMini Marshmallows 0.89 F1\\nBlack Beans 0.59 F1\\nBlack Beans 0.59 F1\\nBlack Beans 0.59 F1\\nSUBTOTAL 49.43\\n3.17 2-Taxable @8.875% 0.28\\n46.26 1-Taxable @0.00% 0.00\\nAMOUNT DUE 49.71\\nT O T A L 49.71\\n26 ITEMS\\nGift Certificate 25.00\\nCash 25.00\\nCHANGE DUE -0.29\\n*2091 0001/011/132 01/18/13 12:08pm A00\\n***************************************\\nALDI truth #86: We always\\ncombine incredibl[y]...\",\"lines\":[{\"rawText\":\"All Nat Pizzas 3.49 F1\",\"description\":\"All Nat Pizzas\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.49,\"amount\":3.49,\"category\":\"food\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"All Nat Pizzas 3.49 F1\",\"description\":\"All Nat Pizzas\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.49,\"amount\":3.49,\"category\":\"food\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"Clancy's Chips 1.69 F1\",\"description\":\"Clancy's Chips\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.69,\"amount\":1.69,\"category\":\"food\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"Navel Oranges 1.99 F1\",\"description\":\"Navel Oranges\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.99,\"amount\":1.99,\"category\":\"produce\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"Mixed Squash 1.99 F1\",\"description\":\"Mixed Squash\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.99,\"amount\":1.99,\"category\":\"produce\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"Gummi Bears/Worms 1.19 F2\",\"description\":\"Gummi Bears/Worms\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.19,\"amount\":1.19,\"category\":\"candy\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"G Bearse Hppy Cola 0.99 F2\",\"description\":\"G Bearse Hppy Cola\",\"quantity\":1,\"unit\":null,\"unitPrice\":0.99,\"amount\":0.99,\"category\":\"beverage\",\"confidence\":94,\"needsReview\":false},{\"rawText\":\"Lean Sandwich 1.89 F1\",\"description\":\"Lean Sandwich\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.89,\"amount\":1.89,\"category\":\"food\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"Lean Sandwich 1.89 F1\",\"description\":\"Lean Sandwich\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.89,\"amount\":1.89,\"category\":\"food\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"Moo Tubes 1.99 F1\",\"description\":\"Moo Tubes\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.99,\"amount\":1.99,\"category\":\"dairy\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"Organic Strawberry 2.39 F1\",\"description\":\"Organic Strawberry\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.39,\"amount\":2.39,\"category\":\"produce\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"G Bearse Hppy Cola 0.99 F2\",\"description\":\"G Bearse Hppy Cola\",\"quantity\":1,\"unit\":null,\"unitPrice\":0.99,\"amount\":0.99,\"category\":\"beverage\",\"confidence\":94,\"needsReview\":false},{\"rawText\":\"Italian T Sausage 3.25 F1\",\"description\":\"Italian T Sausage\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.25,\"amount\":3.25,\"category\":\"meat\",\"confidence\":96,\"needsReview\":false},{\"rawText\":\"Lt/Spirals String 2.49 F1\",\"description\":\"Lt/Spirals String\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.49,\"amount\":2.49,\"category\":\"dairy\",\"confidence\":94,\"needsReview\":false},{\"rawText\":\"Ham or Turkey Tub 2.49 F1\",\"description\":\"Ham or Turkey Tub\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.49,\"amount\":2.49,\"category\":\"meat\",\"confidence\":97,\"needsReview\":false},{\"rawText\":\"Banana WE 1.42 F1\",\"description\":\"Banana WE\",\"quantity\":1,\"unit\":\"lb\",\"unitPrice\":3.23,\"amount\":1.42,\"category\":\"produce\",\"confidence\":94,\"needsReview\":false},{\"rawText\":\"NFC OJ in Carafe 2.69 F1\",\"description\":\"NFC OJ in Carafe\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.69,\"amount\":2.69,\"category\":\"beverage\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"NFC OJ in Carafe 2.69 F1\",\"description\":\"NFC OJ in Carafe\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.69,\"amount\":2.69,\"category\":\"beverage\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"FV Coffee Creamer 2.49 F1\",\"description\":\"FV Coffee Creamer\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.49,\"amount\":2.49,\"category\":\"dairy\",\"confidence\":95,\"needsReview\":false},{\"rawText\":\"Organic Strawberry 2.39 F1\",\"description\":\"Organic Strawberry\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.39,\"amount\":2.39,\"category\":\"produce\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"Whipped Topping 0.89 F1\",\"description\":\"Whipped Topping\",\"quantity\":1,\"unit\":null,\"unitPrice\":0.89,\"amount\":0.89,\"category\":\"dairy\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"Stevia Sweetener 1.99 F1\",\"description\":\"Stevia Sweetener\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.99,\"amount\":1.99,\"category\":\"food\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"Mini Marshmallows 0.89 F1\",\"description\":\"Mini Marshmallows\",\"quantity\":1,\"unit\":null,\"unitPrice\":0.89,\"amount\":0.89,\"category\":\"food\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"Black Beans 0.59 F1\",\"description\":\"Black Beans\",\"quantity\":1,\"unit\":null,\"unitPrice\":0.59,\"amount\":0.59,\"category\":\"food\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"Black Beans 0.59 F1\",\"description\":\"Black Beans\",\"quantity\":1,\"unit\":null,\"unitPrice\":0.59,\"amount\":0.59,\"category\":\"food\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"Black Beans 0.59 F1\",\"description\":\"Black Beans\",\"quantity\":1,\"unit\":null,\"unitPrice\":0.59,\"amount\":0.59,\"category\":\"food\",\"confidence\":98,\"needsReview\":false}],\"adjustments\":[{\"rawText\":\"3.17 2-Taxable @8.875% 0.28\",\"kind\":\"tax\",\"amount\":0.28},{\"rawText\":\"46.26 1-Taxable @0.00% 0.00\",\"kind\":\"tax\",\"amount\":0.0},{\"rawText\":\"Gift Certificate 25.00\",\"kind\":\"payment\",\"amount\":25.0},{\"rawText\":\"Cash 25.00\",\"kind\":\"payment\",\"amount\":25.0},{\"rawText\":\"CHANGE DUE -0.29\",\"kind\":\"other\",\"amount\":0.29}],\"warnings\":[\"The footer text is cut off after \\\"ALDI truth #86: We always combine incredibl[y]...\\\".\",\"The payment and change rows do not reconcile conventionally with the amount due; preserved as printed.\"]}",
  "error": null,
  "timing": {
    "totalMs": 14486,
    "imagePrepMs": 584,
    "modelMs": 13902,
    "postProcessMs": 0,
    "modelCalls": 1,
    "imageCount": 2,
    "model": "gpt-5.6-luna",
    "reasoningEffort": "low",
    "harness": "isolated-direct-request"
  }
}
```

</details>

<details>
<summary><strong>aldi-04</strong> — OK</summary>

Fixture image: [aldi-04.jpeg](../receipts/aldi-04.jpeg)
Complete JSON: [aldi-04.json](aldi-04.json)

```json
{
  "receipt": {
    "merchant": "ALDI",
    "date": "09/03/20 04:34PM",
    "currency": "USD",
    "subtotal": 38.7,
    "tax": 0.32,
    "total": 39.02,
    "balance": 39.02,
    "ocrText": "ALDI\n[Address text unreadable]\nwww.ALDI.us\nThank you for shopping at ALDI\nMilk 1% 2.46 FA\n[Product text unreadable] 0.60 FA\n[Product text unreadable] 1.19 FA\nALDI Salsa 0.69 FA\nTurkey Lunch Ln 01 0.69 FA\nTurkey Lunch Ln 01 0.59 FA\n[Product text] Tuna Water 1.49 FA\nAluminum Foil 0.75 FA\nFamily [text] - Dlc Rot 1.09 FA\nCranberry Cocktail 1.49 FA\nSnack Sak 0.34 FA\nMacaroni & Cheese 0.34 FA\nMacaroni & Cheese 0.34 FA\nMacaroni & Cheese 0.34 FA\nCream Cheese 0.99 FA\nOrganic Spring Mix 1.99 FA\nPork & Beans 0.35 FA\nPork & Beans 0.89 FA\nDill Pickle Chips 1.79 FA\nSliced Asiago Blend 1.29 FA\nBrown Sugar 1.29 FA\nSweetener Salt? Bar? 2.69 FA\nGala Apples 4.49 FA\nGourmet Deli 1.99 FA\nFruit & Granola Bar 0.89 FA\nWhite? Muffins 0.89 FA\nItalian? [text] 1.99 FA\nDulce Angel [text] 0.55 FA\nLarge Eggs 1.49 FA\nCinnamon Rolls 1.28 FA\n12 Grain Bread 1.28 FA\nAMEX\n************1001\n09/03/20 04:34 Ref/Seq # 094184\nAuth # 563207 ++APPROVED++ EntryMode 91\nSUBTOTAL 38.70\n3.75 C-Taxable 08.625% 0.32\n34.95 A-Taxable 00.00% 0.00\nAMOUNT DUE 39.02\nTOTAL $39.02\n29 ITEMS $39.02\nCredit Card\n*5659 473/103/006/008 09/03/20 04:34PM\n********************************\n********************************\nLike ALDI? Tell ALDI!\nTell us how we did at [footer text]",
    "lines": [
      {
        "rawText": "Milk 1% 2.46 FA",
        "description": "Milk 1%",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.46,
        "amount": 2.46,
        "category": "dairy",
        "confidence": 82,
        "needsReview": true
      },
      {
        "rawText": "[Product text unreadable] 0.60 FA",
        "description": null,
        "quantity": 1,
        "unit": null,
        "unitPrice": 0.6,
        "amount": 0.6,
        "category": null,
        "confidence": 45,
        "needsReview": true
      },
      {
        "rawText": "[Product text unreadable] 1.19 FA",
        "description": null,
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.19,
        "amount": 1.19,
        "category": null,
        "confidence": 45,
        "needsReview": true
      },
      {
        "rawText": "ALDI Salsa 0.69 FA",
        "description": "ALDI Salsa",
        "quantity": 1,
        "unit": null,
        "unitPrice": 0.69,
        "amount": 0.69,
        "category": "grocery",
        "confidence": 91,
        "needsReview": false
      },
      {
        "rawText": "Turkey Lunch Ln 01 0.69 FA",
        "description": "Turkey Lunch Meat",
        "quantity": 1,
        "unit": null,
        "unitPrice": 0.69,
        "amount": 0.69,
        "category": "deli",
        "confidence": 78,
        "needsReview": true
      },
      {
        "rawText": "Turkey Lunch Ln 01 0.59 FA",
        "description": "Turkey Lunch Meat",
        "quantity": 1,
        "unit": null,
        "unitPrice": 0.59,
        "amount": 0.59,
        "category": "deli",
        "confidence": 78,
        "needsReview": true
      },
      {
        "rawText": "[Product text] Tuna Water 1.49 FA",
        "description": "Tuna in Water",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.49,
        "amount": 1.49,
        "category": "grocery",
        "confidence": 72,
        "needsReview": true
      },
      {
        "rawText": "Aluminum Foil 0.75 FA",
        "description": "Aluminum Foil",
        "quantity": 1,
        "unit": null,
        "unitPrice": 0.75,
        "amount": 0.75,
        "category": "household",
        "confidence": 94,
        "needsReview": false
      },
      {
        "rawText": "Family [text] - Dlc Rot 1.09 FA",
        "description": "Family [text]",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.09,
        "amount": 1.09,
        "category": null,
        "confidence": 55,
        "needsReview": true
      },
      {
        "rawText": "Cranberry Cocktail 1.49 FA",
        "description": "Cranberry Cocktail",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.49,
        "amount": 1.49,
        "category": "beverage",
        "confidence": 93,
        "needsReview": false
      },
      {
        "rawText": "Snack Sak 0.34 FA",
        "description": "Snack Sak",
        "quantity": 1,
        "unit": null,
        "unitPrice": 0.34,
        "amount": 0.34,
        "category": "grocery",
        "confidence": 82,
        "needsReview": true
      },
      {
        "rawText": "Macaroni & Cheese 0.34 FA",
        "description": "Macaroni & Cheese",
        "quantity": 1,
        "unit": null,
        "unitPrice": 0.34,
        "amount": 0.34,
        "category": "grocery",
        "confidence": 96,
        "needsReview": false
      },
      {
        "rawText": "Macaroni & Cheese 0.34 FA",
        "description": "Macaroni & Cheese",
        "quantity": 1,
        "unit": null,
        "unitPrice": 0.34,
        "amount": 0.34,
        "category": "grocery",
        "confidence": 96,
        "needsReview": false
      },
      {
        "rawText": "Macaroni & Cheese 0.34 FA",
        "description": "Macaroni & Cheese",
        "quantity": 1,
        "unit": null,
        "unitPrice": 0.34,
        "amount": 0.34,
        "category": "grocery",
        "confidence": 96,
        "needsReview": false
      },
      {
        "rawText": "Cream Cheese 0.99 FA",
        "description": "Cream Cheese",
        "quantity": 1,
        "unit": null,
        "unitPrice": 0.99,
        "amount": 0.99,
        "category": "dairy",
        "confidence": 94,
        "needsReview": false
      },
      {
        "rawText": "Organic Spring Mix 1.99 FA",
        "description": "Organic Spring Mix",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.99,
        "amount": 1.99,
        "category": "produce",
        "confidence": 95,
        "needsReview": false
      },
      {
        "rawText": "Pork & Beans 0.35 FA",
        "description": "Pork & Beans",
        "quantity": 1,
        "unit": null,
        "unitPrice": 0.35,
        "amount": 0.35,
        "category": "grocery",
        "confidence": 95,
        "needsReview": false
      },
      {
        "rawText": "Pork & Beans 0.89 FA",
        "description": "Pork & Beans",
        "quantity": 1,
        "unit": null,
        "unitPrice": 0.89,
        "amount": 0.89,
        "category": "grocery",
        "confidence": 95,
        "needsReview": false
      },
      {
        "rawText": "Dill Pickle Chips 1.79 FA",
        "description": "Dill Pickle Chips",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.79,
        "amount": 1.79,
        "category": "grocery",
        "confidence": 92,
        "needsReview": false
      },
      {
        "rawText": "Sliced Asiago Blend 1.29 FA",
        "description": "Sliced Asiago Blend",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.29,
        "amount": 1.29,
        "category": "dairy",
        "confidence": 87,
        "needsReview": true
      },
      {
        "rawText": "Brown Sugar 1.29 FA",
        "description": "Brown Sugar",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.29,
        "amount": 1.29,
        "category": "baking",
        "confidence": 94,
        "needsReview": false
      },
      {
        "rawText": "Sweetener Salt? Bar? 2.69 FA",
        "description": "Sweetener [text uncertain]",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.69,
        "amount": 2.69,
        "category": null,
        "confidence": 60,
        "needsReview": true
      },
      {
        "rawText": "Gala Apples 4.49 FA",
        "description": "Gala Apples",
        "quantity": 1,
        "unit": null,
        "unitPrice": 4.49,
        "amount": 4.49,
        "category": "produce",
        "confidence": 95,
        "needsReview": false
      },
      {
        "rawText": "Gourmet Deli 1.99 FA",
        "description": "Gourmet Deli",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.99,
        "amount": 1.99,
        "category": "deli",
        "confidence": 86,
        "needsReview": true
      },
      {
        "rawText": "Fruit & Granola Bar 0.89 FA",
        "description": "Fruit & Granola Bar",
        "quantity": 1,
        "unit": null,
        "unitPrice": 0.89,
        "amount": 0.89,
        "category": "snack",
        "confidence": 88,
        "needsReview": true
      },
      {
        "rawText": "White? Muffins 0.89 FA",
        "description": "White [text uncertain]",
        "quantity": 1,
        "unit": null,
        "unitPrice": 0.89,
        "amount": 0.89,
        "category": "bakery",
        "confidence": 65,
        "needsReview": true
      },
      {
        "rawText": "Italian? [text] 1.99 FA",
        "description": "Italian [text uncertain]",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.99,
        "amount": 1.99,
        "category": null,
        "confidence": 62,
        "needsReview": true
      },
      {
        "rawText": "Dulce Angel [text] 0.55 FA",
        "description": "Dulce Angel [text uncertain]",
        "quantity": 1,
        "unit": null,
        "unitPrice": 0.55,
        "amount": 0.55,
        "category": "bakery",
        "confidence": 68,
        "needsReview": true
      },
      {
        "rawText": "Large Eggs 1.49 FA",
        "description": "Large Eggs",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.49,
        "amount": 1.49,
        "category": "dairy",
        "confidence": 94,
        "needsReview": false
      },
      {
        "rawText": "Cinnamon Rolls 1.28 FA",
        "description": "Cinnamon Rolls",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.28,
        "amount": 1.28,
        "category": "bakery",
        "confidence": 94,
        "needsReview": false
      },
      {
        "rawText": "12 Grain Bread 1.28 FA",
        "description": "12 Grain Bread",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.28,
        "amount": 1.28,
        "category": "bakery",
        "confidence": 96,
        "needsReview": false
      }
    ],
    "adjustments": [
      {
        "rawText": "3.75 C-Taxable 08.625%",
        "kind": "tax",
        "amount": 0.32
      },
      {
        "rawText": "34.95 A-Taxable 00.00%",
        "kind": "tax",
        "amount": 0
      },
      {
        "rawText": "Credit Card",
        "kind": "payment",
        "amount": 39.02
      }
    ],
    "warnings": [
      "Several upper product descriptions are obscured by folds and are transcribed with [?] or cautious text.",
      "The receipt states 29 ITEMS, but some product rows are not fully legible; line-item reconciliation should not be assumed."
    ],
    "timing": {
      "totalMs": 136434,
      "imagePrepMs": 202,
      "modelMs": 136232,
      "postProcessMs": 0,
      "modelCalls": 1,
      "imageCount": 2,
      "model": "gpt-5.6-luna",
      "reasoningEffort": "low",
      "harness": "isolated-direct-request"
    }
  },
  "rawText": "ALDI\n[Address text unreadable]\nwww.ALDI.us\nThank you for shopping at ALDI\nMilk 1% 2.46 FA\n[Product text unreadable] 0.60 FA\n[Product text unreadable] 1.19 FA\nALDI Salsa 0.69 FA\nTurkey Lunch Ln 01 0.69 FA\nTurkey Lunch Ln 01 0.59 FA\n[Product text] Tuna Water 1.49 FA\nAluminum Foil 0.75 FA\nFamily [text] - Dlc Rot 1.09 FA\nCranberry Cocktail 1.49 FA\nSnack Sak 0.34 FA\nMacaroni & Cheese 0.34 FA\nMacaroni & Cheese 0.34 FA\nMacaroni & Cheese 0.34 FA\nCream Cheese 0.99 FA\nOrganic Spring Mix 1.99 FA\nPork & Beans 0.35 FA\nPork & Beans 0.89 FA\nDill Pickle Chips 1.79 FA\nSliced Asiago Blend 1.29 FA\nBrown Sugar 1.29 FA\nSweetener Salt? Bar? 2.69 FA\nGala Apples 4.49 FA\nGourmet Deli 1.99 FA\nFruit & Granola Bar 0.89 FA\nWhite? Muffins 0.89 FA\nItalian? [text] 1.99 FA\nDulce Angel [text] 0.55 FA\nLarge Eggs 1.49 FA\nCinnamon Rolls 1.28 FA\n12 Grain Bread 1.28 FA\nAMEX\n************1001\n09/03/20 04:34 Ref/Seq # 094184\nAuth # 563207 ++APPROVED++ EntryMode 91\nSUBTOTAL 38.70\n3.75 C-Taxable 08.625% 0.32\n34.95 A-Taxable 00.00% 0.00\nAMOUNT DUE 39.02\nTOTAL $39.02\n29 ITEMS $39.02\nCredit Card\n*5659 473/103/006/008 09/03/20 04:34PM\n********************************\n********************************\nLike ALDI? Tell ALDI!\nTell us how we did at [footer text]",
  "rawOutputText": "{\"merchant\":\"ALDI\",\"date\":\"09/03/20 04:34PM\",\"currency\":\"USD\",\"subtotal\":38.70,\"tax\":0.32,\"total\":39.02,\"balance\":39.02,\"ocrText\":\"ALDI\\n[Address text unreadable]\\nwww.ALDI.us\\nThank you for shopping at ALDI\\nMilk 1% 2.46 FA\\n[Product text unreadable] 0.60 FA\\n[Product text unreadable] 1.19 FA\\nALDI Salsa 0.69 FA\\nTurkey Lunch Ln 01 0.69 FA\\nTurkey Lunch Ln 01 0.59 FA\\n[Product text] Tuna Water 1.49 FA\\nAluminum Foil 0.75 FA\\nFamily [text] - Dlc Rot 1.09 FA\\nCranberry Cocktail 1.49 FA\\nSnack Sak 0.34 FA\\nMacaroni & Cheese 0.34 FA\\nMacaroni & Cheese 0.34 FA\\nMacaroni & Cheese 0.34 FA\\nCream Cheese 0.99 FA\\nOrganic Spring Mix 1.99 FA\\nPork & Beans 0.35 FA\\nPork & Beans 0.89 FA\\nDill Pickle Chips 1.79 FA\\nSliced Asiago Blend 1.29 FA\\nBrown Sugar 1.29 FA\\nSweetener Salt? Bar? 2.69 FA\\nGala Apples 4.49 FA\\nGourmet Deli 1.99 FA\\nFruit & Granola Bar 0.89 FA\\nWhite? Muffins 0.89 FA\\nItalian? [text] 1.99 FA\\nDulce Angel [text] 0.55 FA\\nLarge Eggs 1.49 FA\\nCinnamon Rolls 1.28 FA\\n12 Grain Bread 1.28 FA\\nAMEX\\n************1001\\n09/03/20 04:34 Ref/Seq # 094184\\nAuth # 563207 ++APPROVED++ EntryMode 91\\nSUBTOTAL 38.70\\n3.75 C-Taxable 08.625% 0.32\\n34.95 A-Taxable 00.00% 0.00\\nAMOUNT DUE 39.02\\nTOTAL $39.02\\n29 ITEMS $39.02\\nCredit Card\\n*5659 473/103/006/008 09/03/20 04:34PM\\n********************************\\n********************************\\nLike ALDI? Tell ALDI!\\nTell us how we did at [footer text]\",\"lines\":[{\"rawText\":\"Milk 1% 2.46 FA\",\"description\":\"Milk 1%\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.46,\"amount\":2.46,\"category\":\"dairy\",\"confidence\":82,\"needsReview\":true},{\"rawText\":\"[Product text unreadable] 0.60 FA\",\"description\":null,\"quantity\":1,\"unit\":null,\"unitPrice\":0.6,\"amount\":0.6,\"category\":null,\"confidence\":45,\"needsReview\":true},{\"rawText\":\"[Product text unreadable] 1.19 FA\",\"description\":null,\"quantity\":1,\"unit\":null,\"unitPrice\":1.19,\"amount\":1.19,\"category\":null,\"confidence\":45,\"needsReview\":true},{\"rawText\":\"ALDI Salsa 0.69 FA\",\"description\":\"ALDI Salsa\",\"quantity\":1,\"unit\":null,\"unitPrice\":0.69,\"amount\":0.69,\"category\":\"grocery\",\"confidence\":91,\"needsReview\":false},{\"rawText\":\"Turkey Lunch Ln 01 0.69 FA\",\"description\":\"Turkey Lunch Meat\",\"quantity\":1,\"unit\":null,\"unitPrice\":0.69,\"amount\":0.69,\"category\":\"deli\",\"confidence\":78,\"needsReview\":true},{\"rawText\":\"Turkey Lunch Ln 01 0.59 FA\",\"description\":\"Turkey Lunch Meat\",\"quantity\":1,\"unit\":null,\"unitPrice\":0.59,\"amount\":0.59,\"category\":\"deli\",\"confidence\":78,\"needsReview\":true},{\"rawText\":\"[Product text] Tuna Water 1.49 FA\",\"description\":\"Tuna in Water\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.49,\"amount\":1.49,\"category\":\"grocery\",\"confidence\":72,\"needsReview\":true},{\"rawText\":\"Aluminum Foil 0.75 FA\",\"description\":\"Aluminum Foil\",\"quantity\":1,\"unit\":null,\"unitPrice\":0.75,\"amount\":0.75,\"category\":\"household\",\"confidence\":94,\"needsReview\":false},{\"rawText\":\"Family [text] - Dlc Rot 1.09 FA\",\"description\":\"Family [text]\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.09,\"amount\":1.09,\"category\":null,\"confidence\":55,\"needsReview\":true},{\"rawText\":\"Cranberry Cocktail 1.49 FA\",\"description\":\"Cranberry Cocktail\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.49,\"amount\":1.49,\"category\":\"beverage\",\"confidence\":93,\"needsReview\":false},{\"rawText\":\"Snack Sak 0.34 FA\",\"description\":\"Snack Sak\",\"quantity\":1,\"unit\":null,\"unitPrice\":0.34,\"amount\":0.34,\"category\":\"grocery\",\"confidence\":82,\"needsReview\":true},{\"rawText\":\"Macaroni & Cheese 0.34 FA\",\"description\":\"Macaroni & Cheese\",\"quantity\":1,\"unit\":null,\"unitPrice\":0.34,\"amount\":0.34,\"category\":\"grocery\",\"confidence\":96,\"needsReview\":false},{\"rawText\":\"Macaroni & Cheese 0.34 FA\",\"description\":\"Macaroni & Cheese\",\"quantity\":1,\"unit\":null,\"unitPrice\":0.34,\"amount\":0.34,\"category\":\"grocery\",\"confidence\":96,\"needsReview\":false},{\"rawText\":\"Macaroni & Cheese 0.34 FA\",\"description\":\"Macaroni & Cheese\",\"quantity\":1,\"unit\":null,\"unitPrice\":0.34,\"amount\":0.34,\"category\":\"grocery\",\"confidence\":96,\"needsReview\":false},{\"rawText\":\"Cream Cheese 0.99 FA\",\"description\":\"Cream Cheese\",\"quantity\":1,\"unit\":null,\"unitPrice\":0.99,\"amount\":0.99,\"category\":\"dairy\",\"confidence\":94,\"needsReview\":false},{\"rawText\":\"Organic Spring Mix 1.99 FA\",\"description\":\"Organic Spring Mix\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.99,\"amount\":1.99,\"category\":\"produce\",\"confidence\":95,\"needsReview\":false},{\"rawText\":\"Pork & Beans 0.35 FA\",\"description\":\"Pork & Beans\",\"quantity\":1,\"unit\":null,\"unitPrice\":0.35,\"amount\":0.35,\"category\":\"grocery\",\"confidence\":95,\"needsReview\":false},{\"rawText\":\"Pork & Beans 0.89 FA\",\"description\":\"Pork & Beans\",\"quantity\":1,\"unit\":null,\"unitPrice\":0.89,\"amount\":0.89,\"category\":\"grocery\",\"confidence\":95,\"needsReview\":false},{\"rawText\":\"Dill Pickle Chips 1.79 FA\",\"description\":\"Dill Pickle Chips\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.79,\"amount\":1.79,\"category\":\"grocery\",\"confidence\":92,\"needsReview\":false},{\"rawText\":\"Sliced Asiago Blend 1.29 FA\",\"description\":\"Sliced Asiago Blend\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.29,\"amount\":1.29,\"category\":\"dairy\",\"confidence\":87,\"needsReview\":true},{\"rawText\":\"Brown Sugar 1.29 FA\",\"description\":\"Brown Sugar\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.29,\"amount\":1.29,\"category\":\"baking\",\"confidence\":94,\"needsReview\":false},{\"rawText\":\"Sweetener Salt? Bar? 2.69 FA\",\"description\":\"Sweetener [text uncertain]\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.69,\"amount\":2.69,\"category\":null,\"confidence\":60,\"needsReview\":true},{\"rawText\":\"Gala Apples 4.49 FA\",\"description\":\"Gala Apples\",\"quantity\":1,\"unit\":null,\"unitPrice\":4.49,\"amount\":4.49,\"category\":\"produce\",\"confidence\":95,\"needsReview\":false},{\"rawText\":\"Gourmet Deli 1.99 FA\",\"description\":\"Gourmet Deli\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.99,\"amount\":1.99,\"category\":\"deli\",\"confidence\":86,\"needsReview\":true},{\"rawText\":\"Fruit & Granola Bar 0.89 FA\",\"description\":\"Fruit & Granola Bar\",\"quantity\":1,\"unit\":null,\"unitPrice\":0.89,\"amount\":0.89,\"category\":\"snack\",\"confidence\":88,\"needsReview\":true},{\"rawText\":\"White? Muffins 0.89 FA\",\"description\":\"White [text uncertain]\",\"quantity\":1,\"unit\":null,\"unitPrice\":0.89,\"amount\":0.89,\"category\":\"bakery\",\"confidence\":65,\"needsReview\":true},{\"rawText\":\"Italian? [text] 1.99 FA\",\"description\":\"Italian [text uncertain]\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.99,\"amount\":1.99,\"category\":null,\"confidence\":62,\"needsReview\":true},{\"rawText\":\"Dulce Angel [text] 0.55 FA\",\"description\":\"Dulce Angel [text uncertain]\",\"quantity\":1,\"unit\":null,\"unitPrice\":0.55,\"amount\":0.55,\"category\":\"bakery\",\"confidence\":68,\"needsReview\":true},{\"rawText\":\"Large Eggs 1.49 FA\",\"description\":\"Large Eggs\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.49,\"amount\":1.49,\"category\":\"dairy\",\"confidence\":94,\"needsReview\":false},{\"rawText\":\"Cinnamon Rolls 1.28 FA\",\"description\":\"Cinnamon Rolls\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.28,\"amount\":1.28,\"category\":\"bakery\",\"confidence\":94,\"needsReview\":false},{\"rawText\":\"12 Grain Bread 1.28 FA\",\"description\":\"12 Grain Bread\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.28,\"amount\":1.28,\"category\":\"bakery\",\"confidence\":96,\"needsReview\":false}],\"adjustments\":[{\"rawText\":\"3.75 C-Taxable 08.625%\",\"kind\":\"tax\",\"amount\":0.32},{\"rawText\":\"34.95 A-Taxable 00.00%\",\"kind\":\"tax\",\"amount\":0.0},{\"rawText\":\"Credit Card\",\"kind\":\"payment\",\"amount\":39.02}],\"warnings\":[\"Several upper product descriptions are obscured by folds and are transcribed with [?] or cautious text.\",\"The receipt states 29 ITEMS, but some product rows are not fully legible; line-item reconciliation should not be assumed.\"]}",
  "error": null,
  "timing": {
    "totalMs": 136434,
    "imagePrepMs": 202,
    "modelMs": 136232,
    "postProcessMs": 0,
    "modelCalls": 1,
    "imageCount": 2,
    "model": "gpt-5.6-luna",
    "reasoningEffort": "low",
    "harness": "isolated-direct-request"
  }
}
```

</details>

<details>
<summary><strong>aldi-05</strong> — OK</summary>

Fixture image: [aldi-05.jpg](../receipts/aldi-05.jpg)
Complete JSON: [aldi-05.json](aldi-05.json)

```json
{
  "receipt": {
    "merchant": "ALDI",
    "date": null,
    "currency": "USD",
    "subtotal": 28.05,
    "tax": 2.19,
    "total": 30.24,
    "balance": 30.24,
    "ocrText": "ALDI\nStore #91\n5706 Lee Hwy., Chattanooga, TN\nVisit us at www.ALDI.us\nYour cashier today was Harrison\nTrail Mix 1.99 F3\nLarge Eggs 1.38 F3\n2 @ 0.69\n10lb Russett Pot. 2.99 F3\nTrail Mix 1.99 F3\nWhite Vinegar 0.99 F3\nSpecialty Mustards 0.99 F3\nCrispy Oats 1.59 F3\nPineapple 1.99 F3\nValencia Oranges 2.49 F3\n2.47 lb @ 0.44/lb\nBanana WE 1.09 F3\n2.49 lb @ 0.44/lb\nBanana WE 1.10 F3\nOrganic Soymilk 2.49 F3\nWG/WW Thin Spagh 0.99 F3\nWG/WW Thin Spagh 0.99 F3\nPrem Dbl Roll Bath 4.99 N2\nSUBTOTAL 28.05\n4.99 2-Taxable @9.250% 0.46\n23.06 3-Taxable @7.500% 1.73\nAMOUNT DUE 30.24\nTOTAL 30.24",
    "lines": [
      {
        "rawText": "Trail Mix 1.99 F3",
        "description": "Trail Mix",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.99,
        "amount": 1.99,
        "category": "food",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "Large Eggs 1.38 F3 / 2 @ 0.69",
        "description": "Large Eggs",
        "quantity": 2,
        "unit": "each",
        "unitPrice": 0.69,
        "amount": 1.38,
        "category": "dairy/eggs",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "10lb Russett Pot. 2.99 F3",
        "description": "10lb Russett Pot.",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.99,
        "amount": 2.99,
        "category": "produce",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "Trail Mix 1.99 F3",
        "description": "Trail Mix",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.99,
        "amount": 1.99,
        "category": "food",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "White Vinegar 0.99 F3",
        "description": "White Vinegar",
        "quantity": 1,
        "unit": null,
        "unitPrice": 0.99,
        "amount": 0.99,
        "category": "food",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "Specialty Mustards 0.99 F3",
        "description": "Specialty Mustards",
        "quantity": 1,
        "unit": null,
        "unitPrice": 0.99,
        "amount": 0.99,
        "category": "food",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "Crispy Oats 1.59 F3",
        "description": "Crispy Oats",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.59,
        "amount": 1.59,
        "category": "food",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "Pineapple 1.99 F3",
        "description": "Pineapple",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.99,
        "amount": 1.99,
        "category": "produce",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "Valencia Oranges 2.49 F3 / 2.47 lb @ 0.44/lb",
        "description": "Valencia Oranges",
        "quantity": 2.47,
        "unit": "lb",
        "unitPrice": 0.44,
        "amount": 2.49,
        "category": "produce",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "Banana WE 1.09 F3 / 2.47 lb @ 0.44/lb",
        "description": "Banana WE",
        "quantity": 2.47,
        "unit": "lb",
        "unitPrice": 0.44,
        "amount": 1.09,
        "category": "produce",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "Banana WE 1.10 F3",
        "description": "Banana WE",
        "quantity": 2.49,
        "unit": "lb",
        "unitPrice": 0.44,
        "amount": 1.1,
        "category": "produce",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "Organic Soymilk 2.49 F3",
        "description": "Organic Soymilk",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.49,
        "amount": 2.49,
        "category": "dairy alternative",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "WG/WW Thin Spagh 0.99 F3",
        "description": "WG/WW Thin Spagh",
        "quantity": 1,
        "unit": null,
        "unitPrice": 0.99,
        "amount": 0.99,
        "category": "food",
        "confidence": 97,
        "needsReview": false
      },
      {
        "rawText": "WG/WW Thin Spagh 0.99 F3",
        "description": "WG/WW Thin Spagh",
        "quantity": 1,
        "unit": null,
        "unitPrice": 0.99,
        "amount": 0.99,
        "category": "food",
        "confidence": 97,
        "needsReview": false
      },
      {
        "rawText": "Prem Dbl Roll Bath 4.99 N2",
        "description": "Prem Dbl Roll Bath",
        "quantity": 1,
        "unit": null,
        "unitPrice": 4.99,
        "amount": 4.99,
        "category": "household",
        "confidence": 98,
        "needsReview": false
      }
    ],
    "adjustments": [
      {
        "rawText": "4.99 2-Taxable @9.250% 0.46",
        "kind": "tax",
        "amount": 0.46
      },
      {
        "rawText": "23.06 3-Taxable @7.500% 1.73",
        "kind": "tax",
        "amount": 1.73
      }
    ],
    "warnings": [],
    "timing": {
      "totalMs": 12273,
      "imagePrepMs": 325,
      "modelMs": 11948,
      "postProcessMs": 0,
      "modelCalls": 1,
      "imageCount": 2,
      "model": "gpt-5.6-luna",
      "reasoningEffort": "low",
      "harness": "isolated-direct-request"
    }
  },
  "rawText": "ALDI\nStore #91\n5706 Lee Hwy., Chattanooga, TN\nVisit us at www.ALDI.us\nYour cashier today was Harrison\nTrail Mix 1.99 F3\nLarge Eggs 1.38 F3\n2 @ 0.69\n10lb Russett Pot. 2.99 F3\nTrail Mix 1.99 F3\nWhite Vinegar 0.99 F3\nSpecialty Mustards 0.99 F3\nCrispy Oats 1.59 F3\nPineapple 1.99 F3\nValencia Oranges 2.49 F3\n2.47 lb @ 0.44/lb\nBanana WE 1.09 F3\n2.49 lb @ 0.44/lb\nBanana WE 1.10 F3\nOrganic Soymilk 2.49 F3\nWG/WW Thin Spagh 0.99 F3\nWG/WW Thin Spagh 0.99 F3\nPrem Dbl Roll Bath 4.99 N2\nSUBTOTAL 28.05\n4.99 2-Taxable @9.250% 0.46\n23.06 3-Taxable @7.500% 1.73\nAMOUNT DUE 30.24\nTOTAL 30.24",
  "rawOutputText": "{\"merchant\":\"ALDI\",\"date\":null,\"currency\":\"USD\",\"subtotal\":28.05,\"tax\":2.19,\"total\":30.24,\"balance\":30.24,\"ocrText\":\"ALDI\\nStore #91\\n5706 Lee Hwy., Chattanooga, TN\\nVisit us at www.ALDI.us\\nYour cashier today was Harrison\\nTrail Mix 1.99 F3\\nLarge Eggs 1.38 F3\\n2 @ 0.69\\n10lb Russett Pot. 2.99 F3\\nTrail Mix 1.99 F3\\nWhite Vinegar 0.99 F3\\nSpecialty Mustards 0.99 F3\\nCrispy Oats 1.59 F3\\nPineapple 1.99 F3\\nValencia Oranges 2.49 F3\\n2.47 lb @ 0.44/lb\\nBanana WE 1.09 F3\\n2.49 lb @ 0.44/lb\\nBanana WE 1.10 F3\\nOrganic Soymilk 2.49 F3\\nWG/WW Thin Spagh 0.99 F3\\nWG/WW Thin Spagh 0.99 F3\\nPrem Dbl Roll Bath 4.99 N2\\nSUBTOTAL 28.05\\n4.99 2-Taxable @9.250% 0.46\\n23.06 3-Taxable @7.500% 1.73\\nAMOUNT DUE 30.24\\nTOTAL 30.24\",\"lines\":[{\"rawText\":\"Trail Mix 1.99 F3\",\"description\":\"Trail Mix\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.99,\"amount\":1.99,\"category\":\"food\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"Large Eggs 1.38 F3 / 2 @ 0.69\",\"description\":\"Large Eggs\",\"quantity\":2,\"unit\":\"each\",\"unitPrice\":0.69,\"amount\":1.38,\"category\":\"dairy/eggs\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"10lb Russett Pot. 2.99 F3\",\"description\":\"10lb Russett Pot.\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.99,\"amount\":2.99,\"category\":\"produce\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"Trail Mix 1.99 F3\",\"description\":\"Trail Mix\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.99,\"amount\":1.99,\"category\":\"food\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"White Vinegar 0.99 F3\",\"description\":\"White Vinegar\",\"quantity\":1,\"unit\":null,\"unitPrice\":0.99,\"amount\":0.99,\"category\":\"food\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"Specialty Mustards 0.99 F3\",\"description\":\"Specialty Mustards\",\"quantity\":1,\"unit\":null,\"unitPrice\":0.99,\"amount\":0.99,\"category\":\"food\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"Crispy Oats 1.59 F3\",\"description\":\"Crispy Oats\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.59,\"amount\":1.59,\"category\":\"food\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"Pineapple 1.99 F3\",\"description\":\"Pineapple\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.99,\"amount\":1.99,\"category\":\"produce\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"Valencia Oranges 2.49 F3 / 2.47 lb @ 0.44/lb\",\"description\":\"Valencia Oranges\",\"quantity\":2.47,\"unit\":\"lb\",\"unitPrice\":0.44,\"amount\":2.49,\"category\":\"produce\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"Banana WE 1.09 F3 / 2.47 lb @ 0.44/lb\",\"description\":\"Banana WE\",\"quantity\":2.47,\"unit\":\"lb\",\"unitPrice\":0.44,\"amount\":1.09,\"category\":\"produce\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"Banana WE 1.10 F3\",\"description\":\"Banana WE\",\"quantity\":2.49,\"unit\":\"lb\",\"unitPrice\":0.44,\"amount\":1.1,\"category\":\"produce\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"Organic Soymilk 2.49 F3\",\"description\":\"Organic Soymilk\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.49,\"amount\":2.49,\"category\":\"dairy alternative\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"WG/WW Thin Spagh 0.99 F3\",\"description\":\"WG/WW Thin Spagh\",\"quantity\":1,\"unit\":null,\"unitPrice\":0.99,\"amount\":0.99,\"category\":\"food\",\"confidence\":97,\"needsReview\":false},{\"rawText\":\"WG/WW Thin Spagh 0.99 F3\",\"description\":\"WG/WW Thin Spagh\",\"quantity\":1,\"unit\":null,\"unitPrice\":0.99,\"amount\":0.99,\"category\":\"food\",\"confidence\":97,\"needsReview\":false},{\"rawText\":\"Prem Dbl Roll Bath 4.99 N2\",\"description\":\"Prem Dbl Roll Bath\",\"quantity\":1,\"unit\":null,\"unitPrice\":4.99,\"amount\":4.99,\"category\":\"household\",\"confidence\":98,\"needsReview\":false}],\"adjustments\":[{\"rawText\":\"4.99 2-Taxable @9.250% 0.46\",\"kind\":\"tax\",\"amount\":0.46},{\"rawText\":\"23.06 3-Taxable @7.500% 1.73\",\"kind\":\"tax\",\"amount\":1.73}],\"warnings\":[]}",
  "error": null,
  "timing": {
    "totalMs": 12273,
    "imagePrepMs": 325,
    "modelMs": 11948,
    "postProcessMs": 0,
    "modelCalls": 1,
    "imageCount": 2,
    "model": "gpt-5.6-luna",
    "reasoningEffort": "low",
    "harness": "isolated-direct-request"
  }
}
```

</details>

<details>
<summary><strong>hannaford-01</strong> — OK</summary>

Fixture image: [hannaford-01.jpg](../receipts/hannaford-01.jpg)
Complete JSON: [hannaford-01.json](hannaford-01.json)

```json
{
  "receipt": {
    "merchant": "Hannaford",
    "date": null,
    "currency": "USD",
    "subtotal": null,
    "tax": 0.81,
    "total": 20.61,
    "balance": 20.61,
    "ocrText": "Hannaford\n532 Main Street - Saco ME 04072\n(207) 282-4152 - www.hannaford.com\nDELI\nROTTIS CHKN SSND 5.99 B\nCDR HOMMUS TAHIN 5.99 A *\nGROCERY\nHORMEL HT CHILI/BNS\n2 @ 2.39 4.78 *\nPROG CLCS BEEF BROTH 2.99 *\nSERVICE CENTER\nBAG FEE NON TXBL 0.05\nTax Paid\nSls Tax 5.5 5.99 0.33\nMeals Tax 8 5.99 0.48\nTOTAL TAX 0.81\n6 BALANCE DUE 20.61\nDebit Card $20.61\nMID: 0101397\nRRN: 582823\nSALE\nTotal: USD$ 20.61\nAPPROVED ZL C0C9\nUS DEBIT\nCHANGE 0.00\n****************************************\nWe value your opinion!\nTell us about your visit for a chance\nto win $500 in free groceries.\nWithin the next 5 days please visit:\nwww.TalkToHannaford.com\nTambien disponible en español.\n5 winners per month\nSee website for complete rules.",
    "lines": [
      {
        "rawText": "ROTTIS CHKN SSND 5.99 B",
        "description": "ROTTIS CHKN SSND",
        "quantity": 1,
        "unit": null,
        "unitPrice": 5.99,
        "amount": 5.99,
        "category": "deli",
        "confidence": 96,
        "needsReview": false
      },
      {
        "rawText": "CDR HOMMUS TAHIN 5.99 A *",
        "description": "CDR HOMMUS TAHIN",
        "quantity": 1,
        "unit": null,
        "unitPrice": 5.99,
        "amount": 5.99,
        "category": "deli",
        "confidence": 95,
        "needsReview": false
      },
      {
        "rawText": "HORMEL HT CHILI/BNS 2 @ 2.39 4.78 *",
        "description": "HORMEL HT CHILI/BNS",
        "quantity": 2,
        "unit": "each",
        "unitPrice": 2.39,
        "amount": 4.78,
        "category": "grocery",
        "confidence": 94,
        "needsReview": false
      },
      {
        "rawText": "PROG CLCS BEEF BROTH 2.99 *",
        "description": "PROG CLCS BEEF BROTH",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.99,
        "amount": 2.99,
        "category": "grocery",
        "confidence": 95,
        "needsReview": false
      }
    ],
    "adjustments": [
      {
        "rawText": "BAG FEE NON TXBL 0.05",
        "kind": "other",
        "amount": 0.05
      },
      {
        "rawText": "Sls Tax 5.5 5.99 0.33",
        "kind": "tax",
        "amount": 0.33
      },
      {
        "rawText": "Meals Tax 8 5.99 0.48",
        "kind": "tax",
        "amount": 0.48
      },
      {
        "rawText": "TOTAL TAX 0.81",
        "kind": "tax",
        "amount": 0.81
      },
      {
        "rawText": "Debit Card $20.61",
        "kind": "payment",
        "amount": 20.61
      },
      {
        "rawText": "CHANGE 0.00",
        "kind": "payment",
        "amount": 0
      }
    ],
    "warnings": [
      "No transaction date is visible on the receipt.",
      "Subtotal is not printed; it was left null."
    ],
    "timing": {
      "totalMs": 8224,
      "imagePrepMs": 216,
      "modelMs": 8008,
      "postProcessMs": 0,
      "modelCalls": 1,
      "imageCount": 2,
      "model": "gpt-5.6-luna",
      "reasoningEffort": "low",
      "harness": "isolated-direct-request"
    }
  },
  "rawText": "Hannaford\n532 Main Street - Saco ME 04072\n(207) 282-4152 - www.hannaford.com\nDELI\nROTTIS CHKN SSND 5.99 B\nCDR HOMMUS TAHIN 5.99 A *\nGROCERY\nHORMEL HT CHILI/BNS\n2 @ 2.39 4.78 *\nPROG CLCS BEEF BROTH 2.99 *\nSERVICE CENTER\nBAG FEE NON TXBL 0.05\nTax Paid\nSls Tax 5.5 5.99 0.33\nMeals Tax 8 5.99 0.48\nTOTAL TAX 0.81\n6 BALANCE DUE 20.61\nDebit Card $20.61\nMID: 0101397\nRRN: 582823\nSALE\nTotal: USD$ 20.61\nAPPROVED ZL C0C9\nUS DEBIT\nCHANGE 0.00\n****************************************\nWe value your opinion!\nTell us about your visit for a chance\nto win $500 in free groceries.\nWithin the next 5 days please visit:\nwww.TalkToHannaford.com\nTambien disponible en español.\n5 winners per month\nSee website for complete rules.",
  "rawOutputText": "{\"merchant\":\"Hannaford\",\"date\":null,\"currency\":\"USD\",\"subtotal\":null,\"tax\":0.81,\"total\":20.61,\"balance\":20.61,\"ocrText\":\"Hannaford\\n532 Main Street - Saco ME 04072\\n(207) 282-4152 - www.hannaford.com\\nDELI\\nROTTIS CHKN SSND 5.99 B\\nCDR HOMMUS TAHIN 5.99 A *\\nGROCERY\\nHORMEL HT CHILI/BNS\\n2 @ 2.39 4.78 *\\nPROG CLCS BEEF BROTH 2.99 *\\nSERVICE CENTER\\nBAG FEE NON TXBL 0.05\\nTax Paid\\nSls Tax 5.5 5.99 0.33\\nMeals Tax 8 5.99 0.48\\nTOTAL TAX 0.81\\n6 BALANCE DUE 20.61\\nDebit Card $20.61\\nMID: 0101397\\nRRN: 582823\\nSALE\\nTotal: USD$ 20.61\\nAPPROVED ZL C0C9\\nUS DEBIT\\nCHANGE 0.00\\n****************************************\\nWe value your opinion!\\nTell us about your visit for a chance\\nto win $500 in free groceries.\\nWithin the next 5 days please visit:\\nwww.TalkToHannaford.com\\nTambien disponible en español.\\n5 winners per month\\nSee website for complete rules.\",\"lines\":[{\"rawText\":\"ROTTIS CHKN SSND 5.99 B\",\"description\":\"ROTTIS CHKN SSND\",\"quantity\":1,\"unit\":null,\"unitPrice\":5.99,\"amount\":5.99,\"category\":\"deli\",\"confidence\":96,\"needsReview\":false},{\"rawText\":\"CDR HOMMUS TAHIN 5.99 A *\",\"description\":\"CDR HOMMUS TAHIN\",\"quantity\":1,\"unit\":null,\"unitPrice\":5.99,\"amount\":5.99,\"category\":\"deli\",\"confidence\":95,\"needsReview\":false},{\"rawText\":\"HORMEL HT CHILI/BNS 2 @ 2.39 4.78 *\",\"description\":\"HORMEL HT CHILI/BNS\",\"quantity\":2,\"unit\":\"each\",\"unitPrice\":2.39,\"amount\":4.78,\"category\":\"grocery\",\"confidence\":94,\"needsReview\":false},{\"rawText\":\"PROG CLCS BEEF BROTH 2.99 *\",\"description\":\"PROG CLCS BEEF BROTH\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.99,\"amount\":2.99,\"category\":\"grocery\",\"confidence\":95,\"needsReview\":false}],\"adjustments\":[{\"rawText\":\"BAG FEE NON TXBL 0.05\",\"kind\":\"other\",\"amount\":0.05},{\"rawText\":\"Sls Tax 5.5 5.99 0.33\",\"kind\":\"tax\",\"amount\":0.33},{\"rawText\":\"Meals Tax 8 5.99 0.48\",\"kind\":\"tax\",\"amount\":0.48},{\"rawText\":\"TOTAL TAX 0.81\",\"kind\":\"tax\",\"amount\":0.81},{\"rawText\":\"Debit Card $20.61\",\"kind\":\"payment\",\"amount\":20.61},{\"rawText\":\"CHANGE 0.00\",\"kind\":\"payment\",\"amount\":0.0}],\"warnings\":[\"No transaction date is visible on the receipt.\",\"Subtotal is not printed; it was left null.\"]}",
  "error": null,
  "timing": {
    "totalMs": 8224,
    "imagePrepMs": 216,
    "modelMs": 8008,
    "postProcessMs": 0,
    "modelCalls": 1,
    "imageCount": 2,
    "model": "gpt-5.6-luna",
    "reasoningEffort": "low",
    "harness": "isolated-direct-request"
  }
}
```

</details>

<details>
<summary><strong>hannaford-02</strong> — OK</summary>

Fixture image: [hannaford-02.jpeg](../receipts/hannaford-02.jpeg)
Complete JSON: [hannaford-02.json](hannaford-02.json)

```json
{
  "receipt": {
    "merchant": "Hannaford",
    "date": null,
    "currency": "USD",
    "subtotal": 17.33,
    "tax": 1.21,
    "total": 25.7,
    "balance": 25.7,
    "ocrText": "Hannaford\n[?]\nGROCERY\n  GOYA LENTILS                         2.19   *\n  GOYA BLACK BEANS\n        2 @        0.79               1.58   *\n  8PK/7.5OZ CN COKE\n  1 @    3 FOR      10.00             3.34 A *\n  4PK CN CITZ DRY CID                13.99 A\nMISC\n  BOTTLE DEPOSIT                       0.40   *\nPRODUCE\n  ORG GRAPE TOMATOES                   2.99   *\nTax Paid\nSales Tax 7%             17.33        1.21\n\n6 BALANCE DUE                         25.70\n  VISA                                $25.70\n[?]",
    "lines": [
      {
        "rawText": "GOYA LENTILS 2.19 *",
        "description": "Goya lentils",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.19,
        "amount": 2.19,
        "category": "grocery",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "GOYA BLACK BEANS 2 @ 0.79 1.58 *",
        "description": "Goya black beans",
        "quantity": 2,
        "unit": null,
        "unitPrice": 0.79,
        "amount": 1.58,
        "category": "grocery",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "8PK/7.5OZ CN COKE 1 @ 3 FOR 10.00 3.34 A *",
        "description": "8PK/7.5OZ CN Coke",
        "quantity": 1,
        "unit": "pack",
        "unitPrice": 3.34,
        "amount": 3.34,
        "category": "grocery",
        "confidence": 96,
        "needsReview": false
      },
      {
        "rawText": "4PK CN CITZ DRY CID 13.99 A",
        "description": "4PK CN CITZ DRY CID",
        "quantity": 1,
        "unit": "pack",
        "unitPrice": 13.99,
        "amount": 13.99,
        "category": "grocery",
        "confidence": 93,
        "needsReview": false
      },
      {
        "rawText": "BOTTLE DEPOSIT 0.40 *",
        "description": "Bottle deposit",
        "quantity": 1,
        "unit": null,
        "unitPrice": 0.4,
        "amount": 0.4,
        "category": "misc",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "ORG GRAPE TOMATOES 2.99 *",
        "description": "Organic grape tomatoes",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.99,
        "amount": 2.99,
        "category": "produce",
        "confidence": 97,
        "needsReview": false
      }
    ],
    "adjustments": [
      {
        "rawText": "Sales Tax 7% 17.33 1.21",
        "kind": "tax",
        "amount": 1.21
      },
      {
        "rawText": "VISA $25.70",
        "kind": "payment",
        "amount": 25.7
      }
    ],
    "warnings": [
      "Date and some header/footer text are obscured and unreadable.",
      "The printed subtotal/tax-base amount is 17.33; item amounts otherwise total 24.49 before tax."
    ],
    "timing": {
      "totalMs": 7538,
      "imagePrepMs": 414,
      "modelMs": 7124,
      "postProcessMs": 0,
      "modelCalls": 1,
      "imageCount": 2,
      "model": "gpt-5.6-luna",
      "reasoningEffort": "low",
      "harness": "isolated-direct-request"
    }
  },
  "rawText": "Hannaford\n[?]\nGROCERY\n  GOYA LENTILS                         2.19   *\n  GOYA BLACK BEANS\n        2 @        0.79               1.58   *\n  8PK/7.5OZ CN COKE\n  1 @    3 FOR      10.00             3.34 A *\n  4PK CN CITZ DRY CID                13.99 A\nMISC\n  BOTTLE DEPOSIT                       0.40   *\nPRODUCE\n  ORG GRAPE TOMATOES                   2.99   *\nTax Paid\nSales Tax 7%             17.33        1.21\n\n6 BALANCE DUE                         25.70\n  VISA                                $25.70\n[?]",
  "rawOutputText": "{\"merchant\":\"Hannaford\",\"date\":null,\"currency\":\"USD\",\"subtotal\":17.33,\"tax\":1.21,\"total\":25.70,\"balance\":25.70,\"ocrText\":\"Hannaford\\n[?]\\nGROCERY\\n  GOYA LENTILS                         2.19   *\\n  GOYA BLACK BEANS\\n        2 @        0.79               1.58   *\\n  8PK/7.5OZ CN COKE\\n  1 @    3 FOR      10.00             3.34 A *\\n  4PK CN CITZ DRY CID                13.99 A\\nMISC\\n  BOTTLE DEPOSIT                       0.40   *\\nPRODUCE\\n  ORG GRAPE TOMATOES                   2.99   *\\nTax Paid\\nSales Tax 7%             17.33        1.21\\n\\n6 BALANCE DUE                         25.70\\n  VISA                                $25.70\\n[?]\",\"lines\":[{\"rawText\":\"GOYA LENTILS 2.19 *\",\"description\":\"Goya lentils\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.19,\"amount\":2.19,\"category\":\"grocery\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"GOYA BLACK BEANS 2 @ 0.79 1.58 *\",\"description\":\"Goya black beans\",\"quantity\":2,\"unit\":null,\"unitPrice\":0.79,\"amount\":1.58,\"category\":\"grocery\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"8PK/7.5OZ CN COKE 1 @ 3 FOR 10.00 3.34 A *\",\"description\":\"8PK/7.5OZ CN Coke\",\"quantity\":1,\"unit\":\"pack\",\"unitPrice\":3.34,\"amount\":3.34,\"category\":\"grocery\",\"confidence\":96,\"needsReview\":false},{\"rawText\":\"4PK CN CITZ DRY CID 13.99 A\",\"description\":\"4PK CN CITZ DRY CID\",\"quantity\":1,\"unit\":\"pack\",\"unitPrice\":13.99,\"amount\":13.99,\"category\":\"grocery\",\"confidence\":93,\"needsReview\":false},{\"rawText\":\"BOTTLE DEPOSIT 0.40 *\",\"description\":\"Bottle deposit\",\"quantity\":1,\"unit\":null,\"unitPrice\":0.40,\"amount\":0.40,\"category\":\"misc\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"ORG GRAPE TOMATOES 2.99 *\",\"description\":\"Organic grape tomatoes\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.99,\"amount\":2.99,\"category\":\"produce\",\"confidence\":97,\"needsReview\":false}],\"adjustments\":[{\"rawText\":\"Sales Tax 7% 17.33 1.21\",\"kind\":\"tax\",\"amount\":1.21},{\"rawText\":\"VISA $25.70\",\"kind\":\"payment\",\"amount\":25.70}],\"warnings\":[\"Date and some header/footer text are obscured and unreadable.\",\"The printed subtotal/tax-base amount is 17.33; item amounts otherwise total 24.49 before tax.\"]}",
  "error": null,
  "timing": {
    "totalMs": 7538,
    "imagePrepMs": 414,
    "modelMs": 7124,
    "postProcessMs": 0,
    "modelCalls": 1,
    "imageCount": 2,
    "model": "gpt-5.6-luna",
    "reasoningEffort": "low",
    "harness": "isolated-direct-request"
  }
}
```

</details>

<details>
<summary><strong>hannaford-03</strong> — OK</summary>

Fixture image: [hannaford-03.jpg](../receipts/hannaford-03.jpg)
Complete JSON: [hannaford-03.json](hannaford-03.json)

```json
{
  "receipt": {
    "merchant": "Hannaford",
    "date": null,
    "currency": "USD",
    "subtotal": null,
    "tax": 0.19,
    "total": 18.77,
    "balance": 18.77,
    "ocrText": "Hannaford\n205 US Route 1 - Scarborough ME 04074\n(207) 883-7670, www.hannaford.com\nGROCERY\nHRD 100% RD KON? BNS 1.35\nHRD WH? BR? 2.29\nHRD LARGE BROWN EGGS 1.25\nHRD PLANT IN ... 2.89\nHRD ... MAYO? 3.49\nHEALTH & BEAUTY\nCD DEEP MOISTURE BW 5.99\nMEAT\nHRD SLICED BACON\nTax Paid 5.5% 0.19\n$15\nBALANCE DUE 18.77\nDebit Card\nSALE\nEntry Method: Chip\nLane #: 01\nA000000000000000\n8000\n160000101501\n019595",
    "lines": [
      {
        "rawText": "HRD 100% RD KON? BNS 1.35",
        "description": "100% RD KON? BNS",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.35,
        "amount": 1.35,
        "category": "grocery",
        "confidence": 72,
        "needsReview": true
      },
      {
        "rawText": "HRD WH? BR? 2.29",
        "description": "WH? BR?",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.29,
        "amount": 2.29,
        "category": "grocery",
        "confidence": 65,
        "needsReview": true
      },
      {
        "rawText": "HRD LARGE BROWN EGGS 1.25",
        "description": "LARGE BROWN EGGS",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.25,
        "amount": 1.25,
        "category": "grocery",
        "confidence": 96,
        "needsReview": false
      },
      {
        "rawText": "HRD PLANT IN ... 2.89",
        "description": "PLANT IN ...",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.89,
        "amount": 2.89,
        "category": "grocery",
        "confidence": 70,
        "needsReview": true
      },
      {
        "rawText": "HRD ... MAYO? 3.49",
        "description": "... MAYO?",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.49,
        "amount": 3.49,
        "category": "grocery",
        "confidence": 68,
        "needsReview": true
      },
      {
        "rawText": "CD DEEP MOISTURE BW 5.99",
        "description": "DEEP MOISTURE BW",
        "quantity": 1,
        "unit": null,
        "unitPrice": 5.99,
        "amount": 5.99,
        "category": "health and beauty",
        "confidence": 91,
        "needsReview": false
      },
      {
        "rawText": "HRD SLICED BACON",
        "description": "SLICED BACON",
        "quantity": 1,
        "unit": null,
        "unitPrice": null,
        "amount": null,
        "category": "meat",
        "confidence": 88,
        "needsReview": true
      }
    ],
    "adjustments": [
      {
        "rawText": "Tax Paid 5.5% 0.19",
        "kind": "tax",
        "amount": 0.19
      },
      {
        "rawText": "SALE",
        "kind": "other",
        "amount": null
      },
      {
        "rawText": "Debit Card",
        "kind": "payment",
        "amount": 18.77
      }
    ],
    "warnings": [
      "Several product abbreviations and line associations are partially unreadable.",
      "The visible line-item amounts do not reconcile with the printed balance of 18.77.",
      "The receipt date is not visible."
    ],
    "timing": {
      "totalMs": 11493,
      "imagePrepMs": 314,
      "modelMs": 11179,
      "postProcessMs": 0,
      "modelCalls": 1,
      "imageCount": 2,
      "model": "gpt-5.6-luna",
      "reasoningEffort": "low",
      "harness": "isolated-direct-request"
    }
  },
  "rawText": "Hannaford\n205 US Route 1 - Scarborough ME 04074\n(207) 883-7670, www.hannaford.com\nGROCERY\nHRD 100% RD KON? BNS 1.35\nHRD WH? BR? 2.29\nHRD LARGE BROWN EGGS 1.25\nHRD PLANT IN ... 2.89\nHRD ... MAYO? 3.49\nHEALTH & BEAUTY\nCD DEEP MOISTURE BW 5.99\nMEAT\nHRD SLICED BACON\nTax Paid 5.5% 0.19\n$15\nBALANCE DUE 18.77\nDebit Card\nSALE\nEntry Method: Chip\nLane #: 01\nA000000000000000\n8000\n160000101501\n019595",
  "rawOutputText": "{\"merchant\":\"Hannaford\",\"date\":null,\"currency\":\"USD\",\"subtotal\":null,\"tax\":0.19,\"total\":18.77,\"balance\":18.77,\"ocrText\":\"Hannaford\\n205 US Route 1 - Scarborough ME 04074\\n(207) 883-7670, www.hannaford.com\\nGROCERY\\nHRD 100% RD KON? BNS 1.35\\nHRD WH? BR? 2.29\\nHRD LARGE BROWN EGGS 1.25\\nHRD PLANT IN ... 2.89\\nHRD ... MAYO? 3.49\\nHEALTH & BEAUTY\\nCD DEEP MOISTURE BW 5.99\\nMEAT\\nHRD SLICED BACON\\nTax Paid 5.5% 0.19\\n$15\\nBALANCE DUE 18.77\\nDebit Card\\nSALE\\nEntry Method: Chip\\nLane #: 01\\nA000000000000000\\n8000\\n160000101501\\n019595\",\"lines\":[{\"rawText\":\"HRD 100% RD KON? BNS 1.35\",\"description\":\"100% RD KON? BNS\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.35,\"amount\":1.35,\"category\":\"grocery\",\"confidence\":72,\"needsReview\":true},{\"rawText\":\"HRD WH? BR? 2.29\",\"description\":\"WH? BR?\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.29,\"amount\":2.29,\"category\":\"grocery\",\"confidence\":65,\"needsReview\":true},{\"rawText\":\"HRD LARGE BROWN EGGS 1.25\",\"description\":\"LARGE BROWN EGGS\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.25,\"amount\":1.25,\"category\":\"grocery\",\"confidence\":96,\"needsReview\":false},{\"rawText\":\"HRD PLANT IN ... 2.89\",\"description\":\"PLANT IN ...\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.89,\"amount\":2.89,\"category\":\"grocery\",\"confidence\":70,\"needsReview\":true},{\"rawText\":\"HRD ... MAYO? 3.49\",\"description\":\"... MAYO?\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.49,\"amount\":3.49,\"category\":\"grocery\",\"confidence\":68,\"needsReview\":true},{\"rawText\":\"CD DEEP MOISTURE BW 5.99\",\"description\":\"DEEP MOISTURE BW\",\"quantity\":1,\"unit\":null,\"unitPrice\":5.99,\"amount\":5.99,\"category\":\"health and beauty\",\"confidence\":91,\"needsReview\":false},{\"rawText\":\"HRD SLICED BACON\",\"description\":\"SLICED BACON\",\"quantity\":1,\"unit\":null,\"unitPrice\":null,\"amount\":null,\"category\":\"meat\",\"confidence\":88,\"needsReview\":true}],\"adjustments\":[{\"rawText\":\"Tax Paid 5.5% 0.19\",\"kind\":\"tax\",\"amount\":0.19},{\"rawText\":\"SALE\",\"kind\":\"other\",\"amount\":null},{\"rawText\":\"Debit Card\",\"kind\":\"payment\",\"amount\":18.77}],\"warnings\":[\"Several product abbreviations and line associations are partially unreadable.\",\"The visible line-item amounts do not reconcile with the printed balance of 18.77.\",\"The receipt date is not visible.\"]}",
  "error": null,
  "timing": {
    "totalMs": 11493,
    "imagePrepMs": 314,
    "modelMs": 11179,
    "postProcessMs": 0,
    "modelCalls": 1,
    "imageCount": 2,
    "model": "gpt-5.6-luna",
    "reasoningEffort": "low",
    "harness": "isolated-direct-request"
  }
}
```

</details>

<details>
<summary><strong>hannaford-04</strong> — OK</summary>

Fixture image: [hannaford-04.jpg](../receipts/hannaford-04.jpg)
Complete JSON: [hannaford-04.json](hannaford-04.json)

```json
{
  "receipt": {
    "merchant": "Hannaford Food & Drug",
    "date": null,
    "currency": "USD",
    "subtotal": null,
    "tax": 0,
    "total": 34.8,
    "balance": 34.8,
    "ocrText": "Hannaford Food & Drug\n290 North Main St - Rochester NH 03867\n(603) 332-9580 - www.hannaford.com\nGROCERY\nFLGRS FRNCH CAN 10.3 3.99 *\nHRD 94% FF MICRO POP\n1 @ 2 FOR 4.00 2.00 *\nHRD LENTILS DRIED 1.39 *\nPOLANER BLKCHRY 1.99 *\nDME QUICK OATS 18Z 1.69 *\nDME CRNCHY PNT BUTR 2.19 *\nMEAT\nDME IQF CKN TENDER 6.99 *\nPRODUCE\nBANANAS\n1.08 lb @ 0.37/lb 0.40 *\nGREEN CUCUMBERS 0.50 *\nBUNCH SPINACH 1.59 *\nSWEET POTATOES\n1.05 lb @ 0.69/lb 0.72 *\nGRANNY SMITH APPLES\n0.81 lb @ 0.99/lb 0.80 *\nBARTLETT PEARS\n1.11 lb @ 0.99/lb 1.10 *\nRED TOMATOES ON VINE\n0.69 lb @ 1.69/lb 1.17 *\nRADISHES 1LB 1.49 *\nSEAFOOD\nATLANTIC SALM FILLT 6.79 *\nTOTAL TAX 0.00\n16 BALANCE DUE 34.80",
    "lines": [
      {
        "rawText": "FLGRS FRNCH CAN 10.3 3.99 *",
        "description": "FLGRS FRNCH CAN 10.3",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.99,
        "amount": 3.99,
        "category": "grocery",
        "confidence": 96,
        "needsReview": false
      },
      {
        "rawText": "HRD 94% FF MICRO POP / 1 @ 2 FOR 4.00 2.00 *",
        "description": "HRD 94% FF MICRO POP",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2,
        "amount": 2,
        "category": "grocery",
        "confidence": 94,
        "needsReview": false
      },
      {
        "rawText": "HRD LENTILS DRIED 1.39 *",
        "description": "HRD LENTILS DRIED",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.39,
        "amount": 1.39,
        "category": "grocery",
        "confidence": 97,
        "needsReview": false
      },
      {
        "rawText": "POLANER BLKCHRY 1.99 *",
        "description": "POLANER BLKCHRY",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.99,
        "amount": 1.99,
        "category": "grocery",
        "confidence": 96,
        "needsReview": false
      },
      {
        "rawText": "DME QUICK OATS 18Z 1.69 *",
        "description": "DME QUICK OATS 18Z",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.69,
        "amount": 1.69,
        "category": "grocery",
        "confidence": 95,
        "needsReview": false
      },
      {
        "rawText": "DME CRNCHY PNT BUTR 2.19 *",
        "description": "DME CRNCHY PNT BUTR",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.19,
        "amount": 2.19,
        "category": "grocery",
        "confidence": 96,
        "needsReview": false
      },
      {
        "rawText": "DME IQF CKN TENDER 6.99 *",
        "description": "DME IQF CKN TENDER",
        "quantity": 1,
        "unit": null,
        "unitPrice": 6.99,
        "amount": 6.99,
        "category": "meat",
        "confidence": 96,
        "needsReview": false
      },
      {
        "rawText": "BANANAS / 1.08 lb @ 0.37/lb 0.40 *",
        "description": "BANANAS",
        "quantity": 1.08,
        "unit": "lb",
        "unitPrice": 0.37,
        "amount": 0.4,
        "category": "produce",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "GREEN CUCUMBERS 0.50 *",
        "description": "GREEN CUCUMBERS",
        "quantity": 1,
        "unit": null,
        "unitPrice": 0.5,
        "amount": 0.5,
        "category": "produce",
        "confidence": 97,
        "needsReview": false
      },
      {
        "rawText": "BUNCH SPINACH 1.59 *",
        "description": "BUNCH SPINACH",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.59,
        "amount": 1.59,
        "category": "produce",
        "confidence": 97,
        "needsReview": false
      },
      {
        "rawText": "SWEET POTATOES / 1.05 lb @ 0.69/lb 0.72 *",
        "description": "SWEET POTATOES",
        "quantity": 1.05,
        "unit": "lb",
        "unitPrice": 0.69,
        "amount": 0.72,
        "category": "produce",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "GRANNY SMITH APPLES / 0.81 lb @ 0.99/lb 0.80 *",
        "description": "GRANNY SMITH APPLES",
        "quantity": 0.81,
        "unit": "lb",
        "unitPrice": 0.99,
        "amount": 0.8,
        "category": "produce",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "BARTLETT PEARS / 1.11 lb @ 0.99/lb 1.10 *",
        "description": "BARTLETT PEARS",
        "quantity": 1.11,
        "unit": "lb",
        "unitPrice": 0.99,
        "amount": 1.1,
        "category": "produce",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "RED TOMATOES ON VINE / 0.69 lb @ 1.69/lb 1.17 *",
        "description": "RED TOMATOES ON VINE",
        "quantity": 0.69,
        "unit": "lb",
        "unitPrice": 1.69,
        "amount": 1.17,
        "category": "produce",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "RADISHES 1LB 1.49 *",
        "description": "RADISHES 1LB",
        "quantity": 1,
        "unit": "lb",
        "unitPrice": 1.49,
        "amount": 1.49,
        "category": "produce",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "ATLANTIC SALM FILLT 6.79 *",
        "description": "ATLANTIC SALM FILLT",
        "quantity": 1,
        "unit": null,
        "unitPrice": 6.79,
        "amount": 6.79,
        "category": "seafood",
        "confidence": 96,
        "needsReview": false
      }
    ],
    "adjustments": [
      {
        "rawText": "TOTAL TAX 0.00",
        "kind": "tax",
        "amount": 0
      }
    ],
    "warnings": [
      "No printed subtotal was visible."
    ],
    "timing": {
      "totalMs": 11827,
      "imagePrepMs": 162,
      "modelMs": 11665,
      "postProcessMs": 0,
      "modelCalls": 1,
      "imageCount": 2,
      "model": "gpt-5.6-luna",
      "reasoningEffort": "low",
      "harness": "isolated-direct-request"
    }
  },
  "rawText": "Hannaford Food & Drug\n290 North Main St - Rochester NH 03867\n(603) 332-9580 - www.hannaford.com\nGROCERY\nFLGRS FRNCH CAN 10.3 3.99 *\nHRD 94% FF MICRO POP\n1 @ 2 FOR 4.00 2.00 *\nHRD LENTILS DRIED 1.39 *\nPOLANER BLKCHRY 1.99 *\nDME QUICK OATS 18Z 1.69 *\nDME CRNCHY PNT BUTR 2.19 *\nMEAT\nDME IQF CKN TENDER 6.99 *\nPRODUCE\nBANANAS\n1.08 lb @ 0.37/lb 0.40 *\nGREEN CUCUMBERS 0.50 *\nBUNCH SPINACH 1.59 *\nSWEET POTATOES\n1.05 lb @ 0.69/lb 0.72 *\nGRANNY SMITH APPLES\n0.81 lb @ 0.99/lb 0.80 *\nBARTLETT PEARS\n1.11 lb @ 0.99/lb 1.10 *\nRED TOMATOES ON VINE\n0.69 lb @ 1.69/lb 1.17 *\nRADISHES 1LB 1.49 *\nSEAFOOD\nATLANTIC SALM FILLT 6.79 *\nTOTAL TAX 0.00\n16 BALANCE DUE 34.80",
  "rawOutputText": "{\"merchant\":\"Hannaford Food & Drug\",\"date\":null,\"currency\":\"USD\",\"subtotal\":null,\"tax\":0.00,\"total\":34.80,\"balance\":34.80,\"ocrText\":\"Hannaford Food & Drug\\n290 North Main St - Rochester NH 03867\\n(603) 332-9580 - www.hannaford.com\\nGROCERY\\nFLGRS FRNCH CAN 10.3 3.99 *\\nHRD 94% FF MICRO POP\\n1 @ 2 FOR 4.00 2.00 *\\nHRD LENTILS DRIED 1.39 *\\nPOLANER BLKCHRY 1.99 *\\nDME QUICK OATS 18Z 1.69 *\\nDME CRNCHY PNT BUTR 2.19 *\\nMEAT\\nDME IQF CKN TENDER 6.99 *\\nPRODUCE\\nBANANAS\\n1.08 lb @ 0.37/lb 0.40 *\\nGREEN CUCUMBERS 0.50 *\\nBUNCH SPINACH 1.59 *\\nSWEET POTATOES\\n1.05 lb @ 0.69/lb 0.72 *\\nGRANNY SMITH APPLES\\n0.81 lb @ 0.99/lb 0.80 *\\nBARTLETT PEARS\\n1.11 lb @ 0.99/lb 1.10 *\\nRED TOMATOES ON VINE\\n0.69 lb @ 1.69/lb 1.17 *\\nRADISHES 1LB 1.49 *\\nSEAFOOD\\nATLANTIC SALM FILLT 6.79 *\\nTOTAL TAX 0.00\\n16 BALANCE DUE 34.80\",\"lines\":[{\"rawText\":\"FLGRS FRNCH CAN 10.3 3.99 *\",\"description\":\"FLGRS FRNCH CAN 10.3\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.99,\"amount\":3.99,\"category\":\"grocery\",\"confidence\":96,\"needsReview\":false},{\"rawText\":\"HRD 94% FF MICRO POP / 1 @ 2 FOR 4.00 2.00 *\",\"description\":\"HRD 94% FF MICRO POP\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.00,\"amount\":2.00,\"category\":\"grocery\",\"confidence\":94,\"needsReview\":false},{\"rawText\":\"HRD LENTILS DRIED 1.39 *\",\"description\":\"HRD LENTILS DRIED\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.39,\"amount\":1.39,\"category\":\"grocery\",\"confidence\":97,\"needsReview\":false},{\"rawText\":\"POLANER BLKCHRY 1.99 *\",\"description\":\"POLANER BLKCHRY\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.99,\"amount\":1.99,\"category\":\"grocery\",\"confidence\":96,\"needsReview\":false},{\"rawText\":\"DME QUICK OATS 18Z 1.69 *\",\"description\":\"DME QUICK OATS 18Z\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.69,\"amount\":1.69,\"category\":\"grocery\",\"confidence\":95,\"needsReview\":false},{\"rawText\":\"DME CRNCHY PNT BUTR 2.19 *\",\"description\":\"DME CRNCHY PNT BUTR\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.19,\"amount\":2.19,\"category\":\"grocery\",\"confidence\":96,\"needsReview\":false},{\"rawText\":\"DME IQF CKN TENDER 6.99 *\",\"description\":\"DME IQF CKN TENDER\",\"quantity\":1,\"unit\":null,\"unitPrice\":6.99,\"amount\":6.99,\"category\":\"meat\",\"confidence\":96,\"needsReview\":false},{\"rawText\":\"BANANAS / 1.08 lb @ 0.37/lb 0.40 *\",\"description\":\"BANANAS\",\"quantity\":1.08,\"unit\":\"lb\",\"unitPrice\":0.37,\"amount\":0.40,\"category\":\"produce\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"GREEN CUCUMBERS 0.50 *\",\"description\":\"GREEN CUCUMBERS\",\"quantity\":1,\"unit\":null,\"unitPrice\":0.50,\"amount\":0.50,\"category\":\"produce\",\"confidence\":97,\"needsReview\":false},{\"rawText\":\"BUNCH SPINACH 1.59 *\",\"description\":\"BUNCH SPINACH\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.59,\"amount\":1.59,\"category\":\"produce\",\"confidence\":97,\"needsReview\":false},{\"rawText\":\"SWEET POTATOES / 1.05 lb @ 0.69/lb 0.72 *\",\"description\":\"SWEET POTATOES\",\"quantity\":1.05,\"unit\":\"lb\",\"unitPrice\":0.69,\"amount\":0.72,\"category\":\"produce\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"GRANNY SMITH APPLES / 0.81 lb @ 0.99/lb 0.80 *\",\"description\":\"GRANNY SMITH APPLES\",\"quantity\":0.81,\"unit\":\"lb\",\"unitPrice\":0.99,\"amount\":0.80,\"category\":\"produce\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"BARTLETT PEARS / 1.11 lb @ 0.99/lb 1.10 *\",\"description\":\"BARTLETT PEARS\",\"quantity\":1.11,\"unit\":\"lb\",\"unitPrice\":0.99,\"amount\":1.10,\"category\":\"produce\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"RED TOMATOES ON VINE / 0.69 lb @ 1.69/lb 1.17 *\",\"description\":\"RED TOMATOES ON VINE\",\"quantity\":0.69,\"unit\":\"lb\",\"unitPrice\":1.69,\"amount\":1.17,\"category\":\"produce\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"RADISHES 1LB 1.49 *\",\"description\":\"RADISHES 1LB\",\"quantity\":1,\"unit\":\"lb\",\"unitPrice\":1.49,\"amount\":1.49,\"category\":\"produce\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"ATLANTIC SALM FILLT 6.79 *\",\"description\":\"ATLANTIC SALM FILLT\",\"quantity\":1,\"unit\":null,\"unitPrice\":6.79,\"amount\":6.79,\"category\":\"seafood\",\"confidence\":96,\"needsReview\":false}],\"adjustments\":[{\"rawText\":\"TOTAL TAX 0.00\",\"kind\":\"tax\",\"amount\":0.00}],\"warnings\":[\"No printed subtotal was visible.\"]}",
  "error": null,
  "timing": {
    "totalMs": 11827,
    "imagePrepMs": 162,
    "modelMs": 11665,
    "postProcessMs": 0,
    "modelCalls": 1,
    "imageCount": 2,
    "model": "gpt-5.6-luna",
    "reasoningEffort": "low",
    "harness": "isolated-direct-request"
  }
}
```

</details>

<details>
<summary><strong>hannaford-05</strong> — OK</summary>

Fixture image: [hannaford-05.jpg](../receipts/hannaford-05.jpg)
Complete JSON: [hannaford-05.json](hannaford-05.json)

```json
{
  "receipt": {
    "merchant": "Hannaford",
    "date": null,
    "currency": "USD",
    "subtotal": null,
    "tax": 0.33,
    "total": 16.02,
    "balance": 16.02,
    "ocrText": "Hannaford\n417 Payne Road - Scarborough, ME 04074\n(207) 883-0096 - www.hannaford.com\nDELI\nFS RUS WNDRBR BOLOGN 2.45 *\nGROCERY\nHRD DLX SHLS & CHDR\n2 @ 1.65 3.30 *\nHRD FARFALLE-BOW TIE\n2 @ 0.88 1.76 *\nHRD CRM CHE/CHV CRKR\n2 @ 1.79 3.58 A *\nHRD GRILL SPRAY 1.99 *\nHRD AMERCN WHT SNGL W\n2 @ 2.78 5.56 *\nHRD ELECTROLY+E WTR\n2 @ 1.09 2.18 A *\nHRD DICO TOMTO HABAN\n2 @ 0.89 1.78 *\nJNKLS GRNLA BR CINN 3.99 A *\nVendor Coupon -1.00 *\nMISC\nBOTTLE DEPOSIT\n2 @ 0.05 0.10 *\nSavings\nReward Coupon -10.00 *\nTax Paid\nSls Tax 5.5% 6.09 0.33\n15 BALANCE DUE 16.02\nMastercard $16.02\nMID: 16000102884",
    "lines": [
      {
        "rawText": "FS RUS WNDRBR BOLOGN 2.45 *",
        "description": "FS RUS WNDRBR BOLOGN",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.45,
        "amount": 2.45,
        "category": "deli",
        "confidence": 92,
        "needsReview": false
      },
      {
        "rawText": "HRD DLX SHLS & CHDR / 2 @ 1.65 / 3.30 *",
        "description": "HRD DLX SHLS & CHDR",
        "quantity": 2,
        "unit": null,
        "unitPrice": 1.65,
        "amount": 3.3,
        "category": "grocery",
        "confidence": 96,
        "needsReview": false
      },
      {
        "rawText": "HRD FARFALLE-BOW TIE / 2 @ 0.88 / 1.76 *",
        "description": "HRD FARFALLE-BOW TIE",
        "quantity": 2,
        "unit": null,
        "unitPrice": 0.88,
        "amount": 1.76,
        "category": "grocery",
        "confidence": 97,
        "needsReview": false
      },
      {
        "rawText": "HRD CRM CHE/CHV CRKR / 2 @ 1.79 / 3.58 A *",
        "description": "HRD CRM CHE/CHV CRKR",
        "quantity": 2,
        "unit": null,
        "unitPrice": 1.79,
        "amount": 3.58,
        "category": "grocery",
        "confidence": 94,
        "needsReview": false
      },
      {
        "rawText": "HRD GRILL SPRAY 1.99 *",
        "description": "HRD GRILL SPRAY",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.99,
        "amount": 1.99,
        "category": "grocery",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "HRD AMERCN WHT SNGL W / 2 @ 2.78 / 5.56 *",
        "description": "HRD AMERCN WHT SNGL W",
        "quantity": 2,
        "unit": null,
        "unitPrice": 2.78,
        "amount": 5.56,
        "category": "grocery",
        "confidence": 95,
        "needsReview": false
      },
      {
        "rawText": "HRD ELECTROLY+E WTR / 2 @ 1.09 / 2.18 A *",
        "description": "HRD ELECTROLY+E WTR",
        "quantity": 2,
        "unit": null,
        "unitPrice": 1.09,
        "amount": 2.18,
        "category": "grocery",
        "confidence": 93,
        "needsReview": false
      },
      {
        "rawText": "HRD DICO TOMTO HABAN / 2 @ 0.89 / 1.78 *",
        "description": "HRD DICO TOMTO HABAN",
        "quantity": 2,
        "unit": null,
        "unitPrice": 0.89,
        "amount": 1.78,
        "category": "grocery",
        "confidence": 92,
        "needsReview": false
      },
      {
        "rawText": "JNKLS GRNLA BR CINN 3.99 A *",
        "description": "JNKLS GRNLA BR CINN",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.99,
        "amount": 3.99,
        "category": "grocery",
        "confidence": 93,
        "needsReview": false
      },
      {
        "rawText": "BOTTLE DEPOSIT / 2 @ 0.05 / 0.10 *",
        "description": "BOTTLE DEPOSIT",
        "quantity": 2,
        "unit": null,
        "unitPrice": 0.05,
        "amount": 0.1,
        "category": "misc",
        "confidence": 98,
        "needsReview": false
      }
    ],
    "adjustments": [
      {
        "rawText": "Vendor Coupon -1.00 *",
        "kind": "coupon",
        "amount": 1
      },
      {
        "rawText": "Reward Coupon -10.00 *",
        "kind": "loyalty",
        "amount": 10
      },
      {
        "rawText": "Sls Tax 5.5% 6.09 0.33",
        "kind": "tax",
        "amount": 0.33
      },
      {
        "rawText": "Mastercard $16.02",
        "kind": "payment",
        "amount": 16.02
      }
    ],
    "warnings": [
      "Receipt date is not visible.",
      "No printed subtotal is visible; 6.09 appears to be the taxable sales base.",
      "Line-item amounts do not reconcile directly to the final balance because coupons and other receipt adjustments are present."
    ],
    "timing": {
      "totalMs": 7468,
      "imagePrepMs": 220,
      "modelMs": 7248,
      "postProcessMs": 0,
      "modelCalls": 1,
      "imageCount": 2,
      "model": "gpt-5.6-luna",
      "reasoningEffort": "low",
      "harness": "isolated-direct-request"
    }
  },
  "rawText": "Hannaford\n417 Payne Road - Scarborough, ME 04074\n(207) 883-0096 - www.hannaford.com\nDELI\nFS RUS WNDRBR BOLOGN 2.45 *\nGROCERY\nHRD DLX SHLS & CHDR\n2 @ 1.65 3.30 *\nHRD FARFALLE-BOW TIE\n2 @ 0.88 1.76 *\nHRD CRM CHE/CHV CRKR\n2 @ 1.79 3.58 A *\nHRD GRILL SPRAY 1.99 *\nHRD AMERCN WHT SNGL W\n2 @ 2.78 5.56 *\nHRD ELECTROLY+E WTR\n2 @ 1.09 2.18 A *\nHRD DICO TOMTO HABAN\n2 @ 0.89 1.78 *\nJNKLS GRNLA BR CINN 3.99 A *\nVendor Coupon -1.00 *\nMISC\nBOTTLE DEPOSIT\n2 @ 0.05 0.10 *\nSavings\nReward Coupon -10.00 *\nTax Paid\nSls Tax 5.5% 6.09 0.33\n15 BALANCE DUE 16.02\nMastercard $16.02\nMID: 16000102884",
  "rawOutputText": "{\"merchant\":\"Hannaford\",\"date\":null,\"currency\":\"USD\",\"subtotal\":null,\"tax\":0.33,\"total\":16.02,\"balance\":16.02,\"ocrText\":\"Hannaford\\n417 Payne Road - Scarborough, ME 04074\\n(207) 883-0096 - www.hannaford.com\\nDELI\\nFS RUS WNDRBR BOLOGN 2.45 *\\nGROCERY\\nHRD DLX SHLS & CHDR\\n2 @ 1.65 3.30 *\\nHRD FARFALLE-BOW TIE\\n2 @ 0.88 1.76 *\\nHRD CRM CHE/CHV CRKR\\n2 @ 1.79 3.58 A *\\nHRD GRILL SPRAY 1.99 *\\nHRD AMERCN WHT SNGL W\\n2 @ 2.78 5.56 *\\nHRD ELECTROLY+E WTR\\n2 @ 1.09 2.18 A *\\nHRD DICO TOMTO HABAN\\n2 @ 0.89 1.78 *\\nJNKLS GRNLA BR CINN 3.99 A *\\nVendor Coupon -1.00 *\\nMISC\\nBOTTLE DEPOSIT\\n2 @ 0.05 0.10 *\\nSavings\\nReward Coupon -10.00 *\\nTax Paid\\nSls Tax 5.5% 6.09 0.33\\n15 BALANCE DUE 16.02\\nMastercard $16.02\\nMID: 16000102884\",\"lines\":[{\"rawText\":\"FS RUS WNDRBR BOLOGN 2.45 *\",\"description\":\"FS RUS WNDRBR BOLOGN\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.45,\"amount\":2.45,\"category\":\"deli\",\"confidence\":92,\"needsReview\":false},{\"rawText\":\"HRD DLX SHLS & CHDR / 2 @ 1.65 / 3.30 *\",\"description\":\"HRD DLX SHLS & CHDR\",\"quantity\":2,\"unit\":null,\"unitPrice\":1.65,\"amount\":3.3,\"category\":\"grocery\",\"confidence\":96,\"needsReview\":false},{\"rawText\":\"HRD FARFALLE-BOW TIE / 2 @ 0.88 / 1.76 *\",\"description\":\"HRD FARFALLE-BOW TIE\",\"quantity\":2,\"unit\":null,\"unitPrice\":0.88,\"amount\":1.76,\"category\":\"grocery\",\"confidence\":97,\"needsReview\":false},{\"rawText\":\"HRD CRM CHE/CHV CRKR / 2 @ 1.79 / 3.58 A *\",\"description\":\"HRD CRM CHE/CHV CRKR\",\"quantity\":2,\"unit\":null,\"unitPrice\":1.79,\"amount\":3.58,\"category\":\"grocery\",\"confidence\":94,\"needsReview\":false},{\"rawText\":\"HRD GRILL SPRAY 1.99 *\",\"description\":\"HRD GRILL SPRAY\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.99,\"amount\":1.99,\"category\":\"grocery\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"HRD AMERCN WHT SNGL W / 2 @ 2.78 / 5.56 *\",\"description\":\"HRD AMERCN WHT SNGL W\",\"quantity\":2,\"unit\":null,\"unitPrice\":2.78,\"amount\":5.56,\"category\":\"grocery\",\"confidence\":95,\"needsReview\":false},{\"rawText\":\"HRD ELECTROLY+E WTR / 2 @ 1.09 / 2.18 A *\",\"description\":\"HRD ELECTROLY+E WTR\",\"quantity\":2,\"unit\":null,\"unitPrice\":1.09,\"amount\":2.18,\"category\":\"grocery\",\"confidence\":93,\"needsReview\":false},{\"rawText\":\"HRD DICO TOMTO HABAN / 2 @ 0.89 / 1.78 *\",\"description\":\"HRD DICO TOMTO HABAN\",\"quantity\":2,\"unit\":null,\"unitPrice\":0.89,\"amount\":1.78,\"category\":\"grocery\",\"confidence\":92,\"needsReview\":false},{\"rawText\":\"JNKLS GRNLA BR CINN 3.99 A *\",\"description\":\"JNKLS GRNLA BR CINN\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.99,\"amount\":3.99,\"category\":\"grocery\",\"confidence\":93,\"needsReview\":false},{\"rawText\":\"BOTTLE DEPOSIT / 2 @ 0.05 / 0.10 *\",\"description\":\"BOTTLE DEPOSIT\",\"quantity\":2,\"unit\":null,\"unitPrice\":0.05,\"amount\":0.1,\"category\":\"misc\",\"confidence\":98,\"needsReview\":false}],\"adjustments\":[{\"rawText\":\"Vendor Coupon -1.00 *\",\"kind\":\"coupon\",\"amount\":1},{\"rawText\":\"Reward Coupon -10.00 *\",\"kind\":\"loyalty\",\"amount\":10},{\"rawText\":\"Sls Tax 5.5% 6.09 0.33\",\"kind\":\"tax\",\"amount\":0.33},{\"rawText\":\"Mastercard $16.02\",\"kind\":\"payment\",\"amount\":16.02}],\"warnings\":[\"Receipt date is not visible.\",\"No printed subtotal is visible; 6.09 appears to be the taxable sales base.\",\"Line-item amounts do not reconcile directly to the final balance because coupons and other receipt adjustments are present.\"]}",
  "error": null,
  "timing": {
    "totalMs": 7468,
    "imagePrepMs": 220,
    "modelMs": 7248,
    "postProcessMs": 0,
    "modelCalls": 1,
    "imageCount": 2,
    "model": "gpt-5.6-luna",
    "reasoningEffort": "low",
    "harness": "isolated-direct-request"
  }
}
```

</details>

<details>
<summary><strong>shoprite-01</strong> — OK</summary>

Fixture image: [shoprite-01.jpeg](../receipts/shoprite-01.jpeg)
Complete JSON: [shoprite-01.json](shoprite-01.json)

```json
{
  "receipt": {
    "merchant": "ShopRite",
    "date": "7/23/25 11:18am",
    "currency": "USD",
    "subtotal": null,
    "tax": 0.18,
    "total": 6.71,
    "balance": 6.71,
    "ocrText": "ShopRite\nwe are here.\nWelcome to ShopRite\nof MARLBORO\n7/23/25 11:18am S193 R1 T47 C70594\n****************************************\nRegular Items\n****************************************\nCOKE CLASSIC CONTO 2.79 F\nFGF GF MOZZ STICKSPC 7.49 F\nOn Sale You Saved 0.50\nSC Feel Good Foods Mo 1.00-F\nFGF GF MOZZ STICKSPC 7.49 F\nOn Sale You Saved 0.50\nSC Feel Good Foods Mo 1.00-F\nFG 3 CHSE BITES CAPC 7.99 F\nOn Sale You Saved 1.60\nMC Feel Good Bites 1.00-F\nFGF PEPPERONI BITEPC 7.99 F\nOn Sale You Saved 1.60\nMC Feel Good Bites\nGILLIAM GARLIC BRE 1.00-F\nRUSSO GF MOZZ STIC 6.79 F\nValued Customer 9.99 F\nTAX 4705179167\n***** BALANCE 0.18\nShopRite Digital Receipt\nStore # MARLBORO",
    "lines": [
      {
        "rawText": "COKE CLASSIC CONTO 2.79 F",
        "description": "COKE CLASSIC CONTO",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.79,
        "amount": 2.79,
        "category": "beverage",
        "confidence": 93,
        "needsReview": false
      },
      {
        "rawText": "FGF GF MOZZ STICKSPC 7.49 F",
        "description": "FGF GF MOZZ STICKSPC",
        "quantity": 1,
        "unit": null,
        "unitPrice": 7.49,
        "amount": 7.49,
        "category": "frozen food",
        "confidence": 88,
        "needsReview": true
      },
      {
        "rawText": "FGF GF MOZZ STICKSPC 7.49 F",
        "description": "FGF GF MOZZ STICKSPC",
        "quantity": 1,
        "unit": null,
        "unitPrice": 7.49,
        "amount": 7.49,
        "category": "frozen food",
        "confidence": 88,
        "needsReview": true
      },
      {
        "rawText": "FG 3 CHSE BITES CAPC 7.99 F",
        "description": "FG 3 CHSE BITES CAPC",
        "quantity": 1,
        "unit": null,
        "unitPrice": 7.99,
        "amount": 7.99,
        "category": "frozen food",
        "confidence": 89,
        "needsReview": true
      },
      {
        "rawText": "FGF PEPPERONI BITEPC 7.99 F",
        "description": "FGF PEPPERONI BITEPC",
        "quantity": 1,
        "unit": null,
        "unitPrice": 7.99,
        "amount": 7.99,
        "category": "frozen food",
        "confidence": 89,
        "needsReview": true
      },
      {
        "rawText": "GILLIAM GARLIC BRE 1.00-F",
        "description": "GILLIAM GARLIC BRE",
        "quantity": 1,
        "unit": null,
        "unitPrice": null,
        "amount": null,
        "category": "bakery",
        "confidence": 82,
        "needsReview": true
      },
      {
        "rawText": "RUSSO GF MOZZ STIC 6.79 F",
        "description": "RUSSO GF MOZZ STIC",
        "quantity": 1,
        "unit": null,
        "unitPrice": 6.79,
        "amount": 6.79,
        "category": "frozen food",
        "confidence": 87,
        "needsReview": true
      }
    ],
    "adjustments": [
      {
        "rawText": "On Sale You Saved 0.50",
        "kind": "other",
        "amount": 0.5
      },
      {
        "rawText": "SC Feel Good Foods Mo 1.00-F",
        "kind": "coupon",
        "amount": 1
      },
      {
        "rawText": "On Sale You Saved 0.50",
        "kind": "other",
        "amount": 0.5
      },
      {
        "rawText": "SC Feel Good Foods Mo 1.00-F",
        "kind": "coupon",
        "amount": 1
      },
      {
        "rawText": "On Sale You Saved 1.60",
        "kind": "other",
        "amount": 1.6
      },
      {
        "rawText": "MC Feel Good Bites 1.00-F",
        "kind": "coupon",
        "amount": 1
      },
      {
        "rawText": "On Sale You Saved 1.60",
        "kind": "other",
        "amount": 1.6
      },
      {
        "rawText": "MC Feel Good Bites",
        "kind": "loyalty",
        "amount": null
      },
      {
        "rawText": "GILLIAM GARLIC BRE 1.00-F",
        "kind": "coupon",
        "amount": 1
      },
      {
        "rawText": "Valued Customer 9.99 F",
        "kind": "loyalty",
        "amount": null
      },
      {
        "rawText": "TAX 4705179167",
        "kind": "tax",
        "amount": 0.18
      }
    ],
    "warnings": [
      "Several product abbreviations are partially unclear.",
      "The receipt's tax line appears to include an unreadable tax identifier; tax amount was interpreted as 0.18.",
      "Subtotal is not printed or is unreadable.",
      "The visible line items and adjustments do not reconcile with the balance."
    ],
    "timing": {
      "totalMs": 9829,
      "imagePrepMs": 194,
      "modelMs": 9635,
      "postProcessMs": 0,
      "modelCalls": 1,
      "imageCount": 2,
      "model": "gpt-5.6-luna",
      "reasoningEffort": "low",
      "harness": "isolated-direct-request"
    }
  },
  "rawText": "ShopRite\nwe are here.\nWelcome to ShopRite\nof MARLBORO\n7/23/25 11:18am S193 R1 T47 C70594\n****************************************\nRegular Items\n****************************************\nCOKE CLASSIC CONTO 2.79 F\nFGF GF MOZZ STICKSPC 7.49 F\nOn Sale You Saved 0.50\nSC Feel Good Foods Mo 1.00-F\nFGF GF MOZZ STICKSPC 7.49 F\nOn Sale You Saved 0.50\nSC Feel Good Foods Mo 1.00-F\nFG 3 CHSE BITES CAPC 7.99 F\nOn Sale You Saved 1.60\nMC Feel Good Bites 1.00-F\nFGF PEPPERONI BITEPC 7.99 F\nOn Sale You Saved 1.60\nMC Feel Good Bites\nGILLIAM GARLIC BRE 1.00-F\nRUSSO GF MOZZ STIC 6.79 F\nValued Customer 9.99 F\nTAX 4705179167\n***** BALANCE 0.18\nShopRite Digital Receipt\nStore # MARLBORO",
  "rawOutputText": "{\"merchant\":\"ShopRite\",\"date\":\"7/23/25 11:18am\",\"currency\":\"USD\",\"subtotal\":null,\"tax\":0.18,\"total\":6.71,\"balance\":6.71,\"ocrText\":\"ShopRite\\nwe are here.\\nWelcome to ShopRite\\nof MARLBORO\\n7/23/25 11:18am S193 R1 T47 C70594\\n****************************************\\nRegular Items\\n****************************************\\nCOKE CLASSIC CONTO 2.79 F\\nFGF GF MOZZ STICKSPC 7.49 F\\nOn Sale You Saved 0.50\\nSC Feel Good Foods Mo 1.00-F\\nFGF GF MOZZ STICKSPC 7.49 F\\nOn Sale You Saved 0.50\\nSC Feel Good Foods Mo 1.00-F\\nFG 3 CHSE BITES CAPC 7.99 F\\nOn Sale You Saved 1.60\\nMC Feel Good Bites 1.00-F\\nFGF PEPPERONI BITEPC 7.99 F\\nOn Sale You Saved 1.60\\nMC Feel Good Bites\\nGILLIAM GARLIC BRE 1.00-F\\nRUSSO GF MOZZ STIC 6.79 F\\nValued Customer 9.99 F\\nTAX 4705179167\\n***** BALANCE 0.18\\nShopRite Digital Receipt\\nStore # MARLBORO\",\"lines\":[{\"rawText\":\"COKE CLASSIC CONTO 2.79 F\",\"description\":\"COKE CLASSIC CONTO\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.79,\"amount\":2.79,\"category\":\"beverage\",\"confidence\":93,\"needsReview\":false},{\"rawText\":\"FGF GF MOZZ STICKSPC 7.49 F\",\"description\":\"FGF GF MOZZ STICKSPC\",\"quantity\":1,\"unit\":null,\"unitPrice\":7.49,\"amount\":7.49,\"category\":\"frozen food\",\"confidence\":88,\"needsReview\":true},{\"rawText\":\"FGF GF MOZZ STICKSPC 7.49 F\",\"description\":\"FGF GF MOZZ STICKSPC\",\"quantity\":1,\"unit\":null,\"unitPrice\":7.49,\"amount\":7.49,\"category\":\"frozen food\",\"confidence\":88,\"needsReview\":true},{\"rawText\":\"FG 3 CHSE BITES CAPC 7.99 F\",\"description\":\"FG 3 CHSE BITES CAPC\",\"quantity\":1,\"unit\":null,\"unitPrice\":7.99,\"amount\":7.99,\"category\":\"frozen food\",\"confidence\":89,\"needsReview\":true},{\"rawText\":\"FGF PEPPERONI BITEPC 7.99 F\",\"description\":\"FGF PEPPERONI BITEPC\",\"quantity\":1,\"unit\":null,\"unitPrice\":7.99,\"amount\":7.99,\"category\":\"frozen food\",\"confidence\":89,\"needsReview\":true},{\"rawText\":\"GILLIAM GARLIC BRE 1.00-F\",\"description\":\"GILLIAM GARLIC BRE\",\"quantity\":1,\"unit\":null,\"unitPrice\":null,\"amount\":null,\"category\":\"bakery\",\"confidence\":82,\"needsReview\":true},{\"rawText\":\"RUSSO GF MOZZ STIC 6.79 F\",\"description\":\"RUSSO GF MOZZ STIC\",\"quantity\":1,\"unit\":null,\"unitPrice\":6.79,\"amount\":6.79,\"category\":\"frozen food\",\"confidence\":87,\"needsReview\":true}],\"adjustments\":[{\"rawText\":\"On Sale You Saved 0.50\",\"kind\":\"other\",\"amount\":0.5},{\"rawText\":\"SC Feel Good Foods Mo 1.00-F\",\"kind\":\"coupon\",\"amount\":1.0},{\"rawText\":\"On Sale You Saved 0.50\",\"kind\":\"other\",\"amount\":0.5},{\"rawText\":\"SC Feel Good Foods Mo 1.00-F\",\"kind\":\"coupon\",\"amount\":1.0},{\"rawText\":\"On Sale You Saved 1.60\",\"kind\":\"other\",\"amount\":1.6},{\"rawText\":\"MC Feel Good Bites 1.00-F\",\"kind\":\"coupon\",\"amount\":1.0},{\"rawText\":\"On Sale You Saved 1.60\",\"kind\":\"other\",\"amount\":1.6},{\"rawText\":\"MC Feel Good Bites\",\"kind\":\"loyalty\",\"amount\":null},{\"rawText\":\"GILLIAM GARLIC BRE 1.00-F\",\"kind\":\"coupon\",\"amount\":1.0},{\"rawText\":\"Valued Customer 9.99 F\",\"kind\":\"loyalty\",\"amount\":null},{\"rawText\":\"TAX 4705179167\",\"kind\":\"tax\",\"amount\":0.18}],\"warnings\":[\"Several product abbreviations are partially unclear.\",\"The receipt's tax line appears to include an unreadable tax identifier; tax amount was interpreted as 0.18.\",\"Subtotal is not printed or is unreadable.\",\"The visible line items and adjustments do not reconcile with the balance.\"]}",
  "error": null,
  "timing": {
    "totalMs": 9829,
    "imagePrepMs": 194,
    "modelMs": 9635,
    "postProcessMs": 0,
    "modelCalls": 1,
    "imageCount": 2,
    "model": "gpt-5.6-luna",
    "reasoningEffort": "low",
    "harness": "isolated-direct-request"
  }
}
```

</details>

<details>
<summary><strong>shoprite-02</strong> — OK</summary>

Fixture image: [shoprite-02.png](../receipts/shoprite-02.png)
Complete JSON: [shoprite-02.json](shoprite-02.json)

```json
{
  "receipt": {
    "merchant": "SHOPRITE",
    "date": "03/11/20",
    "currency": "USD",
    "subtotal": null,
    "tax": 2.04,
    "total": 277.83,
    "balance": 277.83,
    "ocrText": "WELCOME TO SHOPRITE\n2424 HYLAN BLVD\nSTATEN ISLAND, NY 10306\nPHONE # (718) 979-3303\n03/11/20 11:36am S110 R5 T37 C135\nYOUR CASHIER TODAY: QUADRAJAH\n************************************\n*              Regular Items        *\n************************************\n12 @ 2.99\nSW MISS HC NSA PC 35.88 F\nOn Sale You Saved 0.12\n4 @ 1.00\nSC PC Swiss Miss Hot 1.00-F\n12 @ 3.99\nHELMAN MAYONNAISE 47.88 F\n36 @ 2/4.00\nBB TUNA SOLID WHT 72.00 F\nNV GRN BAR S/S PB PC 2.99 F\nOn Sale You Saved 1.01\nSC PC Nature Vall MFR 1.00-F\nNV GRN BAR S/S PB PC 2.99 F\nOn Sale You Saved 1.01\nSC PC Nature Vall MFR 1.00-F\nNV GRN BAR S/S PB PC 2.99 F\nOn Sale You Saved 1.01\nSC PC Nature Vall MFR 1.00-F\nNV GRN BAR S/S PB PC 2.99 F\nOn Sale You Saved 1.01\nSC PC Nature Vall MFR 1.00-F\nNV GRN BAR S/S CH PC 2.99 F\nOn Sale You Saved 1.01\nSC PC Nature Vall MFR 1.00-F\nNV GRN BAR S/S CH PC 2.99 F\nOn Sale You Saved 1.01\nSC PC Nature Vall MFR 1.00-F\nNV GRN SLTD CRM CPC 2.99 F\nOn Sale You Saved 1.01\nSC PC Nature Vall MFR 1.00-F\nNV GRN SLTD CRM CPC 2.99 F\nOn Sale You Saved 1.01\nSC PC Nature Vall MFR 1.00-F\nNV GRN SLTD CRM CPC 2.99 F\nOn Sale You Saved 1.01\nSC PC Nature Vall MFR 1.00-F\nNV GRN BAR S/S ALMPC 2.99 F\nOn Sale You Saved 1.01\nSC PC Nature Vall MFR 1.00-F\nNV GRN BAR S/S ALMPC 2.99 F\nOn Sale You Saved 1.01\nSC PC Nature Vall MFR 1.00-F\n4 @ 4.09\nGM CINN TST CRNCH PC 16.36 F\nOn Sale You Saved 3.60\nSC PC General Mills C 1.10-F\nSC MM General Mills P 3.00-F\nSC MM General Mills P 3.00-F\n3 @ 4.09\nGM GOLDEN GRAHMS LPC 12.27 F\nOn Sale You Saved 2.00\nSC PC General Mills G 1.10-F\n2 @ 1.10\nSC PC General Mills G 2.20-F\n3 @ 3.49\nGM HNY-NUT CHEER LPC 10.47 F\nSC PC General Mills H 0.50-F\nSC MM General Mills P 3.00-F\n2 @ 4.09\nGM REESES PB PFFS PC 8.18 F\nOn Sale You Saved 2.80\nSC PC General Mills R 1.10-F\nSC MM General Mills P 3.00-F\n4.08 lb @ 0.49 /lb\nWT BANANA NAKED OTHER 2.00 F\n5.41 lb @ 0.49 /lb\nWT BANANA NAKED OTHER 2.65 F\n6.14 lb @ 0.49 /lb\nWT BANANA NAKED OTHER 3.01 F\n2.21 lb @ 0.49 /lb\nWT BANANA NAKED OTHER 1.08 F\nCLEM IMPORTED BOX 5.29 F\n2 @ 5.99\nHALO CLEMS 3LB PC 11.98 F\nSC PP PRODUCE COUNT 1.00-F\nSC PP PRODUCE COUNT 1.00-F\n8 @ 1.99\nSR CHS BAR MLD CHE 15.92 F\nOn Sale You Saved 4.08\n4 @ 1.99\nSR CHEESE SWISS 7.96 F\nOn Sale You Saved 2.04\nSR BBY WIPE SCNT 7 10.99 T\nSR BBY WIPE SCNT 7 10.99 T\n2 @ 1.00\nSR ALWAYS FRESH BA 2.00 T\nValued Customer 44014510423\n************************************\n*              Coupons              *\n************************************\nSC PA SHOPRITE REUSAB 1.00-T\nTAX 2.04\n**** BALANCE 277.83\n********Transaction EMV Record******\nShopRite of STATEN ISLAND, NY\nStore # 110\nTerminal: 5 Operator: 135\n03/11/20 11:36am 37\nAcct#: ************5816 CHIP\nPurchase: $ 277.83\nRESPONSE CODE: Approved\nAPPROVAL CODE: 102830\nPREPAID CARD BALANCE:\nAID: A0000000031010\nVisa Credit",
    "lines": [
      {
        "rawText": "SW MISS HC NSA PC 35.88 F",
        "description": "SW MISS HC NSA PC",
        "quantity": 12,
        "unit": null,
        "unitPrice": 2.99,
        "amount": 35.88,
        "category": "grocery",
        "confidence": 96,
        "needsReview": false
      },
      {
        "rawText": "SC PC Swiss Miss Hot 1.00-F",
        "description": "Swiss Miss Hot",
        "quantity": null,
        "unit": null,
        "unitPrice": null,
        "amount": null,
        "category": "coupon",
        "confidence": 92,
        "needsReview": false
      },
      {
        "rawText": "HELMAN MAYONNAISE 47.88 F",
        "description": "HELMAN MAYONNAISE",
        "quantity": 12,
        "unit": null,
        "unitPrice": 3.99,
        "amount": 47.88,
        "category": "grocery",
        "confidence": 96,
        "needsReview": false
      },
      {
        "rawText": "BB TUNA SOLID WHT 72.00 F",
        "description": "BB TUNA SOLID WHT",
        "quantity": 36,
        "unit": null,
        "unitPrice": 2,
        "amount": 72,
        "category": "grocery",
        "confidence": 95,
        "needsReview": false
      },
      {
        "rawText": "NV GRN BAR S/S PB PC 2.99 F",
        "description": "NV GRN BAR S/S PB PC",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.99,
        "amount": 2.99,
        "category": "grocery",
        "confidence": 94,
        "needsReview": false
      },
      {
        "rawText": "NV GRN BAR S/S CH PC 2.99 F",
        "description": "NV GRN BAR S/S CH PC",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.99,
        "amount": 2.99,
        "category": "grocery",
        "confidence": 94,
        "needsReview": false
      },
      {
        "rawText": "NV GRN SLTD CRM CPC 2.99 F",
        "description": "NV GRN SLTD CRM CPC",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.99,
        "amount": 2.99,
        "category": "grocery",
        "confidence": 94,
        "needsReview": false
      },
      {
        "rawText": "NV GRN BAR S/S ALMPC 2.99 F",
        "description": "NV GRN BAR S/S ALMPC",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.99,
        "amount": 2.99,
        "category": "grocery",
        "confidence": 94,
        "needsReview": false
      },
      {
        "rawText": "GM CINN TST CRNCH PC 16.36 F",
        "description": "GM CINN TST CRNCH PC",
        "quantity": 4,
        "unit": null,
        "unitPrice": 4.09,
        "amount": 16.36,
        "category": "grocery",
        "confidence": 96,
        "needsReview": false
      },
      {
        "rawText": "GM GOLDEN GRAHMS LPC 12.27 F",
        "description": "GM GOLDEN GRAHMS LPC",
        "quantity": 3,
        "unit": null,
        "unitPrice": 4.09,
        "amount": 12.27,
        "category": "grocery",
        "confidence": 94,
        "needsReview": false
      },
      {
        "rawText": "GM HNY-NUT CHEER LPC 10.47 F",
        "description": "GM HNY-NUT CHEER LPC",
        "quantity": 3,
        "unit": null,
        "unitPrice": 3.49,
        "amount": 10.47,
        "category": "grocery",
        "confidence": 95,
        "needsReview": false
      },
      {
        "rawText": "GM REESES PB PFFS PC 8.18 F",
        "description": "GM REESES PB PFFS PC",
        "quantity": 2,
        "unit": null,
        "unitPrice": 4.09,
        "amount": 8.18,
        "category": "grocery",
        "confidence": 95,
        "needsReview": false
      },
      {
        "rawText": "WT BANANA NAKED OTHER 2.00 F",
        "description": "BANANA NAKED OTHER",
        "quantity": 4.08,
        "unit": "lb",
        "unitPrice": 0.49,
        "amount": 2,
        "category": "produce",
        "confidence": 94,
        "needsReview": false
      },
      {
        "rawText": "WT BANANA NAKED OTHER 2.65 F",
        "description": "BANANA NAKED OTHER",
        "quantity": 5.41,
        "unit": "lb",
        "unitPrice": 0.49,
        "amount": 2.65,
        "category": "produce",
        "confidence": 94,
        "needsReview": false
      },
      {
        "rawText": "WT BANANA NAKED OTHER 3.01 F",
        "description": "BANANA NAKED OTHER",
        "quantity": 6.14,
        "unit": "lb",
        "unitPrice": 0.49,
        "amount": 3.01,
        "category": "produce",
        "confidence": 94,
        "needsReview": false
      },
      {
        "rawText": "WT BANANA NAKED OTHER 1.08 F",
        "description": "BANANA NAKED OTHER",
        "quantity": 2.21,
        "unit": "lb",
        "unitPrice": 0.49,
        "amount": 1.08,
        "category": "produce",
        "confidence": 94,
        "needsReview": false
      },
      {
        "rawText": "CLEM IMPORTED BOX 5.29 F",
        "description": "CLEM IMPORTED BOX",
        "quantity": null,
        "unit": null,
        "unitPrice": null,
        "amount": 5.29,
        "category": "produce",
        "confidence": 92,
        "needsReview": false
      },
      {
        "rawText": "HALO CLEMS 3LB PC 11.98 F",
        "description": "HALO CLEMS 3LB PC",
        "quantity": 2,
        "unit": null,
        "unitPrice": 5.99,
        "amount": 11.98,
        "category": "produce",
        "confidence": 95,
        "needsReview": false
      },
      {
        "rawText": "SR CHS BAR MLD CHE 15.92 F",
        "description": "SR CHS BAR MLD CHE",
        "quantity": 8,
        "unit": null,
        "unitPrice": 1.99,
        "amount": 15.92,
        "category": "grocery",
        "confidence": 92,
        "needsReview": false
      },
      {
        "rawText": "SR CHEESE SWISS 7.96 F",
        "description": "SR CHEESE SWISS",
        "quantity": 4,
        "unit": null,
        "unitPrice": 1.99,
        "amount": 7.96,
        "category": "grocery",
        "confidence": 95,
        "needsReview": false
      },
      {
        "rawText": "SR BBY WIPE SCNT 7 10.99 T",
        "description": "SR BBY WIPE SCNT 7",
        "quantity": 1,
        "unit": null,
        "unitPrice": 10.99,
        "amount": 10.99,
        "category": "taxable",
        "confidence": 93,
        "needsReview": false
      },
      {
        "rawText": "SR BBY WIPE SCNT 7 10.99 T",
        "description": "SR BBY WIPE SCNT 7",
        "quantity": 1,
        "unit": null,
        "unitPrice": 10.99,
        "amount": 10.99,
        "category": "taxable",
        "confidence": 93,
        "needsReview": false
      },
      {
        "rawText": "SR ALWAYS FRESH BA 2.00 T",
        "description": "SR ALWAYS FRESH BA",
        "quantity": 2,
        "unit": null,
        "unitPrice": 1,
        "amount": 2,
        "category": "taxable",
        "confidence": 88,
        "needsReview": true
      }
    ],
    "adjustments": [
      {
        "rawText": "On Sale You Saved 0.12",
        "kind": "discount",
        "amount": 0.12
      },
      {
        "rawText": "SC PC Swiss Miss Hot 1.00-F",
        "kind": "coupon",
        "amount": 1
      },
      {
        "rawText": "On Sale You Saved 1.01",
        "kind": "discount",
        "amount": 1.01
      },
      {
        "rawText": "SC PC Nature Vall MFR 1.00-F",
        "kind": "coupon",
        "amount": 1
      },
      {
        "rawText": "SC PC Nature Vall MFR 1.00-F",
        "kind": "coupon",
        "amount": 1
      },
      {
        "rawText": "SC PC Nature Vall MFR 1.00-F",
        "kind": "coupon",
        "amount": 1
      },
      {
        "rawText": "SC PC Nature Vall MFR 1.00-F",
        "kind": "coupon",
        "amount": 1
      },
      {
        "rawText": "SC PC Nature Vall MFR 1.00-F",
        "kind": "coupon",
        "amount": 1
      },
      {
        "rawText": "SC PC Nature Vall MFR 1.00-F",
        "kind": "coupon",
        "amount": 1
      },
      {
        "rawText": "SC PC Nature Vall MFR 1.00-F",
        "kind": "coupon",
        "amount": 1
      },
      {
        "rawText": "SC PC Nature Vall MFR 1.00-F",
        "kind": "coupon",
        "amount": 1
      },
      {
        "rawText": "SC PC Nature Vall MFR 1.00-F",
        "kind": "coupon",
        "amount": 1
      },
      {
        "rawText": "SC PC Nature Vall MFR 1.00-F",
        "kind": "coupon",
        "amount": 1
      },
      {
        "rawText": "SC PC Nature Vall MFR 1.00-F",
        "kind": "coupon",
        "amount": 1
      },
      {
        "rawText": "SC PC General Mills C 1.10-F",
        "kind": "coupon",
        "amount": 1.1
      },
      {
        "rawText": "SC MM General Mills P 3.00-F",
        "kind": "coupon",
        "amount": 3
      },
      {
        "rawText": "SC MM General Mills P 3.00-F",
        "kind": "coupon",
        "amount": 3
      },
      {
        "rawText": "SC PC General Mills G 1.10-F",
        "kind": "coupon",
        "amount": 1.1
      },
      {
        "rawText": "SC PC General Mills H 0.50-F",
        "kind": "coupon",
        "amount": 0.5
      },
      {
        "rawText": "SC MM General Mills P 3.00-F",
        "kind": "coupon",
        "amount": 3
      },
      {
        "rawText": "SC PC General Mills R 1.10-F",
        "kind": "coupon",
        "amount": 1.1
      },
      {
        "rawText": "SC MM General Mills P 3.00-F",
        "kind": "coupon",
        "amount": 3
      },
      {
        "rawText": "SC PP PRODUCE COUNT 1.00-F",
        "kind": "coupon",
        "amount": 1
      },
      {
        "rawText": "SC PP PRODUCE COUNT 1.00-F",
        "kind": "coupon",
        "amount": 1
      },
      {
        "rawText": "SC PA SHOPRITE REUSAB 1.00-T",
        "kind": "coupon",
        "amount": 1
      },
      {
        "rawText": "TAX 2.04",
        "kind": "tax",
        "amount": 2.04
      },
      {
        "rawText": "Purchase: $ 277.83",
        "kind": "payment",
        "amount": 277.83
      }
    ],
    "warnings": [
      "Subtotal is not printed or readable.",
      "The receipt contains multiple repeated sale and coupon rows; some abbreviated product associations are uncertain.",
      "The visible product lines and adjustments are not independently reconciled to the final balance."
    ],
    "timing": {
      "totalMs": 18085,
      "imagePrepMs": 233,
      "modelMs": 17852,
      "postProcessMs": 0,
      "modelCalls": 1,
      "imageCount": 2,
      "model": "gpt-5.6-luna",
      "reasoningEffort": "low",
      "harness": "isolated-direct-request"
    }
  },
  "rawText": "WELCOME TO SHOPRITE\n2424 HYLAN BLVD\nSTATEN ISLAND, NY 10306\nPHONE # (718) 979-3303\n03/11/20 11:36am S110 R5 T37 C135\nYOUR CASHIER TODAY: QUADRAJAH\n************************************\n*              Regular Items        *\n************************************\n12 @ 2.99\nSW MISS HC NSA PC 35.88 F\nOn Sale You Saved 0.12\n4 @ 1.00\nSC PC Swiss Miss Hot 1.00-F\n12 @ 3.99\nHELMAN MAYONNAISE 47.88 F\n36 @ 2/4.00\nBB TUNA SOLID WHT 72.00 F\nNV GRN BAR S/S PB PC 2.99 F\nOn Sale You Saved 1.01\nSC PC Nature Vall MFR 1.00-F\nNV GRN BAR S/S PB PC 2.99 F\nOn Sale You Saved 1.01\nSC PC Nature Vall MFR 1.00-F\nNV GRN BAR S/S PB PC 2.99 F\nOn Sale You Saved 1.01\nSC PC Nature Vall MFR 1.00-F\nNV GRN BAR S/S PB PC 2.99 F\nOn Sale You Saved 1.01\nSC PC Nature Vall MFR 1.00-F\nNV GRN BAR S/S CH PC 2.99 F\nOn Sale You Saved 1.01\nSC PC Nature Vall MFR 1.00-F\nNV GRN BAR S/S CH PC 2.99 F\nOn Sale You Saved 1.01\nSC PC Nature Vall MFR 1.00-F\nNV GRN SLTD CRM CPC 2.99 F\nOn Sale You Saved 1.01\nSC PC Nature Vall MFR 1.00-F\nNV GRN SLTD CRM CPC 2.99 F\nOn Sale You Saved 1.01\nSC PC Nature Vall MFR 1.00-F\nNV GRN SLTD CRM CPC 2.99 F\nOn Sale You Saved 1.01\nSC PC Nature Vall MFR 1.00-F\nNV GRN BAR S/S ALMPC 2.99 F\nOn Sale You Saved 1.01\nSC PC Nature Vall MFR 1.00-F\nNV GRN BAR S/S ALMPC 2.99 F\nOn Sale You Saved 1.01\nSC PC Nature Vall MFR 1.00-F\n4 @ 4.09\nGM CINN TST CRNCH PC 16.36 F\nOn Sale You Saved 3.60\nSC PC General Mills C 1.10-F\nSC MM General Mills P 3.00-F\nSC MM General Mills P 3.00-F\n3 @ 4.09\nGM GOLDEN GRAHMS LPC 12.27 F\nOn Sale You Saved 2.00\nSC PC General Mills G 1.10-F\n2 @ 1.10\nSC PC General Mills G 2.20-F\n3 @ 3.49\nGM HNY-NUT CHEER LPC 10.47 F\nSC PC General Mills H 0.50-F\nSC MM General Mills P 3.00-F\n2 @ 4.09\nGM REESES PB PFFS PC 8.18 F\nOn Sale You Saved 2.80\nSC PC General Mills R 1.10-F\nSC MM General Mills P 3.00-F\n4.08 lb @ 0.49 /lb\nWT BANANA NAKED OTHER 2.00 F\n5.41 lb @ 0.49 /lb\nWT BANANA NAKED OTHER 2.65 F\n6.14 lb @ 0.49 /lb\nWT BANANA NAKED OTHER 3.01 F\n2.21 lb @ 0.49 /lb\nWT BANANA NAKED OTHER 1.08 F\nCLEM IMPORTED BOX 5.29 F\n2 @ 5.99\nHALO CLEMS 3LB PC 11.98 F\nSC PP PRODUCE COUNT 1.00-F\nSC PP PRODUCE COUNT 1.00-F\n8 @ 1.99\nSR CHS BAR MLD CHE 15.92 F\nOn Sale You Saved 4.08\n4 @ 1.99\nSR CHEESE SWISS 7.96 F\nOn Sale You Saved 2.04\nSR BBY WIPE SCNT 7 10.99 T\nSR BBY WIPE SCNT 7 10.99 T\n2 @ 1.00\nSR ALWAYS FRESH BA 2.00 T\nValued Customer 44014510423\n************************************\n*              Coupons              *\n************************************\nSC PA SHOPRITE REUSAB 1.00-T\nTAX 2.04\n**** BALANCE 277.83\n********Transaction EMV Record******\nShopRite of STATEN ISLAND, NY\nStore # 110\nTerminal: 5 Operator: 135\n03/11/20 11:36am 37\nAcct#: ************5816 CHIP\nPurchase: $ 277.83\nRESPONSE CODE: Approved\nAPPROVAL CODE: 102830\nPREPAID CARD BALANCE:\nAID: A0000000031010\nVisa Credit",
  "rawOutputText": "{\"merchant\":\"SHOPRITE\",\"date\":\"03/11/20\",\"currency\":\"USD\",\"subtotal\":null,\"tax\":2.04,\"total\":277.83,\"balance\":277.83,\"ocrText\":\"WELCOME TO SHOPRITE\\n2424 HYLAN BLVD\\nSTATEN ISLAND, NY 10306\\nPHONE # (718) 979-3303\\n03/11/20 11:36am S110 R5 T37 C135\\nYOUR CASHIER TODAY: QUADRAJAH\\n************************************\\n*              Regular Items        *\\n************************************\\n12 @ 2.99\\nSW MISS HC NSA PC 35.88 F\\nOn Sale You Saved 0.12\\n4 @ 1.00\\nSC PC Swiss Miss Hot 1.00-F\\n12 @ 3.99\\nHELMAN MAYONNAISE 47.88 F\\n36 @ 2/4.00\\nBB TUNA SOLID WHT 72.00 F\\nNV GRN BAR S/S PB PC 2.99 F\\nOn Sale You Saved 1.01\\nSC PC Nature Vall MFR 1.00-F\\nNV GRN BAR S/S PB PC 2.99 F\\nOn Sale You Saved 1.01\\nSC PC Nature Vall MFR 1.00-F\\nNV GRN BAR S/S PB PC 2.99 F\\nOn Sale You Saved 1.01\\nSC PC Nature Vall MFR 1.00-F\\nNV GRN BAR S/S PB PC 2.99 F\\nOn Sale You Saved 1.01\\nSC PC Nature Vall MFR 1.00-F\\nNV GRN BAR S/S CH PC 2.99 F\\nOn Sale You Saved 1.01\\nSC PC Nature Vall MFR 1.00-F\\nNV GRN BAR S/S CH PC 2.99 F\\nOn Sale You Saved 1.01\\nSC PC Nature Vall MFR 1.00-F\\nNV GRN SLTD CRM CPC 2.99 F\\nOn Sale You Saved 1.01\\nSC PC Nature Vall MFR 1.00-F\\nNV GRN SLTD CRM CPC 2.99 F\\nOn Sale You Saved 1.01\\nSC PC Nature Vall MFR 1.00-F\\nNV GRN SLTD CRM CPC 2.99 F\\nOn Sale You Saved 1.01\\nSC PC Nature Vall MFR 1.00-F\\nNV GRN BAR S/S ALMPC 2.99 F\\nOn Sale You Saved 1.01\\nSC PC Nature Vall MFR 1.00-F\\nNV GRN BAR S/S ALMPC 2.99 F\\nOn Sale You Saved 1.01\\nSC PC Nature Vall MFR 1.00-F\\n4 @ 4.09\\nGM CINN TST CRNCH PC 16.36 F\\nOn Sale You Saved 3.60\\nSC PC General Mills C 1.10-F\\nSC MM General Mills P 3.00-F\\nSC MM General Mills P 3.00-F\\n3 @ 4.09\\nGM GOLDEN GRAHMS LPC 12.27 F\\nOn Sale You Saved 2.00\\nSC PC General Mills G 1.10-F\\n2 @ 1.10\\nSC PC General Mills G 2.20-F\\n3 @ 3.49\\nGM HNY-NUT CHEER LPC 10.47 F\\nSC PC General Mills H 0.50-F\\nSC MM General Mills P 3.00-F\\n2 @ 4.09\\nGM REESES PB PFFS PC 8.18 F\\nOn Sale You Saved 2.80\\nSC PC General Mills R 1.10-F\\nSC MM General Mills P 3.00-F\\n4.08 lb @ 0.49 /lb\\nWT BANANA NAKED OTHER 2.00 F\\n5.41 lb @ 0.49 /lb\\nWT BANANA NAKED OTHER 2.65 F\\n6.14 lb @ 0.49 /lb\\nWT BANANA NAKED OTHER 3.01 F\\n2.21 lb @ 0.49 /lb\\nWT BANANA NAKED OTHER 1.08 F\\nCLEM IMPORTED BOX 5.29 F\\n2 @ 5.99\\nHALO CLEMS 3LB PC 11.98 F\\nSC PP PRODUCE COUNT 1.00-F\\nSC PP PRODUCE COUNT 1.00-F\\n8 @ 1.99\\nSR CHS BAR MLD CHE 15.92 F\\nOn Sale You Saved 4.08\\n4 @ 1.99\\nSR CHEESE SWISS 7.96 F\\nOn Sale You Saved 2.04\\nSR BBY WIPE SCNT 7 10.99 T\\nSR BBY WIPE SCNT 7 10.99 T\\n2 @ 1.00\\nSR ALWAYS FRESH BA 2.00 T\\nValued Customer 44014510423\\n************************************\\n*              Coupons              *\\n************************************\\nSC PA SHOPRITE REUSAB 1.00-T\\nTAX 2.04\\n**** BALANCE 277.83\\n********Transaction EMV Record******\\nShopRite of STATEN ISLAND, NY\\nStore # 110\\nTerminal: 5 Operator: 135\\n03/11/20 11:36am 37\\nAcct#: ************5816 CHIP\\nPurchase: $ 277.83\\nRESPONSE CODE: Approved\\nAPPROVAL CODE: 102830\\nPREPAID CARD BALANCE:\\nAID: A0000000031010\\nVisa Credit\",\"lines\":[{\"rawText\":\"SW MISS HC NSA PC 35.88 F\",\"description\":\"SW MISS HC NSA PC\",\"quantity\":12,\"unit\":null,\"unitPrice\":2.99,\"amount\":35.88,\"category\":\"grocery\",\"confidence\":96,\"needsReview\":false},{\"rawText\":\"SC PC Swiss Miss Hot 1.00-F\",\"description\":\"Swiss Miss Hot\",\"quantity\":null,\"unit\":null,\"unitPrice\":null,\"amount\":null,\"category\":\"coupon\",\"confidence\":92,\"needsReview\":false},{\"rawText\":\"HELMAN MAYONNAISE 47.88 F\",\"description\":\"HELMAN MAYONNAISE\",\"quantity\":12,\"unit\":null,\"unitPrice\":3.99,\"amount\":47.88,\"category\":\"grocery\",\"confidence\":96,\"needsReview\":false},{\"rawText\":\"BB TUNA SOLID WHT 72.00 F\",\"description\":\"BB TUNA SOLID WHT\",\"quantity\":36,\"unit\":null,\"unitPrice\":2,\"amount\":72,\"category\":\"grocery\",\"confidence\":95,\"needsReview\":false},{\"rawText\":\"NV GRN BAR S/S PB PC 2.99 F\",\"description\":\"NV GRN BAR S/S PB PC\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.99,\"amount\":2.99,\"category\":\"grocery\",\"confidence\":94,\"needsReview\":false},{\"rawText\":\"NV GRN BAR S/S CH PC 2.99 F\",\"description\":\"NV GRN BAR S/S CH PC\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.99,\"amount\":2.99,\"category\":\"grocery\",\"confidence\":94,\"needsReview\":false},{\"rawText\":\"NV GRN SLTD CRM CPC 2.99 F\",\"description\":\"NV GRN SLTD CRM CPC\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.99,\"amount\":2.99,\"category\":\"grocery\",\"confidence\":94,\"needsReview\":false},{\"rawText\":\"NV GRN BAR S/S ALMPC 2.99 F\",\"description\":\"NV GRN BAR S/S ALMPC\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.99,\"amount\":2.99,\"category\":\"grocery\",\"confidence\":94,\"needsReview\":false},{\"rawText\":\"GM CINN TST CRNCH PC 16.36 F\",\"description\":\"GM CINN TST CRNCH PC\",\"quantity\":4,\"unit\":null,\"unitPrice\":4.09,\"amount\":16.36,\"category\":\"grocery\",\"confidence\":96,\"needsReview\":false},{\"rawText\":\"GM GOLDEN GRAHMS LPC 12.27 F\",\"description\":\"GM GOLDEN GRAHMS LPC\",\"quantity\":3,\"unit\":null,\"unitPrice\":4.09,\"amount\":12.27,\"category\":\"grocery\",\"confidence\":94,\"needsReview\":false},{\"rawText\":\"GM HNY-NUT CHEER LPC 10.47 F\",\"description\":\"GM HNY-NUT CHEER LPC\",\"quantity\":3,\"unit\":null,\"unitPrice\":3.49,\"amount\":10.47,\"category\":\"grocery\",\"confidence\":95,\"needsReview\":false},{\"rawText\":\"GM REESES PB PFFS PC 8.18 F\",\"description\":\"GM REESES PB PFFS PC\",\"quantity\":2,\"unit\":null,\"unitPrice\":4.09,\"amount\":8.18,\"category\":\"grocery\",\"confidence\":95,\"needsReview\":false},{\"rawText\":\"WT BANANA NAKED OTHER 2.00 F\",\"description\":\"BANANA NAKED OTHER\",\"quantity\":4.08,\"unit\":\"lb\",\"unitPrice\":0.49,\"amount\":2,\"category\":\"produce\",\"confidence\":94,\"needsReview\":false},{\"rawText\":\"WT BANANA NAKED OTHER 2.65 F\",\"description\":\"BANANA NAKED OTHER\",\"quantity\":5.41,\"unit\":\"lb\",\"unitPrice\":0.49,\"amount\":2.65,\"category\":\"produce\",\"confidence\":94,\"needsReview\":false},{\"rawText\":\"WT BANANA NAKED OTHER 3.01 F\",\"description\":\"BANANA NAKED OTHER\",\"quantity\":6.14,\"unit\":\"lb\",\"unitPrice\":0.49,\"amount\":3.01,\"category\":\"produce\",\"confidence\":94,\"needsReview\":false},{\"rawText\":\"WT BANANA NAKED OTHER 1.08 F\",\"description\":\"BANANA NAKED OTHER\",\"quantity\":2.21,\"unit\":\"lb\",\"unitPrice\":0.49,\"amount\":1.08,\"category\":\"produce\",\"confidence\":94,\"needsReview\":false},{\"rawText\":\"CLEM IMPORTED BOX 5.29 F\",\"description\":\"CLEM IMPORTED BOX\",\"quantity\":null,\"unit\":null,\"unitPrice\":null,\"amount\":5.29,\"category\":\"produce\",\"confidence\":92,\"needsReview\":false},{\"rawText\":\"HALO CLEMS 3LB PC 11.98 F\",\"description\":\"HALO CLEMS 3LB PC\",\"quantity\":2,\"unit\":null,\"unitPrice\":5.99,\"amount\":11.98,\"category\":\"produce\",\"confidence\":95,\"needsReview\":false},{\"rawText\":\"SR CHS BAR MLD CHE 15.92 F\",\"description\":\"SR CHS BAR MLD CHE\",\"quantity\":8,\"unit\":null,\"unitPrice\":1.99,\"amount\":15.92,\"category\":\"grocery\",\"confidence\":92,\"needsReview\":false},{\"rawText\":\"SR CHEESE SWISS 7.96 F\",\"description\":\"SR CHEESE SWISS\",\"quantity\":4,\"unit\":null,\"unitPrice\":1.99,\"amount\":7.96,\"category\":\"grocery\",\"confidence\":95,\"needsReview\":false},{\"rawText\":\"SR BBY WIPE SCNT 7 10.99 T\",\"description\":\"SR BBY WIPE SCNT 7\",\"quantity\":1,\"unit\":null,\"unitPrice\":10.99,\"amount\":10.99,\"category\":\"taxable\",\"confidence\":93,\"needsReview\":false},{\"rawText\":\"SR BBY WIPE SCNT 7 10.99 T\",\"description\":\"SR BBY WIPE SCNT 7\",\"quantity\":1,\"unit\":null,\"unitPrice\":10.99,\"amount\":10.99,\"category\":\"taxable\",\"confidence\":93,\"needsReview\":false},{\"rawText\":\"SR ALWAYS FRESH BA 2.00 T\",\"description\":\"SR ALWAYS FRESH BA\",\"quantity\":2,\"unit\":null,\"unitPrice\":1,\"amount\":2,\"category\":\"taxable\",\"confidence\":88,\"needsReview\":true}],\"adjustments\":[{\"rawText\":\"On Sale You Saved 0.12\",\"kind\":\"discount\",\"amount\":0.12},{\"rawText\":\"SC PC Swiss Miss Hot 1.00-F\",\"kind\":\"coupon\",\"amount\":1},{\"rawText\":\"On Sale You Saved 1.01\",\"kind\":\"discount\",\"amount\":1.01},{\"rawText\":\"SC PC Nature Vall MFR 1.00-F\",\"kind\":\"coupon\",\"amount\":1},{\"rawText\":\"SC PC Nature Vall MFR 1.00-F\",\"kind\":\"coupon\",\"amount\":1},{\"rawText\":\"SC PC Nature Vall MFR 1.00-F\",\"kind\":\"coupon\",\"amount\":1},{\"rawText\":\"SC PC Nature Vall MFR 1.00-F\",\"kind\":\"coupon\",\"amount\":1},{\"rawText\":\"SC PC Nature Vall MFR 1.00-F\",\"kind\":\"coupon\",\"amount\":1},{\"rawText\":\"SC PC Nature Vall MFR 1.00-F\",\"kind\":\"coupon\",\"amount\":1},{\"rawText\":\"SC PC Nature Vall MFR 1.00-F\",\"kind\":\"coupon\",\"amount\":1},{\"rawText\":\"SC PC Nature Vall MFR 1.00-F\",\"kind\":\"coupon\",\"amount\":1},{\"rawText\":\"SC PC Nature Vall MFR 1.00-F\",\"kind\":\"coupon\",\"amount\":1},{\"rawText\":\"SC PC Nature Vall MFR 1.00-F\",\"kind\":\"coupon\",\"amount\":1},{\"rawText\":\"SC PC Nature Vall MFR 1.00-F\",\"kind\":\"coupon\",\"amount\":1},{\"rawText\":\"SC PC General Mills C 1.10-F\",\"kind\":\"coupon\",\"amount\":1.1},{\"rawText\":\"SC MM General Mills P 3.00-F\",\"kind\":\"coupon\",\"amount\":3},{\"rawText\":\"SC MM General Mills P 3.00-F\",\"kind\":\"coupon\",\"amount\":3},{\"rawText\":\"SC PC General Mills G 1.10-F\",\"kind\":\"coupon\",\"amount\":1.1},{\"rawText\":\"SC PC General Mills H 0.50-F\",\"kind\":\"coupon\",\"amount\":0.5},{\"rawText\":\"SC MM General Mills P 3.00-F\",\"kind\":\"coupon\",\"amount\":3},{\"rawText\":\"SC PC General Mills R 1.10-F\",\"kind\":\"coupon\",\"amount\":1.1},{\"rawText\":\"SC MM General Mills P 3.00-F\",\"kind\":\"coupon\",\"amount\":3},{\"rawText\":\"SC PP PRODUCE COUNT 1.00-F\",\"kind\":\"coupon\",\"amount\":1},{\"rawText\":\"SC PP PRODUCE COUNT 1.00-F\",\"kind\":\"coupon\",\"amount\":1},{\"rawText\":\"SC PA SHOPRITE REUSAB 1.00-T\",\"kind\":\"coupon\",\"amount\":1},{\"rawText\":\"TAX 2.04\",\"kind\":\"tax\",\"amount\":2.04},{\"rawText\":\"Purchase: $ 277.83\",\"kind\":\"payment\",\"amount\":277.83}],\"warnings\":[\"Subtotal is not printed or readable.\",\"The receipt contains multiple repeated sale and coupon rows; some abbreviated product associations are uncertain.\",\"The visible product lines and adjustments are not independently reconciled to the final balance.\"]}",
  "error": null,
  "timing": {
    "totalMs": 18085,
    "imagePrepMs": 233,
    "modelMs": 17852,
    "postProcessMs": 0,
    "modelCalls": 1,
    "imageCount": 2,
    "model": "gpt-5.6-luna",
    "reasoningEffort": "low",
    "harness": "isolated-direct-request"
  }
}
```

</details>

<details>
<summary><strong>shoprite-03</strong> — OK</summary>

Fixture image: [shoprite-03.png](../receipts/shoprite-03.png)
Complete JSON: [shoprite-03.json](shoprite-03.json)

```json
{
  "receipt": {
    "merchant": "ShopRite of Scarsdale",
    "date": "02/20/25 06:37pm",
    "currency": "USD",
    "subtotal": null,
    "tax": 2.55,
    "total": 75.76,
    "balance": 75.76,
    "ocrText": "RECEIPT #5B\nShopRite\nwe are here.\nWelcome to ShopRite\nof SCARSDALE\nStore Manager: JON PAUL LAKE\n** Store Phone Number 914-874-2973\n02/20/25 06:37pm 290 10 181 Op131\n************************************\n* Items Purchased Today *\n************************************\nDXE 10 OZ BOWLS 4.49 T\nDXE 10 OZ BOWLS 4.49 T\nDXE 10 OZ BOWLS 4.49 T\nTETLEY TEA BRITISH 4.29 T\nSRPB EVERYDY SPOON 1.99 T\nPURE LIFE 24PK WATPC 5.79 B\nOn Sale You Saved 0.50\nDP BOTTLE DEPOSIT 1.20 F\nSC Pure Life Purified 5.37-B\nPURE LIFE 24PK WATPC 5.79 B\nOn Sale You Saved 0.50\nDP BOTTLE DEPOSIT 1.20 F\nDS PURE LIFE 24PK WAT 2.00-B\nPURE LIFE 24PK WATPC 5.79 B\nOn Sale You Saved 0.50\nDP BOTTLE DEPOSIT 1.20 F\nSRPB EVERYDY SPOON 1.99 T\nSPRING TR PURE MAP 9.49 F\nSRBB ORIG COFFEE C 6.99 F\nRON ROTELLE 1.79 F\nSHREDDED CARROTS 1 2.99 F\n2.40 lb @ 0.69 /lb\nWT BANANA BAG #3 1.66 F\nCBT GREEK STYLE YO 5.49 F\nWPO WHOLE MILK 6.49 F\nXTRATUFF WHT TRSH 0.99 T\nOn Sale You Saved 4.00\nXTRATUFF WHT TRSH 0.99 T\nOn Sale You Saved 4.00\nXTRATUFF WHT TRSH 0.99 T\nOn Sale You Saved 4.00\nValued Customer 48102122168\nTAX 2.55\n**** BALANCE 75.76\nCASH 100.00\nCHANGE 24.24\nTOTAL NUMBER OF ITEMS SOLD = 19\n------ ShopRite Savings ------\nTotal On Sale Savings $ 13.50\nPPC & Str Cpns $ 7.37\nTotal Savings today is $ 20.87\n--------------------------------\n02/20/25 06:37pm 290 10 181 131",
    "lines": [
      {
        "rawText": "DXE 10 OZ BOWLS 4.49 T",
        "description": "DXE 10 OZ BOWLS",
        "quantity": 1,
        "unit": null,
        "unitPrice": 4.49,
        "amount": 4.49,
        "category": "household",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "DXE 10 OZ BOWLS 4.49 T",
        "description": "DXE 10 OZ BOWLS",
        "quantity": 1,
        "unit": null,
        "unitPrice": 4.49,
        "amount": 4.49,
        "category": "household",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "DXE 10 OZ BOWLS 4.49 T",
        "description": "DXE 10 OZ BOWLS",
        "quantity": 1,
        "unit": null,
        "unitPrice": 4.49,
        "amount": 4.49,
        "category": "household",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "TETLEY TEA BRITISH 4.29 T",
        "description": "TETLEY TEA BRITISH",
        "quantity": 1,
        "unit": null,
        "unitPrice": 4.29,
        "amount": 4.29,
        "category": "beverages",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "SRPB EVERYDY SPOON 1.99 T",
        "description": "SRPB EVERYDY SPOON",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.99,
        "amount": 1.99,
        "category": "household",
        "confidence": 97,
        "needsReview": false
      },
      {
        "rawText": "PURE LIFE 24PK WATPC 5.79 B",
        "description": "PURE LIFE 24PK WATPC",
        "quantity": 1,
        "unit": null,
        "unitPrice": 5.79,
        "amount": 5.79,
        "category": "beverages",
        "confidence": 96,
        "needsReview": false
      },
      {
        "rawText": "PURE LIFE 24PK WATPC 5.79 B",
        "description": "PURE LIFE 24PK WATPC",
        "quantity": 1,
        "unit": null,
        "unitPrice": 5.79,
        "amount": 5.79,
        "category": "beverages",
        "confidence": 96,
        "needsReview": false
      },
      {
        "rawText": "PURE LIFE 24PK WATPC 5.79 B",
        "description": "PURE LIFE 24PK WATPC",
        "quantity": 1,
        "unit": null,
        "unitPrice": 5.79,
        "amount": 5.79,
        "category": "beverages",
        "confidence": 96,
        "needsReview": false
      },
      {
        "rawText": "SRPB EVERYDY SPOON 1.99 T",
        "description": "SRPB EVERYDY SPOON",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.99,
        "amount": 1.99,
        "category": "household",
        "confidence": 97,
        "needsReview": false
      },
      {
        "rawText": "SPRING TR PURE MAP 9.49 F",
        "description": "SPRING TR PURE MAP",
        "quantity": 1,
        "unit": null,
        "unitPrice": 9.49,
        "amount": 9.49,
        "category": "beverages",
        "confidence": 95,
        "needsReview": false
      },
      {
        "rawText": "SRBB ORIG COFFEE C 6.99 F",
        "description": "SRBB ORIG COFFEE C",
        "quantity": 1,
        "unit": null,
        "unitPrice": 6.99,
        "amount": 6.99,
        "category": "beverages",
        "confidence": 95,
        "needsReview": false
      },
      {
        "rawText": "RON ROTELLE 1.79 F",
        "description": "RON ROTELLE",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.79,
        "amount": 1.79,
        "category": "grocery",
        "confidence": 97,
        "needsReview": false
      },
      {
        "rawText": "SHREDDED CARROTS 1 2.99 F",
        "description": "SHREDDED CARROTS 1",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.99,
        "amount": 2.99,
        "category": "produce",
        "confidence": 96,
        "needsReview": false
      },
      {
        "rawText": "WT BANANA BAG #3 1.66 F",
        "description": "BANANA BAG #3",
        "quantity": 1,
        "unit": "bag",
        "unitPrice": 1.66,
        "amount": 1.66,
        "category": "produce",
        "confidence": 96,
        "needsReview": false
      },
      {
        "rawText": "CBT GREEK STYLE YO 5.49 F",
        "description": "CBT GREEK STYLE YO",
        "quantity": 1,
        "unit": null,
        "unitPrice": 5.49,
        "amount": 5.49,
        "category": "dairy",
        "confidence": 94,
        "needsReview": false
      },
      {
        "rawText": "WPO WHOLE MILK 6.49 F",
        "description": "WPO WHOLE MILK",
        "quantity": 1,
        "unit": null,
        "unitPrice": 6.49,
        "amount": 6.49,
        "category": "dairy",
        "confidence": 95,
        "needsReview": false
      },
      {
        "rawText": "XTRATUFF WHT TRSH 0.99 T",
        "description": "XTRATUFF WHT TRSH",
        "quantity": 1,
        "unit": null,
        "unitPrice": 0.99,
        "amount": 0.99,
        "category": "household",
        "confidence": 96,
        "needsReview": false
      },
      {
        "rawText": "XTRATUFF WHT TRSH 0.99 T",
        "description": "XTRATUFF WHT TRSH",
        "quantity": 1,
        "unit": null,
        "unitPrice": 0.99,
        "amount": 0.99,
        "category": "household",
        "confidence": 96,
        "needsReview": false
      },
      {
        "rawText": "XTRATUFF WHT TRSH 0.99 T",
        "description": "XTRATUFF WHT TRSH",
        "quantity": 1,
        "unit": null,
        "unitPrice": 0.99,
        "amount": 0.99,
        "category": "household",
        "confidence": 96,
        "needsReview": false
      }
    ],
    "adjustments": [
      {
        "rawText": "DP BOTTLE DEPOSIT 1.20 F",
        "kind": "other",
        "amount": 1.2
      },
      {
        "rawText": "SC Pure Life Purified 5.37-B",
        "kind": "loyalty",
        "amount": null
      },
      {
        "rawText": "DP BOTTLE DEPOSIT 1.20 F",
        "kind": "other",
        "amount": 1.2
      },
      {
        "rawText": "DS PURE LIFE 24PK WAT 2.00-B",
        "kind": "discount",
        "amount": 2
      },
      {
        "rawText": "DP BOTTLE DEPOSIT 1.20 F",
        "kind": "other",
        "amount": 1.2
      },
      {
        "rawText": "On Sale You Saved 0.50",
        "kind": "discount",
        "amount": 0.5
      },
      {
        "rawText": "On Sale You Saved 0.50",
        "kind": "discount",
        "amount": 0.5
      },
      {
        "rawText": "On Sale You Saved 0.50",
        "kind": "discount",
        "amount": 0.5
      },
      {
        "rawText": "On Sale You Saved 4.00",
        "kind": "discount",
        "amount": 4
      },
      {
        "rawText": "On Sale You Saved 4.00",
        "kind": "discount",
        "amount": 4
      },
      {
        "rawText": "On Sale You Saved 4.00",
        "kind": "discount",
        "amount": 4
      },
      {
        "rawText": "PPC & Str Cpns $ 7.37",
        "kind": "coupon",
        "amount": 7.37
      },
      {
        "rawText": "TAX 2.55",
        "kind": "tax",
        "amount": 2.55
      },
      {
        "rawText": "CASH 100.00",
        "kind": "payment",
        "amount": 100
      },
      {
        "rawText": "CHANGE 24.24",
        "kind": "payment",
        "amount": 24.24
      }
    ],
    "warnings": [
      "Subtotal is not printed on the receipt.",
      "SC/DS promotional rows contain abbreviated pricing codes and were preserved without interpreting them as separate products.",
      "Bottle deposit rows are recorded as adjustments and excluded from the 19 purchased-item count."
    ],
    "timing": {
      "totalMs": 20565,
      "imagePrepMs": 98,
      "modelMs": 20467,
      "postProcessMs": 0,
      "modelCalls": 1,
      "imageCount": 2,
      "model": "gpt-5.6-luna",
      "reasoningEffort": "low",
      "harness": "isolated-direct-request"
    }
  },
  "rawText": "RECEIPT #5B\nShopRite\nwe are here.\nWelcome to ShopRite\nof SCARSDALE\nStore Manager: JON PAUL LAKE\n** Store Phone Number 914-874-2973\n02/20/25 06:37pm 290 10 181 Op131\n************************************\n* Items Purchased Today *\n************************************\nDXE 10 OZ BOWLS 4.49 T\nDXE 10 OZ BOWLS 4.49 T\nDXE 10 OZ BOWLS 4.49 T\nTETLEY TEA BRITISH 4.29 T\nSRPB EVERYDY SPOON 1.99 T\nPURE LIFE 24PK WATPC 5.79 B\nOn Sale You Saved 0.50\nDP BOTTLE DEPOSIT 1.20 F\nSC Pure Life Purified 5.37-B\nPURE LIFE 24PK WATPC 5.79 B\nOn Sale You Saved 0.50\nDP BOTTLE DEPOSIT 1.20 F\nDS PURE LIFE 24PK WAT 2.00-B\nPURE LIFE 24PK WATPC 5.79 B\nOn Sale You Saved 0.50\nDP BOTTLE DEPOSIT 1.20 F\nSRPB EVERYDY SPOON 1.99 T\nSPRING TR PURE MAP 9.49 F\nSRBB ORIG COFFEE C 6.99 F\nRON ROTELLE 1.79 F\nSHREDDED CARROTS 1 2.99 F\n2.40 lb @ 0.69 /lb\nWT BANANA BAG #3 1.66 F\nCBT GREEK STYLE YO 5.49 F\nWPO WHOLE MILK 6.49 F\nXTRATUFF WHT TRSH 0.99 T\nOn Sale You Saved 4.00\nXTRATUFF WHT TRSH 0.99 T\nOn Sale You Saved 4.00\nXTRATUFF WHT TRSH 0.99 T\nOn Sale You Saved 4.00\nValued Customer 48102122168\nTAX 2.55\n**** BALANCE 75.76\nCASH 100.00\nCHANGE 24.24\nTOTAL NUMBER OF ITEMS SOLD = 19\n------ ShopRite Savings ------\nTotal On Sale Savings $ 13.50\nPPC & Str Cpns $ 7.37\nTotal Savings today is $ 20.87\n--------------------------------\n02/20/25 06:37pm 290 10 181 131",
  "rawOutputText": "{\"merchant\":\"ShopRite of Scarsdale\",\"date\":\"02/20/25 06:37pm\",\"currency\":\"USD\",\"subtotal\":null,\"tax\":2.55,\"total\":75.76,\"balance\":75.76,\"ocrText\":\"RECEIPT #5B\\nShopRite\\nwe are here.\\nWelcome to ShopRite\\nof SCARSDALE\\nStore Manager: JON PAUL LAKE\\n** Store Phone Number 914-874-2973\\n02/20/25 06:37pm 290 10 181 Op131\\n************************************\\n* Items Purchased Today *\\n************************************\\nDXE 10 OZ BOWLS 4.49 T\\nDXE 10 OZ BOWLS 4.49 T\\nDXE 10 OZ BOWLS 4.49 T\\nTETLEY TEA BRITISH 4.29 T\\nSRPB EVERYDY SPOON 1.99 T\\nPURE LIFE 24PK WATPC 5.79 B\\nOn Sale You Saved 0.50\\nDP BOTTLE DEPOSIT 1.20 F\\nSC Pure Life Purified 5.37-B\\nPURE LIFE 24PK WATPC 5.79 B\\nOn Sale You Saved 0.50\\nDP BOTTLE DEPOSIT 1.20 F\\nDS PURE LIFE 24PK WAT 2.00-B\\nPURE LIFE 24PK WATPC 5.79 B\\nOn Sale You Saved 0.50\\nDP BOTTLE DEPOSIT 1.20 F\\nSRPB EVERYDY SPOON 1.99 T\\nSPRING TR PURE MAP 9.49 F\\nSRBB ORIG COFFEE C 6.99 F\\nRON ROTELLE 1.79 F\\nSHREDDED CARROTS 1 2.99 F\\n2.40 lb @ 0.69 /lb\\nWT BANANA BAG #3 1.66 F\\nCBT GREEK STYLE YO 5.49 F\\nWPO WHOLE MILK 6.49 F\\nXTRATUFF WHT TRSH 0.99 T\\nOn Sale You Saved 4.00\\nXTRATUFF WHT TRSH 0.99 T\\nOn Sale You Saved 4.00\\nXTRATUFF WHT TRSH 0.99 T\\nOn Sale You Saved 4.00\\nValued Customer 48102122168\\nTAX 2.55\\n**** BALANCE 75.76\\nCASH 100.00\\nCHANGE 24.24\\nTOTAL NUMBER OF ITEMS SOLD = 19\\n------ ShopRite Savings ------\\nTotal On Sale Savings $ 13.50\\nPPC & Str Cpns $ 7.37\\nTotal Savings today is $ 20.87\\n--------------------------------\\n02/20/25 06:37pm 290 10 181 131\",\"lines\":[{\"rawText\":\"DXE 10 OZ BOWLS 4.49 T\",\"description\":\"DXE 10 OZ BOWLS\",\"quantity\":1,\"unit\":null,\"unitPrice\":4.49,\"amount\":4.49,\"category\":\"household\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"DXE 10 OZ BOWLS 4.49 T\",\"description\":\"DXE 10 OZ BOWLS\",\"quantity\":1,\"unit\":null,\"unitPrice\":4.49,\"amount\":4.49,\"category\":\"household\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"DXE 10 OZ BOWLS 4.49 T\",\"description\":\"DXE 10 OZ BOWLS\",\"quantity\":1,\"unit\":null,\"unitPrice\":4.49,\"amount\":4.49,\"category\":\"household\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"TETLEY TEA BRITISH 4.29 T\",\"description\":\"TETLEY TEA BRITISH\",\"quantity\":1,\"unit\":null,\"unitPrice\":4.29,\"amount\":4.29,\"category\":\"beverages\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"SRPB EVERYDY SPOON 1.99 T\",\"description\":\"SRPB EVERYDY SPOON\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.99,\"amount\":1.99,\"category\":\"household\",\"confidence\":97,\"needsReview\":false},{\"rawText\":\"PURE LIFE 24PK WATPC 5.79 B\",\"description\":\"PURE LIFE 24PK WATPC\",\"quantity\":1,\"unit\":null,\"unitPrice\":5.79,\"amount\":5.79,\"category\":\"beverages\",\"confidence\":96,\"needsReview\":false},{\"rawText\":\"PURE LIFE 24PK WATPC 5.79 B\",\"description\":\"PURE LIFE 24PK WATPC\",\"quantity\":1,\"unit\":null,\"unitPrice\":5.79,\"amount\":5.79,\"category\":\"beverages\",\"confidence\":96,\"needsReview\":false},{\"rawText\":\"PURE LIFE 24PK WATPC 5.79 B\",\"description\":\"PURE LIFE 24PK WATPC\",\"quantity\":1,\"unit\":null,\"unitPrice\":5.79,\"amount\":5.79,\"category\":\"beverages\",\"confidence\":96,\"needsReview\":false},{\"rawText\":\"SRPB EVERYDY SPOON 1.99 T\",\"description\":\"SRPB EVERYDY SPOON\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.99,\"amount\":1.99,\"category\":\"household\",\"confidence\":97,\"needsReview\":false},{\"rawText\":\"SPRING TR PURE MAP 9.49 F\",\"description\":\"SPRING TR PURE MAP\",\"quantity\":1,\"unit\":null,\"unitPrice\":9.49,\"amount\":9.49,\"category\":\"beverages\",\"confidence\":95,\"needsReview\":false},{\"rawText\":\"SRBB ORIG COFFEE C 6.99 F\",\"description\":\"SRBB ORIG COFFEE C\",\"quantity\":1,\"unit\":null,\"unitPrice\":6.99,\"amount\":6.99,\"category\":\"beverages\",\"confidence\":95,\"needsReview\":false},{\"rawText\":\"RON ROTELLE 1.79 F\",\"description\":\"RON ROTELLE\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.79,\"amount\":1.79,\"category\":\"grocery\",\"confidence\":97,\"needsReview\":false},{\"rawText\":\"SHREDDED CARROTS 1 2.99 F\",\"description\":\"SHREDDED CARROTS 1\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.99,\"amount\":2.99,\"category\":\"produce\",\"confidence\":96,\"needsReview\":false},{\"rawText\":\"WT BANANA BAG #3 1.66 F\",\"description\":\"BANANA BAG #3\",\"quantity\":1,\"unit\":\"bag\",\"unitPrice\":1.66,\"amount\":1.66,\"category\":\"produce\",\"confidence\":96,\"needsReview\":false},{\"rawText\":\"CBT GREEK STYLE YO 5.49 F\",\"description\":\"CBT GREEK STYLE YO\",\"quantity\":1,\"unit\":null,\"unitPrice\":5.49,\"amount\":5.49,\"category\":\"dairy\",\"confidence\":94,\"needsReview\":false},{\"rawText\":\"WPO WHOLE MILK 6.49 F\",\"description\":\"WPO WHOLE MILK\",\"quantity\":1,\"unit\":null,\"unitPrice\":6.49,\"amount\":6.49,\"category\":\"dairy\",\"confidence\":95,\"needsReview\":false},{\"rawText\":\"XTRATUFF WHT TRSH 0.99 T\",\"description\":\"XTRATUFF WHT TRSH\",\"quantity\":1,\"unit\":null,\"unitPrice\":0.99,\"amount\":0.99,\"category\":\"household\",\"confidence\":96,\"needsReview\":false},{\"rawText\":\"XTRATUFF WHT TRSH 0.99 T\",\"description\":\"XTRATUFF WHT TRSH\",\"quantity\":1,\"unit\":null,\"unitPrice\":0.99,\"amount\":0.99,\"category\":\"household\",\"confidence\":96,\"needsReview\":false},{\"rawText\":\"XTRATUFF WHT TRSH 0.99 T\",\"description\":\"XTRATUFF WHT TRSH\",\"quantity\":1,\"unit\":null,\"unitPrice\":0.99,\"amount\":0.99,\"category\":\"household\",\"confidence\":96,\"needsReview\":false}],\"adjustments\":[{\"rawText\":\"DP BOTTLE DEPOSIT 1.20 F\",\"kind\":\"other\",\"amount\":1.2},{\"rawText\":\"SC Pure Life Purified 5.37-B\",\"kind\":\"loyalty\",\"amount\":null},{\"rawText\":\"DP BOTTLE DEPOSIT 1.20 F\",\"kind\":\"other\",\"amount\":1.2},{\"rawText\":\"DS PURE LIFE 24PK WAT 2.00-B\",\"kind\":\"discount\",\"amount\":2.0},{\"rawText\":\"DP BOTTLE DEPOSIT 1.20 F\",\"kind\":\"other\",\"amount\":1.2},{\"rawText\":\"On Sale You Saved 0.50\",\"kind\":\"discount\",\"amount\":0.5},{\"rawText\":\"On Sale You Saved 0.50\",\"kind\":\"discount\",\"amount\":0.5},{\"rawText\":\"On Sale You Saved 0.50\",\"kind\":\"discount\",\"amount\":0.5},{\"rawText\":\"On Sale You Saved 4.00\",\"kind\":\"discount\",\"amount\":4.0},{\"rawText\":\"On Sale You Saved 4.00\",\"kind\":\"discount\",\"amount\":4.0},{\"rawText\":\"On Sale You Saved 4.00\",\"kind\":\"discount\",\"amount\":4.0},{\"rawText\":\"PPC & Str Cpns $ 7.37\",\"kind\":\"coupon\",\"amount\":7.37},{\"rawText\":\"TAX 2.55\",\"kind\":\"tax\",\"amount\":2.55},{\"rawText\":\"CASH 100.00\",\"kind\":\"payment\",\"amount\":100.0},{\"rawText\":\"CHANGE 24.24\",\"kind\":\"payment\",\"amount\":24.24}],\"warnings\":[\"Subtotal is not printed on the receipt.\",\"SC/DS promotional rows contain abbreviated pricing codes and were preserved without interpreting them as separate products.\",\"Bottle deposit rows are recorded as adjustments and excluded from the 19 purchased-item count.\"]}",
  "error": null,
  "timing": {
    "totalMs": 20565,
    "imagePrepMs": 98,
    "modelMs": 20467,
    "postProcessMs": 0,
    "modelCalls": 1,
    "imageCount": 2,
    "model": "gpt-5.6-luna",
    "reasoningEffort": "low",
    "harness": "isolated-direct-request"
  }
}
```

</details>

<details>
<summary><strong>shoprite-04</strong> — OK</summary>

Fixture image: [shoprite-04.jpg](../receipts/shoprite-04.jpg)
Complete JSON: [shoprite-04.json](shoprite-04.json)

```json
{
  "receipt": {
    "merchant": "ShopRite",
    "date": "06/17/25 04:08pm",
    "currency": "USD",
    "subtotal": null,
    "tax": 0,
    "total": 48.77,
    "balance": 48.77,
    "ocrText": "ShopRite\nwe are here.\nWelcome to ShopRite\nof MILLVILLE\n06/17/25 04:08pm SS05 R71 T116 C71\n******************************\n*          Regular Items       *\n******************************\nONE DEG VEG BRN RPG                  4.69 F\nOn Sale You Saved                    0.30\nMC        One Degree Veganic\n          TENDERIN STEAK             0.60-F\n1.09 lb @ 0.19 /lb                  26.33 F\nWT        BROC CRWNS RPC       PC    1.30 F\nOn Sale You Saved                    1.20\n1.09 lb @ 0.19 /lb\nSC        Broccoli Crowns            0.21-F\n1.86 lb @ 4.99 /lb\nWT        CHERRY NW LRGE 18L         9.28 F\n          BLUEBERRY 12 DRY P         2.99 F\nOn Sale You Saved                    1.00\n          PINEAPPLE GOLD             2.99 F\nValued Customer                 47111458063\nTAX                                  0.00\n**** BALANCE                         48.77\n******************************\nShopRite Credit Receipt\nStore # 505 of MILLVILLE, NJ\nTerminal: 71 Operator: 71 Trans: 116",
    "lines": [
      {
        "rawText": "ONE DEG VEG BRN RPG 4.69 F",
        "description": "ONE DEG VEG BRN RPG",
        "quantity": 1,
        "unit": null,
        "unitPrice": 4.69,
        "amount": 4.69,
        "category": "grocery",
        "confidence": 92,
        "needsReview": false
      },
      {
        "rawText": "MC One Degree Veganic TENDERIN STEAK 0.60-F",
        "description": "One Degree Veganic TENDERIN STEAK",
        "quantity": 1,
        "unit": null,
        "unitPrice": 26.33,
        "amount": 26.33,
        "category": "grocery",
        "confidence": 88,
        "needsReview": true
      },
      {
        "rawText": "WT BROC CRWNS RPC PC 1.30 F",
        "description": "BROC CRWNS RPC",
        "quantity": 1,
        "unit": "PC",
        "unitPrice": 1.3,
        "amount": 1.3,
        "category": "produce",
        "confidence": 91,
        "needsReview": false
      },
      {
        "rawText": "1.09 lb @ 0.19 /lb",
        "description": "Broccoli Crowns",
        "quantity": 1.09,
        "unit": "lb",
        "unitPrice": 0.19,
        "amount": null,
        "category": "produce",
        "confidence": 86,
        "needsReview": true
      },
      {
        "rawText": "WT CHERRY NW LRGE 18L 9.28 F",
        "description": "CHERRY NW LRGE 18L",
        "quantity": 1,
        "unit": null,
        "unitPrice": 9.28,
        "amount": 9.28,
        "category": "produce",
        "confidence": 91,
        "needsReview": false
      },
      {
        "rawText": "BLUEBERRY 12 DRY P 2.99 F",
        "description": "BLUEBERRY 12 DRY P",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.99,
        "amount": 2.99,
        "category": "produce",
        "confidence": 90,
        "needsReview": false
      },
      {
        "rawText": "PINEAPPLE GOLD 2.99 F",
        "description": "PINEAPPLE GOLD",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.99,
        "amount": 2.99,
        "category": "produce",
        "confidence": 96,
        "needsReview": false
      }
    ],
    "adjustments": [
      {
        "rawText": "On Sale You Saved 0.30",
        "kind": "discount",
        "amount": 0.3
      },
      {
        "rawText": "MC One Degree Veganic TENDERIN STEAK 0.60-F",
        "kind": "coupon",
        "amount": 0.6
      },
      {
        "rawText": "On Sale You Saved 1.20",
        "kind": "discount",
        "amount": 1.2
      },
      {
        "rawText": "SC Broccoli Crowns 0.21-F",
        "kind": "coupon",
        "amount": 0.21
      },
      {
        "rawText": "On Sale You Saved 1.00",
        "kind": "discount",
        "amount": 1
      },
      {
        "rawText": "TAX 0.00",
        "kind": "tax",
        "amount": 0
      }
    ],
    "warnings": [
      "The abbreviated product names and the steak price alignment are somewhat uncertain.",
      "The printed line-item amounts and balance do not reconcile cleanly after discounts and coupons; balance is retained as authoritative."
    ],
    "timing": {
      "totalMs": 7528,
      "imagePrepMs": 205,
      "modelMs": 7323,
      "postProcessMs": 0,
      "modelCalls": 1,
      "imageCount": 2,
      "model": "gpt-5.6-luna",
      "reasoningEffort": "low",
      "harness": "isolated-direct-request"
    }
  },
  "rawText": "ShopRite\nwe are here.\nWelcome to ShopRite\nof MILLVILLE\n06/17/25 04:08pm SS05 R71 T116 C71\n******************************\n*          Regular Items       *\n******************************\nONE DEG VEG BRN RPG                  4.69 F\nOn Sale You Saved                    0.30\nMC        One Degree Veganic\n          TENDERIN STEAK             0.60-F\n1.09 lb @ 0.19 /lb                  26.33 F\nWT        BROC CRWNS RPC       PC    1.30 F\nOn Sale You Saved                    1.20\n1.09 lb @ 0.19 /lb\nSC        Broccoli Crowns            0.21-F\n1.86 lb @ 4.99 /lb\nWT        CHERRY NW LRGE 18L         9.28 F\n          BLUEBERRY 12 DRY P         2.99 F\nOn Sale You Saved                    1.00\n          PINEAPPLE GOLD             2.99 F\nValued Customer                 47111458063\nTAX                                  0.00\n**** BALANCE                         48.77\n******************************\nShopRite Credit Receipt\nStore # 505 of MILLVILLE, NJ\nTerminal: 71 Operator: 71 Trans: 116",
  "rawOutputText": "{\"merchant\":\"ShopRite\",\"date\":\"06/17/25 04:08pm\",\"currency\":\"USD\",\"subtotal\":null,\"tax\":0.0,\"total\":48.77,\"balance\":48.77,\"ocrText\":\"ShopRite\\nwe are here.\\nWelcome to ShopRite\\nof MILLVILLE\\n06/17/25 04:08pm SS05 R71 T116 C71\\n******************************\\n*          Regular Items       *\\n******************************\\nONE DEG VEG BRN RPG                  4.69 F\\nOn Sale You Saved                    0.30\\nMC        One Degree Veganic\\n          TENDERIN STEAK             0.60-F\\n1.09 lb @ 0.19 /lb                  26.33 F\\nWT        BROC CRWNS RPC       PC    1.30 F\\nOn Sale You Saved                    1.20\\n1.09 lb @ 0.19 /lb\\nSC        Broccoli Crowns            0.21-F\\n1.86 lb @ 4.99 /lb\\nWT        CHERRY NW LRGE 18L         9.28 F\\n          BLUEBERRY 12 DRY P         2.99 F\\nOn Sale You Saved                    1.00\\n          PINEAPPLE GOLD             2.99 F\\nValued Customer                 47111458063\\nTAX                                  0.00\\n**** BALANCE                         48.77\\n******************************\\nShopRite Credit Receipt\\nStore # 505 of MILLVILLE, NJ\\nTerminal: 71 Operator: 71 Trans: 116\",\"lines\":[{\"rawText\":\"ONE DEG VEG BRN RPG 4.69 F\",\"description\":\"ONE DEG VEG BRN RPG\",\"quantity\":1,\"unit\":null,\"unitPrice\":4.69,\"amount\":4.69,\"category\":\"grocery\",\"confidence\":92,\"needsReview\":false},{\"rawText\":\"MC One Degree Veganic TENDERIN STEAK 0.60-F\",\"description\":\"One Degree Veganic TENDERIN STEAK\",\"quantity\":1,\"unit\":null,\"unitPrice\":26.33,\"amount\":26.33,\"category\":\"grocery\",\"confidence\":88,\"needsReview\":true},{\"rawText\":\"WT BROC CRWNS RPC PC 1.30 F\",\"description\":\"BROC CRWNS RPC\",\"quantity\":1,\"unit\":\"PC\",\"unitPrice\":1.3,\"amount\":1.3,\"category\":\"produce\",\"confidence\":91,\"needsReview\":false},{\"rawText\":\"1.09 lb @ 0.19 /lb\",\"description\":\"Broccoli Crowns\",\"quantity\":1.09,\"unit\":\"lb\",\"unitPrice\":0.19,\"amount\":null,\"category\":\"produce\",\"confidence\":86,\"needsReview\":true},{\"rawText\":\"WT CHERRY NW LRGE 18L 9.28 F\",\"description\":\"CHERRY NW LRGE 18L\",\"quantity\":1,\"unit\":null,\"unitPrice\":9.28,\"amount\":9.28,\"category\":\"produce\",\"confidence\":91,\"needsReview\":false},{\"rawText\":\"BLUEBERRY 12 DRY P 2.99 F\",\"description\":\"BLUEBERRY 12 DRY P\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.99,\"amount\":2.99,\"category\":\"produce\",\"confidence\":90,\"needsReview\":false},{\"rawText\":\"PINEAPPLE GOLD 2.99 F\",\"description\":\"PINEAPPLE GOLD\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.99,\"amount\":2.99,\"category\":\"produce\",\"confidence\":96,\"needsReview\":false}],\"adjustments\":[{\"rawText\":\"On Sale You Saved 0.30\",\"kind\":\"discount\",\"amount\":0.3},{\"rawText\":\"MC One Degree Veganic TENDERIN STEAK 0.60-F\",\"kind\":\"coupon\",\"amount\":0.6},{\"rawText\":\"On Sale You Saved 1.20\",\"kind\":\"discount\",\"amount\":1.2},{\"rawText\":\"SC Broccoli Crowns 0.21-F\",\"kind\":\"coupon\",\"amount\":0.21},{\"rawText\":\"On Sale You Saved 1.00\",\"kind\":\"discount\",\"amount\":1.0},{\"rawText\":\"TAX 0.00\",\"kind\":\"tax\",\"amount\":0.0}],\"warnings\":[\"The abbreviated product names and the steak price alignment are somewhat uncertain.\",\"The printed line-item amounts and balance do not reconcile cleanly after discounts and coupons; balance is retained as authoritative.\"]}",
  "error": null,
  "timing": {
    "totalMs": 7528,
    "imagePrepMs": 205,
    "modelMs": 7323,
    "postProcessMs": 0,
    "modelCalls": 1,
    "imageCount": 2,
    "model": "gpt-5.6-luna",
    "reasoningEffort": "low",
    "harness": "isolated-direct-request"
  }
}
```

</details>

<details>
<summary><strong>shoprite-05</strong> — OK</summary>

Fixture image: [shoprite-05.jpeg](../receipts/shoprite-05.jpeg)
Complete JSON: [shoprite-05.json](shoprite-05.json)

```json
{
  "receipt": {
    "merchant": "ShopRite",
    "date": "02/18/25 09:53am",
    "currency": "USD",
    "subtotal": null,
    "tax": 0,
    "total": 46.77,
    "balance": 46.77,
    "ocrText": "we are here.\nWelcome to ShopRite\nof COMMERCE ST.\n02/18/25 09:53am S397 R9 T3 C15\nStore Manager: AMIR SEYAL\n********************************\n*              Regular Items              *\n********************************\nGOYA GOY GLD CANL                         9.69 F\n0.78 lb @ 2.49 /lb\nWT       TOM HOT HOUSE BEEF               1.94 F\n         SRBB CREAM CHS BRI                2.89 F\n         SRBB UNSLTD BUTTER                3.99 F\nOn Sale You Saved                         0.80\n3 @ 7.99\n         EGGLBST LG WHITE 1              23.97 F\n         SRBB HVD MILK GALL                4.29 F\nValued Customer                    47106142380\nTAX                                      0.00\n**** BALANCE                             46.77\nCASH                                    100.00\nCHANGE                                   53.23\nTOTAL NUMBER OF ITEMS SOLD -              8\n--------- ShopRite Savings ---------\n------- On Sale Savings       $ 0.80",
    "lines": [
      {
        "rawText": "GOYA GOY GLD CANL                         9.69 F",
        "description": "GOYA GOY GLD CANL",
        "quantity": 1,
        "unit": null,
        "unitPrice": 9.69,
        "amount": 9.69,
        "category": "grocery",
        "confidence": 96,
        "needsReview": false
      },
      {
        "rawText": "0.78 lb @ 2.49 /lb\nWT       TOM HOT HOUSE BEEF               1.94 F",
        "description": "TOM HOT HOUSE BEEF",
        "quantity": 0.78,
        "unit": "lb",
        "unitPrice": 2.49,
        "amount": 1.94,
        "category": "meat",
        "confidence": 95,
        "needsReview": false
      },
      {
        "rawText": "SRBB CREAM CHS BRI                2.89 F",
        "description": "SRBB CREAM CHS BRI",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.89,
        "amount": 2.89,
        "category": "dairy",
        "confidence": 91,
        "needsReview": false
      },
      {
        "rawText": "SRBB UNSLTD BUTTER                3.99 F",
        "description": "SRBB UNSLTD BUTTER",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.99,
        "amount": 3.99,
        "category": "dairy",
        "confidence": 96,
        "needsReview": false
      },
      {
        "rawText": "3 @ 7.99\nEGGLBST LG WHITE 1              23.97 F",
        "description": "EGGLBST LG WHITE 1",
        "quantity": 3,
        "unit": null,
        "unitPrice": 7.99,
        "amount": 23.97,
        "category": "dairy",
        "confidence": 94,
        "needsReview": false
      },
      {
        "rawText": "SRBB HVD MILK GALL                4.29 F",
        "description": "SRBB HVD MILK GALL",
        "quantity": 1,
        "unit": "gallon",
        "unitPrice": 4.29,
        "amount": 4.29,
        "category": "dairy",
        "confidence": 96,
        "needsReview": false
      }
    ],
    "adjustments": [
      {
        "rawText": "On Sale You Saved                         0.80",
        "kind": "other",
        "amount": 0.8
      },
      {
        "rawText": "------- On Sale Savings       $ 0.80",
        "kind": "other",
        "amount": 0.8
      },
      {
        "rawText": "TAX                                      0.00",
        "kind": "tax",
        "amount": 0
      },
      {
        "rawText": "CASH                                    100.00",
        "kind": "payment",
        "amount": 100
      },
      {
        "rawText": "CHANGE                                   53.23",
        "kind": "payment",
        "amount": 53.23
      }
    ],
    "warnings": [
      "The receipt does not print a subtotal.",
      "The sale-savings rows are informational and were not treated as additional deductions.",
      "The visible item amounts sum to 46.77; the receipt reports 8 items because the egg line has quantity 3."
    ],
    "timing": {
      "totalMs": 8090,
      "imagePrepMs": 247,
      "modelMs": 7843,
      "postProcessMs": 0,
      "modelCalls": 1,
      "imageCount": 2,
      "model": "gpt-5.6-luna",
      "reasoningEffort": "low",
      "harness": "isolated-direct-request"
    }
  },
  "rawText": "we are here.\nWelcome to ShopRite\nof COMMERCE ST.\n02/18/25 09:53am S397 R9 T3 C15\nStore Manager: AMIR SEYAL\n********************************\n*              Regular Items              *\n********************************\nGOYA GOY GLD CANL                         9.69 F\n0.78 lb @ 2.49 /lb\nWT       TOM HOT HOUSE BEEF               1.94 F\n         SRBB CREAM CHS BRI                2.89 F\n         SRBB UNSLTD BUTTER                3.99 F\nOn Sale You Saved                         0.80\n3 @ 7.99\n         EGGLBST LG WHITE 1              23.97 F\n         SRBB HVD MILK GALL                4.29 F\nValued Customer                    47106142380\nTAX                                      0.00\n**** BALANCE                             46.77\nCASH                                    100.00\nCHANGE                                   53.23\nTOTAL NUMBER OF ITEMS SOLD -              8\n--------- ShopRite Savings ---------\n------- On Sale Savings       $ 0.80",
  "rawOutputText": "{\"merchant\":\"ShopRite\",\"date\":\"02/18/25 09:53am\",\"currency\":\"USD\",\"subtotal\":null,\"tax\":0.0,\"total\":46.77,\"balance\":46.77,\"ocrText\":\"we are here.\\nWelcome to ShopRite\\nof COMMERCE ST.\\n02/18/25 09:53am S397 R9 T3 C15\\nStore Manager: AMIR SEYAL\\n********************************\\n*              Regular Items              *\\n********************************\\nGOYA GOY GLD CANL                         9.69 F\\n0.78 lb @ 2.49 /lb\\nWT       TOM HOT HOUSE BEEF               1.94 F\\n         SRBB CREAM CHS BRI                2.89 F\\n         SRBB UNSLTD BUTTER                3.99 F\\nOn Sale You Saved                         0.80\\n3 @ 7.99\\n         EGGLBST LG WHITE 1              23.97 F\\n         SRBB HVD MILK GALL                4.29 F\\nValued Customer                    47106142380\\nTAX                                      0.00\\n**** BALANCE                             46.77\\nCASH                                    100.00\\nCHANGE                                   53.23\\nTOTAL NUMBER OF ITEMS SOLD -              8\\n--------- ShopRite Savings ---------\\n------- On Sale Savings       $ 0.80\",\"lines\":[{\"rawText\":\"GOYA GOY GLD CANL                         9.69 F\",\"description\":\"GOYA GOY GLD CANL\",\"quantity\":1,\"unit\":null,\"unitPrice\":9.69,\"amount\":9.69,\"category\":\"grocery\",\"confidence\":96,\"needsReview\":false},{\"rawText\":\"0.78 lb @ 2.49 /lb\\nWT       TOM HOT HOUSE BEEF               1.94 F\",\"description\":\"TOM HOT HOUSE BEEF\",\"quantity\":0.78,\"unit\":\"lb\",\"unitPrice\":2.49,\"amount\":1.94,\"category\":\"meat\",\"confidence\":95,\"needsReview\":false},{\"rawText\":\"SRBB CREAM CHS BRI                2.89 F\",\"description\":\"SRBB CREAM CHS BRI\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.89,\"amount\":2.89,\"category\":\"dairy\",\"confidence\":91,\"needsReview\":false},{\"rawText\":\"SRBB UNSLTD BUTTER                3.99 F\",\"description\":\"SRBB UNSLTD BUTTER\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.99,\"amount\":3.99,\"category\":\"dairy\",\"confidence\":96,\"needsReview\":false},{\"rawText\":\"3 @ 7.99\\nEGGLBST LG WHITE 1              23.97 F\",\"description\":\"EGGLBST LG WHITE 1\",\"quantity\":3,\"unit\":null,\"unitPrice\":7.99,\"amount\":23.97,\"category\":\"dairy\",\"confidence\":94,\"needsReview\":false},{\"rawText\":\"SRBB HVD MILK GALL                4.29 F\",\"description\":\"SRBB HVD MILK GALL\",\"quantity\":1,\"unit\":\"gallon\",\"unitPrice\":4.29,\"amount\":4.29,\"category\":\"dairy\",\"confidence\":96,\"needsReview\":false}],\"adjustments\":[{\"rawText\":\"On Sale You Saved                         0.80\",\"kind\":\"other\",\"amount\":0.8},{\"rawText\":\"------- On Sale Savings       $ 0.80\",\"kind\":\"other\",\"amount\":0.8},{\"rawText\":\"TAX                                      0.00\",\"kind\":\"tax\",\"amount\":0.0},{\"rawText\":\"CASH                                    100.00\",\"kind\":\"payment\",\"amount\":100.0},{\"rawText\":\"CHANGE                                   53.23\",\"kind\":\"payment\",\"amount\":53.23}],\"warnings\":[\"The receipt does not print a subtotal.\",\"The sale-savings rows are informational and were not treated as additional deductions.\",\"The visible item amounts sum to 46.77; the receipt reports 8 items because the egg line has quantity 3.\"]}",
  "error": null,
  "timing": {
    "totalMs": 8090,
    "imagePrepMs": 247,
    "modelMs": 7843,
    "postProcessMs": 0,
    "modelCalls": 1,
    "imageCount": 2,
    "model": "gpt-5.6-luna",
    "reasoningEffort": "low",
    "harness": "isolated-direct-request"
  }
}
```

</details>

<details>
<summary><strong>stop-shop-01</strong> — OK</summary>

Fixture image: [stop-shop-01.jpeg](../receipts/stop-shop-01.jpeg)
Complete JSON: [stop-shop-01.json](stop-shop-01.json)

```json
{
  "receipt": {
    "merchant": "STOP&SHOP",
    "date": "04/07/20",
    "currency": "USD",
    "subtotal": null,
    "tax": 0,
    "total": 35.01,
    "balance": 35.01,
    "ocrText": "STOP&SHOP\n341 PLYMOUTH STREET\nHALIFAX, MA 02338\nStore Telephone: (781) 293-1961\nPharmacy Telephone: (781) 293-5786\nStore #82    04/07/20    08:57am\nCHEESE SHOP\nJSPH ORG HUMMUS                         5.99 F\nFROZEN FOOD\nSB SW BLEND 1OZ                         2.49 F\nGROCERY\nAMYS LS CHNKY TO                        3.99 F\nAMYS SOUP LS LEN                        3.19 F\nSOUP LENTIL                             3.19 F\nSOUP LENTIL                             3.19 F\nAMYS LS CHNKY TO                        3.99 F\nAMYS LS CHNKY TO                        3.99 F\nPRODUCE\nDOLE SPINACH 10                         4.99 F\nTAX                                      0.00\n**** BALANCE                            35.01",
    "lines": [
      {
        "rawText": "JSPH ORG HUMMUS 5.99 F",
        "description": "JSPH ORG HUMMUS",
        "quantity": 1,
        "unit": null,
        "unitPrice": 5.99,
        "amount": 5.99,
        "category": "CHEESE SHOP",
        "confidence": 96,
        "needsReview": false
      },
      {
        "rawText": "SB SW BLEND 1OZ 2.49 F",
        "description": "SB SW BLEND 1OZ",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.49,
        "amount": 2.49,
        "category": "FROZEN FOOD",
        "confidence": 95,
        "needsReview": false
      },
      {
        "rawText": "AMYS LS CHNKY TO 3.99 F",
        "description": "AMYS LS CHNKY TO",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.99,
        "amount": 3.99,
        "category": "GROCERY",
        "confidence": 94,
        "needsReview": false
      },
      {
        "rawText": "AMYS SOUP LS LEN 3.19 F",
        "description": "AMYS SOUP LS LEN",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.19,
        "amount": 3.19,
        "category": "GROCERY",
        "confidence": 95,
        "needsReview": false
      },
      {
        "rawText": "SOUP LENTIL 3.19 F",
        "description": "SOUP LENTIL",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.19,
        "amount": 3.19,
        "category": "GROCERY",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "SOUP LENTIL 3.19 F",
        "description": "SOUP LENTIL",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.19,
        "amount": 3.19,
        "category": "GROCERY",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "AMYS LS CHNKY TO 3.99 F",
        "description": "AMYS LS CHNKY TO",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.99,
        "amount": 3.99,
        "category": "GROCERY",
        "confidence": 94,
        "needsReview": false
      },
      {
        "rawText": "AMYS LS CHNKY TO 3.99 F",
        "description": "AMYS LS CHNKY TO",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.99,
        "amount": 3.99,
        "category": "GROCERY",
        "confidence": 94,
        "needsReview": false
      },
      {
        "rawText": "DOLE SPINACH 10 4.99 F",
        "description": "DOLE SPINACH 10",
        "quantity": 1,
        "unit": null,
        "unitPrice": 4.99,
        "amount": 4.99,
        "category": "PRODUCE",
        "confidence": 96,
        "needsReview": false
      }
    ],
    "adjustments": [
      {
        "rawText": "TAX 0.00",
        "kind": "tax",
        "amount": 0
      },
      {
        "rawText": "**** BALANCE 35.01",
        "kind": "payment",
        "amount": 35.01
      }
    ],
    "warnings": [
      "Subtotal is not printed on the receipt; the nine item amounts sum to the reported balance of 35.01."
    ],
    "timing": {
      "totalMs": 8813,
      "imagePrepMs": 255,
      "modelMs": 8558,
      "postProcessMs": 0,
      "modelCalls": 1,
      "imageCount": 2,
      "model": "gpt-5.6-luna",
      "reasoningEffort": "low",
      "harness": "isolated-direct-request"
    }
  },
  "rawText": "STOP&SHOP\n341 PLYMOUTH STREET\nHALIFAX, MA 02338\nStore Telephone: (781) 293-1961\nPharmacy Telephone: (781) 293-5786\nStore #82    04/07/20    08:57am\nCHEESE SHOP\nJSPH ORG HUMMUS                         5.99 F\nFROZEN FOOD\nSB SW BLEND 1OZ                         2.49 F\nGROCERY\nAMYS LS CHNKY TO                        3.99 F\nAMYS SOUP LS LEN                        3.19 F\nSOUP LENTIL                             3.19 F\nSOUP LENTIL                             3.19 F\nAMYS LS CHNKY TO                        3.99 F\nAMYS LS CHNKY TO                        3.99 F\nPRODUCE\nDOLE SPINACH 10                         4.99 F\nTAX                                      0.00\n**** BALANCE                            35.01",
  "rawOutputText": "{\"merchant\":\"STOP&SHOP\",\"date\":\"04/07/20\",\"currency\":\"USD\",\"subtotal\":null,\"tax\":0.0,\"total\":35.01,\"balance\":35.01,\"ocrText\":\"STOP&SHOP\\n341 PLYMOUTH STREET\\nHALIFAX, MA 02338\\nStore Telephone: (781) 293-1961\\nPharmacy Telephone: (781) 293-5786\\nStore #82    04/07/20    08:57am\\nCHEESE SHOP\\nJSPH ORG HUMMUS                         5.99 F\\nFROZEN FOOD\\nSB SW BLEND 1OZ                         2.49 F\\nGROCERY\\nAMYS LS CHNKY TO                        3.99 F\\nAMYS SOUP LS LEN                        3.19 F\\nSOUP LENTIL                             3.19 F\\nSOUP LENTIL                             3.19 F\\nAMYS LS CHNKY TO                        3.99 F\\nAMYS LS CHNKY TO                        3.99 F\\nPRODUCE\\nDOLE SPINACH 10                         4.99 F\\nTAX                                      0.00\\n**** BALANCE                            35.01\",\"lines\":[{\"rawText\":\"JSPH ORG HUMMUS 5.99 F\",\"description\":\"JSPH ORG HUMMUS\",\"quantity\":1.0,\"unit\":null,\"unitPrice\":5.99,\"amount\":5.99,\"category\":\"CHEESE SHOP\",\"confidence\":96,\"needsReview\":false},{\"rawText\":\"SB SW BLEND 1OZ 2.49 F\",\"description\":\"SB SW BLEND 1OZ\",\"quantity\":1.0,\"unit\":null,\"unitPrice\":2.49,\"amount\":2.49,\"category\":\"FROZEN FOOD\",\"confidence\":95,\"needsReview\":false},{\"rawText\":\"AMYS LS CHNKY TO 3.99 F\",\"description\":\"AMYS LS CHNKY TO\",\"quantity\":1.0,\"unit\":null,\"unitPrice\":3.99,\"amount\":3.99,\"category\":\"GROCERY\",\"confidence\":94,\"needsReview\":false},{\"rawText\":\"AMYS SOUP LS LEN 3.19 F\",\"description\":\"AMYS SOUP LS LEN\",\"quantity\":1.0,\"unit\":null,\"unitPrice\":3.19,\"amount\":3.19,\"category\":\"GROCERY\",\"confidence\":95,\"needsReview\":false},{\"rawText\":\"SOUP LENTIL 3.19 F\",\"description\":\"SOUP LENTIL\",\"quantity\":1.0,\"unit\":null,\"unitPrice\":3.19,\"amount\":3.19,\"category\":\"GROCERY\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"SOUP LENTIL 3.19 F\",\"description\":\"SOUP LENTIL\",\"quantity\":1.0,\"unit\":null,\"unitPrice\":3.19,\"amount\":3.19,\"category\":\"GROCERY\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"AMYS LS CHNKY TO 3.99 F\",\"description\":\"AMYS LS CHNKY TO\",\"quantity\":1.0,\"unit\":null,\"unitPrice\":3.99,\"amount\":3.99,\"category\":\"GROCERY\",\"confidence\":94,\"needsReview\":false},{\"rawText\":\"AMYS LS CHNKY TO 3.99 F\",\"description\":\"AMYS LS CHNKY TO\",\"quantity\":1.0,\"unit\":null,\"unitPrice\":3.99,\"amount\":3.99,\"category\":\"GROCERY\",\"confidence\":94,\"needsReview\":false},{\"rawText\":\"DOLE SPINACH 10 4.99 F\",\"description\":\"DOLE SPINACH 10\",\"quantity\":1.0,\"unit\":null,\"unitPrice\":4.99,\"amount\":4.99,\"category\":\"PRODUCE\",\"confidence\":96,\"needsReview\":false}],\"adjustments\":[{\"rawText\":\"TAX 0.00\",\"kind\":\"tax\",\"amount\":0.0},{\"rawText\":\"**** BALANCE 35.01\",\"kind\":\"payment\",\"amount\":35.01}],\"warnings\":[\"Subtotal is not printed on the receipt; the nine item amounts sum to the reported balance of 35.01.\"]}",
  "error": null,
  "timing": {
    "totalMs": 8813,
    "imagePrepMs": 255,
    "modelMs": 8558,
    "postProcessMs": 0,
    "modelCalls": 1,
    "imageCount": 2,
    "model": "gpt-5.6-luna",
    "reasoningEffort": "low",
    "harness": "isolated-direct-request"
  }
}
```

</details>

<details>
<summary><strong>stop-shop-02</strong> — OK</summary>

Fixture image: [stop-shop-02.png](../receipts/stop-shop-02.png)
Complete JSON: [stop-shop-02.json](stop-shop-02.json)

```json
{
  "receipt": {
    "merchant": "STOP&SHOP",
    "date": "05/26/24",
    "currency": "USD",
    "subtotal": 10.09,
    "tax": 0.06,
    "total": 10.15,
    "balance": 10.15,
    "ocrText": "STOP&SHOP\n200 EAST MAIN STREET\nSTRATFORD, CT 06614\nStore Telephone: (203) 375-8787\nPharmacy Telephone: (203) 375-5717\nStore #639    05/26/24    05:52pm\nGROCERY\nSB DIET ORNGE 2L                         1.00 B\nDP       BTL/CAN DEPOSIT                0.10 F\nPRODUCE\n+SB 8LB ORANGE                            8.99 F\nTAX                                       0.06\n**** BALANCE                              10.15\n****************************************\nPayment Type: US DEBIT\nCHIP          Purchase   PIN Verified\nCard: ************7650\nPayment Amt: $10.15\nCashback Amt: $0.00\nBALANCE: $\nAID: A0000000980840\nAUTH#013057 RC#00 05/26/24 05:53pm\n****************************************\nTrace # 00826126\n                 DEBIT CARD              10.15\n                 CHANGE                   0.00\nTOTAL NUMBER OF ITEMS SOLD = 2\n05/26/24 05:53pm 639 916 175 880016\nCustomer 22*******0001\nwww.StopAndShop.com\nThank you for shopping STOP & SHOP\nDavid Faccin, Store Manager\nSELF-CHECKOUT, Your Cashier\nHOW ARE WE DOING?\nTell us in the next 5 days at\nwww.talktostopandshop.com\nUse the PIN # below to login\n0526 1753 0693 9416 0175\nAnd enter for a\nChance to win $500*\n*Official Rules at customer service\nor www.talktostopandshop.com/terms\nOpen to CT MA NJ NY & RI residents 18+\nNo Purch. Nec. Void where prohibited",
    "lines": [
      {
        "rawText": "SB DIET ORNGE 2L                         1.00 B",
        "description": "SB DIET ORNGE 2L",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1,
        "amount": 1,
        "category": "grocery",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "+SB 8LB ORANGE                            8.99 F",
        "description": "SB 8LB ORANGE",
        "quantity": 1,
        "unit": null,
        "unitPrice": 8.99,
        "amount": 8.99,
        "category": "produce",
        "confidence": 98,
        "needsReview": false
      }
    ],
    "adjustments": [
      {
        "rawText": "DP       BTL/CAN DEPOSIT                0.10 F",
        "kind": "other",
        "amount": 0.1
      },
      {
        "rawText": "TAX                                       0.06",
        "kind": "tax",
        "amount": 0.06
      },
      {
        "rawText": "Payment Amt: $10.15",
        "kind": "payment",
        "amount": 10.15
      },
      {
        "rawText": "Cashback Amt: $0.00",
        "kind": "payment",
        "amount": 0
      },
      {
        "rawText": "                 CHANGE                   0.00",
        "kind": "payment",
        "amount": 0
      }
    ],
    "warnings": [
      "The payment-section row 'BALANCE: $' has no readable amount; the earlier printed **** BALANCE 10.15 and Payment Amt $10.15 establish the balance and total."
    ],
    "timing": {
      "totalMs": 7471,
      "imagePrepMs": 129,
      "modelMs": 7342,
      "postProcessMs": 0,
      "modelCalls": 1,
      "imageCount": 2,
      "model": "gpt-5.6-luna",
      "reasoningEffort": "low",
      "harness": "isolated-direct-request"
    }
  },
  "rawText": "STOP&SHOP\n200 EAST MAIN STREET\nSTRATFORD, CT 06614\nStore Telephone: (203) 375-8787\nPharmacy Telephone: (203) 375-5717\nStore #639    05/26/24    05:52pm\nGROCERY\nSB DIET ORNGE 2L                         1.00 B\nDP       BTL/CAN DEPOSIT                0.10 F\nPRODUCE\n+SB 8LB ORANGE                            8.99 F\nTAX                                       0.06\n**** BALANCE                              10.15\n****************************************\nPayment Type: US DEBIT\nCHIP          Purchase   PIN Verified\nCard: ************7650\nPayment Amt: $10.15\nCashback Amt: $0.00\nBALANCE: $\nAID: A0000000980840\nAUTH#013057 RC#00 05/26/24 05:53pm\n****************************************\nTrace # 00826126\n                 DEBIT CARD              10.15\n                 CHANGE                   0.00\nTOTAL NUMBER OF ITEMS SOLD = 2\n05/26/24 05:53pm 639 916 175 880016\nCustomer 22*******0001\nwww.StopAndShop.com\nThank you for shopping STOP & SHOP\nDavid Faccin, Store Manager\nSELF-CHECKOUT, Your Cashier\nHOW ARE WE DOING?\nTell us in the next 5 days at\nwww.talktostopandshop.com\nUse the PIN # below to login\n0526 1753 0693 9416 0175\nAnd enter for a\nChance to win $500*\n*Official Rules at customer service\nor www.talktostopandshop.com/terms\nOpen to CT MA NJ NY & RI residents 18+\nNo Purch. Nec. Void where prohibited",
  "rawOutputText": "{\"merchant\":\"STOP&SHOP\",\"date\":\"05/26/24\",\"currency\":\"USD\",\"subtotal\":10.09,\"tax\":0.06,\"total\":10.15,\"balance\":10.15,\"ocrText\":\"STOP&SHOP\\n200 EAST MAIN STREET\\nSTRATFORD, CT 06614\\nStore Telephone: (203) 375-8787\\nPharmacy Telephone: (203) 375-5717\\nStore #639    05/26/24    05:52pm\\nGROCERY\\nSB DIET ORNGE 2L                         1.00 B\\nDP       BTL/CAN DEPOSIT                0.10 F\\nPRODUCE\\n+SB 8LB ORANGE                            8.99 F\\nTAX                                       0.06\\n**** BALANCE                              10.15\\n****************************************\\nPayment Type: US DEBIT\\nCHIP          Purchase   PIN Verified\\nCard: ************7650\\nPayment Amt: $10.15\\nCashback Amt: $0.00\\nBALANCE: $\\nAID: A0000000980840\\nAUTH#013057 RC#00 05/26/24 05:53pm\\n****************************************\\nTrace # 00826126\\n                 DEBIT CARD              10.15\\n                 CHANGE                   0.00\\nTOTAL NUMBER OF ITEMS SOLD = 2\\n05/26/24 05:53pm 639 916 175 880016\\nCustomer 22*******0001\\nwww.StopAndShop.com\\nThank you for shopping STOP & SHOP\\nDavid Faccin, Store Manager\\nSELF-CHECKOUT, Your Cashier\\nHOW ARE WE DOING?\\nTell us in the next 5 days at\\nwww.talktostopandshop.com\\nUse the PIN # below to login\\n0526 1753 0693 9416 0175\\nAnd enter for a\\nChance to win $500*\\n*Official Rules at customer service\\nor www.talktostopandshop.com/terms\\nOpen to CT MA NJ NY & RI residents 18+\\nNo Purch. Nec. Void where prohibited\",\"lines\":[{\"rawText\":\"SB DIET ORNGE 2L                         1.00 B\",\"description\":\"SB DIET ORNGE 2L\",\"quantity\":1,\"unit\":null,\"unitPrice\":1,\"amount\":1,\"category\":\"grocery\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"+SB 8LB ORANGE                            8.99 F\",\"description\":\"SB 8LB ORANGE\",\"quantity\":1,\"unit\":null,\"unitPrice\":8.99,\"amount\":8.99,\"category\":\"produce\",\"confidence\":98,\"needsReview\":false}],\"adjustments\":[{\"rawText\":\"DP       BTL/CAN DEPOSIT                0.10 F\",\"kind\":\"other\",\"amount\":0.1},{\"rawText\":\"TAX                                       0.06\",\"kind\":\"tax\",\"amount\":0.06},{\"rawText\":\"Payment Amt: $10.15\",\"kind\":\"payment\",\"amount\":10.15},{\"rawText\":\"Cashback Amt: $0.00\",\"kind\":\"payment\",\"amount\":0},{\"rawText\":\"                 CHANGE                   0.00\",\"kind\":\"payment\",\"amount\":0}],\"warnings\":[\"The payment-section row 'BALANCE: $' has no readable amount; the earlier printed **** BALANCE 10.15 and Payment Amt $10.15 establish the balance and total.\"]}",
  "error": null,
  "timing": {
    "totalMs": 7471,
    "imagePrepMs": 129,
    "modelMs": 7342,
    "postProcessMs": 0,
    "modelCalls": 1,
    "imageCount": 2,
    "model": "gpt-5.6-luna",
    "reasoningEffort": "low",
    "harness": "isolated-direct-request"
  }
}
```

</details>

<details>
<summary><strong>stop-shop-03</strong> — OK</summary>

Fixture image: [stop-shop-03.jpeg](../receipts/stop-shop-03.jpeg)
Complete JSON: [stop-shop-03.json](stop-shop-03.json)

```json
{
  "receipt": {
    "merchant": "STOP&SHOP",
    "date": "08/01/25",
    "currency": "USD",
    "subtotal": 9.82,
    "tax": 0.61,
    "total": 10.43,
    "balance": 10.43,
    "ocrText": "STOP&SHOP\n100 WORCESTER STREET\nGRAFTON, MA 01519\nStore Telephone: (508) 887-9500\nStore #57    08/01/25    01:26pm\nGROCERY\nGAIN HPY HB1270L                         17.49 T\nSAVINGS                                      5.77-T\nMC    PERSONAL DISC                          4.00-T\nPRICE YOU PAY                              7.72\nDWN Y UNSTP30.1FZ                         20.99 T\nSAVINGS                                      6.93-T\nMC    PERSONAL DISC                          4.00-T\nPRICE YOU PAY                             10.06\nDWNY C BRZ 1400L                          14.99 T\nSAVINGS                                      4.95-T\nMC    PERSONAL DISC                          3.00-T\nPRICE YOU PAY                              7.04\nSC       $15 OFF HOUSEHOLD                 15.00-T\nTotal After Savings                          9.82\nTAX                                         0.61\n**** BALANCE                              10.43\n****************************************\nPayment Type: US DEBIT\nEMV CONTACTLESS Purchase  PIN Verifie\nCard: ************2032\nPayment Amt: $10.43",
    "lines": [
      {
        "rawText": "GAIN HPY HB1270L                         17.49 T",
        "description": "GAIN HPY HB1270L",
        "quantity": 1,
        "unit": null,
        "unitPrice": 17.49,
        "amount": 17.49,
        "category": "grocery",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "DWN Y UNSTP30.1FZ                         20.99 T",
        "description": "DWN Y UNSTP30.1FZ",
        "quantity": 1,
        "unit": null,
        "unitPrice": 20.99,
        "amount": 20.99,
        "category": "grocery",
        "confidence": 95,
        "needsReview": false
      },
      {
        "rawText": "DWNY C BRZ 1400L                          14.99 T",
        "description": "DWNY C BRZ 1400L",
        "quantity": 1,
        "unit": null,
        "unitPrice": 14.99,
        "amount": 14.99,
        "category": "grocery",
        "confidence": 98,
        "needsReview": false
      }
    ],
    "adjustments": [
      {
        "rawText": "SAVINGS                                      5.77-T",
        "kind": "discount",
        "amount": 5.77
      },
      {
        "rawText": "MC    PERSONAL DISC                          4.00-T",
        "kind": "discount",
        "amount": 4
      },
      {
        "rawText": "SAVINGS                                      6.93-T",
        "kind": "discount",
        "amount": 6.93
      },
      {
        "rawText": "MC    PERSONAL DISC                          4.00-T",
        "kind": "discount",
        "amount": 4
      },
      {
        "rawText": "SAVINGS                                      4.95-T",
        "kind": "discount",
        "amount": 4.95
      },
      {
        "rawText": "MC    PERSONAL DISC                          3.00-T",
        "kind": "discount",
        "amount": 3
      },
      {
        "rawText": "SC       $15 OFF HOUSEHOLD                 15.00-T",
        "kind": "discount",
        "amount": 15
      },
      {
        "rawText": "TAX                                         0.61",
        "kind": "tax",
        "amount": 0.61
      },
      {
        "rawText": "Payment Type: US DEBIT",
        "kind": "payment",
        "amount": null
      },
      {
        "rawText": "Payment Amt: $10.43",
        "kind": "payment",
        "amount": 10.43
      }
    ],
    "warnings": [
      "The printed product prices, savings, and discount rows do not reconcile directly to the Total After Savings; the receipt appears to use additional pricing or promotion logic."
    ],
    "timing": {
      "totalMs": 6059,
      "imagePrepMs": 198,
      "modelMs": 5861,
      "postProcessMs": 0,
      "modelCalls": 1,
      "imageCount": 2,
      "model": "gpt-5.6-luna",
      "reasoningEffort": "low",
      "harness": "isolated-direct-request"
    }
  },
  "rawText": "STOP&SHOP\n100 WORCESTER STREET\nGRAFTON, MA 01519\nStore Telephone: (508) 887-9500\nStore #57    08/01/25    01:26pm\nGROCERY\nGAIN HPY HB1270L                         17.49 T\nSAVINGS                                      5.77-T\nMC    PERSONAL DISC                          4.00-T\nPRICE YOU PAY                              7.72\nDWN Y UNSTP30.1FZ                         20.99 T\nSAVINGS                                      6.93-T\nMC    PERSONAL DISC                          4.00-T\nPRICE YOU PAY                             10.06\nDWNY C BRZ 1400L                          14.99 T\nSAVINGS                                      4.95-T\nMC    PERSONAL DISC                          3.00-T\nPRICE YOU PAY                              7.04\nSC       $15 OFF HOUSEHOLD                 15.00-T\nTotal After Savings                          9.82\nTAX                                         0.61\n**** BALANCE                              10.43\n****************************************\nPayment Type: US DEBIT\nEMV CONTACTLESS Purchase  PIN Verifie\nCard: ************2032\nPayment Amt: $10.43",
  "rawOutputText": "{\"merchant\":\"STOP&SHOP\",\"date\":\"08/01/25\",\"currency\":\"USD\",\"subtotal\":9.82,\"tax\":0.61,\"total\":10.43,\"balance\":10.43,\"ocrText\":\"STOP&SHOP\\n100 WORCESTER STREET\\nGRAFTON, MA 01519\\nStore Telephone: (508) 887-9500\\nStore #57    08/01/25    01:26pm\\nGROCERY\\nGAIN HPY HB1270L                         17.49 T\\nSAVINGS                                      5.77-T\\nMC    PERSONAL DISC                          4.00-T\\nPRICE YOU PAY                              7.72\\nDWN Y UNSTP30.1FZ                         20.99 T\\nSAVINGS                                      6.93-T\\nMC    PERSONAL DISC                          4.00-T\\nPRICE YOU PAY                             10.06\\nDWNY C BRZ 1400L                          14.99 T\\nSAVINGS                                      4.95-T\\nMC    PERSONAL DISC                          3.00-T\\nPRICE YOU PAY                              7.04\\nSC       $15 OFF HOUSEHOLD                 15.00-T\\nTotal After Savings                          9.82\\nTAX                                         0.61\\n**** BALANCE                              10.43\\n****************************************\\nPayment Type: US DEBIT\\nEMV CONTACTLESS Purchase  PIN Verifie\\nCard: ************2032\\nPayment Amt: $10.43\",\"lines\":[{\"rawText\":\"GAIN HPY HB1270L                         17.49 T\",\"description\":\"GAIN HPY HB1270L\",\"quantity\":1,\"unit\":null,\"unitPrice\":17.49,\"amount\":17.49,\"category\":\"grocery\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"DWN Y UNSTP30.1FZ                         20.99 T\",\"description\":\"DWN Y UNSTP30.1FZ\",\"quantity\":1,\"unit\":null,\"unitPrice\":20.99,\"amount\":20.99,\"category\":\"grocery\",\"confidence\":95,\"needsReview\":false},{\"rawText\":\"DWNY C BRZ 1400L                          14.99 T\",\"description\":\"DWNY C BRZ 1400L\",\"quantity\":1,\"unit\":null,\"unitPrice\":14.99,\"amount\":14.99,\"category\":\"grocery\",\"confidence\":98,\"needsReview\":false}],\"adjustments\":[{\"rawText\":\"SAVINGS                                      5.77-T\",\"kind\":\"discount\",\"amount\":5.77},{\"rawText\":\"MC    PERSONAL DISC                          4.00-T\",\"kind\":\"discount\",\"amount\":4.0},{\"rawText\":\"SAVINGS                                      6.93-T\",\"kind\":\"discount\",\"amount\":6.93},{\"rawText\":\"MC    PERSONAL DISC                          4.00-T\",\"kind\":\"discount\",\"amount\":4.0},{\"rawText\":\"SAVINGS                                      4.95-T\",\"kind\":\"discount\",\"amount\":4.95},{\"rawText\":\"MC    PERSONAL DISC                          3.00-T\",\"kind\":\"discount\",\"amount\":3.0},{\"rawText\":\"SC       $15 OFF HOUSEHOLD                 15.00-T\",\"kind\":\"discount\",\"amount\":15.0},{\"rawText\":\"TAX                                         0.61\",\"kind\":\"tax\",\"amount\":0.61},{\"rawText\":\"Payment Type: US DEBIT\",\"kind\":\"payment\",\"amount\":null},{\"rawText\":\"Payment Amt: $10.43\",\"kind\":\"payment\",\"amount\":10.43}],\"warnings\":[\"The printed product prices, savings, and discount rows do not reconcile directly to the Total After Savings; the receipt appears to use additional pricing or promotion logic.\"]}",
  "error": null,
  "timing": {
    "totalMs": 6059,
    "imagePrepMs": 198,
    "modelMs": 5861,
    "postProcessMs": 0,
    "modelCalls": 1,
    "imageCount": 2,
    "model": "gpt-5.6-luna",
    "reasoningEffort": "low",
    "harness": "isolated-direct-request"
  }
}
```

</details>

<details>
<summary><strong>stop-shop-04</strong> — OK</summary>

Fixture image: [stop-shop-04.jpeg](../receipts/stop-shop-04.jpeg)
Complete JSON: [stop-shop-04.json](stop-shop-04.json)

```json
{
  "receipt": {
    "merchant": "STOP&SHOP",
    "date": "06/13/25",
    "currency": "USD",
    "subtotal": null,
    "tax": 0.96,
    "total": 57,
    "balance": 57,
    "ocrText": "STOP&SHOP\n2350 NORTH OCEAN AVENUE\nFARMINGVILLE, NY 11738\nStore Telephone: (631) 732-6757\nPharmacy Telephone: (631) 451-1821\nStore #562 06/13/25 02:47pm\nBAKERY - COMMERCIAL\nSB SSHE 8P SNDWE 1.49 F\nDELI\nRST BEEF JT GNG 6.95 F\nGROCERY\nVITACOCO 16.92 3.29 F\nVITACOCO 16.92 3.29 F\nVITACOCO 16.92 3.29 F\nDKB TRL MX CRMBL 0.54 F\nIH MANGO SLC 122 3.99 F\nNPR SPRNG 24P 3.99 B\nBTL/CAN DEPOSIT 1.20 F\nPRODUCE\nOVH SLD TPR 3.5 3.49 B\nOVH SLD TPR 3.5 3.49 B\nBF MEDITRRNEAN 5.49 F\nBRT FRM CHKPEA 5.49 F\nCONVENIENCE ITEMS\nIR DONATION RND UP NP 0.05\nTAX 0.96\n**** BALANCE 57.00\n****************************************\nPayment Type: CapitalOne Debit\nTIP Purchase PIN Verified\nCard: ************3293\nPayment Amt: $97.00\nCashback Amt: $40.00\nBALANCE $\n****************************************\nTHR035129 RC000 06/13/25 02:51pm\n****************************************\nDEBIT CARD 97.00\nCHANGE 40.00\nTOTAL NUMBER OF ITEMS SOLD: 12",
    "lines": [
      {
        "rawText": "SB SSHE 8P SNDWE 1.49 F",
        "description": "SB SSHE 8P SNDWE",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.49,
        "amount": 1.49,
        "category": "bakery",
        "confidence": 82,
        "needsReview": true
      },
      {
        "rawText": "RST BEEF JT GNG 6.95 F",
        "description": "RST BEEF JT GNG",
        "quantity": 1,
        "unit": null,
        "unitPrice": 6.95,
        "amount": 6.95,
        "category": "deli",
        "confidence": 91,
        "needsReview": false
      },
      {
        "rawText": "VITACOCO 16.92 3.29 F",
        "description": "VITACOCO 16.92",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.29,
        "amount": 3.29,
        "category": "grocery",
        "confidence": 87,
        "needsReview": true
      },
      {
        "rawText": "VITACOCO 16.92 3.29 F",
        "description": "VITACOCO 16.92",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.29,
        "amount": 3.29,
        "category": "grocery",
        "confidence": 87,
        "needsReview": true
      },
      {
        "rawText": "VITACOCO 16.92 3.29 F",
        "description": "VITACOCO 16.92",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.29,
        "amount": 3.29,
        "category": "grocery",
        "confidence": 87,
        "needsReview": true
      },
      {
        "rawText": "DKB TRL MX CRMBL 0.54 F",
        "description": "DKB TRL MX CRMBL",
        "quantity": 1,
        "unit": null,
        "unitPrice": 0.54,
        "amount": 0.54,
        "category": "grocery",
        "confidence": 92,
        "needsReview": false
      },
      {
        "rawText": "IH MANGO SLC 122 3.99 F",
        "description": "IH MANGO SLC 122",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.99,
        "amount": 3.99,
        "category": "grocery",
        "confidence": 88,
        "needsReview": true
      },
      {
        "rawText": "NPR SPRNG 24P 3.99 B",
        "description": "NPR SPRNG 24P",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.99,
        "amount": 3.99,
        "category": "grocery",
        "confidence": 86,
        "needsReview": true
      },
      {
        "rawText": "BTL/CAN DEPOSIT 1.20 F",
        "description": "BTL/CAN DEPOSIT",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.2,
        "amount": 1.2,
        "category": "deposit",
        "confidence": 95,
        "needsReview": false
      },
      {
        "rawText": "OVH SLD TPR 3.5 3.49 B",
        "description": "OVH SLD TPR 3.5",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.49,
        "amount": 3.49,
        "category": "produce",
        "confidence": 91,
        "needsReview": false
      },
      {
        "rawText": "OVH SLD TPR 3.5 3.49 B",
        "description": "OVH SLD TPR 3.5",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.49,
        "amount": 3.49,
        "category": "produce",
        "confidence": 91,
        "needsReview": false
      },
      {
        "rawText": "BF MEDITRRNEAN 5.49 F",
        "description": "BF MEDITRRNEAN",
        "quantity": 1,
        "unit": null,
        "unitPrice": 5.49,
        "amount": 5.49,
        "category": "produce",
        "confidence": 88,
        "needsReview": true
      },
      {
        "rawText": "BRT FRM CHKPEA 5.49 F",
        "description": "BRT FRM CHKPEA",
        "quantity": 1,
        "unit": null,
        "unitPrice": 5.49,
        "amount": 5.49,
        "category": "produce",
        "confidence": 88,
        "needsReview": true
      },
      {
        "rawText": "IR DONATION RND UP NP 0.05",
        "description": "IR DONATION RND UP NP",
        "quantity": 1,
        "unit": null,
        "unitPrice": 0.05,
        "amount": 0.05,
        "category": "donation",
        "confidence": 89,
        "needsReview": true
      }
    ],
    "adjustments": [
      {
        "rawText": "IR DONATION RND UP NP 0.05",
        "kind": "other",
        "amount": 0.05
      },
      {
        "rawText": "TAX 0.96",
        "kind": "tax",
        "amount": 0.96
      },
      {
        "rawText": "DEBIT CARD 97.00",
        "kind": "payment",
        "amount": 97
      },
      {
        "rawText": "CHANGE 40.00",
        "kind": "payment",
        "amount": 40
      }
    ],
    "warnings": [
      "Several abbreviated product descriptions are difficult to read and were preserved cautiously.",
      "Subtotal is not printed.",
      "The visible item amounts do not independently reconcile to the stated balance because of receipt formatting, taxes, deposits, and payment/change rows."
    ],
    "timing": {
      "totalMs": 10173,
      "imagePrepMs": 267,
      "modelMs": 9906,
      "postProcessMs": 0,
      "modelCalls": 1,
      "imageCount": 2,
      "model": "gpt-5.6-luna",
      "reasoningEffort": "low",
      "harness": "isolated-direct-request"
    }
  },
  "rawText": "STOP&SHOP\n2350 NORTH OCEAN AVENUE\nFARMINGVILLE, NY 11738\nStore Telephone: (631) 732-6757\nPharmacy Telephone: (631) 451-1821\nStore #562 06/13/25 02:47pm\nBAKERY - COMMERCIAL\nSB SSHE 8P SNDWE 1.49 F\nDELI\nRST BEEF JT GNG 6.95 F\nGROCERY\nVITACOCO 16.92 3.29 F\nVITACOCO 16.92 3.29 F\nVITACOCO 16.92 3.29 F\nDKB TRL MX CRMBL 0.54 F\nIH MANGO SLC 122 3.99 F\nNPR SPRNG 24P 3.99 B\nBTL/CAN DEPOSIT 1.20 F\nPRODUCE\nOVH SLD TPR 3.5 3.49 B\nOVH SLD TPR 3.5 3.49 B\nBF MEDITRRNEAN 5.49 F\nBRT FRM CHKPEA 5.49 F\nCONVENIENCE ITEMS\nIR DONATION RND UP NP 0.05\nTAX 0.96\n**** BALANCE 57.00\n****************************************\nPayment Type: CapitalOne Debit\nTIP Purchase PIN Verified\nCard: ************3293\nPayment Amt: $97.00\nCashback Amt: $40.00\nBALANCE $\n****************************************\nTHR035129 RC000 06/13/25 02:51pm\n****************************************\nDEBIT CARD 97.00\nCHANGE 40.00\nTOTAL NUMBER OF ITEMS SOLD: 12",
  "rawOutputText": "{\"merchant\":\"STOP&SHOP\",\"date\":\"06/13/25\",\"currency\":\"USD\",\"subtotal\":null,\"tax\":0.96,\"total\":57.0,\"balance\":57.0,\"ocrText\":\"STOP&SHOP\\n2350 NORTH OCEAN AVENUE\\nFARMINGVILLE, NY 11738\\nStore Telephone: (631) 732-6757\\nPharmacy Telephone: (631) 451-1821\\nStore #562 06/13/25 02:47pm\\nBAKERY - COMMERCIAL\\nSB SSHE 8P SNDWE 1.49 F\\nDELI\\nRST BEEF JT GNG 6.95 F\\nGROCERY\\nVITACOCO 16.92 3.29 F\\nVITACOCO 16.92 3.29 F\\nVITACOCO 16.92 3.29 F\\nDKB TRL MX CRMBL 0.54 F\\nIH MANGO SLC 122 3.99 F\\nNPR SPRNG 24P 3.99 B\\nBTL/CAN DEPOSIT 1.20 F\\nPRODUCE\\nOVH SLD TPR 3.5 3.49 B\\nOVH SLD TPR 3.5 3.49 B\\nBF MEDITRRNEAN 5.49 F\\nBRT FRM CHKPEA 5.49 F\\nCONVENIENCE ITEMS\\nIR DONATION RND UP NP 0.05\\nTAX 0.96\\n**** BALANCE 57.00\\n****************************************\\nPayment Type: CapitalOne Debit\\nTIP Purchase PIN Verified\\nCard: ************3293\\nPayment Amt: $97.00\\nCashback Amt: $40.00\\nBALANCE $\\n****************************************\\nTHR035129 RC000 06/13/25 02:51pm\\n****************************************\\nDEBIT CARD 97.00\\nCHANGE 40.00\\nTOTAL NUMBER OF ITEMS SOLD: 12\",\"lines\":[{\"rawText\":\"SB SSHE 8P SNDWE 1.49 F\",\"description\":\"SB SSHE 8P SNDWE\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.49,\"amount\":1.49,\"category\":\"bakery\",\"confidence\":82,\"needsReview\":true},{\"rawText\":\"RST BEEF JT GNG 6.95 F\",\"description\":\"RST BEEF JT GNG\",\"quantity\":1,\"unit\":null,\"unitPrice\":6.95,\"amount\":6.95,\"category\":\"deli\",\"confidence\":91,\"needsReview\":false},{\"rawText\":\"VITACOCO 16.92 3.29 F\",\"description\":\"VITACOCO 16.92\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.29,\"amount\":3.29,\"category\":\"grocery\",\"confidence\":87,\"needsReview\":true},{\"rawText\":\"VITACOCO 16.92 3.29 F\",\"description\":\"VITACOCO 16.92\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.29,\"amount\":3.29,\"category\":\"grocery\",\"confidence\":87,\"needsReview\":true},{\"rawText\":\"VITACOCO 16.92 3.29 F\",\"description\":\"VITACOCO 16.92\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.29,\"amount\":3.29,\"category\":\"grocery\",\"confidence\":87,\"needsReview\":true},{\"rawText\":\"DKB TRL MX CRMBL 0.54 F\",\"description\":\"DKB TRL MX CRMBL\",\"quantity\":1,\"unit\":null,\"unitPrice\":0.54,\"amount\":0.54,\"category\":\"grocery\",\"confidence\":92,\"needsReview\":false},{\"rawText\":\"IH MANGO SLC 122 3.99 F\",\"description\":\"IH MANGO SLC 122\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.99,\"amount\":3.99,\"category\":\"grocery\",\"confidence\":88,\"needsReview\":true},{\"rawText\":\"NPR SPRNG 24P 3.99 B\",\"description\":\"NPR SPRNG 24P\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.99,\"amount\":3.99,\"category\":\"grocery\",\"confidence\":86,\"needsReview\":true},{\"rawText\":\"BTL/CAN DEPOSIT 1.20 F\",\"description\":\"BTL/CAN DEPOSIT\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.2,\"amount\":1.2,\"category\":\"deposit\",\"confidence\":95,\"needsReview\":false},{\"rawText\":\"OVH SLD TPR 3.5 3.49 B\",\"description\":\"OVH SLD TPR 3.5\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.49,\"amount\":3.49,\"category\":\"produce\",\"confidence\":91,\"needsReview\":false},{\"rawText\":\"OVH SLD TPR 3.5 3.49 B\",\"description\":\"OVH SLD TPR 3.5\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.49,\"amount\":3.49,\"category\":\"produce\",\"confidence\":91,\"needsReview\":false},{\"rawText\":\"BF MEDITRRNEAN 5.49 F\",\"description\":\"BF MEDITRRNEAN\",\"quantity\":1,\"unit\":null,\"unitPrice\":5.49,\"amount\":5.49,\"category\":\"produce\",\"confidence\":88,\"needsReview\":true},{\"rawText\":\"BRT FRM CHKPEA 5.49 F\",\"description\":\"BRT FRM CHKPEA\",\"quantity\":1,\"unit\":null,\"unitPrice\":5.49,\"amount\":5.49,\"category\":\"produce\",\"confidence\":88,\"needsReview\":true},{\"rawText\":\"IR DONATION RND UP NP 0.05\",\"description\":\"IR DONATION RND UP NP\",\"quantity\":1,\"unit\":null,\"unitPrice\":0.05,\"amount\":0.05,\"category\":\"donation\",\"confidence\":89,\"needsReview\":true}],\"adjustments\":[{\"rawText\":\"IR DONATION RND UP NP 0.05\",\"kind\":\"other\",\"amount\":0.05},{\"rawText\":\"TAX 0.96\",\"kind\":\"tax\",\"amount\":0.96},{\"rawText\":\"DEBIT CARD 97.00\",\"kind\":\"payment\",\"amount\":97.0},{\"rawText\":\"CHANGE 40.00\",\"kind\":\"payment\",\"amount\":40.0}],\"warnings\":[\"Several abbreviated product descriptions are difficult to read and were preserved cautiously.\",\"Subtotal is not printed.\",\"The visible item amounts do not independently reconcile to the stated balance because of receipt formatting, taxes, deposits, and payment/change rows.\"]}",
  "error": null,
  "timing": {
    "totalMs": 10173,
    "imagePrepMs": 267,
    "modelMs": 9906,
    "postProcessMs": 0,
    "modelCalls": 1,
    "imageCount": 2,
    "model": "gpt-5.6-luna",
    "reasoningEffort": "low",
    "harness": "isolated-direct-request"
  }
}
```

</details>

<details>
<summary><strong>stop-shop-05</strong> — OK</summary>

Fixture image: [stop-shop-05.jpg](../receipts/stop-shop-05.jpg)
Complete JSON: [stop-shop-05.json](stop-shop-05.json)

```json
{
  "receipt": {
    "merchant": "Stop&Shop",
    "date": null,
    "currency": "USD",
    "subtotal": null,
    "tax": 0,
    "total": 1.57,
    "balance": 1.57,
    "ocrText": "Stop&Shop\n[?]\n[?]\n[?]\nFROZEN FOOD\nBLUBRY MNCHRS 42 5.99-F\nBONUS BUY SAVINGS 2.49-F\nPRICE YOU PAY 3.50\nBLUBRY MNCHRS 42 5.99-F\nBONUS BUY SAVINGS 2.49-F\nPRICE YOU PAY 3.50\nKID FRSH WGON 3.69-F\nBONUS BUY SAVINGS 1.19-F\nPRICE YOU PAY 2.50\nKDFRSH CHS PZZA 3.69-F\nBONUS BUY SAVINGS 1.19-F\nPRICE YOU PAY 2.50\nKID FRSH CHSE?RAV 3.69-F\nBONUS BUY SAVINGS 1.19-F\nPRICE YOU PAY 2.50\nKDFRSH CHS PZZA 3.69-F\nBONUS BUY SAVINGS 1.19-F\nPRICE YOU PAY 2.50\nKID FRSH CHSE?RAV 3.69-F\nBONUS BUY SAVINGS 1.19-F\nPRICE YOU PAY 2.50\nKDFRSH CHS PZZA 3.69-F\nBONUS BUY SAVINGS 1.19-F\nPRICE YOU PAY 2.50\nKID FRSH WGON 3.69-F\nBONUS BUY SAVINGS 1.19-F\nPRICE YOU PAY 2.50\nKDFRSH CHS PZZA 3.69-F\nBONUS BUY SAVINGS 1.19-F\nPRICE YOU PAY 2.50\nKID FRSH WGON 3.69-F\nBONUS BUY SAVINGS 1.19-F\nPRICE YOU PAY 2.50\nFROZEN DISC 15.00-\nMC FREE COUPON 2.50-F\nMC KID FRSH WGON 3.69-F\nMC KDFRSH CHS PZZA 3.69-F\nMC KID FRSH WGON 3.69-F\nTotal Before Savings 41.50\nYour Savings 43.07\nTotal After Savings 1.57-\nTAX 0.00\n**** BALANCE 1.57-\nMC CASH 0.00\nCHANGE 1.57\n******** SAVINGS SUMMARY",
    "lines": [
      {
        "rawText": "BLUBRY MNCHRS 42 5.99-F",
        "description": "BLUBRY MNCHRS 42",
        "quantity": 1,
        "unit": null,
        "unitPrice": 5.99,
        "amount": 5.99,
        "category": "frozen food",
        "confidence": 88,
        "needsReview": true
      },
      {
        "rawText": "BLUBRY MNCHRS 42 5.99-F",
        "description": "BLUBRY MNCHRS 42",
        "quantity": 1,
        "unit": null,
        "unitPrice": 5.99,
        "amount": 5.99,
        "category": "frozen food",
        "confidence": 88,
        "needsReview": true
      },
      {
        "rawText": "KID FRSH WGON 3.69-F",
        "description": "KID FRSH WGON",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.69,
        "amount": 3.69,
        "category": "frozen food",
        "confidence": 90,
        "needsReview": false
      },
      {
        "rawText": "KDFRSH CHS PZZA 3.69-F",
        "description": "KDFRSH CHS PZZA",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.69,
        "amount": 3.69,
        "category": "frozen food",
        "confidence": 94,
        "needsReview": false
      },
      {
        "rawText": "KID FRSH CHSE?RAV 3.69-F",
        "description": "KID FRSH CHSE?RAV",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.69,
        "amount": 3.69,
        "category": "frozen food",
        "confidence": 72,
        "needsReview": true
      },
      {
        "rawText": "KDFRSH CHS PZZA 3.69-F",
        "description": "KDFRSH CHS PZZA",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.69,
        "amount": 3.69,
        "category": "frozen food",
        "confidence": 94,
        "needsReview": false
      },
      {
        "rawText": "KID FRSH CHSE?RAV 3.69-F",
        "description": "KID FRSH CHSE?RAV",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.69,
        "amount": 3.69,
        "category": "frozen food",
        "confidence": 72,
        "needsReview": true
      },
      {
        "rawText": "KDFRSH CHS PZZA 3.69-F",
        "description": "KDFRSH CHS PZZA",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.69,
        "amount": 3.69,
        "category": "frozen food",
        "confidence": 94,
        "needsReview": false
      },
      {
        "rawText": "KID FRSH WGON 3.69-F",
        "description": "KID FRSH WGON",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.69,
        "amount": 3.69,
        "category": "frozen food",
        "confidence": 90,
        "needsReview": false
      },
      {
        "rawText": "KDFRSH CHS PZZA 3.69-F",
        "description": "KDFRSH CHS PZZA",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.69,
        "amount": 3.69,
        "category": "frozen food",
        "confidence": 94,
        "needsReview": false
      },
      {
        "rawText": "KID FRSH WGON 3.69-F",
        "description": "KID FRSH WGON",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.69,
        "amount": 3.69,
        "category": "frozen food",
        "confidence": 90,
        "needsReview": false
      }
    ],
    "adjustments": [
      {
        "rawText": "BONUS BUY SAVINGS 2.49-F",
        "kind": "discount",
        "amount": 2.49
      },
      {
        "rawText": "BONUS BUY SAVINGS 2.49-F",
        "kind": "discount",
        "amount": 2.49
      },
      {
        "rawText": "BONUS BUY SAVINGS 1.19-F",
        "kind": "discount",
        "amount": 1.19
      },
      {
        "rawText": "BONUS BUY SAVINGS 1.19-F",
        "kind": "discount",
        "amount": 1.19
      },
      {
        "rawText": "BONUS BUY SAVINGS 1.19-F",
        "kind": "discount",
        "amount": 1.19
      },
      {
        "rawText": "BONUS BUY SAVINGS 1.19-F",
        "kind": "discount",
        "amount": 1.19
      },
      {
        "rawText": "BONUS BUY SAVINGS 1.19-F",
        "kind": "discount",
        "amount": 1.19
      },
      {
        "rawText": "BONUS BUY SAVINGS 1.19-F",
        "kind": "discount",
        "amount": 1.19
      },
      {
        "rawText": "BONUS BUY SAVINGS 1.19-F",
        "kind": "discount",
        "amount": 1.19
      },
      {
        "rawText": "BONUS BUY SAVINGS 1.19-F",
        "kind": "discount",
        "amount": 1.19
      },
      {
        "rawText": "BONUS BUY SAVINGS 1.19-F",
        "kind": "discount",
        "amount": 1.19
      },
      {
        "rawText": "FROZEN DISC 15.00-",
        "kind": "discount",
        "amount": 15
      },
      {
        "rawText": "MC FREE COUPON 2.50-F",
        "kind": "coupon",
        "amount": 2.5
      },
      {
        "rawText": "MC KID FRSH WGON 3.69-F",
        "kind": "loyalty",
        "amount": 3.69
      },
      {
        "rawText": "MC KDFRSH CHS PZZA 3.69-F",
        "kind": "loyalty",
        "amount": 3.69
      },
      {
        "rawText": "MC KID FRSH WGON 3.69-F",
        "kind": "loyalty",
        "amount": 3.69
      }
    ],
    "warnings": [
      "Several header rows are blurred and unreadable.",
      "Two product abbreviations are partially unreadable and marked with [?].",
      "The receipt's savings and total lines do not reconcile cleanly with the visible item and adjustment rows."
    ],
    "timing": {
      "totalMs": 19425,
      "imagePrepMs": 165,
      "modelMs": 19260,
      "postProcessMs": 0,
      "modelCalls": 1,
      "imageCount": 2,
      "model": "gpt-5.6-luna",
      "reasoningEffort": "low",
      "harness": "isolated-direct-request"
    }
  },
  "rawText": "Stop&Shop\n[?]\n[?]\n[?]\nFROZEN FOOD\nBLUBRY MNCHRS 42 5.99-F\nBONUS BUY SAVINGS 2.49-F\nPRICE YOU PAY 3.50\nBLUBRY MNCHRS 42 5.99-F\nBONUS BUY SAVINGS 2.49-F\nPRICE YOU PAY 3.50\nKID FRSH WGON 3.69-F\nBONUS BUY SAVINGS 1.19-F\nPRICE YOU PAY 2.50\nKDFRSH CHS PZZA 3.69-F\nBONUS BUY SAVINGS 1.19-F\nPRICE YOU PAY 2.50\nKID FRSH CHSE?RAV 3.69-F\nBONUS BUY SAVINGS 1.19-F\nPRICE YOU PAY 2.50\nKDFRSH CHS PZZA 3.69-F\nBONUS BUY SAVINGS 1.19-F\nPRICE YOU PAY 2.50\nKID FRSH CHSE?RAV 3.69-F\nBONUS BUY SAVINGS 1.19-F\nPRICE YOU PAY 2.50\nKDFRSH CHS PZZA 3.69-F\nBONUS BUY SAVINGS 1.19-F\nPRICE YOU PAY 2.50\nKID FRSH WGON 3.69-F\nBONUS BUY SAVINGS 1.19-F\nPRICE YOU PAY 2.50\nKDFRSH CHS PZZA 3.69-F\nBONUS BUY SAVINGS 1.19-F\nPRICE YOU PAY 2.50\nKID FRSH WGON 3.69-F\nBONUS BUY SAVINGS 1.19-F\nPRICE YOU PAY 2.50\nFROZEN DISC 15.00-\nMC FREE COUPON 2.50-F\nMC KID FRSH WGON 3.69-F\nMC KDFRSH CHS PZZA 3.69-F\nMC KID FRSH WGON 3.69-F\nTotal Before Savings 41.50\nYour Savings 43.07\nTotal After Savings 1.57-\nTAX 0.00\n**** BALANCE 1.57-\nMC CASH 0.00\nCHANGE 1.57\n******** SAVINGS SUMMARY",
  "rawOutputText": "{\"merchant\":\"Stop&Shop\",\"date\":null,\"currency\":\"USD\",\"subtotal\":null,\"tax\":0.0,\"total\":1.57,\"balance\":1.57,\"ocrText\":\"Stop&Shop\\n[?]\\n[?]\\n[?]\\nFROZEN FOOD\\nBLUBRY MNCHRS 42 5.99-F\\nBONUS BUY SAVINGS 2.49-F\\nPRICE YOU PAY 3.50\\nBLUBRY MNCHRS 42 5.99-F\\nBONUS BUY SAVINGS 2.49-F\\nPRICE YOU PAY 3.50\\nKID FRSH WGON 3.69-F\\nBONUS BUY SAVINGS 1.19-F\\nPRICE YOU PAY 2.50\\nKDFRSH CHS PZZA 3.69-F\\nBONUS BUY SAVINGS 1.19-F\\nPRICE YOU PAY 2.50\\nKID FRSH CHSE?RAV 3.69-F\\nBONUS BUY SAVINGS 1.19-F\\nPRICE YOU PAY 2.50\\nKDFRSH CHS PZZA 3.69-F\\nBONUS BUY SAVINGS 1.19-F\\nPRICE YOU PAY 2.50\\nKID FRSH CHSE?RAV 3.69-F\\nBONUS BUY SAVINGS 1.19-F\\nPRICE YOU PAY 2.50\\nKDFRSH CHS PZZA 3.69-F\\nBONUS BUY SAVINGS 1.19-F\\nPRICE YOU PAY 2.50\\nKID FRSH WGON 3.69-F\\nBONUS BUY SAVINGS 1.19-F\\nPRICE YOU PAY 2.50\\nKDFRSH CHS PZZA 3.69-F\\nBONUS BUY SAVINGS 1.19-F\\nPRICE YOU PAY 2.50\\nKID FRSH WGON 3.69-F\\nBONUS BUY SAVINGS 1.19-F\\nPRICE YOU PAY 2.50\\nFROZEN DISC 15.00-\\nMC FREE COUPON 2.50-F\\nMC KID FRSH WGON 3.69-F\\nMC KDFRSH CHS PZZA 3.69-F\\nMC KID FRSH WGON 3.69-F\\nTotal Before Savings 41.50\\nYour Savings 43.07\\nTotal After Savings 1.57-\\nTAX 0.00\\n**** BALANCE 1.57-\\nMC CASH 0.00\\nCHANGE 1.57\\n******** SAVINGS SUMMARY\",\"lines\":[{\"rawText\":\"BLUBRY MNCHRS 42 5.99-F\",\"description\":\"BLUBRY MNCHRS 42\",\"quantity\":1,\"unit\":null,\"unitPrice\":5.99,\"amount\":5.99,\"category\":\"frozen food\",\"confidence\":88,\"needsReview\":true},{\"rawText\":\"BLUBRY MNCHRS 42 5.99-F\",\"description\":\"BLUBRY MNCHRS 42\",\"quantity\":1,\"unit\":null,\"unitPrice\":5.99,\"amount\":5.99,\"category\":\"frozen food\",\"confidence\":88,\"needsReview\":true},{\"rawText\":\"KID FRSH WGON 3.69-F\",\"description\":\"KID FRSH WGON\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.69,\"amount\":3.69,\"category\":\"frozen food\",\"confidence\":90,\"needsReview\":false},{\"rawText\":\"KDFRSH CHS PZZA 3.69-F\",\"description\":\"KDFRSH CHS PZZA\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.69,\"amount\":3.69,\"category\":\"frozen food\",\"confidence\":94,\"needsReview\":false},{\"rawText\":\"KID FRSH CHSE?RAV 3.69-F\",\"description\":\"KID FRSH CHSE?RAV\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.69,\"amount\":3.69,\"category\":\"frozen food\",\"confidence\":72,\"needsReview\":true},{\"rawText\":\"KDFRSH CHS PZZA 3.69-F\",\"description\":\"KDFRSH CHS PZZA\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.69,\"amount\":3.69,\"category\":\"frozen food\",\"confidence\":94,\"needsReview\":false},{\"rawText\":\"KID FRSH CHSE?RAV 3.69-F\",\"description\":\"KID FRSH CHSE?RAV\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.69,\"amount\":3.69,\"category\":\"frozen food\",\"confidence\":72,\"needsReview\":true},{\"rawText\":\"KDFRSH CHS PZZA 3.69-F\",\"description\":\"KDFRSH CHS PZZA\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.69,\"amount\":3.69,\"category\":\"frozen food\",\"confidence\":94,\"needsReview\":false},{\"rawText\":\"KID FRSH WGON 3.69-F\",\"description\":\"KID FRSH WGON\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.69,\"amount\":3.69,\"category\":\"frozen food\",\"confidence\":90,\"needsReview\":false},{\"rawText\":\"KDFRSH CHS PZZA 3.69-F\",\"description\":\"KDFRSH CHS PZZA\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.69,\"amount\":3.69,\"category\":\"frozen food\",\"confidence\":94,\"needsReview\":false},{\"rawText\":\"KID FRSH WGON 3.69-F\",\"description\":\"KID FRSH WGON\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.69,\"amount\":3.69,\"category\":\"frozen food\",\"confidence\":90,\"needsReview\":false}],\"adjustments\":[{\"rawText\":\"BONUS BUY SAVINGS 2.49-F\",\"kind\":\"discount\",\"amount\":2.49},{\"rawText\":\"BONUS BUY SAVINGS 2.49-F\",\"kind\":\"discount\",\"amount\":2.49},{\"rawText\":\"BONUS BUY SAVINGS 1.19-F\",\"kind\":\"discount\",\"amount\":1.19},{\"rawText\":\"BONUS BUY SAVINGS 1.19-F\",\"kind\":\"discount\",\"amount\":1.19},{\"rawText\":\"BONUS BUY SAVINGS 1.19-F\",\"kind\":\"discount\",\"amount\":1.19},{\"rawText\":\"BONUS BUY SAVINGS 1.19-F\",\"kind\":\"discount\",\"amount\":1.19},{\"rawText\":\"BONUS BUY SAVINGS 1.19-F\",\"kind\":\"discount\",\"amount\":1.19},{\"rawText\":\"BONUS BUY SAVINGS 1.19-F\",\"kind\":\"discount\",\"amount\":1.19},{\"rawText\":\"BONUS BUY SAVINGS 1.19-F\",\"kind\":\"discount\",\"amount\":1.19},{\"rawText\":\"BONUS BUY SAVINGS 1.19-F\",\"kind\":\"discount\",\"amount\":1.19},{\"rawText\":\"BONUS BUY SAVINGS 1.19-F\",\"kind\":\"discount\",\"amount\":1.19},{\"rawText\":\"FROZEN DISC 15.00-\",\"kind\":\"discount\",\"amount\":15.0},{\"rawText\":\"MC FREE COUPON 2.50-F\",\"kind\":\"coupon\",\"amount\":2.5},{\"rawText\":\"MC KID FRSH WGON 3.69-F\",\"kind\":\"loyalty\",\"amount\":3.69},{\"rawText\":\"MC KDFRSH CHS PZZA 3.69-F\",\"kind\":\"loyalty\",\"amount\":3.69},{\"rawText\":\"MC KID FRSH WGON 3.69-F\",\"kind\":\"loyalty\",\"amount\":3.69}],\"warnings\":[\"Several header rows are blurred and unreadable.\",\"Two product abbreviations are partially unreadable and marked with [?].\",\"The receipt's savings and total lines do not reconcile cleanly with the visible item and adjustment rows.\"]}",
  "error": null,
  "timing": {
    "totalMs": 19425,
    "imagePrepMs": 165,
    "modelMs": 19260,
    "postProcessMs": 0,
    "modelCalls": 1,
    "imageCount": 2,
    "model": "gpt-5.6-luna",
    "reasoningEffort": "low",
    "harness": "isolated-direct-request"
  }
}
```

</details>

<details>
<summary><strong>target-01</strong> — OK</summary>

Fixture image: [target-01.jpeg](../receipts/target-01.jpeg)
Complete JSON: [target-01.json](target-01.json)

```json
{
  "receipt": {
    "merchant": "TARGET",
    "date": "03/06/2016 05:25 PM",
    "currency": "USD",
    "subtotal": 246,
    "tax": 17.38,
    "total": 251.83,
    "balance": null,
    "ocrText": "TARGET\nEXPECT MORE. PAY LESS.\n03/06/2016 05:25 PM  EXPIRES 06/04/16\nCLEANING SUPPLIES\n003050132  UPUP HOUSEH  T  $1.94\nGROCERY\n071090012  OREO COOKIE  FC  $5.98\n2 @ $2.99 ea\n071200113  NATVAL ENER  FC  $5.89\n071201388  MOTTS FRTSN  FC  $1.50  ↓\n19273023  Cartwheel MfrCpn  $0.50\n071201388  MOTTS FRTSN  FC  $4.50  ↓\n3 @ $1.50 ea\nSaved $1.71 off $6.21\n203140116  V8  FC  $4.19  ↓\n210110240  OSCAR MAYER  FC  $2.50  ↓\n210110375  OSCAR MAYER  FC  $3.07\nCartwheel 15% off $3.62\n211080156  NAKED  FC  $2.50  ↓\n211124798  TOMATO  FC  $0.99\n211124061  LETTUCE  FC  $1.49\n212040401  KC MASTERPC  FC  $3.39\n212080427  MARKET PANT  FC  $3.29\n212140031  BC SDNLY SL  FC  $1.72\nCartwheel 10% off $1.92\n261011548  PEPPERIDGE  FC  $2.99\n261090048  SMUCKERS  FC  $2.09\n268050036  JENNIE-O  FC  $2.99\n270020350  LEAN CUSIN  FC  $2.45\nCartwheel 15% off $2.89\n270021296  LEAN CUSIN  FC  $2.14\n270021326  LEAN CUSIN  FC  $2.89\n270021477  LEAN CUSIN  FC  $2.45\nCartwheel 15% off $2.89\n270110029  EVOL  FC  $5.59\nCartwheel 30% off $7.99\n270110217  BIRD SUBB H  FC  $4.09\n284031157  MP EGGS  FC  $1.89\nCartwheel 5% off $1.99\n284050033  REDDI WIP  FC  $3.72\n284062204  MP H AND H  FC  $1.41\nCartwheel 5% off $1.49\n284101094  CHOBANI  FC  $1.00  ↓\n284101095  CHOBANI  FC  $1.00  ↓\n284101157  CHOBANI  FC  $1.00  ↓\n284101488  CHOBANI  FC  $2.00  ↓\n2 @ $1.00 ea\n288070759  BREYERS  FC  $3.49  ↓\nSaved $0.60 off $4.09\n288070788  BREYERS  FC  $3.49  ↓\nSaved $0.60 off $4.09\nHEALTH-BEAUTY-COSMETICS\n049090323  AQUAFI 2PK  T  $4.89  ↓\n049110079  SONICARE  T  $21.99\nHOME\n072071302  BISSELL  T  $129.99  ↓\nSaved $20.00 off $149.99\nSUBTOTAL  $246.00\nYour REDcard Savings  $11.55-\nT = MO TAX  8.4750% on $151.37  $12.83\nC = MO TAX  5.4750% on $83.08  $4.55\nTOTAL  $251.83",
    "lines": [
      {
        "rawText": "003050132  UPUP HOUSEH  T  $1.94",
        "description": "UPUP HOUSEH",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.94,
        "amount": 1.94,
        "category": "cleaning supplies",
        "confidence": 96,
        "needsReview": false
      },
      {
        "rawText": "071090012  OREO COOKIE  FC  $5.98",
        "description": "OREO COOKIE",
        "quantity": 2,
        "unit": "ea",
        "unitPrice": 2.99,
        "amount": 5.98,
        "category": "grocery",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "071200113  NATVAL ENER  FC  $5.89",
        "description": "NATVAL ENER",
        "quantity": 1,
        "unit": null,
        "unitPrice": 5.89,
        "amount": 5.89,
        "category": "grocery",
        "confidence": 94,
        "needsReview": false
      },
      {
        "rawText": "071201388  MOTTS FRTSN  FC  $1.50",
        "description": "MOTTS FRTSN",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.5,
        "amount": 1.5,
        "category": "grocery",
        "confidence": 97,
        "needsReview": false
      },
      {
        "rawText": "071201388  MOTTS FRTSN  FC  $4.50",
        "description": "MOTTS FRTSN",
        "quantity": 3,
        "unit": "ea",
        "unitPrice": 1.5,
        "amount": 4.5,
        "category": "grocery",
        "confidence": 97,
        "needsReview": false
      },
      {
        "rawText": "203140116  V8  FC  $4.19",
        "description": "V8",
        "quantity": 1,
        "unit": null,
        "unitPrice": 4.19,
        "amount": 4.19,
        "category": "grocery",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "210110240  OSCAR MAYER  FC  $2.50",
        "description": "OSCAR MAYER",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.5,
        "amount": 2.5,
        "category": "grocery",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "210110375  OSCAR MAYER  FC  $3.07",
        "description": "OSCAR MAYER",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.07,
        "amount": 3.07,
        "category": "grocery",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "211080156  NAKED  FC  $2.50",
        "description": "NAKED",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.5,
        "amount": 2.5,
        "category": "grocery",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "211124798  TOMATO  FC  $0.99",
        "description": "TOMATO",
        "quantity": 1,
        "unit": null,
        "unitPrice": 0.99,
        "amount": 0.99,
        "category": "produce",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "211124061  LETTUCE  FC  $1.49",
        "description": "LETTUCE",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.49,
        "amount": 1.49,
        "category": "produce",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "212040401  KC MASTERPC  FC  $3.39",
        "description": "KC MASTERPC",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.39,
        "amount": 3.39,
        "category": "grocery",
        "confidence": 95,
        "needsReview": false
      },
      {
        "rawText": "212080427  MARKET PANT  FC  $3.29",
        "description": "MARKET PANT",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.29,
        "amount": 3.29,
        "category": "grocery",
        "confidence": 95,
        "needsReview": false
      },
      {
        "rawText": "212140031  BC SDNLY SL  FC  $1.72",
        "description": "BC SDNLY SL",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.72,
        "amount": 1.72,
        "category": "grocery",
        "confidence": 94,
        "needsReview": false
      },
      {
        "rawText": "261011548  PEPPERIDGE  FC  $2.99",
        "description": "PEPPERIDGE",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.99,
        "amount": 2.99,
        "category": "grocery",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "261090048  SMUCKERS  FC  $2.09",
        "description": "SMUCKERS",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.09,
        "amount": 2.09,
        "category": "grocery",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "268050036  JENNIE-O  FC  $2.99",
        "description": "JENNIE-O",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.99,
        "amount": 2.99,
        "category": "grocery",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "270020350  LEAN CUSIN  FC  $2.45",
        "description": "LEAN CUSIN",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.45,
        "amount": 2.45,
        "category": "frozen food",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "270021296  LEAN CUSIN  FC  $2.14",
        "description": "LEAN CUSIN",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.14,
        "amount": 2.14,
        "category": "frozen food",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "270021326  LEAN CUSIN  FC  $2.89",
        "description": "LEAN CUSIN",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.89,
        "amount": 2.89,
        "category": "frozen food",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "270021477  LEAN CUSIN  FC  $2.45",
        "description": "LEAN CUSIN",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.45,
        "amount": 2.45,
        "category": "frozen food",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "270110029  EVOL  FC  $5.59",
        "description": "EVOL",
        "quantity": 1,
        "unit": null,
        "unitPrice": 5.59,
        "amount": 5.59,
        "category": "frozen food",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "270110217  BIRD SUBB H  FC  $4.09",
        "description": "BIRD SUBB H",
        "quantity": 1,
        "unit": null,
        "unitPrice": 4.09,
        "amount": 4.09,
        "category": "frozen food",
        "confidence": 94,
        "needsReview": false
      },
      {
        "rawText": "284031157  MP EGGS  FC  $1.89",
        "description": "MP EGGS",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.89,
        "amount": 1.89,
        "category": "dairy",
        "confidence": 97,
        "needsReview": false
      },
      {
        "rawText": "284050033  REDDI WIP  FC  $3.72",
        "description": "REDDI WIP",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.72,
        "amount": 3.72,
        "category": "dairy",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "284062204  MP H AND H  FC  $1.41",
        "description": "MP H AND H",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.41,
        "amount": 1.41,
        "category": "dairy",
        "confidence": 96,
        "needsReview": false
      },
      {
        "rawText": "284101094  CHOBANI  FC  $1.00",
        "description": "CHOBANI",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1,
        "amount": 1,
        "category": "dairy",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "284101095  CHOBANI  FC  $1.00",
        "description": "CHOBANI",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1,
        "amount": 1,
        "category": "dairy",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "284101157  CHOBANI  FC  $1.00",
        "description": "CHOBANI",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1,
        "amount": 1,
        "category": "dairy",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "284101488  CHOBANI  FC  $2.00",
        "description": "CHOBANI",
        "quantity": 2,
        "unit": "ea",
        "unitPrice": 1,
        "amount": 2,
        "category": "dairy",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "288070759  BREYERS  FC  $3.49",
        "description": "BREYERS",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.49,
        "amount": 3.49,
        "category": "frozen food",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "288070788  BREYERS  FC  $3.49",
        "description": "BREYERS",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.49,
        "amount": 3.49,
        "category": "frozen food",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "049090323  AQUAFI 2PK  T  $4.89",
        "description": "AQUAFI 2PK",
        "quantity": 1,
        "unit": null,
        "unitPrice": 4.89,
        "amount": 4.89,
        "category": "health-beauty-cosmetics",
        "confidence": 94,
        "needsReview": false
      },
      {
        "rawText": "049110079  SONICARE  T  $21.99",
        "description": "SONICARE",
        "quantity": 1,
        "unit": null,
        "unitPrice": 21.99,
        "amount": 21.99,
        "category": "health-beauty-cosmetics",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "072071302  BISSELL  T  $129.99",
        "description": "BISSELL",
        "quantity": 1,
        "unit": null,
        "unitPrice": 129.99,
        "amount": 129.99,
        "category": "home",
        "confidence": 98,
        "needsReview": false
      }
    ],
    "adjustments": [
      {
        "rawText": "19273023  Cartwheel MfrCpn  $0.50",
        "kind": "coupon",
        "amount": 0.5
      },
      {
        "rawText": "Saved $1.71 off $6.21",
        "kind": "discount",
        "amount": 1.71
      },
      {
        "rawText": "Cartwheel 15% off $3.62",
        "kind": "discount",
        "amount": null
      },
      {
        "rawText": "Cartwheel 10% off $1.92",
        "kind": "discount",
        "amount": null
      },
      {
        "rawText": "Cartwheel 15% off $2.89",
        "kind": "discount",
        "amount": null
      },
      {
        "rawText": "Cartwheel 15% off $2.89",
        "kind": "discount",
        "amount": null
      },
      {
        "rawText": "Cartwheel 30% off $7.99",
        "kind": "discount",
        "amount": null
      },
      {
        "rawText": "Cartwheel 5% off $1.99",
        "kind": "discount",
        "amount": null
      },
      {
        "rawText": "Cartwheel 5% off $1.49",
        "kind": "discount",
        "amount": null
      },
      {
        "rawText": "Saved $0.60 off $4.09",
        "kind": "discount",
        "amount": 0.6
      },
      {
        "rawText": "Saved $0.60 off $4.09",
        "kind": "discount",
        "amount": 0.6
      },
      {
        "rawText": "Saved $20.00 off $149.99",
        "kind": "discount",
        "amount": 20
      },
      {
        "rawText": "Your REDcard Savings  $11.55-",
        "kind": "loyalty",
        "amount": 11.55
      },
      {
        "rawText": "T = MO TAX  8.4750% on $151.37  $12.83",
        "kind": "tax",
        "amount": 12.83
      },
      {
        "rawText": "C = MO TAX  5.4750% on $83.08  $4.55",
        "kind": "tax",
        "amount": 4.55
      }
    ],
    "warnings": [
      "The receipt image ends after TOTAL; no payment or BALANCE row is visible.",
      "Several Cartwheel discount rows show a reference price but not an explicit deduction amount, so their adjustment amounts are null.",
      "The printed subtotal, tax, and total do not fully reconcile from visible line-item prices alone because discounts and loyalty savings are applied separately."
    ],
    "timing": {
      "totalMs": 19176,
      "imagePrepMs": 172,
      "modelMs": 19004,
      "postProcessMs": 0,
      "modelCalls": 1,
      "imageCount": 2,
      "model": "gpt-5.6-luna",
      "reasoningEffort": "low",
      "harness": "isolated-direct-request"
    }
  },
  "rawText": "TARGET\nEXPECT MORE. PAY LESS.\n03/06/2016 05:25 PM  EXPIRES 06/04/16\nCLEANING SUPPLIES\n003050132  UPUP HOUSEH  T  $1.94\nGROCERY\n071090012  OREO COOKIE  FC  $5.98\n2 @ $2.99 ea\n071200113  NATVAL ENER  FC  $5.89\n071201388  MOTTS FRTSN  FC  $1.50  ↓\n19273023  Cartwheel MfrCpn  $0.50\n071201388  MOTTS FRTSN  FC  $4.50  ↓\n3 @ $1.50 ea\nSaved $1.71 off $6.21\n203140116  V8  FC  $4.19  ↓\n210110240  OSCAR MAYER  FC  $2.50  ↓\n210110375  OSCAR MAYER  FC  $3.07\nCartwheel 15% off $3.62\n211080156  NAKED  FC  $2.50  ↓\n211124798  TOMATO  FC  $0.99\n211124061  LETTUCE  FC  $1.49\n212040401  KC MASTERPC  FC  $3.39\n212080427  MARKET PANT  FC  $3.29\n212140031  BC SDNLY SL  FC  $1.72\nCartwheel 10% off $1.92\n261011548  PEPPERIDGE  FC  $2.99\n261090048  SMUCKERS  FC  $2.09\n268050036  JENNIE-O  FC  $2.99\n270020350  LEAN CUSIN  FC  $2.45\nCartwheel 15% off $2.89\n270021296  LEAN CUSIN  FC  $2.14\n270021326  LEAN CUSIN  FC  $2.89\n270021477  LEAN CUSIN  FC  $2.45\nCartwheel 15% off $2.89\n270110029  EVOL  FC  $5.59\nCartwheel 30% off $7.99\n270110217  BIRD SUBB H  FC  $4.09\n284031157  MP EGGS  FC  $1.89\nCartwheel 5% off $1.99\n284050033  REDDI WIP  FC  $3.72\n284062204  MP H AND H  FC  $1.41\nCartwheel 5% off $1.49\n284101094  CHOBANI  FC  $1.00  ↓\n284101095  CHOBANI  FC  $1.00  ↓\n284101157  CHOBANI  FC  $1.00  ↓\n284101488  CHOBANI  FC  $2.00  ↓\n2 @ $1.00 ea\n288070759  BREYERS  FC  $3.49  ↓\nSaved $0.60 off $4.09\n288070788  BREYERS  FC  $3.49  ↓\nSaved $0.60 off $4.09\nHEALTH-BEAUTY-COSMETICS\n049090323  AQUAFI 2PK  T  $4.89  ↓\n049110079  SONICARE  T  $21.99\nHOME\n072071302  BISSELL  T  $129.99  ↓\nSaved $20.00 off $149.99\nSUBTOTAL  $246.00\nYour REDcard Savings  $11.55-\nT = MO TAX  8.4750% on $151.37  $12.83\nC = MO TAX  5.4750% on $83.08  $4.55\nTOTAL  $251.83",
  "rawOutputText": "{\"merchant\":\"TARGET\",\"date\":\"03/06/2016 05:25 PM\",\"currency\":\"USD\",\"subtotal\":246.00,\"tax\":17.38,\"total\":251.83,\"balance\":null,\"ocrText\":\"TARGET\\nEXPECT MORE. PAY LESS.\\n03/06/2016 05:25 PM  EXPIRES 06/04/16\\nCLEANING SUPPLIES\\n003050132  UPUP HOUSEH  T  $1.94\\nGROCERY\\n071090012  OREO COOKIE  FC  $5.98\\n2 @ $2.99 ea\\n071200113  NATVAL ENER  FC  $5.89\\n071201388  MOTTS FRTSN  FC  $1.50  ↓\\n19273023  Cartwheel MfrCpn  $0.50\\n071201388  MOTTS FRTSN  FC  $4.50  ↓\\n3 @ $1.50 ea\\nSaved $1.71 off $6.21\\n203140116  V8  FC  $4.19  ↓\\n210110240  OSCAR MAYER  FC  $2.50  ↓\\n210110375  OSCAR MAYER  FC  $3.07\\nCartwheel 15% off $3.62\\n211080156  NAKED  FC  $2.50  ↓\\n211124798  TOMATO  FC  $0.99\\n211124061  LETTUCE  FC  $1.49\\n212040401  KC MASTERPC  FC  $3.39\\n212080427  MARKET PANT  FC  $3.29\\n212140031  BC SDNLY SL  FC  $1.72\\nCartwheel 10% off $1.92\\n261011548  PEPPERIDGE  FC  $2.99\\n261090048  SMUCKERS  FC  $2.09\\n268050036  JENNIE-O  FC  $2.99\\n270020350  LEAN CUSIN  FC  $2.45\\nCartwheel 15% off $2.89\\n270021296  LEAN CUSIN  FC  $2.14\\n270021326  LEAN CUSIN  FC  $2.89\\n270021477  LEAN CUSIN  FC  $2.45\\nCartwheel 15% off $2.89\\n270110029  EVOL  FC  $5.59\\nCartwheel 30% off $7.99\\n270110217  BIRD SUBB H  FC  $4.09\\n284031157  MP EGGS  FC  $1.89\\nCartwheel 5% off $1.99\\n284050033  REDDI WIP  FC  $3.72\\n284062204  MP H AND H  FC  $1.41\\nCartwheel 5% off $1.49\\n284101094  CHOBANI  FC  $1.00  ↓\\n284101095  CHOBANI  FC  $1.00  ↓\\n284101157  CHOBANI  FC  $1.00  ↓\\n284101488  CHOBANI  FC  $2.00  ↓\\n2 @ $1.00 ea\\n288070759  BREYERS  FC  $3.49  ↓\\nSaved $0.60 off $4.09\\n288070788  BREYERS  FC  $3.49  ↓\\nSaved $0.60 off $4.09\\nHEALTH-BEAUTY-COSMETICS\\n049090323  AQUAFI 2PK  T  $4.89  ↓\\n049110079  SONICARE  T  $21.99\\nHOME\\n072071302  BISSELL  T  $129.99  ↓\\nSaved $20.00 off $149.99\\nSUBTOTAL  $246.00\\nYour REDcard Savings  $11.55-\\nT = MO TAX  8.4750% on $151.37  $12.83\\nC = MO TAX  5.4750% on $83.08  $4.55\\nTOTAL  $251.83\",\"lines\":[{\"rawText\":\"003050132  UPUP HOUSEH  T  $1.94\",\"description\":\"UPUP HOUSEH\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.94,\"amount\":1.94,\"category\":\"cleaning supplies\",\"confidence\":96,\"needsReview\":false},{\"rawText\":\"071090012  OREO COOKIE  FC  $5.98\",\"description\":\"OREO COOKIE\",\"quantity\":2,\"unit\":\"ea\",\"unitPrice\":2.99,\"amount\":5.98,\"category\":\"grocery\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"071200113  NATVAL ENER  FC  $5.89\",\"description\":\"NATVAL ENER\",\"quantity\":1,\"unit\":null,\"unitPrice\":5.89,\"amount\":5.89,\"category\":\"grocery\",\"confidence\":94,\"needsReview\":false},{\"rawText\":\"071201388  MOTTS FRTSN  FC  $1.50\",\"description\":\"MOTTS FRTSN\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.5,\"amount\":1.5,\"category\":\"grocery\",\"confidence\":97,\"needsReview\":false},{\"rawText\":\"071201388  MOTTS FRTSN  FC  $4.50\",\"description\":\"MOTTS FRTSN\",\"quantity\":3,\"unit\":\"ea\",\"unitPrice\":1.5,\"amount\":4.5,\"category\":\"grocery\",\"confidence\":97,\"needsReview\":false},{\"rawText\":\"203140116  V8  FC  $4.19\",\"description\":\"V8\",\"quantity\":1,\"unit\":null,\"unitPrice\":4.19,\"amount\":4.19,\"category\":\"grocery\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"210110240  OSCAR MAYER  FC  $2.50\",\"description\":\"OSCAR MAYER\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.5,\"amount\":2.5,\"category\":\"grocery\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"210110375  OSCAR MAYER  FC  $3.07\",\"description\":\"OSCAR MAYER\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.07,\"amount\":3.07,\"category\":\"grocery\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"211080156  NAKED  FC  $2.50\",\"description\":\"NAKED\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.5,\"amount\":2.5,\"category\":\"grocery\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"211124798  TOMATO  FC  $0.99\",\"description\":\"TOMATO\",\"quantity\":1,\"unit\":null,\"unitPrice\":0.99,\"amount\":0.99,\"category\":\"produce\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"211124061  LETTUCE  FC  $1.49\",\"description\":\"LETTUCE\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.49,\"amount\":1.49,\"category\":\"produce\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"212040401  KC MASTERPC  FC  $3.39\",\"description\":\"KC MASTERPC\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.39,\"amount\":3.39,\"category\":\"grocery\",\"confidence\":95,\"needsReview\":false},{\"rawText\":\"212080427  MARKET PANT  FC  $3.29\",\"description\":\"MARKET PANT\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.29,\"amount\":3.29,\"category\":\"grocery\",\"confidence\":95,\"needsReview\":false},{\"rawText\":\"212140031  BC SDNLY SL  FC  $1.72\",\"description\":\"BC SDNLY SL\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.72,\"amount\":1.72,\"category\":\"grocery\",\"confidence\":94,\"needsReview\":false},{\"rawText\":\"261011548  PEPPERIDGE  FC  $2.99\",\"description\":\"PEPPERIDGE\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.99,\"amount\":2.99,\"category\":\"grocery\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"261090048  SMUCKERS  FC  $2.09\",\"description\":\"SMUCKERS\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.09,\"amount\":2.09,\"category\":\"grocery\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"268050036  JENNIE-O  FC  $2.99\",\"description\":\"JENNIE-O\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.99,\"amount\":2.99,\"category\":\"grocery\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"270020350  LEAN CUSIN  FC  $2.45\",\"description\":\"LEAN CUSIN\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.45,\"amount\":2.45,\"category\":\"frozen food\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"270021296  LEAN CUSIN  FC  $2.14\",\"description\":\"LEAN CUSIN\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.14,\"amount\":2.14,\"category\":\"frozen food\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"270021326  LEAN CUSIN  FC  $2.89\",\"description\":\"LEAN CUSIN\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.89,\"amount\":2.89,\"category\":\"frozen food\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"270021477  LEAN CUSIN  FC  $2.45\",\"description\":\"LEAN CUSIN\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.45,\"amount\":2.45,\"category\":\"frozen food\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"270110029  EVOL  FC  $5.59\",\"description\":\"EVOL\",\"quantity\":1,\"unit\":null,\"unitPrice\":5.59,\"amount\":5.59,\"category\":\"frozen food\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"270110217  BIRD SUBB H  FC  $4.09\",\"description\":\"BIRD SUBB H\",\"quantity\":1,\"unit\":null,\"unitPrice\":4.09,\"amount\":4.09,\"category\":\"frozen food\",\"confidence\":94,\"needsReview\":false},{\"rawText\":\"284031157  MP EGGS  FC  $1.89\",\"description\":\"MP EGGS\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.89,\"amount\":1.89,\"category\":\"dairy\",\"confidence\":97,\"needsReview\":false},{\"rawText\":\"284050033  REDDI WIP  FC  $3.72\",\"description\":\"REDDI WIP\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.72,\"amount\":3.72,\"category\":\"dairy\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"284062204  MP H AND H  FC  $1.41\",\"description\":\"MP H AND H\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.41,\"amount\":1.41,\"category\":\"dairy\",\"confidence\":96,\"needsReview\":false},{\"rawText\":\"284101094  CHOBANI  FC  $1.00\",\"description\":\"CHOBANI\",\"quantity\":1,\"unit\":null,\"unitPrice\":1,\"amount\":1,\"category\":\"dairy\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"284101095  CHOBANI  FC  $1.00\",\"description\":\"CHOBANI\",\"quantity\":1,\"unit\":null,\"unitPrice\":1,\"amount\":1,\"category\":\"dairy\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"284101157  CHOBANI  FC  $1.00\",\"description\":\"CHOBANI\",\"quantity\":1,\"unit\":null,\"unitPrice\":1,\"amount\":1,\"category\":\"dairy\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"284101488  CHOBANI  FC  $2.00\",\"description\":\"CHOBANI\",\"quantity\":2,\"unit\":\"ea\",\"unitPrice\":1,\"amount\":2,\"category\":\"dairy\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"288070759  BREYERS  FC  $3.49\",\"description\":\"BREYERS\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.49,\"amount\":3.49,\"category\":\"frozen food\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"288070788  BREYERS  FC  $3.49\",\"description\":\"BREYERS\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.49,\"amount\":3.49,\"category\":\"frozen food\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"049090323  AQUAFI 2PK  T  $4.89\",\"description\":\"AQUAFI 2PK\",\"quantity\":1,\"unit\":null,\"unitPrice\":4.89,\"amount\":4.89,\"category\":\"health-beauty-cosmetics\",\"confidence\":94,\"needsReview\":false},{\"rawText\":\"049110079  SONICARE  T  $21.99\",\"description\":\"SONICARE\",\"quantity\":1,\"unit\":null,\"unitPrice\":21.99,\"amount\":21.99,\"category\":\"health-beauty-cosmetics\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"072071302  BISSELL  T  $129.99\",\"description\":\"BISSELL\",\"quantity\":1,\"unit\":null,\"unitPrice\":129.99,\"amount\":129.99,\"category\":\"home\",\"confidence\":98,\"needsReview\":false}],\"adjustments\":[{\"rawText\":\"19273023  Cartwheel MfrCpn  $0.50\",\"kind\":\"coupon\",\"amount\":0.5},{\"rawText\":\"Saved $1.71 off $6.21\",\"kind\":\"discount\",\"amount\":1.71},{\"rawText\":\"Cartwheel 15% off $3.62\",\"kind\":\"discount\",\"amount\":null},{\"rawText\":\"Cartwheel 10% off $1.92\",\"kind\":\"discount\",\"amount\":null},{\"rawText\":\"Cartwheel 15% off $2.89\",\"kind\":\"discount\",\"amount\":null},{\"rawText\":\"Cartwheel 15% off $2.89\",\"kind\":\"discount\",\"amount\":null},{\"rawText\":\"Cartwheel 30% off $7.99\",\"kind\":\"discount\",\"amount\":null},{\"rawText\":\"Cartwheel 5% off $1.99\",\"kind\":\"discount\",\"amount\":null},{\"rawText\":\"Cartwheel 5% off $1.49\",\"kind\":\"discount\",\"amount\":null},{\"rawText\":\"Saved $0.60 off $4.09\",\"kind\":\"discount\",\"amount\":0.6},{\"rawText\":\"Saved $0.60 off $4.09\",\"kind\":\"discount\",\"amount\":0.6},{\"rawText\":\"Saved $20.00 off $149.99\",\"kind\":\"discount\",\"amount\":20},{\"rawText\":\"Your REDcard Savings  $11.55-\",\"kind\":\"loyalty\",\"amount\":11.55},{\"rawText\":\"T = MO TAX  8.4750% on $151.37  $12.83\",\"kind\":\"tax\",\"amount\":12.83},{\"rawText\":\"C = MO TAX  5.4750% on $83.08  $4.55\",\"kind\":\"tax\",\"amount\":4.55}],\"warnings\":[\"The receipt image ends after TOTAL; no payment or BALANCE row is visible.\",\"Several Cartwheel discount rows show a reference price but not an explicit deduction amount, so their adjustment amounts are null.\",\"The printed subtotal, tax, and total do not fully reconcile from visible line-item prices alone because discounts and loyalty savings are applied separately.\"]}",
  "error": null,
  "timing": {
    "totalMs": 19176,
    "imagePrepMs": 172,
    "modelMs": 19004,
    "postProcessMs": 0,
    "modelCalls": 1,
    "imageCount": 2,
    "model": "gpt-5.6-luna",
    "reasoningEffort": "low",
    "harness": "isolated-direct-request"
  }
}
```

</details>

<details>
<summary><strong>target-02</strong> — OK</summary>

Fixture image: [target-02.jpg](../receipts/target-02.jpg)
Complete JSON: [target-02.json](target-02.json)

```json
{
  "receipt": {
    "merchant": "Target",
    "date": "04/14/2026 09:09 AM",
    "currency": "USD",
    "subtotal": 99.37,
    "tax": 3.66,
    "total": 93.59,
    "balance": 93.54,
    "ocrText": "Target\nDiamond Bar - 909-610-2149\n747 Grand Ave\nDiamond Bar, California 91765-8400\n04/14/2026 09:09 AM\nELECTRONICS\n0083680080 UP&BATTERY T $7.99\n008380077 UP&BATTERY T $7.99\nGROCERY\n26101876 NATURES OWN NF $3.99\n284061104 LACTACT 640Z NF $4.89\n210070052 C. WIRTHY CO NF $22.98\n2 @ $11.49 ea\n284101105 DANNON NF $3.50\n2for$7\nRegular Price $4.29\n284101100 DANNON NF $3.50\n2for$7\nRegular Price $4.29\n212400636 BERTOLLI NF $3.49\nRegular Price $4.99\n266050017 APPLES NF $7.99\n267080011 GG FRUIT NF $1.45\n5 $0.29 ea\n212400031 PREGO NF $1.60\nRegular Price $2.29\n071081101 The OnlyBean T $4.29\nHEALTH AND BEAUTY\n253304064 dealworthy T $2.50\n2 @ $1.25 ea\nRegular Price $1.49\n$5 off Circle\nLAUNDRY CLEANING AND CLOSET T $2.92\n003030022 Scotch-Brite T $2.92\nRegular Price $3.49\n$5 off Circle\n003030352 HANDY SPONGE T $2.84\nRegular Price $3.39\n$5 off Circle\n003030533 up & up T $2.17\nRegular Price $2.59\n$5 off Circle\n003030649 LYSOL T $4.18\nRegular Price $4.99\n$5 off Circle\n003050473 COMET T $1.08\nRegular Price $1.29\n$5 off Circle\n003050427 SWIFFER T $10.02\n2 @ $5.01 ea\nRegular Price $5.99\n$5 off Circle\nSUBTOTAL $99.37\nTarget Circle Card 5% $4.73 -\n5% off Birthday $4.71 -\nI - CA TAX 9.75000 on $37.57 $3.66\nTOTAL $93.59\nReusable Bag Discount $0.05\n*6566 TARGET DEBIT CARD $93.54\nAUTH CODE: 014050\nWHEN YOU RETURN ANY ITEM, YOUR RETURN CREDIT WILL NOT INCLUDE ANY PROMOTIONAL DISCOUNT OR COUPON APPLIED TO THE ORIGINAL ORDER.\nQuestions about this\nTarget Debit Card transaction",
    "lines": [
      {
        "rawText": "0083680080 UP&BATTERY T $7.99",
        "description": "UP&BATTERY",
        "quantity": 1,
        "unit": null,
        "unitPrice": 7.99,
        "amount": 7.99,
        "category": "electronics",
        "confidence": 94,
        "needsReview": false
      },
      {
        "rawText": "008380077 UP&BATTERY T $7.99",
        "description": "UP&BATTERY",
        "quantity": 1,
        "unit": null,
        "unitPrice": 7.99,
        "amount": 7.99,
        "category": "electronics",
        "confidence": 94,
        "needsReview": false
      },
      {
        "rawText": "26101876 NATURES OWN NF $3.99",
        "description": "NATURES OWN",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.99,
        "amount": 3.99,
        "category": "grocery",
        "confidence": 93,
        "needsReview": false
      },
      {
        "rawText": "284061104 LACTACT 640Z NF $4.89",
        "description": "LACTACT 640Z",
        "quantity": 1,
        "unit": null,
        "unitPrice": 4.89,
        "amount": 4.89,
        "category": "grocery",
        "confidence": 86,
        "needsReview": true
      },
      {
        "rawText": "210070052 C. WIRTHY CO NF $22.98; 2 @ $11.49 ea",
        "description": "C. WIRTHY CO",
        "quantity": 2,
        "unit": "ea",
        "unitPrice": 11.49,
        "amount": 22.98,
        "category": "grocery",
        "confidence": 87,
        "needsReview": true
      },
      {
        "rawText": "284101105 DANNON NF $3.50; 2for$7; Regular Price $4.29",
        "description": "DANNON",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.5,
        "amount": 3.5,
        "category": "grocery",
        "confidence": 94,
        "needsReview": false
      },
      {
        "rawText": "284101100 DANNON NF $3.50; 2for$7; Regular Price $4.29",
        "description": "DANNON",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.5,
        "amount": 3.5,
        "category": "grocery",
        "confidence": 94,
        "needsReview": false
      },
      {
        "rawText": "212400636 BERTOLLI NF $3.49; Regular Price $4.99",
        "description": "BERTOLLI",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.49,
        "amount": 3.49,
        "category": "grocery",
        "confidence": 95,
        "needsReview": false
      },
      {
        "rawText": "266050017 APPLES NF $7.99",
        "description": "APPLES",
        "quantity": 1,
        "unit": null,
        "unitPrice": 7.99,
        "amount": 7.99,
        "category": "grocery",
        "confidence": 93,
        "needsReview": false
      },
      {
        "rawText": "267080011 GG FRUIT NF $1.45; 5 $0.29 ea",
        "description": "GG FRUIT",
        "quantity": 5,
        "unit": "ea",
        "unitPrice": 0.29,
        "amount": 1.45,
        "category": "grocery",
        "confidence": 88,
        "needsReview": true
      },
      {
        "rawText": "212400031 PREGO NF $1.60; Regular Price $2.29",
        "description": "PREGO",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.6,
        "amount": 1.6,
        "category": "grocery",
        "confidence": 94,
        "needsReview": false
      },
      {
        "rawText": "071081101 The OnlyBean T $4.29",
        "description": "The OnlyBean",
        "quantity": 1,
        "unit": null,
        "unitPrice": 4.29,
        "amount": 4.29,
        "category": "grocery",
        "confidence": 91,
        "needsReview": false
      },
      {
        "rawText": "253304064 dealworthy T $2.50; 2 @ $1.25 ea; Regular Price $1.49",
        "description": "dealworthy",
        "quantity": 2,
        "unit": "ea",
        "unitPrice": 1.25,
        "amount": 2.5,
        "category": "health and beauty",
        "confidence": 92,
        "needsReview": false
      },
      {
        "rawText": "003030022 Scotch-Brite T $2.92; Regular Price $3.49",
        "description": "Scotch-Brite",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.92,
        "amount": 2.92,
        "category": "laundry cleaning and closet",
        "confidence": 95,
        "needsReview": false
      },
      {
        "rawText": "003030352 HANDY SPONGE T $2.84; Regular Price $3.39",
        "description": "HANDY SPONGE",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.84,
        "amount": 2.84,
        "category": "laundry cleaning and closet",
        "confidence": 95,
        "needsReview": false
      },
      {
        "rawText": "003030533 up & up T $2.17; Regular Price $2.59",
        "description": "up & up",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.17,
        "amount": 2.17,
        "category": "laundry cleaning and closet",
        "confidence": 95,
        "needsReview": false
      },
      {
        "rawText": "003030649 LYSOL T $4.18; Regular Price $4.99",
        "description": "LYSOL",
        "quantity": 1,
        "unit": null,
        "unitPrice": 4.18,
        "amount": 4.18,
        "category": "laundry cleaning and closet",
        "confidence": 95,
        "needsReview": false
      },
      {
        "rawText": "003050473 COMET T $1.08; Regular Price $1.29",
        "description": "COMET",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.08,
        "amount": 1.08,
        "category": "laundry cleaning and closet",
        "confidence": 95,
        "needsReview": false
      },
      {
        "rawText": "003050427 SWIFFER T $10.02; 2 @ $5.01 ea; Regular Price $5.99",
        "description": "SWIFFER",
        "quantity": 2,
        "unit": "ea",
        "unitPrice": 5.01,
        "amount": 10.02,
        "category": "laundry cleaning and closet",
        "confidence": 95,
        "needsReview": false
      }
    ],
    "adjustments": [
      {
        "rawText": "Target Circle Card 5% $4.73 -",
        "kind": "loyalty",
        "amount": 4.73
      },
      {
        "rawText": "5% off Birthday $4.71 -",
        "kind": "discount",
        "amount": 4.71
      },
      {
        "rawText": "I - CA TAX 9.75000 on $37.57 $3.66",
        "kind": "tax",
        "amount": 3.66
      },
      {
        "rawText": "Reusable Bag Discount $0.05",
        "kind": "discount",
        "amount": 0.05
      },
      {
        "rawText": "*6566 TARGET DEBIT CARD $93.54",
        "kind": "payment",
        "amount": 93.54
      }
    ],
    "warnings": [
      "Several abbreviated product descriptions are difficult to read and may require review.",
      "The printed subtotal and total do not reconcile directly with the visible item amounts because of promotional pricing and adjustments."
    ],
    "timing": {
      "totalMs": 13521,
      "imagePrepMs": 206,
      "modelMs": 13315,
      "postProcessMs": 0,
      "modelCalls": 1,
      "imageCount": 2,
      "model": "gpt-5.6-luna",
      "reasoningEffort": "low",
      "harness": "isolated-direct-request"
    }
  },
  "rawText": "Target\nDiamond Bar - 909-610-2149\n747 Grand Ave\nDiamond Bar, California 91765-8400\n04/14/2026 09:09 AM\nELECTRONICS\n0083680080 UP&BATTERY T $7.99\n008380077 UP&BATTERY T $7.99\nGROCERY\n26101876 NATURES OWN NF $3.99\n284061104 LACTACT 640Z NF $4.89\n210070052 C. WIRTHY CO NF $22.98\n2 @ $11.49 ea\n284101105 DANNON NF $3.50\n2for$7\nRegular Price $4.29\n284101100 DANNON NF $3.50\n2for$7\nRegular Price $4.29\n212400636 BERTOLLI NF $3.49\nRegular Price $4.99\n266050017 APPLES NF $7.99\n267080011 GG FRUIT NF $1.45\n5 $0.29 ea\n212400031 PREGO NF $1.60\nRegular Price $2.29\n071081101 The OnlyBean T $4.29\nHEALTH AND BEAUTY\n253304064 dealworthy T $2.50\n2 @ $1.25 ea\nRegular Price $1.49\n$5 off Circle\nLAUNDRY CLEANING AND CLOSET T $2.92\n003030022 Scotch-Brite T $2.92\nRegular Price $3.49\n$5 off Circle\n003030352 HANDY SPONGE T $2.84\nRegular Price $3.39\n$5 off Circle\n003030533 up & up T $2.17\nRegular Price $2.59\n$5 off Circle\n003030649 LYSOL T $4.18\nRegular Price $4.99\n$5 off Circle\n003050473 COMET T $1.08\nRegular Price $1.29\n$5 off Circle\n003050427 SWIFFER T $10.02\n2 @ $5.01 ea\nRegular Price $5.99\n$5 off Circle\nSUBTOTAL $99.37\nTarget Circle Card 5% $4.73 -\n5% off Birthday $4.71 -\nI - CA TAX 9.75000 on $37.57 $3.66\nTOTAL $93.59\nReusable Bag Discount $0.05\n*6566 TARGET DEBIT CARD $93.54\nAUTH CODE: 014050\nWHEN YOU RETURN ANY ITEM, YOUR RETURN CREDIT WILL NOT INCLUDE ANY PROMOTIONAL DISCOUNT OR COUPON APPLIED TO THE ORIGINAL ORDER.\nQuestions about this\nTarget Debit Card transaction",
  "rawOutputText": "{\"merchant\":\"Target\",\"date\":\"04/14/2026 09:09 AM\",\"currency\":\"USD\",\"subtotal\":99.37,\"tax\":3.66,\"total\":93.59,\"balance\":93.54,\"ocrText\":\"Target\\nDiamond Bar - 909-610-2149\\n747 Grand Ave\\nDiamond Bar, California 91765-8400\\n04/14/2026 09:09 AM\\nELECTRONICS\\n0083680080 UP&BATTERY T $7.99\\n008380077 UP&BATTERY T $7.99\\nGROCERY\\n26101876 NATURES OWN NF $3.99\\n284061104 LACTACT 640Z NF $4.89\\n210070052 C. WIRTHY CO NF $22.98\\n2 @ $11.49 ea\\n284101105 DANNON NF $3.50\\n2for$7\\nRegular Price $4.29\\n284101100 DANNON NF $3.50\\n2for$7\\nRegular Price $4.29\\n212400636 BERTOLLI NF $3.49\\nRegular Price $4.99\\n266050017 APPLES NF $7.99\\n267080011 GG FRUIT NF $1.45\\n5 $0.29 ea\\n212400031 PREGO NF $1.60\\nRegular Price $2.29\\n071081101 The OnlyBean T $4.29\\nHEALTH AND BEAUTY\\n253304064 dealworthy T $2.50\\n2 @ $1.25 ea\\nRegular Price $1.49\\n$5 off Circle\\nLAUNDRY CLEANING AND CLOSET T $2.92\\n003030022 Scotch-Brite T $2.92\\nRegular Price $3.49\\n$5 off Circle\\n003030352 HANDY SPONGE T $2.84\\nRegular Price $3.39\\n$5 off Circle\\n003030533 up & up T $2.17\\nRegular Price $2.59\\n$5 off Circle\\n003030649 LYSOL T $4.18\\nRegular Price $4.99\\n$5 off Circle\\n003050473 COMET T $1.08\\nRegular Price $1.29\\n$5 off Circle\\n003050427 SWIFFER T $10.02\\n2 @ $5.01 ea\\nRegular Price $5.99\\n$5 off Circle\\nSUBTOTAL $99.37\\nTarget Circle Card 5% $4.73 -\\n5% off Birthday $4.71 -\\nI - CA TAX 9.75000 on $37.57 $3.66\\nTOTAL $93.59\\nReusable Bag Discount $0.05\\n*6566 TARGET DEBIT CARD $93.54\\nAUTH CODE: 014050\\nWHEN YOU RETURN ANY ITEM, YOUR RETURN CREDIT WILL NOT INCLUDE ANY PROMOTIONAL DISCOUNT OR COUPON APPLIED TO THE ORIGINAL ORDER.\\nQuestions about this\\nTarget Debit Card transaction\",\"lines\":[{\"rawText\":\"0083680080 UP&BATTERY T $7.99\",\"description\":\"UP&BATTERY\",\"quantity\":1,\"unit\":null,\"unitPrice\":7.99,\"amount\":7.99,\"category\":\"electronics\",\"confidence\":94,\"needsReview\":false},{\"rawText\":\"008380077 UP&BATTERY T $7.99\",\"description\":\"UP&BATTERY\",\"quantity\":1,\"unit\":null,\"unitPrice\":7.99,\"amount\":7.99,\"category\":\"electronics\",\"confidence\":94,\"needsReview\":false},{\"rawText\":\"26101876 NATURES OWN NF $3.99\",\"description\":\"NATURES OWN\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.99,\"amount\":3.99,\"category\":\"grocery\",\"confidence\":93,\"needsReview\":false},{\"rawText\":\"284061104 LACTACT 640Z NF $4.89\",\"description\":\"LACTACT 640Z\",\"quantity\":1,\"unit\":null,\"unitPrice\":4.89,\"amount\":4.89,\"category\":\"grocery\",\"confidence\":86,\"needsReview\":true},{\"rawText\":\"210070052 C. WIRTHY CO NF $22.98; 2 @ $11.49 ea\",\"description\":\"C. WIRTHY CO\",\"quantity\":2,\"unit\":\"ea\",\"unitPrice\":11.49,\"amount\":22.98,\"category\":\"grocery\",\"confidence\":87,\"needsReview\":true},{\"rawText\":\"284101105 DANNON NF $3.50; 2for$7; Regular Price $4.29\",\"description\":\"DANNON\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.5,\"amount\":3.5,\"category\":\"grocery\",\"confidence\":94,\"needsReview\":false},{\"rawText\":\"284101100 DANNON NF $3.50; 2for$7; Regular Price $4.29\",\"description\":\"DANNON\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.5,\"amount\":3.5,\"category\":\"grocery\",\"confidence\":94,\"needsReview\":false},{\"rawText\":\"212400636 BERTOLLI NF $3.49; Regular Price $4.99\",\"description\":\"BERTOLLI\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.49,\"amount\":3.49,\"category\":\"grocery\",\"confidence\":95,\"needsReview\":false},{\"rawText\":\"266050017 APPLES NF $7.99\",\"description\":\"APPLES\",\"quantity\":1,\"unit\":null,\"unitPrice\":7.99,\"amount\":7.99,\"category\":\"grocery\",\"confidence\":93,\"needsReview\":false},{\"rawText\":\"267080011 GG FRUIT NF $1.45; 5 $0.29 ea\",\"description\":\"GG FRUIT\",\"quantity\":5,\"unit\":\"ea\",\"unitPrice\":0.29,\"amount\":1.45,\"category\":\"grocery\",\"confidence\":88,\"needsReview\":true},{\"rawText\":\"212400031 PREGO NF $1.60; Regular Price $2.29\",\"description\":\"PREGO\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.6,\"amount\":1.6,\"category\":\"grocery\",\"confidence\":94,\"needsReview\":false},{\"rawText\":\"071081101 The OnlyBean T $4.29\",\"description\":\"The OnlyBean\",\"quantity\":1,\"unit\":null,\"unitPrice\":4.29,\"amount\":4.29,\"category\":\"grocery\",\"confidence\":91,\"needsReview\":false},{\"rawText\":\"253304064 dealworthy T $2.50; 2 @ $1.25 ea; Regular Price $1.49\",\"description\":\"dealworthy\",\"quantity\":2,\"unit\":\"ea\",\"unitPrice\":1.25,\"amount\":2.5,\"category\":\"health and beauty\",\"confidence\":92,\"needsReview\":false},{\"rawText\":\"003030022 Scotch-Brite T $2.92; Regular Price $3.49\",\"description\":\"Scotch-Brite\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.92,\"amount\":2.92,\"category\":\"laundry cleaning and closet\",\"confidence\":95,\"needsReview\":false},{\"rawText\":\"003030352 HANDY SPONGE T $2.84; Regular Price $3.39\",\"description\":\"HANDY SPONGE\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.84,\"amount\":2.84,\"category\":\"laundry cleaning and closet\",\"confidence\":95,\"needsReview\":false},{\"rawText\":\"003030533 up & up T $2.17; Regular Price $2.59\",\"description\":\"up & up\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.17,\"amount\":2.17,\"category\":\"laundry cleaning and closet\",\"confidence\":95,\"needsReview\":false},{\"rawText\":\"003030649 LYSOL T $4.18; Regular Price $4.99\",\"description\":\"LYSOL\",\"quantity\":1,\"unit\":null,\"unitPrice\":4.18,\"amount\":4.18,\"category\":\"laundry cleaning and closet\",\"confidence\":95,\"needsReview\":false},{\"rawText\":\"003050473 COMET T $1.08; Regular Price $1.29\",\"description\":\"COMET\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.08,\"amount\":1.08,\"category\":\"laundry cleaning and closet\",\"confidence\":95,\"needsReview\":false},{\"rawText\":\"003050427 SWIFFER T $10.02; 2 @ $5.01 ea; Regular Price $5.99\",\"description\":\"SWIFFER\",\"quantity\":2,\"unit\":\"ea\",\"unitPrice\":5.01,\"amount\":10.02,\"category\":\"laundry cleaning and closet\",\"confidence\":95,\"needsReview\":false}],\"adjustments\":[{\"rawText\":\"Target Circle Card 5% $4.73 -\",\"kind\":\"loyalty\",\"amount\":4.73},{\"rawText\":\"5% off Birthday $4.71 -\",\"kind\":\"discount\",\"amount\":4.71},{\"rawText\":\"I - CA TAX 9.75000 on $37.57 $3.66\",\"kind\":\"tax\",\"amount\":3.66},{\"rawText\":\"Reusable Bag Discount $0.05\",\"kind\":\"discount\",\"amount\":0.05},{\"rawText\":\"*6566 TARGET DEBIT CARD $93.54\",\"kind\":\"payment\",\"amount\":93.54}],\"warnings\":[\"Several abbreviated product descriptions are difficult to read and may require review.\",\"The printed subtotal and total do not reconcile directly with the visible item amounts because of promotional pricing and adjustments.\"]}",
  "error": null,
  "timing": {
    "totalMs": 13521,
    "imagePrepMs": 206,
    "modelMs": 13315,
    "postProcessMs": 0,
    "modelCalls": 1,
    "imageCount": 2,
    "model": "gpt-5.6-luna",
    "reasoningEffort": "low",
    "harness": "isolated-direct-request"
  }
}
```

</details>

<details>
<summary><strong>target-03</strong> — OK</summary>

Fixture image: [target-03.jpg](../receipts/target-03.jpg)
Complete JSON: [target-03.json](target-03.json)

```json
{
  "receipt": {
    "merchant": "TARGET",
    "date": "08/17/2018 08:36 PM",
    "currency": "USD",
    "subtotal": 27.34,
    "tax": 2.76,
    "total": 30.1,
    "balance": 0,
    "ocrText": "TARGET\nEXPECT MORE. PAY LESS!\nREGENCY - 904-721-4909\n08/17/2018 08:36 PM EXPIRES 11/15/18\n[barcode]\nCLEANING SUPPLIES\n003070458        ^ LYSOL             T    $5.99\n                 Regular Price            $5.99\n                 Refund Value             $4.34\n0019200-04853    MFR COUPON               $1.00-\n003070458        ^ LYSOL             T    $5.99\n                 Regular Price            $5.99\n                 Refund Value             $4.34\n0019200-04853    MFR COUPON               $1.00-\n003080338        ^ TIDE 2X           T   $11.99\n                 Regular Price           $11.99\n                 Refund Value             $8.68\n0037000-13945    MFR COUPON               $2.00-\n003080338        ^ TIDE 2X           T   $11.99\n                 Regular Price           $11.99\n                 Refund Value             $8.68\n0037000-13945    MFR COUPON               $2.00-\n003080713        ^ TIDE 2X           T    $9.19\n                 Regular Price            $9.19\n                 Refund Value             $6.65\n0037000-13945    MFR COUPON               $3.00-\n003080713        ^ TIDE 2X           T    $9.19\n                 Regular Price            $9.19\n                 Refund Value             $6.65\n0037000-13945    MFR COUPON               $3.00-\n10374196         CATEGORY COUPON          $15.00-\nSUBTOTAL                                  $27.34\nT = FL TAX 7.0000% on $39.34            $2.76\nTOTAL                                     $30.10\n*2140 GIFT CARD PAYMENT                 $15.00\n*9591 DEBIT TOTAL PAYMENT               $15.10\nAID: A0000000980840\nUS DEBIT\n*2140 GIFT CARD BALANCE                  $0.00\nTOTAL SAVINGS THIS TRIP\n$27.00",
    "lines": [
      {
        "rawText": "003070458 ^ LYSOL T $5.99",
        "description": "LYSOL",
        "quantity": 1,
        "unit": null,
        "unitPrice": 5.99,
        "amount": 5.99,
        "category": "cleaning supplies",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "003070458 ^ LYSOL T $5.99",
        "description": "LYSOL",
        "quantity": 1,
        "unit": null,
        "unitPrice": 5.99,
        "amount": 5.99,
        "category": "cleaning supplies",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "003080338 ^ TIDE 2X T $11.99",
        "description": "TIDE 2X",
        "quantity": 1,
        "unit": null,
        "unitPrice": 11.99,
        "amount": 11.99,
        "category": "cleaning supplies",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "003080338 ^ TIDE 2X T $11.99",
        "description": "TIDE 2X",
        "quantity": 1,
        "unit": null,
        "unitPrice": 11.99,
        "amount": 11.99,
        "category": "cleaning supplies",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "003080713 ^ TIDE 2X T $9.19",
        "description": "TIDE 2X",
        "quantity": 1,
        "unit": null,
        "unitPrice": 9.19,
        "amount": 9.19,
        "category": "cleaning supplies",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "003080713 ^ TIDE 2X T $9.19",
        "description": "TIDE 2X",
        "quantity": 1,
        "unit": null,
        "unitPrice": 9.19,
        "amount": 9.19,
        "category": "cleaning supplies",
        "confidence": 99,
        "needsReview": false
      }
    ],
    "adjustments": [
      {
        "rawText": "0019200-04853 MFR COUPON $1.00-",
        "kind": "coupon",
        "amount": 1
      },
      {
        "rawText": "0019200-04853 MFR COUPON $1.00-",
        "kind": "coupon",
        "amount": 1
      },
      {
        "rawText": "0037000-13945 MFR COUPON $2.00-",
        "kind": "coupon",
        "amount": 2
      },
      {
        "rawText": "0037000-13945 MFR COUPON $2.00-",
        "kind": "coupon",
        "amount": 2
      },
      {
        "rawText": "0037000-13945 MFR COUPON $3.00-",
        "kind": "coupon",
        "amount": 3
      },
      {
        "rawText": "0037000-13945 MFR COUPON $3.00-",
        "kind": "coupon",
        "amount": 3
      },
      {
        "rawText": "10374196 CATEGORY COUPON $15.00-",
        "kind": "coupon",
        "amount": 15
      },
      {
        "rawText": "T = FL TAX 7.0000% on $39.34 $2.76",
        "kind": "tax",
        "amount": 2.76
      },
      {
        "rawText": "*2140 GIFT CARD PAYMENT $15.00",
        "kind": "payment",
        "amount": 15
      },
      {
        "rawText": "*9591 DEBIT TOTAL PAYMENT $15.10",
        "kind": "payment",
        "amount": 15.1
      },
      {
        "rawText": "*2140 GIFT CARD BALANCE $0.00",
        "kind": "other",
        "amount": 0
      }
    ],
    "warnings": [
      "The printed GIFT CARD BALANCE is $0.00; TOTAL is $30.10 and is used as the receipt total."
    ],
    "timing": {
      "totalMs": 8899,
      "imagePrepMs": 132,
      "modelMs": 8767,
      "postProcessMs": 0,
      "modelCalls": 1,
      "imageCount": 2,
      "model": "gpt-5.6-luna",
      "reasoningEffort": "low",
      "harness": "isolated-direct-request"
    }
  },
  "rawText": "TARGET\nEXPECT MORE. PAY LESS!\nREGENCY - 904-721-4909\n08/17/2018 08:36 PM EXPIRES 11/15/18\n[barcode]\nCLEANING SUPPLIES\n003070458        ^ LYSOL             T    $5.99\n                 Regular Price            $5.99\n                 Refund Value             $4.34\n0019200-04853    MFR COUPON               $1.00-\n003070458        ^ LYSOL             T    $5.99\n                 Regular Price            $5.99\n                 Refund Value             $4.34\n0019200-04853    MFR COUPON               $1.00-\n003080338        ^ TIDE 2X           T   $11.99\n                 Regular Price           $11.99\n                 Refund Value             $8.68\n0037000-13945    MFR COUPON               $2.00-\n003080338        ^ TIDE 2X           T   $11.99\n                 Regular Price           $11.99\n                 Refund Value             $8.68\n0037000-13945    MFR COUPON               $2.00-\n003080713        ^ TIDE 2X           T    $9.19\n                 Regular Price            $9.19\n                 Refund Value             $6.65\n0037000-13945    MFR COUPON               $3.00-\n003080713        ^ TIDE 2X           T    $9.19\n                 Regular Price            $9.19\n                 Refund Value             $6.65\n0037000-13945    MFR COUPON               $3.00-\n10374196         CATEGORY COUPON          $15.00-\nSUBTOTAL                                  $27.34\nT = FL TAX 7.0000% on $39.34            $2.76\nTOTAL                                     $30.10\n*2140 GIFT CARD PAYMENT                 $15.00\n*9591 DEBIT TOTAL PAYMENT               $15.10\nAID: A0000000980840\nUS DEBIT\n*2140 GIFT CARD BALANCE                  $0.00\nTOTAL SAVINGS THIS TRIP\n$27.00",
  "rawOutputText": "{\"merchant\":\"TARGET\",\"date\":\"08/17/2018 08:36 PM\",\"currency\":\"USD\",\"subtotal\":27.34,\"tax\":2.76,\"total\":30.1,\"balance\":0.0,\"ocrText\":\"TARGET\\nEXPECT MORE. PAY LESS!\\nREGENCY - 904-721-4909\\n08/17/2018 08:36 PM EXPIRES 11/15/18\\n[barcode]\\nCLEANING SUPPLIES\\n003070458        ^ LYSOL             T    $5.99\\n                 Regular Price            $5.99\\n                 Refund Value             $4.34\\n0019200-04853    MFR COUPON               $1.00-\\n003070458        ^ LYSOL             T    $5.99\\n                 Regular Price            $5.99\\n                 Refund Value             $4.34\\n0019200-04853    MFR COUPON               $1.00-\\n003080338        ^ TIDE 2X           T   $11.99\\n                 Regular Price           $11.99\\n                 Refund Value             $8.68\\n0037000-13945    MFR COUPON               $2.00-\\n003080338        ^ TIDE 2X           T   $11.99\\n                 Regular Price           $11.99\\n                 Refund Value             $8.68\\n0037000-13945    MFR COUPON               $2.00-\\n003080713        ^ TIDE 2X           T    $9.19\\n                 Regular Price            $9.19\\n                 Refund Value             $6.65\\n0037000-13945    MFR COUPON               $3.00-\\n003080713        ^ TIDE 2X           T    $9.19\\n                 Regular Price            $9.19\\n                 Refund Value             $6.65\\n0037000-13945    MFR COUPON               $3.00-\\n10374196         CATEGORY COUPON          $15.00-\\nSUBTOTAL                                  $27.34\\nT = FL TAX 7.0000% on $39.34            $2.76\\nTOTAL                                     $30.10\\n*2140 GIFT CARD PAYMENT                 $15.00\\n*9591 DEBIT TOTAL PAYMENT               $15.10\\nAID: A0000000980840\\nUS DEBIT\\n*2140 GIFT CARD BALANCE                  $0.00\\nTOTAL SAVINGS THIS TRIP\\n$27.00\",\"lines\":[{\"rawText\":\"003070458 ^ LYSOL T $5.99\",\"description\":\"LYSOL\",\"quantity\":1,\"unit\":null,\"unitPrice\":5.99,\"amount\":5.99,\"category\":\"cleaning supplies\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"003070458 ^ LYSOL T $5.99\",\"description\":\"LYSOL\",\"quantity\":1,\"unit\":null,\"unitPrice\":5.99,\"amount\":5.99,\"category\":\"cleaning supplies\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"003080338 ^ TIDE 2X T $11.99\",\"description\":\"TIDE 2X\",\"quantity\":1,\"unit\":null,\"unitPrice\":11.99,\"amount\":11.99,\"category\":\"cleaning supplies\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"003080338 ^ TIDE 2X T $11.99\",\"description\":\"TIDE 2X\",\"quantity\":1,\"unit\":null,\"unitPrice\":11.99,\"amount\":11.99,\"category\":\"cleaning supplies\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"003080713 ^ TIDE 2X T $9.19\",\"description\":\"TIDE 2X\",\"quantity\":1,\"unit\":null,\"unitPrice\":9.19,\"amount\":9.19,\"category\":\"cleaning supplies\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"003080713 ^ TIDE 2X T $9.19\",\"description\":\"TIDE 2X\",\"quantity\":1,\"unit\":null,\"unitPrice\":9.19,\"amount\":9.19,\"category\":\"cleaning supplies\",\"confidence\":99,\"needsReview\":false}],\"adjustments\":[{\"rawText\":\"0019200-04853 MFR COUPON $1.00-\",\"kind\":\"coupon\",\"amount\":1.0},{\"rawText\":\"0019200-04853 MFR COUPON $1.00-\",\"kind\":\"coupon\",\"amount\":1.0},{\"rawText\":\"0037000-13945 MFR COUPON $2.00-\",\"kind\":\"coupon\",\"amount\":2.0},{\"rawText\":\"0037000-13945 MFR COUPON $2.00-\",\"kind\":\"coupon\",\"amount\":2.0},{\"rawText\":\"0037000-13945 MFR COUPON $3.00-\",\"kind\":\"coupon\",\"amount\":3.0},{\"rawText\":\"0037000-13945 MFR COUPON $3.00-\",\"kind\":\"coupon\",\"amount\":3.0},{\"rawText\":\"10374196 CATEGORY COUPON $15.00-\",\"kind\":\"coupon\",\"amount\":15.0},{\"rawText\":\"T = FL TAX 7.0000% on $39.34 $2.76\",\"kind\":\"tax\",\"amount\":2.76},{\"rawText\":\"*2140 GIFT CARD PAYMENT $15.00\",\"kind\":\"payment\",\"amount\":15.0},{\"rawText\":\"*9591 DEBIT TOTAL PAYMENT $15.10\",\"kind\":\"payment\",\"amount\":15.1},{\"rawText\":\"*2140 GIFT CARD BALANCE $0.00\",\"kind\":\"other\",\"amount\":0.0}],\"warnings\":[\"The printed GIFT CARD BALANCE is $0.00; TOTAL is $30.10 and is used as the receipt total.\"]}",
  "error": null,
  "timing": {
    "totalMs": 8899,
    "imagePrepMs": 132,
    "modelMs": 8767,
    "postProcessMs": 0,
    "modelCalls": 1,
    "imageCount": 2,
    "model": "gpt-5.6-luna",
    "reasoningEffort": "low",
    "harness": "isolated-direct-request"
  }
}
```

</details>

<details>
<summary><strong>target-04</strong> — OK</summary>

Fixture image: [target-04.jpg](../receipts/target-04.jpg)
Complete JSON: [target-04.json](target-04.json)

```json
{
  "receipt": {
    "merchant": "Target",
    "date": "06/06/2021 08:57 PM",
    "currency": "USD",
    "subtotal": 61.52,
    "tax": 4.25,
    "total": 65.77,
    "balance": 65.77,
    "ocrText": "Memphis East - 901-261-5079\n5959 Poplar Ave\nMemphis, Tennessee 38119-3938\n06/06/2021 08:57 PM\n[barcode]\nGROCERY\n270030028 MORNIF MEAT BF $3.79\n211180116 NASOYA VEGET BF $4.49\n284060377 GG OATMILK BF $3.49\n284000087 PILLSBURY BF $1.89\n284050333 STARBUCKS BF $4.69\n265500028 GG FRUIT BF $3.69\n270140410 GG FRUIT BF $2.49\n284040499 TAZO BF $3.79\n211180091 TOFURKY MEAT BF $2.99\n212141019 ANNIE'S BF $2.79\n212040050 SBR BF $2.29\n212180873 SOUP BF $3.89\n284100452 SILK BF $2.50\n2 @ $1.25 ea\nRegular Price $1.69\n212060196 MT OLIVE PKL BF $1.99\n071090692 BISCOFF8.8OZ BF $2.69\n231130524 GG GRANOLA BF $3.39\n261040708 HH KINGAR BF $4.29\n071200533 NATURE'S BF $2.99\n071180218 ANNIES FRT TF $3.39\nSUBTOTAL $61.52\nB = TN TAX 6.75000 on $58.13 $3.91\nT = TN TAX 9.75000 on $3.39 $0.34\n[PAYMENT REDACTED] $65.77\n[PAYMENT REDACTED] $65.77\nA0000000031010\nAUTH CODE: 035721\nYour Target Circle earnings are in!\nOpen the Target App or visit\nTarget.com/Circle to see your benefits.\n--------------------------------\nTOTAL SAVINGS THIS TRIP\n$0.88\n--------------------------------",
    "lines": [
      {
        "rawText": "270030028 MORNIF MEAT BF $3.79",
        "description": "MORNIF MEAT",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.79,
        "amount": 3.79,
        "category": "grocery",
        "confidence": 88,
        "needsReview": true
      },
      {
        "rawText": "211180116 NASOYA VEGET BF $4.49",
        "description": "NASOYA VEGET",
        "quantity": 1,
        "unit": null,
        "unitPrice": 4.49,
        "amount": 4.49,
        "category": "grocery",
        "confidence": 96,
        "needsReview": false
      },
      {
        "rawText": "284060377 GG OATMILK BF $3.49",
        "description": "GG OATMILK",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.49,
        "amount": 3.49,
        "category": "grocery",
        "confidence": 96,
        "needsReview": false
      },
      {
        "rawText": "284000087 PILLSBURY BF $1.89",
        "description": "PILLSBURY",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.89,
        "amount": 1.89,
        "category": "grocery",
        "confidence": 96,
        "needsReview": false
      },
      {
        "rawText": "284050333 STARBUCKS BF $4.69",
        "description": "STARBUCKS",
        "quantity": 1,
        "unit": null,
        "unitPrice": 4.69,
        "amount": 4.69,
        "category": "grocery",
        "confidence": 96,
        "needsReview": false
      },
      {
        "rawText": "265500028 GG FRUIT BF $3.69",
        "description": "GG FRUIT",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.69,
        "amount": 3.69,
        "category": "grocery",
        "confidence": 96,
        "needsReview": false
      },
      {
        "rawText": "270140410 GG FRUIT BF $2.49",
        "description": "GG FRUIT",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.49,
        "amount": 2.49,
        "category": "grocery",
        "confidence": 96,
        "needsReview": false
      },
      {
        "rawText": "284040499 TAZO BF $3.79",
        "description": "TAZO",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.79,
        "amount": 3.79,
        "category": "grocery",
        "confidence": 96,
        "needsReview": false
      },
      {
        "rawText": "211180091 TOFURKY MEAT BF $2.99",
        "description": "TOFURKY MEAT",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.99,
        "amount": 2.99,
        "category": "grocery",
        "confidence": 96,
        "needsReview": false
      },
      {
        "rawText": "212141019 ANNIE'S BF $2.79",
        "description": "ANNIE'S",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.79,
        "amount": 2.79,
        "category": "grocery",
        "confidence": 96,
        "needsReview": false
      },
      {
        "rawText": "212040050 SBR BF $2.29",
        "description": "SBR",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.29,
        "amount": 2.29,
        "category": "grocery",
        "confidence": 96,
        "needsReview": false
      },
      {
        "rawText": "212180873 SOUP BF $3.89",
        "description": "SOUP",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.89,
        "amount": 3.89,
        "category": "grocery",
        "confidence": 96,
        "needsReview": false
      },
      {
        "rawText": "284100452 SILK BF $2.50",
        "description": "SILK",
        "quantity": 2,
        "unit": "ea",
        "unitPrice": 1.25,
        "amount": 2.5,
        "category": "grocery",
        "confidence": 94,
        "needsReview": false
      },
      {
        "rawText": "212060196 MT OLIVE PKL BF $1.99",
        "description": "MT OLIVE PKL",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.99,
        "amount": 1.99,
        "category": "grocery",
        "confidence": 96,
        "needsReview": false
      },
      {
        "rawText": "071090692 BISCOFF8.8OZ BF $2.69",
        "description": "BISCOFF 8.8 OZ",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.69,
        "amount": 2.69,
        "category": "grocery",
        "confidence": 94,
        "needsReview": false
      },
      {
        "rawText": "231130524 GG GRANOLA BF $3.39",
        "description": "GG GRANOLA",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.39,
        "amount": 3.39,
        "category": "grocery",
        "confidence": 96,
        "needsReview": false
      },
      {
        "rawText": "261040708 HH KINGAR BF $4.29",
        "description": "HH KINGAR",
        "quantity": 1,
        "unit": null,
        "unitPrice": 4.29,
        "amount": 4.29,
        "category": "grocery",
        "confidence": 91,
        "needsReview": false
      },
      {
        "rawText": "071200533 NATURE'S BF $2.99",
        "description": "NATURE'S",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.99,
        "amount": 2.99,
        "category": "grocery",
        "confidence": 96,
        "needsReview": false
      },
      {
        "rawText": "071180218 ANNIES FRT TF $3.39",
        "description": "ANNIES FRT",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.39,
        "amount": 3.39,
        "category": "grocery",
        "confidence": 96,
        "needsReview": false
      }
    ],
    "adjustments": [
      {
        "rawText": "2 @ $1.25 ea",
        "kind": "other",
        "amount": null
      },
      {
        "rawText": "Regular Price $1.69",
        "kind": "other",
        "amount": null
      },
      {
        "rawText": "SUBTOTAL $61.52",
        "kind": "other",
        "amount": 61.52
      },
      {
        "rawText": "B = TN TAX 6.75000 on $58.13 $3.91",
        "kind": "tax",
        "amount": 3.91
      },
      {
        "rawText": "T = TN TAX 9.75000 on $3.39 $0.34",
        "kind": "tax",
        "amount": 0.34
      },
      {
        "rawText": "[PAYMENT REDACTED] $65.77",
        "kind": "payment",
        "amount": 65.77
      },
      {
        "rawText": "[PAYMENT REDACTED] $65.77",
        "kind": "payment",
        "amount": 65.77
      },
      {
        "rawText": "TOTAL SAVINGS THIS TRIP $0.88",
        "kind": "discount",
        "amount": 0.88
      }
    ],
    "warnings": [
      "The first product name appears to read 'MORNIF MEAT' and may be partially unclear.",
      "Payment method text is obscured by redaction; only the amount is readable.",
      "The receipt's printed tax lines total $4.25; subtotal plus tax reconciles to $65.77."
    ],
    "timing": {
      "totalMs": 13246,
      "imagePrepMs": 273,
      "modelMs": 12973,
      "postProcessMs": 0,
      "modelCalls": 1,
      "imageCount": 2,
      "model": "gpt-5.6-luna",
      "reasoningEffort": "low",
      "harness": "isolated-direct-request"
    }
  },
  "rawText": "Memphis East - 901-261-5079\n5959 Poplar Ave\nMemphis, Tennessee 38119-3938\n06/06/2021 08:57 PM\n[barcode]\nGROCERY\n270030028 MORNIF MEAT BF $3.79\n211180116 NASOYA VEGET BF $4.49\n284060377 GG OATMILK BF $3.49\n284000087 PILLSBURY BF $1.89\n284050333 STARBUCKS BF $4.69\n265500028 GG FRUIT BF $3.69\n270140410 GG FRUIT BF $2.49\n284040499 TAZO BF $3.79\n211180091 TOFURKY MEAT BF $2.99\n212141019 ANNIE'S BF $2.79\n212040050 SBR BF $2.29\n212180873 SOUP BF $3.89\n284100452 SILK BF $2.50\n2 @ $1.25 ea\nRegular Price $1.69\n212060196 MT OLIVE PKL BF $1.99\n071090692 BISCOFF8.8OZ BF $2.69\n231130524 GG GRANOLA BF $3.39\n261040708 HH KINGAR BF $4.29\n071200533 NATURE'S BF $2.99\n071180218 ANNIES FRT TF $3.39\nSUBTOTAL $61.52\nB = TN TAX 6.75000 on $58.13 $3.91\nT = TN TAX 9.75000 on $3.39 $0.34\n[PAYMENT REDACTED] $65.77\n[PAYMENT REDACTED] $65.77\nA0000000031010\nAUTH CODE: 035721\nYour Target Circle earnings are in!\nOpen the Target App or visit\nTarget.com/Circle to see your benefits.\n--------------------------------\nTOTAL SAVINGS THIS TRIP\n$0.88\n--------------------------------",
  "rawOutputText": "{\"merchant\":\"Target\",\"date\":\"06/06/2021 08:57 PM\",\"currency\":\"USD\",\"subtotal\":61.52,\"tax\":4.25,\"total\":65.77,\"balance\":65.77,\"ocrText\":\"Memphis East - 901-261-5079\\n5959 Poplar Ave\\nMemphis, Tennessee 38119-3938\\n06/06/2021 08:57 PM\\n[barcode]\\nGROCERY\\n270030028 MORNIF MEAT BF $3.79\\n211180116 NASOYA VEGET BF $4.49\\n284060377 GG OATMILK BF $3.49\\n284000087 PILLSBURY BF $1.89\\n284050333 STARBUCKS BF $4.69\\n265500028 GG FRUIT BF $3.69\\n270140410 GG FRUIT BF $2.49\\n284040499 TAZO BF $3.79\\n211180091 TOFURKY MEAT BF $2.99\\n212141019 ANNIE'S BF $2.79\\n212040050 SBR BF $2.29\\n212180873 SOUP BF $3.89\\n284100452 SILK BF $2.50\\n2 @ $1.25 ea\\nRegular Price $1.69\\n212060196 MT OLIVE PKL BF $1.99\\n071090692 BISCOFF8.8OZ BF $2.69\\n231130524 GG GRANOLA BF $3.39\\n261040708 HH KINGAR BF $4.29\\n071200533 NATURE'S BF $2.99\\n071180218 ANNIES FRT TF $3.39\\nSUBTOTAL $61.52\\nB = TN TAX 6.75000 on $58.13 $3.91\\nT = TN TAX 9.75000 on $3.39 $0.34\\n[PAYMENT REDACTED] $65.77\\n[PAYMENT REDACTED] $65.77\\nA0000000031010\\nAUTH CODE: 035721\\nYour Target Circle earnings are in!\\nOpen the Target App or visit\\nTarget.com/Circle to see your benefits.\\n--------------------------------\\nTOTAL SAVINGS THIS TRIP\\n$0.88\\n--------------------------------\",\"lines\":[{\"rawText\":\"270030028 MORNIF MEAT BF $3.79\",\"description\":\"MORNIF MEAT\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.79,\"amount\":3.79,\"category\":\"grocery\",\"confidence\":88,\"needsReview\":true},{\"rawText\":\"211180116 NASOYA VEGET BF $4.49\",\"description\":\"NASOYA VEGET\",\"quantity\":1,\"unit\":null,\"unitPrice\":4.49,\"amount\":4.49,\"category\":\"grocery\",\"confidence\":96,\"needsReview\":false},{\"rawText\":\"284060377 GG OATMILK BF $3.49\",\"description\":\"GG OATMILK\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.49,\"amount\":3.49,\"category\":\"grocery\",\"confidence\":96,\"needsReview\":false},{\"rawText\":\"284000087 PILLSBURY BF $1.89\",\"description\":\"PILLSBURY\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.89,\"amount\":1.89,\"category\":\"grocery\",\"confidence\":96,\"needsReview\":false},{\"rawText\":\"284050333 STARBUCKS BF $4.69\",\"description\":\"STARBUCKS\",\"quantity\":1,\"unit\":null,\"unitPrice\":4.69,\"amount\":4.69,\"category\":\"grocery\",\"confidence\":96,\"needsReview\":false},{\"rawText\":\"265500028 GG FRUIT BF $3.69\",\"description\":\"GG FRUIT\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.69,\"amount\":3.69,\"category\":\"grocery\",\"confidence\":96,\"needsReview\":false},{\"rawText\":\"270140410 GG FRUIT BF $2.49\",\"description\":\"GG FRUIT\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.49,\"amount\":2.49,\"category\":\"grocery\",\"confidence\":96,\"needsReview\":false},{\"rawText\":\"284040499 TAZO BF $3.79\",\"description\":\"TAZO\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.79,\"amount\":3.79,\"category\":\"grocery\",\"confidence\":96,\"needsReview\":false},{\"rawText\":\"211180091 TOFURKY MEAT BF $2.99\",\"description\":\"TOFURKY MEAT\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.99,\"amount\":2.99,\"category\":\"grocery\",\"confidence\":96,\"needsReview\":false},{\"rawText\":\"212141019 ANNIE'S BF $2.79\",\"description\":\"ANNIE'S\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.79,\"amount\":2.79,\"category\":\"grocery\",\"confidence\":96,\"needsReview\":false},{\"rawText\":\"212040050 SBR BF $2.29\",\"description\":\"SBR\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.29,\"amount\":2.29,\"category\":\"grocery\",\"confidence\":96,\"needsReview\":false},{\"rawText\":\"212180873 SOUP BF $3.89\",\"description\":\"SOUP\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.89,\"amount\":3.89,\"category\":\"grocery\",\"confidence\":96,\"needsReview\":false},{\"rawText\":\"284100452 SILK BF $2.50\",\"description\":\"SILK\",\"quantity\":2,\"unit\":\"ea\",\"unitPrice\":1.25,\"amount\":2.5,\"category\":\"grocery\",\"confidence\":94,\"needsReview\":false},{\"rawText\":\"212060196 MT OLIVE PKL BF $1.99\",\"description\":\"MT OLIVE PKL\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.99,\"amount\":1.99,\"category\":\"grocery\",\"confidence\":96,\"needsReview\":false},{\"rawText\":\"071090692 BISCOFF8.8OZ BF $2.69\",\"description\":\"BISCOFF 8.8 OZ\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.69,\"amount\":2.69,\"category\":\"grocery\",\"confidence\":94,\"needsReview\":false},{\"rawText\":\"231130524 GG GRANOLA BF $3.39\",\"description\":\"GG GRANOLA\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.39,\"amount\":3.39,\"category\":\"grocery\",\"confidence\":96,\"needsReview\":false},{\"rawText\":\"261040708 HH KINGAR BF $4.29\",\"description\":\"HH KINGAR\",\"quantity\":1,\"unit\":null,\"unitPrice\":4.29,\"amount\":4.29,\"category\":\"grocery\",\"confidence\":91,\"needsReview\":false},{\"rawText\":\"071200533 NATURE'S BF $2.99\",\"description\":\"NATURE'S\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.99,\"amount\":2.99,\"category\":\"grocery\",\"confidence\":96,\"needsReview\":false},{\"rawText\":\"071180218 ANNIES FRT TF $3.39\",\"description\":\"ANNIES FRT\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.39,\"amount\":3.39,\"category\":\"grocery\",\"confidence\":96,\"needsReview\":false}],\"adjustments\":[{\"rawText\":\"2 @ $1.25 ea\",\"kind\":\"other\",\"amount\":null},{\"rawText\":\"Regular Price $1.69\",\"kind\":\"other\",\"amount\":null},{\"rawText\":\"SUBTOTAL $61.52\",\"kind\":\"other\",\"amount\":61.52},{\"rawText\":\"B = TN TAX 6.75000 on $58.13 $3.91\",\"kind\":\"tax\",\"amount\":3.91},{\"rawText\":\"T = TN TAX 9.75000 on $3.39 $0.34\",\"kind\":\"tax\",\"amount\":0.34},{\"rawText\":\"[PAYMENT REDACTED] $65.77\",\"kind\":\"payment\",\"amount\":65.77},{\"rawText\":\"[PAYMENT REDACTED] $65.77\",\"kind\":\"payment\",\"amount\":65.77},{\"rawText\":\"TOTAL SAVINGS THIS TRIP $0.88\",\"kind\":\"discount\",\"amount\":0.88}],\"warnings\":[\"The first product name appears to read 'MORNIF MEAT' and may be partially unclear.\",\"Payment method text is obscured by redaction; only the amount is readable.\",\"The receipt's printed tax lines total $4.25; subtotal plus tax reconciles to $65.77.\"]}",
  "error": null,
  "timing": {
    "totalMs": 13246,
    "imagePrepMs": 273,
    "modelMs": 12973,
    "postProcessMs": 0,
    "modelCalls": 1,
    "imageCount": 2,
    "model": "gpt-5.6-luna",
    "reasoningEffort": "low",
    "harness": "isolated-direct-request"
  }
}
```

</details>

<details>
<summary><strong>target-05</strong> — OK</summary>

Fixture image: [target-05.jpeg](../receipts/target-05.jpeg)
Complete JSON: [target-05.json](target-05.json)

```json
{
  "receipt": {
    "merchant": "TARGET",
    "date": "04/27/2019 12:42 PM",
    "currency": "USD",
    "subtotal": 48.75,
    "tax": 1.25,
    "total": 50,
    "balance": 50,
    "ocrText": "TARGET\nEXPECT MORE. PAY LESS.\n[?]\n04/27/2019 12:42 PM EXPIRES 07/26/19\n[BARCODE]\nCLOTHING\n042130186 DNZN CARGO S T $24.99\nGROCERY\n231101523 DUNKINDONUTS FN $18.98\n2 [symbol] $9.49 ea\n284020006 MP 2 PC MILK FN $4.78\n2 [symbol] $2.39 ea\nSUBTOTAL $48.75\nT = CO TAX 5.0000% on $24.99 $1.25\nTOTAL $50.00\n*1767 DEBIT TOTAL PAYMENT $50.00\nAID: A0000000980840\nUS DEBIT\nREC#2-9117-0271-0160-2484-6 VCD#759-281-546",
    "lines": [
      {
        "rawText": "042130186 DNZN CARGO S T $24.99",
        "description": "DNZN CARGO S",
        "quantity": 1,
        "unit": null,
        "unitPrice": 24.99,
        "amount": 24.99,
        "category": "CLOTHING",
        "confidence": 96,
        "needsReview": false
      },
      {
        "rawText": "231101523 DUNKINDONUTS FN $18.98",
        "description": "DUNKINDONUTS",
        "quantity": 2,
        "unit": "ea",
        "unitPrice": 9.49,
        "amount": 18.98,
        "category": "GROCERY",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "284020006 MP 2 PC MILK FN $4.78",
        "description": "MP 2 PC MILK",
        "quantity": 2,
        "unit": "ea",
        "unitPrice": 2.39,
        "amount": 4.78,
        "category": "GROCERY",
        "confidence": 97,
        "needsReview": false
      }
    ],
    "adjustments": [
      {
        "rawText": "T = CO TAX 5.0000% on $24.99 $1.25",
        "kind": "tax",
        "amount": 1.25
      },
      {
        "rawText": "*1767 DEBIT TOTAL PAYMENT $50.00",
        "kind": "payment",
        "amount": 50
      }
    ],
    "warnings": [
      "A redacted or obscured text row appears above the date and is transcribed as [?].",
      "The receipt includes a barcode, which is represented as [BARCODE]."
    ],
    "timing": {
      "totalMs": 6311,
      "imagePrepMs": 195,
      "modelMs": 6116,
      "postProcessMs": 0,
      "modelCalls": 1,
      "imageCount": 2,
      "model": "gpt-5.6-luna",
      "reasoningEffort": "low",
      "harness": "isolated-direct-request"
    }
  },
  "rawText": "TARGET\nEXPECT MORE. PAY LESS.\n[?]\n04/27/2019 12:42 PM EXPIRES 07/26/19\n[BARCODE]\nCLOTHING\n042130186 DNZN CARGO S T $24.99\nGROCERY\n231101523 DUNKINDONUTS FN $18.98\n2 [symbol] $9.49 ea\n284020006 MP 2 PC MILK FN $4.78\n2 [symbol] $2.39 ea\nSUBTOTAL $48.75\nT = CO TAX 5.0000% on $24.99 $1.25\nTOTAL $50.00\n*1767 DEBIT TOTAL PAYMENT $50.00\nAID: A0000000980840\nUS DEBIT\nREC#2-9117-0271-0160-2484-6 VCD#759-281-546",
  "rawOutputText": "{\"merchant\":\"TARGET\",\"date\":\"04/27/2019 12:42 PM\",\"currency\":\"USD\",\"subtotal\":48.75,\"tax\":1.25,\"total\":50.0,\"balance\":50.0,\"ocrText\":\"TARGET\\nEXPECT MORE. PAY LESS.\\n[?]\\n04/27/2019 12:42 PM EXPIRES 07/26/19\\n[BARCODE]\\nCLOTHING\\n042130186 DNZN CARGO S T $24.99\\nGROCERY\\n231101523 DUNKINDONUTS FN $18.98\\n2 [symbol] $9.49 ea\\n284020006 MP 2 PC MILK FN $4.78\\n2 [symbol] $2.39 ea\\nSUBTOTAL $48.75\\nT = CO TAX 5.0000% on $24.99 $1.25\\nTOTAL $50.00\\n*1767 DEBIT TOTAL PAYMENT $50.00\\nAID: A0000000980840\\nUS DEBIT\\nREC#2-9117-0271-0160-2484-6 VCD#759-281-546\",\"lines\":[{\"rawText\":\"042130186 DNZN CARGO S T $24.99\",\"description\":\"DNZN CARGO S\",\"quantity\":1,\"unit\":null,\"unitPrice\":24.99,\"amount\":24.99,\"category\":\"CLOTHING\",\"confidence\":96,\"needsReview\":false},{\"rawText\":\"231101523 DUNKINDONUTS FN $18.98\",\"description\":\"DUNKINDONUTS\",\"quantity\":2,\"unit\":\"ea\",\"unitPrice\":9.49,\"amount\":18.98,\"category\":\"GROCERY\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"284020006 MP 2 PC MILK FN $4.78\",\"description\":\"MP 2 PC MILK\",\"quantity\":2,\"unit\":\"ea\",\"unitPrice\":2.39,\"amount\":4.78,\"category\":\"GROCERY\",\"confidence\":97,\"needsReview\":false}],\"adjustments\":[{\"rawText\":\"T = CO TAX 5.0000% on $24.99 $1.25\",\"kind\":\"tax\",\"amount\":1.25},{\"rawText\":\"*1767 DEBIT TOTAL PAYMENT $50.00\",\"kind\":\"payment\",\"amount\":50.0}],\"warnings\":[\"A redacted or obscured text row appears above the date and is transcribed as [?].\",\"The receipt includes a barcode, which is represented as [BARCODE].\"]}",
  "error": null,
  "timing": {
    "totalMs": 6311,
    "imagePrepMs": 195,
    "modelMs": 6116,
    "postProcessMs": 0,
    "modelCalls": 1,
    "imageCount": 2,
    "model": "gpt-5.6-luna",
    "reasoningEffort": "low",
    "harness": "isolated-direct-request"
  }
}
```

</details>

<details>
<summary><strong>walmart-01</strong> — OK</summary>

Fixture image: [walmart-01.jpg](../receipts/walmart-01.jpg)
Complete JSON: [walmart-01.json](walmart-01.json)

```json
{
  "receipt": {
    "merchant": "Walmart",
    "date": "01/16/24",
    "currency": "USD",
    "subtotal": 19.92,
    "tax": 1.34,
    "total": 21.26,
    "balance": 21.26,
    "ocrText": "Give us feedback @ survey.walmart.com\nThank you! ID #:7TKFMVNJ76V\nWalmart\nWal-Mart\n330-668-1129 Mgr. TAMMY\n3750 W MARKET ST\nFAIRLAWN OH 44333\nST# 01895 OP# 009037 TE# 37 TR# 04015\n# ITEMS SOLD 4\nTC# 7834 3110 0957 9823 6114\nOS IM ORG 6 031200021270 F 4.98 X\nOS IMM 6PK 031200018710 F 4.98 X\nOS IM ORG 6 031200021270 F 4.98 X\nOS IMM 5PK 031200018710 F 4.98 X\nSUBTOTAL 19.92\nTAX1 6.7500 % 1.34\nTOTAL 21.26\nVISA TEND 21.26\nCHANGE DUE 0.00\nVISA CREDIT- 0683 I O APPR#500150\n21.26 TOTAL PURCHASE\nREF # 401700524052\nTRANS ID - 384017007819310\nVALIDATION - 8P3G\nPAYMENT SERVICE - E\nAID A0000000031010\nTC 127AC8DBB86E5F6B\nTERMINAL # SC010598\n*No Signature Required\n01/16/24 19:13:01\nWalmart+\nBecome a member today\nScan for 30-day free trial.",
    "lines": [
      {
        "rawText": "OS IM ORG 6 031200021270 F 4.98 X",
        "description": "OS IM ORG 6",
        "quantity": 1,
        "unit": null,
        "unitPrice": 4.98,
        "amount": 4.98,
        "category": "grocery",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "OS IMM 6PK 031200018710 F 4.98 X",
        "description": "OS IMM 6PK",
        "quantity": 1,
        "unit": null,
        "unitPrice": 4.98,
        "amount": 4.98,
        "category": "grocery",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "OS IM ORG 6 031200021270 F 4.98 X",
        "description": "OS IM ORG 6",
        "quantity": 1,
        "unit": null,
        "unitPrice": 4.98,
        "amount": 4.98,
        "category": "grocery",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "OS IMM 5PK 031200018710 F 4.98 X",
        "description": "OS IMM 5PK",
        "quantity": 1,
        "unit": null,
        "unitPrice": 4.98,
        "amount": 4.98,
        "category": "grocery",
        "confidence": 98,
        "needsReview": false
      }
    ],
    "adjustments": [
      {
        "rawText": "TAX1 6.7500 % 1.34",
        "kind": "tax",
        "amount": 1.34
      },
      {
        "rawText": "VISA TEND 21.26",
        "kind": "payment",
        "amount": 21.26
      },
      {
        "rawText": "CHANGE DUE 0.00",
        "kind": "payment",
        "amount": 0
      }
    ],
    "warnings": [],
    "timing": {
      "totalMs": 7551,
      "imagePrepMs": 285,
      "modelMs": 7266,
      "postProcessMs": 0,
      "modelCalls": 1,
      "imageCount": 2,
      "model": "gpt-5.6-luna",
      "reasoningEffort": "low",
      "harness": "isolated-direct-request"
    }
  },
  "rawText": "Give us feedback @ survey.walmart.com\nThank you! ID #:7TKFMVNJ76V\nWalmart\nWal-Mart\n330-668-1129 Mgr. TAMMY\n3750 W MARKET ST\nFAIRLAWN OH 44333\nST# 01895 OP# 009037 TE# 37 TR# 04015\n# ITEMS SOLD 4\nTC# 7834 3110 0957 9823 6114\nOS IM ORG 6 031200021270 F 4.98 X\nOS IMM 6PK 031200018710 F 4.98 X\nOS IM ORG 6 031200021270 F 4.98 X\nOS IMM 5PK 031200018710 F 4.98 X\nSUBTOTAL 19.92\nTAX1 6.7500 % 1.34\nTOTAL 21.26\nVISA TEND 21.26\nCHANGE DUE 0.00\nVISA CREDIT- 0683 I O APPR#500150\n21.26 TOTAL PURCHASE\nREF # 401700524052\nTRANS ID - 384017007819310\nVALIDATION - 8P3G\nPAYMENT SERVICE - E\nAID A0000000031010\nTC 127AC8DBB86E5F6B\nTERMINAL # SC010598\n*No Signature Required\n01/16/24 19:13:01\nWalmart+\nBecome a member today\nScan for 30-day free trial.",
  "rawOutputText": "{\"merchant\":\"Walmart\",\"date\":\"01/16/24\",\"currency\":\"USD\",\"subtotal\":19.92,\"tax\":1.34,\"total\":21.26,\"balance\":21.26,\"ocrText\":\"Give us feedback @ survey.walmart.com\\nThank you! ID #:7TKFMVNJ76V\\nWalmart\\nWal-Mart\\n330-668-1129 Mgr. TAMMY\\n3750 W MARKET ST\\nFAIRLAWN OH 44333\\nST# 01895 OP# 009037 TE# 37 TR# 04015\\n# ITEMS SOLD 4\\nTC# 7834 3110 0957 9823 6114\\nOS IM ORG 6 031200021270 F 4.98 X\\nOS IMM 6PK 031200018710 F 4.98 X\\nOS IM ORG 6 031200021270 F 4.98 X\\nOS IMM 5PK 031200018710 F 4.98 X\\nSUBTOTAL 19.92\\nTAX1 6.7500 % 1.34\\nTOTAL 21.26\\nVISA TEND 21.26\\nCHANGE DUE 0.00\\nVISA CREDIT- 0683 I O APPR#500150\\n21.26 TOTAL PURCHASE\\nREF # 401700524052\\nTRANS ID - 384017007819310\\nVALIDATION - 8P3G\\nPAYMENT SERVICE - E\\nAID A0000000031010\\nTC 127AC8DBB86E5F6B\\nTERMINAL # SC010598\\n*No Signature Required\\n01/16/24 19:13:01\\nWalmart+\\nBecome a member today\\nScan for 30-day free trial.\",\"lines\":[{\"rawText\":\"OS IM ORG 6 031200021270 F 4.98 X\",\"description\":\"OS IM ORG 6\",\"quantity\":1,\"unit\":null,\"unitPrice\":4.98,\"amount\":4.98,\"category\":\"grocery\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"OS IMM 6PK 031200018710 F 4.98 X\",\"description\":\"OS IMM 6PK\",\"quantity\":1,\"unit\":null,\"unitPrice\":4.98,\"amount\":4.98,\"category\":\"grocery\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"OS IM ORG 6 031200021270 F 4.98 X\",\"description\":\"OS IM ORG 6\",\"quantity\":1,\"unit\":null,\"unitPrice\":4.98,\"amount\":4.98,\"category\":\"grocery\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"OS IMM 5PK 031200018710 F 4.98 X\",\"description\":\"OS IMM 5PK\",\"quantity\":1,\"unit\":null,\"unitPrice\":4.98,\"amount\":4.98,\"category\":\"grocery\",\"confidence\":98,\"needsReview\":false}],\"adjustments\":[{\"rawText\":\"TAX1 6.7500 % 1.34\",\"kind\":\"tax\",\"amount\":1.34},{\"rawText\":\"VISA TEND 21.26\",\"kind\":\"payment\",\"amount\":21.26},{\"rawText\":\"CHANGE DUE 0.00\",\"kind\":\"payment\",\"amount\":0}],\"warnings\":[]}",
  "error": null,
  "timing": {
    "totalMs": 7551,
    "imagePrepMs": 285,
    "modelMs": 7266,
    "postProcessMs": 0,
    "modelCalls": 1,
    "imageCount": 2,
    "model": "gpt-5.6-luna",
    "reasoningEffort": "low",
    "harness": "isolated-direct-request"
  }
}
```

</details>

<details>
<summary><strong>walmart-02</strong> — OK</summary>

Fixture image: [walmart-02.jpg](../receipts/walmart-02.jpg)
Complete JSON: [walmart-02.json](walmart-02.json)

```json
{
  "receipt": {
    "merchant": "Walmart",
    "date": "11/15/11",
    "currency": "USD",
    "subtotal": null,
    "tax": null,
    "total": 7,
    "balance": 7,
    "ocrText": "Walmart\nSave money. Live better.\n(727) 661-0410\nMANG?ER  JAMES SH?RODER\n12.610 US HIGHWAY 19\nHUDSON FL 34667\nREGISTER 24 TRN 00152\nOP# 0000136779\n000200167791\n007533307931\nSUBTOTAL\nTAX 1 7.00\nTOTAL 7.00\nDEBIT  TOTAL\nCHANGE DUE:\nPAY FROM PRIMARY\nPURCHASE:\n****** 0627 S\nACCOUNT # 131900194003\nREF # 0090 APPR CODE: 220940\nNETWORK ID: 1800014.9\nTERMINAL # 1800014.9\n11/15/11 15:15:39\n# ITEMS SOLD 2\nTC# 6973 8081 W761 1114 2016\nSave more time and money! Get our\nmobile app. Text “Walmart” to 6325.\n11/15/11 15:15:41",
    "lines": [
      {
        "rawText": "MANG?ER JAMES SH?RODER",
        "description": "MANG?ER JAMES SH?RODER",
        "quantity": null,
        "unit": null,
        "unitPrice": null,
        "amount": null,
        "category": "footer",
        "confidence": 45,
        "needsReview": true
      },
      {
        "rawText": "12.610 US HIGHWAY 19",
        "description": "12.610 US HIGHWAY 19",
        "quantity": null,
        "unit": null,
        "unitPrice": null,
        "amount": null,
        "category": "footer",
        "confidence": 80,
        "needsReview": true
      },
      {
        "rawText": "HUDSON FL 34667",
        "description": "HUDSON FL 34667",
        "quantity": null,
        "unit": null,
        "unitPrice": null,
        "amount": null,
        "category": "footer",
        "confidence": 95,
        "needsReview": false
      },
      {
        "rawText": "REGISTER 24 TRN 00152",
        "description": "REGISTER 24 TRN 00152",
        "quantity": null,
        "unit": null,
        "unitPrice": null,
        "amount": null,
        "category": "footer",
        "confidence": 92,
        "needsReview": false
      },
      {
        "rawText": "OP# 0000136779",
        "description": "OP# 0000136779",
        "quantity": null,
        "unit": null,
        "unitPrice": null,
        "amount": null,
        "category": "footer",
        "confidence": 90,
        "needsReview": false
      },
      {
        "rawText": "000200167791",
        "description": null,
        "quantity": null,
        "unit": null,
        "unitPrice": null,
        "amount": null,
        "category": "other",
        "confidence": 85,
        "needsReview": true
      },
      {
        "rawText": "007533307931",
        "description": null,
        "quantity": null,
        "unit": null,
        "unitPrice": null,
        "amount": null,
        "category": "other",
        "confidence": 85,
        "needsReview": true
      },
      {
        "rawText": "SUBTOTAL",
        "description": "SUBTOTAL",
        "quantity": null,
        "unit": null,
        "unitPrice": null,
        "amount": null,
        "category": "other",
        "confidence": 70,
        "needsReview": true
      },
      {
        "rawText": "TAX 1 7.00",
        "description": "TAX 1",
        "quantity": null,
        "unit": null,
        "unitPrice": null,
        "amount": 7,
        "category": "tax",
        "confidence": 65,
        "needsReview": true
      },
      {
        "rawText": "TOTAL 7.00",
        "description": "TOTAL",
        "quantity": null,
        "unit": null,
        "unitPrice": null,
        "amount": 7,
        "category": "other",
        "confidence": 95,
        "needsReview": false
      },
      {
        "rawText": "DEBIT TOTAL",
        "description": "DEBIT TOTAL",
        "quantity": null,
        "unit": null,
        "unitPrice": null,
        "amount": null,
        "category": "payment",
        "confidence": 90,
        "needsReview": false
      },
      {
        "rawText": "CHANGE DUE:",
        "description": "CHANGE DUE",
        "quantity": null,
        "unit": null,
        "unitPrice": null,
        "amount": null,
        "category": "payment",
        "confidence": 90,
        "needsReview": false
      },
      {
        "rawText": "PAY FROM PRIMARY",
        "description": "PAY FROM PRIMARY",
        "quantity": null,
        "unit": null,
        "unitPrice": null,
        "amount": null,
        "category": "payment",
        "confidence": 90,
        "needsReview": false
      },
      {
        "rawText": "PURCHASE:",
        "description": "PURCHASE",
        "quantity": null,
        "unit": null,
        "unitPrice": null,
        "amount": null,
        "category": "payment",
        "confidence": 90,
        "needsReview": false
      },
      {
        "rawText": "****** 0627 S",
        "description": "****** 0627 S",
        "quantity": null,
        "unit": null,
        "unitPrice": null,
        "amount": null,
        "category": "payment",
        "confidence": 92,
        "needsReview": false
      },
      {
        "rawText": "ACCOUNT # 131900194003",
        "description": "ACCOUNT # 131900194003",
        "quantity": null,
        "unit": null,
        "unitPrice": null,
        "amount": null,
        "category": "payment",
        "confidence": 95,
        "needsReview": false
      },
      {
        "rawText": "REF # 0090 APPR CODE: 220940",
        "description": "REF # 0090 APPR CODE: 220940",
        "quantity": null,
        "unit": null,
        "unitPrice": null,
        "amount": null,
        "category": "payment",
        "confidence": 95,
        "needsReview": false
      },
      {
        "rawText": "NETWORK ID: 1800014.9",
        "description": "NETWORK ID: 1800014.9",
        "quantity": null,
        "unit": null,
        "unitPrice": null,
        "amount": null,
        "category": "payment",
        "confidence": 80,
        "needsReview": true
      },
      {
        "rawText": "TERMINAL # 1800014.9",
        "description": "TERMINAL # 1800014.9",
        "quantity": null,
        "unit": null,
        "unitPrice": null,
        "amount": null,
        "category": "payment",
        "confidence": 80,
        "needsReview": true
      },
      {
        "rawText": "11/15/11 15:15:39",
        "description": "11/15/11 15:15:39",
        "quantity": null,
        "unit": null,
        "unitPrice": null,
        "amount": null,
        "category": "footer",
        "confidence": 95,
        "needsReview": false
      },
      {
        "rawText": "# ITEMS SOLD 2",
        "description": "ITEMS SOLD",
        "quantity": 2,
        "unit": null,
        "unitPrice": null,
        "amount": null,
        "category": "other",
        "confidence": 95,
        "needsReview": false
      },
      {
        "rawText": "TC# 6973 8081 W761 1114 2016",
        "description": "TC# 6973 8081 W761 1114 2016",
        "quantity": null,
        "unit": null,
        "unitPrice": null,
        "amount": null,
        "category": "footer",
        "confidence": 85,
        "needsReview": true
      },
      {
        "rawText": "Save more time and money! Get our",
        "description": "Save more time and money! Get our",
        "quantity": null,
        "unit": null,
        "unitPrice": null,
        "amount": null,
        "category": "footer",
        "confidence": 95,
        "needsReview": false
      },
      {
        "rawText": "mobile app. Text “Walmart” to 6325.",
        "description": "mobile app. Text “Walmart” to 6325.",
        "quantity": null,
        "unit": null,
        "unitPrice": null,
        "amount": null,
        "category": "footer",
        "confidence": 95,
        "needsReview": false
      },
      {
        "rawText": "11/15/11 15:15:41",
        "description": "11/15/11 15:15:41",
        "quantity": null,
        "unit": null,
        "unitPrice": null,
        "amount": null,
        "category": "footer",
        "confidence": 95,
        "needsReview": false
      }
    ],
    "adjustments": [
      {
        "rawText": "TAX 1 7.00",
        "kind": "tax",
        "amount": 7
      },
      {
        "rawText": "DEBIT TOTAL",
        "kind": "payment",
        "amount": null
      },
      {
        "rawText": "CHANGE DUE:",
        "kind": "payment",
        "amount": null
      }
    ],
    "warnings": [
      "No purchased-product descriptions or item-level prices are legible in the provided images.",
      "The subtotal and tax amount are uncertain; the visible 'TAX 1 7.00' line may be a tax-code or total-related line rather than a $7.00 tax amount.",
      "The receipt states ITEMS SOLD 2, but the two products cannot be read."
    ],
    "timing": {
      "totalMs": 30790,
      "imagePrepMs": 207,
      "modelMs": 30583,
      "postProcessMs": 0,
      "modelCalls": 1,
      "imageCount": 2,
      "model": "gpt-5.6-luna",
      "reasoningEffort": "low",
      "harness": "isolated-direct-request"
    }
  },
  "rawText": "Walmart\nSave money. Live better.\n(727) 661-0410\nMANG?ER  JAMES SH?RODER\n12.610 US HIGHWAY 19\nHUDSON FL 34667\nREGISTER 24 TRN 00152\nOP# 0000136779\n000200167791\n007533307931\nSUBTOTAL\nTAX 1 7.00\nTOTAL 7.00\nDEBIT  TOTAL\nCHANGE DUE:\nPAY FROM PRIMARY\nPURCHASE:\n****** 0627 S\nACCOUNT # 131900194003\nREF # 0090 APPR CODE: 220940\nNETWORK ID: 1800014.9\nTERMINAL # 1800014.9\n11/15/11 15:15:39\n# ITEMS SOLD 2\nTC# 6973 8081 W761 1114 2016\nSave more time and money! Get our\nmobile app. Text “Walmart” to 6325.\n11/15/11 15:15:41",
  "rawOutputText": "{\"merchant\":\"Walmart\",\"date\":\"11/15/11\",\"currency\":\"USD\",\"subtotal\":null,\"tax\":null,\"total\":7.0,\"balance\":7.0,\"ocrText\":\"Walmart\\nSave money. Live better.\\n(727) 661-0410\\nMANG?ER  JAMES SH?RODER\\n12.610 US HIGHWAY 19\\nHUDSON FL 34667\\nREGISTER 24 TRN 00152\\nOP# 0000136779\\n000200167791\\n007533307931\\nSUBTOTAL\\nTAX 1 7.00\\nTOTAL 7.00\\nDEBIT  TOTAL\\nCHANGE DUE:\\nPAY FROM PRIMARY\\nPURCHASE:\\n****** 0627 S\\nACCOUNT # 131900194003\\nREF # 0090 APPR CODE: 220940\\nNETWORK ID: 1800014.9\\nTERMINAL # 1800014.9\\n11/15/11 15:15:39\\n# ITEMS SOLD 2\\nTC# 6973 8081 W761 1114 2016\\nSave more time and money! Get our\\nmobile app. Text “Walmart” to 6325.\\n11/15/11 15:15:41\",\"lines\":[{\"rawText\":\"MANG?ER JAMES SH?RODER\",\"description\":\"MANG?ER JAMES SH?RODER\",\"quantity\":null,\"unit\":null,\"unitPrice\":null,\"amount\":null,\"category\":\"footer\",\"confidence\":45,\"needsReview\":true},{\"rawText\":\"12.610 US HIGHWAY 19\",\"description\":\"12.610 US HIGHWAY 19\",\"quantity\":null,\"unit\":null,\"unitPrice\":null,\"amount\":null,\"category\":\"footer\",\"confidence\":80,\"needsReview\":true},{\"rawText\":\"HUDSON FL 34667\",\"description\":\"HUDSON FL 34667\",\"quantity\":null,\"unit\":null,\"unitPrice\":null,\"amount\":null,\"category\":\"footer\",\"confidence\":95,\"needsReview\":false},{\"rawText\":\"REGISTER 24 TRN 00152\",\"description\":\"REGISTER 24 TRN 00152\",\"quantity\":null,\"unit\":null,\"unitPrice\":null,\"amount\":null,\"category\":\"footer\",\"confidence\":92,\"needsReview\":false},{\"rawText\":\"OP# 0000136779\",\"description\":\"OP# 0000136779\",\"quantity\":null,\"unit\":null,\"unitPrice\":null,\"amount\":null,\"category\":\"footer\",\"confidence\":90,\"needsReview\":false},{\"rawText\":\"000200167791\",\"description\":null,\"quantity\":null,\"unit\":null,\"unitPrice\":null,\"amount\":null,\"category\":\"other\",\"confidence\":85,\"needsReview\":true},{\"rawText\":\"007533307931\",\"description\":null,\"quantity\":null,\"unit\":null,\"unitPrice\":null,\"amount\":null,\"category\":\"other\",\"confidence\":85,\"needsReview\":true},{\"rawText\":\"SUBTOTAL\",\"description\":\"SUBTOTAL\",\"quantity\":null,\"unit\":null,\"unitPrice\":null,\"amount\":null,\"category\":\"other\",\"confidence\":70,\"needsReview\":true},{\"rawText\":\"TAX 1 7.00\",\"description\":\"TAX 1\",\"quantity\":null,\"unit\":null,\"unitPrice\":null,\"amount\":7.0,\"category\":\"tax\",\"confidence\":65,\"needsReview\":true},{\"rawText\":\"TOTAL 7.00\",\"description\":\"TOTAL\",\"quantity\":null,\"unit\":null,\"unitPrice\":null,\"amount\":7.0,\"category\":\"other\",\"confidence\":95,\"needsReview\":false},{\"rawText\":\"DEBIT TOTAL\",\"description\":\"DEBIT TOTAL\",\"quantity\":null,\"unit\":null,\"unitPrice\":null,\"amount\":null,\"category\":\"payment\",\"confidence\":90,\"needsReview\":false},{\"rawText\":\"CHANGE DUE:\",\"description\":\"CHANGE DUE\",\"quantity\":null,\"unit\":null,\"unitPrice\":null,\"amount\":null,\"category\":\"payment\",\"confidence\":90,\"needsReview\":false},{\"rawText\":\"PAY FROM PRIMARY\",\"description\":\"PAY FROM PRIMARY\",\"quantity\":null,\"unit\":null,\"unitPrice\":null,\"amount\":null,\"category\":\"payment\",\"confidence\":90,\"needsReview\":false},{\"rawText\":\"PURCHASE:\",\"description\":\"PURCHASE\",\"quantity\":null,\"unit\":null,\"unitPrice\":null,\"amount\":null,\"category\":\"payment\",\"confidence\":90,\"needsReview\":false},{\"rawText\":\"****** 0627 S\",\"description\":\"****** 0627 S\",\"quantity\":null,\"unit\":null,\"unitPrice\":null,\"amount\":null,\"category\":\"payment\",\"confidence\":92,\"needsReview\":false},{\"rawText\":\"ACCOUNT # 131900194003\",\"description\":\"ACCOUNT # 131900194003\",\"quantity\":null,\"unit\":null,\"unitPrice\":null,\"amount\":null,\"category\":\"payment\",\"confidence\":95,\"needsReview\":false},{\"rawText\":\"REF # 0090 APPR CODE: 220940\",\"description\":\"REF # 0090 APPR CODE: 220940\",\"quantity\":null,\"unit\":null,\"unitPrice\":null,\"amount\":null,\"category\":\"payment\",\"confidence\":95,\"needsReview\":false},{\"rawText\":\"NETWORK ID: 1800014.9\",\"description\":\"NETWORK ID: 1800014.9\",\"quantity\":null,\"unit\":null,\"unitPrice\":null,\"amount\":null,\"category\":\"payment\",\"confidence\":80,\"needsReview\":true},{\"rawText\":\"TERMINAL # 1800014.9\",\"description\":\"TERMINAL # 1800014.9\",\"quantity\":null,\"unit\":null,\"unitPrice\":null,\"amount\":null,\"category\":\"payment\",\"confidence\":80,\"needsReview\":true},{\"rawText\":\"11/15/11 15:15:39\",\"description\":\"11/15/11 15:15:39\",\"quantity\":null,\"unit\":null,\"unitPrice\":null,\"amount\":null,\"category\":\"footer\",\"confidence\":95,\"needsReview\":false},{\"rawText\":\"# ITEMS SOLD 2\",\"description\":\"ITEMS SOLD\",\"quantity\":2,\"unit\":null,\"unitPrice\":null,\"amount\":null,\"category\":\"other\",\"confidence\":95,\"needsReview\":false},{\"rawText\":\"TC# 6973 8081 W761 1114 2016\",\"description\":\"TC# 6973 8081 W761 1114 2016\",\"quantity\":null,\"unit\":null,\"unitPrice\":null,\"amount\":null,\"category\":\"footer\",\"confidence\":85,\"needsReview\":true},{\"rawText\":\"Save more time and money! Get our\",\"description\":\"Save more time and money! Get our\",\"quantity\":null,\"unit\":null,\"unitPrice\":null,\"amount\":null,\"category\":\"footer\",\"confidence\":95,\"needsReview\":false},{\"rawText\":\"mobile app. Text “Walmart” to 6325.\",\"description\":\"mobile app. Text “Walmart” to 6325.\",\"quantity\":null,\"unit\":null,\"unitPrice\":null,\"amount\":null,\"category\":\"footer\",\"confidence\":95,\"needsReview\":false},{\"rawText\":\"11/15/11 15:15:41\",\"description\":\"11/15/11 15:15:41\",\"quantity\":null,\"unit\":null,\"unitPrice\":null,\"amount\":null,\"category\":\"footer\",\"confidence\":95,\"needsReview\":false}],\"adjustments\":[{\"rawText\":\"TAX 1 7.00\",\"kind\":\"tax\",\"amount\":7.0},{\"rawText\":\"DEBIT TOTAL\",\"kind\":\"payment\",\"amount\":null},{\"rawText\":\"CHANGE DUE:\",\"kind\":\"payment\",\"amount\":null}],\"warnings\":[\"No purchased-product descriptions or item-level prices are legible in the provided images.\",\"The subtotal and tax amount are uncertain; the visible 'TAX 1 7.00' line may be a tax-code or total-related line rather than a $7.00 tax amount.\",\"The receipt states ITEMS SOLD 2, but the two products cannot be read.\"]}",
  "error": null,
  "timing": {
    "totalMs": 30790,
    "imagePrepMs": 207,
    "modelMs": 30583,
    "postProcessMs": 0,
    "modelCalls": 1,
    "imageCount": 2,
    "model": "gpt-5.6-luna",
    "reasoningEffort": "low",
    "harness": "isolated-direct-request"
  }
}
```

</details>

<details>
<summary><strong>walmart-03</strong> — OK</summary>

Fixture image: [walmart-03.jpg](../receipts/walmart-03.jpg)
Complete JSON: [walmart-03.json](walmart-03.json)

```json
{
  "receipt": {
    "merchant": "Walmart",
    "date": "2016-06-01",
    "currency": "USD",
    "subtotal": 91.92,
    "tax": 1.1,
    "total": 93.02,
    "balance": 93.02,
    "ocrText": "Walmart\nSave money. Live better.\n( 813 ) 968 - 3544\nMANAGER MARISOL ESCARCEGA\n14941 N DALE MABRY HWY\nTAMPA FL 33618\nST# 01501 OP# 007063 TE# 09 TR# 02100\nDRY PASTA 007680828073 F 1.38 O\nPASTA SAUCE 003620022302 F 2.48 O\nBREAD 007225002371 F 2.53 O\nCHEERIOS 001600048366 F 3.98 O\nGRAPE TOMATO 071631096184 I 2.58 N\nTOMATO SAUCE 004133103961 F 0.38 O\nTOMATO SAUCE 004133103961 F 0.38 O\nLOAF CAKE 007874207238 F 3.97 O\nSUGAR 083870600001 F 2.36 O\nSTRAWBERRIES 071575620002 I 1.98 N\nORG SALAD 068113132898 I 3.46 N\nORG SALAD 068113132898 I 3.46 N\n** VOIDED ENTRY **\nORG SALAD 068113132898 I 3.46-N\nGVFANCYMOZ8Z 007874237425 F 2.22 O\n7 OZ RF PJ 004610000189 F 2.74 O\nSRIRACHA SCE 002446306109 F 2.78 O\nRASRBRY VNGRT 002100065478 F 1.88 O\nBANANAS 000000004011 KI\n2.96 lb @ 1 lb /0.59 1.75 N\nSKIM MILK 007874235189 F 3.29 O\nNUTELLA JAR 000980089500 F 3.48 O\nALMOND MILK 002529300099 F 2.98 O\nCHIPS AHOY 004400002587 F 2.56 N\nWC CHSBGR 008298801006 F 4.24 O\nHONEY BEAR 007874200667 F 3.47 O\nGV LT VN GRK 007874204614 F 2.97 O\nTOMATO SAUCE 004133103961 F 0.38 O\nSCENTED OIL 006233885723 2.74 X\nCOOKIE 007351000863 F 2.54 N\n16Z OM DELI 004740003128 F 5.48 O\nSK TUNA 4PK 008000049565 F 5.74 O\nLADIES SHORT 489396615902 12.86 X\nEGGS 060538871461 F 2.34 O\nSUBTOTAL 91.92\nTAX 1 7.000 % 1.10\nTOTAL 93.02\nDEBIT TEND 93.02\nCHANGE DUE 0.00\nEFT DEBIT 93.02 TOTAL PURCHASE\nPAY FROM PRIMARY\nUS DEBIT **** **** **** [redacted] I O\nREF # 615300736413\nNETWORK ID. 0056 APPR CODE 345903\nUS DEBIT\nAID A0000000980840\nTC ADF562C7C445C647\n*PIN Verified\nTERMINAL # MX684585\n06/01/16 19:37:01\n# ITEMS SOLD 30\nTC# 7156 3655 9354 9331 576",
    "lines": [
      {
        "rawText": "DRY PASTA 007680828073 F 1.38 O",
        "description": "DRY PASTA",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.38,
        "amount": 1.38,
        "category": "grocery",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "PASTA SAUCE 003620022302 F 2.48 O",
        "description": "PASTA SAUCE",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.48,
        "amount": 2.48,
        "category": "grocery",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "BREAD 007225002371 F 2.53 O",
        "description": "BREAD",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.53,
        "amount": 2.53,
        "category": "bakery",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "CHEERIOS 001600048366 F 3.98 O",
        "description": "CHEERIOS",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.98,
        "amount": 3.98,
        "category": "grocery",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "GRAPE TOMATO 071631096184 I 2.58 N",
        "description": "GRAPE TOMATO",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.58,
        "amount": 2.58,
        "category": "produce",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "TOMATO SAUCE 004133103961 F 0.38 O",
        "description": "TOMATO SAUCE",
        "quantity": 1,
        "unit": null,
        "unitPrice": 0.38,
        "amount": 0.38,
        "category": "grocery",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "TOMATO SAUCE 004133103961 F 0.38 O",
        "description": "TOMATO SAUCE",
        "quantity": 1,
        "unit": null,
        "unitPrice": 0.38,
        "amount": 0.38,
        "category": "grocery",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "LOAF CAKE 007874207238 F 3.97 O",
        "description": "LOAF CAKE",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.97,
        "amount": 3.97,
        "category": "bakery",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "SUGAR 083870600001 F 2.36 O",
        "description": "SUGAR",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.36,
        "amount": 2.36,
        "category": "grocery",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "STRAWBERRIES 071575620002 I 1.98 N",
        "description": "STRAWBERRIES",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.98,
        "amount": 1.98,
        "category": "produce",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "ORG SALAD 068113132898 I 3.46 N",
        "description": "ORG SALAD",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.46,
        "amount": 3.46,
        "category": "produce",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "ORG SALAD 068113132898 I 3.46 N",
        "description": "ORG SALAD",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.46,
        "amount": 3.46,
        "category": "produce",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "ORG SALAD 068113132898 I 3.46-N",
        "description": "ORG SALAD",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.46,
        "amount": 3.46,
        "category": "produce",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "GVFANCYMOZ8Z 007874237425 F 2.22 O",
        "description": "GVFANCYMOZ8Z",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.22,
        "amount": 2.22,
        "category": "grocery",
        "confidence": 96,
        "needsReview": false
      },
      {
        "rawText": "7 OZ RF PJ 004610000189 F 2.74 O",
        "description": "7 OZ RF PJ",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.74,
        "amount": 2.74,
        "category": "grocery",
        "confidence": 96,
        "needsReview": false
      },
      {
        "rawText": "SRIRACHA SCE 002446306109 F 2.78 O",
        "description": "SRIRACHA SCE",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.78,
        "amount": 2.78,
        "category": "grocery",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "RASRBRY VNGRT 002100065478 F 1.88 O",
        "description": "RASRBRY VNGRT",
        "quantity": 1,
        "unit": null,
        "unitPrice": 1.88,
        "amount": 1.88,
        "category": "grocery",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "BANANAS 000000004011 KI; 2.96 lb @ 1 lb /0.59 1.75 N",
        "description": "BANANAS",
        "quantity": 2.96,
        "unit": "lb",
        "unitPrice": 0.59,
        "amount": 1.75,
        "category": "produce",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "SKIM MILK 007874235189 F 3.29 O",
        "description": "SKIM MILK",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.29,
        "amount": 3.29,
        "category": "dairy",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "NUTELLA JAR 000980089500 F 3.48 O",
        "description": "NUTELLA JAR",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.48,
        "amount": 3.48,
        "category": "grocery",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "ALMOND MILK 002529300099 F 2.98 O",
        "description": "ALMOND MILK",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.98,
        "amount": 2.98,
        "category": "dairy",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "CHIPS AHOY 004400002587 F 2.56 N",
        "description": "CHIPS AHOY",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.56,
        "amount": 2.56,
        "category": "grocery",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "WC CHSBGR 008298801006 F 4.24 O",
        "description": "WC CHSBGR",
        "quantity": 1,
        "unit": null,
        "unitPrice": 4.24,
        "amount": 4.24,
        "category": "grocery",
        "confidence": 97,
        "needsReview": false
      },
      {
        "rawText": "HONEY BEAR 007874200667 F 3.47 O",
        "description": "HONEY BEAR",
        "quantity": 1,
        "unit": null,
        "unitPrice": 3.47,
        "amount": 3.47,
        "category": "grocery",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "GV LT VN GRK 007874204614 F 2.97 O",
        "description": "GV LT VN GRK",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.97,
        "amount": 2.97,
        "category": "dairy",
        "confidence": 98,
        "needsReview": false
      },
      {
        "rawText": "TOMATO SAUCE 004133103961 F 0.38 O",
        "description": "TOMATO SAUCE",
        "quantity": 1,
        "unit": null,
        "unitPrice": 0.38,
        "amount": 0.38,
        "category": "grocery",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "SCENTED OIL 006233885723 2.74 X",
        "description": "SCENTED OIL",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.74,
        "amount": 2.74,
        "category": "household",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "COOKIE 007351000863 F 2.54 N",
        "description": "COOKIE",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.54,
        "amount": 2.54,
        "category": "grocery",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "16Z OM DELI 004740003128 F 5.48 O",
        "description": "16Z OM DELI",
        "quantity": 1,
        "unit": null,
        "unitPrice": 5.48,
        "amount": 5.48,
        "category": "deli",
        "confidence": 97,
        "needsReview": false
      },
      {
        "rawText": "SK TUNA 4PK 008000049565 F 5.74 O",
        "description": "SK TUNA 4PK",
        "quantity": 1,
        "unit": null,
        "unitPrice": 5.74,
        "amount": 5.74,
        "category": "grocery",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "LADIES SHORT 489396615902 12.86 X",
        "description": "LADIES SHORT",
        "quantity": 1,
        "unit": null,
        "unitPrice": 12.86,
        "amount": 12.86,
        "category": "apparel",
        "confidence": 99,
        "needsReview": false
      },
      {
        "rawText": "EGGS 060538871461 F 2.34 O",
        "description": "EGGS",
        "quantity": 1,
        "unit": null,
        "unitPrice": 2.34,
        "amount": 2.34,
        "category": "dairy",
        "confidence": 99,
        "needsReview": false
      }
    ],
    "adjustments": [
      {
        "rawText": "** VOIDED ENTRY **",
        "kind": "other",
        "amount": null
      },
      {
        "rawText": "ORG SALAD 068113132898 I 3.46-N",
        "kind": "other",
        "amount": 3.46
      },
      {
        "rawText": "TAX 1 7.000 % 1.10",
        "kind": "tax",
        "amount": 1.1
      },
      {
        "rawText": "DEBIT TEND 93.02",
        "kind": "payment",
        "amount": 93.02
      },
      {
        "rawText": "CHANGE DUE 0.00",
        "kind": "payment",
        "amount": 0
      }
    ],
    "warnings": [
      "The receipt contains a voided-entry sequence involving ORG SALAD; item count and line-item interpretation may require review."
    ],
    "timing": {
      "totalMs": 33293,
      "imagePrepMs": 209,
      "modelMs": 33084,
      "postProcessMs": 0,
      "modelCalls": 1,
      "imageCount": 2,
      "model": "gpt-5.6-luna",
      "reasoningEffort": "low",
      "harness": "isolated-direct-request"
    }
  },
  "rawText": "Walmart\nSave money. Live better.\n( 813 ) 968 - 3544\nMANAGER MARISOL ESCARCEGA\n14941 N DALE MABRY HWY\nTAMPA FL 33618\nST# 01501 OP# 007063 TE# 09 TR# 02100\nDRY PASTA 007680828073 F 1.38 O\nPASTA SAUCE 003620022302 F 2.48 O\nBREAD 007225002371 F 2.53 O\nCHEERIOS 001600048366 F 3.98 O\nGRAPE TOMATO 071631096184 I 2.58 N\nTOMATO SAUCE 004133103961 F 0.38 O\nTOMATO SAUCE 004133103961 F 0.38 O\nLOAF CAKE 007874207238 F 3.97 O\nSUGAR 083870600001 F 2.36 O\nSTRAWBERRIES 071575620002 I 1.98 N\nORG SALAD 068113132898 I 3.46 N\nORG SALAD 068113132898 I 3.46 N\n** VOIDED ENTRY **\nORG SALAD 068113132898 I 3.46-N\nGVFANCYMOZ8Z 007874237425 F 2.22 O\n7 OZ RF PJ 004610000189 F 2.74 O\nSRIRACHA SCE 002446306109 F 2.78 O\nRASRBRY VNGRT 002100065478 F 1.88 O\nBANANAS 000000004011 KI\n2.96 lb @ 1 lb /0.59 1.75 N\nSKIM MILK 007874235189 F 3.29 O\nNUTELLA JAR 000980089500 F 3.48 O\nALMOND MILK 002529300099 F 2.98 O\nCHIPS AHOY 004400002587 F 2.56 N\nWC CHSBGR 008298801006 F 4.24 O\nHONEY BEAR 007874200667 F 3.47 O\nGV LT VN GRK 007874204614 F 2.97 O\nTOMATO SAUCE 004133103961 F 0.38 O\nSCENTED OIL 006233885723 2.74 X\nCOOKIE 007351000863 F 2.54 N\n16Z OM DELI 004740003128 F 5.48 O\nSK TUNA 4PK 008000049565 F 5.74 O\nLADIES SHORT 489396615902 12.86 X\nEGGS 060538871461 F 2.34 O\nSUBTOTAL 91.92\nTAX 1 7.000 % 1.10\nTOTAL 93.02\nDEBIT TEND 93.02\nCHANGE DUE 0.00\nEFT DEBIT 93.02 TOTAL PURCHASE\nPAY FROM PRIMARY\nUS DEBIT **** **** **** [redacted] I O\nREF # 615300736413\nNETWORK ID. 0056 APPR CODE 345903\nUS DEBIT\nAID A0000000980840\nTC ADF562C7C445C647\n*PIN Verified\nTERMINAL # MX684585\n06/01/16 19:37:01\n# ITEMS SOLD 30\nTC# 7156 3655 9354 9331 576",
  "rawOutputText": "{\"merchant\":\"Walmart\",\"date\":\"2016-06-01\",\"currency\":\"USD\",\"subtotal\":91.92,\"tax\":1.1,\"total\":93.02,\"balance\":93.02,\"ocrText\":\"Walmart\\nSave money. Live better.\\n( 813 ) 968 - 3544\\nMANAGER MARISOL ESCARCEGA\\n14941 N DALE MABRY HWY\\nTAMPA FL 33618\\nST# 01501 OP# 007063 TE# 09 TR# 02100\\nDRY PASTA 007680828073 F 1.38 O\\nPASTA SAUCE 003620022302 F 2.48 O\\nBREAD 007225002371 F 2.53 O\\nCHEERIOS 001600048366 F 3.98 O\\nGRAPE TOMATO 071631096184 I 2.58 N\\nTOMATO SAUCE 004133103961 F 0.38 O\\nTOMATO SAUCE 004133103961 F 0.38 O\\nLOAF CAKE 007874207238 F 3.97 O\\nSUGAR 083870600001 F 2.36 O\\nSTRAWBERRIES 071575620002 I 1.98 N\\nORG SALAD 068113132898 I 3.46 N\\nORG SALAD 068113132898 I 3.46 N\\n** VOIDED ENTRY **\\nORG SALAD 068113132898 I 3.46-N\\nGVFANCYMOZ8Z 007874237425 F 2.22 O\\n7 OZ RF PJ 004610000189 F 2.74 O\\nSRIRACHA SCE 002446306109 F 2.78 O\\nRASRBRY VNGRT 002100065478 F 1.88 O\\nBANANAS 000000004011 KI\\n2.96 lb @ 1 lb /0.59 1.75 N\\nSKIM MILK 007874235189 F 3.29 O\\nNUTELLA JAR 000980089500 F 3.48 O\\nALMOND MILK 002529300099 F 2.98 O\\nCHIPS AHOY 004400002587 F 2.56 N\\nWC CHSBGR 008298801006 F 4.24 O\\nHONEY BEAR 007874200667 F 3.47 O\\nGV LT VN GRK 007874204614 F 2.97 O\\nTOMATO SAUCE 004133103961 F 0.38 O\\nSCENTED OIL 006233885723 2.74 X\\nCOOKIE 007351000863 F 2.54 N\\n16Z OM DELI 004740003128 F 5.48 O\\nSK TUNA 4PK 008000049565 F 5.74 O\\nLADIES SHORT 489396615902 12.86 X\\nEGGS 060538871461 F 2.34 O\\nSUBTOTAL 91.92\\nTAX 1 7.000 % 1.10\\nTOTAL 93.02\\nDEBIT TEND 93.02\\nCHANGE DUE 0.00\\nEFT DEBIT 93.02 TOTAL PURCHASE\\nPAY FROM PRIMARY\\nUS DEBIT **** **** **** [redacted] I O\\nREF # 615300736413\\nNETWORK ID. 0056 APPR CODE 345903\\nUS DEBIT\\nAID A0000000980840\\nTC ADF562C7C445C647\\n*PIN Verified\\nTERMINAL # MX684585\\n06/01/16 19:37:01\\n# ITEMS SOLD 30\\nTC# 7156 3655 9354 9331 576\",\"lines\":[{\"rawText\":\"DRY PASTA 007680828073 F 1.38 O\",\"description\":\"DRY PASTA\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.38,\"amount\":1.38,\"category\":\"grocery\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"PASTA SAUCE 003620022302 F 2.48 O\",\"description\":\"PASTA SAUCE\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.48,\"amount\":2.48,\"category\":\"grocery\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"BREAD 007225002371 F 2.53 O\",\"description\":\"BREAD\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.53,\"amount\":2.53,\"category\":\"bakery\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"CHEERIOS 001600048366 F 3.98 O\",\"description\":\"CHEERIOS\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.98,\"amount\":3.98,\"category\":\"grocery\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"GRAPE TOMATO 071631096184 I 2.58 N\",\"description\":\"GRAPE TOMATO\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.58,\"amount\":2.58,\"category\":\"produce\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"TOMATO SAUCE 004133103961 F 0.38 O\",\"description\":\"TOMATO SAUCE\",\"quantity\":1,\"unit\":null,\"unitPrice\":0.38,\"amount\":0.38,\"category\":\"grocery\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"TOMATO SAUCE 004133103961 F 0.38 O\",\"description\":\"TOMATO SAUCE\",\"quantity\":1,\"unit\":null,\"unitPrice\":0.38,\"amount\":0.38,\"category\":\"grocery\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"LOAF CAKE 007874207238 F 3.97 O\",\"description\":\"LOAF CAKE\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.97,\"amount\":3.97,\"category\":\"bakery\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"SUGAR 083870600001 F 2.36 O\",\"description\":\"SUGAR\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.36,\"amount\":2.36,\"category\":\"grocery\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"STRAWBERRIES 071575620002 I 1.98 N\",\"description\":\"STRAWBERRIES\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.98,\"amount\":1.98,\"category\":\"produce\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"ORG SALAD 068113132898 I 3.46 N\",\"description\":\"ORG SALAD\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.46,\"amount\":3.46,\"category\":\"produce\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"ORG SALAD 068113132898 I 3.46 N\",\"description\":\"ORG SALAD\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.46,\"amount\":3.46,\"category\":\"produce\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"ORG SALAD 068113132898 I 3.46-N\",\"description\":\"ORG SALAD\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.46,\"amount\":3.46,\"category\":\"produce\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"GVFANCYMOZ8Z 007874237425 F 2.22 O\",\"description\":\"GVFANCYMOZ8Z\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.22,\"amount\":2.22,\"category\":\"grocery\",\"confidence\":96,\"needsReview\":false},{\"rawText\":\"7 OZ RF PJ 004610000189 F 2.74 O\",\"description\":\"7 OZ RF PJ\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.74,\"amount\":2.74,\"category\":\"grocery\",\"confidence\":96,\"needsReview\":false},{\"rawText\":\"SRIRACHA SCE 002446306109 F 2.78 O\",\"description\":\"SRIRACHA SCE\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.78,\"amount\":2.78,\"category\":\"grocery\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"RASRBRY VNGRT 002100065478 F 1.88 O\",\"description\":\"RASRBRY VNGRT\",\"quantity\":1,\"unit\":null,\"unitPrice\":1.88,\"amount\":1.88,\"category\":\"grocery\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"BANANAS 000000004011 KI; 2.96 lb @ 1 lb /0.59 1.75 N\",\"description\":\"BANANAS\",\"quantity\":2.96,\"unit\":\"lb\",\"unitPrice\":0.59,\"amount\":1.75,\"category\":\"produce\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"SKIM MILK 007874235189 F 3.29 O\",\"description\":\"SKIM MILK\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.29,\"amount\":3.29,\"category\":\"dairy\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"NUTELLA JAR 000980089500 F 3.48 O\",\"description\":\"NUTELLA JAR\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.48,\"amount\":3.48,\"category\":\"grocery\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"ALMOND MILK 002529300099 F 2.98 O\",\"description\":\"ALMOND MILK\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.98,\"amount\":2.98,\"category\":\"dairy\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"CHIPS AHOY 004400002587 F 2.56 N\",\"description\":\"CHIPS AHOY\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.56,\"amount\":2.56,\"category\":\"grocery\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"WC CHSBGR 008298801006 F 4.24 O\",\"description\":\"WC CHSBGR\",\"quantity\":1,\"unit\":null,\"unitPrice\":4.24,\"amount\":4.24,\"category\":\"grocery\",\"confidence\":97,\"needsReview\":false},{\"rawText\":\"HONEY BEAR 007874200667 F 3.47 O\",\"description\":\"HONEY BEAR\",\"quantity\":1,\"unit\":null,\"unitPrice\":3.47,\"amount\":3.47,\"category\":\"grocery\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"GV LT VN GRK 007874204614 F 2.97 O\",\"description\":\"GV LT VN GRK\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.97,\"amount\":2.97,\"category\":\"dairy\",\"confidence\":98,\"needsReview\":false},{\"rawText\":\"TOMATO SAUCE 004133103961 F 0.38 O\",\"description\":\"TOMATO SAUCE\",\"quantity\":1,\"unit\":null,\"unitPrice\":0.38,\"amount\":0.38,\"category\":\"grocery\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"SCENTED OIL 006233885723 2.74 X\",\"description\":\"SCENTED OIL\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.74,\"amount\":2.74,\"category\":\"household\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"COOKIE 007351000863 F 2.54 N\",\"description\":\"COOKIE\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.54,\"amount\":2.54,\"category\":\"grocery\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"16Z OM DELI 004740003128 F 5.48 O\",\"description\":\"16Z OM DELI\",\"quantity\":1,\"unit\":null,\"unitPrice\":5.48,\"amount\":5.48,\"category\":\"deli\",\"confidence\":97,\"needsReview\":false},{\"rawText\":\"SK TUNA 4PK 008000049565 F 5.74 O\",\"description\":\"SK TUNA 4PK\",\"quantity\":1,\"unit\":null,\"unitPrice\":5.74,\"amount\":5.74,\"category\":\"grocery\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"LADIES SHORT 489396615902 12.86 X\",\"description\":\"LADIES SHORT\",\"quantity\":1,\"unit\":null,\"unitPrice\":12.86,\"amount\":12.86,\"category\":\"apparel\",\"confidence\":99,\"needsReview\":false},{\"rawText\":\"EGGS 060538871461 F 2.34 O\",\"description\":\"EGGS\",\"quantity\":1,\"unit\":null,\"unitPrice\":2.34,\"amount\":2.34,\"category\":\"dairy\",\"confidence\":99,\"needsReview\":false}],\"adjustments\":[{\"rawText\":\"** VOIDED ENTRY **\",\"kind\":\"other\",\"amount\":null},{\"rawText\":\"ORG SALAD 068113132898 I 3.46-N\",\"kind\":\"other\",\"amount\":3.46},{\"rawText\":\"TAX 1 7.000 % 1.10\",\"kind\":\"tax\",\"amount\":1.1},{\"rawText\":\"DEBIT TEND 93.02\",\"kind\":\"payment\",\"amount\":93.02},{\"rawText\":\"CHANGE DUE 0.00\",\"kind\":\"payment\",\"amount\":0}],\"warnings\":[\"The receipt contains a voided-entry sequence involving ORG SALAD; item count and line-item interpretation may require review.\"]}",
  "error": null,
  "timing": {
    "totalMs": 33293,
    "imagePrepMs": 209,
    "modelMs": 33084,
    "postProcessMs": 0,
    "modelCalls": 1,
    "imageCount": 2,
    "model": "gpt-5.6-luna",
    "reasoningEffort": "low",
    "harness": "isolated-direct-request"
  }
}
```

</details>

<details>
<summary><strong>walmart-04</strong> — OK</summary>

Fixture image: [walmart-04.jpg](../receipts/walmart-04.jpg)
Complete JSON: [walmart-04.json](walmart-04.json)

```json
{
  "receipt": {
    "merchant": "Walmart",
    "date": null,
    "currency": "USD",
    "subtotal": 26.87,
    "tax": 0.61,
    "total": 28.48,
    "balance": 28.48,
    "ocrText": "See back of receipt for your chance\nto win $1000 ID #:7P8SR81000J2\nWalmart\nSave money. Live better.\n208-373-7908 Mgr:JAMES\n4051 E FAIRVIEW AVE\nMERIDIAN ID 83642\nST# 02862 OP# 005521 TE# 11 TR# 09649\nHBO ALM 23 088491200681 F 3.90 T\nLNF YOGURT 003663203765 F 3.36 T\nMUSHROOMS 067828699459 F 1.88 X\nGV OATMEAL 007874237105 F 2.33 T\nFRENCH BREAD 020098506100 F 1.00 T\nRANCH DRSNG 004132100661 F 2.64 T\nROMAINE HRTS 003338365162 F 2.78 X\nBULK LEMONS 000000004598KF\n2 AT 1 FOR 0.44 0.88 X\nGREEN ONIONS 00000000406BKF 0.78 X\nBELL PEPPER 000000004065KF 0.76 X\nRED BELL 000000004688KF 1.38 X\nGV LEMON 75 007874234447 3.12 X\nPINEAPPLE 000000004029KF 1.98 X\nSUBTOTAL 26.87\nTAX 0.61\nTOTAL 28.48\nAMEX TEND 28.48\nAMERICAN EXPRESS *** **** **** 1 0\nAPPROVAL # 811776\nREF # 015300869203\nTRANS ID 001312992315482\nAID A000000025010801\nAAG 6D938BB732C0BE9C\nTERMINAL # SC011323\nCHANGE DUE 0.00\n# ITEMS SOLD 14\nTCH 6102 0359 2620 4893 2088",
    "lines": [
      {
        "rawText": "HBO ALM 23 088491200681 F 3.90 T",
        "description": "HBO ALM 23",
        "quantity": null,
        "unit": null,
        "unitPrice": 3.9,
        "amount": 3.9,
        "category": "grocery",
        "confidence": 91,
        "needsReview": false
      },
      {
        "rawText": "LNF YOGURT 003663203765 F 3.36 T",
        "description": "LNF YOGURT",
        "quantity": null,
        "unit": null,
        "unitPrice": 3.36,
        "amount": 3.36,
        "category": "grocery",
        "confidence": 96,
        "needsReview": false
      },
      {
        "rawText": "MUSHROOMS 067828699459 F 1.88 X",
        "description": "MUSHROOMS",
        "quantity": null,
        "unit": null,
        "unitPrice": 1.88,
        "amount": 1.88,
        "category": "produce",
        "confidence": 96,
        "needsReview": false
      },
      {
        "rawText": "GV OATMEAL 007874237105 F 2.33 T",
        "description": "GV OATMEAL",
        "quantity": null,
        "unit": null,
        "unitPrice": 2.33,
        "amount": 2.33,
        "category": "grocery",
        "confidence": 96,
        "needsReview": false
      },
      {
        "rawText": "FRENCH BREAD 020098506100 F 1.00 T",
        "description": "FRENCH BREAD",
        "quantity": null,
        "unit": null,
        "unitPrice": 1,
        "amount": 1,
        "category": "bakery",
        "confidence": 97,
        "needsReview": false
      },
      {
        "rawText": "RANCH DRSNG 004132100661 F 2.64 T",
        "description": "RANCH DRSNG",
        "quantity": null,
        "unit": null,
        "unitPrice": 2.64,
        "amount": 2.64,
        "category": "grocery",
        "confidence": 96,
        "needsReview": false
      },
      {
        "rawText": "ROMAINE HRTS 003338365162 F 2.78 X",
        "description": "ROMAINE HRTS",
        "quantity": null,
        "unit": null,
        "unitPrice": 2.78,
        "amount": 2.78,
        "category": "produce",
        "confidence": 96,
        "needsReview": false
      },
      {
        "rawText": "BULK LEMONS 000000004598KF / 2 AT 1 FOR 0.44 0.88 X",
        "description": "BULK LEMONS",
        "quantity": 2,
        "unit": null,
        "unitPrice": 0.44,
        "amount": 0.88,
        "category": "produce",
        "confidence": 91,
        "needsReview": false
      },
      {
        "rawText": "GREEN ONIONS 00000000406BKF 0.78 X",
        "description": "GREEN ONIONS",
        "quantity": null,
        "unit": null,
        "unitPrice": 0.78,
        "amount": 0.78,
        "category": "produce",
        "confidence": 93,
        "needsReview": false
      },
      {
        "rawText": "BELL PEPPER 000000004065KF 0.76 X",
        "description": "BELL PEPPER",
        "quantity": null,
        "unit": null,
        "unitPrice": 0.76,
        "amount": 0.76,
        "category": "produce",
        "confidence": 93,
        "needsReview": false
      },
      {
        "rawText": "RED BELL 000000004688KF 1.38 X",
        "description": "RED BELL",
        "quantity": null,
        "unit": null,
        "unitPrice": 1.38,
        "amount": 1.38,
        "category": "produce",
        "confidence": 94,
        "needsReview": false
      },
      {
        "rawText": "GV LEMON 75 007874234447 3.12 X",
        "description": "GV LEMON 75",
        "quantity": null,
        "unit": null,
        "unitPrice": 3.12,
        "amount": 3.12,
        "category": "produce",
        "confidence": 92,
        "needsReview": false
      },
      {
        "rawText": "PINEAPPLE 000000004029KF 1.98 X",
        "description": "PINEAPPLE",
        "quantity": null,
        "unit": null,
        "unitPrice": 1.98,
        "amount": 1.98,
        "category": "produce",
        "confidence": 94,
        "needsReview": false
      }
    ],
    "adjustments": [
      {
        "rawText": "TAX 0.61",
        "kind": "tax",
        "amount": 0.61
      },
      {
        "rawText": "AMEX TEND 28.48",
        "kind": "payment",
        "amount": 28.48
      },
      {
        "rawText": "CHANGE DUE 0.00",
        "kind": "payment",
        "amount": 0
      }
    ],
    "warnings": [
      "The printed subtotal, tax, and total do not reconcile arithmetically: 26.87 + 0.61 does not equal 28.48.",
      "The receipt does not show a purchase date."
    ],
    "timing": {
      "totalMs": 41148,
      "imagePrepMs": 190,
      "modelMs": 40958,
      "postProcessMs": 0,
      "modelCalls": 1,
      "imageCount": 2,
      "model": "gpt-5.6-luna",
      "reasoningEffort": "low",
      "harness": "isolated-direct-request"
    }
  },
  "rawText": "See back of receipt for your chance\nto win $1000 ID #:7P8SR81000J2\nWalmart\nSave money. Live better.\n208-373-7908 Mgr:JAMES\n4051 E FAIRVIEW AVE\nMERIDIAN ID 83642\nST# 02862 OP# 005521 TE# 11 TR# 09649\nHBO ALM 23 088491200681 F 3.90 T\nLNF YOGURT 003663203765 F 3.36 T\nMUSHROOMS 067828699459 F 1.88 X\nGV OATMEAL 007874237105 F 2.33 T\nFRENCH BREAD 020098506100 F 1.00 T\nRANCH DRSNG 004132100661 F 2.64 T\nROMAINE HRTS 003338365162 F 2.78 X\nBULK LEMONS 000000004598KF\n2 AT 1 FOR 0.44 0.88 X\nGREEN ONIONS 00000000406BKF 0.78 X\nBELL PEPPER 000000004065KF 0.76 X\nRED BELL 000000004688KF 1.38 X\nGV LEMON 75 007874234447 3.12 X\nPINEAPPLE 000000004029KF 1.98 X\nSUBTOTAL 26.87\nTAX 0.61\nTOTAL 28.48\nAMEX TEND 28.48\nAMERICAN EXPRESS *** **** **** 1 0\nAPPROVAL # 811776\nREF # 015300869203\nTRANS ID 001312992315482\nAID A000000025010801\nAAG 6D938BB732C0BE9C\nTERMINAL # SC011323\nCHANGE DUE 0.00\n# ITEMS SOLD 14\nTCH 6102 0359 2620 4893 2088",
  "rawOutputText": "{\"merchant\":\"Walmart\",\"date\":null,\"currency\":\"USD\",\"subtotal\":26.87,\"tax\":0.61,\"total\":28.48,\"balance\":28.48,\"ocrText\":\"See back of receipt for your chance\\nto win $1000 ID #:7P8SR81000J2\\nWalmart\\nSave money. Live better.\\n208-373-7908 Mgr:JAMES\\n4051 E FAIRVIEW AVE\\nMERIDIAN ID 83642\\nST# 02862 OP# 005521 TE# 11 TR# 09649\\nHBO ALM 23 088491200681 F 3.90 T\\nLNF YOGURT 003663203765 F 3.36 T\\nMUSHROOMS 067828699459 F 1.88 X\\nGV OATMEAL 007874237105 F 2.33 T\\nFRENCH BREAD 020098506100 F 1.00 T\\nRANCH DRSNG 004132100661 F 2.64 T\\nROMAINE HRTS 003338365162 F 2.78 X\\nBULK LEMONS 000000004598KF\\n2 AT 1 FOR 0.44 0.88 X\\nGREEN ONIONS 00000000406BKF 0.78 X\\nBELL PEPPER 000000004065KF 0.76 X\\nRED BELL 000000004688KF 1.38 X\\nGV LEMON 75 007874234447 3.12 X\\nPINEAPPLE 000000004029KF 1.98 X\\nSUBTOTAL 26.87\\nTAX 0.61\\nTOTAL 28.48\\nAMEX TEND 28.48\\nAMERICAN EXPRESS *** **** **** 1 0\\nAPPROVAL # 811776\\nREF # 015300869203\\nTRANS ID 001312992315482\\nAID A000000025010801\\nAAG 6D938BB732C0BE9C\\nTERMINAL # SC011323\\nCHANGE DUE 0.00\\n# ITEMS SOLD 14\\nTCH 6102 0359 2620 4893 2088\",\"lines\":[{\"rawText\":\"HBO ALM 23 088491200681 F 3.90 T\",\"description\":\"HBO ALM 23\",\"quantity\":null,\"unit\":null,\"unitPrice\":3.9,\"amount\":3.9,\"category\":\"grocery\",\"confidence\":91,\"needsReview\":false},{\"rawText\":\"LNF YOGURT 003663203765 F 3.36 T\",\"description\":\"LNF YOGURT\",\"quantity\":null,\"unit\":null,\"unitPrice\":3.36,\"amount\":3.36,\"category\":\"grocery\",\"confidence\":96,\"needsReview\":false},{\"rawText\":\"MUSHROOMS 067828699459 F 1.88 X\",\"description\":\"MUSHROOMS\",\"quantity\":null,\"unit\":null,\"unitPrice\":1.88,\"amount\":1.88,\"category\":\"produce\",\"confidence\":96,\"needsReview\":false},{\"rawText\":\"GV OATMEAL 007874237105 F 2.33 T\",\"description\":\"GV OATMEAL\",\"quantity\":null,\"unit\":null,\"unitPrice\":2.33,\"amount\":2.33,\"category\":\"grocery\",\"confidence\":96,\"needsReview\":false},{\"rawText\":\"FRENCH BREAD 020098506100 F 1.00 T\",\"description\":\"FRENCH BREAD\",\"quantity\":null,\"unit\":null,\"unitPrice\":1,\"amount\":1,\"category\":\"bakery\",\"confidence\":97,\"needsReview\":false},{\"rawText\":\"RANCH DRSNG 004132100661 F 2.64 T\",\"description\":\"RANCH DRSNG\",\"quantity\":null,\"unit\":null,\"unitPrice\":2.64,\"amount\":2.64,\"category\":\"grocery\",\"confidence\":96,\"needsReview\":false},{\"rawText\":\"ROMAINE HRTS 003338365162 F 2.78 X\",\"description\":\"ROMAINE HRTS\",\"quantity\":null,\"unit\":null,\"unitPrice\":2.78,\"amount\":2.78,\"category\":\"produce\",\"confidence\":96,\"needsReview\":false},{\"rawText\":\"BULK LEMONS 000000004598KF / 2 AT 1 FOR 0.44 0.88 X\",\"description\":\"BULK LEMONS\",\"quantity\":2,\"unit\":null,\"unitPrice\":0.44,\"amount\":0.88,\"category\":\"produce\",\"confidence\":91,\"needsReview\":false},{\"rawText\":\"GREEN ONIONS 00000000406BKF 0.78 X\",\"description\":\"GREEN ONIONS\",\"quantity\":null,\"unit\":null,\"unitPrice\":0.78,\"amount\":0.78,\"category\":\"produce\",\"confidence\":93,\"needsReview\":false},{\"rawText\":\"BELL PEPPER 000000004065KF 0.76 X\",\"description\":\"BELL PEPPER\",\"quantity\":null,\"unit\":null,\"unitPrice\":0.76,\"amount\":0.76,\"category\":\"produce\",\"confidence\":93,\"needsReview\":false},{\"rawText\":\"RED BELL 000000004688KF 1.38 X\",\"description\":\"RED BELL\",\"quantity\":null,\"unit\":null,\"unitPrice\":1.38,\"amount\":1.38,\"category\":\"produce\",\"confidence\":94,\"needsReview\":false},{\"rawText\":\"GV LEMON 75 007874234447 3.12 X\",\"description\":\"GV LEMON 75\",\"quantity\":null,\"unit\":null,\"unitPrice\":3.12,\"amount\":3.12,\"category\":\"produce\",\"confidence\":92,\"needsReview\":false},{\"rawText\":\"PINEAPPLE 000000004029KF 1.98 X\",\"description\":\"PINEAPPLE\",\"quantity\":null,\"unit\":null,\"unitPrice\":1.98,\"amount\":1.98,\"category\":\"produce\",\"confidence\":94,\"needsReview\":false}],\"adjustments\":[{\"rawText\":\"TAX 0.61\",\"kind\":\"tax\",\"amount\":0.61},{\"rawText\":\"AMEX TEND 28.48\",\"kind\":\"payment\",\"amount\":28.48},{\"rawText\":\"CHANGE DUE 0.00\",\"kind\":\"payment\",\"amount\":0}],\"warnings\":[\"The printed subtotal, tax, and total do not reconcile arithmetically: 26.87 + 0.61 does not equal 28.48.\",\"The receipt does not show a purchase date.\"]}",
  "error": null,
  "timing": {
    "totalMs": 41148,
    "imagePrepMs": 190,
    "modelMs": 40958,
    "postProcessMs": 0,
    "modelCalls": 1,
    "imageCount": 2,
    "model": "gpt-5.6-luna",
    "reasoningEffort": "low",
    "harness": "isolated-direct-request"
  }
}
```

</details>

<details>
<summary><strong>walmart-05</strong> — OK</summary>

Fixture image: [walmart-05.jpeg](../receipts/walmart-05.jpeg)
Complete JSON: [walmart-05.json](walmart-05.json)

```json
{
  "receipt": {
    "merchant": "Walmart",
    "date": "02/02/22",
    "currency": "USD",
    "subtotal": 49.04,
    "tax": null,
    "total": 49.04,
    "balance": 49.04,
    "ocrText": "Give us feedback @ survey.walmart.com\nThank you! ID # 7RDLFKV1D2Y\nWalmart\n716-646-0682 Mar. KALI\n5360 SOUTHWESTERN BLVD\nHAMBURG NY 14075\nST# 02405 OP# 009050 TE# 50 TR# 02960\nS/M 02405 OP# 009050 TE# 50 TR# 02960\nEO NICO LOZ 068113114797 32.98 N\nSONOMA PEPP 068041500999 6.88 O\nUDIS GLUTEN 069899781033 F 9.18 O\nSUBTOTAL 49.04\nTOTAL 49.04\nDEBIT TEND 49.04\nCHANGE DUE 0.00\nEFT DEBIT PAY FROM PRIMARY\n49.04 TOTAL PURCHASE\nDebit **** **** **** 8240 I O\nREF # 203300709814\nNETWORK ID. 0069 APPR CODE 451538\nDebit\nAID A0000000042203\nAAC 650AEFC8B871ABC\nTERMINAL # SC011046\n02/02/22 18:43:02\n# ITEMS SOLD 3\nTC# 1302 9164 0550 3444 063\n[barcode]\nWalmart\nGive them the gift of membership\nScan to gift today\n02/02/22 18:43:08",
    "lines": [
      {
        "rawText": "EO NICO LOZ 068113114797 32.98 N",
        "description": "EO NICO LOZ",
        "quantity": 1,
        "unit": null,
        "unitPrice": 32.98,
        "amount": 32.98,
        "category": "grocery",
        "confidence": 82,
        "needsReview": true
      },
      {
        "rawText": "SONOMA PEPP 068041500999 6.88 O",
        "description": "SONOMA PEPP",
        "quantity": 1,
        "unit": null,
        "unitPrice": 6.88,
        "amount": 6.88,
        "category": "grocery",
        "confidence": 93,
        "needsReview": false
      },
      {
        "rawText": "UDIS GLUTEN 069899781033 F 9.18 O",
        "description": "UDIS GLUTEN",
        "quantity": 1,
        "unit": null,
        "unitPrice": 9.18,
        "amount": 9.18,
        "category": "grocery",
        "confidence": 91,
        "needsReview": false
      }
    ],
    "adjustments": [
      {
        "rawText": "SUBTOTAL 49.04",
        "kind": "other",
        "amount": 49.04
      },
      {
        "rawText": "TOTAL 49.04",
        "kind": "other",
        "amount": 49.04
      },
      {
        "rawText": "DEBIT TEND 49.04",
        "kind": "payment",
        "amount": 49.04
      },
      {
        "rawText": "CHANGE DUE 0.00",
        "kind": "payment",
        "amount": 0
      },
      {
        "rawText": "EFT DEBIT PAY FROM PRIMARY",
        "kind": "payment",
        "amount": null
      },
      {
        "rawText": "49.04 TOTAL PURCHASE",
        "kind": "payment",
        "amount": 49.04
      }
    ],
    "warnings": [
      "The first product description is partially abbreviated/uncertain and may read differently.",
      "No separate tax line is visible.",
      "The receipt includes a barcode and QR code whose encoded contents are not transcribed."
    ],
    "timing": {
      "totalMs": 6552,
      "imagePrepMs": 195,
      "modelMs": 6357,
      "postProcessMs": 0,
      "modelCalls": 1,
      "imageCount": 2,
      "model": "gpt-5.6-luna",
      "reasoningEffort": "low",
      "harness": "isolated-direct-request"
    }
  },
  "rawText": "Give us feedback @ survey.walmart.com\nThank you! ID # 7RDLFKV1D2Y\nWalmart\n716-646-0682 Mar. KALI\n5360 SOUTHWESTERN BLVD\nHAMBURG NY 14075\nST# 02405 OP# 009050 TE# 50 TR# 02960\nS/M 02405 OP# 009050 TE# 50 TR# 02960\nEO NICO LOZ 068113114797 32.98 N\nSONOMA PEPP 068041500999 6.88 O\nUDIS GLUTEN 069899781033 F 9.18 O\nSUBTOTAL 49.04\nTOTAL 49.04\nDEBIT TEND 49.04\nCHANGE DUE 0.00\nEFT DEBIT PAY FROM PRIMARY\n49.04 TOTAL PURCHASE\nDebit **** **** **** 8240 I O\nREF # 203300709814\nNETWORK ID. 0069 APPR CODE 451538\nDebit\nAID A0000000042203\nAAC 650AEFC8B871ABC\nTERMINAL # SC011046\n02/02/22 18:43:02\n# ITEMS SOLD 3\nTC# 1302 9164 0550 3444 063\n[barcode]\nWalmart\nGive them the gift of membership\nScan to gift today\n02/02/22 18:43:08",
  "rawOutputText": "{\"merchant\":\"Walmart\",\"date\":\"02/02/22\",\"currency\":\"USD\",\"subtotal\":49.04,\"tax\":null,\"total\":49.04,\"balance\":49.04,\"ocrText\":\"Give us feedback @ survey.walmart.com\\nThank you! ID # 7RDLFKV1D2Y\\nWalmart\\n716-646-0682 Mar. KALI\\n5360 SOUTHWESTERN BLVD\\nHAMBURG NY 14075\\nST# 02405 OP# 009050 TE# 50 TR# 02960\\nS/M 02405 OP# 009050 TE# 50 TR# 02960\\nEO NICO LOZ 068113114797 32.98 N\\nSONOMA PEPP 068041500999 6.88 O\\nUDIS GLUTEN 069899781033 F 9.18 O\\nSUBTOTAL 49.04\\nTOTAL 49.04\\nDEBIT TEND 49.04\\nCHANGE DUE 0.00\\nEFT DEBIT PAY FROM PRIMARY\\n49.04 TOTAL PURCHASE\\nDebit **** **** **** 8240 I O\\nREF # 203300709814\\nNETWORK ID. 0069 APPR CODE 451538\\nDebit\\nAID A0000000042203\\nAAC 650AEFC8B871ABC\\nTERMINAL # SC011046\\n02/02/22 18:43:02\\n# ITEMS SOLD 3\\nTC# 1302 9164 0550 3444 063\\n[barcode]\\nWalmart\\nGive them the gift of membership\\nScan to gift today\\n02/02/22 18:43:08\",\"lines\":[{\"rawText\":\"EO NICO LOZ 068113114797 32.98 N\",\"description\":\"EO NICO LOZ\",\"quantity\":1,\"unit\":null,\"unitPrice\":32.98,\"amount\":32.98,\"category\":\"grocery\",\"confidence\":82,\"needsReview\":true},{\"rawText\":\"SONOMA PEPP 068041500999 6.88 O\",\"description\":\"SONOMA PEPP\",\"quantity\":1,\"unit\":null,\"unitPrice\":6.88,\"amount\":6.88,\"category\":\"grocery\",\"confidence\":93,\"needsReview\":false},{\"rawText\":\"UDIS GLUTEN 069899781033 F 9.18 O\",\"description\":\"UDIS GLUTEN\",\"quantity\":1,\"unit\":null,\"unitPrice\":9.18,\"amount\":9.18,\"category\":\"grocery\",\"confidence\":91,\"needsReview\":false}],\"adjustments\":[{\"rawText\":\"SUBTOTAL 49.04\",\"kind\":\"other\",\"amount\":49.04},{\"rawText\":\"TOTAL 49.04\",\"kind\":\"other\",\"amount\":49.04},{\"rawText\":\"DEBIT TEND 49.04\",\"kind\":\"payment\",\"amount\":49.04},{\"rawText\":\"CHANGE DUE 0.00\",\"kind\":\"payment\",\"amount\":0},{\"rawText\":\"EFT DEBIT PAY FROM PRIMARY\",\"kind\":\"payment\",\"amount\":null},{\"rawText\":\"49.04 TOTAL PURCHASE\",\"kind\":\"payment\",\"amount\":49.04}],\"warnings\":[\"The first product description is partially abbreviated/uncertain and may read differently.\",\"No separate tax line is visible.\",\"The receipt includes a barcode and QR code whose encoded contents are not transcribed.\"]}",
  "error": null,
  "timing": {
    "totalMs": 6552,
    "imagePrepMs": 195,
    "modelMs": 6357,
    "postProcessMs": 0,
    "modelCalls": 1,
    "imageCount": 2,
    "model": "gpt-5.6-luna",
    "reasoningEffort": "low",
    "harness": "isolated-direct-request"
  }
}
```

</details>
