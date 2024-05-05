let currentImage = null;

function dragStart() {
    draggedImage = this;
    currentImage = this.nextSibling;
    setTimeout(() => this.style.display = 'none', 0);
}

function dragDrop() {
    this.style.border = 'none';
    this.parentNode.insertBefore(draggedImage, this);
    draggedImage.parentNode.insertBefore(currentImage, draggedImage.nextSibling);
}