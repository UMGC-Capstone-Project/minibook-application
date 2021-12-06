import { IonicStorageModule } from '@ionic/storage-angular';
import { authReducer } from './pages/auth/reducers/module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { metaReducers } from './reducers/index';


@NgModule({
	declarations: [ AppComponent ],
	entryComponents: [],
	imports: [
		IonicStorageModule.forRoot(),
		HttpClientModule,
		BrowserModule,
		IonicModule.forRoot(),
		AppRoutingModule,
		ComponentsModule,
		StoreModule.forRoot({
			auth: authReducer
		}),
		StoreDevtoolsModule.instrument({
			logOnly: environment.production
		}),
		// EffectsModule.forRoot([])
	],
	providers: [ { provide: RouteReuseStrategy, useClass: IonicRouteStrategy } ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
