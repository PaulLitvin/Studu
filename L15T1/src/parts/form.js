function form(){
    
    let message = {
        loading: 'Загрузка...',
        success: 'Скоро мы с Вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelectorAll('form'),
        input = document.querySelectorAll('input'),
        statusMessage = document.createElement('div');

    //Валидация формы
    input.forEach((element) => {
        let regExp = new RegExp();
        regExp = /[+0-9]/gi;
        element.addEventListener('input', function (event) {
            if (element.name === "phone") {
                if (event.data.match(regExp) == undefined) {
                    element.value = '';
                }
            } else if (element.type === 'number') {
                if (element.value == "") {
                    element.value = "";
                    element.innerHTML = "";
                }
            }
        });
    });

    statusMessage.classList.add('status');

    form.forEach((element) => {

        element.addEventListener('submit', function (event) {

            event.preventDefault();
            element.appendChild(statusMessage);
            let formData = new FormData(element);


            function postData(data) {

                return new Promise(function (resolve, reject) {
                    let request = new XMLHttpRequest();

                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

                    let obj = {};
                    formData.forEach(function (value, key) {
                        obj[key] = value;
                    });
                    let json = JSON.stringify(obj);

                    request.onreadystatechange = function () {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4) {
                            if (request.status == 200 && request.status < 300) {
                                resolve();
                            } else {
                                reject();
                            }
                        }
                    };
                    request.send(json);
                });
            }

            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }

            postData(formData)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => {
                    statusMessage.innerHTML = message.success;
                })
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput);
        });
    });
}

module.exports = form;