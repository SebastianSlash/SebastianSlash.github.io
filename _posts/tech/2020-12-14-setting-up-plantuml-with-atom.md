---
layout: post
blogtype: tech
title: "Setting up Plant UML on Windows with Atom"
date: 2020-12-14
author: Sebastian Bellitto
img-dir: /assets/images/posts/2020-12-14-setting-up-plantuml-with-atom/
galleries:
  1:
    parts:
      - layout: equal
        images:
          - { url: 'example.png', alt: 'example of a sequence diagram with plantUML'}
  2:
    parts:
      - layout: equal
        images:
          - { url: 'settings.png', alt: 'settings for plantuml-preview'}
---
[PlantUML](https://plantuml.com) is a nice tool to create UML diagrams in a markup style way.<br>
In this guide I'll show you how to set it up for Atom on Windows, whereas the steps are quite similar on Linux or Mac.
I think it's a powerful tool that lets you draw your diagrams quickly.

## Table of Contents
1. [What's PlantUML?](#whats-plantuml)
2. [Requirements](#requirements)
3. [Atom Packages and Settings](#atom-packages-and-settings)
4. [Resources](#resources)

## What's PlantUML?
PlantUML helps to quickly and easily create UML diagrams using simple and intuitive language.
It is opensource and free.
A markup like description of the diagram can be converted to a graphical diagram as shown below

{% include post-gallery.html gallery=1 %}<br>

## Requirements
To create and view your UML diagrams in Atom you first need to install a few things:

(*for Linux and Mac* just check how to install Graphviz and Java Runtime Enivronment, the plantUML jar is the same for every plattform)
### plantUML jar
The jar file can be downloaded [here](http://sourceforge.net/projects/plantuml/files/plantuml.jar/download).
Then you just have to save it to a place of your liking, I've saved it to my users folder.
Be sure to remember where you saved it.
### Graphviz
The installation exe for [Graphviz](https://graphviz.org) can be found [here](https://www2.graphviz.org/Packages/stable/windows/10/cmake/Release/).
Just install it following the wizard, no need to add it to PATH, and again remember the install location.
### Java Runtime Enivronment
To run plantUML we also need a Java Runtime Environment.
If not already installed we can get the latest version at [https://www.java.com/en/download/](https://www.java.com/en/download/)

## Atom Packages and Settings
Now in Atom we need to install these two packages:
  - [language-plantuml](https://atom.io/packages/language-plantuml)
  - [plantuml-preview](https://atom.io/packages/language-plantuml)

Then in the **settings** of **plantuml-preview** we need to set the location for the Graphviz dot executable and the plantUML.jar.
From the install locations we remembered from [before](#requirements) we set the dot location to ``Graphviz_install_location/bin/dot.exe`` and the jar to ``jar_location/plantUML.jar``.

{% include post-gallery.html gallery=2 %}<br>

Now we can toggle the preview with ``ctrl/cmd`` + ``alt`` + ``P``.
To save the diagram as either png or svg just uncheck the use of the temp directory and reload the preview, then the image will be saved in the same directory.
## Resources
  - [http://trevershick.github.io/atom/2015/12/04/plantuml-snippets.html](http://trevershick.github.io/atom/2015/12/04/plantuml-snippets.html)
  - [https://plantuml.com](https://plantuml.com)
  - [https://graphviz.org](https://graphviz.org)
