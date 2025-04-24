# 🔑 KeyCloner: Chrome Extension

**KeyCloner** is a Chrome extension that allows you to extract specific `localStorage` keys from one tab and paste them into another.  
It's especially useful for transferring authentication tokens and user data between different environments or instances of the same application.

---

## ✨ Features

- ✅ Extract `satellizer_token` and `ngStorage-USER` from `localStorage`
- 📋 Copy keys to clipboard with one click
- 💾 Persist keys using Chrome storage
- 🚀 Paste keys into any compatible tab
- 🧼 Minimal and easy-to-use interface

---

## 🛠 Installation Instructions

### 1. Download or Clone the Repository

- Clone using Git:

  ```bash
  git clone https://github.com/your-username/keycloner.git
  ```

- **OR** download the ZIP file and extract it to a folder on your computer.

---

### 2. Open Chrome Extensions Page

- Open Chrome browser  
- Visit: `chrome://extensions/`  
- OR navigate via:  
  `Menu (⋮)` → `More tools` → `Extensions`

---

### 3. Enable Developer Mode

- Toggle **Developer mode** switch (top right)

---

### 4. Load the Extension

- Click **Load unpacked**
- Select the folder where you extracted/cloned **KeyCloner**
- Click **Open**

---

### 5. Verify Installation

- ✅ You should see **KeyCloner** in your extensions list  
- 🧩 The extension icon will appear in your Chrome toolbar

---

## 🚀 How to Use

1. **Navigate** to a website where the target `localStorage` keys exist
2. Click the **KeyCloner** icon in the Chrome toolbar
3. Click **“Copy from This Tab”** to read and store the keys
4. Open a new tab or environment
5. Click **“Paste to This Tab”** to inject the saved keys into `localStorage`

---

## 🔐 Security Note

This extension stores tokens using Chrome's extension storage.  
Always use responsibly — avoid copying or pasting sensitive tokens in untrusted environments.

---
