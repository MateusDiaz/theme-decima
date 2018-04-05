import {
  Component,
  OnInit,
  AfterContentInit
} from '@angular/core';
import { Message } from './message';
import { MailService } from './email.service';
import * as Quill from 'quill';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
  providers: [MailService]
})

export class EmailComponent implements OnInit, AfterContentInit {
  messages: Message[];
  selectedMessage: Message;
  messageOpen = false;
  isOpened = true;
  _autoCollapseWidth = 991;

  constructor(private mailService: MailService) {}

  ngOnInit(): void {
    if (this.isOver()) {
      this.isOpened = false;
    }
    this.getMessages();
  }

  ngAfterContentInit() {
    const quill = new Quill('#editor-container', {
      modules: {
        toolbar: {
          container: '#toolbar-toolbar'
        }
      },
      placeholder: 'Compose an epic...',
      theme: 'snow'
    });
  }

  toogleSidebar(): void {
    this.isOpened = !this.isOpened;
  }

  isOver(): boolean {
    return window.matchMedia(`(max-width: 991px)`).matches;
  }

  getMessages(): void {
    this.mailService.getMessages().then(messages => {
      this.messages = messages;
      this.selectedMessage = this.messages[1];
    });
  }

  onSelect(message: Message): void {
    this.selectedMessage = message;
    if (this.isOver()) {
      this.isOpened = false;
    }
  }
}
