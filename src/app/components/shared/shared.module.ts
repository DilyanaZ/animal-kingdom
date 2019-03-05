import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { AuthService } from 'src/app/authentication/auth.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, HighlightDirective],
  imports: [CommonModule, RouterModule, NgbModule],
  exports: [HeaderComponent, FooterComponent],
  providers: [AuthService]
})
export class SharedModule {}
