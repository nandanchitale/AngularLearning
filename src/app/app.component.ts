import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FLOPBUSTER';
  movie_posters = {
    no_time_to_die: ['./images/no_time_to_die.jpg'],
    quendoom: ['./images/quendoom.jpg'],
    red_notice: ['./images/red_notice.jpg'],
    star_wars: ['./images/star_wars.jpg']
  }

  movies = {
    no_time_to_die: "No Time To Die",
    quendoom: "Quendom",
    red_notice: "Red Notice",
    star_wars: "Star Wars"
  }

  selectedIndex: number = -1;

  no_time_to_die:number = 0;
  quendoom = 0;
  red_notice = 0;
  star_wars = 0;

  vote(index: number) {
    if (this.isSelected(index))
      this.downVote(index)
    else {
      this.upVote(this.selectedIndex)
    }
  }

  upVote(selectedIndex: number) {
    if (selectedIndex === 0) {
      this.no_time_to_die += 1;
    }
    else if (selectedIndex === 1) {
      this.quendoom += 1;
    }
    else if (selectedIndex === 2) {
      this.red_notice += 1;
    }
    else if (selectedIndex === 3) {
      this.star_wars += 1;
    }

    console.log("No time to die : ", this.no_time_to_die);
    console.log("Quendom : ", this.quendoom);
    console.log("Red Notice : ", this.red_notice);
    console.log("Star Wars : ", this.star_wars);

  }

  downVote(selectedIndex: number) {
    if (selectedIndex === 0) {
      if (this.no_time_to_die != 0)
        this.no_time_to_die -= 1;
      console.log("Selected Index:", this.isSelected(selectedIndex))
    }
    else if (selectedIndex === 1) {
      if (this.quendoom != 0)
        this.quendoom -= 1;
    }
    else if (selectedIndex === 2) {
      if (this.red_notice != 0)
        this.red_notice -= 1;
    }
    else if (selectedIndex === 3) {
      if (this.star_wars != 0)
        this.star_wars -= 1;
    }
    console.log("No time to die : ", this.no_time_to_die);
    console.log("Quendom : ", this.quendoom);
    console.log("Red Notice : ", this.red_notice);
    console.log("Star Wars : ", this.star_wars);
  }

  anySelected() {
    return this.selectedIndex !== -1;
  }

  isSelected(index: number) {
    this.upVote(index)
    return this.selectedIndex === index;
  }

  getButtonText(index: number) {
    if (this.isSelected(index))
      return "Unvote"
    return "Vote"
  }
}
