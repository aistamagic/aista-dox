
# Aista Dox Jekyll Theme

This is a Jekyll theme created for Aista Ltd, and more specifically [Magic Cloud](https://polterguy.github.io/) to
document our project(s). If you want to use it for your own site, you're welcome to do so under the terms of 
Creative Commons Attribution-ShareAlike version 4, implying you'll have to keep the link to our web site. Below
is a screenshot of the theme in use over at [Magic Cloud's documentation site](https://polterguy.github.io/).

![Screenshot of theme](https://raw.githubusercontent.com/polterguy/aista-dox/master/screenshot.jpg)

The theme works perfectly for your GitHub Page, and in fact it was explicitly created to document our
own open source framework [Magic Cloud](https://github.com/polterguy/magic), and the theme is created
with a _"content first"_ approach, implying content over functionality, which of course is important
for a site intended to document an open source framework such as [Magic](https://polterguy.github.io).

## Installation

To use the theme add something resembling the following to your YAML configuration file _"\_config.yml"_.

```
# The next line declares you want to use this theme
remote_theme: polterguy/aista-dox

# The next line declares the URL structure of your blog items
permalink: /blog/:title

# Title of your site
title: Title of your site

# Slogan of your site
slogan: Slogan of your site

# Description of your site
description: This is the description for your site

# Google Analytics tracking code
google_analytics: UA-123456789-1

# Copyright displayed in the bottom right corner
copyright: © Foo, Ltd 2022

# Most Wanted Response, most important link on your site
mwr: /section-1/foo
mwr_text: Foo 1

# Background images for banner and the main body/content parts of your site
banner_bg: /assets/bg.jpeg
body_bg: /assets/bg2.jpeg

# Open Graph image for pages when shared on Facebook or Twitter, etc
og_image: https://some-url.com/to-open-graph-image.jpeg

# Your navigation section. Declares the drop down menu items for your hamburger menu.
nav_sections:
  - name: Section 1
    items:
      - url: /section-1/foo
        name: Foo 1
      - url: /section-1/bar
        name: Foo 2
  - name: Section 2
    items:
      - url: /section-2/
        name: Another foo
```

The `remote_theme` parts needs to be exactly as above, the rest is intended for configuring your site, and include
Google Analytics tracking codes, MWR (_"Most Wanted Response"_, a link on your site being the most important navigation hyperlink),
and navigation sections, etc. The navigation sections becomes a navbar that you can toggle at the top of your page
using a hamburger button. If you don't provide an MWR, and/or a `nav_section`, these elements will not be rendered.

## Usage

The theme is blog aware, assuming you save your blog posts into your _"\_posts"_ folder. To list your blog items, create
a Markdown page and store at your root folder and name it for instance _"blog.md"_, and fill it with the following content.

```markdown
---
layout: blog
permalink: /blog/
---

Some descriptive spiehl here for your blog ...

```

To create a single blog item, create a file called for instance _"2022-01-04-new-documentation-website.md"_ and store it
into your _"\_posts"_ folder and fill it as follows.

```markdown
---
layout: post
author: john doe
---

Bananas are _cool_ because they can be eaten.
```

If you do the above, you can go to your site with the relative URL of `/blog/` to see a list of your blogs.

### Creating custom pages

To create custom pages, you can create a markdown file such as the following and store under for instance
a _"misc"_ folder.

```markdown
---
layout: default
permalink: /about
---

# About our amazingly cool website

This website is like the coolest website in the world, because it features Bananas!
```

## License

The theme is freely available as open source under the terms of the [Creative Commons Attribution-ShareAlike 4.0 license](https://creativecommons.org/licenses/by-sa/4.0/legalcode).

