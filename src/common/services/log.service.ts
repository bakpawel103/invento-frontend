import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class LogService {

  shouldLog: boolean = environment.debugLog;
  public debugOutput: string = '';
  public errorOutput: string = '';

  constructor() {
  }

  public outputDebug(message: string, title: string = ''): void {
    if (title.length > 0) {
      this.debugOutput += '<h4>' + title + '</h4><p>' + message + '</p>';
      console.log('[' + title + '] ' + message);
    } else {
      console.log(message);
      this.debugOutput += '<p>' + message + '</p>';
    }
  }

  public getDebugOutput(): string {
    return this.debugOutput;
  }

  public getErrorOutput(): string {
    return this.errorOutput;
  }

  public hasDebugOutput(): boolean {
    return this.debugOutput.length > 0;
  }

  public hasErrorOutput(): boolean {
    return this.errorOutput.length > 0;
  }
}
