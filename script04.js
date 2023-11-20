function adicionarComentario() {
    var nome = document.getElementById('nome').value;
    var novoComentario = document.getElementById('novo-comentario').value;
    var listaComentarios = document.getElementById('lista-comentarios');

    if (nome.trim() === '' || novoComentario.trim() === '') {
        alert('Por favor, preencha seu nome e comentário.');
        return;
    }

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'comentarios04.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 400) {
            carregarComentarios();
            document.getElementById('nome').value = ""; // Limpa o campo de nome após o envio do comentário
            document.getElementById('novo-comentario').value = ""; // Limpa o campo de comentário após o envio do comentário
        }
    };
    xhr.send('nome=' + encodeURIComponent(nome) + '&comentario=' + encodeURIComponent(novoComentario));
}

function carregarComentarios() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'comentarios.php', true);
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 400) {
            var comentarios = xhr.responseText.split('\n');
            var listaComentarios = document.getElementById('lista-comentarios');
            listaComentarios.innerHTML = ''; // Limpa a lista de comentários antes de adicionar os novos
            comentarios.forEach(function (comentario) {
                if (comentario.trim() !== '') {
                    var novoElementoComentario = document.createElement('div');
                    novoElementoComentario.className = 'comentario';
                    novoElementoComentario.innerHTML = '<p>' + comentario + '</p>';
                    listaComentarios.appendChild(novoElementoComentario);
                }
            });
        }
    };
    xhr.send();
}
