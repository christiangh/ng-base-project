import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'cgh-right-bar',
	templateUrl: './right-bar.component.html',
	styleUrls: ['./right-bar.component.scss']
})
export class RightBarComponent implements OnInit {
	public rightSidebarTitle: string = "CGH Right Sidebar";

	constructor() {}

  	ngOnInit() {}
}
