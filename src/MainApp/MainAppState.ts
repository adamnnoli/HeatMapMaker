import {
  SetAppState,
  Base2DAppAppState,
  NodeTransform3D,
  ASceneNodeModel,
  ALoadedModel,
  ASceneNodeController,
  ASceneController,
  ASceneModel,
  AObjectState,
} from "../anigraph";
import * as THREE from "three";
import { GameSceneController } from "./SceneControllers/GameSceneController";
import { DragonNodeModel } from "./Nodes/Dragon/DragonNodeModel";
import { DragonNodeController } from "./Nodes/Dragon/DragonNodeController";
import { HeatMapMakerModel } from "./Nodes/HeatMapMaker/HeatMapMakerModel";

enum SceneControllerNames {
  MapScene = 'MapScene',
  GameScene = 'GameScene'
}

export class MainAppState extends Base2DAppAppState {

  //##################//--Example Game Attributes--\\##################
  //<editor-fold desc="Example Game Attributes">
  /**
   * We will control the dragon in our example game
   * @type {DragonNodeModel}
   */
  dragon!: DragonNodeModel;

  /**
   * A convenient getter for accessing the dragon's scene controller in the game view, which we have customized
   * in Nodes/Dragon/DragonNodeController.ts
   * @returns {ASceneNodeController<ASceneNodeModel> | undefined}
   */
  get dragonController(): DragonNodeController | undefined { return this.getGameNodeControllerForModel(this.dragon) as DragonNodeController | undefined; }

  /**
   * Enemy's detection range
   * @type {number}
   */
  @AObjectState enemyRange!: number;
  /**
   * Enemy's speed
   * @type {number}
   */
  @AObjectState enemySpeed!: number;

  /**
   * We will add the custom parameters to the gui controls with leva...
   * @returns {{enemySpeed: {min: number, max: number, step: number, value: number}}}
   */
  getControlPanelStandardSpec(): {} {
    const self = this;
    return {
      ...super.getControlPanelStandardSpec(),
      enemySpeed: {
        value: self.enemySpeed,
        min: 0,
        max: 50,
        step: 0.1
      }
    }
  };
  //</editor-fold>
  //##################\\--Example Game Attributes--//##################
  static SceneControllerNames = SceneControllerNames;
  static SetAppState() {
    const newappState = new this();
    SetAppState(newappState);
    return newappState;
  }
  async PrepAssets() {
  }
  get selectedModel() {
    return this.selectionModel.singleSelectedModel;
  }
  get selectedController(): ASceneNodeController<ASceneNodeModel> | ASceneController<ASceneNodeModel, ASceneModel<ASceneNodeModel>> {
    return this.getGameNodeControllerForModel(this.selectedModel) ?? this.gameSceneController;
  }
  get gameSceneController(): GameSceneController {
    return this.sceneControllers[SceneControllerNames.GameScene] as GameSceneController;
  }
  get threejsSceneRoot() { return this.gameSceneController.view.threejs; }
  get threejsCamera() { return this.gameSceneController.view.threeCamera; }
  getGameNodeControllerForModel(model?: ASceneNodeModel): ASceneNodeController<ASceneNodeModel> | undefined {
    if (model) {
      return this.gameSceneController.getNodeControllerForModel(model) as ASceneNodeController<ASceneNodeModel>;
    }
  }
  get mapSceneController() {
    return this.sceneControllers[SceneControllerNames.MapScene];
  }

  //##################//--Setting up the scene--\\##################
  //<editor-fold desc="Setting up the scene">
  async initSceneModel() {
    const heatMapMaker = new HeatMapMakerModel();
    this.sceneModel.addNode(heatMapMaker);
  }

  async addModelFromFile(path: string, name: string, transform: NodeTransform3D, materialName: string = 'Toon') {
    const self = this;
    await this.loadModelFromURL(path,
      (obj: THREE.Object3D) => {
        self.modelUploaded(name, obj).then((model: ASceneNodeModel) => {
          let loaded = model as ALoadedModel;
          loaded.sourceTransform = transform ?? new NodeTransform3D();
          loaded.setMaterial(self.materials.getMaterialModel(materialName).CreateMaterial());
        }
        );
      });
  }
}
