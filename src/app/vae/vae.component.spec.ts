import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaeComponent } from './vae.component';

describe('VaeComponent', () => {
  let component: VaeComponent;
  let fixture: ComponentFixture<VaeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
