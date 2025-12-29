function loadResources()
{
    const bgImage = new Image();
    bgImage.src = 'resources/images/conference-background.svg';

    bgImage.onload = () => {
        document.body.classList.remove('loading');
    };

    // Fallback
    setTimeout(() => {
        document.body.classList.remove('loading');
    }, 3000);
}

window.addEventListener('load', () => {
    loadResources()
    
    // close navbar on link click
    navLinks = document.querySelectorAll('#navbar ul li a')
    navLinks.forEach(navlink => {
        navlink.addEventListener('click', () => {
            hideSideBar()
        })
    });
});


//
// User events
//

navbar = document.getElementById('navbar')
overlay = document.getElementById('overlay')

function showSideBar()
{
    navbar.classList.add('show')
    overlay.classList.add('show')
}

function hideSideBar()
{   
    navbar.classList.remove('show')
    overlay.classList.remove('show')
}

