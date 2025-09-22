# Flash 🎬

https://github.com/javascript-pro/flash/tree/staging/app/src/Flash


A modular animation cartridge for [Goldlabel](https://goldlabel.pro), inspired by the spirit of old-skool Flash. Built with **React, GSAP, and TypeScript**.

## 🚀 Quick Start

```bash
git clone https://github.com/javascript-pro/flash.git
cd flash
npm install
npm run dev
```

## ✨ What is this repo?

A standalone, open-source playground for creating **movies** — small animations written in TypeScript (we call them **actionscript** files). Each movie can target one or many **movieclips** (reusable React components) and bring them to life using GSAP.

Think of it as a lightweight, modern take on the Flash timeline:

- 🎥 **Movies** — standalone `.as` files with step-by-step animation logic.  
- 🎭 **Movieclips** — reusable visual React components (characters, logos, debug tools).  
- 🖼️ **Stage** — the render surface where everything plays.  
- 🎚️ **Toolbar** — media-style controls (play, pause, loop).  
- 🪄 **Trace** — a debugging movieclip that pops live info (stage size, framerate, store flags).  
- 📦 **Cartridge** — fully modular, drop into any Goldlabel project.

## 🧩 Features (planned)

- Physics-based behaviours like `floorDropBounce` and `ceilingDropBounce`.  
- Infinite scrolling (`scrollLeftRight`) with wrapping.  
- Configurable movies with props (`speed`, `color`, `loop`).  
- Redux-backed store for flags, playback state, and debug data.  
- Plug-and-play movieclips and quick demo examples.  
