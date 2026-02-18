# Product Catalog Migration Guide

## Overview
This migration rebuilds the product catalog from Google Spreadsheet data while preserving:
- Software category (untouched)
- Work/Blog/About pages (untouched)
- UI/Layout/Design (unchanged)
- Category hierarchy (preserved)

## Prerequisites

1. **Install Node.js dependencies:**
   ```bash
   cd "C:\Users\silla\Desktop\Cursor\connectme- revamp V2"
   npm install googleapis
   ```

2. **Verify Google Sheets API access:**
   - Service account JSON file: `b2b-lead-updation-e6d14039db11.json`
   - Spreadsheet ID: `1kwnA4tWTRIUbWrpzM38eyl4SyaTCerQmfW26Yp3SUKo`
   - Master tab: `product listing` (Sheet ID: 1449607775)

## Execution

Run the migration script:
```bash
node migrate-products.js
```

## What the Script Does

1. **Fetches Data:**
   - Reads master tab "product listing" (columns A-F: S.No, Category, Sub-Category, Product Group, Model, Summary)
   - Fetches detail tabs (named by S.No: "1", "2", "3", "3 A", "23A", etc.)
   - Parses specs from detail tabs (Column A = spec name, Column B = spec value)

2. **Rebuilds Categories:**
   - **Meters** (all subcategories)
   - **Valves & Switches** (all subcategories)
   - **Gateways & Connectivity** (all subcategories)
   - **Sensors & Actuators** (all subcategories)

3. **Preserves:**
   - **Software** category (exactly as-is from V1)
   - All imports needed for Software category

4. **Removes:**
   - All images (set to `null`)
   - All brochures for rebuilt products (set to `null`)
   - Note: Software category keeps its brochures (untouched)

5. **Generates:**
   - `productData-new.js` - New productData.js file
   - `migration-report.json` - Validation report
   - `mapping-table.json` - Product mapping table

## Output Files

### productData-new.js
Complete productData.js with:
- Rebuilt categories from spreadsheet
- Preserved Software category
- All images set to null
- All brochures set to null (except Software)

### migration-report.json
Contains:
- Products read count
- Products imported count
- Missing tabs list
- Errors encountered
- Category breakdown

### mapping-table.json
Mapping of:
- S.No → Model → Category → Subcategory → Status

## Manual Steps After Migration

1. **Review the generated files:**
   ```bash
   # Check the new productData.js
   cat productData-new.js
   
   # Review migration report
   cat migration-report.json
   ```

2. **Backup existing productData.js:**
   ```bash
   cp frontend/connectfend/src/data/productData.js frontend/connectfend/src/data/productData.js.backup
   ```

3. **Replace productData.js:**
   ```bash
   cp productData-new.js frontend/connectfend/src/data/productData.js
   ```

4. **Verify:**
   - Software category is intact
   - All images are null
   - Category names unchanged
   - Subcategory names unchanged

## Validation Checklist

- [ ] Software category preserved exactly
- [ ] All images set to null (except Software)
- [ ] All brochures set to null (except Software)
- [ ] Category names unchanged
- [ ] Subcategory names unchanged
- [ ] Product hierarchy preserved
- [ ] No new categories added
- [ ] Work/Blog/About pages untouched
- [ ] serviceData.js untouched

## Troubleshooting

### Network Issues
If `npm install` fails:
- Check internet connection
- Try: `npm install googleapis --registry https://registry.npmjs.org/`
- Or use a VPN if behind corporate firewall

### Missing Tabs
If detail tabs are missing:
- Check spreadsheet for tab names matching S.No
- Tab names must match exactly (including spaces: "3 A" not "3A")

### API Errors
If Google Sheets API fails:
- Verify service account JSON file exists
- Check spreadsheet sharing permissions
- Ensure service account email has read access

## Important Notes

⚠️ **DESTRUCTIVE REBUILD**: All products in allowed categories are completely replaced. No merging or partial updates.

⚠️ **SPREADSHEET OVERRIDE**: Spreadsheet data always wins. Any conflicts with existing data are resolved in favor of spreadsheet.

⚠️ **SOFTWARE UNTOUCHED**: Software category is preserved byte-for-byte from V1. No modifications allowed.

⚠️ **IMAGES REMOVED**: All product images are set to null. No image paths or references are created.
