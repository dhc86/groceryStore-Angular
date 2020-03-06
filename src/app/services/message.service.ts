import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
	providedIn: 'root'
})
export class MessageService {

	private message = new BehaviorSubject<string>("default message");
	currentMessage = this.message.asObservable();

	constructor() { }

	changeMessage(newMessage: string){
    this.message.next(newMessage);

	}
}
