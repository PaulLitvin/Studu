
    window.addEventListener('DOMContentLoaded', function(){
        "use strict";

        function currentTime(){
            let time = new Date(),
                elem = document.querySelector('.time'),
                hours = addZero(time.getHours()),
                minutes = addZero(time.getMinutes()),
                seconds = addZero(time.getSeconds());

            elem.innerHTML = hours + ":" + minutes + ":" + seconds;
        }
        
        currentTime();

        let intreval = setInterval(currentTime, 1000);

        function addZero(num){
            if(num < 10){
                num = '0' + num;
            }
            return num;
        }
    });
        
    