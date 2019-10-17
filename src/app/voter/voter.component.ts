import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {

  @Input() name: string;
  @Output() voted = new EventEmitter<boolean>();
  // first, not vote yet
  didVote = false;

  constructor() { }

  ngOnInit() {
  }

  // if click agree, decision = true: see front end
  // if click disagree, decision = false: see front end

  vote(decision: boolean) {
    this.voted.emit(decision);
    // after button clicked, mark as voted, disable button if clicked
    this.didVote = true;
  }

}
