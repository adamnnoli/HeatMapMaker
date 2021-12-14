import { isStateName, StateInfo, StateName } from "./StateInfo";
import { ASceneNodeView } from "../../../anigraph";
import * as THREE from 'three';
import {
  AObjectState,
  ASceneNodeModel,
  ASerializable,
  ASceneNodeController,
} from "../../../anigraph";

export class StateController extends ASceneNodeController<StateModel>{
  initInteractions() {
    super.initInteractions();
  }
}

@ASerializable("StateModel")
export class StateModel extends ASceneNodeModel {
  public stateName: string;
  public x: number;
  public y: number;
  public width: number;
  public height: number;
  public rotation: number;
  @AObjectState public stateColor: string;
  constructor(stateName: StateName) {
    super();
    const stateDetails = StateInfo[stateName];
    this.stateColor = stateDetails.color || '#808080';
    this.stateName = stateName;
    this.x = stateDetails.x || 1111;
    this.y = stateDetails.y || 1111;
    this.rotation = stateDetails.rotation || 0;
    this.width = stateDetails.width * stateDetails.scale;
    this.height = stateDetails.height * stateDetails.scale;
    this.selectable = false;
  }
  update() {
    if (isStateName(this.stateName)) {
      this.stateColor = StateInfo[this.stateName].color || '#808080';
    }
  }
  getModelGUIControlSpec(): { [p: string]: any } {
    const specs = {
    }
    return { ...super.getModelGUIControlSpec(), ...specs };
  }

}
export class StateView extends ASceneNodeView<StateModel> {
  controller!: StateController;
  material!: THREE.MeshLambertMaterial;
  onGeometryUpdate() {
    super.onGeometryUpdate();
  }
  initGraphics() {
    super.initGraphics();
    const loader = new THREE.TextureLoader();
    this.material = new THREE.MeshLambertMaterial({
      map: loader.load(`./images/StateImages/${this.model.stateName}.png`),
      transparent: true,
    });
    this.material.color.set(this.model.stateColor)
    const geometry = new THREE.PlaneGeometry(this.model.width, this.model.height);
    geometry.translate(this.model.x, this.model.y, 0);
    geometry.rotateZ(this.model.rotation);
    const mesh = new THREE.Mesh(geometry, this.material);
    this.threejs.add(mesh);
    this.subscribe(this.model.addStateKeyListener('stateColor', () => {
      this.material.color.set(this.model.stateColor)
    }));
  }
}
