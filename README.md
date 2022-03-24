# _Currency Exchange_
### version 1.0

### Contributer
* Hans Schroeder

### The Site
* [View the raw documents on GitHub](https://github.com/hajschroeder/currencyAPI)
---

## Technologies Used
* HP Laptop with Windows 10
* GitBash and GitHub
* VS Code
* node.js
* npm
* webpack
* esLint
* [Exchange Rate API](https://www.exchangerate-api.com/docs/pair-conversion-requests), a public API that gathers currency data from dozens of countries around the globe

## Resources Used
1. [Mozilla Developer Network documentation](https://developer.mozilla.org/en-US/) 
1. [Learn How To Program](https://learnhowtoprogram.com) The curriculum for Epicodus students.
1. [w3Schools documentation on CSS stylings as well as jQuery](https://w3schools.com) A free web resource for coding and programming.
1. [YouTube](www.youtube.com)

---

## Description

_This is an independent project for the coding bootcamp Epicodus. It's function is to allow users to compare the currency exchange rate between various countries. The purpose, however, is to demonstrate the author's understanding of making API calls, using Promises and Static Methods, as well as handling both successful and unsuccessful API calls. 

## Setup/Installation
_Note, this will require your local device to have node.js installed_
* Clone this repository to your desktop
* Open the folder saved to your desktop with VSCode (or any other IDE capable of running npm and webpack)
* In the terminal type _npm install_ and hit enter
* Wait for all packages and documents to be installed and bundled
* While the package is installing, go to the [Exhange Rate API](https://www.exchangerate-api.com/) website. Enter your e-mail address, and click "Get Free Key". You should receive an e-mail shortly after providing a link to confirm your e-mail. Once this is confirmed, you will receive your API key. 
* Go back to you IDE and run _npm install dotenv-webpack@2.0.0 --save-dev_ in the terminal. 
* Go to the file webpack.config.js and add "const Dotenv = require('dotenv-webpack')" to the top of the page. 
* Find the "plugins" array under "module.exports" and add "new Dotenv()" to the array
* Create a file in your main directory called .env and add this file to your .gitignore file
* Inside the .env file enter API_KEY=[your unique API here]. This will now communicate your API with the template literal holding the URL for this project. 
* In the terminal, type _npm run start_ 
* This will open the project in your browser
* Simply enter the country code of the country you want to convert the currency value from, and enter the country code(s) for the country (or countries) to which you wish to compare exchange rates.
___

## Known Bugs
No known bugs

---

## License 
[MIT](https://choosealicense.com/licenses/mit/)

## Copyright
Hans J Schroeder 2022