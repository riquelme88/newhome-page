document.querySelector('.menu-open').addEventListener('click', ()=>{
    document.querySelector('header nav').style.display = 'block'
    setTimeout(()=>{
        document.querySelector('header nav').style.marginLeft = '-72vw'
    },1)
    window.document.body.style.overflow = 'hidden'
    setTimeout(()=>{
        document.querySelector('.back').style.display = 'block'
    },80)

})

document.querySelector('.menu-close').addEventListener('click', ()=>{
    document.querySelector('header nav').style.marginLeft = '160vw'
    setTimeout(()=>{
        document.querySelector('header nav').style.display = 'none'
    },200)
    window.document.body.style.overflow = ''
    document.querySelector('.back').style.display = 'none'

})