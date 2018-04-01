import { Injectable } from '@angular/core';
import { Note } from "../classes/Note";

@Injectable()
export class StorageService {

  constructor() { }

  getNotes(): Note[] {
    return JSON.parse(localStorage.getItem("notes-app-items")) || [];
  }

  setNotes(notes: Note[]): void {
    localStorage.setItem("notes-app-items", JSON.stringify(notes));
  }

}
