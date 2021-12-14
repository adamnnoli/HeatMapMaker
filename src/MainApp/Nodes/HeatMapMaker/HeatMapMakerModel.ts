import {
  ASceneNodeModel,
  ASerializable,
  GetAppState,
  Vec3,
  VertexArray3D,
} from "../../../anigraph";
import { isStateName, StateInfo } from "./StateInfo";
import { StateModel } from './StateMVC';

@ASerializable("HeatMapMakerModel")
export class HeatMapMakerModel extends ASceneNodeModel {
  public stateModels: StateModel[];
  public biggerIsBetter: boolean;
  public dataSet: { [key: string]: number };
  constructor() {
    super();
    const appState = GetAppState();

    this.stateModels = [];
    this.biggerIsBetter = true;
    this.dataSet = appState.dataSet

    for (const stateName in StateInfo) {
      if (isStateName(stateName)) {
        const state = new StateModel(stateName);
        appState.sceneModel.addNode(state);
        this.stateModels.push(state)
      }
    }
    const topLeft = new Vec3(-1, 1, 0);
    const topRight = new Vec3(1, 1, 0);
    const bottomLeft = new Vec3(-1, -1, 0);
    const bottomRight = new Vec3(1, -1, 0);
    this.verts = new VertexArray3D();
    this.verts.addVertex(topLeft);
    this.verts.addVertex(topRight);
    this.verts.addVertex(bottomRight);
    this.verts.addVertex(bottomLeft);

    this.subscribe(appState.addStateKeyListener('uploadingData', () => {
      if (!appState.uploadingData) {
        this.dataSet = this.filterNonStates(appState.dataSet);
        this.update();
      }
    }))
    this.subscribe(appState.addStateKeyListener('biggerIsBetter', () => {
      this.biggerIsBetter = appState.biggerIsBetter;
      this.update();
    }))
  }
  getColor(stateVal: number | undefined, averageVal: number) {
    if (stateVal === undefined) {
      return '#808080'
    }
    let percentDiff = 1 - Math.abs((stateVal - averageVal) / averageVal);
    if (this.biggerIsBetter) {
      if (stateVal > averageVal) {
        let greenLevel = Math.round(percentDiff * 255);
        greenLevel = greenLevel > 255 ? 255 : greenLevel
        let greenLevelHex = greenLevel.toString(16).slice(0, 2);
        greenLevelHex = greenLevelHex.length > 1 ? greenLevelHex : `0${greenLevelHex}`;
        return `#${greenLevelHex}ff${greenLevelHex}`
      } else {
        let redLevel = Math.round(percentDiff * 255);
        redLevel = redLevel > 255 ? 255 : redLevel;
        let redLevelHex = redLevel.toString(16).slice(0, 2);
        redLevelHex = redLevelHex.length > 1 ? redLevelHex : `0${redLevelHex}`;
        return `#ff${redLevelHex}${redLevelHex}`
      }
    } else {
      if (stateVal < averageVal) {
        let greenLevel = Math.round(percentDiff * 255);
        greenLevel = greenLevel > 255 ? 255 : greenLevel;
        let greenLevelHex = greenLevel.toString(16).slice(0, 2);
        greenLevelHex = greenLevelHex.length > 1 ? greenLevelHex : `0${greenLevelHex}`;
        return `#${greenLevelHex}ff${greenLevelHex}`
      } else {
        let redLevel = Math.round(percentDiff * 255);
        redLevel = redLevel > 255 ? 255 : redLevel;
        let redLevelHex = redLevel.toString(16).slice(0, 2);
        redLevelHex = redLevelHex.length > 1 ? redLevelHex : `0${redLevelHex}`;
        return `#ff${redLevelHex}${redLevelHex}`
      }
    }
  }
  filterNonStates(dataSet: { [key: string]: number }) {
    const result: { [key: string]: number } = {};
    for (const name in dataSet) {
      if (isStateName(name)) {
        result[name] = dataSet[name];
      }
    }
    return result
  }
  update() {
    let sum = 0;
    for (const name in this.dataSet) {
      sum += this.dataSet[name];
    }
    const averageVal = sum / Object.keys(this.dataSet).length;
    for (const stateName in StateInfo) {
      if (isStateName(stateName)) {
        StateInfo[stateName].color = this.getColor(this.dataSet[stateName], averageVal)
      }
    }
    for (let i = 0; i < this.stateModels.length; i++) {
      const stateModel: StateModel = this.stateModels[i];
      stateModel.update();
    }
  }
  getModelGUIControlSpec(): { [p: string]: any } {
    const specs = {
      biggerIsBetter: {
        value: this.biggerIsBetter,
        onChange: (v: boolean) => {
          this.biggerIsBetter = v;
          this.update();
        }
      }
    }
    return { ...super.getModelGUIControlSpec(), ...specs };
  }

}
