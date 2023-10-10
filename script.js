const accordion = document.getElementsByClassName("accordion-header");

for (i = 0; i < accordion.length; i++) {
 accordion[i].addEventListener("click", function () {
 // console.log('test')
 this.classList.toggle("active");
 var panel = this.nextElementSibling;
 if (panel.style.display === "block") {
 panel.style.display = "none";
 } else {
 panel.style.display = "block";
 }

 if (this.classList.contains("active")) {
 // Code to change the icon to '-' when open
 console.log("true", this);
 this.querySelector(".accordion-icon").textContent = "-";
 } else {
 // Code to change the icon to '+' when closed
 this.querySelector(".accordion-icon").textContent = "+";
 }

 // Toggle the display of the content
 content.style.display = this.classList.contains("active")
 ? "block"
 : "none";
 });
}


function myFunction() {
 var x = document.getElementById("myTopnav");
 if (x.className === "topnav") {
 x.className += " responsive";
 } else {
 x.className = "topnav";
 }
}

function reveal() {
 var reveals = document.querySelectorAll(".reveal");

 for (var i = 0; i < reveals.length; i++) {
 var windowHeight = window.innerHeight;
 var elementTop = reveals[i].getBoundingClientRect().top;
 var elementVisible = 100;

 if (elementTop < windowHeight - elementVisible) {
 reveals[i].classList.add("active");
 } else {
 reveals[i].classList.remove("active");
 }
 }
}

window.addEventListener("scroll", reveal);

var chatMessages = [
 // ... your chat messages here
 {name: "ms1",
 msg: "adam@email.com, 5553412359",
 delay: 1000,
 align: "right",
 showTime: true,
 time: "19:58"
},
{
 name: "ms2",
 msg: "Thanks for supplying your contact info, Adam. How can I help?",
 delay: 1000,
 align: "left",
 showTime: true,
 time: "19:58"
},
{
 name: "ms3",
 msg: "Woah, you're really online on a weekend?",
 delay: 1000,
 align: "right",
 showTime: true,
 time: "19:59"
},
{
 name: "ms4",
 msg: "Absolutely, we are available 24/7. How can I help?",
 delay: 1000,
 align: "left",
 showTime: true,
 time: "19:59"
},
 
];


var chatDelay = 0;
var currentIndex = 0; // Track the current message index

function onRowAdded() {
 $('.chat-container').animate({
 scrollTop: $('.chat-container').prop('scrollHeight')
 });
 
 // Check if we've reached the end of chatMessages
 if (currentIndex === chatMessages.length -1) {
 // If yes, reset the currentIndex and start the conversation again
 currentIndex = 0;
 setTimeout(startChat, 5000); // Add a delay before restarting
 } else {
 // If not, proceed to the next message
 currentIndex++;
 setTimeout(displayNextMessage, 2000); // Add a delay before showing the next message
 }
}

function displayNextMessage() {
 var obj = chatMessages[currentIndex];
 chatDelay = obj.delay;
 chatDelay2 = chatDelay + obj.delay;
 chatDelay3 = chatDelay2 + 10;
 scrollDelay = chatDelay;
 chatTimeString = " ";
 msgname = "." + obj.name;
 msginner = ".messageinner-" + obj.name;
 spinner = ".sp-" + obj.name;

 if (obj.showTime == true) {
 chatTimeString = "<span class='message-time'>" + obj.time + "</span>";
 }

 $(".chat-message-list").append("<li class='message-" + obj.align + " " + obj.name + "' hidden><div class='sp-" + obj.name + "'><span class='spinme-" + obj.align + "'><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></div><div class='messageinner-" + obj.name + "' hidden><span class='message-text'>" + obj.msg + "</span>" + chatTimeString + "</div></li>");
 $(msgname).delay(chatDelay).fadeIn();
 $(spinner).delay(chatDelay2).hide(1);
 $(msginner).delay(chatDelay3).fadeIn();
 setTimeout(onRowAdded, chatDelay);
}


function startChat() {
 // Clear the chat container
 $('.chat-message-list').empty();

 // Display the first message
 currentIndex = 0;
 displayNextMessage();
}

// Start the chat when the page loads
$(document).ready(function() {
 startChat();
});
