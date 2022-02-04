import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';
import { CalculatorService } from './calculator.service';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculatorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add up to 5', () => {
    fixture.detectChanges();
    let calculatorService =
      fixture.debugElement.injector.get(CalculatorService);
    calculatorService.total = 0;
    component.toBeCalculated = 5;
    component.onAdd();
    expect(calculatorService.total).toEqual(5);
  });

  it('should subtract down to 5', () => {
    fixture.detectChanges();
    let calculatorService =
      fixture.debugElement.injector.get(CalculatorService);
    calculatorService.total = 10;
    component.toBeCalculated = 5;
    component.onSubtract();
    expect(calculatorService.total).toEqual(5);
  });

  it('should multiply by 2', () => {
    fixture.detectChanges();
    let calculatorService =
      fixture.debugElement.injector.get(CalculatorService);
    calculatorService.total = 10;
    component.toBeCalculated = 2;
    component.onMultiply();
    expect(calculatorService.total).toEqual(20);
  });

  it('should divide by 5', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    let calculatorService =
      fixture.debugElement.injector.get(CalculatorService);
    calculatorService.total = 10;
    component.toBeCalculated = 5;
    component.onDivide();
    expect(calculatorService.total).toEqual(2);
  });

  it('should not allow you to onDivide by 0', () => {
    fixture.detectChanges();
    let calculatorService =
      fixture.debugElement.injector.get(CalculatorService);
    calculatorService.total = 10;
    component.toBeCalculated = 0;
    component.onDivide();
    expect(calculatorService.divideByZero).toBe(true);
  });
});
