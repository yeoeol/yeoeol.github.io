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
            period: "학습 및 프로젝트",
            title: "백엔드 중심 개발 경험",
            role: "Backend Developer",
            description: "API 설계, 데이터 모델링, 인증 흐름, 테스트 코드 작성 등 서버 애플리케이션의 핵심 흐름을 학습하고 프로젝트에 적용했습니다."
        }
    ],
    questions: [
        {
            question: "Q. 어떤 개발자를 지향하나요?",
            answer: "기능을 빠르게 만들되, 일관된 코드를 작성하며 전체적인 비즈니스 로직 흐름을 명확하게 파악하고 구현하는 개발자를 지향합니다."
        },
        {
            question: "Q. 프로젝트에서 중요하게 보는 것은?",
            answer: "사용자가 실제로 겪는 흐름을 기준으로 요구사항을 정리하고, API와 데이터 구조가 그 흐름을 자연스럽게 받쳐주는지 확인합니다."
        },
        {
            question: "Q. 앞으로의 목표는?",
            answer: "서비스 운영에 필요한 안정성, 테스트, 모니터링 도구를 꾸준히 익혀 팀이 믿고 맡길 수 있는 백엔드 개발자로 성장하는 것입니다."
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
            id: "pagopa",
            title: "Pagopa",
            category: "personal",
            categoryLabel: "개인 프로젝트",
            summary: "판매자가 등록한 상품을 구매자가 장바구니를 이용하여 주문할 수 있는 이커머스 프로젝트",
            description: "일반적인 쇼핑몰과 같이, 특정 상품을 스크랩하고 장바구니에 추가하고 주문할 수 있는 이커머스 도메인 학습용 프로젝트입니다.",
            period: "2026.03~2026.06",
            role: "기획, 디자인, 구현, 테스트",
            people: "1명",
            stacks: {
                backend: ["Java", "Spring Boot", "JPA", "QueryDSL", "JUnit"],
                frontend: ["HTML", "CSS", "JavaScript", "React"],
                database: ["H2", "MySQL"],
                devops: ["Docker", "Git", "Github"],
                etc: ["EFK stack", "Swagger"]
            },
            highlights: [
                "트랜잭션 관리를 중심으로, 주문 상태를 추적하고 이를 바탕으로 주문 로직을 구현했습니다.",
                "이커머스 도메인의 데이터 모델링을 진행하고 코드를 구현하며, '도메인' 그 자체에 대한 중요도를 학습했습니다.",
                "Swagger UI를 활용하여 개발 단계에서도 API 테스트를 용이하게 하였습니다."
            ],
            learnings: [
                "'주문하기' 버튼을 누르는 것, 사용자 입장에서는 굉장히 간단해 보이는 작업이지만 그 버튼 하나로 서버 내부에서는 굉장히 세밀한 코드 구현과 구조가 녹아있다는 점을 깨달았습니다.",
                "각 도메인에 존재하는 상태 값을 관리하기 위한 스케줄러 구현하는 등 상태 변경 과정을 중요시해야 한다는 점을 학습했습니다."
            ],
            troubleshooting: [
                "예외를 던질 때 일관성을 지키는 방법, 클라이언트에게 예외 내용을 전달할 때 민감정보 숨기는 방법 등을 학습했습니다.",
                "결제 모듈과 같이 외부 API를 사용하는 작업을 처리할 때 트랜잭션을 관리하는 방법을 학습했습니다."
            ],
            link: "https://github.com/yeoeol/yeoeol.github.io",
            visual: "linear-gradient(135deg, #5ec4a6 0%, #2f6f73 48%, #1c2833 100%)"
        },
        {
            id: "price-it",
            title: "Price-it",
            category: "team",
            categoryLabel: "팀 프로젝트",
            summary: "주변 상권 분석을 위한 사용자 위치 기반 플랫폼 프로젝트입니다.",
            description: "실시간 사용자의 위치 기반으로 특정 작업에 대한 알림(FCM) 기능 구현하고, 알림에서 이어지는 사용자 친화적 서비스 플로우를 구성했습니다.",
            period: "2025.02~2025.09",
            role: "백엔드 API 설계 및 구현",
            people: "6명(프론트엔드3, 백엔드3)",
            stacks: {
                backend: ["Java", "Spring Boot", "JPA", "QueryDSL", "JUnit"],
                frontend: ["Kotlin", "HTML", "CSS", "JavaScript"],
                database: ["PostgreSQL", "Redis"],
                devops: ["Docker", "Git", "GitHub", "Sentry"],
                etc: ["FCM(Firebase Cloud Messaging)", "REST API"]
            },
            highlights: [
                "OAuth2, 자체 로그인 기능을 개발했습니다.",
                "복잡한 동적 쿼리를 해결하기 위해 QueryDSL 기반 검색 기능을 개발했습니다.",
                "계정 서비스, 검색 서비스에 대한 테스트 코드를 작성했습니다.",
                "FCM 라이브러리를 활용하여 알림 기능을 개발했습니다."
            ],
            learnings: [
                "이미지 서비스, FCM 라이브러리 등 외부 API를 사용하는 방법을 배웠습니다.",
                "규모 있는 프로젝트를 진행할 때는 코드의 규칙성과 일관성이 중요하다는 점을 배웠습니다.",
                "API 요청 및 응답에 대해 동료와 고민하고 최적의 방안을 찾는 것이 중요하다는 점을 배웠습니다."
            ],
            troubleshooting: [
                ""
            ],
            link: "https://github.com/yeoeol",
            visual: "linear-gradient(135deg, #27c00f 0%, #46ce5a 45%, #71d661 100%)"
        },
        {
            id: "idol-verse",
            title: "IdolVerse",
            category: "personal",
            categoryLabel: "개인 프로젝트",
            summary: "최애 아티스트를 구독하고 게시글을 올릴 수 있는 게시판 프로젝트",
            description: "회원가입/로그인/로그아웃, 게시글, 댓글, 응원 기능 등 게시판의 기본적인 기능을 지원하는 API 서버 프로젝트입니다.",
            period: "2025.02~2025.08",
            role: "전체",
            people: "1명",
            stacks: {
                backend: ["Java", "Spring Boot", "JPA", "JUnit"],
                frontend: [],
                database: ["H2", "MySQL", "PostgreSQL"],
                devops: ["Docker", "Git", "GitHub"],
                etc: ["Markdown", "Documentation"]
            },
            highlights: [
                "도메인별 패키지를 분리함으로써 코드 가독성을 높였습니다.",
                "OAuth2 로그인 기능을 구현했습니다."
            ],
            learnings: [
                "Spring Security를 사용하여 보안 체계를 구축하는 방법을 배울 수 있었습니다.",
                "OAuth2 기능을 구현하면서 인증 방식에 대한 플로우를 학습했습니다.",
                "JWT 기반 State-less 사용자 인증을 개발함으로써 로그인 방식에 대한 학습했습니다."
            ],
            troubleshooting: [
                ""
            ],
            link: "https://github.com/yeoeol/IdolVerse",
            visual: "linear-gradient(135deg, #c114c1 0%, #b233c3 45%, #b153ca 100%)"
        },
        {
            id: "busking-now",
            title: "busking-now",
            category: "personal",
            categoryLabel: "개인 프로젝트",
            summary: "공연자는 버스킹을 등록하고, 청취자는 특정 버스킹을 구독하여 알림을 받는 프로젝트",
            description: "게시판 CRUD 기능과 백그라운드 FCM 알림, MSA 아키텍처에 기반한 DDD 계층 구조를 실습한 API 서버입니다.",
            period: "2025.12~2026.03",
            role: "전체",
            people: "1명",
            stacks: {
                backend: ["Java", "Spring Boot", "JPA", "JUnit", "Spring Kafka"],
                frontend: ["HTML", "CSS", "JavaScript", "Thymeleaf"],
                database: ["H2", "MySQL", "Redis", "QueryDSL"],
                devops: ["Docker", "Git", "GitHub", "Github Actions"],
                etc: ["MSA(Microservices Architecture)", "DDD(Domain Driven Design)"]
            },
            highlights: [
                "MSA 아키텍처를 활용하여 모듈별 결합도를 낮추고 응집도를 높였습니다.",
                "DDD 계층 구조를 사용하여 Layer별 관심사를 분리했습니다.",
                "분산 트랜잭션을 위해 Transactional Outbox, Inbox Pattern을 활용하여 이벤트 발행 및 이벤트 멱등성을 보장했습니다."
            ],
            learnings: [
                "Redis와 Kafka를 활용한 이벤트 기반 아키텍처를 실습했습니다.",
                "복잡한 동적 쿼리를 해결하기 위해 QueryDSL 기반 검색 기능을 개발했습니다.",
                "FCM 라이브러리를 활용하여 알림 기능을 개발했습니다.",
                "Junit, Mockito를 활용하여 각 마이크로서비스별 테스트 코드를 작성했습니다."
            ],
            troubleshooting: [
                ""
            ],
            link: "https://github.com/yeoeol/busking-now",
            visual: "linear-gradient(135deg, #a43a34 0%, #b44f2b 48%, #8a4030 100%)"
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
