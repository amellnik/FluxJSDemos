import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoencoderComponent } from './autoencoder.component';

describe('AutoencoderComponent', () => {
  let component: AutoencoderComponent;
  let fixture: ComponentFixture<AutoencoderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoencoderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoencoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
