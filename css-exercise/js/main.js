var scrollToTopBtn = document.getElementById('scrollToTopBtn');
var navToggle = document.getElementById('hamburger');
var navItems = document.getElementById('items');
var isActive = false;

window.onscroll = function(){
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
};

function scrollToTop(e) {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

function toggleFunction(){
    if(!isActive){
        navItems.classList.remove("show");
        navToggle.classList.remove("active");
        isActive = true;
    }else{
        navItems.classList.add("show");
        navToggle.classList.add("active");
        isActive = false;
    }
};

function restartToggle() {
    if(!isActive){
        isActive=false;
        toggleFunction();
    }else{
        isActive = true;
        toggleFunction();
    }
};