import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

// the injectable will intercept the incoming request then check if the token exists and then add 
// it should be injected in my modules 
@Injectable()
export class authenticationInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('jwtToken');

        if (token) { // if token exists
            request = request.clone({
                setHeaders: { Authorization: `Bearer ${token}` }
            })
        }

        return next.handle(request);
    }
}

//Interceptor will get the token to navigate through the application
