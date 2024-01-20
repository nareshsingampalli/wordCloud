let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];

let wordsContainer= document.getElementById('wordsContainer');
let userInput= document.getElementById('userInput');
let addBtn= document.getElementById('addBtn');
let errorMsg= document.getElementById('errorMsg');

function createWord(word){
    let randomFontSize = Math.ceil(Math.random()*50);
    let spanEl = document.createElement('span');
    spanEl.style.fontSize = randomFontSize+'px';
    spanEl.classList.add('span');
    wordsContainer.appendChild(spanEl);
    spanEl.textContent = word;
}

addBtn.onclick= function(){
    let userInputValue = userInput.value;
    if(userInputValue === ''){
        errorMsg.textContent = "please enter a word";
    }else{
        createWord(userInputValue);
        userInput.value="";
        errorMsg.textContent="";
    }
}

for(let word of wordCloud){
    createWord(word);
}
