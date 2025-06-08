import React, { useState } from 'react';
import styled from 'styled-components';
import ReactConfetti from 'react-confetti';
import { GlobalStyles } from './styles/GlobalStyles';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

const GenerateButton = styled.button`
  background: var(--primary-red);
  border: 4px solid var(--primary-yellow);
  border-radius: 50%;
  color: white;
  cursor: pointer;
  font-family: 'Creepster', cursive;
  font-size: 2rem;
  height: 200px;
  width: 200px;
  margin: 2rem auto;
  padding: 1rem;
  text-shadow: 2px 2px 0 black;
  transition: all 0.3s ease;
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.5);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 30px rgba(255, 215, 0, 0.8);
  }

  &:disabled {
    opacity: 0.7;
    cursor: wait;
  }
`;

const ImageContainer = styled.div`
  background: white;
  border: 8px solid var(--primary-yellow);
  border-radius: 10px;
  margin: 2rem auto;
  max-width: 600px;
  padding: 1rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;

const DogImage = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
`;

const ActionButton = styled.a`
  background: var(--primary-blue);
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-family: 'Abril Fatface', cursive;
  font-size: 1.2rem;
  margin: 0.5rem;
  padding: 0.8rem 1.5rem;
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background: var(--primary-yellow);
  }
`;

const LoadingSpinner = styled.div`
  border: 8px solid var(--primary-yellow);
  border-top: 8px solid var(--primary-red);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;
  margin: 2rem auto;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const AboutSection = styled.div`
  background: white;
  border: 4px solid var(--primary-blue);
  border-radius: 10px;
  margin: 3rem auto;
  max-width: 800px;
  padding: 2rem;
  position: relative;

  &::before, &::after {
    content: '★';
    color: var(--primary-yellow);
    font-size: 2rem;
    position: absolute;
    top: -1rem;
  }

  &::before { left: 1rem; }
  &::after { right: 1rem; }
`;

function App() {
  const [loading, setLoading] = useState(false);
  const [imageData, setImageData] = useState<string>('');
  const [showConfetti, setShowConfetti] = useState(false);

  // Sound effect reference
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const generateDog = async () => {
    setLoading(true);
    setImageData('');
    setShowConfetti(false);

    try {
      const response = await fetch('https://n8n.froehlichundbunt.de/webhook/uglydog', {
        method: 'POST',
      });
      
      const data = await response.json();
      setImageData(data.imageBase64);
      
      // Play sound effect and show confetti
      // Play sound effect
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
      setShowConfetti(true);
      
      // Hide confetti after 5 seconds
      setTimeout(() => setShowConfetti(false), 5000);
    } catch (error) {
      console.error('Error generating dog:', error);
      alert('Failed to generate dog. Please try again!');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = imageData;
    link.download = 'ugly-dog.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <GlobalStyles />
      <audio ref={audioRef} src="/uglydoggenerator/sounds/aplaus.mp3" preload="auto" />
      {showConfetti && <ReactConfetti />}
      
      <Container>
        <h1>Ugly Dog Generator</h1>
        <h2>Make your own AI-generated Ugly Dog</h2>

        <GenerateButton
          onClick={generateDog}
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Generate Ugly Dog'}
        </GenerateButton>

        {loading && <LoadingSpinner />}

        {imageData && (
          <ImageContainer>
            <DogImage src={imageData} alt="Generated ugly dog" />
            <div>
              <ActionButton onClick={handleDownload}>Download Image</ActionButton>
            </div>
          </ImageContainer>
        )}

        <AboutSection>
          <h3>About the Ugly Dog Generator</h3>
          <p>Step right up, ladies and gentlemen! Behold the most peculiar attraction of our time - 
             the Ugly Dog Generator! Using the latest in artificial intelligence technology, 
             we create the most uniquely charming canines you've ever laid eyes upon. 
             Each specimen is one-of-a-kind, guaranteed to amaze and astound!</p>
        </AboutSection>
      </Container>
    </>
  );
}

export default App;
