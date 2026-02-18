# ConnectME V2 - Product Catalog Migration

## 🎯 Objective

Rebuild product catalog from Google Spreadsheet while preserving:
- ✅ Software category (untouched)
- ✅ Work/Blog/About pages (untouched)  
- ✅ UI/Layout/Design (unchanged)
- ✅ Category hierarchy (preserved)

## 📦 What's Included

### Migration Script (`migrate-products.js`)
Complete Node.js script that:
- Fetches data from Google Sheets API
- Parses master tab and detail tabs
- Rebuilds allowed categories destructively
- Preserves Software category exactly
- Removes all images (sets to null)
- Removes all brochures (sets to null, except Software)
- Generates validation reports

### Configuration
- **Spreadsheet ID**: `1kwnA4tWTRIUbWrpzM38eyl4SyaTCerQmfW26Yp3SUKo`
- **Master Tab**: `product listing` (Sheet ID: 1449607775)
- **Detail Tabs**: Named by S.No ("1", "2", "3", "3 A", "23A", etc.)
- **Service Account**: `b2b-lead-updation-e6d14039db11.json`

### Allowed Categories (Destructive Rebuild)
1. **Meters**
   - Inline Ultrasonic BTU Meters
   - Inline Ultrasonic Water Meters
   - Inline Electromagnetic Flow Meters
   - Clamp-on Ultrasonic BTU/Flow Meters
   - Gas Meters

2. **Valves & Switches**
   - Smart Valve Controller (Segregated)
   - Smart Compact Switch (Relay control)
   - Smart Compact Valve
   - Integrated BTU Meter & Valve

3. **Gateways & Connectivity**
   - M-Bus Products
   - Converters
   - Gateways
   - Power Supplies

4. **Sensors & Actuators**
   - Air Quality Sensor
   - Water Leak Detection Sensor

### Protected (Untouched)
- ❌ **Software** category (preserved exactly from V1)
- ❌ **Work** page
- ❌ **Blog** page
- ❌ **About** page
- ❌ **serviceData.js**

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd "C:\Users\silla\Desktop\Cursor\connectme- revamp V2"
npm install googleapis
```

### 2. Run Migration
```bash
node migrate-products.js
```

### 3. Review Output
- Check `migration-report.json`
- Review `mapping-table.json`
- Inspect `productData-new.js`

### 4. Apply Changes
```bash
# Backup existing
cp frontend/connectfend/src/data/productData.js frontend/connectfend/src/data/productData.js.backup

# Apply new
cp productData-new.js frontend/connectfend/src/data/productData.js
```

## 📊 Output Files

| File | Description |
|------|-------------|
| `productData-new.js` | Complete new productData.js with rebuilt categories |
| `migration-report.json` | Validation report with counts, errors, missing tabs |
| `mapping-table.json` | Product mapping (S.No → Model → Category → Status) |

## ✅ Validation Checklist

After migration, verify:

- [ ] Software category preserved exactly (byte-for-byte)
- [ ] All product images set to `null`
- [ ] All product brochures set to `null` (except Software)
- [ ] Category names unchanged
- [ ] Subcategory names unchanged
- [ ] Category order preserved
- [ ] No new categories added
- [ ] Work/Blog/About pages untouched
- [ ] serviceData.js untouched

## 🔍 How It Works

### Data Flow

```
Google Spreadsheet
    ↓
Master Tab (product listing)
    ├─ Column A: S.No (tab reference)
    ├─ Column B: Category
    ├─ Column C: Sub-Category
    ├─ Column D: Product Group
    ├─ Column E: Model
    └─ Column F: Summary
    ↓
Detail Tabs (named by S.No)
    ├─ Column A: Spec name
    └─ Column B: Spec value
    ↓
Migration Script
    ├─ Parse & map data
    ├─ Generate product IDs
    ├─ Build product objects
    └─ Group by category/subcategory
    ↓
productData.js Structure
    ├─ Rebuilt categories (from spreadsheet)
    └─ Software category (from V1)
```

### Mapping Rules

| Spreadsheet | productData.js |
|-------------|----------------|
| Model | `name` |
| Product Group | `productGroup` |
| Summary | `description` |
| Detail tab rows | `specs` object |
| Important specs | `features` array |
| Category/Subcategory | Hierarchy preserved |

### ID Generation

Product IDs are generated from model names:
- Convert to lowercase
- Replace special chars with hyphens
- Example: "UFLO U60" → "uflo-u60"

## ⚠️ Important Rules

### Destructive Rebuild
- **NO** partial updates
- **NO** merging with existing data
- **COMPLETE** replacement of allowed categories
- Spreadsheet data **ALWAYS** wins

### Image Handling
- All product images: `null`
- All product images arrays: `[]`
- All product brochures: `null`
- **Exception**: Software category keeps its structure (untouched)

### Tab Name Matching
- Use **exact** string match
- "3 A" ≠ "3A" (space matters)
- "23A" = "23A" (case-sensitive)
- Do NOT auto-normalize or trim

## 🐛 Troubleshooting

### npm install fails
```bash
# Try alternative registry
npm config set registry https://registry.npmjs.org/

# Or force install
npm install googleapis --force
```

### Google Sheets API errors
- Verify `b2b-lead-updation-e6d14039db11.json` exists
- Check spreadsheet sharing permissions
- Ensure service account email has read access

### Missing detail tabs
- Verify tab names match S.No exactly
- Check for typos in tab names
- Ensure tabs exist in spreadsheet

## 📝 Notes

- Migration is **idempotent** - safe to run multiple times
- All changes are **deterministic** - same input = same output
- **Zero UI impact** - no layout/design changes
- **Production-safe** - validates before applying

## 📞 Support

For issues or questions:
1. Check `migration-report.json` for errors
2. Review `MIGRATION_GUIDE.md` for details
3. Check `SETUP_STATUS.md` for current status

---

**Last Updated**: 2026-01-25
**Migration Script Version**: 1.0.0
