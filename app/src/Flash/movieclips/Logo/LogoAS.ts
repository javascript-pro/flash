// /Users/goldlabel/GitHub/flash/app/src/Flash/movieclips/Logo/LogoAS.ts

export default class LogoAS {
  private target: HTMLElement | null;

  constructor(target?: HTMLElement | null) {
    this.target = target || null;
  }

  init() {
    if (this.target) {
      console.log('[LogoAS] init called on', this.target);
    } else {
      console.log('[LogoAS] init called with no target');
    }
  }

  setup(id: string, options: any) {
    setTimeout(() => {
      console.log('[LogoAS] setup')
    }, 1000)
    
  }
}
