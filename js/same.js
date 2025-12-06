    /* --------導覽列-------- */  
    document.addEventListener('DOMContentLoaded', () => {
        const navbar = document.querySelector('.navbar');
        const scrollThreshold = 100;
        function handleScroll() {
            if (window.scrollY >= scrollThreshold) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        window.addEventListener('scroll', handleScroll);
        handleScroll();
    });

    /* --------TOP-------- */
    document.addEventListener('DOMContentLoaded', () => {
        const topButton = document.querySelector('.top');
        topButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        window.addEventListener('scroll', toggleTopButton);
        toggleTopButton();
    });

    /* --------淡入-------- */
    document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in-section');
    const observerOptions = {
        root: null,
        rootMargin: '0px', 
        threshold: 0.25
    };
    //定義當元素進入行為
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 進入視窗：觸發淡入效果
                entry.target.classList.add('is-visible');
                //一旦淡入，就停止觀察該元素
                observer.unobserve(entry.target);
            }
        });
    };
    //執行
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    fadeElements.forEach(element => {
        observer.observe(element);
    });
});