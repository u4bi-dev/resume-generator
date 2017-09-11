import { Renderer } from './Renderer';
import Template from './Template';

export class ResumeRenderer extends Renderer {
    
    constructor(parent){
 
        super(parent);
    }

    protected _render() : void{
                
        if(!this.parent) throw 'invalid parent element';
        this.shadowDOM.innerHTML = Template(this.shadowDOM, this.data);

    }
             
}
