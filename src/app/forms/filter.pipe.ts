import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',

})

export class FilterPipe implements PipeTransform {
 
 transform(
   items: any[], 
   searchText: string,
   radVal: string
): any[] {
    if(radVal) return items.filter( it =>{ return( it.Priority.toString().toLowerCase().includes(radVal));});
    if(!items) return [];
    if(!searchText) return items;

searchText = searchText.toString().toLowerCase();

return items.filter( it => {

      return (

        it.Name.toString().toLowerCase().includes(searchText) || 
        it.Assign_Date.toString().toLowerCase().includes(searchText) ||
        it.Status.toString().toLowerCase().includes(searchText)
    );
  });
}

}