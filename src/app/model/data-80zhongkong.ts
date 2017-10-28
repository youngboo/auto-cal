import {BasicData} from "./basic-data";
import {MaterialsModel} from "./materials-model";

/**
 * 80中空门
 */
export class Data80zhongkong extends BasicData{


  constructor(height,width,kai) {
    super();
    //边封宽度
    this.bianfeng = new MaterialsModel("边封");
    this.bianfeng.width = 45;
    //长度，宽度
   /* if(!(kai instanceof Number)){
      throw new Error("请输入正确的开数");
    }
    if(!(height instanceof Number)){
      throw new Error("请输入正确的长度");
    }
    if(!(width instanceof Number)){
      throw new Error("请输入正确的宽度");
    }*/
    height = <number>height;
    width = <number>width;
    kai = <number>kai;
    this.shuliao = new MaterialsModel("竖料");
    this.guidao = new MaterialsModel("轨道");
    this.shangxiafang = new MaterialsModel("上下方");
    this.boli = new MaterialsModel("玻璃");
    this.shangxiafang.unit = "套";
    this.shuliao.height = height - 35;
    this.bianfeng.height = height;
    this.guidao.height = (width-this.bianfeng.width)*kai;
    this.boli.height = height - 150 + 25;
    if(kai == 1){
      this.shangxiafang.height = width;
    }else if(kai == 2){
      this.shangxiafang.height = (width - this.bianfeng.width)+75/kai;
    }else if(kai == 3 || kai == 4){
      console.log("开数:" + kai);
      this.shangxiafang.height = (width - this.bianfeng.width)+150/kai;
    }else{
      throw new Error("无法支持的开数");
    }
    this.boli.width = this.shangxiafang.height -150 + 25;
    //数量
    if(kai <= 4){
      this.shangxiafang.num = kai;
      this.shuliao.num = kai * 2;
      this.boli.num = kai * 2;
      this.guidao.num = 1;
      //TODO 边封的个数，单位
      this.bianfeng.num = kai;
    }else{
      throw new Error("无法支持的开数");
    }

    //把可以遍历的普通属性放到集合里
    this.materialsArray = [];
    this.materialsArray.push(this.bianfeng,this.shangxiafang,this.shuliao,this.guidao);
  }
}
