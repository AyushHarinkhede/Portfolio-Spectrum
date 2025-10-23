        // Settings Panel Toggle
        function toggleSettings() {
            const panel = document.getElementById('settingsPanel');
            panel.classList.toggle('active');
        }

        // Theme Toggle
        function toggleTheme() {
            document.body.classList.toggle('light-theme');
            localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
        }

        // Font Size Change
        function changeFontSize(value) {
            document.documentElement.style.setProperty('--font-size-multiplier', value);
            localStorage.setItem('fontSize', value);
        }

        // Scroll to Top
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // Show/Hide Scroll to Top Button
        window.addEventListener('scroll', function() {
            const scrollTop = document.getElementById('scrollTop');
            if (window.pageYOffset > 300) {
                scrollTop.classList.add('active');
            } else {
                scrollTop.classList.remove('active');
            }
        });

        // Social Media Links
        function openLink(platform) {
            const links = {
                instagram: 'https://www.instagram.com/ayush_harinkhere?igsh=ZWUxNXM0MGd3ZmNu',
                facebook: 'https://www.facebook.com/share/17a26WTexc/',
                youtube: 'https://youtube.com/@ashtag_ayush?feature=shared',
                linkedin: 'https://www.linkedin.com/',
                signal: 'https://signal.me/#eu/d-xnZ14twZOj_8DevTe34UqH0VyfFedVpjKkOI7W-n9a1XHFVdVNiZiPp9lb6Rtg',
                whatsapp: 'https://wa.me/919209514158',
                gmail: 'mailto:ayushharinkhere2005@gmail.com',
                github: 'https://github.com/AyushHarinkhede',
                snapchat: 'https://www.snapchat.com/add/ayushharinkhere?share_id=jmrUbhs5QJ4&locale=en-IN-u-mu-celsius',
                duolingo: 'https://www.duolingo.com/profile/AyushHarinkhere?via=share_profile_link',
                telegram: 't.me/ayushharinkhere2005',
                twitter: 'https://x.com/AyushHarinkhere?t=9-6Rz3q9RqSvZK5q4mnvgw&s=09',
                pinterest: 'https://pin.it/2wUjXYwYs',
                reddit: 'https://www.reddit.com/u/ayush_harinkhere/s/dFu9g0OBwP',
                messege: 'sms:+919209514158',
                phone: 'tel:+919209514158',
            };
            
            if (links[platform]) {
                window.open(links[platform], '_blank');
            }
        }

        // Load saved preferences
        window.addEventListener('DOMContentLoaded', function() {
            const savedTheme = localStorage.getItem('theme');
            const savedFontSize = localStorage.getItem('fontSize');
            
            if (savedTheme === 'light') {
                document.body.classList.add('light-theme');
            }
            
            if (savedFontSize) {
                document.documentElement.style.setProperty('--font-size-multiplier', savedFontSize);
            }

            // Fade in animation for elements
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.fade-in').forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                observer.observe(el);
            });

            // Create sparkle effects
            createSparkles();
        });

        // Close settings panel when clicking outside
        document.addEventListener('click', function(event) {
            const panel = document.getElementById('settingsPanel');
            const settingsBtn = document.querySelector('.settings-btn');
            
            if (!panel.contains(event.target) && !settingsBtn.contains(event.target)) {
                panel.classList.remove('active');
            }
        });

        // Create random sparkle effects
        function createSparkles() {
            setInterval(() => {
                const sparkle = document.createElement('div');
                sparkle.className = 'sparkle';
                sparkle.style.left = Math.random() * window.innerWidth + 'px';
                sparkle.style.top = Math.random() * window.innerHeight + 'px';
                document.body.appendChild(sparkle);
                
                setTimeout(() => {
                    sparkle.remove();
                }, 1500);
            }, 3000);
        }

        // Smooth scroll for all links
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

        // Add hover sound effect (optional)
        document.querySelectorAll('.social-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.animation = 'none';
                setTimeout(() => {
                    this.style.animation = '';
                }, 10);
            });
        });

        // Parallax effect for doodles
        window.addEventListener('mousemove', function(e) {
            const doodles = document.querySelectorAll('.doodle');
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            doodles.forEach((doodle, index) => {
                const speed = (index + 1) * 20;
                const x = (mouseX - 0.5) * speed;
                const y = (mouseY - 0.5) * speed;
                doodle.style.transform = `translate(${x}px, ${y}px) rotate(${x * 0.1}deg)`;
            });
        });

        // Add ripple effect on click
        document.querySelectorAll('.social-card, .info-card').forEach(card => {
            card.addEventListener('click', function(e) {
                const ripple = document.createElement('div');
                ripple.style.position = 'absolute';
                ripple.style.borderRadius = '50%';
                ripple.style.background = 'rgba(255, 255, 255, 0.6)';
                ripple.style.width = '20px';
                ripple.style.height = '20px';
                ripple.style.left = e.offsetX + 'px';
                ripple.style.top = e.offsetY + 'px';
                ripple.style.transform = 'translate(-50%, -50%)';
                ripple.style.animation = 'ripple 0.6s ease-out';
                ripple.style.pointerEvents = 'none';
                
                this.style.position = 'relative';
                this.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
            });
        });

        // Add ripple animation to CSS dynamically
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    width: 200px;
                    height: 200px;
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        console.log('🎨 Portfolio loaded successfully! Made with creativity by Ayush Harinkhede');
