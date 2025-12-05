# Contador de Cliques

Uma aplicação React para contagem de cliques, desenvolvida como parte do projeto de certificação 1 da trilha 3 do DEVstart.

## Sobre o Projeto

Este projeto implementa um contador interativo com funcionalidades de incremento, decremento e reset. A interface foi desenvolvida com foco em experiência do usuário, apresentando animações suaves, design responsivo e uma paleta de cores moderna.

### Funcionalidades

- **Incrementar**: Aumenta o contador em +1
- **Decrementar**: Diminui o contador em -1
- **Resetar**: Volta o contador para 0
- **Design Responsivo**: Adapta-se a diferentes tamanhos de tela
- **Animações Suaves**: Feedback visual em todas as interações
- **Interface Moderna**: Gradientes e sombras cuidadosamente trabalhados

## Começando

### Pré-requisitos

Certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- npm (geralmente vem com o Node.js)

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/flaviare1s/contador-de-cliques.git
```

2. Entre no diretório do projeto:

```bash
cd contador-de-cliques
```

3. Instale as dependências:

```bash
npm install
```

### Executando o Projeto

Para iniciar o servidor de desenvolvimento:

```bash
npm start
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000)

## Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para construção de interfaces
- **React Hooks** - useState para gerenciamento de estado
- **CSS3** - Estilização com gradientes, animações e design responsivo
- **Create React App** - Configuração inicial do projeto

## Como Funciona

O projeto utiliza o hook `useState` do React para gerenciar o estado do contador:

```javascript
const [count, setCount] = useState(0);

 function incrementarContador() {
    setCount(count + 1)
  }
  function decrementarContador() {
    setCount(count - 1)
  }
  function resetarContador() {
    setCount(0)
  }
```

Cada botão está conectado a uma função específica que atualiza o estado, causando a re-renderização do componente com o novo valor.

## Características de Design

- **Gradiente de Fundo**: Transição suave de roxo para violeta
- **Card Glassmorphism**: Efeito de vidro com backdrop-filter
- **Botões Interativos**: Animação de ripple ao clicar
- **Hover Effects**: Elevação e mudança de sombra
- **Responsividade**: Layout adaptável para mobile e desktop

## Responsividade

O projeto é totalmente responsivo, com breakpoint em 480px para otimizar a experiência em dispositivos móveis:

- Ajuste de tamanhos de fonte
- Redução de padding e espaçamentos
- Manutenção da funcionalidade completa

## Agradecimentos

- Projeto desenvolvido como parte do programa DEVstart
