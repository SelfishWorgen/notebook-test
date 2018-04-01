import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NoteComponent } from "./note/note.component";
import { NotesComponent } from "./notes/notes.component";
import { NewNoteComponent } from "./new-note/new-note.component";
import { RouterModule } from "@angular/router";
import { ROUTES } from "./notes-routing.config";
import {
  MatButtonModule, MatCardModule, MatDatepickerModule, MatFormFieldModule, MatIconModule,
  MatInputModule, MatNativeDateModule
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule
  ],
  declarations: [NoteComponent, NotesComponent, NewNoteComponent]
})
export class NotesModule {
}
