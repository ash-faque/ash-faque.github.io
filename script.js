
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
const comic_tab = document.getElementById('a_comic')
if (location.href.indexOf("localhost") < 0){
    console.log('loading comic')
    current_comic(comic_tab, Math.floor(Math.random() * 1000))
}


// const img_zoomer = (e) => {
//     let img = e.target;
//     let img_style = getComputedStyle(img);
//     let img_w = img_style.width;
//     let img_h = img_style.height;
//     if (img_style.position === "absolute"){
//         img.style = `margin: 10px auto;
//                     width: 100%;

//                     position: ;
//                     top: ;
//                     left: ;
//                     padding: ;
//                     max-width: ;
//                     object-fit: contain;`
//     } else {
//         img.style = `position: absolute;
//                     top: 0;
//                     left: 0;
//                     max-width: 100vw;
//                     ${img_w > img_h ? "width: 100vw;" : "height: 100vh;"}
//                     object-fit: contain;`
//     }
// }

// document.getElementById('test').onclick = img_zoomer