# Vercel Deployment TODO for Personal Portfolio

## 1. Fix local build errors [COMPLETE]
- [x] App.js: Remove unused 'logo' import
- [ ] Banner.js: Remove unused 'index', fix useEffect deps
- [x] Contact.js: == → ===
- [ ] Skills.js: Remove unused arrow1/arrow2 imports, fix redundant alt

## 2. Create Vercel API Routes [COMPLETE - api/contact.js, api/subscribe.js]
- api/contact.js
- api/subscribe.js

## 3. Update vercel.json [COMPLETE - added functions build + rewrites /contact -> /api/contact.js, /subscribe -> /api/subscribe.js]

## 4. Frontend API URL fixes [COMPLETE - no changes needed (rewrites in vercel.json)]

## 5. Handle server.js [COMPLETE - added deprecation comment]

## 6. Git commit & Vercel CLI deploy [READY]&#10;- Run: git add . && git commit -m \"Vercel deploy setup\" && git push origin main&#10;- npm i -g vercel&#10;- vercel login&#10;- vercel --prod

## 7. Test forms & env vars [READY]&#10;- Local: npx vercel dev running, test forms (use .env EMAIL vars)&#10;- Prod: Vercel dashboard > Env vars EMAIL_USER/EMAIL_PASS (Gmail app pass)&#10;- Redeploy & test on live URL
