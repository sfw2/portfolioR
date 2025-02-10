const translations = {
    en: {
      about_me: "About Me",
      projects: "Projects",
      contact: "Contact",
      about_section: "Info about me",
      project_overlay: "Project",
      project_details: "View Details",
      contact_heading: "Contact Me",
      contact_paragraph: "Feel free to reach out for collaborations or just a friendly hello!",
      name_heading: "Roman Dulin",
      name_subheading: "Just a chill guy",
      button_about_me: "About Me",
      about_me_1: "About Me",
      project_title: "Projects",
      modal_title: "Project Description",
      modal_text: "Description of the current project, its details, and key points.",
      footer_text: "&copy; 2024 My Portfolio. All rights reserved.",
      text: "Roman Dulin",
      text_1: "Age: 19 years",
      text_2: "Specialization: Programmer", 
      text_3: "Education: Faculty of Information Technology and Programming",
      text_4: "Programming Languages: Python, C++",
      text_5: "Experience: Fiverr, Freelancer, Toptal, Upwork",
      text_6: "Language Skills:",
      text_7: "Ukrainian — native language.",
      text_8: "Russian — native language.",
      text_9: "English — fluent.",
      text_10: "Norwegian — level A2, continuing to study.",
      follow: "Follow me"
    },
    ru: {
      about_me: "О мне",
      projects: "Проекты",
      contact: "Контакты",
      project_overlay: "Проект",
      project_details: "Просмотреть подробнее",
      contact_heading: "Контакты",
      contact_paragraph: "Не стесняйтесь обращаться для сотрудничества или просто сказать привет!",
      name_heading: "Роман Дулин",
      name_subheading: "Просто ровный типок",
      button_about_me: "Обо мне",
      about_me_1: "Обо мне",
      project_title: "Проекты",
      modal_title: "Описание Проекта",
      modal_text: "Описание текущего проекта, его детали и ключевые моменты.",
      footer_text: "&copy; 2024 My Portfolio. Все права защищены.",
      text: "Роман Дулин",
      text_1: "Возраст: 19 лет",
      text_2: "Специализация: Программист",
      text_3: "Образование: Факультет информационных технологий и программирования",
      text_4: "Языки программирования: Python, C++",
      text_5: "Опыт: Fiverr, Freelancer, Toptal, Upwork",
      text_6: "Лингвистические навыки:",
      text_7: "Украинский — родной язык.",
      text_8: "Русский — родной язык.",
      text_9: "Английский — свободное владение.",
      text_10: "Норвежский — уровень A2, продолжаю обучение.",
      follow: "Свяжись со мной"
    }
  };
  
  document.addEventListener("DOMContentLoaded", function() {
    let currentLanguage = 'ru';

    function toggleLanguage() {
        currentLanguage = currentLanguage === 'ru' ? 'en' : 'ru';
        const toggleButton = document.getElementById('languageToggle');
        if (toggleButton) {
            toggleButton.textContent = currentLanguage === 'ru' ? 'RU' : 'EN';
        }

        // Проверяем существование элементов перед изменением текста
        const setText = (selector, text) => {
            const el = document.querySelector(selector);
            if (el) el.textContent = text;
        };

        setText("a[href='#about_me']", translations[currentLanguage].about_me);
        setText("a[href='#projects']", translations[currentLanguage].projects);
        setText("a[href='#follow']", translations[currentLanguage].contact);
        setText('#contact h2', translations[currentLanguage].contact_heading);
        setText('#contact p', translations[currentLanguage].contact_paragraph);
        setText('.name #big', translations[currentLanguage].name_heading);
        setText('.name #big1', translations[currentLanguage].name_subheading);
        setText('.name .large-button', translations[currentLanguage].button_about_me);
        setText('.glass-two', translations[currentLanguage].about_me_1);
        setText('.glass-three', translations[currentLanguage].project_title);
        setText('.content h1', translations[currentLanguage].text);
        setText('#a', translations[currentLanguage].text_1);
        setText('#b', translations[currentLanguage].text_2);
        setText('#c', translations[currentLanguage].text_3);
        setText('#d', translations[currentLanguage].text_4);
        setText('#e', translations[currentLanguage].text_5);
        setText('#f', translations[currentLanguage].text_6);
        setText('#g', translations[currentLanguage].text_7);
        setText('#m', translations[currentLanguage].text_8);
        setText('#n', translations[currentLanguage].text_9);
        setText('#o', translations[currentLanguage].text_10);
        setText('footer p', translations[currentLanguage].footer_text);
        setText('#follow', translations[currentLanguage].follow);

        document.querySelectorAll('.overlay').forEach(el => {
            if (el) el.textContent = translations[currentLanguage].project_overlay;
        });

        document.querySelectorAll('.details').forEach(el => {
            if (el) el.textContent = translations[currentLanguage].project_details;
        });

        const modalText = document.getElementById('modal-text');
        if (modalText) {
            const modalTitle = modalText.querySelector('h2');
            const modalParagraph = modalText.querySelector('p');
            if (modalTitle) modalTitle.textContent = translations[currentLanguage].modal_title;
            if (modalParagraph) modalParagraph.textContent = translations[currentLanguage].modal_text;
        }
    }

    const languageToggle = document.getElementById('languageToggle');
    if (languageToggle) {
        languageToggle.addEventListener('click', toggleLanguage);
    }
});
