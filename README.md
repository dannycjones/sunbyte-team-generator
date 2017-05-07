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

Update *team.json* with the changes you want to make. Then, run `yarn run compile` to put the HTML into *compiled.html*. Simply copy the contents of the file into the page editor, ensuring the *text* tab is selected.

Alternatively, if you have a clipboard CLI, you can pipe the output of running *index.js* into that. (For example, on Mac: `node index.js > pbcopy`.)

### Data format for `team.json`

```json
{
  "subTeams": [
    {
      "name": "Subteam name here",
      "leader": {
        "name": "Leader's name here",
        "title": "Leader's title here",
        "avatarURL": "Image URL here",
        "from": "Where they are from here"
      }
    }
  ],
  "currentTeams": [
    {
      "name": "Team name here",
      "members": [
        {
          "name": "Leader's name here",
          "title": "Leader's title here",
          "avatarURL": "Image URL here (optional)",
          "from": "Where they are from here"
        }
      ]
    }
  ],
  "previousMembers": [
    {
      "name": "Leader's name here",
      "title": "Leader's title here",
      "avatarURL": "Image URL here (optional)",
      "from": "Where they are from here"
    }
  ]
}
```

You can find out more about JSON at [json.org](http://json.org/).

## Fundamental HTML Markup Changes

You will find the template written in [PugJS](https://pugjs.org) in *template.pug*. Changing this file will change how the markup is generated.
