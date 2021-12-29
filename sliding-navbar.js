const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navlinks');
    const navLinks = document.querySelectorAll('.navlinks li');

    burger.addEventListener('click', () =>{
        nav.classList.toggle('nav-active');
        let menuOpen = false;
        const line1 = document.querySelector('.line1');
        const line2 = document.querySelector('.line2');
        const line3 = document.querySelector('.line3');

        if (!menuOpen){
            line1.classList.toggle('open');
            line2.classList.toggle('open');
            line3.classList.toggle('open');
            menuOpen = true;
        } else {
            line1.classList.remove('open');
            line2.classList.remove('open');
            line3.classList.remove('open');
            menuOpen = false;
        }
    });
}

navSlide();
