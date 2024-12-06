async function nowPlaying(){
    try{

        const res = await fetch("https://what-am-i-listening.onrender.com/now-playing");
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json()

        const albumnCover = document.getElementById("albumn-cover")
        const name = document.getElementById("song-name")

        name.innerText = data.name;
        albumnCover.src = data.albumArt;

    }catch(err){
        console.log(err)
        document.getElementById("card").style.display = "none";
        document.getElementById("error").style.display = "block";
        
    }
}

nowPlaying();