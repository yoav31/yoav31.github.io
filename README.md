# DevOps / Cloud Engineer Portfolio

Welcome to the personal portfolio website repository for **Yoav**. This is a clean, modern, static portfolio website built strictly with semantic HTML5, CSS3, and lightweight vanilla JavaScript.

It has zero build steps, requires no server backend, and is structured for free hosting directly on **GitHub Pages**.

---

## 1. File Structure

```text
.
├── index.html       # Primary semantic structure, hero, skills, projects, contact
├── styles.css       # Responsive dark-theme styling with blue and cyan accents
├── script.js        # Dynamic current year, mobile navigation, and interactions
└── README.md        # Documentation, deployment guide, and project setup instructions
```

---

## 2. Quick Customization Guide

### A. Updating Your LinkedIn URL
In `index.html`, search for `YOUR_LINKEDIN_URL_HERE` and replace it with your actual profile link:
- In the Hero section button (`id="linkedinHeroBtn"`).
- In the Contact section link (`id="linkedinContactLink"`).
- Update the label text inside `<span class="contact-item-value" id="linkedinLabelText">` to your LinkedIn handle or name.

### B. Adding Your Real GitHub Projects
The projects section in `index.html` contains clearly marked `<article class="project-card">` templates.

To add a new project card:
1. Open `index.html` and scroll down to `<section id="projects">`.
2. Edit or duplicate an `<article class="project-card">` block:
   ```html
   <article class="project-card">
     <div class="project-card-header">
       <span class="project-type-tag">Public Repository</span>
       <h3 class="project-title">Your Project Name</h3>
     </div>
     <p class="project-description">
       A concise, honest summary of what the system does, its architecture, and problem solved.
     </p>
     <div class="project-tech-stack">
       <span class="tech-tag">AWS</span>
       <span class="tech-tag">Terraform</span>
       <span class="tech-tag">Docker</span>
     </div>
     <div class="project-links">
       <a href="https://github.com/yoav31/YOUR_REPO_NAME" target="_blank" rel="noopener noreferrer" class="btn-card btn-card-primary">
         GitHub Repo
       </a>
     </div>
   </article>
   ```

---

## 3. Privacy & Security Rules (Read Before Publishing)

When publishing projects or architecture diagrams to GitHub:
- **Never publish employer-owned proprietary code or internal configuration files.**
- **Never expose customer names, internal domains, or private IP addresses.**
- **Never commit AWS account numbers, API keys, passwords, private SSH keys, or secrets.** Use `.gitignore` and tools like `git-secrets` or `gitleaks` to verify.
- Base personal portfolio repos on independent, fictional demonstration infrastructure.

---

## 4. Local Testing

To preview the website locally on your computer before publishing:
1. Open the folder containing the files.
2. Double-click `index.html` to open it directly in Google Chrome, Firefox, or Edge.
3. Or use Python's built-in HTTP server:
   ```bash
   python -m http.server 8000
   ```
   Then open `http://localhost:8000` in your browser.

---

## 5. Publishing to GitHub Pages (`yoav31.github.io`)

Follow these exact steps to publish:

1. Sign in to your GitHub account: **yoav31**.
2. Check whether the repository `yoav31.github.io` already exists:
   - If it exists, inspect its files before making changes.
   - If it does not exist, click **New Repository**.
3. Name the repository exactly:
   ```text
   yoav31.github.io
   ```
4. Set the repository visibility to **Public**.
5. Upload all 4 files (`index.html`, `styles.css`, `script.js`, `README.md`) directly into the repository root.
6. Navigate to **Settings** → **Pages** in your repository.
7. Under **Build and deployment**:
   - Source: **Deploy from a branch**.
   - Branch: **main** (or **master**).
   - Folder: **/(root)**.
8. Click **Save**.
9. Allow 1 to 3 minutes for GitHub Pages to complete its initial deployment pipeline.
10. Open:
    ```text
    https://yoav31.github.io/
    ```
    Your portfolio is now live.
