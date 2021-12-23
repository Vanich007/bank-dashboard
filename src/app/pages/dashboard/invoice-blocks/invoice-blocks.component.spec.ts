import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceBlocksComponent } from './invoice-blocks.component';

describe('InvoiceBlocksComponent', () => {
  let component: InvoiceBlocksComponent;
  let fixture: ComponentFixture<InvoiceBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceBlocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
