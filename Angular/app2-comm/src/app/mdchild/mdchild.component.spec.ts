import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdchildComponent } from './mdchild.component';

describe('MdchildComponent', () => {
  let component: MdchildComponent;
  let fixture: ComponentFixture<MdchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdchildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MdchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
