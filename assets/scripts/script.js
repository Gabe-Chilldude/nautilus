const navbar = document.getElementsByClassName('navbar')

window.onscroll = function() {morphNavbar()};

function morphNavbar()  {
        if (document.documentElement.scrollTop > 50)  {
            for(let i of navbar) {
                i.clasName = "navbar navbar_red"
            }
        } else  {
            for(let i of navbar) {
                i.clasName = "navbar"
            }
        }
    
}