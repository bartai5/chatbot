// The string to search in
let text = "This is a sample sentence";
// The array of words to search for
let words = ["sample", "test", "example"];
// Loop through the words array
for (let word of words) {
  // Check if the word is in the text
  if (text.includes(word)) {
    // Print "word found" if it is
    console.log("word found");
  }
}




// HHHHHHHHHHHH
// document.addEventListener("DOMContentLoaded", function() {
//   var chatDisplay = document.getElementById("chat-display");
//   var messageInput = document.getElementById("message-input");
//   var sendButton = document.getElementById("send-button");

//   sendButton.addEventListener("click", function() {
//       var message = messageInput.value;
//       if (message !== "") {
//           appendMessage("You: " + message);
//           messageInput.value = "";
//           // You can add your own logic here to send the message to the admin
//       }
//   });

//   function appendMessage(message) {
//       var messageElement = document.createElement("div");
//       messageElement.textContent = message;
//       chatDisplay.appendChild(messageElement);
//   }
// });
