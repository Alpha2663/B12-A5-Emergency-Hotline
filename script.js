function getElement(id) {
    const element = document.getElementById(id);
    return element;
}
const hearts = document.getElementsByClassName('heart_icon');
const heartCount = getElement('heart_count');
for (let i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener('click', function () {
        let convertedCount = parseInt(heartCount.innerText);
        convertedCount++;
        heartCount.innerText = convertedCount
    })

}
const callCoinElement = getElement('call_coin');
let callCoin = parseInt(callCoinElement.innerText);


document.getElementById('call_national').addEventListener('click', function () {
  
    if (callCoin < 20) {
        alert('insufficient coin');
        return;
    }
      callCoin -= 20;
    alert("For National Emergency Service, Dial: 999");
    callCoinElement.innerText = callCoin;
    const callHistory = getElement('call_history');

    const callDiv = document.createElement('div');
    callDiv.className = 'flex items-center gap-3 bg-[#FAFAFA] p-1 mt-4';
    callDiv.innerHTML = `
     <div>
       <h1 class="font-semibold">National Emergency</h1>
       <p class="text-[#5C5C5C]">999</p>
   </div>
   <p class="text-[#5C5C5C]">${new Date().toLocaleTimeString()}</p>
   `


    callHistory.appendChild(callDiv);
})
document.getElementById('clear_button').addEventListener('click', function () {
    getElement('call_history').innerHTML = ''
})