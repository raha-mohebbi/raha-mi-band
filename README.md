<img width="859" height="1903" alt="mi band" src="https://github.com/user-attachments/assets/f7b1f1b6-7b12-4b8b-bc75-b9200ac4e770" />
# 🐱 Xiaomi Smart Band 7 Watch Face

A custom watch face designed and developed for **Xiaomi Smart Band 7** using **Zepp OS APIs**.

---

# 📌 Project Overview

## Project Name

`raha-watchface`

## Device

- **Xiaomi Smart Band 7**
- **Model:** M2129B1
- **Display Resolution:** `192 × 490 px`

## Technology Stack

- Zepp OS
- Zeus CLI
- HM UI JavaScript API
- PNG Assets

---

# 🛠 Tools & Environment

## Zeus CLI

**Version**

`v1.8.2`

### Used For

- Creating Zepp OS projects
- Validating project configuration
- Building ZPK packages
- Preparing watch face releases

---

## Zepp OS Simulator

**Version**

`1.2.4`

### Used For

- Testing watch face behavior
- Previewing Band 7 UI
- Debugging layout and assets

---

# 📁 Project Structure

```text
raha-watchface
│
├── app.js
├── app.json
│
├── assets
│   └── l66
│       ├── battery.png
│       ├── cat.png
│       ├── fire.png
│       ├── heart.png
│       └── walking.png
│
└── watchface
    └── index.js
```

---

# ⚙️ Configuration

## Target Device

```
l66
```

## Device Source

```
263
```

## Design Width

```
192px
```

## API Version

```
1.0.0
```

---

# 🐛 Problems & Solutions

## 1. Unsupported Target Device

### Problem

Initial target:

```
mi-band7-intl
```

was not supported by the build system.

### Solution

Updated configuration:

```json
{
  "target": "l66",
  "deviceSource": 263
}
```

---

## 2. Invalid JSON Configuration

### Problem

`app.json` parsing failed during validation.

### Causes

- Invalid JSON structure
- UTF-8 BOM characters

### Solution

- Cleaned JSON formatting
- Removed invalid characters
- Validated configuration again

---

## 3. Missing Asset Error

### Error

```
ENOENT: no such file or directory
icon.png_origin
```

### Cause

The required asset path did not match the actual file location.

### Solution

Moved assets into the correct directory:

```
assets/l66
```

---

## 4. Image Not Displaying

### Problem

The cat image was not visible on the watch face.

### Cause

Incorrect widget rendering order.

### Solution

Widgets must be created in the correct layer order:

```
Background
      ↓
Images
      ↓
Text
```

Example:

```
FILL_RECT

↓

IMG

↓

TEXT
```

---

# 🎨 Watch Face Layout

```text
┌──────────────────┐
│     Battery      │
│                  │
│    Week Day      │
│      Date        │
│      Time        │
│                  │
│    Cat Image     │
│                  │
│      5234        │
│   Walking Icon   │
│                  │
│       78         │
│   Heart Icon     │
│                  │
│      320         │
│    Fire Icon     │
└──────────────────┘
```

---

# ⏱ Sensors Used

## Time Sensor

```
hmSensor.id.TIME
```

## Data Retrieved

- hour
- minute
- day
- week

### Used For

- Real-time clock
- Date display
- Weekday display

---

# 🖼 Asset Specifications

## Icon Size

All icons are optimized for Xiaomi Smart Band 7 display:

```
24 × 30 px
```

## Assets

```
battery.png
walking.png
heart.png
fire.png
cat.png
```

---

# 📍 Final UI Positions

## Walking Icon

```
x: 84
y: 335
```

## Heart Icon

```
x: 84
y: 390
```

## Fire Icon

```
x: 84
y: 445
```

---

# 📚 Skills & Knowledge Gained

During this project, I learned:

✅ Zepp OS project structure  
✅ app.json configuration  
✅ Asset management  
✅ HM UI widgets  
✅ Image and text positioning  
✅ Sensor integration  
✅ Watch simulator testing  
✅ Debugging build errors  
✅ Creating custom Xiaomi Band watch faces  

---

# 🚀 Future Improvements

Possible next steps:

- Dynamic battery percentage
- Real step counter integration
- Real heart rate sensor
- Weather information
- Animations

