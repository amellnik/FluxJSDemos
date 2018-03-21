import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharRnnComponent } from './char-rnn.component';

describe('CharRnnComponent', () => {
  let component: CharRnnComponent;
  let fixture: ComponentFixture<CharRnnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharRnnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharRnnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
