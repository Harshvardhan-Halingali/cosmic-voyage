# Cosmic Voyage

Role: Act as an elite Creative Developer and UI/UX Designer who builds Awwwards-winning interactive web experiences.

Task: Build a complete, production-ready, frontend-only landing page interface featuring an immersive, scroll-driven 3D space animation. Do not include any backend logic—focus 100% on visual fidelity, smooth animations, and futuristic UI design.

Tech Stack:

HTML5, Tailwind CSS (via CDN), Vanilla JavaScript, HTML5 Canvas (for high-performance 3D starfield/nebula rendering), and GSAP with ScrollTrigger (via CDN) for scroll-bound animations. (Note: Return everything in a single, self-contained index.html file so it runs immediately).

Visual Aesthetic & Theme ("Deep Space Glassmorphism"):

Color Palette: Obsidian void background (#030014), cosmic indigo (#1e1b4b), bioluminescent cyan accents (#00f0ff), supernova violet (#8a2be2), and crisp starlight white (#f8fafc).

Typography: Use 'Space Grotesk' or 'Syne' for bold, wide-tracked display headings with metallic/gradient text masks, paired with 'Inter' for clean body copy and 'JetBrains Mono' for HUD telemetry accents.

UI Components: Translucent frosted-glass cards (backdrop-filter: blur(16px)), ultra-thin glowing 1px borders (rgba(255, 255, 255, 0.12)), and subtle ambient radial glow blobs behind key sections.

Core Interactive & Scroll-Driven Mechanics:

Entry Warp Animation (On Load): When the page first loads, trigger a 2-second "hyperspace warp" effect where stars stretch into light streaks and decelerate into a gentle floating 3D starfield as the Hero UI fades and scales in smoothly.

Scroll-Linked Cosmic Journey: Bind the HTML5 Canvas camera/particle speed and a central geometric cosmic centerpiece (a glowing interactive wireframe planet, black hole accretion disk, or multi-ring gyroscope) directly to the user's window.scrollY position:

0% - 25% Scroll (Hero - "Orbit"): The camera drifts slowly through a glowing nebula field. The central cosmic orb rotates gently in the center.

25% - 60% Scroll (Mid-Section - "Warp Drive"): As the user scrolls down, the stars accelerate toward the screen (Z-axis movement), the nebula shifts color from cyan to deep violet, and the central cosmic structure tilts and expands to frame the glassmorphic feature cards.

60% - 100% Scroll (Footer - "Event Horizon"): The particle field swirls into a hypnotic orbital vortex at the bottom of the page, framing the final call-to-action.

Extra High-End Polish (Must Include):

HUD Telemetry Overlay: Fixed in the four corners of the viewport, add subtle sci-fi HUD elements: a live scroll-depth coordinate counter (e.g., SYS.LOC // 0042.88 LIGHTYEARS), an interactive audio/ambient toggle button visual, and a mini vertical scroll progress bar.

Custom Magnetic Glow Cursor: A dual-ring custom cursor that trails smoothly behind the mouse and illuminates the borders of glass cards when hovering near them.

3D Interactive Tilt Cards: Feature cards arranged in a modern Bento Grid that tilt in 3D space based on mouse coordinates (mousemove perspective transform) with a dynamic spotlight sheen moving across their surface.

Floating Navbar: A sleek, pill-shaped glassmorphic navigation bar fixed at the top center with a glowing CTA button.

Deliverable Requirements: Write clean, modular, well-commented code with zero placeholders or // TODOblocks. Ensure 60fps canvas performance and full responsiveness.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/399c52d9-9933-4ad8-9c87-e1528b248b1e).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
