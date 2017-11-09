import { Component, OnInit } from '@angular/core';
import {CheckData} from "./model/check-data";

@Component({
  selector: 'app-root',
  template: '<check-data-form></check-data-form>',
  styleUrls: ['./app.component.css']
})
// 定义高度和宽度，扇数 根据这些数据计算出各种尺寸

export class AppComponent implements OnInit {
  ngOnInit(): void {
     // this.cal80ao();
  }

  title = 'app';
  height = 0;
  width = 0;
  public kai = 1;
  public kinds = [{id:0,name:"75凹"},{id:1,name:"80凹"}];
  checkData:CheckData = new CheckData(1,2,3,1);
  chicun:Chicun = new Chicun("80凹");

  onSelect():void{
    console.log("选择了");
    this.cal75ao();
  }
  onSelectKind(id):void{
    console.log("选择了"+id);
  }
  cal80ao():void {
    this.chicun.title = '80凹';
    this.chicun.bianfeng = this.kai << 1;
    console.log("80凹");
  }
  cal75ao():void{
    this.chicun.title = '75凹';
    this.chicun.bianfeng = this.kai*3;
    console.log("75凹");
  }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.checkData); }
  submitted = false;

  onSubmit() { this.submitted = true; }

}
export class Chicun{
  constructor(title){
    this.title = title;
  }
  public title:string = '80凹';
  public height = 0;
  public width = 0;
  public bianfeng = 0;
}
