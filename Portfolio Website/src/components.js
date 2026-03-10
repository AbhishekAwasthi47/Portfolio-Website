// UI Components

export function createSkillPill(skill) {
    const pill = document.createElement('span');
    pill.className = 'skill-pill animate-fade-in-up';
    pill.textContent = skill;
    return pill;
}

export function createProjectCard(project) {
    const card = document.createElement('article');
    card.className = 'advanced-project-card animate-fade-in-up';

    const imageStyle = project.image
        ? `background-image: url('${project.image}'); background-size: cover; background-position: center;`
        : `background: ${project.gradient}`;

    card.innerHTML = `
    <div class="card-glow" style="background: ${project.gradient}"></div>
    <div class="card-content">
        <div class="card-image-wrapper" style="${imageStyle}">
            <div class="overlay-glass">
                <span class="view-btn">View Live</span>
            </div>
            <div class="decorative-grid"></div>
        </div>
        
        <div class="card-details">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            
            <div class="project-tech">
                ${project.tags.map(tag => `<span class="glass-tag">${tag}</span>`).join('')}
            </div>

            <div class="card-footer">
                <a href="${project.link}" class="project-link" aria-label="View ${project.title}">
                    Explore Case Study
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
                </a>
            </div>
        </div>
    </div>
  `;

    return card;
}
