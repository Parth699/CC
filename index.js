
function changeNavbar(){
    if(window.scrollY>200){
        document.querySelector('.navbar').classList.add("light");
    }
    else{
        document.querySelector('.navbar').classList.remove("light");
    }
}

// document.querySelector(".app__navbar-menu").addEventListener("onclick",toggleMenu);

function openMenu(){
    document.querySelector('.app__navbar-menu-list').style.transform='translateX(0%)';
}
function closeMenu(){
    document.querySelector('.app__navbar-menu-list').style.transform='translateX(-100%)';
}