# Venus Holidays — website

Static, SEO-first website for Venus Holidays built with [Astro](https://astro.build).
No backend, no database — every page is pre-rendered HTML, so it's fast, free to host,
and fully crawlable by search engines.

## Commands

| Command           | What it does                                      |
| ----------------- | ------------------------------------------------- |
| `npm install`     | Install dependencies (first time only)            |
| `npm run dev`     | Local dev server at `http://localhost:4321`       |
| `npm run build`   | Production build into `dist/`                     |
| `npm run preview` | Preview the production build locally              |
| `npm run og`      | Regenerate social share images (`public/og/*.png`) |

## How to add a new trip

1. Open `src/data/packages.json` and copy any existing entry. Fill in:
   - `id` — short unique key (e.g. `"andaman"`)
   - `slug` — the URL, lowercase with hyphens (e.g. `"andaman-island-hopper"` → `/packages/andaman-island-hopper/`)
   - name, `cat` (any of `domestic`, `international`, `pilgrimage`, `honeymoon`), `tag`,
     `nights`, `days`, `route`, `priceINR` (number, no commas), `season`, `desc`, `lede`,
     `highlights`, `itin` (array of `[title, description]` per day), `inc`, `exc`.
2. Add card artwork in `src/data/art.js` under the same `id` (copy a similar destination's
   SVG and tweak colours, or reuse one).
3. Run `npm run og` to generate its share image.
4. Deploy (see below). The new trip automatically appears on the listing page, gets its own
   SEO page, and is added to the sitemap. To feature it on the home page, add its `id` to
   `FEATURED` or `TRENDING` in `src/data/site.js`.

## Hero background video

The home hero plays `public/videos/hero-loop.mp4` on a seamless loop behind a dark
emerald tint (so any footage stays legible). To use your own footage:

1. Pick a calm, wide shot (aerial/drone works best). 10–25 seconds is plenty.
2. Compress it — keep the file **under ~5 MB** or it will hurt page speed:
   `ffmpeg -i input.mp4 -vf "fps=24,scale=1600:900" -an -c:v libx264 -crf 32 -preset slow -movflags +faststart public/videos/hero-loop.mp4`
3. Same filename = no code changes. The video is muted, loops, skips for
   reduced-motion users, and falls back to the emerald gradient if it can't load.

**Current footage attribution (keep credit or replace the video):** the hero loop is a
montage of Indian landscapes from Wikimedia Commons — "Made in Ladakh" by *pani* (CC BY 3.0,
three segments: Leh valley, Pangong Lake, monastery), "Jaisalmer Fort - Rajasthan - India"
by *Incredible India* (CC BY 3.0), and a Western Ghats forest vista (CC BY 4.0).
Spare loops: `hero-beach-backup.mp4` (ocean waves) and `hero-aurora-backup.mp4` (abstract).

## Before going live — replace the placeholders

- **Domain**: set the real domain in `astro.config.mjs` (`site:`) and `src/data/site.js` (`url`)
  and `public/robots.txt` (sitemap line).
- **WhatsApp number / phone / email / address**: edit `src/data/site.js` once — used everywhere.
- **Review counts & claims** on the home page (`src/pages/index.astro`): 4.8 rating,
  2,400+ reviews, IATA/MoT claims — make sure these are true for the business.

## Deploying (free)

Push this folder to a GitHub repo, then import it into [Vercel](https://vercel.com),
[Netlify](https://netlify.com) or Cloudflare Pages — all auto-detect Astro.
Build command `npm run build`, output directory `dist`. Every push redeploys the site.

## After launch — SEO checklist

1. Verify the site in [Google Search Console](https://search.google.com/search-console)
   and submit `https://<your-domain>/sitemap-index.xml`.
2. Do the same in Bing Webmaster Tools.
3. Create/claim the **Google Business Profile** for the Mumbai office and link the website —
   this matters as much as the site itself for "travel agency near me" searches.
4. Add real photos over time (replace SVG art with compressed `.webp` images for even
   stronger click-through rates).

## Structure

```
src/
  data/site.js         ← business config (phone, address, WhatsApp, featured trips)
  data/packages.json   ← THE trip catalogue (edit this to add/change trips)
  data/art.js          ← SVG artwork per trip
  layouts/Base.astro   ← header, footer, SEO meta, schema.org
  components/PackageCard.astro
  pages/index.astro          ← home
  pages/packages/index.astro ← all packages + filters
  pages/packages/[slug].astro← one SEO page per trip
  pages/contact.astro
  pages/404.astro
scripts/generate-og.mjs ← builds social share images
public/                 ← favicon, robots.txt, og images
```

## Photo credits (placeholder images)

Destination photos in `public/img/trips/` are from Wikimedia Commons — replace with your own
trip photos when available, or keep these credits:

- kashmir: "Dal Lake, Srinagar, Jammu and Kashmir.jpg" by Dashrathgoyal85 (CC BY-SA 4.0)
- kerala: "Houseboat on Alleppey backwaters (Kerala, India 2023) (52704577484).jpg" by Paul Arps from The Netherlands (CC BY 2.0)
- rajasthan: "Jodhpur, India, Mehrangarh Fort, Roof.jpg" by Vyacheslav Argenberg (CC BY 4.0)
- goa: "Arabian Sea in Goa- India (1).jpg" by Arabian_Sea_in_Goa-_India.JPG: May Hachem93
derivative work: (CC BY 3.0)
- himachal: "Valley View - Manali - Himachal Pradesh - India - 02 (26341492270).jpg" by Adam Jones from Kelowna, BC, Canada (CC BY-SA 2.0)
- sikkim: "Kanchenjunga range from tea gardens of darjeeling.jpg" by Souviknshm (CC BY-SA 4.0)
- ooty: "Rest Stop Along the Nilgiri Mountain Railway (15075010526).jpg" by David Brossard (CC BY-SA 2.0)
- kashi: "Varanasi, India, Ganges River after sunset.jpg" by Vyacheslav Argenberg (CC BY 4.0)
- bali: "Tegalalang Rice Terrace - Subak Ceking on Bali 11.jpg" by Anggabuana (CC BY 4.0)
- dubai: "Burj Khalifa (worlds tallest building) and the Dubai skyline (25781049892).jpg" by imran shahabuddin (CC BY 2.0)
- thailand: "Phi Phi Island, Maya Bay on Phi Phi Leh (6222526031).jpg" by Fabio Achilli from Milano, Italy (CC BY 2.0)
- maldives: "Anantara Kihavah - Aerial Hero Shot 2024.jpg" by Matheenfaiz (CC BY-SA 4.0)

## Analytics (free, privacy-friendly)

The site is pre-wired for Cloudflare Web Analytics (no cookies, no consent banner
needed). To switch it on: create a site at dash.cloudflare.com → Analytics & Logs →
Web Analytics, copy the token, and paste it into `cfAnalyticsToken` in
`src/data/site.js`. Leave it empty and no script is loaded at all.

### Additional destination photos (fetched 2026-09-28)

All from Wikimedia Commons; credit required per license:

- kashmir: "Empty shikara on Dal Lake, Srinagar, India 2013-08-23 (flickr 9967093983).jpg" by Fulvio Spada from Torino, Italy (CC BY-SA 2.0)
- kashmir: "Gulmarg Gondola, Cable Car.JPG" by Skywayman9 (CC BY-SA 3.0)
- kerala: "Houseboat on Alleppey backwaters (Kerala, India 2023) (52704577484).jpg" by Paul Arps from The Netherlands (CC BY 2.0)
- kerala: "Munnar - Lockhart tea plantation.jpg" by Ingo Mehling (CC BY-SA 4.0)
- rajasthan: "20191210 Mehrangarh Fort, Jodhpur 1016 7834.jpg" by Jakub Hałun (CC BY-SA 4.0)
- rajasthan: "Jaipur 03-2016 02 Amber Fort.jpg" by A.Savin (FAL)
- goa: "Sunloungers at Palolem beach.jpg" by Ravi Dwivedi (CC BY-SA 4.0)
- goa: "Side Elevation of Basilica of Bom Jesus.jpg" by iMahesh (CC BY-SA 4.0)
- himachal: "Solang Valley, Manali.jpg" by Vikas Choudhary (CC BY-SA 4.0)
- himachal: "The Ridge Shimla 3.jpg" by Virusism (CC BY-SA 4.0)
- sikkim: "Tsomgo Lake, Sikkim, India.jpg" by Anupam Manur (Public domain)
- sikkim: "Kanchenjunga range from tea gardens of darjeeling.jpg" by Souviknshm (CC BY-SA 4.0)
- ooty: "Nilgiri Mountain Railway.jpg" by Nsmohan (CC BY-SA 4.0)
- ooty: "Botanical Gardens - Ootacamund (Ooty) - India 03.JPG" by Adam Jones Adam63 (CC BY-SA 3.0)
- kashi: "Ganga aarti at varanasi ghat uttar pradesh.jpg" by Rahulsinghxl (CC BY-SA 4.0)
- kashi: "Ayodhya Ram Mandir Inauguration Day Picture.jpg" by Prime Minister's Office (GODL-India)
- bali: "Rice terraces on Bali - Tegalalang Rice Terrace - Indonesia 05.jpg" by Thomas Fuhrmann (CC BY-SA 4.0)
- bali: "Kuta Bali Indonesia Pura-Luhur-Uluwatu-03.jpg" by CEphoto, Uwe Aranas (CC BY-SA 3.0)
- dubai: "Dubai Skyline mit Burj Khalifa (18241030269).jpg" by Tim Reckmann from Hamm, Deutschland (CC BY 2.0)
- dubai: "Gradens Sheikh Zayed Grand Mosque in Abu Dhabi - panoramio.jpg" by Jaseem Hamza (CC BY 3.0)
- thailand: "A roof of a building at the Grand Palace, Bangkok, sunrise, 2017.jpg" by Bjørn Erik Pedersen (CC BY-SA 4.0)
- thailand: "Maya Bay, Koh Phi Phi, Krabi, Thailand.jpg" by Vyacheslav Argenberg (CC BY 4.0)
- maldives: "Maldives, How blue can it be - Flickr - nattu.jpg" by Nattu from Male', Maldives (CC BY 2.0)
- maldives: "Reethi Beach Maldives.jpg" by Michael Hobi (CC BY-SA 3.0)
- uttarakhand: "Boats on Nainital Lake 02.jpg" by Slyronit (CC BY-SA 4.0)
- uttarakhand: "Mussoorie Hill Station.jpg" by आर्या जोशी (CC BY-SA 4.0)
- uttarakhand: "Ganga ghats, Laxman jhula, Rishikesh 2.jpg" by आशीष_भटनागर (CC BY-SA 3.0)
- northeast: "Umiam Lake, Shillong, Meghalaya.jpg" by Prof. Vikramjit Kakati (CC BY-SA 4.0)
- northeast: "NohKaLikai Falls V2 Wiki.jpg" by Vikramjit Kakati (CC BY-SA 4.0)
- northeast: "Indian rhinoceros in Kaziranga National Park March 2025 by Tisha Mukherjee 13.jpg" by Tisha Mukherjee (CC BY-SA 4.0)
- saurashtra: "Gujarat lion in Gir forest.jpg" by Shailesh Raval -  shaileshintoday (CC BY-SA 4.0)
- saurashtra: "Somnath seashore.jpg" by Sneha G Gupta (CC BY-SA 4.0)
- saurashtra: "View from diu fort.jpg" by Mayuri Dawande (CC BY-SA 4.0)
- andaman: "Havelock Island, Radhanagar Beach before sunset, Andaman Islands.jpg" by Vyacheslav Argenberg (CC BY 4.0)
- andaman: "Cellular Jail, Andaman, Port Blair, India.jpg" by Harvinder Chandigarh (CC BY-SA 4.0)
- andaman: "Shaheed Island, Andaman Islands, Tropical beach.jpg" by Vyacheslav Argenberg (CC BY 4.0)
- indore-ujjain: "Mahakaleshwar Temple, Ujjain.jpg" by Ashverse (CC BY-SA 4.0)
- indore-ujjain: "Le fleuve Narmada à Omkareshwar temple Madhya Pradesh India.jpg" by Jean-Pierre Dalbéra (CC BY 2.0)
- indore-ujjain: "Rajwada Palace, Indore.jpg" by Bernard Gagnon (CC BY-SA 3.0)
- vaishno-devi: "Shri Mata Vaishno Devi Bhawan, Katra Jammu & Kashmir INDIA.jpg" by KDhruv406 (CC BY 4.0)
- vaishno-devi: "Hamandir Sahib (Golden Temple).jpg" by This picture has been taken by Oleg Yunakov. Contact e-mail: (CC BY-SA 3.0)
- vaishno-devi: "Attari - Wagah border.jpg" by Eclicks by Bunny (CC BY-SA 4.0)
- kamakhya: "Kamakhya Temple, Guwahati.jpg" by Kunal Dalui (CC BY-SA 3.0)
- kamakhya: "Peacock Island or Umananda Island in the Brahmaputra River in Guwahati 12.jpg" by Pinakpani (CC BY 4.0)
- kamakhya: "Sunset from the bank of Brahmaputra.jpg" by Srabanti.basak (CC BY-SA 4.0)
- puri-konark: "Wheel engraved in the 13th century built Konark Sun Temple in Orissa, India.jpg" by Joydeep (CC BY-SA 4.0)
- puri-konark: "Lord Jagannath temple at night.jpg" by Kalyanpuranand (CC BY-SA 4.0)
- puri-konark: "Decorated one-humped Camel, Camelus dromedarius, at Puri Sea Beach, Odisha, India.jpg" by Joydeep Chakraborty (CC BY-SA 4.0)
- ashtavinayak: "Ballaleshwar Pali Chamber.jpg" by Pradeep717 (CC BY-SA 4.0)
- dwarka-somnath: "Statue of Unity358.jpg" by Prasad dhage (CC BY-SA 4.0)
- dwarka-somnath: "N-GJ-126 Dwarkadhish Temple, Dwarka Flag Hoisting.jpg" by MADHURANTHAKAN JAGADEESAN (CC BY-SA 4.0)
- dwarka-somnath: "Shree Somnath Temple.jpg" by Prime Minister's Office (GODL-India)
- akkalkot: "Pandurang vitthal Temple, Pandharpur, Maharashtra 01.jpg" by A.Murali (CC0)
- akkalkot: "Shri Swami Samarth.jpg" by Ameyadhamankar (CC BY-SA 3.0)
- akkalkot: "Taleju Bhawani Hanumandhoka Durbar Square Kathmandu Nepal Rajesh Dhungnaa (3).jpg" by Rajesh Dhungana (CC BY-SA 4.0)
- char-dham: "A map showing the Panch Kedar Hindu Tirtha sites, Uttarakhand India.jpg" by Ms Sarah Welch (CC BY 4.0)
- char-dham: "Badrinath Temple, Uttarakhand (Photo- Vishwanath Negi).jpg" by Vishwanath Negi (CC BY 4.0)
- char-dham: "Bhagirathi River at Gangotri WTK20150915-IMG 2711.jpg" by Asish Das75 (CC BY-SA 4.0)
- delhi-agra: "Taj Mahal, Agra, India edit2.jpg" by Yann; edited by King of Hearts (CC BY-SA 4.0)
- delhi-agra: "Tomb of Humayun, Delhi.jpg" by Muhammad Mahdi Karim (GFDL 1.2)
- delhi-agra: "Vrindavan Prem Mandir 4.jpg" by Apurba Biswas (CC BY-SA 4.0)
- rameshwaram: "Ramanathaswamy Temple corridor 01.jpg" by Rangan Datta Wiki (CC BY-SA 4.0)
- rameshwaram: "New Pamban Bridge Rameswaram 2024.jpg" by Vijaya nanthini (CC0)
- rameshwaram: "Vivekananda Rock Memorial, Kanyakumari, India 2.jpg" by Mr. Debapriya Hore (CC BY-SA 4.0)
- mysore-ooty: "Illuminated Mysore palace at night.JPG" by Subhashish Panigrahi (CC BY-SA 3.0)
- mysore-ooty: "Brindavan Garden Mysore fountain2.JPG" by Ezhuttukari at Malayalam Wikipedia (Public domain)
- mysore-ooty: "Tea Monarch Aramby Ooty Nilgiris Mar21 A7C 00293.jpg" by Timothy A. Gonsalves (CC BY-SA 4.0)
- hyderabad: "Minaret of charminar 12032012.jpg" by Joydeep (CC BY-SA 3.0)
- hyderabad: "Golconda Fort and Hyderabad city.jpg" by iMahesh (CC BY-SA 4.0)
- hyderabad: "Sculpture Ramoji 17 03 2012.JPG" by Joydeep (CC BY-SA 3.0)
- gokarna: "Murudeshwar-Shiva-Statue.jpg" by Prasannabanwat (CC BY-SA 4.0)
- gokarna: "PXL 20260103 101009613 People and Beach Om Beach Gokarna, Karnataka 13.jpg" by Sourabh.biswas003 (CC BY-SA 4.0)
- gokarna: "PXL 20260103 101009613 People and Beach Om Beach Gokarna, Karnataka 20.jpg" by Sourabh.biswas003 (CC BY-SA 4.0)
- hampi: "Iconic Stone Chariot @ Vittala Temple, Hampi, Karnataka.jpg" by Ram Nagesh Thota (CC BY-SA 4.0)
- hampi: "Complex of Virupaksha Temple, Hampi (04).jpg" by iMahesh (CC BY-SA 4.0)
- hampi: "A-cave-temple-at-badami.JPG" by Rajeshodayanchal (CC BY-SA 3.0)
- char-dham (replacement): "Majestic and Serene Kedarnath temple.jpg" via Wikimedia Commons
- ashtavinayak (supplement): "Ranjangaon Ganpati Mandir.jpg", "Siddhi Vinayak at Siddhatek.jpg" via Wikimedia Commons
