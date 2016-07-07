import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'data-mode',
    templateUrl: 'app/shared/data-mode.component.html',
    
})
export class DataModeComponent implements OnInit{
    @Input() edit: boolean;
    @Input() data: any;
    constructor(){}
    ngOnInit(){
       
    }

    
}
