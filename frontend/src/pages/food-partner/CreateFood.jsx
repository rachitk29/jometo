import React, { useEffect, useMemo, useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateFood = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [videoFile, setVideoFile] = useState(null);
    const [videoURL, setVideoURL] = useState('');
    const [fileError, setFileError] = useState('');
    const fileInputRef = useRef(null);

    const navigate = useNavigate();

    useEffect(() => {
        if (!videoFile) {
            setVideoURL('');
            return;
        }
        const url = URL.createObjectURL(videoFile);
        setVideoURL(url);
        return () => URL.revokeObjectURL(url);
    }, [videoFile]);

    const onFileChange = (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) { setVideoFile(null); setFileError(''); return; }
        if (!file.type.startsWith('video/')) { setFileError('Please select a valid video file.'); return; }
        setFileError('');
        setVideoFile(file);
    };

    const onDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const file = e.dataTransfer?.files?.[0];
        if (!file) { return; }
        if (!file.type.startsWith('video/')) { setFileError('Please drop a valid video file.'); return; }
        setFileError('');
        setVideoFile(file);
    };

    const onDragOver = (e) => {
        e.preventDefault();
    };

    const openFileDialog = () => fileInputRef.current?.click();

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append("video", videoFile);

        try {
            const response = await axios.post("http://localhost:3000/api/food", formData, {
                withCredentials: true,
            });
            console.log(response.data);
            navigate("/"); 
        } catch (error) {
            console.error("Error uploading food", error);
        }
    };

    const isDisabled = useMemo(() => !name.trim() || !videoFile, [name, videoFile]);

    return (
        <div 
            className="min-h-[100dvh] flex items-start justify-center p-4 md:p-6 bg-zinc-50"
            // Recreating the radial gradient background from your CSS using inline styles for the complex gradient
            style={{
                backgroundImage: `
                    radial-gradient(1200px 600px at 10% -10%, rgba(228, 228, 231, 1) 0%, transparent 45%),
                    radial-gradient(1200px 600px at 110% 110%, rgba(228, 228, 231, 1) 0%, transparent 45%)
                `
            }}
        >
            <div className="w-full max-w-[720px] bg-white border border-zinc-200 rounded-xl shadow-md p-6 flex flex-col gap-5 transition-all duration-200">
                
                {/* Header */}
                <header className="grid gap-2">
                    <h1 className="text-2xl font-bold text-zinc-900 md:text-3xl">Create Food</h1>
                    <p className="text-sm text-zinc-500">Upload a short video, give it a name, and add a description.</p>
                </header>

                <form className="grid gap-5 md:gap-6" onSubmit={onSubmit}>
                    
                    {/* File Upload Section */}
                    <div className="grid gap-1.5">
                        <label className="text-xs uppercase tracking-wider font-bold text-zinc-500">Food Video</label>
                        <input
                            id="foodVideo"
                            ref={fileInputRef}
                            className="hidden"
                            type="file"
                            accept="video/*"
                            onChange={onFileChange}
                        />

                        <div
                            className="border-2 border-dashed border-zinc-300 bg-zinc-50/50 rounded-lg p-6 cursor-pointer select-none transition-all duration-200 hover:border-indigo-500 hover:bg-zinc-50 active:translate-y-[1px] focus-visible:outline-2 focus-visible:outline-indigo-500 focus-visible:outline-offset-2"
                            role="button"
                            tabIndex={0}
                            onClick={openFileDialog}
                            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openFileDialog(); } }}
                            onDrop={onDrop}
                            onDragOver={onDragOver}
                        >
                            <div className="grid place-items-center text-center gap-3 text-zinc-500">
                                <svg className="text-indigo-600 w-8 h-8" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                    <path d="M10.8 3.2a1 1 0 0 1 .4-.08h1.6a1 1 0 0 1 1 1v1.6h1.6a1 1 0 0 1 1 1v1.6h1.6a1 1 0 0 1 1 1v7.2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6.4a1 1 0 0 1 1-1h1.6V3.2a1 1 0 0 1 1-1h1.6a1 1 0 0 1 .6.2z" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M9 12.75v-1.5c0-.62.67-1 1.2-.68l4.24 2.45c.53.3.53 1.05 0 1.35L10.2 16.82c-.53.31-1.2-.06-1.2-.68v-1.5" fill="currentColor" />
                                </svg>
                                <div className="text-zinc-900">
                                    <strong>Tap to upload</strong> or drag and drop
                                </div>
                                <div className="text-xs">MP4, WebM, MOV • Up to ~100MB</div>
                            </div>
                        </div>

                        {fileError && <p className="text-red-600 text-sm mt-2" role="alert">{fileError}</p>}

                        {videoFile && (
                            <div className="mt-3 flex flex-wrap items-center gap-3 px-3 py-2 rounded-lg w-full bg-zinc-50 border border-zinc-200" aria-live="polite">
                                <svg className="w-4 h-4 text-zinc-700" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                    <path d="M9 12.75v-1.5c0-.62.67-1 1.2-.68l4.24 2.45c.53.3.53 1.05 0 1.35L10.2 16.82c-.53.31-1.2-.06-1.2-.68v-1.5" />
                                </svg>
                                <span className="font-semibold text-zinc-900 truncate max-w-[150px] sm:max-w-xs">{videoFile.name}</span>
                                <span className="text-sm text-zinc-500 ml-auto">{(videoFile.size / 1024 / 1024).toFixed(1)} MB</span>
                                <div className="flex items-center gap-2">
                                    <button 
                                        type="button" 
                                        className="bg-transparent border-transparent text-indigo-600 px-2.5 py-1.5 rounded-full font-bold text-sm tracking-wide cursor-pointer transition-colors hover:bg-indigo-50 focus-visible:outline-2 focus-visible:outline-indigo-500" 
                                        onClick={openFileDialog}
                                    >
                                        Change
                                    </button>
                                    <button 
                                        type="button" 
                                        className="bg-transparent border-transparent text-red-600 px-2.5 py-1.5 rounded-full font-bold text-sm tracking-wide cursor-pointer transition-colors hover:bg-red-50 focus-visible:outline-2 focus-visible:outline-red-500" 
                                        onClick={() => { setVideoFile(null); setFileError(''); }}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Video Preview */}
                    {videoURL && (
                        <div className="w-full rounded-lg overflow-hidden border border-dashed border-zinc-200 bg-zinc-100 grid place-items-center">
                            <video className="w-full h-full bg-black object-contain block" src={videoURL} controls playsInline preload="metadata" />
                        </div>
                    )}

                    {/* Name Input */}
                    <div className="grid gap-1.5">
                        <label htmlFor="foodName" className="text-xs uppercase tracking-wider font-bold text-zinc-500">Name</label>
                        <input
                            id="foodName"
                            type="text"
                            className="appearance-none border border-zinc-300 bg-zinc-50 px-3 py-2.5 rounded-md outline-none text-zinc-900 transition-all focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 placeholder:text-zinc-400"
                            placeholder="e.g., Spicy Paneer Wrap"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    {/* Description Input */}
                    <div className="grid gap-1.5">
                        <label htmlFor="foodDesc" className="text-xs uppercase tracking-wider font-bold text-zinc-500">Description</label>
                        <textarea
                            id="foodDesc"
                            rows={4}
                            className="appearance-none border border-zinc-300 bg-zinc-50 px-3 py-2.5 rounded-md outline-none text-zinc-900 transition-all min-h-[96px] resize-y focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 placeholder:text-zinc-400"
                            placeholder="Write a short description: ingredients, taste, spice level, etc."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                        <button 
                            className="bg-indigo-600 text-white border-none rounded-md px-4 py-3 font-bold tracking-wide cursor-pointer transition-all shadow-sm hover:bg-indigo-700 active:translate-y-[1px] disabled:opacity-60 disabled:cursor-not-allowed"
                            type="submit" 
                            disabled={isDisabled}
                        >
                            Save Food
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateFood;