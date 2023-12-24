const chatButton = document.getElementById('chat-button');
const input = document.getElementById('chat-input');
const messages = document.getElementById('chat-messages');

chatButton.addEventListener('click', function() {
    let value = input.value;

    const message = document.createElement('div');
    message.classList.add("chat-message");
    message.classList.add("text--14-medium");

    message.innerHTML = `<p class="text--14-bold chat-message__nickname nickname--red">d_duckky</p>` + value;
    messages.append(message);
})