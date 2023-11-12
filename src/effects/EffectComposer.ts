import { defineComponent, inject } from 'vue';
import type { InjectionKey } from 'vue';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import type { Pass } from 'three/examples/jsm/postprocessing/Pass';
import { RendererInjectionKey } from '../core/Renderer';
import type { RendererInterface } from '../core/Renderer';

interface EffectComposerSetupInterface {
  renderer?: RendererInterface;
  composer?: EffectComposer;
}

export interface EffectComposerInterface extends EffectComposerSetupInterface {
  addPass(pass: Pass): void;
  removePass(pass: Pass): void;
}

export const ComposerInjectionKey: InjectionKey<EffectComposerInterface> = Symbol('Composer');

export default defineComponent({
  provide() {
    return {
      [ComposerInjectionKey as symbol]: this,
    };
  },
  setup(): EffectComposerSetupInterface {
    const renderer = inject(RendererInjectionKey);
    return { renderer };
  },
  created() {
    if (!this.renderer) {
      console.error('Renderer not found');
      return;
    }
    const renderer = this.renderer;

    const composer = new EffectComposer(this.renderer.renderer);
    this.composer = composer;
    this.renderer.composer = composer;

    // this.renderer.onInit(() => {
    renderer.addListener('init', () => {
      renderer.renderer.autoClear = false;
      this.resize();
      renderer.addListener('resize', this.resize);
    });
  },
  unmounted() {
    this.renderer?.removeListener('resize', this.resize);
  },
  methods: {
    addPass(pass: Pass) {
      this.composer?.addPass(pass);
    },
    removePass(pass: Pass) {
      this.composer?.removePass(pass);
    },
    resize() {
      if (this.composer && this.renderer) {
        this.composer.setSize(this.renderer.size.width, this.renderer.size.height);
      }
    },
  },
  render() {
    return this.$slots.default ? this.$slots.default() : [];
  },
  __hmrId: 'EffectComposer',
});
