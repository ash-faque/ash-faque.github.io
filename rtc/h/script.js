const main_canvas = document.getElementById('main_canvas')
const ctx = main_canvas.getContext('2d')

// console.log(ctx)

import PieSocket from "./network.js"
const socket = new PieSocket()

socket.sendMessage('jilaabi')