import { Injectable } from '@angular/core';
import {Lamp} from "../lamp";
import { LAMPEN } from './mock_lampen';


@Injectable()
export class LampService{
  getLampen(): Promise<Lamp[]> {
    return Promise.resolve(LAMPEN)
  }
}
