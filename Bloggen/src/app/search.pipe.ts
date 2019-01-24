import { Pipe, PipeTransform } from '@angular/core';
import { post } from 'selenium-webdriver/http';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchText?: string): any {
    console.log("var", value)
    console.log("text", searchText)
    if(!value) return [];
    if(!searchText) return value;

    searchText = searchText.toLocaleLowerCase();
    
    return value.filter( post => {
      let title: string = post.title;
      return title.toLocaleLowerCase().includes(searchText);
    });
  }
}
