/* DIVINE ATMOSPHERE MODULE 2026 */

(function() {
    // 1. Create the Toggle Button
    const toggle = document.createElement('div');
    toggle.id = 'atmosphere-toggle';
    toggle.innerHTML = '✨ FOCUS';
    
    Object.assign(toggle.style, {
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        padding: '10px 15px',
        background: 'rgba(26, 26, 26, 0.8)',
        border: '1px solid #333',
        borderRadius: '30px',
        color: '#888',
        fontSize: '10px',
        fontWeight: '700',
        letterSpacing: '2px',
        cursor: 'pointer',
        zIndex: '10000',
        transition: '0.3s'
    });

    // 2. Create the Focus Overlay (Dims the rest of the screen)
    const overlay = document.createElement('div');
    Object.assign(overlay.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(5px)',
        zIndex: '9998',
        display: 'none',
        pointerEvents: 'none',
        transition: '0.5s'
    });

    document.body.appendChild(toggle);
    document.body.appendChild(overlay);

    let isFocusMode = false;

    toggle.addEventListener('click', () => {
        isFocusMode = !isFocusMode;
        
        if (isFocusMode) {
            overlay.style.display = 'block';
            toggle.style.color = '#1f80ff';
            toggle.style.borderColor = '#1f80ff';
            toggle.innerHTML = '✨ FOCUS ACTIVE';
            // Optional: If you have a focus audio link, you could trigger it here
        } else {
            overlay.style.display = 'none';
            toggle.style.color = '#888';
            toggle.style.borderColor = '#333';
            toggle.innerHTML = '✨ FOCUS';
        }
    });

    // Hover effect
    toggle.addEventListener('mouseenter', () => { toggle.style.background = '#222'; });
    toggle.addEventListener('mouseleave', () => { toggle.style.background = 'rgba(26, 26, 26, 0.8)'; });

})();

