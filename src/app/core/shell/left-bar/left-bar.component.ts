import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'cgh-left-bar',
	templateUrl: './left-bar.component.html',
	styleUrls: ['./left-bar.component.scss']
})
export class LeftBarComponent implements OnInit {
	public leftSidebarTitle: string = "CGH Left Sidebar";

	constructor() {}

	ngOnInit() {}

}
