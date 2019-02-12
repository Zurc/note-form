import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NoteCardComponent} from './note-card/note-card.component';
import {NoteFormComponent} from './note-form/note-form.component';
import {NoteListComponent} from './note-list/note-list.component';
import {HeaderComponent} from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteCardComponent,
    NoteFormComponent,
    NoteListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
