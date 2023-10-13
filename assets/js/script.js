document.querySelector('.menu-open').addEventListener('click', ()=>{
    document.querySelector('header nav').style.display = 'block'
    setTimeout(()=>{
        document.querySelector('header nav').style.marginLeft = '-62vw'
    },1)

})

document.querySelector('.menu-close').addEventListener('click', ()=>{
    document.querySelector('header nav').style.marginLeft = '160vw'
    setTimeout(()=>{
        document.querySelector('header nav').style.display = 'none'
    },200)

})