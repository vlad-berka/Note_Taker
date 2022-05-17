# Note Taker
## Vladimir Berka's Homework #11

## Assignment Description
This is a Javascript homework assignment for the UW Bootcamp. The goal of the assignment is to create the backend functionality for an online web-app note taker. The Javascript file is the primary challenge of this assignment with user information persisting, stored, and accessed in JSON format on a client side database file. "Inquirer", "express", and "UUID" NPM packages shall be used. The full-stack application shall be hosted and accessible on `Heroku`.

A mockup is provided by the instructor to demonstrate desired application appearance and functionality.

The original user story, acceptance criteria, and mockup for the assignment is copied to the end of this document.

## Assignment Scope
Write the backend javascript code to allow users to store various notes using a frontend (web browser) interface. Users shall be able to add, delete, and update notes - with information stored client side in a database `.db` file. Information shall be accessed and navigated using routes with an express framework.

The front end HTML and CSS code has been provided.
No additional javascript code has been provided.

## Generalized Tasks
- Use routes to navigate and access information
- Write a javascript file with multiple functions to storing, accessing, and deleting data
- Write database queries to create, retrieve, update, and delete information from a database file

## List of Files
* README.md - This current read me file
* gitignore - Git Ignore file to ignore node_modules, DS.Store (Mac users)
* server.js - The primary javascript file that runs the application
* db/ - The primary directory that contains database information in JSON format
* package.JSON - JSON package that stores modules and settings used
* ~./assets/- Folder for stored screenshots and instructor provided demo.gif

# Original Homework Assignment Details

## User Story

```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```

## URL to the GitHub Repository

[GitHub Pages Link:https://github.com/vlad-berka/Note_Taker](https://github.com/vlad-berka/Note_Taker)

## URL to the deployed application hosted on Heroku

[Heroku Deployment Link:https://shrouded-stream-07436.herokuapp.com/](https://shrouded-stream-07436.herokuapp.com/)

## Screenshot of the Team Profile Generator, General Appearance

![Vladimir Berka's Note Taker Screenshot, Front End](./assets/Note_Taker_ScreenShot.png "Note Taker, Screenshot, Front End")

## Instructor Provided Mock-Up

The following instructor provided sreenshot demonstrates the desired application appearance and functionality:

![Existing notes are listed in the left-hand column with empty fields on the right-hand side for the new note’s title and text.](./Assets/11-express-homework-demo-01.png)

## License
MIT License

Copyright (c) [2022] [Vladimir Berka]

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