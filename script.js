document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.image');

    let draggedImage = null;

    images.forEach(image => {
        image.addEventListener('dragstart', dragStart);
        image.addEventListener('dragend', dragEnd);
        image.addEventListener('dragover', dragOver);
        image.addEventListener('dragenter', dragEnter);
        image.addEventListener('dragleave', dragLeave);
        image.addEventListener('drop', dragDrop);
    });

    function dragStart() {
        draggedImage = this;
        setTimeout(() => this.style.display = 'none', 0);
    }

    function dragEnd() {
        draggedImage.style.display = 'block';
        draggedImage = null;
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function dragEnter(e) {
        e.preventDefault();
        this.style.border = '2px dashed #000';
    }

    function dragLeave() {
        this.style.border = 'none';
    }

    function dragDrop() {
        this.style.border = 'none';
        this.parentNode.insertBefore(draggedImage, this);
    }
});
