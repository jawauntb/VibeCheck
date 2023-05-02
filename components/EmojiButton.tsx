import React from 'react';

const EmojiButton: React.FC = () => {
  const emojis = ['😎', '🔥', '🥶', '🪩', '🌴'];
  const [currentEmoji, setCurrentEmoji] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEmoji((prev) => (prev + 1) % emojis.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-6xl animate-pulse">
      {emojis[currentEmoji]}
    </div>
  );
};

export default EmojiButton;
