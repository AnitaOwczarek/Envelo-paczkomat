const buttonStep0 = document.querySelector('.buttonStep0')
const buttonStep1 = document.querySelector('.buttonStep1')
const buttonStep20 = document.querySelector('.buttonStep20')
const buttonStep21 = document.querySelector('.buttonStep21')

const sectionStep0 = document.querySelector('.step0')
const sectionStep1 = document.querySelector('.step1')
const sectionModal = document.querySelector('.modal')

const intupTelephone = document.getElementById('telephone')
const inputCode = document.getElementById('code')

//przejście z Step0 na Step1
const changeSlide0 = function(){
    sectionStep0.classList.add('hideStep0')
    sectionStep1.classList.remove('hideStep1')
    inputCode.value = "";
    intupTelephone.value = "";
}

//przejście z Step1 na Step2
const changeSlide1 = () => {    
    if(intupTelephone.value.length != 9 || inputCode.value.length != 4 ) return alert("Nieprawidłowy numer telefonu lub kod odbioru! Wprowadź 9-cyfrowy numer telefonu oraz 4-cyfrowy kod")

    else if (isNaN(Number(intupTelephone.value)) || isNaN(Number(inputCode.value)) ) return alert("to nie liczba!")

    else (Number(intupTelephone.value) || Number(inputCode.value)) 
    {
    sectionStep1.classList.add('hideStep1')
    sectionModal.classList.remove('hideModal')
    }
}

//przejście z Step2 na Step0
const changeSlide20 = () => {
    sectionModal.classList.add('hideModal')
    sectionStep0.classList.remove('hideStep0')
}

//przejście z Step2 na Step1
const changeSlide21 = function(){
    sectionModal.classList.add('hideModal')
    sectionStep1.classList.remove('hideStep1')
    inputCode.value = "";
    intupTelephone.value = "";
}

buttonStep0.addEventListener('click', changeSlide0 )
buttonStep1.addEventListener('click', changeSlide1 )
buttonStep20.addEventListener('click',changeSlide20)
buttonStep21.addEventListener('click', changeSlide21)