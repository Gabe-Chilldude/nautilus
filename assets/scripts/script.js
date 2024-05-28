const navbar = document.getElementsByClassName('navbar_container')
const hamburger = document.getElementsByClassName('hamburger_icon')
const dropdown = document.getElementsByClassName('menu_dropdown')

window.onscroll = function() {morphNavbar()};

function morphNavbar()  {
        if (document.documentElement.scrollTop > 50)  {
            for(i=0;i<navbar.length;i++)  {
                navbar[i].classList.add('navbar_red')
            }
        } else  {
            for(i=0;i<navbar.length;i++)  {
                if(dropdown[i].className == 'menu_dropdown hidden')  {
                    navbar[i].classList.remove('navbar_red')
                }
            }
        }
}

function toggleMenu()  {
    for(i=0;i<dropdown.length;i++)  {
        dropdown[i].classList.toggle('hidden')
    }
    if(document.documentElement.scrollTop < 50)  {
        for(i=0;i<navbar.length;i++)  {
            navbar[i].classList.toggle('navbar_red')
        }
    }
}
