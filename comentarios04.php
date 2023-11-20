<?php
$comentariosFile = 'comentarios04.txt';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nome = $_POST['nome']; // Captura o nome enviado pelo formulário
    $novoComentario = $_POST['comentario'] . "\n";
    file_put_contents($comentariosFile, "$nome: $novoComentario", FILE_APPEND | LOCK_EX);
    echo "Comentário enviado com sucesso!";
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $comentarios = file_get_contents($comentariosFile);
    echo $comentarios;
} else {
    http_response_code(405); // Método não permitido
}
?>
