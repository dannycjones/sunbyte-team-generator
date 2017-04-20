# SunbYte Team Generator

This tool was built to create the **HTML** for the [team page](http://sunbyte.group.shef.ac.uk/wordpress/team/) on the SunbYte Wordpress site.

## Getting Started

### Requirements

Ensure that the following prerequisites are installed.
 - [NodeJS](https://nodejs.org/en/)
 - [Yarn Package Manager](https://yarnpkg.com/en/)

### Setup

 - `yarn install`

### Usage

Update *team.json* with the changes you want to make. Then, run `yarn run compile` to put the HTML into *compiled.html*.

Alternatively, if you have a clipboard CLI, you can pipe the output of running *index.js* into that. (For example, on Mac: `node index.js > pbcopy`.)

## Fundamental HTML Markup Changes

You will find the template written in [PugJS](https://pugjs.org) in *template.pug*. Changing this file will change how the markup is generated.
