import { ASceneNodeView, APolygonElement } from "../../../anigraph";
import { HeatMapMakerModel } from "./HeatMapMakerModel";
import { HeatMapMakerController } from "./HeatMapMakerController";

export class HeatMapMakerView extends ASceneNodeView<HeatMapMakerModel>{
  controller!: HeatMapMakerController;
    element!: APolygonElement;
  // public extraElement!:ExampleRenderElement;
  onGeometryUpdate() {
    super.onGeometryUpdate();
  }
  initGraphics() {
    super.initGraphics();
  }
}
