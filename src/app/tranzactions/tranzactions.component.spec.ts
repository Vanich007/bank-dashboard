import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranzactionsComponent } from './tranzactions.component';

describe('TranzactionsComponent', () => {
  let component: TranzactionsComponent;
  let fixture: ComponentFixture<TranzactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranzactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranzactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
