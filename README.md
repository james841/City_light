# Citylight Research and Technologies — Website

A professional React + Tailwind CSS website.

## Quick Start

```bash
npm install
npm start
```
Opens at http://localhost:3000

## Build for Production
```bash
npm run build
```

## Pages
- `/` Home
- `/about` About Us
- `/services` Services  
- `/portfolio` Portfolio
- `/contact` Contact

## Structure
```
src/
  components/  Navbar, Footer, Logo
  pages/       Home, About, Services, Portfolio, Contact
  hooks/       useReveal.js (scroll animations)
  App.js       Routing
  index.css    Tailwind + fonts
```

## Customise
- Colors: tailwind.config.js → theme.extend.colors.primary
- Contact info: Footer.jsx + Contact.jsx
- Team: About.jsx TeamCard entries
- Projects: Portfolio.jsx projects array
- Form backend: Contact.jsx handleSubmit function

## Deploy
- Vercel: `npx vercel`
- Netlify: drag build/ folder
- cPanel: upload build/ contents to public_html
