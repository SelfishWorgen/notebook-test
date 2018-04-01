import { Component, OnInit, Input, Output, EventEmitter, ViewChild, OnChanges, SimpleChanges } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Note } from "../../core/classes/Note";
import { MatDatepicker } from "@angular/material";
import { NotesService } from "../../core/services/notes.service";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit, OnChanges {
  noteForm: FormGroup;
  _note: Note;
  @Input() mode: "edit" | "create" = "edit";
  @Input() note: Note;
  @Output() onDelete = new EventEmitter<void>();
  @ViewChild("datepicker") datepicker: MatDatepicker<Date>;
  constructor(
    private fb: FormBuilder,
    private noteService: NotesService,
    private router: Router
  ) {
    this.noteForm = this.fb.group({
      id: [null],
      caption: ["", [Validators.required]],
      text: ["", [Validators.required]],
      keywords: [""],
      date: [null]
    });
  }

  ngOnInit() {
    this.mode === "edit" && this.noteForm.patchValue(this.note);
  }

  ngOnChanges(change: SimpleChanges): void {
    this.mode === "edit" && this.noteForm.patchValue(change.note.currentValue);
  }

  openDatePicker(): void {
    this.datepicker.opened = true;
  }

  createNote(): void {
    this.noteService.createNote(this.noteForm.value);
    this.router.navigate(["/notes"]);
  }

  cancel() {
    this.router.navigate(["/notes"]);
  }

  saveChanges(): void {
    this.noteService.editNote(this.noteForm.value);
  }

  deleteNote(): void {
    this.noteService.deleteNote(this.note.id);
    this.onDelete.emit();
  }

}
