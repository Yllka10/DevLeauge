const modal = document.getElementById('imageModal');
const viewMoreBtns = document.querySelectorAll('.view-more-btn');
const closeBtn = document.querySelector('.close-btn');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');

viewMoreBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        
        const imageUrl = btn.getAttribute('data-image');
        const title = btn.getAttribute('data-title');
        const description = btn.getAttribute('data-description');

        
        modalImage.src = imageUrl;
        modalTitle.textContent = title;
        modalDescription.textContent = description;

        
        modal.style.display = "block";
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
});

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
