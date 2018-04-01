import { Component, OnInit, ViewChild } from "@angular/core";
import { StorageService } from "../../core/services/storage.service";
import { NotesService } from "../../core/services/notes.service";
import { Note } from "../../core/classes/Note";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  search: FormGroup;
  selectedNote = new BehaviorSubject<Note>(null);
  notes = this.notesService.getNotes();

  constructor(
    private storageService: StorageService,
    private notesService: NotesService,
    private fb: FormBuilder
  ) {
    this.search = this.fb.group({
      searchInput: [""]
    });
  }

  ngOnInit() {
    this.notesService.init();
    this.search.controls.searchInput.valueChanges.subscribe((value: string) => {
      console.log(value);
      if (value !== "") {
        const notes = this.notesService.getNotesFromStorage().filter((note: Note) => note.keywords.includes(value));
        this.notes.next(notes);
      } else {
        this.notesService.init();
      }
    });
  }

  selectNote(note: Note): void {
    console.log(note);
    this.selectedNote.next(note);
  }

}
