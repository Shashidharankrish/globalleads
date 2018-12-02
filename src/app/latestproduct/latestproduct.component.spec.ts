import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestproductComponent } from './latestproduct.component';

describe('LatestproductComponent', () => {
  let component: LatestproductComponent;
  let fixture: ComponentFixture<LatestproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
