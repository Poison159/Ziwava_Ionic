
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { mobiscroll, MbscListviewOptions } from '@mobiscroll/angular';

mobiscroll.settings = {
    theme: 'ios'
};

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  listSettings: MbscListviewOptions = {
    stages: [{
        percent: -20,
        action: (event, inst) => {
            inst.remove(event.target);
            return false;
        }
    }, {
        percent: 20,
        action: (event, inst) => {
            inst.remove(event.target);
            return false;
        }
    }],
    actionable: false
};

cycleSettings: MbscListviewOptions = {
    stages: [{
        percent: -20,
        action: (event, inst) => {
            inst.move(event.target, 0);
            return false;
        }
    }, {
        percent: 20,
        action: (event, inst) => {
            inst.move(event.target, 0);
            return false;
        }
    }],
    actionable: false
};
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
