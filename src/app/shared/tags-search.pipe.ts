import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tagsFilter'
})
export class TagsSearchPipe implements PipeTransform {

  transform(publicFeeds: any, searchBar: any): any {
   if (!searchBar) {
     return publicFeeds;
   }

   return publicFeeds.filter((feed) => {
     return feed.tags.includes(searchBar);
   });
  }

}
