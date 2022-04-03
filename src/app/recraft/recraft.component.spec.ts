import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecraftComponent } from './recraft.component';

describe('RecraftComponent', () => {
  let component: RecraftComponent;
  let fixture: ComponentFixture<RecraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecraftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
