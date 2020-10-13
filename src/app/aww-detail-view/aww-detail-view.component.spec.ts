import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwwDetailViewComponent } from './aww-detail-view.component';

describe('AwwDetailViewComponent', () => {
  let component: AwwDetailViewComponent;
  let fixture: ComponentFixture<AwwDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwwDetailViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwwDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
