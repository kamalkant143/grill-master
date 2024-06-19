// document.querySelector('#about').addEventListener('mousemove', (e) => {
//     const image = document.getElementById('movingImage');
//     const containerRect = e.currentTarget.getBoundingClientRect();
//     const mouseX = e.clientX - containerRect.left;
//     const mouseY = e.clientY - containerRect.top;

//     const moveX = (mouseX - containerRect.width / 2) / containerRect.width * 2; // Adjust multiplier for more/less movement
//     const moveY = (mouseY - containerRect.height / 2) / containerRect.height * 4; // Adjust multiplier for more/less movement

//     image.style.transform = `translate(${moveX}px, ${moveY}px)`;

// });

document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.updown');
    
    setInterval(() => {
        if (logo.classList.contains('animate-down')) {
            logo.classList.remove('animate-down');
            logo.classList.add('animate-up');
        } else {
            logo.classList.remove('animate-up');
            logo.classList.add('animate-down');
        }
    }, 2000); // 2 seconds ke interval ke liye adjust kar sakte hain
});