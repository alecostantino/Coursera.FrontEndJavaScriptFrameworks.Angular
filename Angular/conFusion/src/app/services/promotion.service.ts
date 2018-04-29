import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
//import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { ProcessHttpMsgService } from './process-httpmsg.service';

@Injectable()
export class PromotionService {

  constructor(
    private processHTTPMsgService: ProcessHttpMsgService,
    private restangular: Restangular) { }

  //getPromotions(): Promotion[] {
  //  return PROMOTIONS;
  //}

  //getPromotion(id: number): Promotion {
  //  return PROMOTIONS.filter((promo) => (promo.id === id))[0];
  //}

  //getFeaturedPromotion(): Promotion {
  //  return PROMOTIONS.filter((promotion) => promotion.featured)[0];
  //}

  //getPromotions(): Promise<Promotion[]> {
  //  return Promise.resolve(PROMOTIONS);
  //}

  //getPromotion(id: number): Promise<Promotion> {
  //  return Promise.resolve(PROMOTIONS.filter((promo) => (promo.id === id))[0]);
  //}

  //getFeaturedPromotion(): Promise<Promotion> {
  //  return Promise.resolve(PROMOTIONS.filter((promotion) => promotion.featured)[0]);
  //}

  //getPromotions(): Promise<Promotion[]> {
  //  return new Promise(resolve => { setTimeout(() => resolve(PROMOTIONS), 2000); });
  //}

  //getPromotion(id: number): Promise<Promotion> {
  //  return new Promise(resolve => {
  //    setTimeout(() => resolve(PROMOTIONS.filter((promo) => (promo.id === id))[0]), 2000);
  //  });
  //}

  //getFeaturedPromotion(): Promise<Promotion> {
  //  return new Promise(resolve => {
  //    setTimeout(() => resolve(PROMOTIONS.filter((promotion) => promotion.featured)[0]), 2000);
  //  });
  //}

  //getPromotions(): Promise<Promotion[]> {
  //  return Observable.of(PROMOTIONS).delay(2000).toPromise();
  //}

  //getPromotion(id: number): Promise<Promotion> {
  //  return Observable.of(PROMOTIONS.filter((promo) => (promo.id === id))[0]).delay(2000).toPromise();
  //}

  //getFeaturedPromotion(): Promise<Promotion> {
  //  return Observable.of(PROMOTIONS.filter((promotion) => promotion.featured)[0]).delay(2000).toPromise();
  //}

  //getPromotions(): Observable<Promotion[]> {
  //  return Observable.of(PROMOTIONS).delay(2000);
  //}

  //getPromotion(id: number): Observable<Promotion> {
  //  return Observable.of(PROMOTIONS.filter((promo) => (promo.id === id))[0]).delay(2000);
  //}

  //getFeaturedPromotion(): Observable<Promotion> {
  //  return Observable.of(PROMOTIONS.filter((promotion) => promotion.featured)[0]).delay(2000);
  //}

  // Assignment 4 - Task 1
  getPromotions(): Observable<Promotion[]> {
    return this.restangular.all('promotions').getList()
      .catch(error => { return this.processHTTPMsgService.handleError(error); });
  }

  getPromotion(id: number): Observable<Promotion> {
    return this.restangular.one('promotions', id).get()
      .catch(error => { return this.processHTTPMsgService.handleError(error); });
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return this.restangular.all('promotions').getList({ featured: true }).map(promotions => promotions[0])
      .catch(error => { return this.processHTTPMsgService.handleError(error); });
  }
}
