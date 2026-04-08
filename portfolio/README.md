# Raghav's Portfolio

A dark, violet-themed developer portfolio built with React + Vite.

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build
```

## 🔧 Customise Your Content

All your personal info, projects, skills and experience live in **one file**:

```
src/data/index.js
```

Just open it and update:
- `personal` → your name, email, social links, portfolio URL
- `projects` → add/edit project cards
- `experience` → add/edit work experience
- `skills` → add/edit orbit skill nodes
- `techStack` → the pills in the About section

## 📁 Project Structure

```
raghav-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
│
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── data/
    │   └── index.js          ← ✏️  edit all your content here
    ├── hooks/
    │   ├── useGreeting.js
    │   ├── useTypewriter.js
    │   └── useFadeIn.js
    ├── styles/
    │   └── index.css
    └── components/
        ├── ui/
        │   ├── FadeSection.jsx
        │   ├── SectionLabel.jsx
        │   └── CornerButton.jsx
        ├── Navbar/Navbar.jsx
        ├── Hero/Hero.jsx
        ├── About/About.jsx
        ├── Projects/
        │   ├── Projects.jsx
        │   ├── MernCard.jsx
        │   └── PortfolioCard.jsx
        ├── Skills/Skills.jsx
        ├── Experience/Experience.jsx
        ├── Contact/Contact.jsx
        └── Footer/Footer.jsx
```

## 🌐 Deploy to Vercel

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → Import project
3. Vercel auto-detects Vite — just click Deploy
4. Update `portfolioUrl` and `liveLink` in `src/data/index.js`
