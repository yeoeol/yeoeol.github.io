(function () {
    const { resumeData, categoryMap, stackGroupLabels, resumeRenderers, setupProjectModal } = window;

    const educationList = document.querySelector("#education-list");
    const certificateList = document.querySelector("#certificate-list");
    const experienceList = document.querySelector("#experience-list");
    const qaList = document.querySelector("#qa-list");
    const skillGroups = document.querySelector("#skill-groups");
    const projectGrid = document.querySelector("#project-grid");
    const filterButtons = document.querySelectorAll(".filter-button");
    const modal = document.querySelector("#project-modal");
    const modalClose = document.querySelector(".modal-close");

    let activeFilter = "all";

    const projectModal = setupProjectModal({
        categoryMap,
        modal,
        modalClose,
        projects: resumeData.projects,
        renderModalStacks: resumeRenderers.renderModalStacks,
        stackGroupLabels
    });

    function renderProjects() {
        resumeRenderers.renderProjects(projectGrid, resumeData.projects, activeFilter);
    }

    function setFilter(filter) {
        activeFilter = filter;
        filterButtons.forEach((button) => {
            const isActive = button.dataset.filter === filter;
            button.classList.toggle("is-active", isActive);
            button.setAttribute("aria-selected", String(isActive));
        });
        renderProjects();
    }

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => setFilter(button.dataset.filter));
    });

    projectGrid.addEventListener("click", (event) => {
        const button = event.target.closest("[data-project-id]");

        if (button) {
            projectModal.openProject(button.dataset.projectId);
        }
    });

    resumeRenderers.renderEducation(educationList, resumeData.education);
    resumeRenderers.renderCertificates(certificateList, resumeData.certificates);
    resumeRenderers.renderExperiences(experienceList, resumeData.experiences);
    resumeRenderers.renderQuestions(qaList, resumeData.questions);
    resumeRenderers.renderSkills(skillGroups, resumeData.skills);
    renderProjects();
})();
