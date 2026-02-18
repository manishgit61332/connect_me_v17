# Migration Setup Status

## ✅ Completed

1. **Project Structure**
   - V1 codebase copied to V2 (`frontend/` directory)
   - Migration script created (`migrate-products.js`)
   - Configuration files in place

2. **Migration Script Features**
   - Google Sheets API integration
   - Master tab parsing (S.No, Category, Sub-Category, Product Group, Model, Summary)
   - Detail tab fetching (specs parsing)
   - Product mapping and ID generation
   - Software category preservation
   - Image/brochure removal (set to null)
   - Validation report generation
   - Mapping table generation

3. **Documentation**
   - Migration guide created

   - Validation checklist prepared


## ⚠️ Pending (Requires Network Access)

1. **Install Dependencies**
   ```bash
   npm install googleapis
   ```

2. **Run Migration**
   ```bash
   node migrate-products.js
   ```

3. **Review & Apply**
   - Review generated `productData-new.js`
   - Review `migration-report.json`
   - Backup existing `productData.js`
   - Replace with new file
   - Verify Software category intact

## 📋 Current File Structure

```
connectme- revamp V2/
├── frontend/                    # Copied from V1
│   └── connectfend/
│       └── src/
│           └── data/
│               └── productData.js  # Will be replaced
├── b2b-lead-updation-e6d14039db11.json  # Google API credentials
├── migrate-products.js          # Migration script
├── package.json                 # Node.js config
├── MIGRATION_GUIDE.md           # Detailed guide
└── SETUP_STATUS.md             # This file
```

## 🔧 Next Steps

1. **Ensure Network Access**
   - Connect to internet
   - Verify npm registry access

2. **Install Dependencies**
   ```bash
   cd "C:\Users\silla\Desktop\Cursor\connectme- revamp V2"
   npm install googleapis
   ```

3. **Run Migration**
   ```bash
   node migrate-products.js
   ```

4. **Review Output**
   - Check `migration-report.json` for errors
   - Verify product counts
   - Check for missing tabs

5. **Apply Changes**
   ```bash
   # Backup
   cp frontend/connectfend/src/data/productData.js frontend/connectfend/src/data/productData.js.backup
   
   # Apply
   cp productData-new.js frontend/connectfend/src/data/productData.js
   ```

6. **Verify**
   - Software category intact
   - Images are null
   - Category names unchanged
   - No new categories

## 📊 Expected Output

After successful migration, you should see:

- `productData-new.js` - Complete new productData.js
- `migration-report.json` - Validation report with:
  - Products read count
  - Products imported count
  - Missing tabs list
  - Category breakdown
- `mapping-table.json` - Product mapping (S.No → Model → Category)

## ⚠️ Important Reminders

1. **Software Category**: Must remain exactly as-is from V1
2. **Images**: All set to null (except Software which keeps its structure)
3. **Brochures**: All set to null for rebuilt products (Software keeps its brochures)
4. **Categories**: Names and order must not change
5. **Work/Blog/About**: Must not be touched

## 🐛 Troubleshooting

### npm install fails
- Check internet connection
- Try: `npm config set registry https://registry.npmjs.org/`
- Or: `npm install googleapis --force`

### Google Sheets API errors
- Verify service account JSON file exists
- Check spreadsheet is shared with service account email
- Verify spreadsheet ID is correct

### Missing detail tabs
- Check tab names match S.No exactly
- Tab names like "3 A" must have the space
- Verify all tabs exist in spreadsheet
