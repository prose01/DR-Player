// ./src/app/music/music-channels/music-channels.component.ts
import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'music-channels',
  templateUrl: './music-channels.component.html',
  styleUrls: ['./music-channels.component.css'],
})

export class ChannelListComponent {
  selectedChannel:Channel = new Channel(4, 'P6');
  channels = [
     new Channel(1, 'P3' ),
     new Channel(2, 'P4' ),
     new Channel(3, 'P5' ),
     new Channel(4, 'P6' ),
     new Channel(5, 'P7' ),
     new Channel(6, 'P8')
  ];

  // Denne del virker ikke endnu. Selected bliver ikke emitted.
  @Output() selected = new EventEmitter();

  select() {
    this.selected.emit(this.selectedChannel);
  }
  // Denne del virker ikke endnu.
}

export class Channel {
  constructor(public id: number, public name: string) { }
}