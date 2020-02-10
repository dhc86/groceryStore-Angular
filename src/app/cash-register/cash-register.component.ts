import { Component, OnInit, Input } from '@angular/core';
import { CashRegister } from '../models/cash-register';

@Component({
	selector: 'cash-register',
	templateUrl: './cash-register.component.html',
	styleUrls: ['./cash-register.component.scss']
})
export class CashRegisterComponent implements OnInit {
	@Input() cashRegister: CashRegister;

	constructor() { }

	ngOnInit() {
		
	}

}
