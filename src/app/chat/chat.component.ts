import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  chatText=[
    {
      userImg:'https://upload.wikimedia.org/wikipedia/commons/6/67/Vector_Face_wearing_Spectacles.png',
      msgStatus:'sender',
      content:["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus totam labore odio quod deserunt amet" , "second msg from sender"],

    },
    {
      userImg:'https://upload.wikimedia.org/wikipedia/commons/6/67/Vector_Face_wearing_Spectacles.png',
      msgStatus:'receiver',
      content:[" Hello" , "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus totam labore odio quod deserunt amet"],
    },
    // {
    //   userImg:'https://upload.wikimedia.org/wikipedia/commons/6/67/Vector_Face_wearing_Spectacles.png',
    //   msgStatus:'sender',
    //   content:["some text"],
    // },
  ]

  // send input
  form = new FormGroup({
    message: new FormControl('', Validators.required)
  });
  
  get f(){
    return this.form.controls;
  }
  
  submit(){
    console.log(this.f.message.value);
    if(this.f.message.valid){
      console.log("send")
      if(this.chatText[this.chatText.length - 1].msgStatus == "sender"){

        this.chatText[this.chatText.length - 1].content.push(this.f.message.value)
      }else{
        let obj={
          userImg:'https://upload.wikimedia.org/wikipedia/commons/6/67/Vector_Face_wearing_Spectacles.png',
          msgStatus:'sender',
          content:[this.f.message.value]
        }
        this.chatText.push(obj)
      }
      this.form.reset()
      
    }else{
      console.log("error")
    }
  }

}
