let nameInput=prompt("Enter Your Name")

let helloPDOM=document.querySelector("#hello-p")
let timePDOM=document.querySelector("#time-p")

saatiGoster()
helloPDOM.innerHTML=`Merhaba Uzaylı ${nameInput} Dünyamıza Hoş Geldin!!`

function saatiGoster(){
    let tarih=new Date();
    timePDOM.innerHTML=`${tarih.toLocaleDateString()} ${tarih.toLocaleTimeString()} `
}
setInterval(saatiGoster, 1000);




