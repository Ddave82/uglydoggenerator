import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Creepster&family=Abril+Fatface&display=swap');

  :root {
    --primary-red: #FF1E1E;
    --primary-yellow: #FFD700;
    --primary-blue: #0066CC;
    --background: #FDF7E9;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: var(--background);
    background-image: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 10px,
      rgba(255, 30, 30, 0.05) 10px,
      rgba(255, 30, 30, 0.05) 20px
    );
    font-family: 'Abril Fatface', cursive;
    min-height: 100vh;
    padding: 20px;
  }

  h1, h2 {
    font-family: 'Creepster', cursive;
    text-align: center;
    text-shadow: 3px 3px 0 rgba(0,0,0,0.2);
  }

  h1 {
    color: var(--primary-red);
    font-size: 4rem;
    margin-bottom: 0.5rem;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  h2 {
    color: var(--primary-blue);
    font-size: 2rem;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
`;
