## Homework Assignment: Create an Express API

### Objective
. The API should return appropriate responses for each request.

### Step-by-Step Guide

1. **Project Initialization**:
   - Create a new folder and initialize a Node.js project with `npm init -y`.
   - Install Express using the command `npm install express`.

2. **Setting Up the Express Server**:
   - Create a file for your server, such as `server.js`.
   - In `server.js`, set up a basic Express server.

3. **Creating Express Routes**:
   - Define a GET route in your Express server that returns a JSON response.
   - Define a POST route in your Express server that accepts JSON data and returns a confirmation message.

4. **Testing the Server**:
   - Use tools like Postman or ThunderClient to test the GET and POST routes.
   - Ensure that your server correctly handles requests and returns appropriate responses.

5. **Document Your Code**:
   - Add comments to your `server.js` file to explain your code and logic.

### Bonus/Challenge
- Implement localStorage in your Express API to store and retrieve data between requests.

### Deliverables
Submit the following:
- Your project folder containing the `server.js` file and any other relevant files.
- A brief document explaining your approach and any challenges you faced.

---
## Glossary of Key Terms

1. **Promise**: An object in JavaScript that represents the eventual completion or failure of an asynchronous operation. It allows handling of the result once the operation completes, with three states: pending, fulfilled, and rejected.
2. **Async Function**: A function declared with the `async` keyword, automatically transforming it to return a Promise, and allowing the use of `await` within it.
3. **Await Keyword**: Used in async functions in JavaScript to pause the execution until a Promise is resolved, then resumes execution and returns the resolved value.
4. **Axios**: A popular JavaScript library used for making HTTP requests. It offers more features and a simpler syntax compared to the Fetch API.
5. **Express**: A minimal and flexible Node.js web application framework used for building web applications and APIs.
6. **Middleware**: Functions in Express that have access to the request and response objects, used to modify or analyze data.
7. **Routing**: The process of defining how an application responds to client requests to specific endpoints.
8. **express.json()**: A middleware in Express used to parse incoming requests with JSON payloads.
9. **HTTP Methods**: Set of request methods to indicate the desired action to be performed, such as GET, POST, PUT, and DELETE.
