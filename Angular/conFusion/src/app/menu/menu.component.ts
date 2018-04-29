import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class MenuComponent implements OnInit {

  dishes: Dish[];
  errMess = null;//: string;

  //selectedDish: Dish;

  constructor(private dishService: DishService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    //this.dishService.getDishes().then(dishes => this.dishes = dishes);
    //this.dishService.getDishes().subscribe(dishes => this.dishes = dishes);

    this.dishService.getDishes()
      .subscribe(
      dishes => this.dishes = dishes,
      //function (errmess: any) {
      //  this.errMess = errmess;
      //});
      errmess => {
        this.errMess = <any>errmess;
        console.log(this.errMess);
      });
  }

  //onSelect(dish: Dish) {
  //  this.selectedDish = dish;
  //}
}
