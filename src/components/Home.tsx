import { useEffect } from 'react';
import Lenis from 'lenis';

// Components
import { BackgroundGrid, Filament } from './UI';
import { Layout, LayoutHeader, LayoutFooter } from './Layout';
import { Hero } from './Hero';
import { About } from './About';
import { ImageGallery } from './ImageGallery';
import { Support } from './Support';
import { VoidTerminal } from './VoidTerminal';

export const Home = () => {
    useEffect(() => {
        // Initialize Lenis for smooth scrolling
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <Layout>
            <BackgroundGrid />

            {/* Main Container */}
            <main className="relative z-10 max-w-7xl mx-auto px-6 border-l border-r border-white/5 min-h-screen flex flex-col">

                <LayoutHeader />

                <Filament className="mb-20" />

                <Hero />

                <Filament className="my-20" />

                <About />

                <Filament className="mb-20" />

                <ImageGallery />

                <Filament className="mb-20" />

                <Support />

                <VoidTerminal />

                <Filament className="mb-8" />

                <LayoutFooter />

            </main>
        </Layout>
    );
};
