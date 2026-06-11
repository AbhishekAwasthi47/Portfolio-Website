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
        : '';

    card.innerHTML = `
    <div class="card-image-wrapper" style="${imageStyle}"></div>
    
    <div class="card-content">
        <div class="card-details">
            <p class="project-overline">${project.overline || 'Featured Project'}</p>
            <h3 class="project-title">
                <a href="${project.link}" target="_blank" rel="noopener noreferrer">${project.title}</a>
            </h3>
            <div class="project-description">
                <p>${project.description}</p>
            </div>
            
            <div class="project-tech">
                ${project.tags.map(tag => `<span class="glass-tag">${tag}</span>`).join('')}
            </div>

            <div class="card-footer">
                ${project.github ? `
                <a href="${project.github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub Link">
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>` : ''}
                <a href="${project.link}" target="_blank" rel="noopener noreferrer" aria-label="External Link">
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
            </div>
        </div>
    </div>
  `;

    return card;
}
