import { Renderer } from './Renderer';
import Template from './Template';
import loadScript from './util/loadScript';

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
        
        !!HTMLElement.prototype.attachShadow ? this.load() : loadScript('https://cdn.rawgit.com/webcomponents/shadydom/master/shadydom.min.js').then( e => loadScript('https://cdn.rawgit.com/webcomponents/shadycss/master/scoping-shim.min.js').then( e => this.load() ));
        
    }

    private load(){
        this.shadowDOM = this.parent.attachShadow({mode: 'open'});
        this.shadowDOM.innerHTML = Template(this.shadowDOM, this.data);
    }
    
}
