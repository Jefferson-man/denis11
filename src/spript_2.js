function showSubMenu(element) {
    const submenu = element.querySelector('.sub-menu');
    if (submenu) {
        submenu.style.display = 'block';
        submenu.style.opacity = '1';
        submenu.style.transition = 'opacity 0.5s ease'; 
    }
}

function hideSubMenu(element) {
    const submenu = element.querySelector('.sub-menu');
    if (submenu) {
        submenu.style.display = 'none';
        submenu.style.opacity = '0';
        submenu.style.transition = 'opacity 0.5s ease'; 
    }
}
let image = document.getElementById('movingImage');
let position = window.innerWidth;

function moveImage() {
    if (position <= -image.width) {
        position = window.innerWidth; 
    } else {
        position -= 2; 
    }
    image.style.left = position + 'px';
    requestAnimationFrame(moveImage); 
}

moveImage(); 