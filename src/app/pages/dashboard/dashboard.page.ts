import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from './../../services/api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { AuthStoreService } from '../auth/services/auth-store.service';
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss']
})
export class DashboardPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  // url: string;
  // itemListData = [];
  // page_number = 1;
  // page_limit = 8;
  inputChange$ = new BehaviorSubject('');
  subject = new BehaviorSubject<any>(null);
  feed$: Observable<any> = this.subject;


  constructor(public apiService: ApiService, public authStoreService: AuthStoreService) {

    // for (let index = 0; index < 35; index++) {
    // 	const element = this.itemListData[index];
    // 	const newItem = {
    // 		"id":index,
    // 		"name":"Lilla Nitzsche",
    // 		"jobtype":"Human Intranet Liaison",
    // 		"email":"Edwardo_Homenick@gmail.com",
    // 		"address":"11360 Bahringer Squares",
    // 		"imageUrl":"https://s3.amazonaws.com/uifaces/faces/twitter/aleclarsoniv/128.jpg"
    // 	   }
    // 	   this.itemListData.push(newItem)
    // }
    this.feed$ = this.getFeed();
    this.feed$.subscribe(data => {
      console.log(data);
    });
  }


  async onChange(ev: any) {
    this.inputChange$.next(ev.detail.value);
  }

  getTimeAgo(pTime: string) {
    return moment(pTime).fromNow(true).toString();
  }

  async onClick() {
    console.log(this.inputChange$.value);
    if (this.inputChange$.value.length < 1) { return; }

    this.apiService.createPost(this.inputChange$.value).subscribe(async results => {
      console.log(results);
      this.inputChange$.next('');
      this.feed$ = this.getFeed();
    });
  }

  getFeed() {
    return this.apiService.getFeed();
  }
  ngOnInit(): void {
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  users =
    [{
      name: 'Aline Grover',
      created: 'November 28, 2012'
    }, {
      name: 'Nevada Anders',
      created: 'January 18, 2014'
    }, {
      name: 'Nicholas Morissette',
      created: 'November 11, 2014'
    }, {
      name: 'Rusty Umland',
      created: 'January 8, 2019'
    }, {
      name: 'Amada Cerulli',
      created: 'July 22, 2009'
    }, {
      name: 'Harriette Garcia',
      created: 'July 29, 2018'
    }, {
      name: 'Erminia Marotz',
      created: 'September 29, 2016'
    }, {
      name: 'Shanelle Parodi',
      created: 'May 26, 2018'
    }, {
      name: 'Roger Leite',
      created: 'August 6, 2015'
    }, {
      name: 'Latina Faulcon',
      created: 'February 5, 2014'
    }, {
      name: 'Jerrie Hoekstra',
      created: 'June 2, 2016'
    }, {
      name: 'Domonique Byam',
      created: 'December 30, 2010'
    }, {
      name: 'Monnie Bonar',
      created: 'December 20, 2018'
    }, {
      name: 'Chu Kahle',
      created: 'November 17, 2017'
    }, {
      name: 'Allan Passman',
      created: 'November 12, 2015'
    }, {
      name: 'Conrad Caliendo',
      created: 'February 10, 2016'
    }, {
      name: 'Elma Chenier',
      created: 'August 13, 2011'
    }, {
      name: 'Wendi Hirano',
      created: 'July 27, 2018'
    }, {
      name: 'Loren Wordlaw',
      created: 'December 20, 2014'
    }, {
      name: 'Hubert Frum',
      created: 'January 21, 2013'
    }, {
      name: 'Rueben Basil',
      created: 'December 2, 2013'
    }, {
      name: 'Krystyna Hardiman',
      created: 'February 11, 2016'
    }, {
      name: 'Micki Murch',
      created: 'December 17, 2009'
    }, {
      name: 'Allene Knight',
      created: 'November 3, 2010'
    }, {
      name: 'Davis Lunsford',
      created: 'October 17, 2011'
    }, {
      name: 'Elin Conte',
      created: 'June 23, 2015'
    }, {
      name: 'Yasuko Hites',
      created: 'August 25, 2017'
    }, {
      name: 'Gerri Pinon',
      created: 'May 21, 2014'
    }, {
      name: 'Caryl Hawker',
      created: 'April 13, 2018'
    }, {
      name: 'Savannah Hoard',
      created: 'October 31, 2009'
    }, {
      name: 'Carolyn Knutsen',
      created: 'July 16, 2015'
    }, {
      name: 'Shantay Mckissack',
      created: 'July 9, 2010'
    }, {
      name: 'Vertie Pinales',
      created: 'November 20, 2010'
    }, {
      name: 'Gidget Stuck',
      created: 'August 17, 2017'
    }, {
      name: 'Drew Crownover',
      created: 'August 30, 2017'
    }, {
      name: 'Vashti Krajewski',
      created: 'January 25, 2018'
    }, {
      name: 'Candice Dike',
      created: 'November 19, 2018'
    }, {
      name: 'Dorthey Buhler',
      created: 'October 22, 2012'
    }, {
      name: 'Hailey Deluna',
      created: 'September 13, 2012'
    }, {
      name: 'Richard Aaron',
      created: 'April 27, 2016'
    }];

  loadData(event) {
    console.log('start');
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      //   if (this.users.length == 1000) {
      // 	event.target.disabled = true;
      //   }
    }, 500);
  }

  toggleInfiniteScroll() {
    console.log('tap: ', this.infiniteScroll.disabled);
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
}
