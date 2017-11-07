import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class FlickrService {

  private publicFeedUrl = '/api/flickr/public-feed';
  private serverErrorHandler(error: Response) {

    console.error(`[Flickr Error] ${error}`);
    return Observable.throw({
      status: 'Error',
      message: error || 'Flickr Service Error'
    });

  }

  constructor(private http: Http) {}

  getPublicFeeds() {
    return this.http.get(this.publicFeedUrl)
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.serverErrorHandler);
  }

}
