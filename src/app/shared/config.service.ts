import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  private localServerUrl = 'http://localhost:6500';

  constructor() { }

  getLocalServer() {
    return this.localServerUrl;
  }


}
