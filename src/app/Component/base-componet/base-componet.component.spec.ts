import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseComponetComponent } from './base-componet.component';

describe('BaseComponetComponent', () => {
  let component: BaseComponetComponent;
  let fixture: ComponentFixture<BaseComponetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseComponetComponent]
    });
    fixture = TestBed.createComponent(BaseComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
