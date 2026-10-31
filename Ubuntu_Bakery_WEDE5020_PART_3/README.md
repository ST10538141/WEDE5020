# Ubuntu Bakery Website — WEDE5020 Part 3

## 1. Project overview

Ubuntu Bakery is a **fictional** small bakery established in 2021 in Limpopo, South Africa. This project continues the Part 2 website and adds JavaScript interactivity, search engine optimisation (SEO), improved HTML forms, JavaScript validation, and deployment preparation.

The website contains five pages:

1. Home — `index.html`
2. About Us — `about.html`
3. Products — `products.html`
4. Enquiry — `enquiry.html`
5. Contact — `contact.html`

The existing Ubuntu Bakery colours, images and page structure have been retained. The project remains a beginner-level HTML, CSS and JavaScript website.

## 2. Technologies and project structure

- HTML5 — semantic page structure and forms.
- CSS3 — layout, responsive design, transitions and visual styling.
- JavaScript — DOM manipulation, product filtering, lightbox, FAQ accordion and form validation.
- Leaflet and OpenStreetMap — interactive regional map on the Contact page (loaded from external CDN; internet connection required).
- Git and GitHub — version control and remote repository.

```text
Ubuntu_Bakery_WEDE5020_Part2/
├── index.html
├── about.html
├── products.html
├── enquiry.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── bread-600.png
│   ├── bread-1200.png
│   ├── cupcakes-600.png
│   ├── cupcakes-1200.png
│   ├── cake-600.png
│   ├── cake-1200.png
│   └── original SVG and image assets
├── robots.txt
├── sitemap.xml
└── README.md
```

## 3. Part 2 feedback and improvements carried into Part 3

The Part 2 feedback areas identified for improvement were responsive design, pseudo-class use, GitHub commits, README documentation, changelog detail and references. The following work addresses those areas:

- **Responsive layout:** retained the desktop/tablet/mobile CSS breakpoints and added responsive layouts for the product controls and map.
- **Responsive navigation and images:** retained the flexible navigation and responsive product images; added a skip link and clearer image interaction.
- **Pseudo-classes and interaction:** retained hover/focus/active states and added focusable controls, image hover feedback and reduced-motion support.
- **README and changelog:** this file now records the Part 3 functionality, testing plan, limitations and file-by-file changes.
- **References:** added technical references in Section 13. Add any additional sources actually consulted during your own work.
- **GitHub commits:** use the suggested descriptive commit messages in Section 12 and push the finished changes to the repository.

No lecturer comments beyond the feedback categories available to the student have been invented.

## 4. JavaScript functionality

All interactive behaviour is in the external file `js/script.js`, which is loaded with `defer` on each page.

### 4.1 Home page FAQ accordion

The Home page has three frequently asked questions. When a user selects a question, JavaScript changes its `aria-expanded` value and displays the answer. Opening another question closes the previous answer. This uses DOM selection, event listeners and the `hidden` property.

### 4.2 Products search, filter and sort

The Products page contains:

- A text search field that checks product card text.
- A category filter for bread, cupcakes and cakes.
- A sort control for featured order, price low-to-high and price high-to-low.
- A live count showing how many products are displayed.

JavaScript reads the control values, checks each product card and updates the DOM. Product prices and categories are stored in `data-*` attributes in the HTML. The displayed prices are illustrative project values, not verified commercial prices.

### 4.3 Product image lightbox

Selecting a product image opens it in a larger overlay. The close button, clicking the dark background and the Escape key close the overlay. The enlarged image receives the original image's alternative text. This demonstrates an image gallery/lightbox interaction without adding another image library.

### 4.4 Interactive map

The Contact page loads Leaflet and OpenStreetMap tiles and displays an interactive map centred on a broad area of Limpopo. A circle and popup identify the area as illustrative only. The bakery is fictional and the project materials do not provide a verified street address, so the map does **not** claim to show the exact bakery location. The map requires an internet connection. If the external map library cannot load, a fallback message is displayed.

### 4.5 CSS transitions and animation

The shared stylesheet retains button transitions and adds a small image hover transition. A `prefers-reduced-motion` media query reduces motion for visitors who request it in their device settings.

## 5. HTML forms and JavaScript validation

Both forms use associated labels, suitable input types, required fields, length limits, browser validation and JavaScript feedback. The forms use `novalidate` so the JavaScript can display the browser's validation report and its own explanatory message.

### 5.1 Enquiry form — `enquiry.html`

The enquiry form collects:

- Full name and email address.
- Phone number with a simple pattern check.
- Enquiry type: product, custom cake, bulk order, volunteer, sponsorship or general enquiry.
- Product of interest.
- Optional required date.
- Message between 10 and 500 characters.

The script gives a response that changes according to the enquiry type. For example, custom cake enquiries are reminded that the design, size and date must be confirmed; bulk orders require confirmation of quantity, price and preparation time. A product link can preselect the product in the enquiry form using a query string.

### 5.2 Contact form — `contact.html`

The contact form collects name, email, optional phone number, message type and a message between 10 and 1,000 characters. JavaScript validates the form and compiles the submitted information into a `mailto:` email draft.

### 5.3 Important form limitation

This is a static front-end student project. The forms do **not** send information to a server or store submissions in a database. They open the visitor's default email application using a `mailto:` link. The current recipient is `info@ubuntubakery.example`, which uses the reserved `.example` domain and is a placeholder, not a working business mailbox. Before a real deployment, replace this address in `js/script.js` with an email address that the project owner controls. The visitor must still press Send in their email application. Do not claim that an enquiry has been delivered automatically.

The website is a fictional academic project, so the contact details and product prices are illustrative and must not be treated as verified business information.

## 6. Search engine optimisation (SEO)

SEO changes have been applied as follows:

- Each HTML page has its own descriptive `<title>`.
- Each page has its own meta description instead of repeating one description on every page.
- Pages use a logical heading hierarchy, with one main `h1` and supporting `h2`/`h3` headings.
- Product images have descriptive `alt` text.
- Image filenames describe the image subject, for example `bread-600.png` and `cake-1200.png`.
- Navigation and relevant page content use internal links between Home, Products, Enquiry and Contact.
- The site uses descriptive filenames and simple `.html` page paths.
- The viewport meta tag and responsive stylesheet support mobile devices.
- `robots.txt` and `sitemap.xml` have been added.

### 6.1 Keyword choices

The page titles and descriptions use natural phrases relevant to the website topic, including **Ubuntu Bakery**, **fresh bread**, **cupcakes**, **custom cakes**, **bakery products**, **product enquiry** and **Limpopo, South Africa**. These are project keyword choices, not results from a paid keyword-research tool. Avoid repeating keywords unnaturally in page content.

### 6.2 Off-page, local SEO and security

The bakery is fictional and has no verified public address or official social media profiles. For that reason, this project does not create a Google Business Profile, claim customer reviews, invent backlinks or publish fake social accounts. If this becomes a real business, the owner can add accurate business listings, request genuine links from relevant community organisations, and share the website through official social media pages. Use HTTPS hosting and keep software/dependencies updated. The Leaflet library is loaded from a public CDN and requires internet access.

### 6.3 Sitemap deployment note

The `sitemap.xml` and `robots.txt` files currently contain a clearly marked placeholder URL: `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`. After publishing, replace the placeholder in **both** files with the real public GitHub Pages base URL, keeping the page paths consistent. Do not submit the placeholder as a live sitemap.

## 7. Responsive design and accessibility

Part 2 desktop, tablet and mobile breakpoints remain in `css/style.css`. Part 3 adds:

- Responsive product search/filter controls.
- Responsive map height.
- A skip-to-content link for keyboard users.
- Visible focus styles inherited from Part 2.
- `aria-live` feedback for product counts and form messages.
- `aria-expanded` on FAQ controls and an accessible lightbox dialog label.
- Alternative text on product images.
- Reduced-motion support.

Test the website at desktop, tablet and mobile widths and check that no horizontal scrolling is introduced.

## 8. File-by-file Part 3 changes

### `index.html`
- Added page-specific title and meta description.
- Added a skip link and deferred JavaScript reference.
- Added a keyboard-operable FAQ accordion.
- Retained the bakery introduction and three feature cards.

### `about.html`
- Added page-specific title and meta description.
- Added a skip link, deferred JavaScript reference and internal links to Products and Enquiry.
- Retained the fictional bakery background, mission, vision and customer information.

### `products.html`
- Added page-specific title and meta description.
- Added search, category filter and price sorting controls.
- Added product data attributes for JavaScript filtering and sorting.
- Made product images open in a lightbox.
- Retained responsive image sources, dimensions and alternative text.

### `enquiry.html`
- Expanded the form with enquiry type, product, optional date, phone and message length validation.
- Added dynamic responses for different enquiry types.
- Added email-draft preparation and query-string product preselection.

### `contact.html`
- Added a contact form with message type and validation.
- Added email-draft preparation.
- Added an illustrative interactive map of the Limpopo region without inventing an exact business address.

### `css/style.css`
- Retained Part 2 colours, typography, Flexbox, Grid and responsive breakpoints.
- Added FAQ, product filter, lightbox and map styling.
- Added skip-link styling, hidden-state handling and reduced-motion support.

### `js/script.js`
- Added FAQ accordion behaviour.
- Added product search, category filtering and sorting.
- Added image lightbox open/close behaviour.
- Added interactive map setup and fallback message.
- Added reusable form validation and form-specific email draft preparation.

### `robots.txt` and `sitemap.xml`
- Added files to support search engine crawling and page discovery.
- The deployment URL must be updated after GitHub Pages is configured (see Section 6.3).

## 9. Testing checklist

Complete these tests in a browser before submitting. Record the actual result and date; do not mark a test as passed until you have performed it.

| Test | Expected result | Actual result/date |
|---|---|---|
| Open each of the five HTML pages | Each page loads without a missing-file error | To be completed |
| Use all navigation links | Correct page opens | To be completed |
| Resize to desktop, tablet and mobile | Layout adapts without horizontal scrolling | To be completed |
| Open Home FAQ questions | Answer expands; other answer closes | To be completed |
| Search for a product | Only matching cards remain visible | To be completed |
| Filter by category | Only selected category appears | To be completed |
| Sort products | Prices appear in selected order | To be completed |
| Select a product image | Lightbox opens and closes using button/Escape | To be completed |
| Submit empty enquiry form | Validation prevents submission and explains errors | To be completed |
| Submit valid enquiry form | Relevant response appears and email draft is prepared | To be completed |
| Submit empty contact form | Validation prevents email draft | To be completed |
| Submit valid contact form | Email draft contains entered details | To be completed |
| Open Contact page online | Regional map loads or fallback appears | To be completed |
| Check page titles and descriptions | Each page has unique metadata | To be completed |
| Check `robots.txt` and `sitemap.xml` after deployment | Sitemap uses the real public site URL | To be completed |

### Screenshot evidence to add

Add your own screenshots after testing:

1. Home page with FAQ interaction.
2. Products page with search/filter/sort.
3. Products page with lightbox open.
4. Enquiry form showing validation and a valid response.
5. Contact page showing the form and map.
6. Desktop, tablet and mobile layouts.

Screenshots are not included in this ZIP because they must show your actual browser testing.

## 10. Deployment

A free option is **GitHub Pages**. The public repository is:

`https://github.com/ST10538141/WEDE5020`

Suggested deployment steps:

1. Push the updated website files to the repository.
2. Open the repository on GitHub and select **Settings**.
3. Open **Pages** under the repository settings.
4. Choose **Deploy from a branch**.
5. Select the branch containing the website (usually `main`) and the folder containing `index.html` (usually `/root` if the website files are at repository root).
6. Save and wait for GitHub Pages to publish.
7. Open the generated public URL and test all five pages and assets.
8. Update the placeholder URLs in `robots.txt` and `sitemap.xml` to the real published base URL, then commit and push again.

If the project files are kept inside a subfolder such as `Ubuntu_Bakery_Website`, configure Pages to publish from a supported folder/branch arrangement or move/copy the website files to the selected publishing root. The Pages URL depends on the repository and publishing folder, so confirm it in GitHub rather than guessing.

## 11. GitHub repository and commits

Repository: https://github.com/ST10538141/WEDE5020

Use small commits with clear messages. Suggested Part 3 commit messages:

- `Add unique SEO metadata to all website pages`
- `Add FAQ accordion interaction to home page`
- `Add product search filter and sorting`
- `Add product image lightbox gallery`
- `Add enquiry form validation and response messages`
- `Add contact form and email draft functionality`
- `Add illustrative interactive Limpopo map`
- `Add SEO robots and sitemap files`
- `Update README with Part 3 implementation and changelog`

After committing, push the changes to GitHub and confirm that the latest files appear in the remote repository. Only report commits that you have actually made.

## 12. Detailed changelog

### Part 2 feedback addressed in Part 3

- **Responsive design:** preserved the Part 2 tablet/mobile breakpoints and extended responsive styling to new product controls and map content.
- **Responsive navigation:** retained flexible navigation and added a skip-to-content link for keyboard navigation.
- **Responsive images:** retained responsive product image sources and added clickable lightbox presentation.
- **Pseudo-classes and interaction:** retained `:hover`, `:focus`, `:focus-visible` and `:active`; added interactive control states and reduced-motion support.
- **README:** replaced the Part 2-only explanation with a complete Part 3 implementation guide, testing checklist, deployment guidance and limitations.
- **Changelog:** recorded each Part 3 file change and the earlier feedback areas addressed.
- **References:** added current technical documentation links in Section 13.
- **GitHub commits:** provided descriptive commit messages; commits still need to be made and pushed by the repository owner.

### Part 2 to Part 3 file changes

| File | Change made |
|---|---|
| `index.html` | Unique SEO metadata; skip link; deferred JavaScript; FAQ accordion markup |
| `about.html` | Unique SEO metadata; skip link; internal links; deferred JavaScript |
| `products.html` | Unique SEO metadata; search/filter/sort controls; product data attributes; lightbox markup |
| `enquiry.html` | Expanded enquiry fields; required validation attributes; product/date fields; live feedback |
| `contact.html` | Contact form; validation fields; email draft interface; illustrative Leaflet map |
| `css/style.css` | FAQ, filter controls, lightbox, map, accessibility and reduced-motion styles |
| `js/script.js` | FAQ, filtering, sorting, lightbox, map, form validation and mailto functionality |
| `robots.txt` | Added crawler instructions and sitemap reference placeholder |
| `sitemap.xml` | Added the five website page URLs as deployment placeholders |
| `README.md` | Rewritten to document Part 3 features, testing, deployment, limitations, changelog and references |

## 13. References

The following official documentation was used as a technical guide. Add any other sources you personally consult while completing and testing the project.

- MDN Web Docs. (n.d.). *HTML forms*. https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms
- MDN Web Docs. (n.d.). *Constraint validation*. https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation
- MDN Web Docs. (n.d.). *Document Object Model (DOM)*. https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
- MDN Web Docs. (n.d.). *Using the Fetch API*. https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
- Google Search Central. (n.d.). *SEO Starter Guide*. https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Google Search Central. (n.d.). *Build and submit a sitemap*. https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- Leaflet. (n.d.). *Leaflet quick start guide*. https://leafletjs.com/examples/quick-start/
- OpenStreetMap. (n.d.). *Copyright and attribution*. https://www.openstreetmap.org/copyright
- GitHub Docs. (n.d.). *What is GitHub Pages?*. https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
- W3C. (n.d.). *Web Content Accessibility Guidelines (WCAG) 2.2*. https://www.w3.org/TR/WCAG22/

## 14. Final submission checklist

- [ ] Test all five pages in a browser.
- [ ] Test desktop, tablet and mobile screen sizes.
- [ ] Test all JavaScript interactions and both forms.
- [ ] Replace the placeholder `.example` email if a working email address is supplied for the project.
- [ ] Configure GitHub Pages and test the public URL.
- [ ] Replace placeholder sitemap URLs with the real deployed URL.
- [ ] Add genuine screenshots of your own testing.
- [ ] Make descriptive Git commits and push to the remote repository.
- [ ] Confirm the GitHub repository link and required HTML files are ready for LMS submission.

**Academic note:** Review and understand the code before submitting. Be prepared to explain how the JavaScript events, DOM changes, form validation, SEO metadata and responsive CSS work. This README documents implementation, but your own testing, screenshots, commits and final deployment still need to be completed.
