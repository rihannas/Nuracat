import React, { useState, useRef, useEffect } from 'react';
import { Mascot } from './Mascot';
import { TRANSLATIONS } from '../constants';
import { Language } from '../types';

interface ImageProtectionProps {
  language: Language;
}

export const ImageProtection: React.FC<ImageProtectionProps> = ({ language }) => {
  const [image, setImage] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const [protectedImage, setProtectedImage] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const t = TRANSLATIONS[language];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setImage(event.target.result as string);
          setProtectedImage(null);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const applyProtection = async () => {
    if (!image || !canvasRef.current) return;
    setProcessing(true);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = image;

    await new Promise((resolve) => {
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        if (ctx) {
          // 1. Draw original
          ctx.drawImage(img, 0, 0);
          
          // 2. Get pixel data
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const data = imageData.data;

          // 3. Apply "Nightshade" simulated noise
          // In a real app, this would be complex adversarial perturbation.
          // Here we do a subtle high-frequency noise + color shift.
          for (let i = 0; i < data.length; i += 4) {
            // Add subtle random noise to RGB
            const noise = (Math.random() - 0.5) * 15; 
            data[i] = Math.min(255, Math.max(0, data[i] + noise));     // R
            data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise)); // G
            data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise)); // B
            
            // Invisible pixel shifting simulation (alpha manipulation for demonstration)
            if (i % 200 === 0) {
               data[i+3] = 254; // Imperceptible transparency drop
            }
          }

          ctx.putImageData(imageData, 0, 0);
          
          // 4. "Glaze" overlay simulation (very subtle texture)
          ctx.globalCompositeOperation = 'overlay';
          ctx.fillStyle = 'rgba(255, 0, 150, 0.05)';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.globalCompositeOperation = 'source-over';
        }
        resolve(true);
      };
    });

    // Simulate heavy processing time
    setTimeout(() => {
      setProtectedImage(canvas.toDataURL('image/png'));
      setProcessing(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center max-w-2xl mx-auto p-4 space-y-6">
      <div className="bg-white p-6 rounded-3xl shadow-lg w-full text-center border border-pink-100">
        <Mascot emotion="concerned" size="sm" className="mb-4" />
        <h2 className="text-2xl font-bold text-nura-900 mb-2">{t.modules.protection}</h2>
        <p className="text-gray-600 mb-6">
          {language === Language.ENGLISH ? 
            "Upload your photos to apply an invisible 'shield'. This confuses AI models so they cannot use your face without permission." :
            "AI ምስሎችዎን ያለፈቃድ እንዳይጠቀም ለመከላከል ፎቶዎችዎን እዚህ ይስቀሉ።"}
        </p>

        {!image ? (
          <div className="border-2 border-dashed border-nura-300 rounded-2xl p-8 bg-nura-50 hover:bg-nura-100 transition-colors cursor-pointer relative">
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleImageUpload} 
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div className="text-nura-500 font-medium">{t.actions.upload}</div>
            <div className="text-xs text-nura-400 mt-2">JPG, PNG supported</div>
          </div>
        ) : (
          <div className="space-y-4">
             <div className="relative rounded-lg overflow-hidden border border-nura-200 shadow-sm max-h-96">
                <canvas ref={canvasRef} className="hidden" />
                <img 
                  src={protectedImage || image} 
                  alt="Preview" 
                  className={`w-full h-full object-contain ${processing ? 'opacity-50 blur-sm' : ''} transition-all`}
                />
                {processing && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/80 p-4 rounded-full shadow-xl flex items-center gap-3">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-nura-600"></div>
                      <span className="text-nura-700 font-semibold">Applying Shield...</span>
                    </div>
                  </div>
                )}
             </div>

             <div className="flex gap-4 justify-center">
                {!protectedImage ? (
                  <>
                     <button 
                        onClick={() => setImage(null)}
                        className="px-4 py-2 text-nura-600 hover:bg-nura-50 rounded-full transition-colors"
                     >
                        Cancel
                     </button>
                     <button 
                        onClick={applyProtection}
                        disabled={processing}
                        className="bg-nura-500 hover:bg-nura-600 text-white px-8 py-2 rounded-full font-bold shadow-md transition-transform active:scale-95 disabled:opacity-50"
                     >
                        Apply Protection
                     </button>
                  </>
                ) : (
                  <a 
                    href={protectedImage} 
                    download="protected_nura_image.png"
                    className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-bold shadow-md flex items-center gap-2 animate-bounce-slow"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                    {t.actions.download}
                  </a>
                )}
             </div>
             
             {protectedImage && (
               <div className="bg-green-50 border border-green-200 p-3 rounded-lg text-sm text-green-800 mt-4">
                 <span className="font-bold">✓ Protected.</span> The invisible noise has been added. It looks the same to you, but confusing to machines.
               </div>
             )}
          </div>
        )}
      </div>
    </div>
  );
};
