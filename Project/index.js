const express = require("express");
const app = express();
const data = require("./MOCK_DATA.json");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 
// Setting up EJS as the view engine (uncomment if needed)
const path = require("path");
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// Route to render an index page (uncomment if needed)
app.get("", (req, res) => {
  res.render("index");
});

// Dynamic route example (uncomment if needed)
// app.get("/public/:himanshu", (req, res) => {
//     res.send(`Welcome ${req.params.himanshu}`);
// });

app.get("/", (req, res) => {
  console.log("Hello");
  return res.send(data);
});

// // Route to render a list of users (example usage, adjust as needed)
// app.get("/users", (req, res) => {
//     const userList = data.map(user => `<li>${user.name}</li>`).join('');
//     const html = `<ul>${userList}</ul>`;
//     res.send(html);
// });

const PORT = 6000;

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});




