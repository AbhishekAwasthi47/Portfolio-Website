(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function n(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(s){if(s.ep)return;s.ep=!0;const t=n(s);fetch(s.href,t)}})();const y={skills:["JavaScript (ES6+)","TypeScript","React","Node.js","HTML & CSS","Vite","TailwindCSS","REST APIs","Git & GitHub","UI/UX Design","Performance Tuning","SEO"],projects:[{id:5,title:"Kaze Zen Restaurant",overline:"Featured Project",description:"A premium Japanese restaurant website featuring dark luxury aesthetics, a glassmorphism UI, and wind-inspired micro-animations. Built with semantic HTML and handcrafted CSS for peak performance.",tags:["HTML5","CSS3","JavaScript","UI/UX"],image:"https://images.unsplash.com/photo-1516684732162-798a0062be99?q=80&w=1000&auto=format&fit=crop",link:"https://github.com/AbhishekAwasthi47/restaurant-website",github:"https://github.com/AbhishekAwasthi47/restaurant-website"},{id:1,title:"KarmaCloset",overline:"Featured Project",description:"A high-performance e-commerce storefront with seamless checkout flow, micro-animations, and dynamic product loading. Architected for scale with component-driven development.",tags:["React","Node.js","Stripe","Framer Motion"],image:"https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop",link:"https://project-ruby-eight-90.vercel.app",github:"#"},{id:2,title:"Shortly App",overline:"Featured Project",description:"A fast and responsive URL shortener application. Features a clean, modern interface for quickly transforming long links into shareable short URLs.",tags:["React","JavaScript","CSS","API"],image:"/shortly_mockup.png",link:"https://frontend-rose-seven-63.vercel.app",github:"#"},{id:3,title:"Nexus AI Chat Interface",overline:"Featured Project",description:"A sleek, dark-themed AI conversational interface designed for maximum accessibility and smooth interaction transitions. Features real-time message streaming and intelligent auto-responses.",tags:["TypeScript","Vite","Tailwind","OpenAI API"],image:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",link:"#",github:"#"},{id:4,title:"Architectural Portfolio",overline:"Featured Project",description:"A minimalist, horizontal-scrolling showcase for an architecture firm. Emphasis on large imagery, dramatic white-space, and typographic hierarchy using GSAP scroll-driven animations.",tags:["HTML5","GSAP","Vanilla CSS"],image:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",link:"#",github:"#"}]};function x(a){const e=document.createElement("span");return e.className="skill-pill animate-fade-in-up",e.textContent=a,e}function A(a){const e=document.createElement("article");e.className="advanced-project-card animate-fade-in-up";const n=a.image?`background-image: url('${a.image}'); background-size: cover; background-position: center;`:"";return e.innerHTML=`
    <div class="card-image-wrapper" style="${n}"></div>
    
    <div class="card-content">
        <div class="card-details">
            <p class="project-overline">${a.overline||"Featured Project"}</p>
            <h3 class="project-title">
                <a href="${a.link}" target="_blank" rel="noopener noreferrer">${a.title}</a>
            </h3>
            <div class="project-description">
                <p>${a.description}</p>
            </div>
            
            <div class="project-tech">
                ${a.tags.map(c=>`<span class="glass-tag">${c}</span>`).join("")}
            </div>

            <div class="card-footer">
                ${a.github?`
                <a href="${a.github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub Link">
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>`:""}
                <a href="${a.link}" target="_blank" rel="noopener noreferrer" aria-label="External Link">
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
            </div>
        </div>
    </div>
  `,e}document.addEventListener("DOMContentLoaded",()=>{const a=document.getElementById("skills-container");a&&y.skills.forEach((i,o)=>{const r=x(i);r.style.animationDelay=`${.05*(o%6)}s`,a.appendChild(r)});const e=document.getElementById("projects-grid");e&&y.projects.forEach((i,o)=>{const r=A(i);r.style.animationDelay=`${.15*o}s`,e.appendChild(r)});const n={threshold:.1,rootMargin:"0px 0px -50px 0px"},c=new IntersectionObserver(i=>{i.forEach(o=>{o.isIntersecting&&(o.target.classList.add("visible"),c.unobserve(o.target))})},n);document.querySelectorAll(".animate-fade-in-up").forEach(i=>{i.classList.add("scroll-hidden"),c.observe(i)});const s=document.getElementById("contactForm"),t=document.getElementById("form-status"),d=document.getElementById("submitBtn");s&&s.addEventListener("submit",async i=>{i.preventDefault();const o=new FormData(s),r=Object.fromEntries(o.entries()),u=d.querySelector(".btn-text"),g=u.textContent;u.textContent="Sending...",d.disabled=!0,t.className="form-status",t.textContent="";try{const l=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}),v=await l.json();if(l.ok)t.textContent=v.message,t.classList.add("success"),s.reset();else throw new Error(v.error||"Something went wrong")}catch(l){t.textContent=l.message,t.classList.add("error")}finally{u.textContent=g,d.disabled=!1}});const p=document.querySelector("[data-cursor-dot]"),h=document.querySelector("[data-cursor-outline]");p&&h&&window.matchMedia("(pointer: fine)").matches?(document.body.style.cursor="none",window.addEventListener("mousemove",i=>{const o=i.clientX,r=i.clientY;p.style.left=`${o}px`,p.style.top=`${r}px`,h.animate({left:`${o}px`,top:`${r}px`},{duration:400,fill:"forwards"})}),document.querySelectorAll("a, button, .advanced-project-card, input, textarea, .ai-fab").forEach(i=>{i.addEventListener("mouseenter",()=>{document.body.classList.add("interacting")}),i.addEventListener("mouseleave",()=>{document.body.classList.remove("interacting")})})):(p&&(p.style.display="none"),h&&(h.style.display="none"));const m=document.getElementById("main-nav");let f=0;window.addEventListener("scroll",()=>{const i=window.scrollY;i>100?m.style.boxShadow="0 10px 30px -10px rgba(2, 12, 27, 0.7)":m.style.boxShadow="none",i>f&&i>300?m.style.transform="translateY(-100%)":m.style.transform="translateY(0)",f=i});const w=document.querySelectorAll("section[id]"),k=document.querySelectorAll(".nav-item"),S=()=>{const i=window.scrollY+200;w.forEach(o=>{const r=o.offsetTop,u=o.offsetHeight,g=o.getAttribute("id");i>=r&&i<r+u&&k.forEach(l=>{l.classList.remove("active"),l.getAttribute("href")===`#${g}`&&l.classList.add("active")})})};window.addEventListener("scroll",S)});class b{constructor(){this.isOpen=!1,this.isTyping=!1,this.quickReplies=["What are your skills?","Contact information","Available for work?"],this.messages=[{sender:"ai",text:"Hi! I am Abhishek's AI assistant. Let me know if you have any questions or want to collaborate!"}],this.wrapper=document.getElementById("ai-assistant-wrapper"),this.wrapper&&this.init()}init(){this.render(),this.attachEvents()}render(){this.wrapper.innerHTML=`
      <div id="ai-chat-widget" class="ai-widget ${this.isOpen?"open":""}">
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
          ${this.messages.map(n=>`
            <div class="ai-message ${n.sender}">
              <div class="message-bubble">${n.text}</div>
            </div>
          `).join("")}
          ${this.isTyping?`
            <div class="ai-message ai">
              <div class="message-bubble typing-indicator">
                <span class="typing-dot"></span>
                <span class="typing-dot"></span>
                <span class="typing-dot"></span>
              </div>
            </div>
          `:""}
        </div>
        ${this.messages.length>0&&!this.isTyping?`
        <div class="quick-replies">
          ${this.quickReplies.map(n=>`
            <span class="quick-reply-chip" data-reply="${n}">${n}</span>
          `).join("")}
        </div>`:""}
        <div class="ai-footer">
          <input type="text" id="ai-input" placeholder="Type a message..." autocomplete="off">
          <button id="ai-send-btn">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
          </button>
        </div>
      </div>
      <button id="ai-fab" class="ai-fab ${this.isOpen?"hide":""}">
        <span class="ai-fab-icon">💬</span>
      </button>
    `;const e=document.getElementById("ai-messages-container");e&&(e.scrollTop=e.scrollHeight)}attachEvents(){this.wrapper.addEventListener("click",e=>{if((e.target.closest("#ai-toggle-btn")||e.target.closest("#ai-fab"))&&(this.isOpen=!this.isOpen,this.render()),e.target.closest("#ai-send-btn")&&this.sendMessage(),e.target.classList.contains("quick-reply-chip")){const n=document.getElementById("ai-input");n.value=e.target.getAttribute("data-reply"),this.sendMessage()}}),this.wrapper.addEventListener("keypress",e=>{e.key==="Enter"&&e.target.id==="ai-input"&&this.sendMessage()})}sendMessage(){const n=document.getElementById("ai-input").value.trim();if(!n)return;this.messages.push({sender:"user",text:n}),this.isTyping=!0,this.render();const c=document.getElementById("ai-input");c.value="",c.focus();let s="Thanks for reaching out! I will make sure Abhishek gets this message. Please leave your email if you want a follow up.";const t=n.toLowerCase();t.includes("skill")||t.includes("tech")||t.includes("stack")?s="Abhishek specializes in Vanilla JS, HTML5, CSS3, Vite, React, Node.js, and TypeScript. He loves building high-performance, aesthetically premium applications.":t.includes("contact")||t.includes("email")||t.includes("reach")?s="You can reach Abhishek directly at abhishekawasthi657@gmail.com. He usually responds within 24 hours.":(t.includes("work")||t.includes("hire")||t.includes("freelance"))&&(s="Yes, Abhishek is currently open to new opportunities and freelance projects! Shoot him an email to discuss details."),setTimeout(()=>{this.isTyping=!1,this.messages.push({sender:"ai",text:s}),this.render()},1200)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>new b):new b;
