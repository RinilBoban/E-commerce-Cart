import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allproducts:[],searchkey:string,propname:string): any[] {

    const result:any=[]

    // if nothing is entered in the search box
    if(!allproducts || searchkey=='' || propname==''){
      return allproducts;
    }

    // if we search anything
    // convert all upper keys to lower keys
    allproducts.forEach((product:any)=>{
      if(product[propname].trim().toLowerCase().includes(searchkey.toLowerCase())){
        result.push(product);
      }
    })
    return result;
  }
}
