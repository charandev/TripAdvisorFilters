import { Component, OnInit } from '@angular/core';
import {FlightServiceService} from '../flight-service.service'

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
src:any
dst:any
date:any
message=false
formpage=true
filtereddata:any[]=[]
counter=0
airlinecounter=0
datas: any[] = [];
backup:any[]=[]
selector:any[]=[]
  constructor(private service:FlightServiceService) { }

  ngOnInit() {
  }
  onSubmit()
{
  this.formpage=false
  this.message=true;
  this.service.getFlight(this.src,this.dst,this.date)
  .subscribe(info => {
    this.message=true
    
    
    
    let infodata = info['data'];
   
    
    let flight_data = infodata['onwardflights'];
   
    this.datas=flight_data;
    console.log(this.datas);
    this.filtereddata=this.datas;
 //this.datas.sort((a,b)=>a.fare.grossamount-b.fare.grossamount);
 
// this.datas.forEach(i=>{
//   if(i.onwardflights.length==0||i.onwardflights.length==1)
//   {
//     this.filtereddata.push(i)
//   }
// })

//this.datas.sort((a,b)=>(a.arrtime.getHours()-a.deptime.getHours())-(b.arrtime.getHours()-b.deptime.getHours()))

    
    
    //console.log(flight_data['origin']);
    


  }
    
 



);


}
}

