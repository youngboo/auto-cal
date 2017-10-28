import { Component, OnInit } from '@angular/core';
import {CheckData} from "./check-data";
import {BasicData} from "./model/basic-data";
import {Data75zhongkong} from "./model/data75zhongkong";

@Component({
  selector: 'check-data-form',
  templateUrl: './check-data.component.html',
  styleUrls: ['./app.component.css']
})
// 定义高度和宽度，扇数 根据这些数据计算出各种尺寸

export class CheckDataComponent implements OnInit {
  checkData:CheckData;
  ngOnInit(): void {
    this.checkData = new CheckData(1900,900,2,0);
  }
  public kinds = [{id:0,name:"75中空"},{id:1,name:"80中空"},{id:2,name:"2公分"},{id:3,name:"5公分"}];
  //public kinds:Kinds;
  public kaiNum = [1,2,3,4];
  data:BasicData ;
  onSubmit(height,width,kai,kind):void{
    console.log("checkData:"+JSON.stringify(this.checkData));
    if(kind == 0){
      this.data = new Data75zhongkong(height,width,kai);
      //fd68console.log(JSON.stringify(this.data.materialsArray));
    }
    //console.log("表单成功提交"+JSON.stringify(checkData));
    //console.log("data："+height+","+width+","+kai+","+kind);
  }
}

