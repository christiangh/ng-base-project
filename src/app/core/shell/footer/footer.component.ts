import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'cgh-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
	public footerTitle: string = "CGH Footer";

	constructor() { }

	ngOnInit() {}

}
