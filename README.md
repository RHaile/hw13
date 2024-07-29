## NOTES 


**Environment**
1. Initialize new node.js project in a new directory
2. Install Express and localStorage in project


**JavaScript**
    -Define variables to set up express server
    -Store data locally into a folder named 'scratch'
    -Use middleware function[app.use()] to parse incoming request as a JSON object
    -Define GET[app.get] and POST[app.post] route to retrieve and store data 
    -Run server using [app.listen]


**Thunder**
-In terminal run `node server.js` to start Express server
-Use Thunder Client to test GET/POST routes `http://localhost:3000/`
-Ensure "scratch" folder w/ correct objects was created