import { DirectionalLight, Light, SpotLight } from 'three';
import { defineComponent, watch } from 'vue';
import type { PropType } from 'vue';
import Object3D from '../core/Object3D';
import type { Vector2PropInterface } from '../core/Object3D';
import { bindProp, setFromProp } from '../tools';

export interface LightSetupInterface {
  light?: Light;
}

export default defineComponent({
  name: 'Light',
  extends: Object3D,
  props: {
    color: { type: String, default: '#ffffff' },
    intensity: { type: Number, default: 1 },
    castShadow: { type: Boolean, default: false },
    shadowMapSize: { type: Object as PropType<Vector2PropInterface>, default: () => ({ x: 512, y: 512 }) },
    shadowCamera: { type: Object, default: () => ({}) },
  },
  setup(): LightSetupInterface {
    return {};
  },
  unmounted() {
    if (this.light instanceof SpotLight || this.light instanceof DirectionalLight) {
      this.removeFromParent(this.light.target);
    }
  },
  methods: {
    initLight(light: Light) {
      this.light = light;

      if ((light as any).shadow) {
        light.castShadow = this.castShadow;

        setFromProp(light.shadow.mapSize, this.shadowMapSize);

        setFromProp(light.shadow.camera, this.shadowCamera);
      }

      ['color', 'intensity', 'castShadow'].forEach((p) => {
        watch(
          () => this[p],
          (value) => {
            if (p === 'color') {
              light.color.set(value);
            } else {
              light[p] = value;
            }
          },
        );
      });

      this.initObject3D(light);

      if (light instanceof SpotLight || light instanceof DirectionalLight) {
        bindProp(this, 'target', light.target, 'position');
        this.addToParent(light.target);
      }
    },
  },
  __hmrId: 'Light',
});
