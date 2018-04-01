import { Route } from "@angular/router";
import { NotesComponent } from "./notes/notes.component";
import { NewNoteComponent } from "./new-note/new-note.component";

export const ROUTES: Route[] = [
  {
    path: "",
    component: NotesComponent,
    children: [
      {
        path: "add",
        component: NewNoteComponent
      }
    ]
  }
];
