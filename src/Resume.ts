import { Renderer } from './Renderer';
import Template from './Template';

export class Resume extends Renderer {
    
    private parent : HTMLElement;
    private shadowDOM : any;

    constructor(parent){
 
        super();

        if(!parent) throw 'invalid parent';

        this.parent = parent;

    }

    protected _render() : void{
        
        if(!this.parent) throw 'invalid parent element';
        
        this.shadowDOM = this.parent.attachShadow({mode: 'open'});
        this.shadowDOM.innerHTML = Template(this.data);

    }    
    
}
