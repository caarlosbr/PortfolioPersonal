document.addEventListener("DOMContentLoaded", function () {
    var langToggle = document.getElementById("langToggle");

    var translations = {
        "es": {
            "title": "Práctica 14 - Carlos Borreguero Redondo",
            "logoAlt": "Diseño sin título",
            "header": {
                "theme": "Cambiar Tema",
                "language": "Idioma",
                "greeting": "Hola, soy Carlos",
                "developer": "Web Developer",
                "linkedinButton": "Linkedin",
                "cv": "CV",
                "github": "Github"
            },
            "menu": {
                "home": "",
                "about": "",
                "projects": ""
            },
            "about": {
                "title": "Sobre mí",
                "description": "Soy un chico de 19 años, competente con actitud proactiva y capacidad rápida de aprendizaje",
                "softSkillsTitle": "Soft Skills",
                "softSkills": {
                    "teamwork": "Trabajo en Equipo",
                    "empathy": "Empatía",
                    "problemSolving": "Resolución de problemas",
                    "adaptability": "Adaptabilidad",
                    "emotionalIntelligence": "Inteligencia emocional",
                    "badEducation": "Mala Educación"
                }
            },
            "skills": {
                "hardSkills": "Hard Skills",
                "otherTools": "Otras Herramientas"
            },
            "timeline": {
                "education": "Educación",
                "webDevelopment": "Desarollo de Aplicaciones Web",
                "networks": "Sistemas Microinformáticos y Redes",
                "period1": "2023-2025",
                "period2": "2021-2023"
            },
            "projects": {
                "title": "Proyectos",
                "project1": {
                    "title": "Casas Rurales",
                    "description": "CasasRurales es una web que permite a los usuarios encontrar casasrurales",
                    "github": "Github"
                },
                "project2": {
                    "title": "Memmory",
                    "description": "Clásico juego de Memoria de números realizado en JavaScript y CSS",
                    "github": "Github"
                },
                "project3": {
                    "title": "Gestión de Portfolios",
                    "description": "Esto es una prueba",
                    "github": "Github"
                },
                "project4": {
                    "title": "API REST y Cliente",
                    "description": "API desarrollada en PHP con MVC y cliente en React sobre Centros Civicos",
                    "github": "Github"
                }
            },
            "contact": {
                "title": "Contacto",
                "email": "carlosborregueror@gmail.com",
                "mail": "Enviar correo",
                "linkedin": "Linkedin",
                "github": "Github"
            }
        },
        "en": {
            "title": "Practice 14 - Carlos Borreguero Redondo",
            "logoAlt": "Untitled design",
            "header": {
                "theme": "Change Theme",
                "language": "Language",
                "greeting": "Hello, I'm Carlos",
                "developer": "Web Developer",
                "linkedinButton": "Linkedin",
                "cv": "CV",
                "github": "Github"
            },
            "menu": {
                "home": "",
                "about": "",
                "projects": ""
            },
            "about": {
                "title": "About Me",
                "description": "I'm a 19-year-old, competent, proactive, and quick learner",
                "softSkillsTitle": "Soft Skills",
                "softSkills": {
                    "teamwork": "Teamwork",
                    "empathy": "Empathy",
                    "problemSolving": "Problem Solving",
                    "adaptability": "Adaptability",
                    "emotionalIntelligence": "Emotional Intelligence",
                    "badEducation:":"Bad Education"
                }
            },
            "skills": {
                "hardSkills": "Hard Skills",
                "otherTools": "Other Tools"
            },
            "timeline": {
                "education": "Education",
                "webDevelopment": "Web Application Development",
                "networks": "Computer Systems and Networks",
                "period1": "2023-2025",
                "period2": "2021-2023"
            },
            "projects": {
                "title": "Projects",
                "project1": {
                    "title": "Casas Rurales",
                    "description": "CasasRurales is a website that allows users to find rural houses",
                    "github": "Github"
                },
                "project2": {
                    "title": "Memmory",
                    "description": "CasasRurales is a website that allows users to find rural houses",
                    "github": "Github"
                },
                "project3": {
                    "title": "Portfolio Management",
                    "description": "CasasRurales is a website that allows users to find rural houses",
                    "github": "Github"
                }
            },
            "contact": {
                "title": "Contact",
                "email": "carlosborregueror@gmail.com",
                "mail": "Send Email",
                "linkedin": "Linkedin",
                "github": "Github"
            }
        }
    };

    // Función que resuelve la ruta de la traducción (por ejemplo, "header.greeting")
    function getTranslation(lang, key) {
        return key.split('.').reduce(function(obj, i) {
            return obj ? obj[i] : null;
        }, translations[lang]);
    }

    // Función para actualizar los elementos con data-lang
    function setLanguage(lang) {
        document.querySelectorAll("[data-lang]").forEach(el => {
            var key = el.getAttribute("data-lang");
            var translation = getTranslation(lang, key);
            if (translation) {
                el.textContent = translation;
            }
        });
        localStorage.setItem("lang", lang);
    }

    var savedLang = localStorage.getItem("lang") || "es";
    if (savedLang === "en") {
        langToggle.checked = true;
    }
    setLanguage(savedLang);

    langToggle.addEventListener("change", function () {
        setLanguage(langToggle.checked ? "en" : "es");
    });
});
