import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(
        req: HttpRequest<any>, 
        next: HttpHandler
        ): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'X-RapidAPI-key': '1515df32d9msh3b555de18477225p1f9239jsn7c5e5f87845a',
                'X-RapidAPI-host': 'rawg-video-games-database.p.rapidapi.com',
            },
            setParams: {
                key: '121ab79780a34c30b671561702ae3cfe',
            }
        });
        return next.handle(req);
    }
}