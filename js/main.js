window.addEventListener("load", ()=>{
   
    let speach = new SpeechSynthesisUtterance();

    let title = document.createElement("div")
    title.innerText = "Welcome"
    speach.text = "Welcome";
            speach.pitch = 1;
            speach.volume = 1;
            speach.lang = "en-US"
            speach.rate = .6;
            speechSynthesis.speak(speach)
})