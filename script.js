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
});


//
// User events
//

function showSideBar()
{
    const sidebar = document.querySelector('.sidebar')
    const menuIcon = document.querySelector('nav #menu-icon')

    sidebar.style.display = "flex"
    menuIcon.style.visibility = "hidden"
}

function hideSideBar()
{
    const sidebar = document.querySelector('.sidebar')
    const menuIcon = document.querySelector('nav #menu-icon')

    sidebar.style.display = "none"
    menuIcon.style.visibility = "visible"
}