// Movimiento del cursor 
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    // Suavizado para el seguidor
    follower.animate({
        left: `${e.clientX - 15}px`,
        top: `${e.clientY - 15}px`
    }, { duration: 500, fill: "forwards" });
});

// Revelado al scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Parallax simple en hover
document.querySelectorAll('.work-item').forEach(item => {
    item.addEventListener('mousemove', (e) => {
        const img = item.querySelector('img');
        const x = (e.clientX - window.innerWidth / 2) * 0.02;
        const y = (e.clientY - window.innerHeight / 2) * 0.02;
        img.style.transform = `translate3d(${x}px, ${y}px, 0) scale(1.3)`;
    });
});
