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

GitHub Pages publish steps

1. Create a new GitHub repository.
2. Add the remote and push:

```bash
cd /Users/emilianosoriano/portfolio-site
git remote add origin https://github.com/<your-user>/<repo-name>.git
git branch -M main
git push -u origin main
```

3. In GitHub repo Settings, enable Pages from the `main` branch and root folder.
4. Your site will be available at `https://<your-user>.github.io/<repo-name>/`.

Email contact note

- The page uses `mailto:` so it opens the Gmail compose window if you set Gmail as your default mail client.
- This is a good choice when you want a dedicated Gmail address and don’t need server-side form handling.

Next steps

- Convert to a React/Next app for dynamic loading and better asset handling.
- Add thumbnails and lightbox for certificate images.
- Add JSON-driven content to make editing easier.
