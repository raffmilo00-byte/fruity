import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FruitDetail } from './fruit-detail';

describe('FruitDetail', () => {
  let component: FruitDetail;
  let fixture: ComponentFixture<FruitDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FruitDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(FruitDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
