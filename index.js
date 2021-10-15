let showClock = setInterval(saatfunction, 1000);
let showDay = setInterval(dayFunction, 1000);


let nameUser = prompt("Lütfen Adınızı Giriniz: ");

document.querySelector("#userName").innerHTML = nameUser;





function saatfunction(){
    let date = new Date;
    let time = date.toLocaleTimeString();
    document.querySelector("#dateSpan").innerHTML = time;
    
}


function dayFunction() {
    let d = new Date();
    let weekday = new Array();
    weekday[0] = "Pazzar";
    weekday[1] = "Pazartesi";
    weekday[2] = "Salı";
    weekday[3] = "Çarşamba";
    weekday[4] = "Perşembe";
    weekday[5] = "Cuma";
    weekday[6] = "Cumartesi";

    let day = weekday[d.getUTCDay()];
    document.querySelector("#daySpan").innerHTML =  day;
}

