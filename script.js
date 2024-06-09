const currentEl = document.getElementById ("current");
const textEl = document.getElementById ("text");
const charactersEl = document.getElementById ("characters");

textEl.addEventListener ("input", () => {
// charactersEl.classList.add ("active");
 // console.log(textEl.value);

 const textValue = textEl.value;                               //bunu yazmasaq // if (textEl.value === "") ve ya if (textEl.value.length ===0) kimi de yaza bilerik
 if (textValue) {
    charactersEl.classList.add ("active");       //textValue !== ""  // Veya  if(textValue === "") 
                                                                        //{ charactersEl.classlist.remove ("remove")}
 }                                                                     //else {charactersEl.classlist.add ("remove") }

 else {
    charactersEl.classList.remove ("active");
 }

 currentEl.innerHTML = textEl.value.length;                //divin icine nese yazdiqca 0/10 artir

 if(textEl.value.length > 10) {
    textEl.style.color = "#ff0000";
    textEl.style.borderColor = "#ff0000";
    charactersEl.style.color = "#ff0000";
 }
 else {
    textEl.style.color = "#5f0a87";
    textEl.style.borderColor = "#5f0a87";
    charactersEl.style.color = "#5f0a87";
 }
    
})


