
function changeNavbar(){
    if(window.scrollY>200){
        document.querySelector('.navbar').classList.add("light");
    }
    else{
        document.querySelector('.navbar').classList.remove("light");
    }
}

// document.querySelector(".app__navbar-menu").addEventListener("onclick",toggleMenu);

function toggleMenu(){
    console.log("hello")
    // console.log(document.getElementsByClassName("app__navbar-menu-list").style.height);
    document.getElementsByClassName("app__navbar-menu-list").style.display=flex;
}