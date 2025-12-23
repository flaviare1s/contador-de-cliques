# Click Counter

[![pt-BR](https://img.shields.io/badge/lang-pt--BR-green.svg)](README.md)
[![en](https://img.shields.io/badge/lang-en-red.svg)](README.en.md)

<div align="center">
  <h3>🎯 React Click Counter Application</h3>
  <p>Developed as part of certification project 1 of DEVstart track 3</p>
  
  <p>
    <a href="https://contador-de-cliques-drab.vercel.app/" target="_blank">
      <img src="https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel" alt="Deploy on Vercel" />
    </a>
  </p>
  
  <p>
    <a href="https://contador-de-cliques-drab.vercel.app/" target="_blank">🚀 View Live Demo</a>
  </p>
</div>

---

## About The Project

This project implements an interactive counter with increment, decrement, and reset functionalities. The interface was developed with a focus on user experience, featuring smooth animations, responsive design, and a modern color palette.

### Features

- **Increment**: Increases the counter by +1
- **Decrement**: Decreases the counter by -1
- **Reset**: Returns the counter to 0
- **Responsive Design**: Adapts to different screen sizes
- **Smooth Animations**: Visual feedback on all interactions
- **Modern Interface**: Carefully crafted gradients and shadows

## 🚀 Deploy

The application is hosted on Vercel and can be accessed through the link:

**🌐 [https://contador-de-cliques-drab.vercel.app/](https://contador-de-cliques-drab.vercel.app/)**

## Getting Started

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- npm (usually comes with Node.js)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/flaviare1s/contador-de-cliques.git
```

2. Navigate to the project directory:

```bash
cd contador-de-cliques
```

3. Install dependencies:

```bash
npm install
```

### Running the Project

To start the development server:

```bash
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### Building for Production

To create a production build:

```bash
npm run build
```

The optimized files will be generated in the `build/` folder.

## 🛠️ Technologies Used

- **React 19.2.1** - JavaScript library for building user interfaces
- **React Hooks** - useState for state management
- **CSS3** - Styling with gradients, animations, and responsive design
- **Create React App** - Initial project setup
- **Vercel** - Deployment and hosting platform

## How It Works

The project uses React's `useState` hook to manage the counter state:

```javascript
const [count, setCount] = useState(0);

function incrementarContador() {
  setCount(count + 1);
}
function decrementarContador() {
  setCount(count - 1);
}
function resetarContador() {
  setCount(0);
}
```

Each button is connected to a specific function that updates the state, causing the component to re-render with the new value.

## Design Features

- **Background Gradient**: Smooth transition from purple to violet
- **Glassmorphism Card**: Glass effect with backdrop-filter
- **Interactive Buttons**: Ripple animation on click
- **Hover Effects**: Elevation and shadow changes
- **Responsiveness**: Adaptive layout for mobile and desktop

## Responsiveness

The project is fully responsive, with a breakpoint at 480px to optimize the experience on mobile devices:

- Font size adjustments
- Reduced padding and spacing
- Full functionality maintained

## 📸 Screenshots

<div align="center">
  <img src="https://via.placeholder.com/800x400/667eea/ffffff?text=Add+application+screenshot" alt="Application Screenshot" width="100%" />
</div>

## 📝 Project Structure

```
contador-de-cliques/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   └── Contador.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 📄 License

This project was developed as part of an educational project.

## 👤 Author

**Flavia Reis**

- GitHub: [@flaviare1s](https://github.com/flaviare1s)
- Project: [contador-de-cliques](https://github.com/flaviare1s/contador-de-cliques)

## 🙏 Acknowledgments

- DEVstart for the learning opportunity
- React community for excellent documentation
