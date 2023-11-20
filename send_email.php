<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    
    // Salvar no arquivo de bloco de notas
    $file = 'infos.txt'; // Substitua pelo caminho correto do seu arquivo

    if (file_put_contents($file, "Nome: $nome, Email: $email" . PHP_EOL, FILE_APPEND | LOCK_EX)) {
        http_response_code(200);
    } else {
        http_response_code(500);
    }
} else {
    http_response_code(405); // Método não permitido
}
?>
