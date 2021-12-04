import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.page.html',
	styleUrls: [ './dashboard.page.scss' ]
})
export class DashboardPage implements OnInit {
	@ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

	url: string;
	itemListData = [];
	page_number = 1;
	page_limit = 8;

	constructor() {

		for (let index = 0; index < 35; index++) {
			const element = this.itemListData[index];
			const newItem = {
				"id":index,
				"name":"Lilla Nitzsche",
				"jobtype":"Human Intranet Liaison",
				"email":"Edwardo_Homenick@gmail.com",
				"address":"11360 Bahringer Squares",
				"imageUrl":"https://s3.amazonaws.com/uifaces/faces/twitter/aleclarsoniv/128.jpg"
			   }
			   this.itemListData.push(newItem)
		}


	}
	ngOnInit(): void {
	}

	doInfinite(event){

	}
  
	// loadData(event) {
	//   setTimeout(() => {
	// 	console.log('Done');
	// 	event.target.complete();
  
	// 	// App logic to determine if all data is loaded
	// 	// and disable the infinite scroll
	// 	if (this.data.length == 1000) {
	// 	  event.target.disabled = true;
	// 	}
	//   }, 500);
	// }
  
	toggleInfiniteScroll() {
	  this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
	}
}
