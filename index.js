//SONG LIST
let list = [
    "Kalank",
    "Khairiyat",
    "LoMaanLiya",
    "Marjaaniyaan",
    "Ranjha",
    "TumseBhiJyada",
    "PyarKarteHoNa",
    "SochLiya"
  ];
const list_len = list.length;
let song_no = 0;  

// SELECTORS
const play = document.getElementById('play');
const previous = document.getElementById('previous');
const next = document.getElementById('next');
const image = document.getElementById('image');
const audio = document.querySelector('audio');
const header = document.querySelector('.header');



//EVENT LISTENERS
play.addEventListener('click',music);

previous.addEventListener('click',previousSong);

next.addEventListener('click',nextSong);




//FUNCTIONS
function music(){
    if(play.classList.contains('fa-play'))
    {
        audio.play();
        play.classList.replace('fa-play','fa-pause');
        image.classList.add('anim');
    }
    else
    {
        audio.pause();
        play.classList.replace('fa-pause','fa-play');
        image.classList.remove('anim');
    }
    
}
function previousSong() {
    song_no = (song_no-1 + list_len)%list_len;
    audio.src = `./songs/${list[song_no]}.mp3`;
    header.innerHTML = `<p>${list[song_no]}</p>`
    play.classList.replace('fa-pause','fa-play');
    music();
}
function nextSong() {
    song_no = (song_no+1 + list_len)%list_len;
    audio.src = `./songs/${list[song_no]}.mp3`;
    header.innerHTML = `<p>${list[song_no]}</p>`
    play.classList.replace('fa-pause','fa-play');
    music();
}


console.log('hello');