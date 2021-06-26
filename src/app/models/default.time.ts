import {TimeModel} from "./time.model";

export class DefaultTime {
  defaultTime: TimeModel = {
    seconds: 3,
    minutes: 2
  };

  public getDefault(): TimeModel {
    return this.defaultTime;
  }

  public setDefaultMinutes(minutes: number){
    this.defaultTime.minutes = minutes;
  }
}
