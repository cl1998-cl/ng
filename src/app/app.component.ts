import {Component, inject, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {Overlay} from '@angular/cdk/overlay';
import {ComponentPortal, TemplatePortal} from '@angular/cdk/portal';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatButtonModule, MatSlideToggleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myApp';

  overlay: Overlay = inject(Overlay);
  @ViewChild('templatePortalContent') templatePortalContent!: TemplateRef<unknown>;
  _viewContainerRef = inject(ViewContainerRef);
  open(){
    const overlayRef = this.overlay.create();
    const templatePortal = new TemplatePortal(
      this.templatePortalContent,
      this._viewContainerRef
    );
    overlayRef.attach(templatePortal);
  }
}
