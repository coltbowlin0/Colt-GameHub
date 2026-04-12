const DEFAULT_TITLE = 'degloved';
const PRELOADED_FAVICONS = [
    '/img/favicon/canvas.ico',
    '/img/favicon/classroom.png',
    '/img/favicon/docs.png',
    '/img/favicon/google.png'
];

function updateFavicon(dataUrl) {
    let link = document.querySelector("link[rel*='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }
    link.href = dataUrl;
}

function closeModal(modal) {
    const modalContent = modal.querySelector('.modal-content');
    if (modalContent) {
        modalContent.classList.add('closing');
        setTimeout(() => {
            modal.style.display = 'none';
            modalContent.classList.remove('closing');
        }, 350);
    } else {
        modal.style.display = 'none';
    }
}


function updateAdsStatus(enabled) {
    const adsStatus = document.getElementById('ads-status');
    if (adsStatus) {
        adsStatus.textContent = enabled ? 'ads are on.' : 'ads are off.';
    }
}


function loadAdPreference() {
    const adsToggle = document.getElementById('ads-toggle');
    const adContainer = document.getElementById('ad-container');
    const adsEnabled = localStorage.getItem('adsEnabled');

    if (adsEnabled === 'true') {
        if (adsToggle) adsToggle.checked = true;
        if (adContainer) adContainer.style.display = 'block';
        updateAdsStatus(true);
    } else {
        if (adsToggle) adsToggle.checked = false;
        if (adContainer) adContainer.style.display = 'none';
        updateAdsStatus(false);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const savedTitle = localStorage.getItem('pageTitle');
    if (savedTitle) {
        document.title = savedTitle;
    }

    const savedFavicon = localStorage.getItem('favicon');
    if (savedFavicon) {
        updateFavicon(savedFavicon);
    }

    const settingsModal = document.getElementById('settings-modal');
    const settingsBtn = document.getElementById('settings-btn');
    const infoModal = document.getElementById('info-modal');
    const infoBtn = document.getElementById('info-btn');
    const pageTitleInput = document.getElementById('page-title');
    const faviconUpload = document.getElementById('favicon-upload');
    const faviconChoices = document.getElementById('favicon-choices');
    const panicKeyInput = document.getElementById('panic-key');
    const panicUrlInput = document.getElementById('panic-url');
    const adsToggle = document.getElementById('ads-toggle');
    const adContainer = document.getElementById('ad-container');

    const closeButtons = document.querySelectorAll('.close-btn');
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal');
            if (modal) {
                closeModal(modal);
            }
        });
    });

    if (panicKeyInput) {
        panicKeyInput.value = localStorage.getItem('panicKey') || DEFAULT_PANIC_KEY;
        panicKeyInput.addEventListener('input', (e) => {
            const key = e.target.value;
            if (key?.length === 1) {
                localStorage.setItem('panicKey', key.toLowerCase());
            }
        });
    }

    if (panicUrlInput) {
        panicUrlInput.value = localStorage.getItem('panicURL') || DEFAULT_PANIC_URL;
        panicUrlInput.addEventListener('input', (e) => {
            if (e.target.value) {
                localStorage.setItem('panicURL', e.target.value);
            }
        });
    }

    if (settingsBtn && settingsModal) {
        settingsBtn.onclick = () => settingsModal.style.display = 'block';
    }

    if (infoBtn && infoModal) {
        infoBtn.onclick = () => infoModal.style.display = 'block';
    }

    window.onclick = (e) => {
        if (e.target?.classList?.contains('modal')) {
            closeModal(e.target);
        }
    };

    window.closeModal = closeModal;

    if (pageTitleInput) {
        pageTitleInput.addEventListener('input', (e) => {
            const title = e.target.value;
            if (title) {
                localStorage.setItem('pageTitle', title);
                document.title = title;
            } else {
                localStorage.removeItem('pageTitle');
                document.title = DEFAULT_TITLE;
            }
        });
    }

    if (faviconChoices) {
        PRELOADED_FAVICONS.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.classList.add('favicon-option');
            img.onclick = () => {
                localStorage.setItem('favicon', src);
                updateFavicon(src);
            };
            faviconChoices.appendChild(img);
        });
    }

    if (faviconUpload) {
        faviconUpload.addEventListener('change', () => {
            const file = faviconUpload.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    localStorage.setItem('favicon', e.target.result);
                    updateFavicon(e.target.result);
                };
                reader.readAsDataURL(file);
            }
        });
    }

    if (adsToggle) {
        adsToggle.addEventListener('change', function() {
            const enabled = this.checked;
            localStorage.setItem('adsEnabled', enabled ? 'true' : 'false');
            if (adContainer) adContainer.style.display = enabled ? 'block' : 'none';
            updateAdsStatus(enabled);
        });
    }


    loadAdPreference();
});