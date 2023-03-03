import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CricInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let circRequest = request.clone({
      headers: request.headers
        .set(
          'X-RapidAPI-Key',
          'IXEUAUo6gSmshyDa71pLNljSwKHRp1xt8bqjsn089SWjJ1GyuX'
        )
        .set('X-RapidAPI-Host', 'cricbuzz-cricket.p.rapidapi.com'),
    });
    return next.handle(circRequest);
  }
}
