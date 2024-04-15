let startBtn = document.querySelector(".start-btn");
let header = document.querySelector(".header");
let presentation = document.querySelector(".first");
let map = document.querySelector(".map")


let socialMediassection = document.querySelector(".social-medias")
let mediasTitle = document.querySelector(".medias-title")
let mediasDesc = document.querySelector(".medias-desc")


const examples = [...document.querySelectorAll(".media-example")]
let appName = document.querySelector(".app-name")
let appDesc = document.querySelector(".app-desc")


let textsTitle = document.querySelector(".texts-title")
let textDesc = document.querySelector(".text-desc")

let benefitsSection = document.querySelector(".benefits")
let benefitTitle = document.querySelector(".benefit-title")
let benefitDesc = document.querySelector(".benefit-desc")


let damageSection = document.querySelector(".damages")
let damageTitle = document.querySelector(".damage-title")
let damageDesc = document.querySelector(".damage-desc")
// map-item-active
const mapItems = [...document.querySelectorAll(".map-item")]
const lines = [...document.querySelectorAll(".line-active")]

function Start(){
    presentation.style.position = "absolute"
    presentation.style.top = '0'
    map.style.right = "2%"    
}

startBtn.addEventListener("click", ()=>{
    textsTitle.style.transform = "translateX(0)"
    textsTitle.style.opacity = "1"

    textDesc.style.transform = "translateX(0)"
    textDesc.style.opacity = "1"
})

for (let i = 0; i < mapItems.length; i++) {
    mapItems[i].addEventListener("click", ()=>{
        if(mapItems.indexOf()== lines.indexOf()){
            mapItems[i].classList.add("map-item-active")
            lines[i-1].style.height = '55px'
        }else{
            lines[i-1].style.height = '0px'
            mapItems[i].classList.remove("map-item-active")
        }   
    })
    
}

mapItems[1].addEventListener("click", ()=>{
    socialMediassection.style.top = 0
    mediasTitle.style.transform = "translateX(0)"
    mediasTitle.style.opacity = "1"

    mediasDesc.style.transform = "translateX(0)"
    mediasDesc.style.opacity = "1"
})

mapItems[2].addEventListener("click", ()=>{
    benefitsSection.style.top = 0
    benefitTitle.style.transform = "translateX(0)"
    benefitTitle.style.opacity = "1"

    benefitDesc.style.transform = "translateX(0)"
    benefitDesc.style.opacity = "1"
})


mapItems[3].addEventListener("click", ()=>{
    damageSection.style.top = 0
    damageTitle.style.transform = "translateX(0)"
    damageTitle.style.opacity = "1"

    damageDesc.style.transform = "translateX(0)"
    damageDesc.style.opacity = "1"
    
})




examples[0].addEventListener("click", ()=>{
    appName.innerHTML = "Инстаграм"
    appDesc.innerHTML = "Instagram - это социальная сеть и платформа для обмена фотографиями. Через эту платформу пользователи могут делиться своими фотографиями и видеозаписями, просматривать контент других пользователей, а также взаимодействовать через комментарии и лайки. Пользователи также могут настраивать свой профиль, используя цифровые фильтры и графические элементы."
})

examples[1].addEventListener("click", ()=>{
    appName.innerHTML = "Телеграм"
    appDesc.innerHTML = "Telegram - это мессенджер и платформа для обмена файлами, созданный Павлом Дуровым. Эта платформа позволяет отправлять и получать текстовые сообщения, фотографии, видео и другие файлы. Telegram обеспечивает шифрование для обеспечения конфиденциальности и безопасности пользователей и доступен для различных устройств и платформ, включая компьютеры и смартфоны. Telegram предлагает новости и поддерживает доверие пользователей к интернет-сообществу."
})

examples[2].addEventListener("click", ()=>{
    appName.innerHTML = "Твиттер"
    appDesc.innerHTML = "Twitter - это социальная сеть и микроблог, созданная в 2006 году. С помощью Twitter пользователи могут публиковать короткие сообщения, делиться фотографиями и видео, а также взаимодействовать с сообщениями и контентом других пользователей. Каждое сообщение ограничено 280 символами, и пользователи могут пересылать сообщения, ставить лайки и отвечать на сообщения. Twitter пользуется популярностью во всем мире и известен своей способностью эффективно распространять новости."
})

examples[3].addEventListener('click', ()=>{
    appName.innerHTML = "WhatsApp"
    appDesc.innerHTML = "WhatsApp - это надежное и безопасное мобильное приложение для обмена информацией и общения. Через это приложение пользователи могут отправлять и получать текстовые сообщения, голосовые и видеосообщения, фотографии и документы. WhatsApp также поддерживает голосовые и видеозвонки. Приложение широко используется миллионами людей по всему миру и позволяет устанавливать связь в больших группах, с семьей или друзьями. WhatsApp обеспечивает безопасность и шифрование для данных, позволяя пользователям разрешать доступ к отправленным сообщениям и информации только для себя."
})

examples[4].addEventListener("click", ()=>{
    appName.innerHTML = "YouTube"
    appDesc.innerHTML = "YouTube - это видеоплатформа, принадлежащая и управляемая Google. Через эту платформу пользователи могут загружать, обмениваться и просматривать видео. YouTube является одной из самых популярных и широко используемых видеохостинговых служб в мире. С ее помощью вы можете слушать музыку, смотреть образовательные материалы, научные и информационные видео, загружать контент и общаться с друзьями. Сервис YouTube бесплатен, но приносит доход через рекламу. Этот сервис является платформой для миллионов пользователей, предлагающей широкий выбор тем, жанров и контента."
})