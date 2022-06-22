import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-qr-code',
  templateUrl: './generate-qr-code.component.html',
  styleUrls: ['./generate-qr-code.component.scss']
})
export class GenerateQrCodeComponent implements OnInit {

  qrcodename : string;
  title = 'generate-qrcode';
  elementType: 'url' | 'canvas' | 'img' = 'url';
  value: string = 'Techiediaries';
  display = false;
  href : string;

  constructor() { }

  ngOnInit() {
  }

  generateQRCode(){
    if(this.qrcodename == ''){
      this.display = false;
      alert("Please enter the name");
      return;
    }
    else{
      this.value = this.qrcodename;
      this.display = true;
    }
  }
  downloadImage(){
    this.href = document.getElementsByTagName('img')[0].src;
  }

}
