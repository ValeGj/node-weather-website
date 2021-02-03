const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');
const messageThree = document.querySelector('#message-3');
const messageFour = document.querySelector('#message-4');


weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const location = search.value;

    messageOne.textContent='Loading ...';
    messageTwo.textContent = '';
    messageThree.textContent = '';
    messageFour.textContent = '';

    fetch('/weather?address=' + location).then((response)=>{
    response.json().then((data)=>{
        if(data.error) {
            messageOne.textContent=data.error;
            messageTwo.textContent = '';
            messageThree.textContent = '';
            messageFour.textContent = '';
            //console.log(data.error);
        } else {
            messageOne.textContent = data.location;
            messageTwo.textContent = data.forecast;
            messageThree.textContent = data.temperature;
            messageFour.textContent = data.feelslike;

            //console.log(data.address);
            //console.log(data.location);
            //console.log(data.forecast);
            //console.log(data.temperature);
            //console.log(data.feelslike);            
        }
    });
});
    
})