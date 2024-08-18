import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicinfoComponent } from './basicinfo.component';

describe('BasicinfoComponent', () => {
  let component: BasicinfoComponent;
  let fixture: ComponentFixture<BasicinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicinfoComponent]
    });
    fixture = TestBed.createComponent(BasicinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
