function message (letter) {
    console.log("The '" + letter +"' key is pressed.");
}
let keysEvent = ["KeyA", "KeyS", "KeyD","KeyF",
    "KeyG", "KeyH", "KeyJ", "KeyW", "KeyE","KeyT","KeyY","KeyU"];


document.addEventListener("keydown", function(event) {
   for (i = 0; i < keysEvent.length; i++){
       if (event.code == keysEvent[i]) {
           let key = keysEvent[i];
           let letter = key.substr(3,1);
           message(letter);
           let audio = document.createElement("AUDIO");
           audio.src = "/audio/"+ letter + ".mp3";
           audio.play();
       }
   }
});