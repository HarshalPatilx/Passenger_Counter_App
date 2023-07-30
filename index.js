let saveEl = document.getElementById('save-btn')
let countEl = document.getElementById('count-el')
let paraEl = document.getElementById('para')
console.log(countEl)
let count = 0
function increment(){
    count = count +1
    countEl.innerText = count
}
function save(){
    let countStr = count + " - "
    paraEl.innerHTML += countStr
    console.log(paraEl)
}
 