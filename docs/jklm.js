console.log("init word load")

function g() {
  var a = new Array()
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word.includes(document.getElementsByClassName("syllable")[0].textContent)){ a.push(word)}
  }
  console.log(a.sort((a,b)=>{return Math.sign((a.length+(Math.random()>0.6?1:0))-b.length)}))
}
var preWord = document.getElementsByClassName("syllable")[0].textContent
setInterval(() => {
  if (preWord != document.getElementsByClassName("syllable")[0].textContent) {
    preWord = document.getElementsByClassName("syllable")[0].textContent
    g()
  }
}, 10);

console.log("finished")