/* SOVEREIGN CLOCK MODULE 2026 */

(function() {
    // Create the clock element
    const clockContainer = document.createElement('div');
    clockContainer.id = 'sovereign-clock';
    
    // Style the clock via JS so you don't have to touch your CSS file
    Object.assign(clockContainer.style, {
        position: 'fixed',
        top: '20px',
        right: '30px',
        textAlign: 'right',
        zIndex: '10000',
        pointerEvents: 'none',
        fontFamily: "'Poppins', sans-serif"
    });

    document.body.appendChild(clockContainer);

    function updateClock() {
        const now = new Date();
        
        // Format Time
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        
        // Format Date
        const options = { weekday: 'short', month: 'short', day: 'numeric' };
        const dateStr = now.toLocaleDateString('en-US', options).toUpperCase();

        clockContainer.innerHTML = `
            <div style="font-size: 18px; font-weight: 700; letter-spacing: 2px; color: #fff; text-shadow: 0 0 10px rgba(212, 175, 55, 0.3);">
                ${hours}:${minutes}<span style="color: #d4af37; font-size: 12px; margin-left: 2px;">${seconds}</span>
            </div>
            <div style="font-size: 9px; letter-spacing: 3px; color: #1f80ff; font-weight: 500; margin-top: -2px;">
                ${dateStr} | SOVEREIGN JURISDICTION
            </div>
        `;
    }

    // Initialize and sync every second
    updateClock();
    setInterval(updateClock, 1000);
})();

