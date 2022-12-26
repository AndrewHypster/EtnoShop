console.log('  Привіт, мене звати Андрій, мені 18 років і я створив цей сайт для мами і свого портфоліо.\n  Цей сайт є першим і код може бути засмітченим і не логічним.')

// каталог і суб меню
const catalog = document.querySelector('#catalog')
const subMenu = document.querySelector('#invisible')

catalog.addEventListener('click', function(){
    console.log('subMenu open or close')
    subMenu.classList.toggle('invisible')
});

// коли вибараємо в каталозі магніти то опис сайту та картини зникають і якщо вибираємо картини...
const menuPaint = document.querySelector('#menuPaint')
const menuMagnet = document.querySelector('#menuMagnet')
const paint = document.querySelectorAll('#painting')
const magnet = document.querySelectorAll('#magnet')
const mainGoal = document.querySelector('#main-goal')
const paintTitle = document.querySelector('#paintTitle')
const magnetTitle = document.querySelector('#magnetTitle')
const opus = document.querySelector('#opus')
const opusPaints = document.querySelector('#opusPaints')
const imgTovar = document.querySelectorAll('#imgTovar')
const imgPaint = document.querySelectorAll('#imgPaint')
const aboutUsPage = document.querySelector('#aboutUsPage')

menuPaint.addEventListener('click', function(){
    console.log('menuPaint')
    for (i=0; i < paint.length; i++) {
        paint[i].classList.remove('invisible')
        mainGoal.classList.add('invisible')
        paintTitle.classList.remove('invisible')
        magnetTitle.classList.add('invisible')
        opus.classList.add('invisible')
        opusPaints.classList.add('invisible')
        imgPaint[i].classList.add('invisible')
        subMenu.classList.add('invisible')
        aboutUsPage.classList.add('invisible')
    }
    for(i=0; i < magnet.length; i++){
        magnet[i].classList.add('invisible')
    }
})

menuMagnet.addEventListener('click', function(){
    console.log('menuMagnet')
    for (i=0; i < magnet.length; i++) {
        magnet[i].classList.remove('invisible')
        mainGoal.classList.add('invisible')
        magnetTitle.classList.remove('invisible')
        paintTitle.classList.add('invisible')
        opus.classList.add('invisible')
        opusPaints.classList.add('invisible')
        imgTovar[i].classList.add('invisible')
        subMenu.classList.add('invisible')
        aboutUsPage.classList.add('invisible')
    }
    for(i=0; i < paint.length; i++) {
        paint[i].classList.add('invisible')
    }
})

// створюємо сайт про певний товар
// магнітики
const opusTovary = document.querySelectorAll('#opusTovary')
const vidhyku_magnet = document.querySelector('#vidhyku_magnet')
const vidhyku_paint = document.querySelector('#vidhyku_paint')
magnet.forEach(function(item, index){              //перераховує всі магніти
    item.addEventListener('click', function(){    //item - на той що натискнули виконується функція:
        for (i=0; i < magnet.length; i++) {      // cторінка очищається
            magnet[i].classList.add('invisible')
            mainGoal.classList.add('invisible')
            paintTitle.classList.add('invisible')
            magnetTitle.classList.add('invisible')
        }
        for (i=0; i < paint.length; i++) {
            paint[i].classList.add('invisible')
        }
        for (i=0; i < imgTovar.length; i++) {  // з'являється сторінка товару
            opus.classList.remove('invisible')
            imgTovar[index].classList.remove('invisible')
            opusTovary[index].classList.remove('invisible')
        }
        vidhyku_magnet.classList.remove('invisible')
    })
})

// картини
const opusPaint = document.querySelectorAll('#opusPaint')
paint.forEach(function(item, index){              //перераховує всі картини
    item.addEventListener('click', function(){   //item - на ту що натискнули виконується функція:
        for (i=0; i < paint.length; i++) {      // cторінка очищається
            paint[i].classList.add('invisible')
            mainGoal.classList.add('invisible')
            magnetTitle.classList.add('invisible')
            paintTitle.classList.add('invisible')
        }
        for (i=0; i < magnet.length; i++) {
            magnet[i].classList.add('invisible')
        }
        for (i=0; i < imgPaint.length; i++) {  // з'являється сторінка товару
            opusPaints.classList.remove('invisible')
            imgPaint[index].classList.remove('invisible')
            opusPaint[index].classList.remove('invisible')
        }
        vidhyku_paint.classList.remove('invisible')
    })
})

const nadislatuVidhyk = document.querySelectorAll('#nadislatuVidhyk')
const vidhykPovid = document.querySelectorAll('#vidhykPovid')
nadislatuVidhyk.forEach(function(item, index){
    item.addEventListener('click', function(){
        vidhykPovid[index].classList.remove('invisible')
    })
})

const aboutUs = document.querySelector('#aboutUs')
aboutUs.addEventListener('click', function() {
    for (i=0; i < paint.length; i++) {          // cторінка очищається
        paint[i].classList.add('invisible')
        mainGoal.classList.add('invisible')
        magnetTitle.classList.add('invisible')
        paintTitle.classList.add('invisible')
    }
    for (i=0; i < magnet.length; i++) {
        magnet[i].classList.add('invisible')
    }
    opus.classList.add('invisible')
    opusPaints.classList.add('invisible')
    
    aboutUsPage.classList.remove('invisible')    // появляється сторінка Про нас
})