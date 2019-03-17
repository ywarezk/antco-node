## Express

In this lesson we will learn about express framework for creating server applications.

### Our goals

- Learn about the patterns used with express
- Use those patterns to solve common problems like:
  * Request body
  * Session
  * Authentication
  * Authorization
- We will also learn about splitting our app and arranging our project files properly
- Creating views with a templating engine

### Student EX 1.
- Create a middleware that will check if the request has an Authorization header
- if no header then reject with a 401
- if there is a header transfer to the next middleware in line

### Student EX 2.
- connect a template engine and using a template create a login form 
- use bootstrap to style your form

### Student EX 2.
- Using session try and transfer data with the session from one page to another
- the two pages will contain a form with a text input
- the text input will be saved in the session and each page will display what the other page sent via the text input.