/* SERMON BUILDER LOGIC — SOVEREIGN EDITION 2026 */

const SermonBuilder = {
    notes: [],

    // Initialize the builder
    init() {
        console.log("Sermon Builder Architect active.");
        this.renderInterface();
    },

    // Add a verse or note to the stack
    addToStack(text, reference) {
        const entry = {
            id: Date.now(),
            content: text,
            ref: reference,
            timestamp: new Date().toLocaleTimeString()
        };
        this.notes.push(entry);
        this.updateDisplay();
    },

    // Create the visual workspace
    renderInterface() {
        const container = document.getElementById('sermon-builder-container');
        if (!container) return;

        container.innerHTML = `
            <div class="glass" style="margin-top: 40px; border-left: 5px solid var(--gold);">
                <h3 style="color: var(--gold); letter-spacing: 2px; font-size: 0.8rem; margin-bottom: 20px;">SERMON ARCHITECT</h3>
                <div id="stack-display" style="min-height: 100px; margin-bottom: 20px;">
                    <p style="opacity: 0.5; font-style: italic;">Your scripture stack is empty. Add verses to begin architecting...</p>
                </div>
                <div class="controls" style="display: flex; gap: 10px;">
                    <button onclick="SermonBuilder.clearStack()" style="background: rgba(255,0,0,0.1); color: #ff4444; font-size: 11px;">CLEAR ALL</button>
                    <button onclick="window.print()" class="btn-gold" style="flex: 1;">EXPORT TO PDF</button>
                </div>
            </div>
        `;
    },

    updateDisplay() {
        const display = document.getElementById('stack-display');
        if (this.notes.length === 0) {
            display.innerHTML = `<p style="opacity: 0.5; font-style: italic;">Stack empty...</p>`;
            return;
        }

        display.innerHTML = this.notes.map(note => `
            <div class="verse-block" style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05); animation: textBlurIn 0.5s ease;">
                <p style="font-family: 'Playfair Display', serif; font-size: 1.1rem; margin-bottom: 8px;">"${note.content}"</p>
                <small style="color: var(--primary); font-weight: 800; letter-spacing: 1px;">— ${note.ref}</small>
            </div>
        `).join('');
    },

    clearStack() {
        if(confirm("Clear the current sermon architecture?")) {
            this.notes = [];
            this.updateDisplay();
        }
    }
};

// Start the engine
document.addEventListener('DOMContentLoaded', () => SermonBuilder.init());

