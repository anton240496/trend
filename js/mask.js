function multi ()
{
var themes = []; // начальный пустой список выбранных тем
var list_checkbox = document.querySelectorAll ('input[type="checkbox"]'); //коллекция ВСЕХ чекбоксов страницы
for (var j = 0, J = list_checkbox.length; j < J; j++)
if (list_checkbox[j].checked) themes.push (document.querySelector ('label[for=' + list_checkbox[j].id + ']').innerText);
 
if (themes.length) alert ('Выбраны темы: ' + themes.join (', '));
else alert ('Темы не выбраны');
}


const mask = (selector) => {
    function setMask() {
        let matrix = '+###############';

        maskList.forEach(item => {
            let code = item.code.replace(/[\s#]/g, ''),
                phone = this.value.replace(/[\s#-)(]/g, '');

            if (phone.includes(code)) {
                console.log(phone, code);
                matrix = item.code;
            }
        });

        let i = 0,
            val = this.value.replace(/\D/g, '');

        this.value = matrix.replace(/(?!\+)./g, function (a) {
            return /[#\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
        });

    }

    let inputs = document.querySelectorAll(selector);

    inputs.forEach(input => {
        if (!input.value) input.value = '';
        input.addEventListener('input', setMask);
        input.addEventListener('focus', setMask);
        input.addEventListener('blur', setMask);
    });
};

