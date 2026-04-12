(function() {
    const s = io();

    s.on("onlineCount", (count) => {
        const el = document.getElementById("online-count");
        if (el) el.textContent = count;
    });

    window.globalSocket = s;
})();