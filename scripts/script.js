// fill social media info
import socials from './socials.js'
const socials_div = document.getElementById('social');
const appendSocials = (socials, socials_div) => {
    socials.forEach(social => {
        let [platform_name, link] = social
        socials_div.innerHTML += `<a href="${link}" target="_blank">${platform_name}</a>`;
    });
}
appendSocials(socials, socials_div)

// add a comic
import current_comic from './xkcd.js'
const comic_tab = document.querySelector('aside')
current_comic(comic_tab, Math.floor(Math.random() * 2000))