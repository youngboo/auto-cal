import { Component, OnInit } from '@angular/core';
import {CheckData} from "./check-data";
import {BasicData} from "./model/basic-data";
import {Data75zhongkong} from "./model/data-75zhongkong";
import {Data80zhongkong} from "./model/data-80zhongkong";
import {Data2cm} from "./model/data-2cm";
import {Data5cm} from "./model/data-5cm";
import {Data75zhongkongTest} from "./model/data-75zhongkong-test";

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
  public kinds = [{id:0,name:"75中空"},{id:1,name:"80中空"},{id:2,name:"2公分"},{id:3,name:"5公分"},{id:4,name:"75中空测试"}];
  //public kinds:Kinds;
  public kaiNum = [1,2,3,4];
  data:BasicData ;
  onSubmit(height,width,kai,kind):void{
    console.log("checkData:"+JSON.stringify(this.checkData));
    console.log("kind:"+kind);
    if(0 == kind){
      this.data = new Data75zhongkong(height,width,kai);
      //fd68console.log(JSON.stringify(this.data.materialsArray));
    }else if(1 == kind){
      this.data = new Data80zhongkong(height,width,kai);
    }else if(2 == kind){
      this.data = new Data2cm(height,width,kai);
    }else if(3 == kind){
      this.data = new Data5cm(height,width,kai);
    }else if(4 == kind){
      this.data = new Data75zhongkongTest(height,width,kai);
    }
    //console.log("表单成功提交"+JSON.stringify(checkData));
    //console.log("data："+height+","+width+","+kai+","+kind);
    console.log("data："+JSON.stringify(this.data));
  }
}

