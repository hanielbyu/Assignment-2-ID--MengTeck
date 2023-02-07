const menuHamburger = document.querySelector(".menu-logo")
        const navs = document.querySelector("nav")
        menuHamburger.addEventListener('click',()=>{
            navs.classList.toggle('mobile-menu')
        })