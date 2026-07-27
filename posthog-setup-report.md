# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into this Next.js 16.2.1 App Router portfolio site. PostHog is initialized via `instrumentation-client.ts` (the recommended approach for Next.js 15.3+), with a reverse proxy configured in `next.config.ts` to route events through `/ingest` and avoid ad blockers. Eight custom events are tracked across seven files, covering contact form submissions, blog article clicks, social link engagement, product visits, theme toggling, and mobile menu usage. Environment variables are stored in `.env.local` and never hardcoded in source files.

| Event name | Description | File |
|---|---|---|
| `contact_form_submitted` | User submitted the contact form, opening the email client with prefilled content. | `components/contact-form.tsx` |
| `blog_post_read_article_clicked` | User clicked the 'Read article' link on a blog preview card to open a post. | `components/blog-preview-card.tsx` |
| `social_link_clicked` | User clicked a social media link in the site footer. | `components/site-footer.tsx` |
| `contact_social_link_clicked` | User clicked a social link from the contact page social links section. | `components/contact-social-links.tsx` |
| `product_visited` | User clicked on a live product link on the products page. | `components/product-link.tsx` |
| `theme_toggled` | User toggled the color theme between light and dark mode. | `components/theme-toggle.tsx` |
| `mobile_menu_toggled` | User opened or closed the mobile navigation menu. | `components/site-header.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics (wizard) — Dashboard](https://us.posthog.com/project/530341/dashboard/1911372)
- [Contact form submissions (wizard)](https://us.posthog.com/project/530341/insights/5uaN7Du1)
- [Blog post clicks by post (wizard)](https://us.posthog.com/project/530341/insights/hgbfXLKe)
- [Social link clicks by platform (wizard)](https://us.posthog.com/project/530341/insights/JbcoItTl)
- [Product visits (wizard)](https://us.posthog.com/project/530341/insights/RBfoRLAj)
- [Blog → Contact conversion funnel (wizard)](https://us.posthog.com/project/530341/insights/bWkR6FrK)

## Verify before merging

- [ ] Run a full production build (the wizard only verified the files it touched) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` to `.env.example` and any monorepo/bootstrap scripts so collaborators know what to set.
- [ ] Wire source-map upload (`posthog-cli sourcemap` or your bundler's upload step) into CI so production stack traces de-minify.

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
