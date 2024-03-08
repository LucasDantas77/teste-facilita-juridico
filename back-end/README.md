TESTE JURIDICO
Descrição curta do que faz o projeto.

Pré-requisitos
Antes de começar, verifique se você atende aos seguintes requisitos:

Você instalou a versão mais recente do Node.js
Você tem uma instância PostgreSQL configurada e em execução
Instalando
Para instalar e executar este projeto localmente, siga estas etapas:

Clone o repositório:
bash
git clone <URL_DO_SEU_REPOSITORIO>
Navegue até o diretório do projeto:

cd nome-do-seu-projeto
Instale as dependências do projeto:
npm install
Configuração do Banco de Dados
Certifique-se de configurar corretamente o banco de dados PostgreSQL. Você pode fazer isso editando o arquivo .env na raiz do projeto e fornecendo as informações de conexão necessárias.

Exemplo de .env:

DB_HOST=localhost
DB_PORT=5432
DB_USER=seu_usuario
DB_PASS=sua_senha
DB_DATABASE=nome_do_seu_banco_de_dados
Executando a Aplicação
Para iniciar o servidor de desenvolvimento, execute o seguinte comando:

npm run dev
Isso iniciará a aplicação em modo de desenvolvimento. Acesse http://localhost:3000 para visualizar no navegador.

Rotas da API
Descreva aqui as rotas disponíveis em sua API e o que cada uma faz.

Exemplo:

GET /clients: Retorna todos os usuários.
GET /coordenadas: Retorna todas as rotas.
POST /clients: Cria um novo usuário.
{
"name": "teste",
"telefone": "11 11111111",
"email": "teste@gmail.com",
"coordenada_x": 10,
"coordenada_y": 10
}
