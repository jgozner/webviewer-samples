import { Component } from '@angular/core';
import { WebViewerComponent } from './webviewer/webviewer.component';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html',
  imports: [WebViewerComponent],
  standalone: true
})
export class AppComponent {
  title = 'webviewer-angular';
}
