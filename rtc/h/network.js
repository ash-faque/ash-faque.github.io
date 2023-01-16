export default class PieSocket {
    constructor(){
        this.username = 'P:' + Math.floor(Math.random() * 10000);
        this.piesocket = new PieSocket({
            clusterId: "demo",
            apiKey: "VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV",
            notifySelf: true,
            presence: true,
            userId: this.username
        });
        this.channel = undefined
        this.#subscribe()
    }
    #subscribe(){
        if (!this.piesocket) return;
        this.piesocket.subscribe("heavy").then(channel => {
            this.channel = channel;
            this.channel.listen("system:member_joined", function (data) {
                console.log('system:member_joined', data)
            })
            this.channel.listen("new_message", function (data, meta) {
                console.log('new_message', data, meat)
            })
        });
    }
    sendMessage(msg) {
        if (!channel) {
            alert("Channel is not connected yet, wait a sec");
            this.#subscribe()
            return;
        }
        channel.publish("new_message", {
            sender: username,
            text: msg
        });
    }
}