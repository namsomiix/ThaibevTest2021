import { Component, OnInit } from '@angular/core';  
import {Md5} from "md5-typescript";

@Component({
  selector: 'app-decode-md5',
  templateUrl: './decode-md5.component.html',
  styleUrls: ['./decode-md5.component.scss']
})
export class DecodeMd5Component implements OnInit {

  public decodeOutput :string = '';

  constructor() { }

  ngOnInit() {
    this.decodeMD5();
  }

  decodeMD5(){
    this.decodeOutput = Md5.init('decode-md5 works!');
  }

}
