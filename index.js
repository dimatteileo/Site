document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Previne o envio padrão do formulário

    // Coleta os valores do formulário
    const username = document.getElementById('username').value;
    const bio = document.getElementById('bio').value;
    const pfp = document.getElementById('output').src; // Pega o src da imagem

    // Salva os dados no localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('bio', bio);
    localStorage.setItem('pfp', pfp);

    // Redireciona para a página de perfil
    window.location.href = 'perfil.html';
});

// Mantém a funcionalidade do upload da imagem
const fileUpload = document.getElementById('fileUpload');
const output = document.getElementById('output');

fileUpload.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            output.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});
