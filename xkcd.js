const img_zoomer = (e) => {
    let img = e.target;
    let img_style = getComputedStyle(img);
    let img_w = img_style.width;
    let img_h = img_style.height;
    if (img_style.position === "absolute"){
        img.style = `margin: 10px auto;
                    width: 100%;

                    position: ;
                    top: ;
                    left: ;
                    max-width: ;
                    object-fit: contain;`

    } else {
        img.style = `position: absolute;
                    top: 0;
                    left: 0;
                    max-width: 100vw;
                    ${img_w > img_h ? "width: 100vw;" : "height: 100vh;"}
                    object-fit: contain;`
    }
    
    document.body.scrollTo(0, 0)
}

export default async (target, comic = 'latest') => {

    let json_response = await fetch(`https://xkcd.vercel.app/?comic=${comic}`)

    let {
        month,
        num,
        link,
        year,
        news,
        safe_title,
        transcript,
        alt,
        img,
        title,
        day
    } = await json_response.json()


    let comic_detail  = document.createElement('div')
    comic_detail.classList.add('comic_detail')
    comic_detail.innerHTML = `
        <h4>${safe_title ? safe_title : title }</h4>
        <p><b>${num}</b> - <em>${day}:${month}:${year}</em></p>
        <p>${news}</p>
        ${(link.length) ? `<a href="${link}" target="_blank">@xkcd</a>` : ''}
    `;


    let comic_img = document.createElement('img')
    comic_img.src =  img
    comic_img.setAttribute('alt', alt)
    comic_img.onclick = img_zoomer

    comic_img.onload = () => {

        console.log(comic_img)
        target.appendChild(comic_img)
        target.appendChild(comic_detail)

    }

}