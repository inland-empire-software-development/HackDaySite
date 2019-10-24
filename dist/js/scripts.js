// DOM Elements
const meetupTextUrl = document.getElementById("meetup-text-url");
const meetupBtnUrl = document.getElementById("meetup-btn-url");

fetch("https://api.meetup.com/iesd-meetup/events?&sign=true&photo-host=public")
.then((res) => res.json)
.then((res) => {
  console.log(res);
})
