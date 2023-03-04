import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
     fixture = TestBed.createComponent(AppComponent);

    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should create the app', () => {
    const mockData = { id: 1, name: 'Murali' };
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    const req = httpMock.expectOne(
      'https://jsonplaceholder.typicode.com/users'
    );
    expect(req.request.method).toEqual('GET')
    req.flush(mockData)
    expect(component.users).toEqual(mockData)
  });

  it('should display P',()=>{
    const updatBtn = fixture.debugElement.nativeElement.querySelector('#update');
    updatBtn.click()
    fixture.detectChanges();
    const paras = fixture.debugElement.nativeElement.querySelectorAll('p')
    expect(paras.length).toEqual(10)
  })
});
