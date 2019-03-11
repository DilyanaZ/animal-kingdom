import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService, private router: Router) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser && currentUser.token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.token}`
        }
      });
    }

    return next.handle(req).pipe(
      tap((res: any) => {
        if (res instanceof HttpResponse && res.body.token) {
          this.saveToken(res.body);
          this.toastr.success(res.body.message, "Success", {
            timeOut: 3000
          });
        }
        if (
          res instanceof HttpResponse &&
          res.body.success &&
          res.url.endsWith("signup")
        ) {
          this.toastr.success(res.body.message, "Success!", {
            timeOut: 3000,
            closeButton: true
          });
          this.router.navigate(["/login"]);
        }
        if (
          res instanceof HttpResponse &&
          res.body.success &&
          res.url.endsWith("login")
        ) {
          this.toastr.success(res.body.message, "Success!", {
            timeOut: 3000
          });
          this.router.navigate(["/home"]);
        }

        if(res instanceof HttpResponse && res.body.siccess && res.url.endsWith('/create')){
          this.toastr.success(res.body.message, "Success!", {
            timeOut: 3000
          });
          this.router.navigate(["/mine"]);
        }
      })
    );
  }

  private saveToken(data) {
    localStorage.setItem(
      "currentUser",
      JSON.stringify({
        username: data.user.name,
        token: data.token
      })
    );
  }
}
