import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsPdfViewerComponent } from './ps-pdf-viewer.component';

describe('PsPdfViewerComponent', () => {
  let component: PsPdfViewerComponent;
  let fixture: ComponentFixture<PsPdfViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsPdfViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsPdfViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
