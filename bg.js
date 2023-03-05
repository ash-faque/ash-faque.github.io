class BackGround {
    constructor(){
        this.scale  = 1

        this.canvas = document.createElement('canvas')
        this.context = this.canvas.getContext('2d')
        document.body.prepend(this.canvas)

        this.context.lineWidth = 1;
        this.context.strokeStyle = '#666666';

        this.on_resize()
        window.addEventListener('resize', this.on_resize)

        this.update()
    }

    on_resize(){
        console.log('resizing window')

        this.ww = window.innerWidth
        this.wh = window.innerHeight

        this.canvas.width = this.ww * this.scale
        this.canvas.height = this.wh * this.scale
        
        this.canvas.style = `
            display: block;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: -100;
            `
    }

    draw_triangle([x1, y1], [x2, y2], [x3, y3]){
        // the triangle
        this.context.beginPath();
        this.context.moveTo(x1, y1);
        this.context.lineTo(x2, y2);
        this.context.lineTo(x3, y3);
        this.context.closePath();
        this.context.stroke();
    }

    update(){
        this.draw_triangle([30, 90], [54, 21], [450, 328])
        requestAnimationFrame(this.update)
    }
}



let bg = new BackGround()