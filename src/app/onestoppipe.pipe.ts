import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onestoppipe'
})
export class OnestoppipePipe implements PipeTransform {

  transform(datas:any[],term:any): any {
    console.log(term);
    
   if(term===false || term === undefined) return datas
   return datas.filter(function(data)
  {
     if(data.onwardflights.length===1)
     return data


  }
  
  )

  }

}
