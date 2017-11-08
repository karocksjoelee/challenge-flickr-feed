import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RealTimeService } from './shared/realtime.service';
import { FlickrService } from './shared/flickr.service';
import { TagsSearchPipe } from './shared/tags-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TagsSearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    RealTimeService,
    FlickrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
