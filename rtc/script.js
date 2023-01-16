let username = 'u' + Math.floor(Math.random() * 10000)
let chatLog = document.getElementById('chatList');
let chatForm = document.getElementById('messageForm');
chatForm.addEventListener("submit", sendMessage);

let piesocket = new PieSocket({
    clusterId: "demo",
    apiKey: "VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV",
    notifySelf: true,
    presence: true,
    userId: username
});

let channel;
const usersMarquee = document.getElementById('users')
const usersCountB = document.getElementById('users_count')
piesocket.subscribe("chat-room").then(ch => {
    channel = ch;

    channel.listen("system:member_joined", function (data) {
        if (data.member.user == username) data.member.user = "You";
        chatLog.innerHTML += `<div class="log_joining">
                                <b>${data.member.user}</b>
                                <em>joined the chat</em>
                            </div>`;
        usersMarquee.innerHTML = ``;
        if (!channel) usersMarquee.innerHTML += 'not connected';
        channel.members.forEach(member => usersMarquee.innerHTML += `<span>${member.user}</span>`);
        usersCountB.innerHTML = channel.members.length;
    })

    channel.listen("new_message", function (data, meta) {
        chatLog.innerHTML += `<div class="message ${data.sender == username ? 'my_message' : ''}">
                                    <b>${data.sender == username ? '' : data.sender + ': '}</b> ${data.text}
                            </div>`;
        chatLog.scrollIntoView()
    })

});

function sendMessage(e) {
    e.preventDefault();

    if (!channel) {
        alert("Channel is not connected yet, wait a sec");
        return;
    }

    channel.publish("new_message", {
        sender: username,
        text: e.target.message.value
    });

    e.target.reset()
}