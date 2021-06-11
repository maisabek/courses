import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http'
export class authInterceptor implements HttpInterceptor{
    intercept(req:HttpRequest<any>,next:HttpHandler){
        const modifiedUrl=req.clone({
            setHeaders:{
                "Authorization": ``
            }
        }
        )
       return next.handle(modifiedUrl)
    }

}