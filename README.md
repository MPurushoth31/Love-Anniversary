# 💍 Sandhiya & Me · 10 Years

Oru anniversary website. Photos, videos, songs ellam indha folder kulla irukku. GitHub Pages la free ah host pannalaam.

## 1. GitHub la host panradhu (10 nimisham)

1. github.com la **New repository** → name: `sandhiya-10-years` → Create.
2. Indha folder content ellaathayum upload pannunga (index.html, data, photos, songs, videos, tools, .github).
   - 100+ photos irukkaradhala web upload (100 files limit) sariya varadhu. **GitHub Desktop** use pannunga (add folder → Commit → Push), illa terminal:
     ```
     git init
     git add .
     git commit -m "first version"
     git branch -M main
     git remote add origin https://github.com/<unga-username>/sandhiya-10-years.git
     git push -u origin main
     ```
3. Repo → **Settings → Pages → Build and deployment → Source: Deploy from a branch → main / (root) → Save**.
4. 1–2 nimisham la link ready: `https://<unga-username>.github.io/sandhiya-10-years/`

> Local la paakka: folder kulla terminal open panni `python -m http.server 8000` → browser la `http://localhost:8000`

## 2. Folder structure

```text
index.html
css/                    styles
js/app.js               website interactions
data/
  journey.js            year stories and the two featured photos for each chapter
  journey-photos.js     generated index of every photo in photos/journey/
  moments.js            generated year-wise photo/caption list
  surprise.js           generated Surprise Me photo deck
  photo-assets.js       generated list of original photos that physically exist
  songs.js              generated music list
photos/
  journey/              original journey photos; flat year-prefixed filenames work
    2016_1.jpg           example: main story photo 1
    2021b_1.jpg          example: first 2021 chapter
    2021p_1.jpg          example: December 7 chapter
    thaali.jpg           yearless photo shown in a separate special strip
  moments/              extra memories; flat year + mood filenames work
    2017_happy_01.jpg    example: happy memory
    2023_funny_01.jpg    example: funny memory
    2025_unforget_01.jpg example: unforgettable memory
  surprise/             Surprise Me images; any filenames/nested folders
  (no thumbs/ folder)
videos/                 proposal, bench, mandapam, maalai, thaali, kiss
songs/                  scene-wise music folders
tools/build_manifest.py rebuilds the photo and song indexes
.github/workflows/      updates the indexes after photos/songs are pushed
```

**Important:** Keep your original photos inside the three folders above. The website uses each original file directly. It does not need, create, or request a `photos/thumbs/` folder.

## 3. Add photos and make them appear

1. Open the **existing project `photos` folder** and copy/merge your three folders into it. The final paths must be `project/photos/journey/`, `project/photos/moments/`, and `project/photos/surprise/`. Do not create `photos/photos/` by copying the outer folder inside itself. **Your current flat folder layout is supported; year-wise subfolders are optional.**
   - `photos/journey/` — main story photos. The scanner recognizes names such as `2016_1`, `2016_2`, `2017_1`, `2021b_1`, and `2021p_2`. The `b` and `p` suffixes remain part of the filename, while the archive assigns both to 2021. Yearless Journey files such as `thaali.jpg` remain in the Journey folder but are not inserted into the Moments-only archive.
   - `photos/moments/` — extra memories. The scanner recognizes `2017_funny_01`, `2017_happy_01`, `2023_unforget_01`, and similar names. Mood values supported: `happy`, `funny`, and `unforget`. Nested year/mood folders are optional; the year and mood can also be detected from names. If mood is missing, it defaults to Happy.
   - `photos/surprise/` — images used by the Surprise Me card deck. Filenames can be anything, including images in nested folders.
   - Windows may hide file extensions. If two files have the same visible filename but different extensions (for example, `2019_happy_01.jpg` and `2019_happy_01.webp`), both originals are kept as separate files and get unique internal IDs. Rename one if they are actually different memories and need distinct captions.
2. Supported originals: `.webp`, `.jpg`, `.jpeg`, `.png`, and `.avif`. Optional captions: create `captions.txt` in the relevant folder and add one line per image, for example `2026_happy_01 – Namba first trip 🌴`.
3. **After all original photos have been copied**, double-click `REBUILD_PHOTO_INDEX.cmd`, or open CMD in the project folder and run:
   ```bash
   py tools/build_manifest.py
   ```
   The script scans all three subfolders recursively and updates the photo/song indexes. It uses the original image files directly. It never creates a `thumbs` folder. Existing captions/year metadata for photos not yet present in a partial project copy are retained, so running the builder early will not erase those descriptions.
4. Run the local website using `py -m http.server 8000`, then open `http://localhost:8000`.
5. If you use GitHub Pages, commit and push your new photo files. The GitHub Action automatically runs the same manifest builder.

No manual thumbnail creation is needed. Portrait, landscape, and square photos are displayed using their real dimensions. For best loading speed, use optimized original images (WebP recommended), but keep them in the same three folders.

## 4. Songs 🎵

`songs/` kulla scene-wise folders irukku. **Andha folder la .mp3 pottaa podhum**, page thaanaa play pannum.

| Folder | Eppo play aagum |
|---|---|
| `songs/default/` | Start la irundhu play aagum. Vera song illaadha idathula idhu thodarum. (ippo: `love_theme.mp3`, ennoda create panna chinna love music. Venumna delete pannitu unga song podunga) |
| `songs/2016/` … `songs/2026/` | Andha year photos scroll panna cross-fade aagi unga song varum |
| `songs/dec7/` | Heartbeat scene + December 7th photos |
| `songs/sorry/` | Emotional / sorry section |
| `songs/finale/` | Ring question + Finally |
| `songs/wedding/` | Mandapam, maalai, thaali |

- Oru folder la pala songs irundha ovvonnaa (alphabetical) odum. `01_...mp3`, `02_...mp3` nu peyar vaikalaam.
- Folder empty na default music thodarum. Videos odum bodhu music thaanaa pause aagi, apram resume aagum.
- Mela right corner la ♪ button: music on/off.
- Tamil romantic song suggestions (scene by scene): `songs/PLAYLIST.md`
- Song file ovvonnum 25 MB kulla vaikkunga (mp3 128 kbps pothum).

## 5. Text / password maathanum na

- Year stories: `data/journey.js`
- Password (Dec 7, 2021 = `071221`): `js/app.js` la `const PASS="071221"` search pannunga.
- Quiz / dialogue / game text: `js/app.js` la `GAME DATA` section.
- Colours / fonts / animation speed: `css/style.css`

## 6. Privacy ⚠️

GitHub Pages site **public**. Link therinja yaarum paakkalaam, repo public na photos kooda. Password screen vera onnum security illa, appearance mattum.
Private ah vaikkanum na: private repo + (GitHub Pro la Pages kidaikkum), illa **Netlify / Cloudflare Pages** la password protection use pannunga. Sandhiya ku mattum link anuppunga.

## 7. Link preview + install as app (v4)

1. `index.html` top la `YOUR-USERNAME` / `YOUR-REPO` nu 3 idathula irukku (og:image, og:url, twitter:image). Unga GitHub Pages link ah maathunga:
   `https://<username>.github.io/<repo>/`  →  WhatsApp la link anuppina photo + "10 Years · 2 Breakups · 1 Forever" card theriyum.
   (WhatsApp cache pannum, maathina apram pudhu link / `?v=2` serthu anuppunga.)
2. `assets/og.jpg` = preview image (1200×630). Vera photos venumna adhai replace pannunga.
3. Phone la open panni **Add to Home Screen** (iPhone: Share → Add to Home Screen; Android: finale la "📲 Install as app"). App maari open aagum, photos cache aagum.
4. Site update panna: `index.html` la `?v=4` ah `?v=5` nu maathunga, `sw.js` la `const V='v4'` ah `'v5'` nu maathunga. Appo ellaarukkum pudhu version varum.
5. Weak phone la animations (grain, bokeh, parallax) thaanaa kuraiyum ("lite mode").
6. New photos add pannina GitHub Action automatic ah photo manifests update pannum. Local la `python tools/build_manifest.py` run pannunga. `photos/thumbs/` thevai illa; create aagadhu.

## 8. Year Memory Archive + Season 2 + Personal Voice Message

- The old auto-playing Decade Reel has been removed completely.
- After **Then & Now**, the **Memory Archive** gathers each year's main-story photos and its extra moments from `data/journey.js` and `data/moments.js`.
- Select any year from the horizontal 2016–2026 timeline. The gallery updates in place; on small screens, swipe the year strip horizontally.
- Portrait, landscape, and square photos keep their original proportions. The gallery does not crop faces or stretch photos. Tap a photo to open the existing full-screen viewer.
- The Season 2 anniversary end card remains, including the future personal voice-message player.
- To add the voice message later, save your recording as `audio/voice-message.mp3`. The voice player will enable itself when that file exists. A Tanglish recording script is included as `VOICE_MESSAGE_SCRIPT_TANGLISH.md` and `.txt`.

### Original photos still needed

This project copy currently contains only these two original source photos:

- `photos/journey/2017_2.webp`
- `photos/journey/2018_1.webp`

Copy/merge the contents of your existing `journey`, `moments`, and `surprise` folders into the matching folders under the project's existing `photos/` directory. The final path must be `project/photos/journey/...` (not `project/photos/photos/journey/...`). Then run `py tools/build_manifest.py` (or push to GitHub so the workflow rebuilds the indexes). The site uses the originals directly; no thumbnail files are expected.

Do not rename the original files unless you also update the matching entry in `data/journey.js` or `data/moments.js`.


## Runtime recovery and archive stability fix (v6)

- Restored the original game, voice-message, audio synthesis, fireworks, and wedding animation helpers that were inadvertently dropped during the previous reel-to-archive replacement.
- Restored the shared `ac()` Web Audio initializer used by the Start button and existing sound effects. Audio now fails softly when a browser blocks Web Audio; the experience continues without sound instead of getting stuck.
- Added a guarded Web Audio initializer. If a browser blocks or does not support Web Audio, the Start button still opens the experience; visual content and navigation continue without synthesized sound.
- The memory archive attaches image event handlers before assigning image sources, avoids duplicate retries, falls back to a full-size image only when it exists, ignores stale year loads, and leaves a clear placeholder for missing files.
- The photo manifest prevents repeated 404 requests for the many original images that are not in this project copy.
- Updated the service-worker cache version so returning visitors receive this fixed build.


### Photo archive and loading reliability (v7)
- `data/photo-assets.js` contains only original image paths physically present under `photos/journey/`, `photos/moments/`, and `photos/surprise/`, including nested folders.
- `data/journey-photos.js` indexes Journey images for the original story sequence. Journey photos are not mixed into the Moments-only Memory Archive.
- `data/moments.js` is generated from all images under `photos/moments/`. The year must appear in the filename or in a parent year folder (2016–2026); mood can come from the filename or parent folder (`happy`, `funny`, `unforget`).
- `data/surprise.js` is generated from all images under `photos/surprise/`, including nested folders.
- `py tools/build_manifest.py` (or `REBUILD_PHOTO_INDEX.cmd`) rebuilds all photo/song indexes recursively. Run it after merging your original photo files into the three subfolders. GitHub Actions does the same automatically after a push that changes `photos/**` or `songs/**`.
- When a photo has moved from an old flat path into a year/mood subfolder, the builder can match a unique same-name file and carry its existing caption to the new path. Existing captions are preserved unless a `captions.txt` line explicitly replaces them.
- The page uses original images directly. It does not create, depend on, or request `photos/thumbs/`.


### Windows photo filename compatibility (v8)
- The photo indexer accepts the user's actual flat-folder naming conventions: `journey/2016_1`, `journey/2021b_1`, `journey/2021p_2`, and `moments/2017_happy_01`, `moments/2023_funny_01`, `moments/2025_unforget_01`.
- Windows-hidden extensions are handled. Moment IDs include the extension and relative folder path so same-visible-name files do not collide.
- Journey story references automatically resolve to an existing same-stem original when the actual extension differs from the older `.webp` reference (preferred: WebP, JPG, JPEG, PNG, AVIF).
- Yearless Journey files (such as `thaali`) remain in `photos/journey/`, but the separate yearless gallery is no longer part of the website.
- Journey items are naturally sorted so `_2` appears before `_10`.
- No yearless-special gallery manifest is generated. Run `py tools/build_manifest.py` after copying photos. No thumbnails are created or requested.


## V10 archive and mobile layout update

- The visible `assets/og.jpg` anniversary cover is now shown above the archive at a compact responsive size on phones.
- The archive gallery now displays **only** files indexed from `photos/moments/`; Journey photos remain in the original story sections.
- The `OUTSIDE THE TIMELINE / A little extra chapter` section, its runtime renderer, stylesheet, and unused manifest have been removed.
- Mobile view shows the first four Moments photos per year with a `View all` control to expand the complete set. Desktop continues to show all photos. The eleven year selectors fit in a single compact row on phones.
- All 11 year selectors fit in one row on mobile; horizontal swiping of the year selector is no longer required.
- The cold-open polaroid now fades away before its final narration line, preventing text from appearing behind the photo.
- No thumbnail directory is required.

- The end-of-cold-open narration now appears only after the first-photo polaroid has faded away, avoiding the text/photo overlap visible in the previous preview.
- The anniversary cover `assets/og.jpg` is now visible above the archive heading, not just used as link-preview metadata.


## V11 duplicate photo and empty-frame fix

- The photo builder now checks exact file hashes and conservative perceptual hashes (same aspect ratio, pHash distance up to 2) within each source folder. It keeps the earliest year occurrence and the best available original resolution; duplicate copies are excluded from the website index but the original files are not deleted. It does not deduplicate across Journey vs Moments, because those may be intentionally reused in different parts of the story.
- `data/photo-duplicates.json` lists each duplicate group, the kept original, the removed copy, and whether the match was exact or visual.
- `REBUILD_PHOTO_INDEX.cmd` checks for Pillow and attempts to install it if required, then rebuilds the indexes and prints source counts, unique counts, and duplicates removed for each folder.
- The app now renders only photo paths confirmed by the physical `data/photo-assets.js` index. Old metadata can remain in the project for caption recovery, but a missing file can no longer create an empty “Photo not included” frame.
- If an old `.webp` manifest path has multiple real same-name replacements, its metadata migrates to the best actual replacement instead of leaving an extra stale frame.
- Duplicate Journey references are resolved through `data/photo-aliases.js` and a photo already used earlier in the story is not rendered again as another Journey frame.
- Your Journey folder screenshot shows 25 source images including `thaali`; 24 are year-tagged and one is yearless. The yearless `thaali` remains out of the timeline, in keeping with the earlier removal of the separate “Outside the Timeline” section.
- Your Moments folder should be scanned as 132 source images. The real unique count is calculated from the actual files when you run the rebuild; it cannot be inferred accurately from a Windows screenshot alone.

After merging the original photo folders into `photos/journey`, `photos/moments`, and `photos/surprise`, run `REBUILD_PHOTO_INDEX.cmd` once. Then check `data/photo-duplicates.json` for the exact duplicate list and `PHOTO FOLDER AUDIT` output for the final unique counts.
