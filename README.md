# Fragments of Silence

A dark, quiet digital archive of collected stories. React + Vite. Free on StackBlitz, GitHub and Vercel.

## Run it
- StackBlitz: import this repo from GitHub (stackblitz.com/github/your-username/your-repo).
- Locally: `npm install` then `npm run dev`.

## Make it yours
- `src/config.js`: site name, tagline, About text, your five care rules, and the email the "withdraw" link uses.
- `src/stories.js`: every story. Copy a block, edit it, done. Instructions are at the top of that file.
- `public/stories/<slug>/`: that story's photos and audio, referenced as `/stories/<slug>/file.jpg`.

## What every story page shows
Archive code, the story, a "How this story is held" note (consent, how they are named, editing, translation),
a link to ask to withdraw it, and a "Cite as" line. Photographs are never cropped.

## Media tips (keeps everything free and fast)
- Photos: about 2000px on the long side, under 500 KB each. Keep your originals safe elsewhere.
- Audio: mp3, around 96 kbps mono for voice.
- Video: upload to YouTube or Vimeo as unlisted and add the id. Do not put video files in the repo.

## Deploy
Push to GitHub, import the repo in Vercel, accept the defaults. Every push updates the live site.
