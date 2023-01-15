export default async (target) => {

    let json_response = await fetch("https://xkcd.com/info.0.json", {mode: 'no-cors'})
    
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

    let div = document.createElement('div')
    div.innerHTML = `
    <i>mg src="${img}" alt="${alt}">
    <h3><a link="${link}" target="_blank">${title}</a></h3>
    <h4>${safe_title}</h4>
    <p>num: ${num} | date: <em>${day}:${month}:${year}</em></p>
    <p>${transcript}</p>
    <p>news: ${news}</p>
    `
    target.appendChild(div)
}