import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment.prod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pericoClientFlow';
  appConfigPath = '../assets/appConfig.json';  // "../../../../config/appConfig.json";

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.loadRuntimeDependencies();
  }

  private loadRuntimeDependencies() {
    setTimeout(() => {
      this.http
        .get(this.appConfigPath)
        .subscribe((config: JSON) => {
          this.overrideStaticConfiguration(config);
        }, (err: any) => {
          this.configMissingErrorHandler(err);
        });
    }, 5000);
  }

  private configMissingErrorHandler(error: Response | any) {
    console.warn(error);
  }

  private overrideStaticConfiguration(config: JSON) {
    environment.url = config['url'];
    environment.mimes = config['mimes'];
    environment.extensions = config['extensions'];
  }


}
