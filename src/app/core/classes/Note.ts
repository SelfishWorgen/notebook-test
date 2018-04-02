import { NoteModel } from "../models/NoteModel";

export class Note implements NoteModel{
  readonly id: number;
  date: Date;
  caption: string;
  text: string;
  keywords: string;

  constructor(note: NoteModel) {
    this.id = note.id;
    this.date = note.date;
    this.caption = note.caption;
    this.text = note.text;
    this.keywords = note.keywords;
  }
}
