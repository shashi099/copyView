const menu = document.querySelector('.menu');
const cross = document.querySelector('.cross');
const rightNav = document.querySelector('.right-nav');



menu.addEventListener('click', () => {
    console.log("cliked");    
    rightNav.style.left = "0%";
    rightNav.style.top = "5%";
    // rightNav.style.display = "flex";
    // rightNav.style.flexDirection = "column";
    // rightNav.style.backgroundColor = "red";
    // rightNav.style.height = "280px";
    // rightNav.style.right = "0%";
    // rightNav.style.top = "3%";
    // rightNav.style.width = "62%";
})

cross.addEventListener('click', () => {
    console.log("cross");
    // rightNav.position = "absolute";
    rightNav.style.left = "-100%";
});