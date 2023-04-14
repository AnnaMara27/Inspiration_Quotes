//Time and date
const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();

const currentTime = document.getElementById("time");
const currentDate = document.getElementById("date");

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const currentMonth = months[month];

time.innerText = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;

currentDate.innerText = `${currentMonth} ${day}, ${year}`;

//GET QUOTES
const quote = document.getElementById("quote");
const author = document.getElementById("author");

function getAQuote() {
  fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      const randomNum = Math.floor(Math.random() * data.length);
      const randomChoice = data[randomNum];
      const quoteText = randomChoice.text;

      quote.innerText = quoteText;
      const authorName = randomChoice.author;
      if (authorName) {
        author.innerText = `- ${authorName}`;
      } else {
        author.innerText = "- Unknown";
      }
    });
}

//get a new quote
const btn = document.getElementById("btn");
btn.addEventListener("click", getAQuote);

getAQuote();
