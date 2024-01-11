import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PsPdfViewerComponent } from '../ps-pdf-viewer/ps-pdf-viewer.component';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @Input() lnMouseEnter: boolean;
  @Input() lnMenuMouseEnter: boolean;

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  openPDFDialog() {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'PDF-embed-component-dialog';
    dialogConfig.backdropClass = 'dialog-backdrop-cstm'
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    dialogConfig.data = {
      isData : true
    }
    let pdfDialogRef = this.dialog.open(PsPdfViewerComponent, dialogConfig)
    pdfDialogRef.afterClosed().subscribe(result => {
      if (result) {
      }
    });
  }

}
