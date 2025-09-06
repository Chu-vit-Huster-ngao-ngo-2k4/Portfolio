// Language Management
class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'vi';
        this.languages = {
            vi: {
                'title': 'Bùi Văn Bình - Portfolio',
                'name': 'Bùi Văn Bình',
                'nav-home': 'Trang chủ',
                'nav-about': 'Giới thiệu',
                'nav-projects': 'Dự án',
                'nav-skills': 'Kỹ năng',
                'nav-contact': 'Liên hệ',
                'hero-greeting': 'Xin chào, tôi là',
                'hero-subtitle': 'Frontend Developer & Multimedia Engineer',
                'profile-subtitle': 'Frontend Developer & Multimedia Engineer',
                'hero-description': 'Sinh viên năm 4 tại HUST, đam mê phát triển web và sáng tạo giao diện người dùng. Tôi kết hợp thiết kế và code để xây dựng những website trực quan, thân thiện với người dùng.',
                'btn-view-projects': 'Xem dự án',
                'btn-contact': 'Liên hệ',
                'about-title': 'Về tôi',
                'about-intro-title': 'Giới thiệu',
                'about-intro-1': 'Tôi là sinh viên năm 4 tại Đại học Bách khoa Hà Nội (HUST), chuyên ngành Digital Communication & Multimedia Engineering - Chương trình tiên tiến. Với niềm đam mê phát triển web và tư duy sáng tạo, tôi kết hợp thiết kế và code để xây dựng những website trực quan, thân thiện với người dùng.',
                'about-intro-2': 'Tôi mong muốn đóng góp vào các dự án thực tế nơi tôi có thể phát triển thông qua sự hợp tác và học hỏi liên tục.',
                'about-education': 'Học vấn',
                'about-university': 'Đại học Bách khoa Hà Nội (HUST)',
                'about-major': 'Digital Communication & Multimedia Engineering',
                'about-graduation': 'Dự kiến tốt nghiệp: 2026',
                'about-address': 'Địa chỉ',
                'about-location': 'Xã Đàn - Đống Đa - Hà Nội',
                'about-email': 'Email',
                'projects-title': 'Dự án',
                'project1-title': 'Monderat Music Player Web',
                'project1-desc': 'Ứng dụng web phát nhạc responsive với giao diện tùy chỉnh, cho phép người dùng phát, tạm dừng và chuyển bài hát.',
                'project2-title': 'Game Online Website',
                'project2-desc': 'Nền tảng game trực tuyến trên trình duyệt cho phép người dùng chơi game casual trực tiếp trên website. Thiết kế để khám phá tương tác thời gian thực và tích hợp backend cơ bản.',
                'project3-title': 'Hệ thống quản lý hồ sơ pháp lý Blockchain',
                'project3-desc': 'Hệ thống quản lý tài liệu pháp lý số được thiết kế để đảm bảo tính minh bạch, bảo mật và toàn vẹn bằng cách tích hợp công nghệ blockchain.',
                'project4-title': 'AI-powered IELTS Learning Platform',
                'project4-desc': 'Ứng dụng web tương tác giúp người dùng luyện tập IELTS Speaking bằng cách cung cấp giao diện sạch sẽ để ghi âm, gửi và xem lại câu trả lời với phản hồi AI tức thì.',
                'btn-live-demo': 'Live Demo',
                'skills-title': 'Kỹ năng',
                'skills-frontend': 'Frontend',
                'skills-backend': 'Backend',
                'skills-tools': 'Tools & Others',
                'contact-title': 'Liên hệ',
                'contact-info-title': 'Thông tin liên hệ',
                'contact-phone': 'Điện thoại',
                'contact-github': 'GitHub',
                'contact-form-title': 'Gửi tin nhắn',
                'chat-title': 'Bùi Văn Bình',
                'chat-status': 'Đang hoạt động',
                'chat-minimize': '_',
                'chat-close': '×',
                'chat-welcome': 'Xin chào! 👋 Tôi là Bùi Văn Bình. Bạn có thể gửi tin nhắn cho tôi qua form bên dưới nhé!',
                'chat-now': 'Vừa xong',
                'form-name': 'Họ và tên',
                'form-email': 'Email',
                'form-subject': 'Tiêu đề',
                'form-message': 'Nội dung tin nhắn',
                'form-submit': 'Gửi tin nhắn',
                'form-sending': 'Đang gửi...',
                'form-success': 'Cảm ơn bạn! Tin nhắn đã được gửi thành công. Tôi sẽ liên hệ lại sớm nhất có thể.',
                'form-error': 'Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại sau hoặc liên hệ trực tiếp qua email.',
                'form-validation-required': 'Vui lòng điền đầy đủ thông tin!',
                'form-validation-email': 'Vui lòng nhập email hợp lệ!'
            },
            en: {
                'title': 'Bui Van Binh - Portfolio',
                'name': 'Bui Van Binh',
                'nav-home': 'Home',
                'nav-about': 'About',
                'nav-projects': 'Projects',
                'nav-skills': 'Skills',
                'nav-contact': 'Contact',
                'hero-greeting': 'Hello, I am',
                'hero-subtitle': 'Frontend Developer & Multimedia Engineer',
                'profile-subtitle': 'Frontend Developer & Multimedia Engineer',
                'hero-description': '4th year student at HUST, passionate about web development and user interface design. I combine design and code to build intuitive, user-friendly websites.',
                'btn-view-projects': 'View Projects',
                'btn-contact': 'Contact',
                'about-title': 'About Me',
                'about-intro-title': 'Introduction',
                'about-intro-1': 'I am a 4th year student at Hanoi University of Science and Technology (HUST), majoring in Digital Communication & Multimedia Engineering - Advanced Program. With a passion for web development and creative thinking, I combine design and code to build intuitive, user-friendly websites.',
                'about-intro-2': 'I aspire to contribute to real-world projects where I can grow through collaboration and continuous learning.',
                'about-education': 'Education',
                'about-university': 'Hanoi University of Science and Technology (HUST)',
                'about-major': 'Digital Communication & Multimedia Engineering',
                'about-graduation': 'Expected graduation: 2026',
                'about-address': 'Address',
                'about-location': 'Xa Dan - Dong Da - Hanoi',
                'about-email': 'Email',
                'projects-title': 'Projects',
                'project1-title': 'Monderat Music Player Web',
                'project1-desc': 'Responsive web music player application with custom interface, allowing users to play, pause and switch songs.',
                'project2-title': 'Game Online Website',
                'project2-desc': 'Online gaming platform on browser allowing users to play casual games directly on the website. Designed to explore real-time interaction and basic backend integration.',
                'project3-title': 'Blockchain Legal Document Management System',
                'project3-desc': 'Digital legal document management system designed to ensure transparency, security and integrity by integrating blockchain technology.',
                'project4-title': 'AI-powered IELTS Learning Platform',
                'project4-desc': 'Interactive web application helping users practice IELTS Speaking by providing a clean interface to record, send and review answers with instant AI feedback.',
                'btn-live-demo': 'Live Demo',
                'skills-title': 'Skills',
                'skills-frontend': 'Frontend',
                'skills-backend': 'Backend',
                'skills-tools': 'Tools & Others',
                'contact-title': 'Contact',
                'contact-info-title': 'Contact Information',
                'contact-phone': 'Phone',
                'contact-github': 'GitHub',
                'contact-form-title': 'Send Message',
                'chat-title': 'Bùi Văn Bình',
                'chat-status': 'Online',
                'chat-minimize': '_',
                'chat-close': '×',
                'chat-welcome': 'Hello! 👋 I am Bùi Văn Bình. You can send me a message using the form below!',
                'chat-now': 'Just now',
                'form-name': 'Full Name',
                'form-email': 'Email',
                'form-subject': 'Subject',
                'form-message': 'Message Content',
                'form-submit': 'Send Message',
                'form-sending': 'Sending...',
                'form-success': 'Thank you! Your message has been sent successfully. I will contact you as soon as possible.',
                'form-error': 'An error occurred while sending the message. Please try again later or contact directly via email.',
                'form-validation-required': 'Please fill in all required information!',
                'form-validation-email': 'Please enter a valid email!'
            }
        };
        this.init();
    }

    init() {
        this.applyLanguage();
        this.setupEventListeners();
    }

    applyLanguage() {
        // Update HTML lang attribute
        document.documentElement.setAttribute('lang', this.currentLang);
        document.documentElement.setAttribute('data-lang', this.currentLang);
        
        // Update page title
        const titleElement = document.querySelector('title[data-lang-key="title"]');
        if (titleElement) {
            titleElement.textContent = this.languages[this.currentLang]['title'];
        }
        
        // Update all elements with data-lang-key
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (this.languages[this.currentLang][key]) {
                element.textContent = this.languages[this.currentLang][key];
            }
        });
        
        // Update form placeholders
        this.updateFormPlaceholders();
        
        // Update toggle button
        this.updateToggleButton();
    }

    updateFormPlaceholders() {
        const form = document.getElementById('contactForm');
        if (form) {
            const nameInput = form.querySelector('input[name="name"]');
            const emailInput = form.querySelector('input[name="email"]');
            const subjectInput = form.querySelector('input[name="subject"]');
            const messageInput = form.querySelector('textarea[name="message"]');
            
            if (nameInput) nameInput.placeholder = this.languages[this.currentLang]['form-name'];
            if (emailInput) emailInput.placeholder = this.languages[this.currentLang]['form-email'];
            if (subjectInput) subjectInput.placeholder = this.languages[this.currentLang]['form-subject'];
            if (messageInput) messageInput.placeholder = this.languages[this.currentLang]['form-message'];
        }
    }

    toggleLanguage() {
        this.currentLang = this.currentLang === 'vi' ? 'en' : 'vi';
        localStorage.setItem('language', this.currentLang);
        this.applyLanguage();
        
        // Trigger language change event
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: this.currentLang } }));
    }

    updateToggleButton() {
        const toggleBtn = document.getElementById('languageToggle');
        if (toggleBtn) {
            const viSpan = toggleBtn.querySelector('[data-lang="vi"]');
            const enSpan = toggleBtn.querySelector('[data-lang="en"]');
            
            if (this.currentLang === 'vi') {
                viSpan.style.display = 'block';
                enSpan.style.display = 'none';
                toggleBtn.setAttribute('aria-label', 'Switch to English');
            } else {
                viSpan.style.display = 'none';
                enSpan.style.display = 'block';
                toggleBtn.setAttribute('aria-label', 'Switch to Vietnamese');
            }
        }
    }

    setupEventListeners() {
        const toggleBtn = document.getElementById('languageToggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => this.toggleLanguage());
        }
    }

    getCurrentLanguage() {
        return this.currentLang;
    }
}

// Initialize Language Manager
const languageManager = new LanguageManager();

// Loading Screen Manager
class LoadingManager {
    constructor() {
        this.loadingScreen = document.getElementById('loadingScreen');
        this.loadingText = document.getElementById('loadingText');
        this.progressFill = document.getElementById('progressFill');
        this.progressPercent = document.getElementById('progressPercent');
        this.assetsLoaded = document.getElementById('assetsLoaded');
        this.codeCompiled = document.getElementById('codeCompiled');
        this.performanceOpt = document.getElementById('performanceOpt');
        
        this.loadingMessages = [
            'Initializing...',
            'Loading assets...',
            'Compiling code...',
            'Optimizing performance...',
            'Building interface...',
            'Connecting to server...',
            'Finalizing setup...',
            'Almost ready...'
        ];
        
        this.currentMessageIndex = 0;
        this.progress = 0;
        this.isLoading = true;
        
        this.init();
    }

    init() {
        this.startLoadingSequence();
        this.setupParticleEffects();
    }

    startLoadingSequence() {
        // Start typing effect
        this.startTypingEffect();
        
        // Start progress animation
        this.startProgressAnimation();
        
        // Start stats animation
        this.startStatsAnimation();
        
        // Complete loading after 4 seconds
        setTimeout(() => {
            this.completeLoading();
        }, 4000);
    }

    startTypingEffect() {
        const typeText = (text, callback) => {
            let i = 0;
            this.loadingText.textContent = '';
            
            const typeInterval = setInterval(() => {
                if (i < text.length) {
                    this.loadingText.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typeInterval);
                    setTimeout(callback, 1000);
                }
            }, 100);
        };

        const showNextMessage = () => {
            if (this.currentMessageIndex < this.loadingMessages.length) {
                typeText(this.loadingMessages[this.currentMessageIndex], () => {
                    this.currentMessageIndex++;
                    if (this.isLoading) {
                        showNextMessage();
                    }
                });
            }
        };

        showNextMessage();
    }

    startProgressAnimation() {
        const progressInterval = setInterval(() => {
            if (this.progress < 100) {
                this.progress += Math.random() * 15;
                if (this.progress > 100) this.progress = 100;
                
                this.progressFill.style.width = `${this.progress}%`;
                this.progressPercent.textContent = Math.floor(this.progress);
                
                // Add glitch effect at certain progress points
                if (Math.floor(this.progress) % 25 === 0 && Math.floor(this.progress) > 0) {
                    this.addGlitchEffect();
                }
            } else {
                clearInterval(progressInterval);
            }
        }, 200);
    }

    startStatsAnimation() {
        // Animate assets loaded
        this.animateStat('assetsLoaded', 100, 2000);
        
        // Animate code compiled
        setTimeout(() => {
            this.animateStat('codeCompiled', 100, 1500);
        }, 1000);
        
        // Animate performance optimization
        setTimeout(() => {
            this.animateStat('performanceOpt', 100, 1000);
        }, 2000);
    }

    animateStat(elementId, targetValue, duration) {
        const element = document.getElementById(elementId);
        const startValue = 0;
        const increment = targetValue / (duration / 50);
        let currentValue = startValue;
        
        const statInterval = setInterval(() => {
            currentValue += increment;
            if (currentValue >= targetValue) {
                currentValue = targetValue;
                clearInterval(statInterval);
            }
            
            if (elementId === 'assetsLoaded') {
                element.textContent = `${Math.floor(currentValue)}/100`;
            } else {
                element.textContent = `${Math.floor(currentValue)}%`;
            }
        }, 50);
    }

    addGlitchEffect() {
        const logoLetters = document.querySelectorAll('.logo-letter');
        logoLetters.forEach(letter => {
            letter.style.animation = 'glitch 0.3s ease-in-out';
            setTimeout(() => {
                letter.style.animation = 'logoGlow 2s ease-in-out infinite alternate';
            }, 300);
        });
    }

    setupParticleEffects() {
        // Add random particle movement
        const particles = document.querySelectorAll('.particle');
        particles.forEach((particle, index) => {
            // Random horizontal movement
            const randomX = Math.random() * 20 - 10;
            particle.style.left = `calc(${particle.style.left || '10%'} + ${randomX}px)`;
            
            // Random size variation
            const randomSize = Math.random() * 4 + 2;
            particle.style.width = `${randomSize}px`;
            particle.style.height = `${randomSize}px`;
        });
    }

    completeLoading() {
        this.isLoading = false;
        
        // Final message
        this.loadingText.textContent = 'Ready!';
        this.progressFill.style.width = '100%';
        this.progressPercent.textContent = '100';
        
        // Hide loading screen with animation
        setTimeout(() => {
            this.loadingScreen.classList.add('hide');
            
            // Remove from DOM after animation
            setTimeout(() => {
                this.loadingScreen.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 500);
        }, 1000);
    }
}

// Initialize Loading Manager when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Prevent scrolling during loading
    document.body.style.overflow = 'hidden';
    
    // Initialize loading manager
    const loadingManager = new LoadingManager();
    
    // Initialize other managers after loading
    setTimeout(() => {
        // Initialize theme manager
        themeManager = new ThemeManager();
        
        // Initialize other components
        initializeComponents();
        
        // Initialize particles
        initializeParticles();
        
        // Initialize scroll animations
        initializeScrollAnimations();
        
        // Initialize chatbox
        initializeChatbox();
    }, 100);
});

// Initialize all components
function initializeComponents() {
    initializeNavigation();
    initializeAnimations();
    initializeFormHandling();
    initializeScrollEffects();
    initializeBackToTop();
    initializeButtonEffects();
    initializeScrollbarStyling();
    initializeActiveNavLinks();
    initializeProjectAnimations();
    initializeSkillsAnimations();
    initializeTypingEffect();
}

// Initialize navigation
function initializeNavigation() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }));
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Theme Management
class ThemeManager {
    constructor() {
        // Set dark theme as default if no theme is saved
        this.theme = localStorage.getItem('theme') || 'dark';
        this.init();
    }

    init() {
        this.applyTheme();
        this.setupEventListeners();
    }

    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.theme);
        this.updateToggleButton();
    }

    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', this.theme);
        this.applyTheme();
        
        // Add smooth transition effect
        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        
        // Trigger theme change event for other components
        window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme: this.theme } }));
    }

    updateToggleButton() {
        const toggleBtn = document.getElementById('themeToggle');
        if (toggleBtn) {
            if (this.theme === 'dark') {
                toggleBtn.setAttribute('aria-label', 'Switch to light mode');
            } else {
                toggleBtn.setAttribute('aria-label', 'Switch to dark mode');
            }
        }
    }

    setupEventListeners() {
        const toggleBtn = document.getElementById('themeToggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => this.toggleTheme());
        }
    }

    getCurrentTheme() {
        return this.theme;
    }
}

// Initialize Theme Manager
let themeManager;

// Initialize animations
function initializeAnimations() {
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.project-card, .skill-item, .detail-item');
    animateElements.forEach(el => observer.observe(el));
}

// Initialize form handling
function initializeFormHandling() {
    // Contact form handling with Formspree
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const form = this;
            const formStatus = document.getElementById('formStatus');
            
            // Get form data
            const formData = new FormData(form);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !subject || !message) {
                showFormStatus(languageManager.languages[languageManager.getCurrentLanguage()]['form-validation-required'], 'error');
                return;
            }
            
            // Show loading state
            showFormLoading(form);
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showFormStatus(languageManager.languages[languageManager.getCurrentLanguage()]['form-validation-email'], 'error');
                return;
            }
            
            // Show loading state (already handled by showFormLoading)
            
            // Submit form to Formspree
            fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    showFormStatus(languageManager.languages[languageManager.getCurrentLanguage()]['form-success'], 'success');
                    showFormSuccess(form);
                    form.reset();
                } else {
                    throw new Error('Network response was not ok');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                showFormStatus(languageManager.languages[languageManager.getCurrentLanguage()]['form-error'], 'error');
            })
            .finally(() => {
                // Reset button state
                hideFormLoading(form);
            });
        });
    }
}

// Function to show form status messages
function showFormStatus(message, type) {
    const formStatus = document.getElementById('formStatus');
    formStatus.textContent = message;
    formStatus.className = `form-status ${type}`;
    formStatus.style.display = 'block';
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        formStatus.style.display = 'none';
    }, 5000);
}

// Initialize scroll effects
function initializeScrollEffects() {
    // Navbar background change on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = themeManager.getCurrentTheme() === 'dark' 
                ? 'rgba(15, 23, 42, 0.98)' 
                : 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = themeManager.getCurrentTheme() === 'dark'
                ? '0 2px 20px rgba(0, 0, 0, 0.3)'
                : '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = themeManager.getCurrentTheme() === 'dark'
                ? 'rgba(15, 23, 42, 0.95)'
                : 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Update navbar on theme change
    window.addEventListener('themeChanged', (event) => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = event.detail.theme === 'dark' 
                ? 'rgba(15, 23, 42, 0.98)' 
                : 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = event.detail.theme === 'dark'
                ? '0 2px 20px rgba(0, 0, 0, 0.3)'
                : '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    });
}

// Initialize back to top button
function initializeBackToTop() {
    // Back to top button functionality
    function createBackToTopButton() {
        const backToTopBtn = document.createElement('button');
        backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        backToTopBtn.className = 'back-to-top';
        backToTopBtn.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background: var(--accent-primary);
            color: white;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            display: none;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            box-shadow: 0 4px 12px var(--shadow-medium);
            transition: all 0.3s ease;
            z-index: 1000;
        `;
        
        document.body.appendChild(backToTopBtn);
        
        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.style.display = 'flex';
            } else {
                backToTopBtn.style.display = 'none';
            }
        });
        
        // Scroll to top when clicked
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Hover effects
        backToTopBtn.addEventListener('mouseenter', () => {
            backToTopBtn.style.background = 'var(--accent-hover)';
            backToTopBtn.style.transform = 'translateY(-2px)';
        });
        
        backToTopBtn.addEventListener('mouseleave', () => {
            backToTopBtn.style.background = 'var(--accent-primary)';
            backToTopBtn.style.transform = 'translateY(0)';
        });
    }

    createBackToTopButton();
}

// Initialize button effects
function initializeButtonEffects() {
    // Add loading animation to buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function() {
            if (this.type !== 'submit') {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
            }
        });
    });
}

// Initialize scrollbar styling
function initializeScrollbarStyling() {
    // Theme-aware scrollbar styling
    function updateScrollbarStyle() {
        const isDark = themeManager.getCurrentTheme() === 'dark';
        const scrollbarStyle = document.createElement('style');
        scrollbarStyle.textContent = `
            ::-webkit-scrollbar {
                width: 12px;
            }
            ::-webkit-scrollbar-track {
                background: ${isDark ? '#1e293b' : '#f1f5f9'};
            }
            ::-webkit-scrollbar-thumb {
                background: ${isDark ? '#475569' : '#cbd5e1'};
                border-radius: 6px;
                border: 2px solid ${isDark ? '#1e293b' : '#f1f5f9'};
            }
            ::-webkit-scrollbar-thumb:hover {
                background: ${isDark ? '#64748b' : '#94a3b8'};
            }
        `;
        
        // Remove existing scrollbar style
        const existingStyle = document.querySelector('style[data-scrollbar]');
        if (existingStyle) {
            existingStyle.remove();
        }
        
        scrollbarStyle.setAttribute('data-scrollbar', 'true');
        document.head.appendChild(scrollbarStyle);
    }

    // Update scrollbar when theme changes
    window.addEventListener('themeChanged', updateScrollbarStyle);

    // Initialize scrollbar style
    updateScrollbarStyle();
}

// Initialize active navigation links
function initializeActiveNavLinks() {
    // Active navigation link highlighting
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNavLink);

    // Add CSS for active nav link
    const style = document.createElement('style');
    style.textContent = `
        .nav-link.active {
            color: var(--accent-primary) !important;
        }
        .nav-link.active::after {
            width: 100% !important;
        }
    `;
    document.head.appendChild(style);
}

// Initialize project animations
function initializeProjectAnimations() {
    // Smooth reveal animation for project cards
    function revealOnScroll() {
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (cardTop < windowHeight - 100) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    }

    // Initialize project cards with hidden state
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    window.addEventListener('scroll', revealOnScroll);
}

// Initialize skills animations
function initializeSkillsAnimations() {
    // Skills animation on scroll
    function animateSkills() {
        const skillItems = document.querySelectorAll('.skill-item');
        skillItems.forEach((item, index) => {
            const itemTop = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (itemTop < windowHeight - 100) {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0) scale(1)';
                }, index * 100);
            }
        });
    }

    // Initialize skills with hidden state
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px) scale(0.8)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    window.addEventListener('scroll', animateSkills);
}

// Initialize typing effect
function initializeTypingEffect() {
    const typingText = document.getElementById('typingText');
    if (!typingText) return;

    const messages = {
        vi: [
            'Xin chào, tôi là <span class="highlight">Bùi Văn Bình </span>',
            'Tôi là <span class="highlight">Frontend Developer </span>',

        ],
        en: [
            'Hello, I am <span class="highlight">Bui Van Binh </span>',
            'I am a <span class="highlight">Frontend Developer </span>',
            
        ]
    };

    let currentMessageIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let currentLanguage = languageManager.getCurrentLanguage();

    function typeText() {
        const currentMessages = messages[currentLanguage];
        const currentMessage = currentMessages[currentMessageIndex];
        
        if (isDeleting) {
            // Deleting text
            typingText.innerHTML = currentMessage.substring(0, currentCharIndex - 1);
            currentCharIndex--;
        } else {
            // Typing text
            typingText.innerHTML = currentMessage.substring(0, currentCharIndex + 1);
            currentCharIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && currentCharIndex === currentMessage.length) {
            // Finished typing, wait before deleting
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && currentCharIndex === 0) {
            // Finished deleting, move to next message
            isDeleting = false;
            currentMessageIndex = (currentMessageIndex + 1) % currentMessages.length;
            typeSpeed = 500;
        }

        setTimeout(typeText, typeSpeed);
    }

    // Start typing effect
    typeText();

    // Update typing when language changes
    window.addEventListener('languageChanged', (event) => {
        currentLanguage = event.detail.language;
        currentMessageIndex = 0;
        currentCharIndex = 0;
        isDeleting = false;
        typingText.innerHTML = '';
        typeText();
    });
}


// Initialize particles effect
function initializeParticles() {
    const particlesContainer = document.getElementById('heroParticles');
    if (!particlesContainer) return;
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'hero-particle';
        
        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// Initialize scroll-triggered animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in, .slide-in-bottom');
    animatedElements.forEach(el => observer.observe(el));
}

// Enhanced form loading states
function showFormLoading(form) {
    form.classList.add('form-loading');
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang gửi...';
    }
}

function hideFormLoading(form) {
    form.classList.remove('form-loading');
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Gửi tin nhắn';
    }
}

function showFormSuccess(form) {
    form.classList.add('form-success');
    setTimeout(() => {
        form.classList.remove('form-success');
    }, 600);
}

// Add theme transition to body
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
});

// Initialize Chatbox
function initializeChatbox() {
    const chatboxContainer = document.querySelector('.chatbox-container');
    const minimizeBtn = document.querySelector('.chat-control-btn.minimize');
    const closeBtn = document.querySelector('.chat-control-btn.close');
    const chatMessages = document.getElementById('chatMessages');
    const contactForm = document.getElementById('contactForm');
    
    if (!chatboxContainer) return;
    
    // Minimize functionality
    if (minimizeBtn) {
        minimizeBtn.addEventListener('click', () => {
            chatboxContainer.classList.toggle('minimized');
            const isMinimized = chatboxContainer.classList.contains('minimized');
            minimizeBtn.innerHTML = isMinimized ? '<i class="fas fa-plus"></i>' : '<i class="fas fa-minus"></i>';
        });
    }
    
    // Close functionality
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            chatboxContainer.style.display = 'none';
        });
    }
    
    // Auto-scroll to bottom when new messages are added
    function scrollToBottom() {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Add typing indicator
    function addTypingIndicator() {
        const typingMessage = document.createElement('div');
        typingMessage.className = 'message bot-message typing-indicator';
        typingMessage.innerHTML = `
            <div class="message-avatar">
                <img src="anh_CV.jpg" alt="Bùi Văn Bình">
            </div>
            <div class="message-content">
                <div class="message-bubble">
                    <p>Đang nhập...</p>
                </div>
            </div>
        `;
        chatMessages.appendChild(typingMessage);
        scrollToBottom();
        return typingMessage;
    }
    
    // Remove typing indicator
    function removeTypingIndicator() {
        const typingIndicator = document.querySelector('.typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }
    
    // Add bot response
    function addBotResponse(message) {
        const botMessage = document.createElement('div');
        botMessage.className = 'message bot-message';
        botMessage.innerHTML = `
            <div class="message-avatar">
                <img src="anh_CV.jpg" alt="Bùi Văn Bình">
            </div>
            <div class="message-content">
                <div class="message-bubble">
                    <p>${message}</p>
                </div>
                <div class="message-time">
                    <span>Vừa xong</span>
                </div>
            </div>
        `;
        chatMessages.appendChild(botMessage);
        scrollToBottom();
    }
    
    // Enhanced form submission with chat-like feedback
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const message = formData.get('message');
            
            // Add user message to chat
            const userMessage = document.createElement('div');
            userMessage.className = 'message user-message';
            userMessage.innerHTML = `
                <div class="message-content">
                    <div class="message-bubble user-bubble">
                        <p><strong>${name}:</strong> ${message}</p>
                    </div>
                    <div class="message-time">
                        <span>Vừa xong</span>
                    </div>
                </div>
            `;
            chatMessages.appendChild(userMessage);
            scrollToBottom();
            
            // Add typing indicator
            const typingIndicator = addTypingIndicator();
            
            // Show loading state
            showFormLoading(contactForm);
            
            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    removeTypingIndicator();
                    addBotResponse('Cảm ơn bạn đã liên hệ! Tôi sẽ phản hồi sớm nhất có thể. 📧');
                    showFormSuccess(contactForm);
                } else {
                    throw new Error('Network response was not ok');
                }
            } catch (error) {
                removeTypingIndicator();
                addBotResponse('Xin lỗi, có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại sau! 😅');
                showFormStatus('error', 'Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại sau.');
            } finally {
                hideFormLoading(contactForm);
            }
        });
    }
    
    // Add some interactive bot responses
    const messageInput = contactForm?.querySelector('textarea[name="message"]');
    if (messageInput) {
        messageInput.addEventListener('input', () => {
            const message = messageInput.value.toLowerCase();
            
            // Clear previous responses
            const existingResponses = document.querySelectorAll('.message.bot-message:not(:first-child)');
            existingResponses.forEach(response => response.remove());
            
            // Add contextual responses
            if (message.includes('xin chào') || message.includes('hello')) {
                setTimeout(() => addBotResponse('Xin chào! Rất vui được gặp bạn! 👋'), 1000);
            } else if (message.includes('cảm ơn') || message.includes('thank')) {
                setTimeout(() => addBotResponse('Không có gì! Tôi rất vui được giúp đỡ bạn! 😊'), 1000);
            } else if (message.includes('dự án') || message.includes('project')) {
                setTimeout(() => addBotResponse('Bạn có thể xem các dự án của tôi ở phần Projects phía trên! 🚀'), 1000);
            } else if (message.includes('kỹ năng') || message.includes('skill')) {
                setTimeout(() => addBotResponse('Tôi chuyên về Frontend Development với React, JavaScript, HTML/CSS! 💻'), 1000);
            }
        });
    }
    
    // Initial scroll to bottom
    scrollToBottom();
}

// Export theme manager for external use
window.themeManager = themeManager; 