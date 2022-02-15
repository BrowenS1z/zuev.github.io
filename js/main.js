const ROOT_PRODUCT = document.getElementById('beats_list');

let htmlCatalog = '';
BEATS.forEach(({id, dataID,img, title, date, plays, time, url_track}) => {
    htmlCatalog += 
    `
    <tr class="hoder_radius">
        <td class="col1"><span class="number_position">${id}</span><i class="fas fa-play btnPlayer player ico_play pauseActive" data-id="${dataID}"></i></td>
        <td class="col2"><img src="${img}" alt=""></td>
        <td class="col3">${title}</td>
        <td class="col4">${date}</td>
        <td class="col5">${plays}</td>
        <td class="col6">${time}</td>
        <td class="col7"><a class="shopping-bag" href="#"><img src="img/shopping-bag.png" alt=""></a></td>
    </tr>
    `;
});

ROOT_PRODUCT.innerHTML = htmlCatalog;


const playBtn = document.querySelector('.fas'),
    player = document.querySelector('.player'),
    audio = document.querySelector('.audio'),
    btnPlayer = document.querySelector('.ico_play'),
    number_position = document.querySelector('.number_position')

document.addEventListener('click', (event) =>{
    if(event.target.classList.contains('fas')) {
        audio.src = BEATS[event.target.dataset.id].url_track; // Получение ссылки на аудио
        const isPlayning = player.classList.contains('play');
        if(isPlayning){
            pauseSong();
        }
        else{
            playSong();
        }
    }
});

var a = document.querySelectorAll('.btnPlayer');
for (var i = 0; i < a.length; ++i) {
    a[i].onclick = function(e) {
        var li = BEATS[e.target.dataset.id].dataID;

        if(a[li].classList.contains("fa-play")){
            a[li].classList.remove('fa-play');
            a[li].classList.add('fa-pause');
        }
        else{
            a[li].classList.add('fa-play');
            a[li].classList.remove('fa-pause');
        }
    }
}

// Play
function playSong() {
    // const x = BEATS[event.target.dataset.id].dataID;
    player.classList.add('play');
    audio.play();
}

// Pause
function pauseSong() {
    player.classList.remove('play');
    audio.pause();
}

// Переключить язык


// Прокрутка Якорь
function scrollTo(element){
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}

// Яконрь Beats
const Beats = document.querySelector('#Beats');
const YaBeats = document.querySelector('#YaBeats')

Beats.addEventListener('click', () => {
    scrollTo(YaBeats);
});

// Яконрь /* About */
const About = document.querySelector('#About');
const YaAbout = document.querySelector('#YaAbout')

About.addEventListener('click', () => {
    scrollTo(YaAbout);
});

// Яконрь /* Skills */
const Skills = document.querySelector('#Skills');
const YaSkills = document.querySelector('#YaSkills')

Skills.addEventListener('click', () => {
    scrollTo(YaSkills);
});

// Яконрь /* Reviews */
const Reviews = document.querySelector('#Reviews');
const YaReviews = document.querySelector('#YaReviews')

Reviews.addEventListener('click', () => {
    scrollTo(YaReviews);
});

// Яконрь /* YacontactUS */
const contactUS = document.querySelector('#contactUS');
const YacontactUS = document.querySelector('#YacontactUS')

contactUS.addEventListener('click', () => {
    scrollTo(YacontactUS);
});