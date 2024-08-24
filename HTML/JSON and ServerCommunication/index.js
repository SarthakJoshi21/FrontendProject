/**
 *
 * JSON And Server Communication
 *
 * Basic JSON. Definition
 * JSON - JavaScript Object Notation
 *
 * JSON != JS Object
 * JSON - Cross Platform Data Communication | Standard Schema/Model to represent data
 *
 * Fetching Data From Backend Server
 *
 *
 *
 *
 * **/

// import someVariable from "./tempJson.json";
// // import <something> from '<somewhere>'

// console.log("JSON imported as a JS Object! =====> ", someVariable);

// Capture the Click Event of the button
// If the click happens; then fetch some data from the backend

// Promises -
//      A promise means ::: JS is saying; I don't have the data right now; but once I have it; ill bring it here

const loadButton = document.getElementById("loadData");

loadButton.addEventListener("click", () => {
  // Logic to Fetch The Data from backend server/endpoint
  const URL = "https://jsonplaceholder.typicode.com/users";

  fetch(URL) // Queries the backend server and gets a response
    .then((response) => response.json()) // response :: httpStatus - 200, 304, 4XX, 5XX, headers,
    .then((data) => {
      const ul = document.getElementById("userList");
      for (let user of data) {
        const li = document.createElement("li");
        li.textContent = user.name;
        ul.appendChild(li);
      }
    })
    .catch((error) => console.log("Error Seen", error));
});

/** 10-min Excercise
 * Modify the code to display additional information about each user (e.g., address, company).
 *
 * Experiment with fetching data from the API endpoint, and taking various actions
 * **/
