// script.js

document.addEventListener('DOMContentLoaded', () => {
    const projectBoxes = document.querySelectorAll('.project-box');
    
    projectBoxes.forEach(box => {
        box.addEventListener('click', () => {
            window.location.href = box.getAttribute('data-url');
        });
    });
});
