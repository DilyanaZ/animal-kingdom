import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpEvent,
  HttpErrorResponse
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { ToastrService } from "ngx-toastr";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        const message = err.error.message;
        switch (err.status) {
          case 401:
            this.toastr.error(message, "Warning!",{
                progressAnimation: 'decreasing' 
            });
            break;
          case 400:
            this.toastr.error(
              Object.keys(err.error.errors)
                .map(a => err.error.errors[a])
                .join("\n"),
              "Warning!",{
                progressAnimation: 'decreasing' 
            });
            break;
        }
        return throwError(err);
      })
    );
  }
}
