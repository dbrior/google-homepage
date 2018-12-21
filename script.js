function nav(elem){
    let children = document.getElementsByClassName("item");
    for(var x=0;x<children.length;x++){
        children[x].classList.remove("active");
    }
    elem.parentElement.classList.toggle("active");
}