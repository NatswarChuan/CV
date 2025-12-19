const translations = {
  en: {
    "title": "CV - Vu Minh Chuan",
    "btn.download_pdf": "Download PDF",
    "btn.language": "Tiếng Việt",
    "contact.title": "Contact",
    "contact.address": "Ho Chi Minh City",
    "contact.address.title": "Address",
    "contact.phone.title": "Phone",
    "education.title": "Education",
    "education.school": "Thu Duc College of Technology (TDC)",
    "education.degree": "Software Engineering.",
    "education.desc": "Collaborative training program with Tokyo Metropolitan College of Industrial Technology (TMCIT).",
    "skills.title": "Programming Skills",
    "skills.languages": "<strong>Languages:</strong> C#, PHP, JavaScript, TypeScript, Java",
    "skills.database": "<strong>Database:</strong> MySQL, PostgreSQL, SQL Server",
    "skills.frameworks": "<strong>Frameworks:</strong> .NET, Laravel, Express.js, React, Spring",
    "skills.tools": "<strong>Tools:</strong> Git, Docker (Containerization)",
    "soft_skills.title": "Soft Skills",
    "soft_skills.1": "Learning and Adaptability",
    "soft_skills.2": "Patience & Work Under Pressure",
    "soft_skills.3": "Problem Solving Skills",
    "soft_skills.4": "Time Management Skills",
    "soft_skills.5": "Teamwork Skills",
    "languages.title": "Languages",
    "languages.en": "<strong>English:</strong> Basic communication",
    "languages.jp": "<strong>Japanese:</strong> Basic communication",
    "certificates.title": "Certificates",
    "certificates.1": "IT Passport (Japan) 2023",
    "awards.title": "Awards",
    "awards.1": "<strong>2024:</strong> Web skills encouragement prize at Ho Chi Minh City level.",
    "awards.2": "<strong>2021-2023:</strong> Guide students to take the city-level Web skills exam.",
    "profile.name": "Vu Minh Chuan",
    "profile.role": "Backend Developer",
    "section.career_objective": "Career Objective",
    "career_objective.content": "With over 3 years of experience, my core strengths lie in deep system thinking cultivated through <strong>developing custom Frameworks</strong> (ORM, Cache) and the discipline and professionalism gained from <strong>working onsite in Japan</strong>. Combining this with a strong Product Ownership mindset, I aim to pursue long-term growth within Product companies to build high-quality technology solutions that deliver tangible value.",
    "section.work_experience": "Work Experience",

    "job.2handvn.title": "Backend Developer",
    "job.2handvn.desc": `
            <ul>
                <li>Designed and deployed the entire Back-end system and Database architecture for a C2B2C model.</li>
                <li>Configured CI/CD pipelines using GitHub Actions.</li>
                <li>Integrated third-party services: eKYC for user verification, Payoo gateway for payments, and Google Services for image verification.</li>
                <li>Optimized database performance using caching mechanisms and implemented automated i18n support via Google Translate.</li>
                <li>Developed an AI-powered pricing valuation feature utilizing the Gemini API.</li>
            </ul>`,

    "job.fidovn.title": "Backend Developer",
    "job.fidovn.desc": `
            <ul>
                <li>AI-CV system development.</li>
                <li>Designing a Gateway to automate and standardize SEO for a website.</li>
                <li>Designing a system and database to implement the simultaneous integration of Realsee and Matterport VR technology for real estate virtual tours.</li>
                <li>Improved the performance of the CV-generate-service, leading to a significant increase in the speed of CV creation and processing.</li>
            </ul>`,

    "job.solekia.title": "System Engineer / Professional Training (Japan)",
    "job.solekia.desc": `
            <ul>
                <li><strong>System Engineer:</strong> Developed a real estate management and sales system for Tokyo Realestate. Analyzed requirements, designed the database and architecture for the features received from the BRSE.</li>
                <li><strong>Professional Training:</strong> Participated in intensive training programs on Japanese language, Japanese corporate culture, and Java programming skills.</li>
                <li>Participated in real-life project simulation exercises to practice problem-solving skills, requirements analysis, and system design.</li>
                <li>Improve communication skills, teamwork in an international and multicultural environment.</li>
            </ul>`,

    "job.skinproject.title": "Technical Leader",
    "job.skinproject.desc": `
            <ul>
                <li>Design and manage the website projects selling decal design files.</li>
                <li>Back-end programming with PHP Laravel and MySQL.</li>
            </ul>`,

    "job.ford.title": "Backend Developer - Official Website",
    "job.ford.desc": `
            <ul>
                <li>Back-end programming using PHP Laravel and MySQL.</li>
                <li>Customer consulting, system design, and project management.</li>
            </ul>`,

    "job.solekia_intern.title": "Internship",
    "job.solekia_intern.desc": `
            <ul>
                <li>Research and practice using Spring Boot and popular technologies in Japan.</li>
                <li>Learn about Japanese corporate culture and working environment.</li>
            </ul>`,

    "job.tekmedi.title": "Backend Developer - TEK-BTC Project",
    "job.tekmedi.desc": `
            <ul>
                <li>Developed back-end system using C#.NET and PostgreSQL for Medical Examination Registration, Smart Queuing and Cashless Payment applications.</li>
                <li>System deployed at major hospitals such as Thong Nhat, Cho Ray, K Hospital.</li>
            </ul>`,

    "job.reiwa.title": "Freelancer - Project Manager",
    "job.reiwa.desc": `
            <ul>
                <li>Website consulting for customers.</li>
                <li>Frontend and backend design.</li>
                <li>Design and guide website management according to customer requirements.</li>
            </ul>`,

    "section.personal_projects": "Personal Projects",

    "project.cache.desc": `
            <ul>
                <li><strong>CacheManager Implementation:</strong> Stores cache directly in RDBMS, eliminating the need for Redis.</li>
                <li><strong>JPA Integration:</strong> Leverages the power of <code>spring-boot-starter-data-jpa</code> for cache management.</li>
                <li><strong>Modern Compatibility:</strong> Fully supports Java 17+ and Spring Boot 3+.</li>
                <li><a href="https://natswarchuan.github.io/spring-boot-database-cache-starter/" target="_blank">Project Link</a></li>
            </ul>`,

    "project.vmc.desc": `
            <p><em>Flexible ORM and Query Builder framework based on MyBatis for Spring Boot.</em></p>
            <ul>
                <li><strong>Entity & Repository Definition:</strong> Provides robust and easily extensible structures, minimizing boilerplate code.</li>
                <li><strong>Dynamic SQL:</strong> Build secure and flexible queries with Fluent API.</li>
                <li><strong>Validation & Relations:</strong> Supports data validation directly on DTOs and efficiently manages complex relationships.</li>
                <li><a href="https://natswarchuan.github.io/vmc-query-builder/" target="_blank">Project Link</a></li>
            </ul>`,

    "project.nihongo.desc": `
            <ul>
                <li>Built an online Japanese learning dictionary integrating GeminiAI tool.</li>
                <li>Developed the entire system using JavaScript, focusing on improving user experience in vocabulary lookup and learning.</li>
                <li><a href="https://chuanvm1999.github.io/nihongo-no-jisho/" target="_blank">Project Link</a></li>
            </ul>`,

    "project.generic.desc": `
            <ul>
                <li><strong>Accelerated Development:</strong> Optimizes CRUD processes and reduces boilerplate code.</li>
                <li><strong>DTO Automation:</strong> Supports automatic DTO Mapping for cleaner code.</li>
                <li><strong>RESTful Standards:</strong> Built-in support for standardized Dynamic Filtering and Pagination.</li>
                <li><a href="https://natswarchuan.github.io/jpa-spring-boot-generic-service/" target="_blank">Project Link</a></li>
            </ul>`,

    "project.grad.title": "Team Manager",
    "project.grad.desc": `
            <ul>
                <li>Design and process back-end data and design flow data on front-end data according to the microservices model with the theme of an e-commerce site (Tiki, Lazada...).</li>
                <li>Manage task division for team members.</li>
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
    "education.school": "Cao đẳng Công nghệ Thủ Đức (TDC)",
    "education.degree": "Kỹ thuật phần mềm.",
    "education.desc": "Hệ liên kết đào tạo với trường Cao đẳng quốc gia Nhật Bản (TMCIT).",
    "skills.title": "Kỹ năng lập trình",
    "skills.languages": "<strong>Ngôn ngữ:</strong> C#, PHP, JavaScript, TypeScript, Java",
    "skills.database": "<strong>Cơ sở dữ liệu:</strong> MySQL, PostgreSQL, SQL Server",
    "skills.frameworks": "<strong>Frameworks:</strong> .NET, Laravel, Express.js, React, Spring",
    "skills.tools": "<strong>Công cụ:</strong> Git, Docker (Containerization)",
    "soft_skills.title": "Kỹ năng mềm",
    "soft_skills.1": "Khả năng tự học và thích nghi",
    "soft_skills.2": "Kiên nhẫn & chịu được áp lực cao",
    "soft_skills.3": "Kỹ năng giải quyết vấn đề",
    "soft_skills.4": "Kỹ năng quản lý thời gian",
    "soft_skills.5": "Kỹ năng làm việc nhóm",
    "languages.title": "Ngôn ngữ",
    "languages.en": "<strong>Tiếng Anh:</strong> Giao tiếp cơ bản",
    "languages.jp": "<strong>Tiếng Nhật:</strong> Giao tiếp cơ bản",
    "certificates.title": "Chứng chỉ",
    "certificates.1": "IT Passport (Nhật Bản) 2023",
    "awards.title": "Giải thưởng",
    "awards.1": "<strong>2024:</strong> Giải khuyến khích thi tay nghề Web Cấp Thành Phố.",
    "awards.2": "<strong>2021-2023:</strong> Hướng dẫn sinh viên thi tay nghề Web Cấp Thành Phố.",
    "profile.name": "Vũ Minh Chuẩn",
    "profile.role": "Lập trình viên Backend",
    "section.career_objective": "Mục tiêu nghề nghiệp",
    "career_objective.content": "Với hơn 3 năm kinh nghiệm, điểm mạnh cốt lõi của tôi là tư duy hệ thống sâu sắc được rèn luyện qua việc <strong>tự phát triển các Framework</strong> (ORM, Cache) và sự kỷ luật, chuyên nghiệp tích lũy từ thời gian <strong>làm việc thực tế tại Nhật Bản</strong>. Kết hợp với tư duy làm chủ sản phẩm (Product Ownership), tôi mong muốn phát triển lâu dài tại các công ty Product để xây dựng những giải pháp công nghệ chất lượng cao và mang lại giá trị thực tiễn.",
    "section.work_experience": "Kinh nghiệm làm việc",

    "job.2handvn.title": "Backend Developer",
    "job.2handvn.desc": `
            <ul>
                <li>Thiết kế, triển khai toàn bộ hệ thống Back-end và kiến trúc dữ liệu (Database) cho mô hình C2B2C.</li>
                <li>Tích hợp các dịch vụ bên thứ ba: eKYC xác thực người dùng, cổng thanh toán Payoo và Google Services để xác minh hình ảnh.</li>
                <li>Thiết lập quy trình CI/CD sử dụng GitHub Actions.</li>
                <li>Tối ưu hóa hiệu suất cơ sở dữ liệu với cơ chế caching và triển khai hỗ trợ đa ngôn ngữ (i18n) tự động.</li>
                <li>Phát triển tính năng định giá sản phẩm bằng AI.</li>
            </ul>`,

    "job.fidovn.title": "Backend Developer",
    "job.fidovn.desc": `
            <ul>
                <li>Triển khai hệ thống AI-CV.</li>
                <li>Thiết kế Gateway tối ưu hóa SEO tự động cho website.</li>
                <li>Thiết kế hệ thống và CSDL tích hợp công nghệ VR Matterport và Realsee.</li>
                <li>Cải thiện hiệu suất của dịch vụ tạo CV (CV-generate-service), giúp tăng tốc độ xử lý và tạo CV đáng kể.</li>
            </ul>`,

    "job.solekia.title": "Kỹ sư hệ thống / Đào tạo chuyên môn (Nhật Bản)",
    "job.solekia.desc": `
            <ul>
                <li><strong>Kỹ sư hệ thống:</strong> Phát triển hệ thống quản lý và bán bất động sản (Tokyo Realestate). Phân tích yêu cầu, thiết kế CSDL và kiến trúc cho các tính năng từ BRSE.</li>
                <li><strong>Đào tạo chuyên môn:</strong> Tham gia các chương trình đào tạo chuyên sâu về tiếng Nhật, văn hóa doanh nghiệp Nhật Bản và kỹ năng lập trình Java.</li>
                <li>Tham gia các bài tập mô phỏng dự án thực tế để rèn luyện kỹ năng giải quyết vấn đề, phân tích yêu cầu và thiết kế hệ thống.</li>
                <li>Cải thiện kỹ năng giao tiếp, làm việc nhóm trong môi trường quốc tế đa văn hóa.</li>
            </ul>`,

    "job.skinproject.title": "Technical Leader",
    "job.skinproject.desc": `
            <ul>
                <li>Thiết kế và quản lý các dự án website bán file thiết kế decal.</li>
                <li>Lập trình Back-end với PHP Laravel và MySQL.</li>
            </ul>`,

    "job.ford.title": "Backend Developer - Website chính thức",
    "job.ford.desc": `
            <ul>
                <li>Lập trình Back-end sử dụng PHP Laravel và MySQL.</li>
                <li>Tư vấn khách hàng, thiết kế hệ thống và quản lý dự án.</li>
            </ul>`,

    "job.solekia_intern.title": "Thực tập sinh",
    "job.solekia_intern.desc": `
            <ul>
                <li>Nghiên cứu và thực hành sử dụng Spring Boot và các công nghệ phổ biến tại Nhật Bản.</li>
                <li>Tìm hiểu về văn hóa doanh nghiệp và môi trường làm việc tại Nhật Bản.</li>
            </ul>`,

    "job.tekmedi.title": "Backend Developer - Dự án TEK-BTC",
    "job.tekmedi.desc": `
            <ul>
                <li>Phát triển hệ thống Back-end sử dụng C#.NET và PostgreSQL cho các ứng dụng Đăng ký Khám bệnh, Xếp hàng Thông minh và Thanh toán Không dùng tiền mặt.</li>
                <li>Hệ thống được triển khai tại các bệnh viện lớn như Thống Nhất, Chợ Rẫy, Bệnh viện K.</li>
            </ul>`,

    "job.reiwa.title": "Freelancer - Quản lý dự án",
    "job.reiwa.desc": `
            <ul>
                <li>Tư vấn website cho khách hàng.</li>
                <li>Thiết kế Frontend và Backend.</li>
                <li>Thiết kế và hướng dẫn quản trị website theo yêu cầu của khách hàng.</li>
            </ul>`,

    "section.personal_projects": "Dự án cá nhân",

    "project.cache.desc": `
            <ul>
                <li><strong>Triển khai CacheManager:</strong> Lưu trữ cache trực tiếp vào RDBMS, không cần hạ tầng phụ trợ như Redis.</li>
                <li><strong>Tích hợp JPA:</strong> Tận dụng sức mạnh của <code>spring-boot-starter-data-jpa</code> để quản lý cache.</li>
                <li><strong>Tương thích hiện đại:</strong> Hỗ trợ hoàn toàn Java 17+ và Spring Boot 3+.</li>
                <li><a href="https://natswarchuan.github.io/spring-boot-database-cache-starter/" target="_blank">Liên kết dự án</a></li>
            </ul>`,

    "project.vmc.desc": `
            <p><em>Framework ORM và Query Builder linh hoạt dựa trên MyBatis cho Spring Boot.</em></p>
            <ul>
                <li><strong>Định nghĩa Entity & Repository:</strong> Cung cấp cấu trúc mạnh mẽ và dễ dàng mở rộng, giảm thiểu mã lặp.</li>
                <li><strong>Truy vấn Động (Dynamic SQL):</strong> Xây dựng truy vấn an toàn và linh hoạt với Fluent API.</li>
                <li><strong>Validation & Relations:</strong> Hỗ trợ validation dữ liệu ngay trên DTO và quản lý các quan hệ phức tạp (Relationships) một cách hiệu quả.</li>
                <li><a href="https://natswarchuan.github.io/vmc-query-builder/" target="_blank">Liên kết dự án</a></li>
            </ul>`,

    "project.nihongo.desc": `
            <ul>
                <li>Xây dựng một từ điển học tiếng Nhật trực tuyến tích hợp công cụ GeminiAI.</li>
                <li>Phát triển toàn bộ hệ thống sử dụng JavaScript, tập trung vào cải thiện trải nghiệm người dùng trong việc tra cứu và học từ vựng.</li>
                <li><a href="https://chuanvm1999.github.io/nihongo-no-jisho/" target="_blank">Liên kết dự án</a></li>
            </ul>`,

    "project.generic.desc": `
            <ul>
                <li><strong>Tăng tốc độ phát triển:</strong> Tối ưu hóa quy trình CRUD, giảm thiểu mã lặp (boilerplate code).</li>
                <li><strong>Tự động hóa DTO:</strong> Hỗ trợ Mapping DTO tự động, giúp code gọn gàng hơn.</li>
                <li><strong>Chuẩn RESTful:</strong> Tích hợp sẵn Dynamic Filter và Pagination theo tiêu chuẩn.</li>
                <li><a href="https://natswarchuan.github.io/jpa-spring-boot-generic-service/" target="_blank">Liên kết dự án</a></li>
            </ul>`,

    "project.grad.title": "Trưởng nhóm",
    "project.grad.desc": `
            <ul>
                <li>Thiết kế và xử lý dữ liệu back-end và thiết kế luồng dữ liệu front-end theo mô hình microservices với chủ đề trang thương mại điện tử (Tiki, Lazada...).</li>
                <li>Phân chia công việc cho các thành viên trong nhóm.</li>
            </ul>`
  }
};
