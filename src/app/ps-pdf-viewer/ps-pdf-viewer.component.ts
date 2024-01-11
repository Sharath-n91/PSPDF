import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import PSPDFKit from 'pspdfkit';

@Component({
  selector: 'app-ps-pdf-viewer',
  templateUrl: './ps-pdf-viewer.component.html',
  styleUrls: ['./ps-pdf-viewer.component.scss']
})
export class PsPdfViewerComponent implements OnInit {
  pdfURL: any = "";

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<PsPdfViewerComponent>,
  ) { }

  ngOnInit(): void {
    console.log('data', this.data)
    this.loadPDFViewer();
  }

  loadPDFViewer() {
    PSPDFKit.load({
			// Use the assets directory URL as a base URL. PSPDFKit will download its library assets from here.
			baseUrl: location.protocol + "//" + location.host + "/assets/",
			document: "/assets/30861704.pdf",
			container: "#pspdfkit-container",
		}).then(instance => {
			// For the sake of this demo, store the PSPDFKit for Web instance
			// on the global object so that you can open the dev tools and
			// play with the PSPDFKit API.
			(window as any).instance = instance;

      const items = instance.toolbarItems;
      console.log("Toolbar items", items);
		});
  }

  closeDialog() {
    this.dialogRef.close(false);
  }

  // ngAfterViewInit() {
  //   // let defaultConfiguration: any = {};
  //   // this.load(defaultConfiguration);
    
	// 	PSPDFKit.load({
	// 		// Use the assets directory URL as a base URL. PSPDFKit will download its library assets from here.
	// 		baseUrl: location.protocol + "//" + location.host + "/assets/",
	// 		document: "/assets/30861704.pdf",
	// 		container: "#pspdfkit-container",
	// 	}).then(instance => {
	// 		// For the sake of this demo, store the PSPDFKit for Web instance
	// 		// on the global object so that you can open the dev tools and
	// 		// play with the PSPDFKit API.
	// 		(window as any).instance = instance;
  //     const items = instance.toolbarItems;

  //     console.log("Toolbar items", items);
	// 	});
	// }

}
