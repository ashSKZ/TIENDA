document.addEventListener('DOMContentLoaded', (event) => {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        box.addEventListener('click', () => {
            const url = box.getAttribute('data-url');
            if (url) {
                window.location.href = url;
            }
        });
    });
});
