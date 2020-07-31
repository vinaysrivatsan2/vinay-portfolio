import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../profile.service";
import { SnotifyService } from "ng-snotify";
import { environment } from "../../../environments/environment";
import "./../../../assets/js/smtp.js";
declare let Email: any;

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  model: any = {};

  constructor(
    private snotify: SnotifyService,
    private profile: ProfileService
  ) {}

  ngOnInit() {}

  contact() {
    console.log("insde cntact");
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "vigneshc994@gmail.com",
      Password: "1D7492915BDD5722F9BB5410A4185091D4D3",
      To: "srinivasan.vi@northeastern.edu",
      From: `vigneshc994@gmail.com`,
      Subject: this.model.subject,
      Body: `
      <i>This is sent as a feedback from my resume page.</i> <br/> <b>Name: </b>${this.model.name} <br /> <b>Email: </b>${this.model.email}<br /> <b>Subject: </b>${this.model.subject}<br /> <b>Message:</b> <br /> ${this.model.message} <br><br> <b>~End of Message.~</b> `,
    }).then((message) => {
      if (message == "OK") {
        alert("Thanks for your mail. Will get back to you soon !");
      } else {
        alert(message);
      }
    });
  }
}
