let images = document.querySelectorAll('.image');
images.forEach((img) => {
    img.addEventListener('dragstart', dragStart);
    img.addEventListener('dragover', (e) => e.preventDefault());
    img.addEventListener('drop', dragDrop);
    img.addEventListener('dragend', dragEnd);
});