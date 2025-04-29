# 🎬 PlayTube – A YouTube Clone

PlayTube is a responsive and clean YouTube clone application built with **Next.js** and **Tailwind CSS**. It replicates the core features of YouTube including a watch page, video playback, channel details, playlist section, and responsive layout.

---

## 🌟 Features

- 🎥 Embedded video player (YouTube iframe)
- 📺 Dynamic Watch page layout with video info
- 📜 "Up Next" scrollable playlist with cards
- ❤️ Like, Share, and Subscribe buttons
- 📱 Fully responsive design (mobile to desktop)
- 🧪 Mock data via static feed (for local testing)

---

## 🛠️ Tech Stack

- [Next.js 14](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Moment.js](https://momentjs.com/) – for "time ago" format
- [YouTube Embed API](https://developers.google.com/youtube/player_parameters)

---

## 📂 Project Structure

├── components │ └── ui │ └── WatchListCard.tsx ├── helpers │ ├── FormatYoutubeCounts.ts │ └── Layout-feed.tsx ├── pages │ └── watch.tsx ├── public │ └── assets (if any) ├── styles │ └── global.css ├── customfeed.ts (Static mock data)

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/playtube.git
cd playtube

npm install
# or
yarn install

npm run dev

--> Visit http://localhost:3000 to view it in your browser.

📦 Future Features
✅ Integrate YouTube Data API (live feed)

✅ Comments section

✅ Auth and user subscriptions

✅ Download support (for public/owned content)

✅ History, Likes, and Saved lists


🌐 Live Demo
Coming soon via Vercel

🤝 Contribution
Pull requests are welcome! Feel free to fork this repo and submit enhancements, fixes, or new ideas.

📜 License
This project is open-source and available under the MIT License.

👨‍💻 Author
Nikhil Katkuri
GitHub: NikhilKatkuri
Portfolio: https://portfilo-livid.vercel.app/

```
