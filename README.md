# Atlas Learning Preview

A GitHub Pages demonstration of the owner-provided https://dpsir.net/ website, preserving DPSir branding, published UI, styling, imagery, and client routes.

## Preview
https://cyberhubitacademy.github.io/atlas-learning-preview/

Choose Sign In, then **Enter instantly (dev)** under Student, Teacher, Management, or Admin to explore the original demo screens.

## Scope and limitations
This is a replica of the public deployed frontend, not the original editable React source or a copy of the private backend. The original JavaScript bundle and eight visual assets are retained. Production analytics scripts are removed. Router and asset paths are adapted for GitHub Pages, with a 404 fallback for deep links.

Supabase public read requests still use the original service. Backend writes, sign-in, registration, password reset, and AI function POST requests are blocked by preview.js to protect live records. This is a demonstration guard, not a security boundary; production security must be enforced on the backend. No private user data was exported. Original placeholder links and incomplete features remain as on the original site.

A fully independent production replica requires the original source project, database schema/data export, storage assets, server functions and service configuration. GitHub Pages cannot itself host those server functions.

## Hosting
GitHub Pages publishes the main branch root. No build is required. Files are UTF-8. .nojekyll preserves the static output. For a different repository name, update /atlas-learning-preview in HTML and assets/app.js.

## Local preview
Serve the parent folder with `python -m http.server 8765` and visit `/atlas-learning-preview/`.
