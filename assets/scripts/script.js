const navbar = document.getElementsByClassName('navbar')

window.onscroll = function() {morphNavbar()};

function morphNavbar()  {
        if (document.documentElement.scrollTop > 50)  {
            for(i=0;i<navbar.length;i++)  {
                navbar[i].className = "navbar navbar_red"
            }
        } else  {
            for(i=0;i<navbar.length;i++)  {
                navbar[i].className = "navbar"
            }
        }
    
}

// TODO tranformar fors em for of's