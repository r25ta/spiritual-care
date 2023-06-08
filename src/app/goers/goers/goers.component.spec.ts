import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoersComponent } from './goers.component';

describe('GoersComponent', () => {
  let component: GoersComponent;
  let fixture: ComponentFixture<GoersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoersComponent]
    });
    fixture = TestBed.createComponent(GoersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
