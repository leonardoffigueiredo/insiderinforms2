document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'send_email.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 400) {
            alert('Email enviado com sucesso!');
            window.location.reload(); // Recarrega a página após o envio
        } else {
            alert('Ocorreu um erro ao enviar o email. Por favor, tente novamente.');
        }
    };
    xhr.send('nome=' + encodeURIComponent(nome) + '&email=' + encodeURIComponent(email));
});
