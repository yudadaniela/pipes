import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnCommonPageComponent } from './un-common-page.component';

describe('UnCommonPageComponent', () => {
  let component: UnCommonPageComponent;
  let fixture: ComponentFixture<UnCommonPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnCommonPageComponent]
    });
    fixture = TestBed.createComponent(UnCommonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
