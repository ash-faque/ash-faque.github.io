import socials from './socials.js'
const socials_div = document.getElementById('social');
const appendSocials = (socials, socials_div) => {
    socials.forEach(social => {
        let [platform_name, link] = social
        socials_div.innerHTML += `<a href="${link}" target="_blank">${platform_name}</a>`;
    });
}
appendSocials(socials, socials_div)

import current_comic from './xkcd.js'
// current_comic(document.getElementById('comic'), Math.floor(Math.random() * 1000))