/// <reference path="../model/model.ts" />
/// <reference path="floor_item.ts" />
/// <reference path="metadata.ts" />

module BP3D.Items {
  /** */
  export abstract class OnFloorItem extends FloorItem {
    constructor(model: Model.Model, metadata: Metadata, geometry: THREE.Geometry, material: THREE.MultiMaterial, position: THREE.Vector3, rotation: number, scale: THREE.Vector3) {
      super(model, metadata, geometry, material, position, rotation, scale);
      this.obstructFloorMoves = false;
      this.receiveShadow = true;
    };
  }
}