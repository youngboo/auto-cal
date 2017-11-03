import {MaterialsModel} from "./materials-model";

export class BasicData {
  public width : number;
  public height : number;
  public kai : number;
  public guidao : MaterialsModel;
  public shuliao : MaterialsModel;
  public bianfeng : MaterialsModel;
  public boli : MaterialsModel;
  public shangxiafang : MaterialsModel;
  public banzi : MaterialsModel;
  //普通属性的集合，便于展示，除了玻璃和板子都可以放到这里
  public materialsArray : MaterialsModel[];
  constructor(height,width,kai) {
    this.height = height;
    this.width = width;
    this.kai = kai;
  }

}
