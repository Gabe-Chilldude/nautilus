const navbar = document.getElementsByClassName('navbar_container')
const hamburger = document.getElementsByClassName('hamburger_icon')
const dropdown = document.getElementsByClassName('menu_dropdown')

window.onscroll = function() {morphNavbar()};

function morphNavbar()  {
        if (document.documentElement.scrollTop > 50)  {
            for(i=0;i<navbar.length;i++)  {
                navbar[i].className = "navbar_container navbar_red"
            }
        } else  {
            for(i=0;i<navbar.length;i++)  {
                navbar[i].className = "navbar_container"
            }
        }
    
}

document.getElementById('hamburger').onclick = function() {
	for(i=0;i<a.length;i++)  {
		toggleMenu(dropdown[i])
	}
}

function toggleMenu(p)  {
	p.classList.toggle('hidden')
}
