# Script js que captura teclas 

O código HTML e JavaScript fornecido implementa uma funcionalidade para capturar as teclas pressionadas pelo usuário,
formar uma palavra e enviar essa palavra a um servidor a cada 5 segundos. 

## Estrutura HTML(index)
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


# server.js

Este código é um servidor Node.js usando o framework Express. Ele tem a funcionalidade de receber palavras enviadas por uma aplicação cliente as palavras digitadas aparecem na configurações de logs do glitch. 

## Importações e Configurações Iniciais

express é o framework para criar o servidor web.
bodyParser é o middleware para analisar o corpo das requisições HTTP.
fsé o módulo de sistema de arquivos para ler e escrever arquivos.
cors é o middleware para habilitar CORS (Cross-Origin Resource Sharing).
Configuração da porta do servidor.
## Middleware

bodyParser.json() é configurado para analisar o corpo das requisições no formato JSON.
cors() habilita CORS para permitir requisições de outras origens.
## Rota POST /salvar

Recebe uma palavra no corpo da requisição (req.body.palavra).
Retorna uma resposta JSON com sucesso ou erro, dependendo do resultado da operação de escrita.
## Inicialização do Servidor

O servidor é iniciado e escuta na porta especificada, exibindo uma mensagem no console.

## Importações e Configurações Iniciais

- require
Método usado para importar módulos em Node.js.

- express
Função que cria uma instância do aplicativo Express.

- bodyParser.json
Middleware do bodyParser que analisa o corpo da requisição em JSON.

- cors
Middleware que habilita CORS (Cross-Origin Resource Sharing).

- app.post
Método que define uma rota HTTP POST.

- req.body
Propriedade do objeto req que contém os dados do corpo da requisição. 
Disponível quando bodyParser.json() é usado.

- fs.appendFile
Método do módulo fs para adicionar dados a um arquivo. Se o arquivo não existir, ele será criado.

- res.status
Método do objeto res para definir o código de status HTTP da resposta.

- res.json
Método do objeto res para enviar uma resposta JSON.

- console.error e console.log
Métodos para registrar mensagens de erro e informações no console.

- app.listen
Método para iniciar o servidor e fazer com que ele escute requisições em uma porta específica.


## execução

o arquivo index tem que estar no seu navegador,e o arquivo server em um servidor. 
