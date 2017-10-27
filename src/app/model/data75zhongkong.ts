import {BasicData} from "./basic-data";

export class Data75zhongkong extends BasicData{
 /* public guidao : number;
  public shuliao : number;
  public shangxiafang : number;
  public bianfeng : number;
  public boligao : number;
  public bolikuan : number;
  public banzi : number;*/

  constructor(height,width,kai) {
    super();
    this.shuliao = height - 3.5;
    this.bianfeng = height;
    this.guidao = width-this.bianfeng;
    this.boligao = height - 15 + 2.5;
    if(kai===1){
      this.shangxiafang = width;
    }else if(kai===2){
      this.shangxiafang = ((width - this.bianfeng)+7.5)/kai;
    }else if(kai === 3 || kai === 4){
      this.shangxiafang = ((width - this.bianfeng)+15)/kai;
    }else{
      throw new Error("无法支持的开数");
    }
    this.bolikuan = this.shangxiafang -15 + 2.5;
  }
}
