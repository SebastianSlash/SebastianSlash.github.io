---
layout: post
blogtype: tech
title: "How I set up Atom code editor"
date: 2020-05-07
last_updated: 2020-12-14
author: Sebastian Bellitto
---
I use [Atom](https://atom.io) as my main text editor, whether it be for programming web pages, python applications, or writing LaTeX documents and note taking.
Here I will list all settings that I change and packages and themes I use.

Packages will be listed in different use case categories.

## Table of contents
1. [Settings](#settings)
2. [Themes](#themes)
3. [Packages](#packages)

# Settings

The Settings (`ctrl/cmd` + `,`) I like to adjust are (checkboxes reflect the checkboxes in the settings):

  - Core
    - [x] Exclude VCS Ignored Paths
  - Editor
    - [x] Scroll Past End
    - [x] Show Indent Guide
  - autocomplete-plus (Atom default autocomplete package)
    - [ ] Show suggestion on keystroke
      - I can still choose to see autocomplete suggestions using the set keybinding (default `ctrl/cmd` + `space`)

# Themes
- UI: [City Lights](https://atom.io/themes/city-lights-ui)
- Syntaxing: [Darker One Dark](https://atom.io/themes/darker-one-dark-syntax)

# Packages
General:
  - [Minimap](https://atom.io/packages/minimap)
  - [file-icons](https://atom.io/packages/file-icons)
  - [Zen](https://atom.io/packages/Zen)
  - [Wordcount](https://atom.io/packages/wordcount)

For Web Developement:
  - [Emmet](https://atom.io/packages/emmet)
  - [pigments](https://atom.io/packages/pigments)

For Markdown
  - [language-markdown](https://atom.io/packages/language-markdown)
  - [tidy-markdown](https://atom.io/packages/tidy-markdown)
  - [markdown-preview-enhanced](https://atom.io/packages/markdown-preview-enhanced)
  <!-- - [markdown-mindmap]() -->

For LaTeX:
  - [language-latex](https://atom.io/packages/language-latex)
  - [latex]()

For UML with plantUML:
  - check out [this post](https://sebastianbellitto.com/blog/2020/12/14/setting-up-plantuml-with-atom) for more information
  - [language-plantuml](https://atom.io/packages/language-plantuml)
  - [plantuml-preview](https://atom.io/packages/language-plantuml)
