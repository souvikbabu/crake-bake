document.querySelector('.search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.querySelector('.search-input').value;
    alert('Search query: ' + query);
    // You can replace the alert with the actual search logic
});
// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    const modeToggle = document.getElementById('modeToggle');
    const body = document.body;

    // Check if the user has a preferred mode
    if (localStorage.getItem('dark-mode') === 'true') {
        body.classList.add('dark-mode');
        modeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    modeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            modeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('dark-mode', 'true');
        } else {
            modeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('dark-mode', 'false');
        }
    });
});
