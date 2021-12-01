import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class ScreenSizeService {
	private isDesktop = new BehaviorSubject(false);

	constructor() {}

	onResize(size) {
		if (size < 568) {
    console.log(`size: `, size);

      this.isDesktop.next(false);}
		else {this.isDesktop.next(true);}
	}

	isDesktopView(): Observable<boolean> {
		return this.isDesktop.asObservable().pipe(distinctUntilChanged());
	}
}
