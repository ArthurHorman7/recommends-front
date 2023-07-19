import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyGlobalComponent } from './body-global.component';

describe('BodyGlobalComponent', () => {
  let component: BodyGlobalComponent;
  let fixture: ComponentFixture<BodyGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyGlobalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
