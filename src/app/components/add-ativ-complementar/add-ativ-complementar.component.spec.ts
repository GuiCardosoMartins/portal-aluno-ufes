import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAtivComplementarComponent } from './add-ativ-complementar.component';

describe('AddAtivComplementarComponent', () => {
  let component: AddAtivComplementarComponent;
  let fixture: ComponentFixture<AddAtivComplementarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAtivComplementarComponent]
    });
    fixture = TestBed.createComponent(AddAtivComplementarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
