document.addEventListener('DOMContentLoaded', () => {
    // --- Lightbox Functionality ---
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.lightbox-close');

    if (lightbox && lightboxImg && closeBtn) {
        const galleryItems = document.querySelectorAll('.gallery-item img');

        galleryItems.forEach(img => {
            img.addEventListener('click', () => {
                lightbox.style.display = 'block';
                lightboxImg.src = img.src;
                if (lightboxCaption) {
                    lightboxCaption.innerHTML = img.dataset.title || '';
                }
            });
        });

        const closeLightbox = () => {
            lightbox.style.display = 'none';
        }

        closeBtn.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) { // Close if clicking on the background
                closeLightbox();
            }
        });
    }

    // --- Twitter Widget Loader ---
    // Ensure Twitter widgets are loaded after navigation or dynamic content changes.
    if (typeof twttr !== 'undefined' && twttr.widgets) {
        twttr.widgets.load();
    }
});
