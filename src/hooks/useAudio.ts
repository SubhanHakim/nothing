import { useEffect, useCallback } from 'react';

// Using a high-tech UI click sound (data URI for performance/no-asset-dependency)
// This is a short, subtle "click/tick" sound often used in sci-fi interfaces

// Placeholder above - I will use a real base64 sound string in the next step or load a file if preferred.
// Actually, let's use a real Oscillator approach for zero-dependency "Tech" sounds to make it fully generative and cool.

export const useGlobalAudio = () => {
    const playClick = useCallback(() => {
        const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
        if (!AudioContext) return;

        const ctx = new AudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        // Filter for that "muffled" high-tech click
        const filter = ctx.createBiquadFilter();
        filter.type = "highpass";
        filter.frequency.value = 800;

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        // Tech click properties
        osc.type = "sine";
        osc.frequency.setValueAtTime(2000, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.05);

        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);

        osc.start();
        osc.stop(ctx.currentTime + 0.05);
    }, []);

    const playHover = useCallback(() => {
        const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
        if (!AudioContext) return;

        const ctx = new AudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.connect(gain);
        gain.connect(ctx.destination);

        // Very subtle high frequency blip for hover
        osc.type = "triangle";
        osc.frequency.setValueAtTime(800, ctx.currentTime);

        gain.gain.setValueAtTime(0.02, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.03);

        osc.start();
        osc.stop(ctx.currentTime + 0.03);
    }, []);

    useEffect(() => {
        const handleClick = () => playClick();
        // const handleHover = (e: MouseEvent) => {
        //     if ((e.target as HTMLElement).tagName === 'A' || (e.target as HTMLElement).tagName === 'BUTTON') {
        //         playHover();
        //     }
        // };

        window.addEventListener('click', handleClick);
        // window.addEventListener('mouseover', handleHover); // Optional: can be annoying if global

        return () => {
            window.removeEventListener('click', handleClick);
            // window.removeEventListener('mouseover', handleHover);
        };
    }, [playClick]);

    return { playClick, playHover };
};
