import { Route } from "@angular/router";

export const ROUTES: Route[] = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "notes"
  },
  {
    path: "notes",
    loadChildren: "app/notes/notes.module#NotesModule"
  }
];
