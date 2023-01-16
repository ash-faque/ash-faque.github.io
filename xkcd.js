export default async (target) => {

    let json_response = await fetch("https://xkcd.vercel.app/?comic=latest")
    
    console.log(json_response)

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

    console.log(
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
    )

    target.innerHTML += `
        <img src="${img}" alt="${alt}">
        <h4>${safe_title ? safe_title : itle }</h4>
        <p><b>${num}</b> - <em>${day}:${month}:${year}</em></p>
        <p>${transcript}</p>
        <p>${news}</p>`;
    if (link.length) target.innerHTML += `<a href="${link}" target="_blank">@xkcd</a>`
}