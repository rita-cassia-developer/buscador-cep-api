# 📍 Buscador de CEP - API Funcional

![Status](https://img.shields.io/badge/Status-Concluído-brightgreen)

## 📝 Descrição do Projeto

Este projeto é uma aplicação web profissional para **localização de endereços em tempo real** através da consulta de CEPs. Desenvolvido com foco em **performance** e **experiência do usuário (UX)**, ele demonstra a habilidade de integrar e consumir APIs externas de forma eficiente, além de implementar boas práticas de validação e tratamento de erros.

## ✨ Funcionalidades

*   **Consulta de CEP:** Permite ao usuário inserir um CEP e obter informações detalhadas do endereço (rua, bairro, cidade, estado, IBGE).
*   **Validação de Entrada:** Garante que apenas CEPs válidos (8 dígitos numéricos) sejam processados, utilizando **Regex (Expressões Regulares)** para higienização dos inputs.
*   **Tratamento de Erros:** Exibe mensagens amigáveis para CEPs inexistentes ou falhas na conexão com a API, melhorando a usabilidade.
*   **Feedback Visual:** Implementa *loaders* (indicadores de carregamento) e manipulação dinâmica do **DOM** para fornecer feedback instantâneo ao usuário durante a busca.

## 🛠️ Tecnologias Utilizadas

*   **HTML5:** Estrutura semântica e acessível para o formulário e exibição dos resultados.
*   **CSS3 Moderno:** Estilização responsiva, garantindo que a aplicação seja visualmente agradável e funcional em diversos dispositivos (desktops, tablets e smartphones).
*   **JavaScript (ES6+):** Lógica assíncrona para o consumo da API (`Fetch API` e `Promises`), manipulação do DOM e validação de dados.
*   **ViaCEP API:** Webservice de alta disponibilidade utilizado para a consulta de dados de endereçamento.

## 🌐 Demonstração

Experimente o buscador de CEP ao vivo:

[**Acesse o Localizador ao vivo**](https://rita-cassia-developer.github.io/buscador-cep-api/)

## ⚙️ Como Rodar o Projeto Localmente

Siga os passos abaixo para configurar e executar o projeto em sua máquina:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/rita-cassia-developer/buscador-cep-api.git
    ```
2.  **Navegue até o diretório do projeto:**
    ```bash
    cd buscador-cep-api
    ```
3.  **Abra o arquivo `index.html` no seu navegador:**
    Você pode simplesmente arrastar o arquivo para a janela do navegador ou usar uma extensão de servidor local (ex: Live Server para VS Code) para visualização.

## 💡 Desafios e Aprendizados

Este projeto foi fundamental para aprofundar conhecimentos em:

*   **Consumo de APIs RESTful:** Entendimento do ciclo de vida de uma requisição HTTP, tratamento de respostas e erros.
*   **Assincronicidade em JavaScript:** Utilização de `Fetch API` e `Promises` para gerenciar operações que não bloqueiam a interface do usuário.
*   **Manipulação de Strings com Regex:** Aplicação de expressões regulares para validação e limpeza de dados de entrada.
*   **Design Responsivo e Acessibilidade:** Garantia de que a aplicação seja utilizável e acessível para todos os usuários, independentemente do dispositivo ou necessidades especiais.

## ✅ Qualidade e Conformidade

*   **Clean Code:** Código indentado e organizado, seguindo padrões para facilitar a leitura e manutenção.
*   **Acessibilidade:** Interface testada para garantir a conformidade com padrões de acessibilidade (uso de labels, contrastes adequados).
*   **Validação W3C:** Projeto validado pelas normas da W3C para HTML e CSS.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir *issues* para reportar bugs ou sugerir novas funcionalidades, ou enviar *pull requests* com melhorias.


## 👤 Autor

**Rita de Cássia Calixto**

*   [GitHub](https://github.com/rita-cassia-developer)
*   [LinkedIn](https://www.linkedin.com/in/rita-de-cassia99/)
