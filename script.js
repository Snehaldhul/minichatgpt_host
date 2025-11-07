document.getElementById("send-btn").addEventListener("click", sendMessage);
document.getElementById("user-input").addEventListener("keypress", function (e) {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (message === "") return;

  appendMessage("user", message);
  input.value = "";

  setTimeout(() => {
    const reply = getAIResponse(message);
    appendMessage("bot", reply);
  }, 500);
}

function appendMessage(sender, text) {
  const chatBox = document.getElementById("chat-box");
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.textContent = (sender === "user" ? "🧑: " : "🤖: ") + text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getAIResponse(input) {
  input = input.toLowerCase();

  if (input.includes("hello") || input.includes("hi")) {
    return "Hello! 👋 How can I help you today?";
  } else if (input.includes("your name")) {
    return "I’m Mini Chat AI — a tiny version of ChatGPT!";
  } else if (input.includes("time")) {
    return "The current time is " + new Date().toLocaleTimeString();
  } else if (input.includes("bye")) {
    return "Goodbye! Have a great day 😄";
  } else {
    return "I'm still learning! Try asking something else.";
  }
}
