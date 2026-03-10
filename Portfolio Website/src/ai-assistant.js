// AI Assistant Logic and UI

export class AIAssistant {
  constructor() {
    this.isOpen = false;
    this.isTyping = false;
    this.quickReplies = ["What are your skills?", "Contact information", "Available for work?"];
    this.messages = [
      { sender: 'ai', text: "Hi! I am Abhishek's AI assistant. Let me know if you have any questions or want to collaborate!" }
    ];
    this.wrapper = document.getElementById('ai-assistant-wrapper');
    if (this.wrapper) this.init();
  }

  init() {
    this.render();
    this.attachEvents();
  }

  render() {
    this.wrapper.innerHTML = `
      <div id="ai-chat-widget" class="ai-widget ${this.isOpen ? 'open' : ''}">
        <div class="ai-header">
          <div class="ai-avatar">
            <span class="pulse"></span>
            🤖
          </div>
          <div>
            <h4>Nexus Assistant</h4>
            <span class="ai-status">Online</span>
          </div>
          <button id="ai-toggle-btn" class="ai-close">&times;</button>
        </div>
        <div class="ai-body" id="ai-messages-container">
          ${this.messages.map(m => `
            <div class="ai-message ${m.sender}">
              <div class="message-bubble">${m.text}</div>
            </div>
          `).join('')}
          ${this.isTyping ? `
            <div class="ai-message ai">
              <div class="message-bubble typing-indicator">
                <span class="typing-dot"></span>
                <span class="typing-dot"></span>
                <span class="typing-dot"></span>
              </div>
            </div>
          ` : ''}
        </div>
        ${this.messages.length > 0 && !this.isTyping ? `
        <div class="quick-replies">
          ${this.quickReplies.map(reply => `
            <span class="quick-reply-chip" data-reply="${reply}">${reply}</span>
          `).join('')}
        </div>` : ''}
        <div class="ai-footer">
          <input type="text" id="ai-input" placeholder="Type a message..." autocomplete="off">
          <button id="ai-send-btn">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
          </button>
        </div>
      </div>
      <button id="ai-fab" class="ai-fab ${this.isOpen ? 'hide' : ''}">
        <span class="ai-fab-icon">💬</span>
      </button>
    `;

    // Auto scroll
    const container = document.getElementById('ai-messages-container');
    if (container) container.scrollTop = container.scrollHeight;
  }

  attachEvents() {
    this.wrapper.addEventListener('click', (e) => {
      if (e.target.closest('#ai-toggle-btn') || e.target.closest('#ai-fab')) {
        this.isOpen = !this.isOpen;
        this.render();
      }
      if (e.target.closest('#ai-send-btn')) {
        this.sendMessage();
      }
      if (e.target.classList.contains('quick-reply-chip')) {
        const input = document.getElementById('ai-input');
        input.value = e.target.getAttribute('data-reply');
        this.sendMessage();
      }
    });

    this.wrapper.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && e.target.id === 'ai-input') {
        this.sendMessage();
      }
    });
  }

  sendMessage() {
    const input = document.getElementById('ai-input');
    const text = input.value.trim();
    if (!text) return;

    // Add user message
    this.messages.push({ sender: 'user', text });

    // Hack to preserve input focus by rendering first then resetting
    this.isTyping = true;
    this.render();
    const newInput = document.getElementById('ai-input');
    newInput.value = '';
    newInput.focus();

    // Determine smart response
    let responseText = "Thanks for reaching out! I will make sure Abhishek gets this message. Please leave your email if you want a follow up.";
    const lowerText = text.toLowerCase();

    if (lowerText.includes("skill") || lowerText.includes("tech") || lowerText.includes("stack")) {
      responseText = "Abhishek specializes in Vanilla JS, HTML5, CSS3, Vite, React, Node.js, and TypeScript. He loves building high-performance, aesthetically premium applications.";
    } else if (lowerText.includes("contact") || lowerText.includes("email") || lowerText.includes("reach")) {
      responseText = "You can reach Abhishek directly at abhishekawasthi657@gmail.com. He usually responds within 24 hours.";
    } else if (lowerText.includes("work") || lowerText.includes("hire") || lowerText.includes("freelance")) {
      responseText = "Yes, Abhishek is currently open to new opportunities and freelance projects! Shoot him an email to discuss details.";
    }

    // Simulate AI thinking and responding
    setTimeout(() => {
      this.isTyping = false;
      this.messages.push({ sender: 'ai', text: responseText });
      this.render();
    }, 1200);
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new AIAssistant());
} else {
  new AIAssistant();
}
