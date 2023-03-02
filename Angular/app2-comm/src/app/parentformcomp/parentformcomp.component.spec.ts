import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentformcompComponent } from './parentformcomp.component';

describe('ParentformcompComponent', () => {
  let component: ParentformcompComponent;
  let fixture: ComponentFixture<ParentformcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentformcompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentformcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
