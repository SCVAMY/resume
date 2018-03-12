



window.onscroll = function(){
    console.log(window.scrollY);
    if(window.scrollY > 0){
        topNavBar.classList.add('sticky')
    }else{
        topNavBar.classList.remove('sticky');
    }
}

var liTags = document.getElementsByClassName('menuTrigger');
for( let i = 0; i < liTags.length; i++){
    liTags[i].onmouseenter = function(event){
        let ul = event.currentTarget.getElementsByTagName('ul')[0];
        ul.classList.add("active");
    }
    liTags[i].onmouseleave = function(){
        let ul = event.currentTarget.getElementsByTagName('ul')[0];
        console.log(ul);
        ul.classList.remove("active");
    }
}