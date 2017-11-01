import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'cgh-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	public headerTitle: string = "CGH Header";

	constructor() {}

	ngOnInit(){}
}
