function autoblur() {
    
    const style = document.createElement('style');
    document.head.appendChild(style);
    
    style.sheet.insertRule(`
        input[type="password"] {
            filter: blur(5px) !important;
            -webkit-filter: blur(5px) !important;
        }
    `, 0);
    
    style.sheet.insertRule(`
        input[type="password"]:hover {
            filter: blur(0) !important;
            -webkit-filter: blur(0) !important;
        }
    `, 1);
}

autoblur();

// for dynamic fields
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
            addBlurToPasswordFields();
        }
    });
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});