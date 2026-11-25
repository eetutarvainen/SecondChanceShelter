# User Guide: Managing Website Content

This guide explains how to add, edit and remove content on the Second
Chance Shelter website. The website consists of static HTML files, so
content is edited directly in the files. There is no separate
administration panel or database.

## Website content

| File | Content |
|---|---|
| `index.html` | Home page, introduction, highlights, video and opening hours |
| `adoption.html` | Adoption process and application form |
| `animals.html` | Animal cards |
| `jobs.html` | Open positions and volunteer opportunities |
| `donate.html` | Donation instructions and supplies |
| `contact.html` | Contact details, contact form and map |
| `info.html` | Privacy and accessibility information |

## Before you begin

1. Make a backup of the project or ensure that the changes can be restored using Git version control or using other suitable method.
2. Open the HTML file you want to edit in a text editor, such as Visual Studio Code.
3. Find the content you want to edit by searching for its heading or by text.
   Headings usually use `h2` or `h3` elements and paragraphs use `p` elements.
4. Edit only the content you want to change. Keep the surrounding HTML tags,
   `class` and `id` attributes, and link structures intact.
5. Save the file and open the page in a browser to check the changes.

## Editing regular text

Edit text between the opening and closing tags of an HTML element:

```html
<h2>Old heading</h2>
<p>Old paragraph.</p>
```

For example, change it to:

```html
<h2>New heading</h2>
<p>New paragraph.</p>
```

Use heading levels in order: the main page heading is `h1`, main sections
use `h2`, and subsections use `h3`. Use `<strong>` to emphasize text and
always create links with an `<a href="...">...</a>` element. Do not write
HTML tags as visible text.

## Adding content

1. Open the HTML file related to the content using the table above.
2. Copy an existing block of the same type, such as a `section`, `article`,
   list or card.
3. Paste the copy into the same section as the other similar content.
4. Replace the headings, text, images, links and other details with the new
   values.
5. Check that every opened HTML element is closed and that the content
   appears in the correct place.

When adding a new section, use the same structure and classes as the other
sections on the page. This keeps the website's appearance consistent.

## Editing content by page

- **Home page (`index.html`):** Edit introduction text, statistics,
  featured cards, opening hours and partners in their respective `section`
  elements. Changes to the animal cards on the home page do not automatically
  update `animals.html`, so check both pages when necessary.
- **Adoption (`adoption.html`):** Edit the adoption process steps and
  information to consider before adopting. Keep the form field `name` and
  `id` values unless the form functionality is also being changed.
- **Animals (`animals.html`):** Edit animal cards according to the animal
  card instructions below.
- **Jobs (`jobs.html`):** Edit the `article` cards for job and volunteer
  positions, including deadlines, descriptions and buttons.
- **Donations (`donate.html`):** Edit donation amounts, payment methods,
  bank and MobilePay instructions, and the list of supplies. Check that
  payment details are up to date.
- **Contact (`contact.html`):** Edit contact details, phone number, email
  address, street address and map. The form structure is used by
  `js/contact.js`, so do not change field identifiers carelessly.
- **Privacy and accessibility (`info.html`):** Update the privacy and
  accessibility text whenever the site's practices or the information
  collected by a form changes.

## Animal card structure

An animal card is an `article` element containing an image, the animal's
details, a description and a contact link:

```html
<article class="card">
  <img src="images/example.jpg"
       alt="Example, a brown dog sitting on grass"
       width="400"
       height="300"
       loading="lazy">

  <div class="card-body">
    <h3>Example</h3>
    <p class="meta">Labrador Retriever · 4 years · male</p>
    <p>A friendly and playful dog who enjoys long walks.</p>
    <!-- <a class="btn" href="adoption.html#contactForm">Ask about adoption</a> -->
    <a class="res" href="adoption.html">Reserved</a>
  </div>
</article>
```

Place dog cards in the section with `id="dogs"` and cat cards in the section
with `id="cats"`. Do not remove the `class` attributes because the CSS uses
them to create the card layout. The `Reserved` link is optional and can be
shown on an animal card when the animal has already been reserved.

### Adding an animal card

1. Add the new animal's image to the `images` folder. Use lowercase letters
   and avoid spaces in the filename, for example `essi.jpg`.
2. Copy the complete `<article class="card">...</article>` block of an
   existing animal of the same type.
3. Paste the copy into the correct section: the `id="dogs"` section for a
   dog or the `id="cats"` section for a cat.
4. Change the `src`, `alt`, name, basic details and description.
5. Check that the adoption link points to `adoption.html#contactForm`.
6. If the animal is reserved, add a separate link with `class="res"` and the
   text `Reserved`:

   ```html
   <a class="res" href="contact.html">Reserved</a>
   ```

   If the animal is available, leave this link out.

### Editing an animal card

1. Find the animal name in an `<h3>` element in `animals.html`.
2. Change the required information in the correct place: the name, `.meta`
   details, description, or the image `src` and `alt`.
3. If you replace the image, make sure that the new file is in the `images`
   folder and that `src` matches the filename exactly.
4. Do not change the card classes (`card`, `card-body` and `meta`) without
   a valid reason.
5. To mark an animal as reserved, add the `Reserved` link after the regular
   adoption link. Keep `class="res"` so that the button uses the reserved
   style.
6. To remove the reserved marking, delete the complete link block:

   ```html
   <a class="res" href="contact.html">Reserved</a>
   ```

   After removal, the animal card will display only the regular adoption
   button.

### Removing an animal card

1. Find the animal card by searching for the animal's name.
2. Remove the entire block starting with `<article class="card">` and ending
   with the corresponding `</article>` tag.
3. Do not remove the whole `grid` or `animal-section` element.
4. If the removed image is not used elsewhere, it can also be removed from
   the `images` folder. Check all references first.

## Editing images, video and links

- Add images to the `images` folder and reference them with a relative path,
  for example `images/new-image.jpg`.
- Write descriptive `alt` text for every meaningful image. Decorative images
  can use an empty `alt=""` value.
- Keep the `width` and `height` values of images so the page layout does not
  jump while the page is loading.
- The home page video is stored in `media/Esittely.mp4`. If you replace the
  video, also update the `<source src="...">` path in `index.html`.
- Test every new or changed link. Internal links use a format such as
  `href="contact.html"` and links to sections on the same page use a format
  such as `href="#privacy"`.
- Check external links and email and telephone links especially carefully.

## Removing content

1. Find the section or card you want to remove before changing it.
2. Select only the complete HTML block. Do not remove the surrounding
   `main`, `section` or `footer` structure.
3. Also remove images or links that are no longer used.
4. Check that no other page refers to the removed anchor, image file or
   HTML file.
5. If you are unsure where the block ends, make a backup first and check the
   page in a browser after removing the content.

## Changing shared structure

The header navigation and footer are repeated in several HTML files. If you
change a page name, navigation link, phone number, email address, street
address or opening hours, update the change in all relevant HTML files.
Otherwise, the information may be inconsistent between pages.

Do not change the HTML just to modify the appearance. The shared styles are
in `css/styles.css`. Only modify `js/contact.js` if the contact form's
functionality is intended to change.

## Checking your changes

- Open every page you modified in a browser and check its content.
- Test the home page, navigation, buttons and form links.
- Check that images and video load and that the browser console reports no
  missing files.
- Check that no HTML tags are left open or unclosed.
- Make sure headings, `alt` text and link text are understandable for screen
  reader users as well.
- Review the changes with `git diff` before publishing.

Changes become visible on the published website only after the modified HTML
files, images and other files have been published using the project's
publishing method, such as GitHub Pages.
