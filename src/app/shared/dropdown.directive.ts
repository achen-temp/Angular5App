import {
Directive,
HostListener,
HostBinding
} from '@angular/core';

@Directive({
	selector: '[appDropdown]'
})
export class DropdownDirective {
	
	/* This directive open&hide the dropdown when it is clicked*/

	@HostBinding('class.open') isOpen = false;

	@HostListener('click')
	toggleOpen(){
		this.isOpen = !this.isOpen;
	}
}