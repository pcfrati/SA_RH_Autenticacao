# SA_RH_Autenticacao# 📄 Documentação da Plataforma RH  

---

## 🕑 Histórico de Revisão do Documento  

| Versão | Data     | Autor | Descrição             |
|--------|----------|-------|-----------------------|
| 1.0    | 13/08/25 | Paula | Criação do documento  |

---

## 📌 Introdução  

**Plataforma RH: Cadastro de Vagas e Currículos com Acesso Autenticado.**  

### 1.1 Objetivo  
Desenvolver uma aplicação **Angular** com back-end simulado (**json-server**) que permita a gestão de vagas e currículos, utilizando autenticação (login/registro) e autorização por tipo de usuário (**Admin** e **Usuário Comum**).  

O projeto será orientado por etapas de:  
- Levantamento de requisitos  
- Prototipagem  
- Diagramação  
- Codificação  

---

## 📦 Descrição Geral do Produto  

### 2.1 Escopo  

| Tipo de Usuário  | Funcionalidade                       | Descrição                                                                 |
|------------------|---------------------------------------|---------------------------------------------------------------------------|
| Usuário Comum    | Cadastro de conta                     | Permite ao usuário criar uma conta no sistema com informações básicas.     |
| Usuário Comum    | Login                                | Permite que o usuário acesse sua conta utilizando e-mail e senha.          |
| Usuário Comum    | Cadastro de Currículos                | Permite que o usuário preencha e salve seu currículo no sistema.           |
| Usuário Comum    | Visualização de Vagas                 | Permite que o usuário navegue e visualize as vagas disponíveis.            |
| Administrador    | Cadastro, edição e exclusão de vagas  | Permite que o administrador gerencie o banco de vagas (criar/editar/excluir). |
| Administrador    | Visualização de currículos recebidos  | Permite que o administrador visualize os currículos enviados pelos usuários. |

---

### 2.2 Objetivos SMART  

| Objetivo                          | Específico | Mensurável | Alcançável | Relevante | Temporal |
|----------------------------------|------------|------------|------------|-----------|----------|
| Permitir cadastro de usuários    | Criar contas com nome, e-mail e senha | Número de usuários cadastrados | Sim | Essencial para controle de acesso | Até o final do 1º dia |
| Permitir login seguro            | Usuários e admins acessam via login   | % de logins bem-sucedidos      | Sim | Necessário para segurança | Até o final do 1º dia |
| Cadastro de currículos           | Criar e salvar currículos             | Número de currículos cadastrados | Sim | Facilita candidatura e gestão | Até o final do 2º dia |
| Visualização de vagas            | Usuários visualizam vagas disponíveis | Número de acessos à lista       | Sim | Essencial para aplicação | Até o final do 2º dia |
| Gerenciamento de vagas (Admin)   | Criar, editar e excluir vagas         | Número de vagas gerenciadas     | Sim | Crucial para atualização | Até o final do 2º dia |
| Visualização de currículos (Admin)| Acessar currículos enviados          | Número de currículos visualizados | Sim | Importante para seleção | Até o final do 2º dia |

---

### 2.3 Cronograma  

| Dia              | Atividade                | Descrição |
|------------------|--------------------------|-----------|
| **1º Dia (Tarde)** | Documentação + Protótipo | - Finalizar documentação (Escopo, SMART, Requisitos, Cronograma) <br> - Criar protótipo visual no **Figma** <br> - Estruturação inicial do projeto Angular (componentes + rotas) |
| **2º Dia (Tarde)** | Implementação + Entrega Final | - Desenvolver funcionalidades principais no Angular <br> - Criar diagramas <br> - Subir código no **GitHub** <br> - Gravar apresentação em vídeo com as funcionalidades |

---

## ⚙️ Requisitos  

### 3.1 Humanos  

| Descrição             | Observações |
|------------------------|-------------|
| Desenvolvedor Frontend | Responsável pela implementação da interface. |
| Desenvolvedor Backend  | Gerencia dados de usuários, currículos e vagas (json-server). |
| Designer/UX            | Layout, organização visual e experiência do usuário. |

---

### 3.2 Ferramentas de Desenvolvimento  

| Descrição                  | Observações |
|-----------------------------|-------------|
| Ambiente de Desenvolvimento | Visual Studio Code |
| Linguagens/Framework        | Angular |
| Banco de Dados              | Json-server |
| Controle de Versão          | Git/GitHub |
| Navegador Web               | Testes e validação |
| Ferramentas de Design       | Canva |

---
