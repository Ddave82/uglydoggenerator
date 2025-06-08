# Ugly Dog Generator 🎪🐕

A vintage circus sideshow-themed web application that generates unique and peculiar AI-generated dogs. Built with React and TypeScript, featuring a nostalgic design inspired by 1920s circus aesthetics.

## Features

- Generate unique AI dogs with a single click
- Vintage circus sideshow design
- Interactive elements with sound effects and animations
- Confetti celebration on successful generation
- Download generated images
- Share via email functionality
- Fully responsive design

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Technology Stack

- React with TypeScript
- Styled Components for styling
- React Confetti for celebration effects
- Use Sound for audio effects

## Project Structure

```
/src
  /styles
    - GlobalStyles.ts    # Global styling and theme
  - App.tsx             # Main application component
/public
  /sounds
    - applause.mp3      # Sound effects
    - buzzer.mp3        # Sound effects
```

## Available Scripts

- `npm start`: Run the development server
- `npm build`: Create a production build
- `npm test`: Run tests
- `npm run eject`: Eject from Create React App

## API Integration

The application integrates with an external API endpoint for dog generation:
- Endpoint: `https://n8n.froehlichundbunt.de/webhook/uglydog`
- Method: POST
- Response: JSON containing base64 image data

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT
