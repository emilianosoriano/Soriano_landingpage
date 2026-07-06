# Portfolio Site (Static)

This is a minimal static portfolio page to showcase certificates, education, internships, current work, and provide a contact method.

Quick start

- Open locally by double-clicking `index.html` in a browser.
- Or serve it from a simple HTTP server:

```bash
# From this folder
python3 -m http.server 8000
# then open http://localhost:8000
```

Customization

- Replace placeholders in `index.html` (certificates in `assets/`) with your own images or links to PDFs.
- Update the `myEmail` value in `script.js` to your email address.
- To collect messages without opening an email client, integrate a serverless form (Formspree, Netlify Forms) and update the form action accordingly.

Deployment

- GitHub Pages: push this folder to a repo and enable Pages on the `main` branch.
- Netlify / Vercel: drag-and-drop or connect the repo for continuous deploys.

Next steps

- Convert to a React/Next app for dynamic loading and better asset handling.
- Add thumbnails and lightbox for certificate images.
- Add JSON-driven content to make editing easier.
