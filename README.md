# Travel landing page

This is a static HTML, CSS, and JavaScript site. The main page is `vercel.html`; `vercel.json` routes the site root (`/`) to that file, so an `index.html` is not needed.

## Deploy to Vercel

Upload or import the project folder/repository in Vercel. Choose **Other** as the framework preset, leave the build command empty, and set the output directory to `.` (the project root). The included `vercel.json` serves the landing page at your domain root.

The stylesheet and script are linked with relative paths, so keep `vercel.html`, `vercel.css`, and `vercel.js` together in the project root.
