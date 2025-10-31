document.addEventListener('DOMContentLoaded', function() {
function togglenav(){
    let icon = document.querySelector(".icon");
    let navLinks = document.querySelector('.navLinks');


    icon.addEventListener('click', function(){
        if(navLinks.style.display === 'block'){
            navLinks.style.display = 'none';
        } else{
            navLinks.style.display = 'block';
        }
    })

}
togglenav()
});