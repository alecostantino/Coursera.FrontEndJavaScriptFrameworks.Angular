import { Component, OnInit, Inject } from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
//assignment 2 - task 2
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  leader: Leader;//assignment 2 - task 2

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

    this.dishservice.getFeaturedDish().subscribe(dish => this.dish = dish);
    this.promotionservice.getFeaturedPromotion().subscribe(promotion => this.promotion = promotion);
    this.leaderService.getFeaturedLeader().subscribe(leader => this.leader = leader);//assignment 2 - task 2
  }

}
