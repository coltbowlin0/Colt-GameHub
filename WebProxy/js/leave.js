let warn = true;

function disableWarnOnce() {
    warn = false;
    setTimeout(() => {
        warn = true;
    }, 1500);
}

window.addEventListener("beforeunload", (e) => {
    if (!warn) return;
    e.preventDefault();
    e.returnValue = "";
});

document.addEventListener("click", (e) => {
    const a = e.target.closest("a[href]");
    if (a) {
        if (a.target === "_blank") return;
        if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
        if (a.hasAttribute("download")) return;

        const url = new URL(a.href, location.href);
        if (url.origin === location.origin) {
            disableWarnOnce();
        }
        return;
    }

    const btn = e.target.closest("[data-href]");
    if (btn) {
        const url = new URL(btn.getAttribute("data-href"), location.href);
        if (url.origin === location.origin) {
            disableWarnOnce();
        }
    }
});

window.go = function (path) {
    const url = new URL(path, location.href);
    if (url.origin === location.origin) {
        disableWarnOnce();
    }
    location.href = url.href;
};
