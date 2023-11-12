import { defineComponent, watch } from 'vue';
import type { ComponentPropsOptions, ComponentPublicInstance, InjectionKey } from 'vue';
import { BufferGeometry, Material, Mesh as TMesh } from 'three';
import Object3D from '../core/Object3D';
import type { Object3DSetupInterface } from '../core/Object3D';
import { bindProp } from '../tools';

export interface MeshSetupInterface extends Object3DSetupInterface {
  mesh?: TMesh;
  geometry?: BufferGeometry;
  material?: Material;
  loading?: boolean;
}

export interface MeshInterface extends MeshSetupInterface {
  setGeometry(g: BufferGeometry): void;
  setMaterial(m: Material): void;
}

export interface MeshPublicInterface extends ComponentPublicInstance, MeshInterface {}

export const MeshInjectionKey: InjectionKey<MeshPublicInterface> = Symbol('Mesh');

const Mesh = defineComponent({
  name: 'Mesh',
  extends: Object3D,
  provide() {
    return {
      [MeshInjectionKey as symbol]: this,
    };
  },
  props: {
    castShadow: Boolean,
    receiveShadow: Boolean,
  },
  setup(): MeshSetupInterface {
    return {};
  },
  mounted() {
    // TODO : proper ?
    if (!this.mesh && !this.loading) this.initMesh();
  },
  unmounted() {
    // for predefined mesh (geometry/material are not unmounted)
    if (this.geometry) this.geometry.dispose();
    if (this.material) this.material.dispose();
  },
  methods: {
    initMesh() {
      const mesh = new TMesh(this.geometry, this.material);

      bindProp(this, 'castShadow', mesh);
      bindProp(this, 'receiveShadow', mesh);

      this.mesh = mesh;
      this.initObject3D(mesh);
    },
    createGeometry() {},
    addGeometryWatchers(props: Readonly<ComponentPropsOptions>) {
      Object.keys(props).forEach((prop) => {
        watch(
          () => this[prop],
          () => {
            this.refreshGeometry();
          },
        );
      });
    },
    setGeometry(geometry: BufferGeometry) {
      this.geometry = geometry;
      if (this.mesh) this.mesh.geometry = geometry;
    },
    setMaterial(material: Material) {
      this.material = material;
      if (this.mesh) this.mesh.material = material;
    },
    refreshGeometry() {
      const oldGeo = this.geometry;
      this.createGeometry();
      if (this.mesh && this.geometry) this.mesh.geometry = this.geometry;
      oldGeo?.dispose();
    },
  },
  __hmrId: 'Mesh',
});

export default Mesh;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function meshComponent<P extends Readonly<ComponentPropsOptions>>(name: string, props: P, createGeometry: { (c: any): BufferGeometry }) {
  return defineComponent({
    name,
    extends: Mesh,
    props,
    created() {
      this.createGeometry();
      this.addGeometryWatchers(props);
    },
    methods: {
      createGeometry() {
        this.geometry = createGeometry(this);
      },
    },
  });
}
