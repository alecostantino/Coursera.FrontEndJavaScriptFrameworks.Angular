import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Observable } from 'rxjs/Observable';
import { Feedback } from '../shared/feedback';
import { ProcessHttpMsgService } from './process-httpmsg.service';

@Injectable()
export class FeedbackService {

  constructor(
    private processHTTPMsgService: ProcessHttpMsgService,
    private restangular: Restangular) { }

  // Assignment 4 - Task 3
  submitFeedback(feedback: Feedback): Observable<Feedback> {
    return this.restangular.all('feedback').post(feedback)
      .catch(error => { return this.processHTTPMsgService.handleError(error); });
  }
}
