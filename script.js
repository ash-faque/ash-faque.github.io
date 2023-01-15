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

import current_comic from './xkcd.js'
current_comic(document.getElementById('comic'))