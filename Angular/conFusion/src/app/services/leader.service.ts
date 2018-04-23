//assignment 2 - task 1
import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable()
export class LeaderService {

  constructor() { }

  //getLeader(id: number): Leader {
  //  return LEADERS.filter((leader) => (leader.id === id))[0];
  //}

  //getLeaders(): Leader[] {
  //  return LEADERS;
  //}

  //getFeaturedLeader(): Leader {
  //  return LEADERS.filter((leader) => leader.featured)[0];
  //}

  getLeader(id: number): Promise<Leader> {
    return Promise.resolve(LEADERS.filter((leader) => (leader.id === id))[0]);
  }

  getLeaders(): Promise<Leader[]> {
    return Promise.resolve(LEADERS);
  }

  getFeaturedLeader(): Promise<Leader> {
    return Promise.resolve(LEADERS.filter((leader) => leader.featured)[0]);
  }

}
