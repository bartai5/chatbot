importScripts("https://js.pusher.com/beams/service-worker.js");

const chatbox = document.getElementById("chatbox");
const usernameInput = document.getElementById("username-input");
const emailInput = document.getElementById("email-input");
const messageInput = document.getElementById("message-input");
const sendBtn = document.getElementById("send-btn");

let websocket;
let username = "";

// Connect to the WebSocket server
function connectWebSocket() {
  websocket = new WebSocket("wss://your-websocket-server-url");

  // WebSocket event handlers
  websocket.onopen = function () {
    console.log("Connected to WebSocket server");
  };

  websocket.onmessage = function (event) {
    const message = JSON.parse(event.data);
    appendMessage(message.username, message.text);
  };

  websocket.onclose = function () {
    console.log("Disconnected from WebSocket server");
    // You can handle the WebSocket disconnection and reconnect here
  };
}

// Function to send a message via WebSocket
function sendMessage() {
  const text = messageInput.value.trim();
  if (text === "") return;

  const message = {
    username: username,
    text: text
  };

  websocket.send(JSON.stringify(message));
  messageInput.value = "";
}

// Function to append a message to the chatbox
function appendMessage(username, text) {
  const li = document.createElement("li");
  li.textContent = `${username}: ${text}`;
  chatbox.appendChild(li);
  chatbox.scrollTop = chatbox.scrollHeight;
}

// Function to handle form submission and start the chat
function startChat(event) {
  event.preventDefault();

  const inputUsername = usernameInput.value.trim();
  const inputEmail = emailInput.value.trim();

  if (inputUsername === "" || inputEmail === "") {
    alert("Please provide a username and email address.");
    return;
  }

  username = inputUsername;
  connectWebSocket();
  chatbox.innerHTML = ""; // Clear chatbox

  // Remove the form and show the chat interface
  const chatForm = document.getElementById("chat-form");
  chatForm.style.display = "none";
  const chatInterface = document.getElementById("chat-interface");
  chatInterface.style.display = "block";
}

// Event listeners
sendBtn.addEventListener("click", sendMessage);
document.getElementById("chat-form").addEventListener("submit", startChat);
