import socials from './socials.js'
const socials_div = document.getElementById('social');
const appendSocials = (socials, socials_div) => {
    socials.forEach(social => {
        let [platform_name, link] = social
        let a = document.createElement('a')
        a.setAttribute('href', link)
        a.innerText = platform_name
        a.setAttribute('target', "_blank")
        socials_div.appendChild(a)
    });
}
appendSocials(socials, socials_div)


const body = document.querySelector('body');
const alterBg = (elm, intervl = 1) => {
    let hue = 0
    setInterval(() => {
        let random_color = `hsl(${hue}, 20%, 80%)`
        elm.style.backgroundColor = random_color
        hue > 359 ? hue = 0 : hue += 6
    }, intervl * 1000)
}
alterBg(body, 1)