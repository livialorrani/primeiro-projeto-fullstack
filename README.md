<h1 align="center">MyLib</h1>


<p id="#objetivo">Este projeto foi feito para a disciplina de Mobile. Consiste em um APP para cadastro de livros. Pode ser utilizada como uma biblioteca pessoal, para quem tem livros nas estantes e gostaria de organizá-las. </p>


  <h2>Tabela de Conteúdos</h2>
  <ul>
    <li><a href="#objetivo">Objetivo</a></li>  
    <li><a href="#instalacao">Instalação</a></li>
    <li><a href="#uso">Uso</a></li>
    <li><a href="#tecnologias">Tecnologias Utilizadas</a></li>
    <li><a href="#licenca">Licença</a></li>
    <li><a <a href="#autor">Autor</a></a></li>
  </ul>

  <h2 id="instalacao">Instalação</h2>
 <h3>Pré-requisitos</h3>
  <ul>
    <li>Node.js: Verifique se você tem o Node.js instalado executando o comando <code>node --version</code> no terminal.
      <ul>
        <li>Se o Node.js não estiver instalado, faça o download e a instalação a partir do site oficial do Node.js:
          <a href="https://nodejs.org">https://nodejs.org</a>
        </li>
      </ul>
    </li>
  </ul>

  <h3>Passo 1: Instalar o Expo CLI</h3>
  <p>Instale o Expo CLI globalmente executando o seguinte comando no terminal:</p>
  <pre><code>npm install -g expo-cli</code></pre>

  <h3>Passo 2: Criar um novo projeto Expo</h3>
  <p>Crie um novo projeto Expo com o comando:</p>
  <pre><code>expo init nome-do-projeto</code></pre>
  <p>Siga as instruções no terminal para escolher um template (por exemplo, "blank" ou "tabs") e aguarde a criação do projeto.</p>

  <h3>Passo 3: Configurar e executar o projeto</h3>
  <p>Acesse o diretório do projeto criado:</p>
  <pre><code>cd nome-do-projeto</code></pre>
  <p>Instale as dependências do projeto:</p>
  <pre><code>npm install</code></pre>

  <h3>Passo 4: Configurar o MongoDB</h3>
  <ul>
    <li>Crie uma conta no MongoDB Atlas, caso ainda não tenha uma:
      <a href="https://www.mongodb.com/cloud/atlas">https://www.mongodb.com/cloud/atlas</a>
    </li>
    <li>Crie um cluster e defina as configurações necessárias.</li>
    <li>Obtenha a URL de conexão fornecida pelo MongoDB Atlas.</li>
  </ul>

  <h3>Passo 5: Adicionar pacotes do MongoDB</h3>
  <p>Instale os pacotes necessários para trabalhar com o MongoDB:</p>
  <pre><code>npm install mongodb mongoose</code></pre>

  <h3>Passo 6: Rodando o Back End</h3>
  
  <pre><code># Clone este repositório
$ git clone <a href="https://github.com/livialorrani/primeiro-projeto-fullstack.git">ttps://github.com/livialorrani/primeiro-projeto-fullstack.git</a>

# Acesse a pasta do projeto no terminal/cmd
$ cd nome-do-projeto (que você criou)

# Vá para a pasta server
$ cd server

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev:server
</code></pre>
 
 <h2 id="uso">Uso - Cadastro de Livros</h2>

  <p>Este projeto é um aplicativo de cadastro de livros, projetado para ajudar os usuários a organizar suas estantes pessoais e criar uma biblioteca virtual.</p>

  <h3>Tela de Listagem de Livros</h3>

  <p>A tela inicial do aplicativo exibe uma lista de todos os livros cadastrados. Os livros são carregados a partir do banco de dados MongoDB e exibidos em uma lista. Cada item da lista mostra o título, autor. Os usuários podem visualizar detalhes adicionais sobre um livro específico ao tocar no item correspondente.</p>

  <h3>Adicionar um novo livro</h3>

  <p>Os usuários podem adicionar um novo livro através da tela de adição de livros. Ao tocar no botão "Adicionar Livro" (ícone de + na tela principal), uma nova tela é exibida com campos para inserir o título, autor, ano de publicação, número de páginas e edição do livro. Quando os usuários preenchem os campos e tocam no botão "Salvar", o novo livro é criado e salvo no banco de dados MongoDB.</p>

  <h3>Atualizar um livro</h3>

  <p>Ao visualizar os detalhes de um livro na tela de listagem, os usuários têm a opção de editar as informações do livro. Ao tocar no botão "Editar", uma tela de edição é exibida com os campos preenchidos com as informações atuais do livro. Os usuários podem modificar qualquer campo e tocar no botão "Salvar" para atualizar as informações do livro no banco de dados.</p>

  <h3>Excluir um livro</h3>

  <p>Na tela de listagem, os usuários podem excluir um livro específico ao tocar no botão "Excluir" no item correspondente. Isso remove o livro do banco de dados e o exclui da lista exibida na tela.</p>


  <h2 id="tecnologias">Tecnologias Utilizadas</h2>
 <p>O projeto utiliza as seguintes tecnologias:</p>

<ul>
  <li><a href="https://expo.dev/" target="_blank">Expo</a>: Um framework para desenvolvimento de aplicativos móveis multiplataforma.</li>
  <li><a href="https://reactnative.dev/" target="_blank">React Native</a>: Uma biblioteca JavaScript para criar interfaces de usuário nativas em dispositivos móveis.</li>
  <li><a href="https://nodejs.org/" target="_blank">Node.js</a>: Um ambiente de execução JavaScript no lado do servidor.</li>
  <li><a href="https://www.mongodb.com/" target="_blank">MongoDB</a>: Um banco de dados NoSQL orientado a documentos.</li>
</ul>

<p>O uso dessas tecnologias permite uma abordagem eficiente e moderna no desenvolvimento do aplicativo de cadastro de livros.</p>

  <h2 id="licenca">Licença</h2>
  <p>O projeto é licenciado sob a Licença MIT.</p>

<p>Aqui está um resumo dos termos da Licença MIT:</p>

<pre>
MIT License
Copyright (c) 2023 Lívia Lorrani Florencio dos Santos

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
</pre>

<p>Para obter mais informações detalhadas sobre a Licença MIT, consulte o arquivo <strong>LICENSE</strong> no repositório do projeto.</p>

  <h2 id="autor">Autor</h2>

 <p>Este projeto foi desenvolvido por:</p>
<ul>
  <li><strong>Lívia Lorrani</strong></li>
  <li><strong>Email:</strong> livialorrani.s@gmail.com</li>
  <li><strong>GitHub:</strong> <a href="https://github.com/livialorrani" target="_blank">github.com/livialorrani</a></li>
</ul>

 
