(function () {
    function getProjectStackPreview(stacks) {
        return Object.values(stacks)
            .flat()
            .filter(Boolean)
            .slice(0, 3);
    }

    function getSkillIcon(item) {
        if (item.icon) {
            return `<span class="skill-icon"><i class="${item.icon}" aria-hidden="true"></i></span>`;
        }

        return `<span class="skill-icon skill-fallback" aria-hidden="true">${item.badge}</span>`;
    }

    function renderEducation(container, education) {
        container.innerHTML = education.map((item) => `
            <article class="info-card">
                <span class="card-label">${item.status}</span>
                <h3>${item.school}</h3>
                <dl>
                    <div><dt>전공</dt><dd>${item.major}</dd></div>
                    <div><dt>재학 기간</dt><dd>${item.period}</dd></div>
                    <div><dt>졸업여부</dt><dd>${item.status}</dd></div>
                    <div><dt>평점평균</dt><dd>${item.gpa}</dd></div>
                    <div><dt>학위</dt><dd>${item.degree}</dd></div>
                </dl>
            </article>
        `).join("");
    }

    function renderCertificates(container, certificates) {
        container.innerHTML = certificates.map((item) => `
            <article class="info-card">
                <h3>${item.name}</h3>
                <dl>
                    <div><dt>취득일</dt><dd>${item.acquiredAt}</dd></div>
                    <div><dt>상태</dt><dd>${item.status}</dd></div>
                    <div><dt>주관사</dt><dd>${item.issuer}</dd></div>
                </dl>
            </article>
        `).join("");
    }

    function renderExperiences(container, experiences) {
        container.innerHTML = experiences.map((item) => `
            <article class="timeline-item">
                <div class="timeline-period">${item.period}</div>
                <div>
                    <h3>${item.title}</h3>
                    <p><strong>${item.role}</strong></p>
                    <p>${item.description}</p>
                </div>
            </article>
        `).join("");
    }

    function renderQuestions(container, questions) {
        container.innerHTML = questions.map((item) => `
            <article class="qa-item">
                <h3>${item.question}</h3>
                <p>${item.answer}</p>
            </article>
        `).join("");
    }

    function renderSkills(container, skills) {
        container.innerHTML = skills.map((group) => `
            <article class="skill-group">
                <h3>${group.group}</h3>
                <ul class="skill-list">
                    ${group.items.map((skill) => `
                        <li class="skill-item">
                            ${getSkillIcon(skill)}
                            <span>
                                <span class="skill-name">${skill.name}</span>
                            </span>
                        </li>
                    `).join("")}
                </ul>
            </article>
        `).join("");
    }

    function renderProjects(container, projects, activeFilter) {
        const visibleProjects = activeFilter === "all"
            ? projects
            : projects.filter((project) => project.category === activeFilter);

        container.innerHTML = visibleProjects.map((project) => `
            <article class="project-card" style="--visual: ${project.visual}">
                <div class="project-visual" aria-hidden="true"></div>
                <div class="project-card-body">
                    <div class="project-tags">
                        <span class="project-tag">${project.categoryLabel}</span>
                        ${getProjectStackPreview(project.stacks).map((tag) => `<span class="project-tag">${tag}</span>`).join("")}
                    </div>
                    <h3>${project.title}</h3>
                    <p>${project.summary}</p>
                    <button class="project-detail" type="button" data-project-id="${project.id}">자세히 보기</button>
                </div>
            </article>
        `).join("");
    }

    function renderModalStacks(stacks, stackGroupLabels) {
        return Object.entries(stackGroupLabels)
            .filter(([key]) => stacks[key] && stacks[key].length > 0)
            .map(([key, label]) => `
                <section class="modal-stack-group">
                    <h4>${label}</h4>
                    <div class="modal-stack-tags">
                        ${stacks[key].map((stack) => `<span>${stack}</span>`).join("")}
                    </div>
                </section>
            `).join("");
    }

    window.resumeRenderers = {
        renderCertificates,
        renderEducation,
        renderExperiences,
        renderModalStacks,
        renderProjects,
        renderQuestions,
        renderSkills
    };
})();
