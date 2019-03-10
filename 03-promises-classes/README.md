## Classes & Promises

Before we dive deeper into node there are few key js features we need to learn.
In this lesson we will cover basic OOP with JS and learn about async programming with promises

### Student EX

- Create a Todo class
- The Todo class should have properties according to a single json item in our todo rest located at the following url: https://nztodo.herokuapp.com/api/task/?format=json
- install a package called node-fetch
- use this package to send a request to grab all the todo tasks
- using promise chaining convert the Promise<Response> to Promise<Json> and convert that again to Promise<Todo[]>
- print all the todo items