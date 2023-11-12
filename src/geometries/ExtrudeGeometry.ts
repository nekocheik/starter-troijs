import type { PropType } from 'vue';
import { geometryComponent } from './Geometry';
import { ExtrudeGeometry, Shape } from 'three';
import type { ExtrudeGeometryOptions } from 'three';

export const props = {
  shapes: { type: [Object, Array] as PropType<Shape | Shape[]> },
  options: { type: Object as PropType<ExtrudeGeometryOptions> },
} as const;

export function createGeometry(comp: any): ExtrudeGeometry {
  return new ExtrudeGeometry(comp.shapes, comp.options);
}

export default geometryComponent('ExtrudeGeometry', props, createGeometry);
