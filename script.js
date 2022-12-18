import socials from './socials.js'
const socials_div = document.getElementById('social');
socials.forEach(social => {
    let [platform_name, link] = social
    let a = document.createElement('a')
    a.setAttribute('href', link)
    a.innerText = platform_name
    a.setAttribute('target', "_blank")
    socials_div.appendChild(a)
});
