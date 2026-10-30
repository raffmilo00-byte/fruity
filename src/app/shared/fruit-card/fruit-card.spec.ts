import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FruitCard } from './fruit-card';

describe('FruitCard', () => {
  let component: FruitCard;
  let fixture: ComponentFixture<FruitCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FruitCard],
    }).compileComponents();

    fixture = TestBed.createComponent(FruitCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
