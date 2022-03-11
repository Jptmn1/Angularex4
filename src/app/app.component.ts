import { Component, Input, EventEmitter, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ex4';

  @Input()
Ourpricing: string = "Our Pricing"

@Input()
basic: string = "Basic"

@Input()
preco: string = "$19.99"

@Input()
storage: string = "500 GB storage"

@Input()
users: string = "2 users allowed"

@Input()
send: string = "Send up tp 3 GB"

@Input()
learn: string = "Learn more"




@Input()
prof: string = "Professional"

@Input()
preco2: string = "$24.99"

@Input()
storage2: string = "1 TB storage"

@Input()
users2: string = "5 users allowed"

@Input()
send2: string = "Send up to 10 GB"




@Input()
mast: string = "Master"

@Input()
preco3: string = "$39.99"

@Input()
storage3: string = "2 TB storage"

@Input()
users3: string = "10 users allowed"

@Input()
send3: string = "Send up to 20 GB"




constructor(public _snackBar: MatSnackBar) {}

openSnackBar(): void {
  this._snackBar.open("Pacote comprado!", "Fechar")

}

}



