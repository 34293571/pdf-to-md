# PDF a MD Web

Next.js frontend for [pdfamd.com](https://pdfamd.com).

## Scripts

```bash
npm run dev      # http://localhost:3000
npm run build    # production build (webpack)
npm run start    # serve production build
```

## Environment

Copy `.env.example` to `.env.local`:

```bash
NEXT_PUBLIC_CONVERT_API_URL=http://localhost:8000
```

The browser uploads PDFs **directly** to the Render API (not through Vercel), avoiding the 4.5MB serverless body limit.

## Routes

| Path | Description |
|------|-------------|
| `/` | English landing + converter |
| `/es` | Spanish landing + converter |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Service |
