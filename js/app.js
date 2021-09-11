let navItem = document.querySelectorAll('.navbar .navbar-nav li a');
navItem.forEach(ele => {
    ele.addEventListener('click',() =>{
        removeOn()
        ele.classList.add('onActive');
    })
});

function removeOn(){
    navItem.forEach(x => {
        x.classList.remove('onActive');
    })
}