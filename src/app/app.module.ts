import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeroForm } from './form/form';
import { MultiselectForm } from './multiselect-form/multiselect.form';
import { FormInForm } from './form/forminform/forminform';
import { Accordion } from './accordion/accordion';
import { AccordionService } from './accordion/accordionService';
import { SearchUserComponent } from './search-user-component/search.user.component';
import { SingleUser } from './search-user-component/single-user/single.user';
import { SearchUserService } from './search-user-component/search.user.service';
import { UserForm } from './search-user-component/user-form/user.form';
import { UserList } from './search-user-component/user-list/user.list'


@NgModule({
  declarations: [
    AppComponent,
    HeroForm,
    MultiselectForm,
    FormInForm,
    Accordion,
    SearchUserComponent,
    SingleUser,
    UserForm,
    UserList
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([

    ])
  ],
  providers: [AccordionService, SearchUserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
