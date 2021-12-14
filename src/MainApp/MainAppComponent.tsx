import {
  ControlPanel,
  AMVCMap,
  AMVCSpec,
  ASceneNodeController
} from "../anigraph";
import "./MainApp.css"
import { useEffect } from "react";
import { MapSceneController } from "./SceneControllers/MapSceneController";
import { MainAppState } from "./MainAppState";
import { HeatMapMakerModel } from "./Nodes/HeatMapMaker/HeatMapMakerModel";
import { HeatMapMakerView } from "./Nodes/HeatMapMaker/HeatMapMakerView";
import { HeatMapMakerController } from "./Nodes/HeatMapMaker/HeatMapMakerController";
import { StateModel, StateView, StateController } from "./Nodes/HeatMapMaker/StateMVC";

const appState = MainAppState.SetAppState();
enum AppSubComponents {
  ModelScene = 'ModelScene',
  ViewScene = 'ViewScene'
}
// You will also have to add AMVCSpecs for your classes here
const heatMapMakerModelAMVCSpec = new AMVCSpec(HeatMapMakerModel, HeatMapMakerView, ASceneNodeController);
const heatMapMakerViewAMVCSpec = new AMVCSpec(HeatMapMakerModel, HeatMapMakerView, HeatMapMakerController);
const stateModelAMVCSpec = new AMVCSpec(StateModel, StateView, ASceneNodeController);
const stateViewAMVCSpec = new AMVCSpec(StateModel, StateView, StateController);
// Once created add them to the map
const modelAMVCMap = new AMVCMap(); // Shows up in the World Space
modelAMVCMap.addSpec(heatMapMakerModelAMVCSpec);
modelAMVCMap.addSpec(stateModelAMVCSpec);
const viewAMVCMap = new AMVCMap(); // Shows up in Object Space
viewAMVCMap.addSpec(heatMapMakerViewAMVCSpec);
viewAMVCMap.addSpec(stateViewAMVCSpec);
const MainAppMapSceneComponent = appState.AppComponent(
  MapSceneController,
  AppSubComponents.ModelScene,
  modelAMVCMap,
  { usesThreeInteractive: true, sceneNumber: 1 }
);


export function MainAppComponent() {
  useEffect(() => {
    appState.PrepAssets().then(() => {
      appState.initSceneModel();
    });

  }, []);

  return (
    <div>
      <ControlPanel appState={appState} />
      <div className={'box'}>
        <div className={"container-fluid"}>
          <div className={"row"}>
            <h1 className={"App-title"}>Heat Map Maker: United States</h1>
            <p className={"credit-text"}>By: Adam Nnoli</p>
          </div>
          <div className={"row"}>
            <div className={"col-5"}>
              <div className={"HeatMapContainer"}>
                <MainAppMapSceneComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
