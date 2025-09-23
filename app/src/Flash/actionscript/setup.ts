// /app/src/Flash/actionscript/setup.ts
import { gsap } from 'gsap';

export type TSetupOptions = {
  speed?: number; // factor to slow down/speed up animation
};

/**
 * setup — animate a bolt dropping into the stage (with configurable speed)
 * @param id - the DOM id of the movieclip element (set in the Flash movie)
 * @param options - setup configuration (speed, etc.)
 */
export default function setup(id: string, options: TSetupOptions = {}) {
  const { speed = 10 } = options;

  const target = document.getElementById(id);

  if (!target) {
    console.warn(`[ActionScript] setup: No element found with id "${id}"`);
    return;
  }

  const stage = target.parentElement;
  if (!stage) {
    console.warn(`[ActionScript] setup: No parent stage found for id "${id}"`);
    return;
  }

  const stageRect = stage.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();

  // center positions (accounting for target size)
  const centerX = (stageRect.width - targetRect.width);

  const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

  // Start above stage, horizontally centered
  gsap.set(target, {
    x: centerX -100 + stageRect.width/2,
    y: -targetRect.height * 1,
    scale: 1,
    transformOrigin: '50% 50%',
    opacity: 1,
  });

  // Drop into center with bounce
  tl.to(target, {
    y: stageRect.height - targetRect.height/1.15,
    duration: 0.8 * speed, // scaled by speed factor
    ease: 'bounce.out',
  });

  return tl;
}
