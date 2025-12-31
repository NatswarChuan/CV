const translations = {
    en: {
        "title": "Portfolio - Vu Minh Chuan | Backend Developer",
        "btn.download_pdf": "Download Resume",
        "btn.language": "Tiếng Việt",
        "contact.title": "Contact Details",
        "contact.address": "Ho Chi Minh City, Vietnam",
        "contact.address.title": "Location",
        "contact.phone.title": "Mobile",
        "education.title": "Education",
        "education.school": "Thu Duc College of Technology",
        "education.degree": "B.S. in Software Engineering - Specialized Japanese Program (TMCIT)",
        "skills.title": "Technical Expertise",
        "skills.languages": `<strong>Core Languages:</strong>
        <ul class="sub-skill-list">
            <li>Java (Professional Proficiency)</li>
            <li>PHP (Enterprise Development)</li>
            <li>JavaScript/TypeScript (Fullstack focus)</li>
            <li>C# (System Integration)</li>
        </ul>`,
        "skills.database": `<strong>Database Systems:</strong>
        <ul class="sub-skill-list">
            <li>MySQL (Optimization & Architecting)</li>
            <li>SQL Server (Legacy & Modern)</li>
            <li>PostgreSQL (Advanced Querying)</li>
        </ul>`,
        "skills.frameworks": `<strong>Frameworks:</strong>
        <ul class="sub-skill-list">
            <li>Spring Ecosystem (Core, Boot, Security)</li>
            <li>Laravel (Rapid Application Dev)</li>
            <li>.NET Core/Framework</li>
        </ul>`,
        "skills.tools": `<strong>DevOps & Tools:</strong>
        <ul class="sub-skill-list">
            <li>Git, GitHub/GitLab CI/CD Pipelines</li>
            <li>Docker Containerization</li>
        </ul>`,
        "soft_skills.title": "Core Competencies",
        "soft_skills.1": "Technical Leadership & Project Management",
        "soft_skills.2": "Rapid Learning & Adaptability",
        "soft_skills.3": "Problem Solving & Analytical Thinking",
        "soft_skills.4": "Cross-functional Collaboration",
        "soft_skills.5": "High-Efficiency Time Management",
        "languages.title": "Languages",
        "languages.en": "<strong>English:</strong> Professional Working Proficiency (TOEIC 450)",
        "languages.jp": "<strong>Japanese:</strong> Conversational (JLPT N4)",
        "certificates.title": "Certifications",
        "certificates.1": "IT Passport (IPA, Japan) - 2023",
        "awards.title": "Industry Recognition",
        "awards.1": "<strong>2024:</strong> Web Development Skills Award (HCMC Municipal Level)",
        "awards.2": "<strong>2021-2023:</strong> Technical Mentor for City-level Web Development Competitions",
        "profile.name": "Vu Minh Chuan",
        "profile.role": "Backend Developer",
        "section.career_objective": "Profile Summary",
        "career_objective.content": "Backend Developer with 3+ years of experience specializing in <strong>architecting scalable systems and custom frameworks</strong>. Experienced in <strong>onsite development in Japan</strong>, with a strong focus on technical discipline and delivering high-quality product solutions.",
        "section.work_experience": "Professional Experience",

        "job.neotech.title": "Technical Advisor & Project Lead",
        "job.neotech.role": "Tech Advisor & Project Lead",
        "job.neotech.team": "5 Developers",
        "job.neotech.stack": "Vue.js, Laravel, PHP, MySQL, Node.js",
        "job.neotech.desc": `
            <ul>
                <li>Spearhead technical consulting and digital transformation strategies for SMEs, delivering SEO-optimized, high-performance web platforms.</li>
                <li>Orchestrate end-to-end project lifecycles, from rigorous requirement analysis to seamless cloud deployment and long-term maintenance.</li>
                <li>Lead a cross-functional team of 5 developers to engineer scalable architectures using modern technology stacks.</li>
                <li>Optimize system performance and search visibility, resulting in significantly improved SEO rankings for enterprise clients.</li>
                <li><a href="https://dichvuwebsitetch.com/" target="_blank">NeoTCH Official Site</a></li>
            </ul>
        `,

        "job.2handvn.title": "Technical Team Lead & DevOps Architect",
        "job.2handvn.role": "Team Lead, Backend, DevOps",
        "job.2handvn.team": "4 Developers",
        "job.2handvn.stack": "Java, Spring Boot, MySQL, Redis, GitHub Actions, Gemini AI, Google Services",
        "job.2handvn.desc": `
            <ul>
                <li>Architected and deployed a complex C2B2C backend infrastructure, ensuring high availability and data integrity.</li>
                <li>Engineered robust CI/CD pipelines using GitHub Actions, automating testing and deployment workflows.</li>
                <li>Integrated enterprise-grade third-party services: eKYC (User Verification), Payoo (Payment Gateway), and Google Vision API for automated image moderation.</li>
                <li>Enhanced system performance via multi-layer caching and implemented automated localization (i18n) workflows leveraging AI translation.</li>
                <li>Developed an intelligent pricing valuation engine utilizing the Gemini AI API to enhance user pricing accuracy.</li>
            </ul>`,

        "job.fidovn.title": "Backend Engineering Lead",
        "job.fidovn.role": "Team Lead, Backend",
        "job.fidovn.team": "3 Developers",
        "job.fidovn.stack": "Java, Spring Boot, MySQL, Redis, API Gateway, RabbitMQ, MyBatis, Gemini AI, Alibaba Cloud",
        "job.fidovn.desc": `
            <ul>
                <li>Engineered an AI-driven Resume/CV generation system, optimizing document parsing and rendering pipelines.</li>
                <li>Designed a centralized API Gateway to standardize SEO protocols and automate metadata management across web properties.</li>
                <li>Architected a unified database schema to support concurrent integration of Realsee and Matterport VR technologies for immersive real estate experiences.</li>
                <li>Optimized the CV generation service, achieving a 40% reduction in processing time and improving concurrent user capacity.</li>
            </ul>`,

        "job.solekia.title": "System Engineer (Japan Onsite)",
        "job.solekia.role": "System Engineer / Trainee",
        "job.solekia.team": "20+",
        "job.solekia.stack": "Java, SQL Enterprise, Corporate Standards",
        "job.solekia.desc": `
            <ul>
                <li><strong>System Engineering:</strong> Developed an enterprise real estate management platform for Tokyo Realestate. Translated business requirements (from BRSE) into technical architectures and robust database designs.</li>
                <li><strong>Professional Immersion:</strong> Completed intensive training in Japanese corporate culture, professional Japanese communication, and advanced Java engineering standards.</li>
                <li>Mastered rigorous problem-solving methodologies and system design practices through simulated large-scale project environments.</li>
                <li>Cultivated strong cross-cultural communication and collaborative engineering skills within an international team.</li>
            </ul>`,

        "job.skinproject.title": "Technical Team Lead",
        "job.skinproject.role": "Team Leader",
        "job.skinproject.team": "4 Developers",
        "job.skinproject.stack": "PHP, Laravel, MySQL",
        "job.skinproject.desc": `
            <ul>
                <li>Lead the design and management of a digital asset marketplace specializing in custom decal design files.</li>
                <li>Developed and maintained core backend services using Laravel, focusing on secure file delivery and transaction management.</li>
            </ul>`,

        "job.ford.title": "Backend & DevOps Engineer",
        "job.ford.role": "Backend DevOps",
        "job.ford.team": "2 Developers",
        "job.ford.stack": "PHP, Laravel, MySQL",
        "job.ford.desc": `
            <ul>
                <li>Engineered backend solutions for Ford Tan Thuan, focusing on inventory management and customer relationship systems.</li>
                <li>Provided technical consulting and architecture design, streamlining project delivery timelines.</li>
            </ul>`,

        "job.solekia_intern.title": "Software Engineering Intern (Spring focus)",
        "job.solekia_intern.role": "Intern",
        "job.solekia_intern.team": "20+",
        "job.solekia_intern.stack": "Spring Boot, Java Enterprise",
        "job.solekia_intern.desc": `
            <ul>
                <li>Researched and implemented proof-of-concept features using Spring Boot and standard Japanese tech stacks.</li>
                <li>Gained deep insights into Japanese corporate culture and professional engineering workflows.</li>
            </ul>`,

        "job.tekmedi.title": "Backend Developer (PostgreSQL Architect)",
        "job.tekmedi.role": "Backend Developer",
        "job.tekmedi.team": "6 Developers",
        "job.tekmedi.stack": "C# .NET, PostgreSQL, Medical Systems",
        "job.tekmedi.desc": `
            <ul>
                <li>Developed core backend services for hospital management systems, including Medical Registration, Smart Queuing, and Cashless Payments.</li>
                <li>Deployed mission-critical solutions at leading hospitals (Thong Nhat, Cho Ray, K Hospital) ensuring high stability and data confidentiality.</li>
            </ul>`,

        "job.reiwa.title": "Backend Developer",
        "job.reiwa.role": "Backend Developer",
        "job.reiwa.team": "3 Developers",
        "job.reiwa.stack": "PHP, MySQL",
        "job.reiwa.desc": `
            <ul>
                <li>Consulted on web architecture and implemented full-stack solutions for boutique clients.</li>
                <li>Designed user-friendly management dashboards, empowering clients to maintain their platforms efficiently.</li>
            </ul>`,

        "section.personal_projects": "Core Technical Projects",

        "project.cache.role": "Author & Architect",
        "project.cache.team": "Individual Project",
        "project.cache.stack": "Java, Spring Boot, JPA, RDBMS",
        "project.cache.desc": `
            <ul>
                <li><strong>Embedded CacheManager:</strong> Engineered a caching solution that utilizes RDBMS for storage, eliminating external dependencies like Redis for specific use cases.</li>
                <li><strong>JPA Specifications:</strong> Leveraged advanced JPA features for seamless cache invalidation and management.</li>
                <li><strong>Cloud Ready:</strong> Optimized for Java 17+ and Spring Boot 3+ architectures.</li>
                <li><a href="https://natswarchuan.github.io/spring-boot-database-cache-starter/" target="_blank">View on GitHub</a></li>
            </ul>`,

        "project.vmc.role": "Lead Architect",
        "project.vmc.team": "Individual Project",
        "project.vmc.stack": "Java, Spring Boot, MyBatis",
        "project.vmc.desc": `
            <p><em>Advanced ORM and Query Builder abstraction built on MyBatis for Spring Cloud applications.</em></p>
            <ul>
                <li><strong>Architectural Abstraction:</strong> Reduced boilerplate code by 60% through a robust Entity & Repository pattern.</li>
                <li><strong>Fluent Query API:</strong> Developed a type-safe API for building complex, dynamic SQL queries.</li>
                <li><strong>Data Integrity:</strong> Integrated cross-DTO validation and efficient relationship mapping strategies.</li>
                <li><a href="https://natswarchuan.github.io/vmc-query-builder/" target="_blank">View on GitHub</a></li>
            </ul>`,

        "project.nihongo.role": "Fullstack Developer",
        "project.nihongo.team": "Individual Project",
        "project.nihongo.stack": "JavaScript, Gemini AI, NLP",
        "project.nihongo.desc": `
            <ul>
                <li>Architected an AI-powered Japanese language dictionary, integrating Gemini AI for contextual translation and explanation.</li>
                <li>Optimized front-end performance for rapid vocabulary lookup and interactive learning modules.</li>
                <li><a href="https://chuanvm1999.github.io/nihongo-no-jisho/" target="_blank">Interactive Demo</a></li>
            </ul>`,

        "project.generic.role": "Lead Developer & Architect",
        "project.generic.team": "Individual Project",
        "project.generic.stack": "Java, Spring Boot, JPA, Starters",
        "project.generic.desc": `
            <p><em>Enterprise-grade Spring Boot starter designed to accelerate backend development by 70% through generic CRUD and DTO automation.</em></p>
            <ul>
                <li><strong>Rapid API Scaffolding:</strong> Enables instantaneous generation of full CRUD suites for any domain entity via simple configuration.</li>
                <li><strong>Dynamic Specification Engine:</strong> Built-in support for complex filtering and type-safe query building.</li>
                <li><strong>Automated DTO Pattern:</strong> Seamlessly handles entity-to-DTO conversion, maintaining strict architectural separation.</li>
                <li><strong>Production-Proven:</strong> Deployed in multiple live environments, handling complex pagination and sorting out-of-the-box.</li>
                <li><a href="https://natswarchuan.github.io/jpa-spring-boot-generic-service/" target="_blank">GitHub Repository</a></li>
            </ul>`,

        "project.grad.title": "Project Lead (Capstone)",
        "project.grad.role": "Team Lead / Architect",
        "project.grad.team": "6 Developers",
        "project.grad.stack": "JavaScript, Microservices, MongoDB",
        "project.grad.desc": `
            <ul>
                <li>Led the architectural design and development of a microservices-based e-commerce ecosystem.</li>
                <li>Managed cross-functional task delegation and ensured high-quality code delivery across the distributed system.</li>
            </ul>`
    },
    vi: {
        "title": "CV - Vũ Minh Chuẩn",
        "btn.download_pdf": "Tải PDF",
        "btn.language": "English",
        "contact.title": "Liên hệ",
        "contact.address": "Tp. Hồ Chí Minh",
        "contact.address.title": "Địa chỉ",
        "contact.phone.title": "Số điện thoại",
        "education.title": "Học vấn",
        "education.school": "Cao đẳng Thủ Đức",
        "education.degree": "Công nghệ phần mềm - Chương trình đặc biệt Nhật Bản (TMCIT)",
        "skills.title": "Kỹ năng lập trình",
        "skills.languages": `<strong>Ngôn ngữ:</strong>
        <ul class="sub-skill-list">
            <li>Java (3 năm, 7 dự án)</li>
            <li>PHP (1 năm, 3 dự án)</li>
            <li>JavaScript/TypeScript (7 tháng, 2 dự án)</li>
            <li>C# (3 tháng, 1 dự án)</li>
        </ul>`,
        "skills.database": `<strong>Cơ sở dữ liệu:</strong>
        <ul class="sub-skill-list">
            <li>MySQL (4.5 năm, 11 dự án)</li>
            <li>SQL Server (1 năm, 1 dự án)</li>
            <li>PostgreSQL (3 tháng, 1 dự án)</li>
        </ul>`,
        "skills.frameworks": `<strong>Frameworks:</strong>
        <ul class="sub-skill-list">
            <li>Spring (3 năm, 7 dự án)</li>
            <li>Laravel (1 năm, 3 dự án)</li>
            <li>.NET (3 tháng, 1 dự án)</li>
        </ul>`,
        "skills.tools": `<strong>Công cụ:</strong>
        <ul class="sub-skill-list">
            <li>Git, GitHub/GitLab (4.5 năm, 13 dự án)</li>
            <li>Docker, CI/CD (1 năm, 3 dự án)</li>
        </ul>`,
        "soft_skills.title": "Kỹ năng mềm",
        "soft_skills.1": "Lãnh đạo & Quản lý đội nhóm",
        "soft_skills.2": "Khả năng tự học và thích nghi",
        "soft_skills.3": "Kiên nhẫn & chịu được áp lực cao",
        "soft_skills.4": "Kỹ năng giải quyết vấn đề",
        "soft_skills.5": "Kỹ năng quản lý thời gian",
        "languages.title": "Ngôn ngữ",
        "languages.en": "<strong>Tiếng Anh:</strong> TOEIC 450",
        "languages.jp": "<strong>Tiếng Nhật:</strong> JLPT N4",
        "certificates.title": "Chứng chỉ",
        "certificates.1": "IT Passport (Nhật Bản) 2023",
        "awards.title": "Giải thưởng",
        "awards.1": "<strong>2024:</strong> Giải khuyến khích thi tay nghề Web Cấp Thành Phố.",
        "awards.2": "<strong>2021-2023:</strong> Hướng dẫn sinh viên thi tay nghề Web Cấp Thành Phố.",
        "profile.name": "Vũ Minh Chuẩn",
        "profile.role": "Lập trình viên Backend",
        "section.career_objective": "Mục tiêu nghề nghiệp",
        "career_objective.content": "Lập trình viên Backend với hơn 3 năm kinh nghiệm, chuyên sâu về <strong>thiết kế hệ thống và phát triển Framework</strong>. Có kinh nghiệm <strong>làm việc thực tế tại Nhật Bản</strong>, chú trọng tính kỷ luật và xây dựng các giải pháp công nghệ mang lại giá trị cao.",
        "section.work_experience": "Kinh nghiệm làm việc",

        "job.neotech.title": "Cố vấn công nghệ & Quản lý dự án",
        "job.neotech.role": "Cố vấn công nghệ & Quản lý dự án",
        "job.neotech.team": "5 người",
        "job.neotech.stack": "Vue.js, Laravel, PHP, MySQL, Node.js",
        "job.neotech.desc": `
            <ul>
                <li>Tư vấn công nghệ và triển khai website chuẩn SEO cho các doanh nghiệp vừa và nhỏ.</li>
                <li>Quản lý dự án từ phân tích yêu cầu đến triển khai và bảo trì.</li>
                <li>Lãnh đạo đội ngũ 5 developers xây dựng giải pháp web có khả năng mở rộng với công nghệ hiện đại.</li>
                <li>Tối ưu hiệu suất website và thứ hạng SEO cho khách hàng doanh nghiệp.</li>
                <li><a href="https://dichvuwebsitetch.com/" target="_blank">Website Công Ty</a></li>
            </ul>
        `,

        "job.2handvn.title": "Team Leader, Backend, DevOps",
        "job.2handvn.role": "Team Leader, Backend, DevOps",
        "job.2handvn.team": "4 người",
        "job.2handvn.stack": "Java, Spring Boot, MySQL, Redis, GitHub Actions, Gemini AI, Google Services",
        "job.2handvn.desc": `
            <ul>
                <li>Thiết kế, triển khai toàn bộ hệ thống Back-end và kiến trúc dữ liệu (Database) cho mô hình C2B2C.</li>
                <li>Tích hợp các dịch vụ bên thứ ba: eKYC xác thực người dùng, cổng thanh toán Payoo và Google Services để xác minh hình ảnh.</li>
                <li>Thiết lập quy trình CI/CD sử dụng GitHub Actions.</li>
                <li>Tối ưu hóa hiệu suất cơ sở dữ liệu với cơ chế caching và triển khai hỗ trợ đa ngôn ngữ (i18n) tự động.</li>
                <li>Phát triển tính năng định giá sản phẩm bằng AI.</li>
            </ul>`,

        "job.fidovn.title": "Team Leader Back-end",
        "job.fidovn.role": "Team Leader Back-end",
        "job.fidovn.team": "3 người",
        "job.fidovn.stack": "Java, Spring Boot, MySQL, Redis, Gateway, RabbitMQ, MyBatis, Gemini AI, Alibaba Cloud",
        "job.fidovn.desc": `
            <ul>
                <li>Triển khai hệ thống AI-CV.</li>
                <li>Thiết kế Gateway tối ưu hóa SEO tự động cho website.</li>
                <li>Thiết kế hệ thống và CSDL tích hợp công nghệ VR Matterport và Realsee.</li>
                <li>Cải thiện hiệu suất của dịch vụ tạo CV (CV-generate-service), giúp tăng tốc độ xử lý và tạo CV đáng kể.</li>
            </ul>`,

        "job.solekia.title": "Kỹ sư hệ thống / Đào tạo chuyên môn (Nhật Bản)",
        "job.solekia.role": "Kỹ sư hệ thống / Trainee",
        "job.solekia.team": "20 người",
        "job.solekia.stack": "Java, SQL",
        "job.solekia.desc": `
            <ul>
                <li><strong>Kỹ sư hệ thống:</strong> Phát triển hệ thống quản lý và bán bất động sản (Tokyo Realestate). Phân tích yêu cầu, thiết kế CSDL và kiến trúc cho các tính năng từ BRSE.</li>
                <li><strong>Đào tạo chuyên môn:</strong> Tham gia các chương trình đào tạo chuyên sâu về tiếng Nhật, văn hóa doanh nghiệp Nhật Bản và kỹ năng lập trình Java.</li>
                <li>Tham gia các bài tập mô phỏng dự án thực tế để rèn luyện kỹ năng giải quyết vấn đề, phân tích yêu cầu và thiết kế hệ thống.</li>
                <li>Cải thiện kỹ năng giao tiếp, làm việc nhóm trong môi trường quốc tế đa văn hóa.</li>
            </ul>`,

        "job.skinproject.title": "Team Leader",
        "job.skinproject.role": "Team Leader",
        "job.skinproject.team": "4 người",
        "job.skinproject.stack": "PHP, Laravel, MySQL",
        "job.skinproject.desc": `
            <ul>
                <li>Thiết kế và quản lý các dự án website bán file thiết kế decal.</li>
                <li>Lập trình Back-end với PHP Laravel và MySQL.</li>
            </ul>`,

        "job.ford.title": "Backend DevOps",
        "job.ford.role": "Backend DevOps",
        "job.ford.team": "2 người",
        "job.ford.stack": "PHP, Laravel, MySQL",
        "job.ford.desc": `
            <ul>
                <li>Lập trình Back-end sử dụng PHP Laravel và MySQL.</li>
                <li>Tư vấn khách hàng, thiết kế hệ thống và quản lý dự án.</li>
            </ul>`,

        "job.solekia_intern.title": "Thực tập sinh",
        "job.solekia_intern.role": "Thực tập sinh",
        "job.solekia_intern.team": "20 người",
        "job.solekia_intern.stack": "Spring Boot, Java",
        "job.solekia_intern.desc": `
            <ul>
                <li>Nghiên cứu và thực hành sử dụng Spring Boot và các công nghệ phổ biến tại Nhật Bản.</li>
                <li>Tìm hiểu về văn hóa doanh nghiệp và môi trường làm việc tại Nhật Bản.</li>
            </ul>`,

        "job.tekmedi.title": "Backend Developer - Dự án TEK-BTC",
        "job.tekmedi.role": "Backend Developer",
        "job.tekmedi.team": "6 người",
        "job.tekmedi.stack": "C# .NET, PostgreSQL",
        "job.tekmedi.desc": `
            <ul>
                <li>Phát triển hệ thống Back-end sử dụng C#.NET và PostgreSQL cho các ứng dụng Đăng ký Khám bệnh, Xếp hàng Thông minh và Thanh toán Không dùng tiền mặt.</li>
                <li>Hệ thống được triển khai tại các bệnh viện lớn như Thống Nhất, Chợ Rẫy, Bệnh viện K.</li>
            </ul>`,

        "job.reiwa.title": "Backend Developer",
        "job.reiwa.role": "Backend Developer",
        "job.reiwa.team": "3 người",
        "job.reiwa.stack": "PHP, MySQL",
        "job.reiwa.desc": `
            <ul>
                <li>Tư vấn website cho khách hàng.</li>
                <li>Thiết kế Frontend và Backend.</li>
                <li>Thiết kế và hướng dẫn quản trị website theo yêu cầu của khách hàng.</li>
            </ul>`,

        "section.personal_projects": "Dự án cá nhân",

        "project.cache.role": "Creator & Developer",
        "project.cache.team": "1 người",
        "project.cache.stack": "Java, Spring Boot, JPA",
        "project.cache.desc": `
            <ul>
                <li><strong>Triển khai CacheManager:</strong> Lưu trữ cache trực tiếp vào RDBMS, không cần hạ tầng phụ trợ như Redis.</li>
                <li><strong>Tích hợp JPA:</strong> Tận dụng sức mạnh của <code>spring-boot-starter-data-jpa</code> để quản lý cache.</li>
                <li><strong>Tương thích hiện đại:</strong> Hỗ trợ hoàn toàn Java 17+ và Spring Boot 3+.</li>
                <li><a href="https://natswarchuan.github.io/spring-boot-database-cache-starter/" target="_blank">Liên kết dự án</a></li>
            </ul>`,

        "project.vmc.role": "Creator & Developer",
        "project.vmc.team": "1 người",
        "project.vmc.stack": "Java, Spring Boot, MyBatis",
        "project.vmc.desc": `
            <p><em>Framework ORM và Query Builder linh hoạt dựa trên MyBatis cho Spring Boot.</em></p>
            <ul>
                <li><strong>Định nghĩa Entity & Repository:</strong> Cung cấp cấu trúc mạnh mẽ và dễ dàng mở rộng, giảm thiểu mã lặp.</li>
                <li><strong>Truy vấn Động (Dynamic SQL):</strong> Xây dựng truy vấn an toàn và linh hoạt với Fluent API.</li>
                <li><strong>Validation & Relations:</strong> Hỗ trợ validation dữ liệu ngay trên DTO và quản lý các quan hệ phức tạp (Relationships) một cách hiệu quả.</li>
                <li><a href="https://natswarchuan.github.io/vmc-query-builder/" target="_blank">Liên kết dự án</a></li>
            </ul>`,

        "project.nihongo.role": "Fullstack Developer",
        "project.nihongo.team": "1 người",
        "project.nihongo.stack": "JavaScript, Gemini AI",
        "project.nihongo.desc": `
            <ul>
                <li>Xây dựng một từ điển học tiếng Nhật trực tuyến tích hợp công cụ GeminiAI.</li>
                <li>Phát triển toàn bộ hệ thống sử dụng JavaScript, tập trung vào cải thiện trải nghiệm người dùng trong việc tra cứu và học từ vựng.</li>
                <li><a href="https://chuanvm1999.github.io/nihongo-no-jisho/" target="_blank">Liên kết dự án</a></li>
            </ul>`,

        "project.generic.role": "Creator & Developer",
        "project.generic.team": "1 người",
        "project.generic.stack": "Java, Spring Boot, JPA",
        "project.generic.desc": `
            <p><em>Framework Spring Boot mạnh mẽ giúp tăng tốc phát triển backend thông qua CRUD tổng quát và tự động hóa DTO.</em></p>
            <ul>
                <li><strong>Từ Không Đến Năm APIs:</strong> Chỉ cần cài đặt và cấu hình cơ bản - ngay lập tức có 5 API CRUD hoàn chỉnh (Tạo, Đọc, Cập nhật, Xóa, Danh sách) cho bất kỳ entity nào.</li>
                <li><strong>Lớp Service Tổng Quát:</strong> Triển khai CRUD có thể tái sử dụng với hỗ trợ JPA Specification cho truy vấn phức tạp.</li>
                <li><strong>Tự Động Chuyển DTO:</strong> Chuyển đổi liền mạch giữa Entity và DTO, giảm 70% code boilerplate.</li>
                <li><strong>Lọc Động:</strong> Xây dựng truy vấn type-safe với khả năng tìm kiếm đa trường.</li>
                <li><strong>Phân Trang RESTful:</strong> Hỗ trợ phân trang tích hợp với tùy chỉnh kích thước và sắp xếp.</li>
                <li><strong>Sẵn Sàng Production:</strong> Đã kiểm nghiệm trong các dự án doanh nghiệp với validation toàn diện.</li>
                <li><a href="https://natswarchuan.github.io/jpa-spring-boot-generic-service/" target="_blank">Liên kết dự án</a></li>
            </ul>`,

        "project.grad.title": "Trưởng nhóm",
        "project.grad.role": "Trưởng nhóm",
        "project.grad.team": "6 người",
        "project.grad.stack": "JavaScript, Microservices",
        "project.grad.desc": `
            <ul>
                <li>Thiết kế và xử lý dữ liệu back-end và thiết kế luồng dữ liệu front-end theo mô hình microservices với chủ đề trang thương mại điện tử (Tiki, Lazada...).</li>
                <li>Phân chia công việc cho các thành viên trong nhóm.</li>
            </ul>`
    }
};
