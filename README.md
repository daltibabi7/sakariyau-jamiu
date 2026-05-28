# Sakariyau Jamiu & Co. - Luxury Real Estate & Surveying Website

A high-end, premium web presence for **Sakariyau Jamiu & Co. (Chartered Estate Surveyors, Valuers, and Property Managers)**. 

## Features
1. **Premium Aesthetic**: Clean HSL custom theme (Deep Navy Midnight, Warm Cream/Champagne Gold, Platinum Slate) using fluid layouts, transitions, and premium modern typography.
2. **Interactive 3D Architectural Model**: Implemented using **Three.js** via WebGL. Renders an abstract modernist villa in the hero section that slowly rotates and reacts (tilts and orbits) based on the user's cursor movement.
3. **Credibility & Accreditation Hub**: Interactive modal-based certificate verification system allowing clients to view official regulatory documents (ESVARBON, NIESV, CAC, FRCN, SCUML, JTB) in simulated high-fidelity document views with registered tax and compliance license details.
4. **Dynamic Listings Engine**: Integrated search and filter capability with **LocalStorage persistence**. Administrators can add/upload new properties, which will instantly reflect on the public property list.
5. **Direct WhatsApp Channel**: "Contact via WhatsApp" buttons automatically generate pre-formatted templates matching the specific property details (title, address, and reference info) to open a direct chat with the office.
6. **Regional Office accordions**: Dropdown panels detailing exact addresses and phone numbers for Lagos, Abuja (HQ), Kano, Kaduna, Ilorin, and Ibadan office lines.

---

## Local Verification & Run
To test this website locally:
1. Open the project folder on your system.
2. Right-click `index.html` and select **Open with Live Server** or double-click the file to run it in your browser.
3. Everything is self-contained. The Three.js canvas loads using a CDN script, and the font assets import directly from Google Fonts.

---

## Deploying to Vercel via GitHub

Follow these steps to host the site online for free using Vercel:

### Step 1: Create a GitHub Repository
1. Log in to your [GitHub account](https://github.com).
2. Click the **New** button to create a new repository.
3. Name your repository (e.g., `sakariyau-jamiu-website`) and set it to **Public**.
4. Click **Create repository**. Do *not* initialize it with a README, gitignore, or license (since we have them here).

### Step 2: Push your code to GitHub
Run the following commands in your terminal/powershell inside the `sakariyau-jamiu-co` folder:

```bash
# Initialize git
git init

# Add all files to staging
git add .

# Create initial commit
git commit -m "Initial commit of luxury real estate website"

# Rename branch to main
git branch -M main

# Link to your remote GitHub repository (replace with your actual GitHub URL)
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME.git

# Push files to GitHub
git push -u origin main
```

### Step 3: Connect to Vercel
1. Log in to your [Vercel Dashboard](https://vercel.com).
2. Click **Add New** and select **Project**.
3. Import the repository you just pushed from GitHub.
4. Under **Framework Preset**, select **Other** (Vercel will auto-detect it as a static HTML/CSS/JS site).
5. Click **Deploy**.
6. Within a few seconds, your site will be live on a production-ready `.vercel.app` domain!
