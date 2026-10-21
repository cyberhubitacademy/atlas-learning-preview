# gowthamsir — Complete browser-local management demo

Live application: https://cyberhubitacademy.github.io/atlas-learning-preview/
Progress: https://cyberhubitacademy.github.io/atlas-learning-preview/progress.HTML
Aliases: progress.html and Professor.html

## Explore
Choose Sign In, select Student, Teacher, Management, or Admin, and enter the demo. No password or API key is required. All saved demo data stays in the browser and is shared across the four roles on the same device.

## Included
- Original owner-provided site styling, imagery, landing-page layout, course library, topic viewer, assessment builder, and overview layouts, renamed throughout to gowthamsir.
- Implemented all originally linked workspace destinations, including the original missing admin, management, teacher, and student pages.
- Local user and role management, editable school content, assignments, departments, announcements, profiles, settings, activity history, CSV exports, and JSON backups.
- Saved teacher assessments, student assessment submissions, school lesson library, lesson progress, quiz scores, and achievements.
- 80 accessible lesson topics: original available lessons retained; formerly empty lessons have concise sample content and practice quizzes.
- Offline assistant: lesson-based retrieval, extractive summaries, practice quizzes, textual mind maps, teaching plans, downloadable responses, and per-role conversation history.
- Public About, Gallery, Contact, Career, Book a Demo, Privacy, Terms, subject, director, and illustrative smart-map pages.
- A live milestone progress page that refreshes every 15 seconds.

## Demo boundaries
This is a browser-local demonstration, not a production service. No live AI model, production login, password system, email delivery, payment processor, or cloud database is connected. The original Supabase client is replaced and remote Supabase fetches are blocked. No production data is read or modified. Users should enter sample data only.

Overview metrics retained from the original interface are labeled as seeded samples. Reports and management records use local demo data. Original unavailable director biographies/photos are not invented; those pages explain the platform vision. Video placeholders are replaced with text recaps. Teacher-generated test questions remain sample assessment content and submitted assessments await teacher review.

## Implementation
- assets/app.js: adapted public frontend bundle, including route wiring and original available lessons.
- assets/demo-pages.js and assets/demo.css: readable new workspace and public-page components.
- demo-store.js: local database and compatible auth/query adapter.
- assistant-engine.js: local retrieval and extractive study tools, with no external AI call.
- assets/lessons.js: sample lesson content for all advertised lesson identifiers.
- route-inventory.json: implemented route patterns and local services.
- progress.json: latest build milestone status.

The original editable React source, private backend schema, and server functions were not available from the public website. This repository preserves its deployed frontend and adds readable demo modules.

## Hosting
GitHub Pages publishes the main branch root. No build or server is required. The 404.html fallback handles direct client routes. A custom domain or different repository name requires changing /atlas-learning-preview path prefixes.

## Validation
All four role menus were exercised in a browser. User records, teacher profiles, assessment saving, conversations, quiz scores, and achievements were checked across refreshes. Local service tests cover authentication events, CRUD, upserts, profile saving, lesson and quiz records, settings, tests, persistence, sign-out, 80 lesson schemas, assistant retrieval, summaries, quizzes, mind maps, and lesson planning. See VALIDATION.md for the final report.
