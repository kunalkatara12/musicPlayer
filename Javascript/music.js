console.clear()
const music=document.querySelector('audio')
const img=document.querySelector('img')
const play=document.getElementById("play")
const title=document.getElementById("title")
const artist=document.getElementById("artist")
const previous =document.getElementById("previous")
const next=document.getElementById("next")
// const sTs=document.getElementsByClassName("fa-play-circle")
// const node = document.createElement('li');
let isPlaying = false;
const songs=[{
    name:"music_1",
    title:"Future+Mask+Off+Aesthetic+Remix",
    artist:"Unknown"  
},
{
    name:"music_2",
    title:"Future+Mask+Off+Lyrics+Lyric+Video",
    artist:"Unknown"
},
{
   name:"music_3",
   title:"Pyar Ki Ek Kahani - X Brown Munde Hindi Song",
   artist:"Unknown"
}]

 const playMusic=()=>{
     isPlaying=true
     music.play();
     play.classList.replace('fa-play','fa-pause')
     img.classList.add("animation")
 };
 const pauseMusic=()=>{
     isPlaying=false
     music.pause();
     play.classList.replace('fa-pause','fa-play')
     img.classList.remove("animation")
 };
 play.addEventListener('click',()=>{
     if(isPlaying){
         pauseMusic();
     }
     else{
         playMusic();
     }
 })

const loadSong=(songs)=>{
    title.textContent=songs.title;
    artist.textContent=songs.artist;
    music.src="../music_player Latest/Others/"+songs.title+".mp3"
}
songIdx=0
const nextSong=()=>{
    songIdx=(songIdx+1) % songs.length;
    loadSong(songs[songIdx]);
    playMusic();
};
const prevSong = ()=>{ 
    songIdx = (songIdx - 1 + songs.length) % songs.length;
    loadSong(songs[songIdx]);
    playMusic();
};
    function Select1(){
    loadSong(songs[0]);
        playMusic();
        // sts1.classList.replace('fa-play-circle','fa-pause-circle')
    }
    function Select2() {
    loadSong(songs[1]);
        playMusic();
        // sts2.classList.replace('fa-play-circle','fa-pause-circle')
    }                     
    function Select3(){
    loadSong(songs[2]);
        playMusic();
        // sts3.classList.replace('fa-play-circle','fa-pause-circle')
    }

next.addEventListener('click',nextSong);
previous.addEventListener('click',prevSong);

