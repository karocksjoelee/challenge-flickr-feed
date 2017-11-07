import { Component, OnInit, OnDestroy } from '@angular/core';
import { RealTimeService } from './shared/realtime.service';
import { FlickrService } from './shared/flickr.service';
import { FlickrPublicFeed } from './shared/model-interface/flickrPublicFeed.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'Angular App Works !';
  messages = [];
  connection;
  message;
  publicFeeds: any;

  constructor(private realTimeService: RealTimeService, private flickrService: FlickrService) { }

  ngOnInit() {

    this.connection = this.realTimeService.getMessages().subscribe((message) => {
      this.messages.push(message);
    });

    this.flickrService.getPublicFeeds().subscribe((data) => {
      this.publicFeeds = data;
      console.log(this.publicFeeds);
    });

  }

  sendMessage() {
    this.realTimeService.sendMessage(this.message);
    this.message = '';
  }

  ngOnDestroy() {

    this.connection.unsubscribe();

  }
}
