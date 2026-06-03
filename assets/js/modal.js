(function () {
    function setupProjectModal(options) {
        const { modal, modalClose, projects, categoryMap, stackGroupLabels, renderModalStacks } = options;

        function renderToggleCard(title, items) {
            if (!items || items.length === 0) {
                return "";
            }

            return `
                <details class="modal-toggle-card">
                    <summary>${title}</summary>
                    <ul>
                        ${items.map((item) => `<li>${item}</li>`).join("")}
                    </ul>
                </details>
            `;
        }

        function renderProjectNotes(project) {
            return [
                renderToggleCard("배운점", project.learnings),
                renderToggleCard("문제해결", project.troubleshooting)
            ].join("");
        }

        function openProject(projectId) {
            const project = projects.find((item) => item.id === projectId);

            if (!project) {
                return;
            }

            document.querySelector("#modal-visual").style.setProperty("--visual", project.visual);
            document.querySelector("#modal-category").textContent = categoryMap[project.category];
            document.querySelector("#modal-title").textContent = project.title;
            document.querySelector("#modal-description").textContent = project.description;
            document.querySelector("#modal-meta").innerHTML = `
                <div><dt>기간</dt><dd>${project.period}</dd></div>
                <div><dt>역할</dt><dd>${project.role}</dd></div>
                <div><dt>인원</dt><dd>${project.people}</dd></div>
            `;
            document.querySelector("#modal-highlights").innerHTML = project.highlights
                .map((highlight) => `<li>${highlight}</li>`)
                .join("");
            document.querySelector("#modal-stacks").innerHTML = renderModalStacks(project.stacks, stackGroupLabels);
            document.querySelector("#modal-project-notes").innerHTML = renderProjectNotes(project);
            document.querySelector("#modal-link").href = project.link;

            modal.classList.add("is-open");
            modal.setAttribute("aria-hidden", "false");
            document.body.classList.add("modal-open");
            modalClose.focus();
        }

        function closeProject() {
            modal.classList.remove("is-open");
            modal.setAttribute("aria-hidden", "true");
            document.body.classList.remove("modal-open");
        }

        modalClose.addEventListener("click", closeProject);

        modal.addEventListener("click", (event) => {
            if (event.target === modal) {
                closeProject();
            }
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && modal.classList.contains("is-open")) {
                closeProject();
            }
        });

        return {
            closeProject,
            openProject
        };
    }

    window.setupProjectModal = setupProjectModal;
})();
