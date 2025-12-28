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