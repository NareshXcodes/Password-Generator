const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let spa1El = document.getElementById("spa1")
let spa2El = document.getElementById("spa2")

function generatePassword(){
    let pass1 = ""
    let pass2 = ""
    for(let i =0 ; i < 16 ; i++){
        let g1 = Math.floor(Math.random()*91)
        let g2 = Math.floor(Math.random()*91)
        pass1 += characters[g1]
        pass2 += characters[g2]
    }
    spa1El.textContent = pass1
    spa2El.textContent = pass2
}

function copy(element){
    const text = element.textContent;
    // Create temporary textarea
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    // Select and copy
    textarea.select();
    document.execCommand('copy');
    // Remove textarea
    document.body.removeChild(textarea);
    // Show feedback
    alert('Copied: ' + text);
    
}