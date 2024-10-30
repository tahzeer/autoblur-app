function autoblur() {
    
    const style = document.createElement('style');
    document.head.appendChild(style);
    
    style.sheet.insertRule(`
        input {
            filter: blur(5px) !important;
            -webkit-filter: blur(5px) !important;
        }
    `, 0);
    
    style.sheet.insertRule(`
        input:hover {
            filter: blur(0) !important;
            -webkit-filter: blur(0) !important;
        }
    `, 1);
}

autoblur();

// look dynamic fields
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
            autoblur();
        }
    });
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});