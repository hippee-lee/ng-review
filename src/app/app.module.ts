import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PhoneFormatDirective } from './directives/phone-mask.directive';

@NgModule({
  declarations: [AppComponent, PhoneFormatDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
