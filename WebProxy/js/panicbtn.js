const DEFAULT_PANIC_KEY = ']';
const DEFAULT_PANIC_URL = 'https://classroom.google.com/';

document.addEventListener('keydown', (e) => {
    const panicKey = localStorage.getItem('panicKey') || DEFAULT_PANIC_KEY;
    const panicURL = localStorage.getItem('panicURL') || DEFAULT_PANIC_URL;

    if (e.key.toLowerCase() === panicKey.toLowerCase()) {
        if (window.disableWarnOnce) window.disableWarnOnce();
        window.location.href = panicURL;
    }
});
