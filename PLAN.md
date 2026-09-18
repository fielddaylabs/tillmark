# Phased Implementation Plan

## Project Structure

The project is divided into four phases:

- **Phase 0 — Demonstration & Commercial Setup**
- **Phase 1 — Visibility**
- **Phase 2 — Implementation**
- **Phase 3 — Optional Improvements**

The project begins by proving that existing purchasing data can be converted into useful operational intelligence. Phase 1 then establishes continuous visibility. Phase 2 uses that information to actively control food operations, purchasing, safety, and waste. Phase 3 adds higher-complexity optimizations only where their additional savings justify the cost.

---

# Phase 0 — Demonstration & Commercial Setup

**Target duration: 2–4 weeks**

## Objective

Demonstrate that AC can turn existing receipts into structured purchasing data, estimate the company's savings opportunity, and establish the commercial agreement before the production system launches.

---

## Step 0.1 — Collect Existing Data

**Deadline: Days 1–3**

### Company

Provide:

- approximately one month of receipts from one manager's homes;
- preferably 3–12 months of historical food/cleaning-supply accounting totals;
- home occupancy history where available;
- list of major retailers;
- approximate current monthly spending.

### Jasin

Provide:

- examples of purchasing he believes are clearly excessive;
- examples of commonly wasted or improperly purchased items;
- explanation of current shopping and kitchen workflows.

### AC

Organize the provided data and establish the initial receipt-processing test set.

### Dietitian

No substantial involvement required.

---

## Step 0.2 — Build Receipt Demonstration

**Deadline: Week 1–2**

### AC

Build a demonstration that:

1. accepts a photographed/scanned receipt;
2. extracts text using local OCR where practical;
3. identifies retailer, date, total, quantities, weights, and line items;
4. matches abbreviated receipt lines to likely retailer products;
5. assigns confidence scores;
6. sends matches below approximately 90% confidence for human confirmation;
7. stores confirmed mappings for future receipts;
8. identifies obvious duplicate/premature purchasing.

Example:

> `WT APL HNYCRSP 100 — $3.79/lb`

can be matched against the retailer's catalog and pricing to determine that it is probably a particular Honeycrisp apple product.

AC will initially evaluate local OCR such as PaddleOCR/Tesseract and use more specialized services only where they add enough accuracy to justify their cost.

### Company

Answer questions about ambiguous historical purchases where possible.

### Jasin

Review a sample of matched purchases and confirm whether the results correspond to what he sees operationally.

---

## Step 0.3 — Produce Initial Savings Model

**Deadline: Week 2–3**

### AC

Estimate:

- current normalized monthly spending;
- duplicate purchasing;
- obviously excessive quantities;
- retailer-price opportunities;
- likely shrinkage/waste categories;
- realistic post-implementation spending.

The model should be conservative enough to defend to the board.

Example:

> Historical qualifying spend: $60,000/month  
> Modeled sustainable spend: $20,000/month  
> Agreed savings opportunity: $40,000/month  
> AC value share at 20%: $8,000/month

The resulting AC fee becomes a **fixed monthly enterprise fee**, rather than varying according to actual monthly spending.

### Company

Provide finance/accounting input and agree on the historical spending baseline.

### Jasin

Validate whether the proposed operational reductions appear realistic based on his direct experience.

---

## Step 0.4 — Board Demonstration

**Deadline: Week 3–4**

### AC

Demonstrate:

- receipt upload;
- OCR;
- product identification;
- repeat-purchase detection;
- sample purchasing dashboard;
- expected future workflow.

Present the proposed fixed monthly fee derived from the agreed savings opportunity.

### Jasin

Explain:

- current operational problems;
- observed waste/mismanagement;
- why standardized kitchen procedures are needed;
- his role in the proposed system.

### Company / Board

Approve or reject:

- project launch;
- fixed enterprise fee;
- Phase 1 access requirements;
- Stripe Issuing deployment;
- required staff participation.

---

# Phase 1 — Visibility

**Target duration: 90 days**

## Objective

Replace informal purchasing with a complete, attributable purchasing and inventory record.

Phase 1 does not wait for the company to change its entire kitchen operation. It establishes visibility over what is already happening.

---

## Step 1.1 — Production Infrastructure

**Deadline: Weeks 1–2**

### AC

Deploy:

- Next.js application on Vercel;
- Supabase production database;
- authentication and permissions;
- manager/admin MFA;
- custom audit-event system;
- backups and security controls;
- HIPAA-appropriate infrastructure configuration;
- required BAA arrangements.

### Company

Execute applicable agreements and provide:

- employee roster;
- manager hierarchy;
- home list;
- authorized purchasers.

### Jasin / Dietitian

No major work required.

---

## Step 1.2 — Stripe Issuing Deployment

**Deadline: Weeks 1–3**

### AC

Implement:

- Stripe Issuing integration;
- employee/card mapping;
- transaction webhooks;
- card activation/deactivation;
- refund/reversal handling;
- transaction-to-home assignment;
- basic card controls.

### Company

Provide required corporate/banking information and determine which employees receive cards.

Managers are responsible for promptly reporting terminated employees and lost cards.

### Staff

Use their assigned company card for qualifying purchases.

---

## Step 1.3 — Receipt Capture

**Deadline: Week 2–3**

### AC

Deploy a mobile-friendly workflow:

> Transaction occurs → employee photographs receipt → application reconciles it.

System identifies:

- transaction;
- receipt total;
- retailer;
- items;
- quantities;
- prices.

### Staff

Submit the receipt after each company-card purchase.

### Managers

Follow up on unresolved receipt exceptions.

---

## Step 1.4 — Product Matching System

**Deadline: Weeks 2–6**

### AC

Build retailer-specific matching using:

- receipt abbreviations;
- SKUs/codes;
- product names;
- price;
- units;
- weights;
- retailer catalog data;
- prior confirmed matches.

Matches below the confidence threshold enter a review queue.

Every confirmed mapping improves subsequent automation.

### Company / Jasin

Provide occasional clarification where a product cannot reasonably be identified from available evidence.

---

## Step 1.5 — Inventory Ledger

**Deadline: Weeks 3–7**

### AC

Create inventory lots containing:

- item;
- purchase date;
- quantity;
- home;
- purchasing employee;
- price;
- storage state;
- expected storage/use period.

Perishable products receive a default storage state, normally refrigerated where appropriate.

Staff can change the state when necessary.

Example:

> Milk expected to reach refrigerated disposal review.

The system asks:

> Used / Discarded / Frozen / Still present

Selecting **Frozen** records the storage transition and recalculates the appropriate future review date.

### Staff

Respond to storage/disposal prompts where applicable.

### Jasin

Provide occasional practical input when unusual storage practices need clarification.

---

## Step 1.6 — Waste and Incident Tracking

**Deadline: Weeks 4–7**

### AC

Add quick reporting for:

- spoiled food;
- spills;
- damaged goods;
- contamination;
- disposal;
- other losses.

### Staff

Record material losses when they occur.

### Managers

Review unusual loss patterns.

---

## Step 1.7 — Anomaly Detection

**Deadline: Weeks 5–10**

### AC

Begin flagging:

- unusually early repurchases;
- excessive quantities;
- unusually expensive purchases;
- purchases while significant stock should remain;
- missing receipts;
- repeated inventory discrepancies;
- unusual purchasing patterns by employee;
- unusual approval patterns by managers.

Example:

> Employee buys 128 dishwasher tablets Monday and another 128 Thursday despite normal consumption suggesting most of the first purchase should remain.

The system raises a management review.

### Managers

Approve legitimate exceptions or escalate unexplained activity.

### Senior Management

Review anomalies involving managers themselves or abnormal manager approval rates.

---

## Step 1.8 — Management Dashboards

**Deadline: Weeks 6–10**

### AC

Provide dashboards showing:

- spending by home;
- spending by resident-day;
- spending by employee;
- spending by retailer;
- food vs. cleaning supplies;
- expected inventory;
- waste;
- missing receipts;
- anomalies;
- manager approval behavior.

### Managers

Use the dashboard to oversee their homes.

### Executives / Board

Receive companywide visibility.

---

## Step 1.9 — Phase 1 Review

**Deadline: Day 90**

### AC

Present:

- 90-day purchasing results;
- inventory patterns;
- measured waste;
- anomalous purchasing;
- retailer opportunities;
- manager/staff behavior patterns;
- highest-value Phase 2 controls.

### Company

Approve the Phase 2 rollout and policies.

### Jasin

Validate which operational findings correspond with actual kitchen behavior.

### Dietitian

Begin Phase 2 preparation.

---

# Phase 2 — Implementation

**Target duration: 4–6 months for companywide rollout**

## Objective

Use Phase 1 data to actively prescribe safer, cheaper, and more consistent operations.

Phase 2 converts the platform from an observation system into the company's daily food-operations system.

---

# Step 2.1 — Finalize and Build the Home Operations Hardware Kit

**Deadline: Weeks 1–3**

This must happen early because later Phase 2 workflows depend on it.

### AC

Finalize a standardized bill of materials:

### Kitchen

- Raspberry Pi/comparable computer;
- touchscreen;
- NFC reader;
- wall enclosure/mount;
- thermal sticky-label printer;
- digital food thermometer.

### Dining Area

- flush-mounted screen/TV;
- Raspberry Pi Zero/comparable signage computer;
- mounting hardware.

AC will:

- bulk-order components;
- create the kiosk software image;
- build/test the kitchen enclosure;
- configure device enrollment;
- configure NFC;
- configure printing;
- design installation around existing outlets and surface-mounted cable raceways.

### Company

Approve hardware placement and permit installation.

### Jasin

Test the kitchen console placement and workflow for practicality.

---

# Step 2.2 — Build Recipe CMS

**Deadline: Weeks 1–4, in parallel with hardware**

### AC

Build the recipe-management CMS with:

- structured ingredient entry;
- serving quantities;
- preparation time;
- equipment;
- dietary/allergen tags;
- substitutions;
- leftover/storage settings;
- rich-text preparation instructions;
- automatic Markdown/normalized storage;
- version history;
- approval workflow.

The same form will support staff recipe submissions.

### Jasin

Begin entering the initial recipe catalog.

### Dietitian

Help finalize the dietary/allergen classification scheme.

---

# Step 2.3 — Initial Recipe Database

**Deadline: Weeks 3–8**

### Jasin

Create the company's initial practical recipe catalog.

Prioritize:

1. frequently served meals;
2. inexpensive meals;
3. simple meals;
4. commonly requested alternatives;
5. premade foods.

### Dietitian

Review and approve recipes as required.

### AC

Import/build supporting product and ingredient mappings and incorporate authoritative food-safety instructions.

---

# Step 2.4 — Resident Dietary Integration

**Deadline: Weeks 3–8**

### Company

Provide access/export/API documentation for the existing resident database.

### Dietitian

Approve structured restriction categories.

### AC

Build the integration.

Where existing resident restrictions exist only as free text, AC may use automated extraction to suggest structured values, but authorized company personnel verify them before activation.

The kitchen system then knows whether a recipe conflicts with the requirements of a home's residents.

---

# Step 2.5 — Meal Calendar

**Deadline: Weeks 5–9**

### AC

Build:

- multi-week meal scheduling;
- serving calculations;
- resident restriction checks;
- recipe approval checks;
- substitutions;
- planned vs. actually served records.

### Managers / Authorized Staff

Schedule meals several weeks ahead using approved recipes.

### Dietitian / Jasin

Review unusual menu issues when necessary.

---

# Step 2.6 — Kitchen Cooking Interface

**Deadline: Weeks 6–10**

### AC

Build the kiosk workflow:

> Identify staff member  
> → select scheduled meal  
> → step-by-step recipe  
> → required safety confirmations  
> → record meal served  
> → record leftovers.

Food-safety instructions come from applicable authoritative guidance and company policy.

### Jasin

Test the workflow with real cooking tasks and identify confusing or impractical steps.

### Staff

Use the kitchen console as the normal cooking interface.

---

# Step 2.7 — BYOD / NFC Employee Identification

**Deadline: Weeks 6–10**

### AC

Implement:

- NFC badge identification;
- phone credential support where available;
- badge fallback;
- session handling;
- stronger authentication for management actions.

### Company

Issue physical fallback badges and establish credential policy.

### Managers

Use passkey/MFA for sensitive approvals and overrides.

---

# Step 2.8 — Leftovers and Premade Meals

**Deadline: Weeks 8–11**

### AC

Build:

- leftover serving-count entry;
- prepared-food batches;
- storage states;
- discard dates;
- fridge availability counts;
- sticky-label printing.

### Staff

At meal completion, enter remaining portions.

Example:

> Chicken Parmesan — 3 portions remaining.

Three portions enter inventory and a dated adhesive label prints.

---

# Step 2.9 — Dining-Room Display

**Deadline: Weeks 8–11**

### AC

Build the resident-facing display showing:

- today's menu;
- upcoming meals;
- available premade foods;
- available leftovers where appropriate.

### Company

Approve presentation/content policy.

No resident medical information is displayed.

---

# Step 2.10 — Shopping and Purchasing Recommendations

**Deadline: Weeks 9–14**

### AC

Combine:

- scheduled meals;
- recipes;
- inventory;
- expiration/storage state;
- occupancy;
- retailer pricing;
- package sizes.

Generate shopping lists that consider when food is needed.

The system will also evaluate whether purchases should be consolidated across a manager's six homes.

Example:

Instead of six homes separately buying chicken:

> Manager Group A requires 42 lb total.

The system can recommend a bulk Restaurant Depot purchase and divide it between the homes.

### Company

Approve preferred vendors or identify vendors that should not be used.

---

# Step 2.11 — Stronger Card Controls

**Deadline: Weeks 11–15**

### AC

Use the now-established purchasing model to implement appropriate Stripe controls.

Potential controls include:

- retailer restrictions;
- merchant-category restrictions;
- spending ceilings;
- exceptional-purchase approval;
- emergency overrides.

### Company

Approve the purchasing-control policy.

### Managers

Approve legitimate exceptions.

---

# Step 2.12 — Training

**Deadline: Before each home goes live**

### Jasin

Provide:

- **2-hour initial food-safety training** for new employees;
- **2-hour food-safety refresher every six months**.

### AC

Provide:

- **1-hour application training** for new employees.

### Company

Make required training part of employee onboarding and ensure attendance.

The application records training completion.

---

# Step 2.13 — Hardware Installation

**Deadline: Approximately Weeks 10–18**

Installation begins after the hardware/software configuration has been validated in a small number of homes.

### AC

Install or supervise installation of:

- kitchen console;
- NFC reader;
- printer;
- dining-room display;
- Pi devices;
- surface cable raceways.

Standard installations should use existing outlets and avoid new electrical work.

AC can perform installation directly or hire installation assistance.

Target installation pace after the process is standardized:

> approximately 3–4 homes per day where layouts permit.

### Company

Provide access to each home and coordinate scheduling.

### Jasin

Participate in the first installations/workflow tests to validate physical placement.

---

# Step 2.14 — Companywide Rollout

**Deadline: Approximately Month 4–6**

Roll out manager group by manager group.

Each group receives:

1. hardware installation;
2. employee credentials;
3. approved recipes;
4. resident restriction integration;
5. meal calendar;
6. kitchen system;
7. dining display;
8. purchasing recommendations;
9. appropriate card controls;
10. staff training.

AC monitors adoption and corrects workflow issues during rollout.

---

# Step 2.15 — Ongoing Operations

### AC

Continuously provide:

- software hosting;
- security;
- technical support;
- retailer mapping;
- product matching;
- analytics;
- card integrations;
- device configuration;
- bug fixes;
- normal product improvements.

### Company

Continue:

- management oversight;
- policy enforcement;
- employee onboarding/offboarding;
- purchases;
- HR investigations where necessary.

### Jasin

Continue:

- recipe development;
- operational recipe review;
- product validation;
- food-safety training.

### Dietitian

Continue:

- recipe approval;
- clinical dietary oversight;
- dietary-rule updates.

---

# Hardware Replacement

There is no recurring hardware-maintenance surcharge.

Replacement is billed at reasonable cost.

Example:

> Failed Raspberry Pi: $45  
> Replacement/configuration: actual labor  
> Travel/service time: actual reasonable cost  
> Total service call: perhaps approximately $100 depending on location/time.

The intent is to reimburse AC for the physical service required, not profit heavily from inexpensive replacement parts.

---

# Phase 3 — Optional Improvements

**Timing: After Phase 2 has sufficient operating history, typically 6–12+ months after rollout**

Phase 3 is optional and separately approved.

Its purpose is to pursue additional savings opportunities revealed by Phase 2.

AC compensation for a Phase 3 project can be established as an additional percentage of the incremental savings opportunity created by that project.

---

## Potential Phase 3A — Advanced Procurement

AC may build:

- automated retailer price comparisons;
- landed-cost optimization;
- automatic multi-retailer shopping-list division;
- centralized companywide purchasing;
- delivery optimization;
- automatic reorder recommendations;
- controlled automatic ordering.

Example:

An item may be $2 cheaper at Store B, but the additional trip costs more than $2 in employee time and mileage.

The system assigns the item to Store A instead.

---

## Potential Phase 3B — Advanced Inventory Automation

AC may test:

- vision-assisted shelf counts;
- inventory-room cameras;
- automated stock reconciliation;
- other physical inventory technologies.

This is pursued only if Phase 2 data demonstrates that inventory uncertainty remains expensive enough to justify it.

---

## Potential Phase 3C — Expanded Employee Credentials

The NFC/BYOD credential platform could later support:

- building access;
- restricted storage-room access;
- other internal staff identification.

This would be separately scoped.

---

# Commercial Structure

## Before Phase 1

AC and the company agree on:

> **Validated monthly savings opportunity**

using historical accounting and Phase 0 analysis.

Example:

> Current spend: $60,000/month  
> Expected sustainable spend: $20,000/month  
> Savings opportunity: $40,000/month  
> AC share: 20%  
> **Fixed AC enterprise fee: $8,000/month**

That fee is established once.

It does **not** change each month based on actual purchasing fluctuations.

---

## Phase 1

The fixed monthly AC fee begins when Phase 1 starts.

There is no separate large implementation invoice.

---

## Phase 2

The same fixed enterprise fee continues while AC deploys and operates the full system.

The company keeps the remaining modeled savings.

---

## Phase 3

Optional improvements are separately valued based on the **additional savings opportunity** they create.

---

# Main Selling Points

## 1. Purchasing Accountability

Every purchase is connected to:

> employee → card → transaction → receipt → products → home.

Example:

An employee buys detergent four days after purchasing what should have been a month's supply.

Management sees it automatically.

---

## 2. Waste Becomes Measurable

The system knows:

> what was bought  
> + what was cooked  
> + what was discarded  
> + how food was stored  
> = what should remain.

Example:

Four gallons of milk were purchased, one was used, none was discarded, and two more gallons are purchased.

The discrepancy becomes visible.

---

## 3. Better Food Safety and Lower Liability

Recipes incorporate explicit food-safety instructions and required confirmations.

Example:

> Insert thermometer into thickest part of chicken and cook until it reaches the required safe temperature.

The system records which employee completed the safety step and when.

---

## 4. Resident Dietary Restrictions Become Part of the Workflow

Approved recipes are checked automatically against the residents currently living in each home.

Example:

A recipe containing shellfish cannot be casually scheduled for a home where a resident has a shellfish restriction.

---

## 5. Staff Have Less to Figure Out

Instead of independently deciding:

> What should I cook?  
> What should I buy?  
> Is this food still usable?  
> What temperature does this need?  
> Do we already have this?

the application supplies the answer at the point of work.

---

## 6. Management Gets Companywide Visibility

Managers see their six homes.

Executives see all thirty.

Example:

> Home 4 spends 38% more per resident than comparable homes.

Management can immediately investigate why.

---

## 7. Purchasing Can Move From Individual Trips to Coordinated Procurement

The system combines demand across homes.

Example:

Instead of six employees independently buying paper towels at ShopRite, the system identifies the aggregate requirement and recommends one bulk Restaurant Depot purchase.

---

## 8. The Pricing Aligns AC With the Company's Savings

AC's monthly fee is derived from a fraction of the savings opportunity.

Example:

> Company saves an estimated $40,000/month.  
> AC receives $8,000/month.  
> Company retains approximately $32,000/month while also receiving the platform, training, controls, and ongoing support.

The fee is then fixed, eliminating monthly disputes over savings calculations.

---

# Overall Target Timeline

| Period | Milestone |
|---|---|
| Weeks 1–4 | Phase 0 demonstration, baseline, board approval |
| Months 1–3 | Phase 1 Visibility |
| Month 3 | Phase 1 findings / Phase 2 final configuration |
| Months 4–5 | Phase 2 hardware, CMS, recipes, integrations |
| Months 5–6 | Kitchen workflows, shopping, NFC, training |
| Months 6–8 | Hardware installation and companywide rollout |
| Month 8 onward | Full operating system |
| 6–12+ months after Phase 2 | Optional Phase 3 projects where economically justified |

The practical target is therefore approximately **eight months from initial demonstration work to a fully deployed 30-home system**, with useful financial visibility beginning within the first few weeks of Phase 1 rather than waiting for the complete project to finish.