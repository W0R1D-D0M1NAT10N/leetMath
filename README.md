# leetMath

A competition math practice site built with Jekyll and Tailwind CSS.

## Local development

1. Install dependencies:
   ```bash
   npm install
   gem install bundler jekyll
   ```
2. Build Tailwind CSS:
   ```bash
   npx tailwindcss --input css/style.tailwind.css --output css/style.css --minify
   ```
3. Serve with Jekyll:
   ```bash
   bundle exec jekyll serve --baseurl=""
   ```

The site will be available at [http://localhost:4000](http://localhost:4000).
