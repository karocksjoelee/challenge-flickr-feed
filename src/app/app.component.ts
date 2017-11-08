import { Component, OnInit } from '@angular/core';
import { FlickrService } from './shared/flickr.service';
import { FlickrPublicFeed } from './shared/model-interface/flickrPublicFeed.interface';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Angular App Works !';
  messages = [];
  connection;
  message;
  publicFeeds: any;
  feedTags: any;
  searchBar: string;

  constructor(private flickrService: FlickrService) { }

  ngOnInit() {

    this.searchBar = '';

    this.flickrService.getPublicFeeds().subscribe((data) => {
      this.publicFeeds = data;
      this.feedTags = data.items.map((item) => {
        return item.tags;
      });
      this.feedTags = _.uniq(_.flatten(this.feedTags));
    });

  }

  onClickTag(tag) {
    this.searchBar = tag;
  }

  onClearSearchBar() {
    this.searchBar = '';
  }

}
