import React from 'react';

interface MascotProps {
  emotion: 'happy' | 'neutral' | 'concerned' | 'teaching';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const Mascot: React.FC<MascotProps> = ({ emotion, size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-32 h-32',
    lg: 'w-48 h-48',
    xl: 'w-64 h-64'
  };

  // Kawaii Color Palette
  const bodyColor = "#fb7185"; // Rose 400 - Softer pink
  const bellyColor = "#ffe4e6"; // Rose 100
  const eyeColor = "#2a1e22"; // Dark brown/black for softness
  const blushColor = "#fda4af"; // Rose 300
  const sparkleColor = "#ffffff";

  return (
    <div className={`${sizeClasses[size]} ${className} relative inline-block transition-transform duration-500 hover:scale-105`}>
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
        
        {/* Animated Tail */}
        <path 
          d="M150 160C170 160 185 140 175 125C170 118 155 145 140 155" 
          stroke={bodyColor} 
          strokeWidth="14" 
          strokeLinecap="round"
          className="animate-[bounce_3s_infinite]"
        />

        {/* Body (Small blob) */}
        <path d="M60 140 C 60 180, 140 180, 140 140 L 140 130 L 60 130 Z" fill={bodyColor} />
        <path d="M80 140 C 80 160, 120 160, 120 140" fill={bellyColor} opacity="0.8" />

        {/* Paws holding up */}
        <circle cx="70" cy="145" r="10" fill="white" />
        <circle cx="130" cy="145" r="10" fill="white" />

        {/* Big Head (Kawaii proportions) */}
        <rect x="40" y="40" width="120" height="100" rx="50" fill={bodyColor} />

        {/* Ears (Rounded) */}
        <path d="M50 60 L40 30 C35 20 60 20 65 40 Z" fill={bodyColor} />
        <path d="M150 60 L160 30 C165 20 140 20 135 40 Z" fill={bodyColor} />
        <path d="M52 50 L48 35 C45 30 55 30 58 45 Z" fill={bellyColor} opacity="0.7"/>
        <path d="M148 50 L152 35 C155 30 145 30 142 45 Z" fill={bellyColor} opacity="0.7"/>

        {/* Face Elements */}
        
        {/* Eyes (Big and shiny) */}
        <circle cx="75" cy="95" r="10" fill={eyeColor} />
        <circle cx="125" cy="95" r="10" fill={eyeColor} />
        
        {/* Eye Sparkles */}
        <circle cx="78" cy="92" r="3" fill={sparkleColor} />
        <circle cx="128" cy="92" r="3" fill={sparkleColor} />

        {/* Cheeks (Blush) */}
        <ellipse cx="65" cy="108" rx="8" ry="5" fill={blushColor} opacity="0.6" />
        <ellipse cx="135" cy="108" rx="8" ry="5" fill={blushColor} opacity="0.6" />

        {/* Mouth Emotions */}
        {emotion === 'happy' && (
          <path d="M90 105 Q100 115 110 105" stroke={eyeColor} strokeWidth="3" strokeLinecap="round" fill="none" />
        )}
        
        {emotion === 'neutral' && (
           <path d="M95 108 L105 108" stroke={eyeColor} strokeWidth="3" strokeLinecap="round" />
        )}
        
        {emotion === 'concerned' && (
          <>
             <path d="M92 110 Q100 105 108 110" stroke={eyeColor} strokeWidth="3" strokeLinecap="round" fill="none" />
             {/* Sweat drop */}
             <path d="M150 70 Q150 60 155 70 Q160 80 150 70" fill="#bae6fd" /> 
          </>
        )}
        
        {emotion === 'teaching' && (
          <>
            <path d="M90 105 Q100 115 110 105" stroke={eyeColor} strokeWidth="3" strokeLinecap="round" fill="none" />
            {/* Glasses */}
            <circle cx="75" cy="95" r="14" stroke="white" strokeWidth="2" fill="none"/>
            <line x1="89" y1="95" x2="111" y2="95" stroke="white" strokeWidth="2"/>
            <circle cx="125" cy="95" r="14" stroke="white" strokeWidth="2" fill="none"/>
          </>
        )}

        {/* Nose */}
        <path d="M97 100 L103 100 L100 104 Z" fill={eyeColor} />

      </svg>
    </div>
  );
};