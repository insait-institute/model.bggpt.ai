# models.bggpt.ai

The website for INSAIT's BgGPT models, live at <https://models.bggpt.ai>. It has the model overview (home page), the API docs (`/docs`), research (`/research`) and the release blog posts, in Bulgarian and English.

It is built with [Astro](https://astro.build) 5 on the [AstroWind](https://github.com/arthelokyo/astrowind) template, with Tailwind CSS. The AstroWind integration is vendored in `vendor/integration` and enabled in `astro.config.ts`. The output is a fully static site.

## Local development

Requires Node.js 18.17+, 20.3+ or 22.

```bash
npm ci
npm run dev       # dev server on http://localhost:4321
npm run build     # static site into dist/
npm run preview   # serve dist/ locally
npm run check     # astro check, eslint and prettier
npm run fix       # eslint --fix and prettier -w
```

## Where things live

| Path                              | What                                                                                                     |
| --------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `src/config.yaml`                 | AstroWind site settings: name, URL, metadata, blog options                                               |
| `src/pages/`                      | `index.astro` (home), `docs.astro` (API docs), `research.astro`, `[...blog]/` (blog routes), `404.astro` |
| `src/data/post/`                  | Blog posts as MDX, one file per language (`*-bg.mdx`, `*-en.mdx`)                                        |
| `src/content/config.ts`           | Blog collection schema (loads `src/data/post`)                                                           |
| `src/i18n/translations.ts`        | UI strings in Bulgarian and English                                                                      |
| `src/navigation.ts`               | Header and footer links                                                                                  |
| `src/components/`, `src/layouts/` | AstroWind components and layouts, customised for BgGPT                                                   |
| `src/assets/`, `public/`          | Images, favicons and static files; `public/CNAME` holds the custom domain                                |
| `vendor/integration/`             | The vendored AstroWind integration that loads `src/config.yaml`                                          |

The API docs describe <https://api.bggpt.ai>. When the models exposed there change, update `src/pages/docs.astro` to match `kong_models` in `bggpt-infra`.

## Deployment

Pushing to `master` deploys the site. `.github/workflows/deploy.yml` builds it with Node 20 and publishes `dist/` to GitHub Pages. The custom domain comes from `public/CNAME`. DNS goes through Cloudflare, which also serves HTTPS. There is no server to manage.

`.github/workflows/actions.yaml` is AstroWind's CI: it builds on Node 18, 20 and 22 and runs `npm run check`. Its trigger is set to `main`, while this repo uses `master`, so it does not run at the moment.
