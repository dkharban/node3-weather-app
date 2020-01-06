console.log('Client side javascript')
// fetch ("http://localhost:4000/weather?address=!").then((response) =>{
    
// response.json().then((data) =>{
//     if(data.error)
//     {
//     console.log(data.error)
//     return
//     }
//     if(data)
// console.log(data)
// })
// });

const weatherForm= document.querySelector('form')
const input= document.querySelector('input')
const message1=document.querySelector('#message-1')
const message2=document.querySelector('#message-2')

weatherForm.addEventListener('submit',(e)=>{
    message1.textContent='loading'
    message2.textContent=''
    e.preventDefault()
    const url="/weather?address="+ input.value;
    fetch (url).then((response) =>{
    
response.json().then((data) =>{
    if(data.error)
    {
        message1.textContent=data.error
    
    }
    else{
        message1.textContent=data.temperature
        message2.textContent=data.rain
    }
})
});

})
