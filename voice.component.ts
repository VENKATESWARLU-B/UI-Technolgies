import { Component, OnInit } from '@angular/core';
declare var webkitSpeechRecognition:any;
@Component({
  selector: 'app-voice',
  templateUrl: './voice.component.html',
  styleUrls: ['./voice.component.css']
})
export class VoiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  validateform(){

  }
  startDictation(event){
    debugger;
    if(window.hasOwnProperty("webkitSpeechRecognition"))
    var recognition = new webkitSpeechRecognition();
    recognition.continuous =false;
    recognition.interimResults=false;

    recognition.lang="en-Us";
    recognition.start();
    recognition.onresult= function(e){
      if(event =="phone" || event == "aadhar"){
        this.recognition(event).value=parseInt(e.results[0][0].transcript);
        recognition.stop();
      }else{
        this.recognition(event).value=e.results[0][0].transcript;
        recognition.stop();
      }
    };
    recognition.onerror =function(e){
      recognition.stop();
    };
  }
}
