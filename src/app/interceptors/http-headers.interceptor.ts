import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpErrorsInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(
        req: HttpRequest<any>, 
        next: HttpHandler
        ): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'X-RapidAPI-host': 'rawg-video-games-database.p.rapidapi.com',
                'X-RapidAPI-key': '2f668ec69bmshfed0c48e55d346dp1b96dcjsn6bc85aaa850a',
            },
            setParams: {
                key: 'ff3039c7307d41c4bd60859e8d75803f'
            }
        });
        return next.handle(req);
    }
}