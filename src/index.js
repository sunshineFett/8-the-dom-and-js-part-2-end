const logo = document.querySelector("#logo");

//compared to
//const logo = document.getElementById("logo");

//overwrites the value inside the HTML
//logo.innerText = "YO!";

const heading = document.createElement("h1");
heading.innerHTML = "<span>Hello</span>" + document.URL;
document.body.appendChild(heading);
