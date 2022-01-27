const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navlinks');
    const navLinks = document.querySelectorAll('.navlinks li');

    burger.addEventListener('click', () =>{
        nav.classList.toggle('nav-active');
        let menuOpen = false;

        if (!menuOpen){
            burger.classList.toggle('open');
            menuOpen = true;
        } else {
            burger.classList.remove('open');
            menuOpen = false;
        }
    });
}

navSlide();
