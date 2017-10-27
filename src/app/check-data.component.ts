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
  ngOnInit(): void {
  }
  public kinds = [{id:0,name:"75中空"},{id:1,name:"80中空"},{id:2,name:"2公分"},{id:3,name:"5公分"}];

  checkData:CheckData = null;
  data:BasicData ;

  onSubmit(height,width,kai,kind):void{
    if(kind == 0){
      this.data = new Data75zhongkong(height,width,kai);
      console.log(JSON.stringify(this.data));
    }
    //console.log("表单成功提交"+JSON.stringify(checkData));
    //console.log("data："+height+","+width+","+kai+","+kind);
  }
}

