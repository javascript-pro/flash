// /app/src/Flash/movieclips/Logo/LogoAS.ts
import { gsap } from "gsap";

export default class LogoAS {
  private id: string;
  private resizeHandler: (() => void) | null = null;
  private clickHandlers: Array<{ el: Element; fn: EventListener }> = [];
  private hoverHandlers: Array<{ el: Element; fn: EventListener; type: string }> = [];

  constructor(id: string) {
    this.id = id;
  }

  init() {
    this.setup();
    this.resizeHandler = () => this.centerLogo();
    window.addEventListener("resize", this.resizeHandler);
  }

  setup() {
    const logoEl = document.getElementById(this.id);
    if (!logoEl) return;

    // Reset transforms
    gsap.set(logoEl, { clearProps: "all" });

    // Ensure all child elements use local transform origins
    const clips = logoEl.querySelectorAll("g, path, polygon, rect, circle, text");
    clips.forEach((el) => {
      (el as HTMLElement).style.transformBox = "fill-box";
      (el as HTMLElement).style.transformOrigin = "50% 50%";
    });

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

    this.attachInteractionHandlers(logoEl);
  }

  private calculateCenter(el: HTMLElement) {
    gsap.set(el, { clearProps: "transform" });
    const rect = el.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const scaleX = (vw * 0.9) / rect.width;
    const scaleY = (vh * 0.9) / rect.height;
    const scale = Math.min(scaleX, scaleY, 1);

    const centerX = vw / 2;
    const centerY = vh / 2;

    const logoCenterX = rect.left + rect.width / 2;
    const logoCenterY = rect.top + rect.height / 2;

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
  }

  private attachInteractionHandlers(container: HTMLElement) {
    this.detachInteractionHandlers();

    const clips = container.querySelectorAll("g, path, polygon, rect, circle, text");
    clips.forEach((el) => {
      // Click -> shake
      const clickFn = () => this.shake(el);
      el.addEventListener("click", clickFn);
      this.clickHandlers.push({ el, fn: clickFn });

      // Hover -> scale up/down
      const hoverIn = () => {
        gsap.killTweensOf(el); // cancel any active animation
        gsap.to(el, {
          scale: 1.1,
          transformOrigin: "50% 50%",
          duration: 0.2,
          ease: "power2.out",
        });
      };
      const hoverOut = () => {
        gsap.killTweensOf(el);
        gsap.to(el, {
          scale: 1,
          transformOrigin: "50% 50%",
          duration: 0.2,
          ease: "power2.inOut",
        });
      };

      el.addEventListener("mouseenter", hoverIn);
      el.addEventListener("mouseleave", hoverOut);

      this.hoverHandlers.push({ el, fn: hoverIn, type: "mouseenter" });
      this.hoverHandlers.push({ el, fn: hoverOut, type: "mouseleave" });
    });
  }

  private detachInteractionHandlers() {
    this.clickHandlers.forEach(({ el, fn }) => {
      el.removeEventListener("click", fn);
    });
    this.clickHandlers = [];

    this.hoverHandlers.forEach(({ el, fn, type }) => {
      el.removeEventListener(type, fn);
    });
    this.hoverHandlers = [];
  }

  private shake(el: Element) {
    gsap.killTweensOf(el); // cancel hover scale if running
    gsap.fromTo(
      el,
      { x: -2, rotation: -1, transformOrigin: "50% 50%" },
      {
        x: 2,
        rotation: 1,
        duration: 0.1,
        ease: "power1.inOut",
        yoyo: true,
        repeat: 5,
        onComplete: () => {
          gsap.set(el, { x: 0, rotation: 0, scale: 1 });
        },
      }
    );
  }

  destroy() {
    if (this.resizeHandler) {
      window.removeEventListener("resize", this.resizeHandler);
      this.resizeHandler = null;
    }
    this.detachInteractionHandlers();
  }
}
