import { Component, Input, OnInit } from '@angular/core';
import { DialogService } from '../../dialogs/service/dialog.service';
import { LogService } from '../../services/log.service';

@Component({
  selector: 'ew-header',
  templateUrl: './ew-header.component.html',
  styleUrls: ['./ew-header.component.scss']
})
export class EwHeaderComponent implements OnInit {
  @Input() title: string;
  @Input() showError: boolean;
  @Input() showDebug: boolean;

  constructor(
    private dialogService: DialogService,
    private logService: LogService
  ) { }

  ngOnInit() {
  }

  public showInfoDialog(): void {
    this.dialogService.openAboutThisDialog().then();
  }

  public showDebugDialog(): void {
    const debug = this.logService.getDebugOutput();
    const out = this.logService.hasDebugOutput() ? debug : 'No debug output yet.';
    this.dialogService.openInfoDialog('Debug output', out).then();
  }

  public showErrorDialog(): void {
    const out = this.logService.hasErrorOutput() ? this.logService.getErrorOutput() : 'No error output yet.';
    this.dialogService.openInfoDialog('Error output', out).then();
  }

}
