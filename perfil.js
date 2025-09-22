document.addEventListener('DOMContentLoaded', function() {
    // Recupera os dados do localStorage
    const username = localStorage.getItem('username');
    const bio = localStorage.getItem('bio');
    const pfp = localStorage.getItem('pfp');

    // Exibe os dados na página
    if (username) {
        document.getElementById('profile-username').textContent = username;
    }
    if (bio) {
        document.getElementById('profile-bio').textContent = bio;
    }
    if (pfp) {
        document.getElementById('profile-picture').src = pfp;
    }
});
