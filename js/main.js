

const op2s = document.querySelectorAll('.apply_wrap')

for (op2 of op2s) {
op2.addEventListener('click', e => {
    const curb = e.target.closest('.apply_item_block')
    if (!curb) return;
    const onli = op2.querySelector('.on');
    onli?.classList.remove('on')
    const curli = curb.closest('.apply_item');
    curli.classList.toggle('on', curli !== onli)
})}


$(function () {
    let btns = document.querySelectorAll('.ask_que');

    for (btn of btns) {
        btn.addEventListener('click', function () {
            let card = this.closest('.ask_list li');
            let arr = card.querySelector('.ask_otvet');
            if (arr.style.opacity === "0") {
                card.classList.add("on")
                arr.style.opacity = ".5"


            } else {
                card.classList.remove("on")
                arr.style.opacity = "0"


            }

        });
    }
});



$(function () {
    let btns = document.querySelectorAll('.learn_questions');
    for (btn of btns) {
        btn.addEventListener('click', function () {
            let card = this.closest('.learn_item');
            let arr = card.querySelector('.otvet');
            if (arr.style.opacity === "0") {
                card.classList.add("on")
                arr.style.opacity = "1"


            } else {
                card.classList.remove("on")
                arr.style.opacity = "0"


            }

        });
    }
});

var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    return false;
});

const  btn_700 = document.querySelectorAll('.btn_700 ');
const  pay_700 = document.querySelector('.pay_700');
const  btn_2500 = document.querySelectorAll('.btn_2500 ');
const  pay_2500 = document.querySelector('.pay_2500');
const  pay_closes = document.querySelectorAll('.pay_close');
const zatem = document.querySelector('.zatem');
const body = document.querySelector('.body');



for (tarif_btn of btn_700) {
tarif_btn.addEventListener('click', e => {
  pay_700.classList.add('pay_open');
  zatem.classList.add('zatem_open');
  body.style.overflowY ='hidden'
 
})};

for (pay_close of pay_closes) {
pay_close.addEventListener('click', e => {
  pay_700.classList.remove('pay_open');
  zatem.classList.remove('zatem_open');
  body.style.overflowY ='auto'
})};


for (tarif_btn of btn_2500) {
tarif_btn.addEventListener('click', e => {
  pay_2500.classList.add('pay_open');
  zatem.classList.add('zatem_open');
  body.style.overflowY ='hidden'
  
// const  pay_btn  = document.querySelector('.checkmark');

 
})};

for (pay_close of pay_closes) {
pay_close.addEventListener('click', e => {
  pay_2500.classList.remove('pay_open');
  zatem.classList.remove('zatem_open');
  body.style.overflowY ='auto'

})};




const  pay_btn  = document.querySelector('.pay_checkb');
const  checkmark  = document.querySelector('.checkmarkb');

pay_btn.addEventListener('click', e => {

 
var themes = []; // начальный пустой список выбранных тем
var list_checkbox = document.querySelectorAll ('input[type="checkbox"]'); //коллекция ВСЕХ чекбоксов страницы
for (var j = 0, J = list_checkbox.length; j < J; j++)
if (list_checkbox[j].checked) themes.push (document.querySelector )
 
// if (themes.length) alert (' ' + themes.join (', '));
  checkmark.classList.add('checkmark_bord');


});

const  pay_btn2  = document.querySelector('.pay_checkb2');
const  checkmark2  = document.querySelector('.checkmarkb2');


pay_btn2.addEventListener('click', e => {

 
var themes = []; // начальный пустой список выбранных тем
var list_checkbox2 = document.querySelectorAll ('input[type="checkbox"]'); //коллекция ВСЕХ чекбоксов страницы
for (var j = 0, J = list_checkbox2.length; j < J; j++)
if (list_checkbox2[j].checked) themes.push (document.querySelector )
 

  checkmark2.classList.add('checkmark_bord');


});
