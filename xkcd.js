export default async (target, comic = 'latest') => {

    let json_response = await fetch(`https://xkcd.vercel.app/?comic=${comic}`)
    
    // console.log(json_response)

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

    // console.log(
    //     month,
    //     num,
    //     link,
    //     year,
    //     news,
    //     safe_title,
    //     transcript,
    //     alt,
    //     img,
    //     title,
    //     day
    // )

    target.innerHTML += `<div class="comic">
        <img src="${img}" alt="${alt}">
        <div class="comic_detail">
            <h4>${safe_title ? safe_title : title }</h4>
            <p><b>${num}</b> - <em>${day}:${month}:${year}</em></p>
            <p>${transcript}</p>
            <p>${news}</p>
            ${(link.length) ? `<a href="${link}" target="_blank">@xkcd</a>` : ''}
        </div>
    </div>`
    
}