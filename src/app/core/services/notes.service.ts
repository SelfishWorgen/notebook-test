import { Injectable } from '@angular/core';
import { Note } from "../classes/Note";
import { StorageService } from "./storage.service";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { NoteModel } from "../models/NoteModel";

@Injectable()
export class NotesService {
  private notes = new BehaviorSubject<Note[]>([]);

  constructor(
    private storageService: StorageService
  ) { }

  public init(): void {
    this.notes.next(this.storageService.getNotes());
    console.log(this.notes.getValue());
  }

  public getNotes(): BehaviorSubject<Note[]> {
    return this.notes;
  }

  public getNotesFromStorage(): Note[] {
    return this.storageService.getNotes();
  }

  public createNote(note: NoteModel): void {
    note.id = this.findLatestId() + 1;
    const noteItem = new Note(note);
    this.saveNotes([...this.notes.getValue(), noteItem]);
  }

  public editNote(note: Note): void {
    const notes = [...this.notes.getValue()];
    let editedNote = notes.find((item: Note) => item.id === note.id);
    editedNote && (editedNote = Object.assign(editedNote, note));
    this.saveNotes(notes);
  }

  public deleteNote(id: number): void {
    const notes = [...this.notes.getValue()];
    const index = notes.findIndex((item: Note) => item.id === id);
    notes.splice(index, 1);
    this.saveNotes(notes);
  }

  private findLatestId(): number {
    let lastID = 1;
    this.notes.getValue().forEach((note: Note) => {
      if (note.id > lastID) {
        lastID = note.id;
      }
    });
    return lastID;
  }

  private saveNotes(notes: Note[]): void {
    this.notes.next(notes);
    this.storageService.setNotes(notes);
  }
}
