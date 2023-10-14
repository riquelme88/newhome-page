document.querySelector('.menu-open').addEventListener('click', ()=>{
    document.querySelector('header nav').style.display = 'block'
    setTimeout(()=>{
        document.querySelector('header nav').style.marginLeft = '-72vw'
    },1)
    window.document.body.style.overflow = 'hidden'

})

document.querySelector('.menu-close').addEventListener('click', ()=>{
    document.querySelector('header nav').style.marginLeft = '160vw'
    setTimeout(()=>{
        document.querySelector('header nav').style.display = 'none'
    },200)
    window.document.body.style.overflow = ''

})