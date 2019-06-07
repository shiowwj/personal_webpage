window.onload = () =>{
    window.addEventListener('scroll', ()=>{
        if (window.scrollY > 530){
            if (document.querySelector('.navbar-dark')){
                let darkNavBar = document.querySelector('.navbar-dark');
                darkNavBar.classList.add('navbar-light');
                darkNavBar.classList.add('bg-light');
                darkNavBar.classList.remove('bg-dark');
                darkNavBar.classList.remove('navbar-dark');
                // document.querySelector('.logo').classList.add('logo-transition');
                // document.querySelector('.logo').classList.remove('logo');
            }
        } else {
            if (document.querySelector('.navbar-light')){
                let lightNavBar = document.querySelector('.navbar-light');
                lightNavBar.classList.add('navbar-dark');
                lightNavBar.classList.add('bg-dark');
                lightNavBar.classList.remove('bg-light');
                lightNavBar.classList.remove('navbar-light');
                // document.querySelector('.logo-transition').classList.add('logo');
                // document.querySelector('.logo-transition').classList.remove('logo-transition');
            }
        }
    })

}