
import React, { useState, useRef, useCallback } from 'react';
import { identifyPlant } from '../services/geminiService';
import { AnalysisResult } from '../types';
import PlantDetails from './PlantDetails';

const PlantAnalyzer: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [cameraActive, setCameraActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setCameraActive(true);
        setError(null);
      }
    } catch (err) {
      setError("Unable to access camera. Please check permissions.");
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach(track => track.stop());
      setCameraActive(false);
    }
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      if (context) {
        canvasRef.current.width = videoRef.current.videoWidth;
        canvasRef.current.height = videoRef.current.videoHeight;
        context.drawImage(videoRef.current, 0, 0);
        const dataUrl = canvasRef.current.toDataURL('image/jpeg');
        setImage(dataUrl);
        stopCamera();
        analyzeImage(dataUrl);
      }
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target?.result as string;
        setImage(dataUrl);
        analyzeImage(dataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = async (dataUrl: string) => {
    setLoading(true);
    setResult(null);
    setError(null);
    try {
      const data = await identifyPlant(dataUrl);
      setResult(data);
    } catch (err) {
      setError("Failed to analyze plant. Please try again with a clearer photo.");
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setImage(null);
    setResult(null);
    setError(null);
    setCameraActive(false);
  };

  return (
    <section id="analyzer" className="py-20 px-6 bg-emerald-50/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-emerald-950 mb-4">Plant Analysis Lab</h2>
          <p className="text-emerald-800/70">Upload a clear photo of the leaf, flower, or whole plant for identification.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-emerald-100">
          {!image && !cameraActive ? (
            <div className="p-12 text-center">
              <div className="mb-8 flex justify-center gap-6">
                <button 
                  onClick={startCamera}
                  className="flex flex-col items-center gap-3 p-8 rounded-2xl border-2 border-dashed border-emerald-200 hover:border-emerald-500 hover:bg-emerald-50 transition-all group"
                >
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </div>
                  <span className="font-semibold text-emerald-900">Open Camera</span>
                </button>

                <button 
                  onClick={() => fileInputRef.current?.click()}
                  className="flex flex-col items-center gap-3 p-8 rounded-2xl border-2 border-dashed border-emerald-200 hover:border-emerald-500 hover:bg-emerald-50 transition-all group"
                >
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                  </div>
                  <span className="font-semibold text-emerald-900">Upload Image</span>
                </button>
              </div>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileUpload} 
                accept="image/*" 
                className="hidden" 
              />
              <p className="text-sm text-emerald-600/60">Supported: JPEG, PNG. Max 10MB.</p>
            </div>
          ) : cameraActive ? (
            <div className="relative aspect-video bg-black">
              <video 
                ref={videoRef} 
                autoPlay 
                playsInline 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 inset-x-0 flex justify-center gap-4">
                <button 
                  onClick={capturePhoto}
                  className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-105 transition-transform"
                >
                  <div className="w-12 h-12 rounded-full border-4 border-emerald-600"></div>
                </button>
                <button 
                  onClick={stopCamera}
                  className="bg-red-500 text-white p-4 rounded-full shadow-2xl hover:bg-red-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
              </div>
            </div>
          ) : (
            <div className="relative">
              <img src={image!} alt="Captured Plant" className="w-full max-h-[500px] object-cover" />
              <button 
                onClick={reset}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded-full shadow-lg text-emerald-900 hover:bg-white"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>
          )}
          
          <canvas ref={canvasRef} className="hidden" />
        </div>

        {loading && (
          <div className="mt-12 text-center py-12 bg-white rounded-3xl shadow-xl animate-pulse">
            <div className="inline-block w-12 h-12 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-xl font-medium text-emerald-900">Connecting with the Wisdom of Charaka Samhita...</p>
            <p className="text-sm text-emerald-600">Analyzing molecular visual patterns & traditional texts</p>
          </div>
        )}

        {error && (
          <div className="mt-8 p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl flex items-center gap-3">
             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/></svg>
             {error}
          </div>
        )}

        {result && <PlantDetails result={result} />}
      </div>
    </section>
  );
};

export default PlantAnalyzer;
