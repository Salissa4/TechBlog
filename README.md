# Tech_Blog

## Description

Build a CMS-style blog site developers will be able to publish their posts and comment on other developer posts. This site will follow the Model View Controller paradigm structure, utilize handlebars.js, sequelize and express-session for authentication. 

## Table of Contents

- [Usage](#usage)
- [Installation](#installation)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Contribute](#how-to-contribute)

## Usage

Live on [Heroku](https://ancient-woodland-75045.herokuapp.com/) 

![TechBlog](./public/images/demo.png)

## Installation

To run via local environment: 
1.  Clone the repository

2.  Open terminal, and navigate to the appropriate directory

3.  From command line: 
    - `npm init` 
    - `npm install` 

    Install the following dependencies: 
    - bcrypt `npm i bcrypt`
    - dotenv `npm i dotenv`
    - express `npm i express`
    - session `npm i express-session`
    - handlebars `npm i express-handlebars`
    - mysql2 `npm i mysql2`
    - sequelize `npm i sequelize`
    - connect session `npm i connect-session-sequelize`
    
    Continue in command line:
    - `mysql -u root -p` 
    - User will be prompted for password

    Once mysql is running 
    - `source db/schema.sql;` 
    
    proceed to quit 
    - `quit;`

5. `node server.js`
6. Open localhost:3001

## Credits

Collab: Gloriana Gonzalez Github: https://github.com/ggggglo

Debug: Shawn Tschoepe Github: https://github.com/shawn220a

## License

MIT License

Copyright (c) [2022] [Salissa4]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Badges

[![macOS](https://svgshare.com/i/ZjP.svg)](https://svgshare.com/i/ZjP.svg)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-no-red.svg)](https://bitbucket.org/lbesson/ansi-colors)
[![GitHub license](https://badgen.net/github/license/Naereen/Strapdown.js)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)

## How to Contribute

[Contributor Covenant](https://www.contributor-covenant.org/) 
