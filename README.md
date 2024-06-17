# Script js que captura teclas 

O código HTML e JavaScript fornecido implementa uma funcionalidade para capturar as teclas pressionadas pelo usuário,
formar uma palavra e enviar essa palavra a um servidor a cada 5 segundos. 

## Estrutura HTML
- Cabeçalho :

Define a codificação de caracteres como UTF-8.
Configura a viewport para dispositivos móveis.
Define o título da página como "ouvindo".
Aplica um estilo CSS básico para definir a fonte e margens do corpo do documento.

- Corpo :

Contém um único div com o ID output, onde a palavra atual pode ser exibida.

## JavaScript
- Variável Global

palavraAtual é uma string vazia que acumula as teclas pressionadas.
- Função aoPressionarTecla:

Recebe um evento de tecla e adiciona a tecla pressionada à variável palavraAtual.

- Função salvarPalavra:

Envia a palavraAtual ao servidor usando uma requisição POST para a URL que se encontra meu servidor no glitch.com .
Define o cabeçalho Content-Type como application/json e envia a palavra como um objeto JSON.

Lida com a resposta do servidor:
Se a palavra for enviada com sucesso, registra a resposta no console, limpa a palavraAtual.
Se ocorrer um erro, registra o erro no console.
- Adiciona um ouvinte de eventos de teclado:

O ouvinte é adicionado ao documento e chama a função aoPressionarTecla sempre que uma tecla é pressionada.
- Função agendarProximoSalvamento:

Chama salvarPalavra para enviar a palavra atual ao servidor.
Usa setTimeout para agendar a próxima chamada a agendarProximoSalvamento após 5000 milissegundos,
criando um loop que salva a palavra a cada 5 segundos.
- Inicialização do processo de salvamento:

agendarProximoSalvamento é chamada para iniciar o ciclo de salvamento.

## Propriedades e Métodos

- event.key
Propriedade do objeto KeyboardEvent que representa a tecla que foi pressionada. 
Por exemplo, se a tecla 'a' for pressionada, event.key será 'a'.

- document.addEventListener

Método que adiciona um ouvinte de eventos ao objeto documento.
No código, é usado para ouvir eventos de teclas pressionadas (keydown).
a sintaxe sendo (ecento,função).

- fetch

Método usado para fazer requisições HTTP assíncronas. No código, é utilizado para enviar dados ao servidor.
a sintaxe sendo (url, opções). a url de onde a requisição será enviada e as opções tendo método da requisão,
cabeçalho e corpo.

- JSON.stringify

Método que converte um objeto JavaScript em uma string JSON.

- response.json

Método que converte a resposta HTTP em um objeto JSON.

- console.log

Método que imprime mensagens no console do navegador,para depuração.

- setTimeout

Método que executa uma função ou um trecho de código depois de um intervalo específico de tempo em milissegundos.


