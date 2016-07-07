import { bootstrap }    from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import 'rxjs/Rx';
import { AppComponent } from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import {LocalStorageService, LocalStorageSubscriber} from './shared/localStorage.service';

var appPromise = bootstrap(AppComponent,[
    HTTP_PROVIDERS, APP_ROUTER_PROVIDERS, LocalStorageService 
]);

LocalStorageSubscriber(appPromise);