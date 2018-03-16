import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmnistMlpComponent } from './fmnist-mlp.component';

describe('FmnistMlpComponent', () => {
  let component: FmnistMlpComponent;
  let fixture: ComponentFixture<FmnistMlpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmnistMlpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmnistMlpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
