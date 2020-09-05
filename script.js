const sDays = document.getElementById('selected-day');
const sMonth = document.getElementById('selected-month');
const sYear = document.getElementById('selected-year');


window.onload = () => {
    for (let i = 1; i<=31; i++){
        sDays.options [sDays.options.length] = new Option(i, i);
    }
    for (let i = 1; i<=12; i++){
        sMonth.options [sMonth.options.length] = new Option(i, i);
    }
    for (let i = 2021; i<=2050; i++){
        sYear.options [sYear.options.length] = new Option(i, i);
    }
}



let currDates = new Date();

sMonth.onchange = () => {
    if (sDays.options.length != 30 && (sMonth.value == 4 || sMonth.value == 6 || sMonth.value == 9 || sMonth.value == 11)){
        sDays.removeChild(sDays.options[sDays.options.length-1]);
        sDays.value = 1;
    } else if(sMonth.value == 2 && sYear.value%4 == 0){
        if(sDays.length === 30){
            sDays.removeChild(sDays.options[sDays.options.length-1]);
            sDays.value = 1;
        } else if (sDays.length === 31){
            sDays.removeChild(sDays.options[sDays.options.length-1]);
            sDays.removeChild(sDays.options[sDays.options.length-1]);
            sDays.value = 1;
        }
    } else if(sMonth.value == 2) {
        if(sDays.length === 30){
            sDays.removeChild(sDays.options[sDays.options.length-1]);
            sDays.removeChild(sDays.options[sDays.options.length-1]);
            sDays.value = 1;
        } else if(sDays.length === 31) {
            sDays.removeChild(sDays.options[sDays.options.length-1]);
            sDays.removeChild(sDays.options[sDays.options.length-1]);
            sDays.removeChild(sDays.options[sDays.options.length-1]);
            sDays.value = 1;
        }
    } else {
        switch(sDays.options.length){
            case 28:
                sDays.options[sDays.options.length] = new Option(29, 29);
                sDays.options[sDays.options.length] = new Option(30, 30);
                sDays.options[sDays.options.length] = new Option(31, 31);
                sDays.value = 1;
                break;
            case 29:
                sDays.options[sDays.options.length] = new Option(30, 30);
                sDays.options[sDays.options.length] = new Option(31, 31);
                sDays.value = 1;
                break;
            case 30:
                sDays.options[sDays.options.length] = new Option(31, 31);
                sDays.value = 1;
                break;
            default:    
        }
    };
}

sYear.onchange = () => {
    if((sDays.value == 29 || sDays.value == 28) && sYear%4 != 0 && sMonth.value == 2){
        sDays.value = 1;
    }
}


document.getElementById('sbm-btn').onclick = () => {
    let currDates = new Date();
    currDates.setFullYear(sYear.value, sMonth.value-1, sDays.value);
    currDates.setHours(0);
    console.log(currDates);
    document.getElementById('enter').style.display = 'none';
    document.getElementById('result').style.display = 'flex';
    function countdown() {
        const currDate = new Date();
        const seconds = (currDates - currDate)/1000
        const days = Math.floor(seconds/3600/24);
        const hours = Math.floor(seconds/3600) % 24;
        const minutes = Math.floor(seconds/60) % 60;
        document.getElementById('second').innerHTML = Math.floor(seconds%60);
        document.getElementById('minute').innerHTML = minutes;
        document.getElementById('hour').innerHTML = hours;
        document.getElementById('day').innerHTML = days;
    }
    setInterval(countdown, 1000);
}