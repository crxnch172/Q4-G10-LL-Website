document.addEventListener('DOMContentLoaded', function() {
    const milestones = document.querySelectorAll('.journey-milestone');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                // Animate the content inside each milestone
                const content = entry.target.querySelector('.journey-content');
                const images = entry.target.querySelectorAll('.journey-image img');
                
                if (content) {
                    content.style.opacity = '1';
                    content.style.transform = 'translateY(0)';
                }
                
                images.forEach((img, index) => {
                    setTimeout(() => {
                        if (img) {
                            img.style.opacity = '1';
                            img.style.transform = 'scale(1)';
                        }
                    }, index * 200);
                });
            }
        });
    }, { threshold: 0.2 });

    // Loop the milestones
    milestones.forEach(milestone => {
        observer.observe(milestone);
        
        const content = milestone.querySelector('.journey-content');
        const images = milestone.querySelectorAll('.journey-image img');
        
        if (content) {
            content.style.opacity = '0';
            content.style.transform = 'translateY(20px)';
            content.style.transition = 'all 0.8s ease-out';
        }
        
        images.forEach(img => {
            if (img) {
                img.style.opacity = '0';
                img.style.transform = 'scale(0.8)';
                img.style.transition = 'all 0.6s ease-out';
            }
        });
    });
    

    const brand = document.querySelector('.brand');
    const navItems = document.querySelectorAll('.navigation-items a');
    

    if (brand) {
        brand.style.opacity = '0';
        brand.style.transform = 'translateX(-20px)';
        brand.style.transition = 'all 0.8s ease-out';
        
        setTimeout(() => {
            brand.style.opacity = '1';
            brand.style.transform = 'translateX(0)';
        }, 500);
    }

    navItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(-10px)';
        item.style.transition = 'all 0.6s ease-out';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 700 + (index * 200));
    });
    
    const heading = document.querySelector('.journey-section h1');
    if (heading) {
        heading.style.opacity = '0';
        heading.style.transform = 'translateY(20px)';
        heading.style.transition = 'all 1s ease-out';
        
        setTimeout(() => {
            heading.style.opacity = '1';
            heading.style.transform = 'translateY(0)';
        }, 800);
    }
    
    const journeyContents = document.querySelectorAll('.journey-content');
    journeyContents.forEach(content => {
        content.addEventListener('mouseenter', () => {
            content.style.transform = 'translateY(-5px)';
            content.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
        });
        
        content.addEventListener('mouseleave', () => {
            content.style.transform = 'translateY(0)';
            content.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
        });
    });
    
    const container = document.querySelector('.journey-container');
    if (container) {
        container.addEventListener('mousemove', (e) => {
            const images = document.querySelectorAll('.journey-image img');
            const mouseX = e.clientX / window.innerWidth - 0.5;
            const mouseY = e.clientY / window.innerHeight - 0.5;
            
            images.forEach(img => {
                if (img) {
                    const depth = 20;
                    const moveX = mouseX * depth;
                    const moveY = mouseY * depth;
                    img.style.transform = `translate(${moveX}px, ${moveY}px) scale(1)`;
                }
            });
        });
        
        container.addEventListener('mouseleave', () => {
            const images = document.querySelectorAll('.journey-image img');
            images.forEach(img => {
                if (img) {
                    img.style.transform = 'translate(0, 0) scale(1)';
                }
            });
        });
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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