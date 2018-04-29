import { Component, OnInit, Inject } from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
//assignment 2 - task 2
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class HomeComponent implements OnInit {
  
  dish: Dish;
  promotion: Promotion;
  leader: Leader;//assignment 2 - task 2
  dishErrMess: string;
  promotionErrorMessage: string;
  leaderErrorMessage: string;

  constructor(
    private dishservice: DishService,
    private promotionservice: PromotionService,
    //assignment 2 - task 2
    private leaderService: LeaderService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    //this.dishservice.getFeaturedDish().then(dish => this.dish = dish);
    //this.promotionservice.getFeaturedPromotion().then(promotion => this.promotion = promotion);
    //this.leaderService.getFeaturedLeader().then(leader => this.leader = leader);//assignment 2 - task 2

    this.dishservice.getFeaturedDish().subscribe(
      dish => this.dish = dish,
      errMess => this.dishErrMess = errMess);

    this.promotionservice.getFeaturedPromotion().subscribe(
      promotion => this.promotion = promotion,
      // Assignment 4 - Task 1
      promotionErrorMessage => this.promotionErrorMessage = promotionErrorMessage);

    this.leaderService.getFeaturedLeader().subscribe(
      leader => this.leader = leader,//assignment 2 - task 2
      // Assignment 4 - Task 2
      leaderErrorMessage => this.leaderErrorMessage = leaderErrorMessage);
  }

}
