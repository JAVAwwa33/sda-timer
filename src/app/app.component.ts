import {Component, OnInit} from '@angular/core';
import {interval, Subscription} from "rxjs";
import {TimeModel} from "./time.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  time: TimeModel = {
    seconds: 59,
    minutes: 0
  };
  subscription?: Subscription;
  isPaused: boolean = true;

  ngOnInit(): void {
    this.subscription = interval(1000).subscribe(() => {
      this.countDown();
    })
  }

  private countDown() {
    if (!this.isPaused) {
      if (this.time.seconds > 0) {
        this.time.seconds -= 1;
      } else {
        this.time.seconds = 59;
      }

      if (this.time.minutes === 0 && this.time.seconds === 0) {
        this.subscription?.unsubscribe();
      }
    }
  }

  togglePause() {
    this.isPaused = !this.isPaused;
  }


}