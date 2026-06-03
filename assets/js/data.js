window.resumeData = {
    education: [
        {
            school: "상명대학교 서울캠퍼스",
            degree: "학사",
            major: "컴퓨터과학과",
            period: "2020.03 - 2026.02",
            status: "졸업",
            gpa: "4.33 / 4.50"
        }
    ],
    certificates: [
        {
            name: "정보처리기사",
            issuer: "한국산업인력공단",
            acquiredAt: "2025.09",
            status: "취득"
        }
    ],
    experiences: [
        {
            period: "2026.06 - 현재",
            title: "개발자 이력서 사이트 제작",
            role: "Personal Branding",
            description: "정적 HTML/CSS/JavaScript 기반으로 프로젝트 필터와 상세 모달을 포함한 개인 이력서 페이지를 구성했습니다."
        },
        {
            period: "학습 및 프로젝트",
            title: "백엔드 중심 개발 경험",
            role: "Backend Developer",
            description: "API 설계, 데이터 모델링, 인증 흐름, 테스트 코드 작성 등 서버 애플리케이션의 핵심 흐름을 학습하고 프로젝트에 적용했습니다."
        }
    ],
    questions: [
        {
            question: "Q. 어떤 개발자를 지향하나요?",
            answer: "기능을 빠르게 만드는 것만큼, 이후에 읽고 고칠 수 있는 구조를 남기는 개발자를 지향합니다. 문제를 재현하고 작은 단위로 검증하는 과정을 중요하게 생각합니다."
        },
        {
            question: "Q. 프로젝트에서 중요하게 보는 것은?",
            answer: "사용자가 실제로 겪는 흐름을 기준으로 요구사항을 정리하고, API와 데이터 구조가 그 흐름을 자연스럽게 받쳐주는지 확인합니다."
        },
        {
            question: "Q. 앞으로의 목표는?",
            answer: "서비스 운영에 필요한 안정성, 테스트, 관찰 가능성을 꾸준히 익혀 팀이 믿고 맡길 수 있는 백엔드 개발자로 성장하는 것입니다."
        }
    ],
    skills: [
        {
            group: "Back-End",
            items: [
                { name: "Java", icon: "devicon-java-plain colored" },
                { name: "Spring", icon: "devicon-spring-plain colored" },
                { name: "JPA", badge: "JPA" },
                { name: "JUnit", icon: "devicon-junit-plain colored" }
            ]
        },
        {
            group: "Database",
            items: [
                { name: "MySQL", icon: "devicon-mysql-plain colored" },
                { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
                { name: "Redis", icon: "devicon-redis-plain colored" }
            ]
        },
        {
            group: "Front-End",
            items: [
                { name: "HTML", icon: "devicon-html5-plain colored" },
                { name: "CSS", icon: "devicon-css3-plain colored" },
                { name: "JavaScript", icon: "devicon-javascript-plain colored" },
                { name: "Thymeleaf", icon: "devicon-thymeleaf-plain colored" }
            ]
        },
        {
            group: "DevOps",
            items: [
                { name: "Git", icon: "devicon-git-plain colored" },
                { name: "GitHub", icon: "devicon-github-original" },
                { name: "Docker", icon: "devicon-docker-plain colored" },
                { name: "GitHub Actions", icon: "devicon-githubactions-plain colored" }
            ]
        }
    ],
    projects: [
        {
            id: "resume-site",
            title: "Developer Resume",
            category: "personal",
            categoryLabel: "개인 프로젝트",
            summary: "개발자 이력과 프로젝트를 한 화면에서 탐색할 수 있는 개인 이력서 사이트",
            description: "GitHub Pages 배포를 염두에 둔 정적 포트폴리오입니다. 프로젝트 유형별 필터링과 상세 모달을 제공해 채용 담당자가 필요한 정보를 빠르게 확인할 수 있도록 구성했습니다.",
            period: "2026.06",
            role: "기획, 디자인, 구현",
            people: "1명",
            stacks: {
                frontend: ["HTML", "CSS", "JavaScript"],
                backend: [],
                database: [],
                devops: ["GitHub Pages"],
                etc: ["Responsive UI"]
            },
            highlights: [
                "프로젝트 데이터를 JavaScript 객체로 분리해 유지보수성을 높였습니다.",
                "전체, 팀, 개인, 회사 기준의 프로젝트 필터를 구현했습니다.",
                "프로젝트별 상세 내용을 모달로 확인할 수 있도록 구성했습니다."
            ],
            learnings: [
                "정적 페이지에서도 데이터와 렌더링 로직을 분리하면 유지보수성이 크게 좋아진다는 점을 배웠습니다.",
                "작은 UI라도 모바일 폭에서 텍스트 길이와 버튼 크기를 함께 확인해야 한다는 점을 체감했습니다."
            ],
            troubleshooting: [
                "프로젝트 상세 모달의 데이터 구조가 커지면서 스택, 주요 내용, 회고 항목을 별도 렌더링 함수로 나눠 복잡도를 낮췄습니다.",
                "로컬 파일 직접 열기와 GitHub Pages 배포를 모두 고려해 빌드 없는 일반 스크립트 구조를 유지했습니다."
            ],
            link: "https://github.com/yeoeol/yeoeol.github.io",
            visual: "linear-gradient(135deg, #5ec4a6 0%, #2f6f73 48%, #1c2833 100%)"
        },
        {
            id: "commerce-api",
            title: "Commerce API",
            category: "team",
            categoryLabel: "팀 프로젝트",
            summary: "주문, 결제, 상품 흐름을 다루는 커머스 백엔드 API 프로젝트",
            description: "상품 조회부터 주문 생성, 결제 요청, 주문 상태 변경까지 이어지는 커머스 도메인의 핵심 흐름을 API로 설계한 프로젝트입니다.",
            period: "프로젝트 기간 입력",
            role: "백엔드 API 설계 및 구현",
            people: "팀 인원 입력",
            stacks: {
                frontend: ["HTML", "CSS", "JavaScript"],
                backend: ["Java", "Spring Boot", "JPA", "JUnit"],
                database: ["MySQL"],
                devops: ["Git", "GitHub"],
                etc: ["REST API"]
            },
            highlights: [
                "주문과 결제 상태 변경 흐름을 명확히 분리했습니다.",
                "예외 응답 형식을 통일해 클라이언트 연동 비용을 낮췄습니다.",
                "주요 서비스 로직에 테스트 코드를 작성했습니다."
            ],
            learnings: [
                "도메인 상태 전이를 명확히 정의해야 주문과 결제 로직의 예외 상황을 줄일 수 있다는 점을 배웠습니다.",
                "API 응답 형식을 초기에 정리하면 프론트엔드 연동과 테스트 작성이 훨씬 수월해집니다."
            ],
            troubleshooting: [
                "주문 생성과 결제 요청이 섞이지 않도록 서비스 책임을 분리하고 상태 변경 지점을 명확히 했습니다.",
                "예외 케이스를 테스트로 먼저 고정해 수정 후에도 같은 문제가 반복되지 않도록 했습니다."
            ],
            link: "https://github.com/yeoeol",
            visual: "linear-gradient(135deg, #f2c14e 0%, #d67b45 45%, #342c2a 100%)"
        },
        {
            id: "admin-dashboard",
            title: "Admin Dashboard",
            category: "company",
            categoryLabel: "회사 프로젝트",
            summary: "운영자가 주요 지표와 상태를 확인하는 내부 관리 화면",
            description: "운영자가 반복적으로 확인하는 데이터와 상태 변경 기능을 한 화면에서 처리할 수 있도록 구성한 관리형 프로젝트입니다.",
            period: "근무 기간 입력",
            role: "기능 개발 및 유지보수",
            people: "회사 프로젝트",
            stacks: {
                frontend: ["JavaScript", "HTML", "CSS"],
                backend: ["API Integration"],
                database: [],
                devops: ["Git"],
                etc: ["Dashboard"]
            },
            highlights: [
                "반복 조회가 필요한 데이터를 기준별로 정리했습니다.",
                "상태 변경 액션의 성공/실패 흐름을 명확히 표시했습니다.",
                "운영자가 자주 쓰는 정보를 우선순위에 따라 배치했습니다."
            ],
            learnings: [
                "관리자 화면은 화려함보다 반복 업무를 줄이는 정보 구조가 더 중요하다는 점을 배웠습니다.",
                "운영자가 실제로 확인하는 순서에 맞춰 화면을 배치하면 기능 이해 비용이 줄어듭니다."
            ],
            troubleshooting: [
                "상태 변경 후 화면 갱신 시점을 명확히 해 사용자가 이전 상태를 보고 혼동하지 않도록 했습니다.",
                "반복 조회 항목을 묶어 표시해 운영자가 필요한 정보를 빠르게 찾을 수 있게 정리했습니다."
            ],
            link: "https://github.com/yeoeol",
            visual: "linear-gradient(135deg, #ef6f6c 0%, #6d5dfc 55%, #1f2330 100%)"
        },
        {
            id: "study-log",
            title: "Study Log",
            category: "personal",
            categoryLabel: "개인 프로젝트",
            summary: "학습 내용을 정리하고 회고하는 개발 기록 프로젝트",
            description: "개발 학습 과정에서 알게 된 개념, 문제 해결 과정, 참고 자료를 정리하는 저장소입니다. 꾸준한 기록을 통해 지식의 재사용성을 높이는 것을 목표로 합니다.",
            period: "상시",
            role: "기록 및 정리",
            people: "1명",
            stacks: {
                frontend: [],
                backend: [],
                database: [],
                devops: ["Git", "GitHub"],
                etc: ["Markdown", "Documentation"]
            },
            highlights: [
                "학습 주제별로 문서를 분리해 탐색하기 쉽게 정리했습니다.",
                "문제 상황, 원인, 해결 방법을 함께 기록했습니다.",
                "추후 프로젝트에 재사용할 수 있는 체크리스트를 축적했습니다."
            ],
            learnings: [
                "학습 내용을 문제, 원인, 해결 순서로 정리하면 나중에 비슷한 문제를 만났을 때 재사용하기 좋다는 점을 배웠습니다.",
                "짧은 기록이라도 꾸준히 남기면 프로젝트 회고와 기술 면접 준비에 도움이 됩니다."
            ],
            troubleshooting: [
                "주제가 늘어나면서 문서 탐색이 어려워져 카테고리와 제목 규칙을 맞춰 정리했습니다.",
                "단순 링크 모음이 되지 않도록 문제 상황과 직접 적용한 해결 방법을 함께 기록했습니다."
            ],
            link: "https://github.com/yeoeol",
            visual: "linear-gradient(135deg, #84a59d 0%, #52796f 45%, #1b2a2f 100%)"
        }
    ]
};

window.categoryMap = {
    all: "전체",
    team: "팀 프로젝트",
    personal: "개인 프로젝트"
};

window.stackGroupLabels = {
    frontend: "Front-End",
    backend: "Back-End",
    database: "Database",
    devops: "DevOps",
    etc: "Etc"
};
