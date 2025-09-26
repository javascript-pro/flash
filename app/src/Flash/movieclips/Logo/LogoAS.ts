// /app/src/Flash/movieclips/Logo/LogoAS.ts
import { gsap } from "gsap";

export default class LogoAS {
  private id: string;
  private resizeHandler: (() => void) | null = null;

  constructor(id: string) {
    this.id = id;
  }

  init() {
    console.log(`[LogoAS] init called on id="${this.id}"`);
    this.setup();

    // Bind resize handler
    this.resizeHandler = () => this.centerLogo();
    window.addEventListener("resize", this.resizeHandler);
  }

  setup(options: any = {}) {
    const logoEl = document.getElementById(this.id);
    if (!logoEl) {
      console.warn(`[LogoAS] setup: element not found for id="${this.id}"`);
      return;
    }

    // Reset transforms
    gsap.set(logoEl, { clearProps: "all" });

    const { offsetX, offsetY, scale } = this.calculateCenter(logoEl);

    gsap.fromTo(
      logoEl,
      {
        autoAlpha: 0,
        x: offsetX,
        y: offsetY,
        scale,
        transformOrigin: "center center",
      },
      {
        autoAlpha: 1,
        x: offsetX,
        y: offsetY,
        scale,
        transformOrigin: "center center",
        duration: 1,
        ease: "power3.out",
      }
    );

    console.log(
      `[LogoAS] setup: centered logo id="${this.id}" at (${offsetX}, ${offsetY}), scale=${scale.toFixed(
        2
      )}`
    );
  }

  private calculateCenter(el: HTMLElement) {
    // Reset transform to measure natural size
    gsap.set(el, { clearProps: "transform" });
    const rect = el.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // Fit inside viewport
    const scaleX = vw / rect.width;
    const scaleY = vh / rect.height;
    const scale = Math.min(scaleX, scaleY, 1);

    // Desired center
    const centerX = vw / 2;
    const centerY = vh / 2;

    // Current center
    const logoCenterX = rect.left + rect.width / 2;
    const logoCenterY = rect.top + rect.height / 2;

    // Offsets
    const offsetX = centerX - logoCenterX;
    const offsetY = centerY - logoCenterY;

    return { offsetX, offsetY, scale };
  }

  private centerLogo() {
    const logoEl = document.getElementById(this.id);
    if (!logoEl) return;

    const { offsetX, offsetY, scale } = this.calculateCenter(logoEl);

    gsap.to(logoEl, {
      x: offsetX,
      y: offsetY,
      scale,
      transformOrigin: "center center",
      duration: 0.5,
      ease: "power2.out",
    });

    console.log(
      `[LogoAS] resize: recentered logo id="${this.id}" at (${offsetX}, ${offsetY}), scale=${scale.toFixed(
        2
      )}`
    );
  }

  destroy() {
    if (this.resizeHandler) {
      window.removeEventListener("resize", this.resizeHandler);
      this.resizeHandler = null;
    }
  }
}
