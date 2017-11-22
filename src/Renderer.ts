import Loader from './Loader';
import loadScript from './util/loadScript';

export class Renderer{

    
    protected parent : HTMLElement;
    protected shadowDOM : any;    
    protected data : Object;

    constructor(parent){
        
        if(!parent) throw 'invalid parent';

        this.parent = parent;

    }

    render(data) : void{
                        
        this.data = Loader(data);

        this.shadowDOM ? this._render() : ( () => {
            
            let attach = () => { this.shadowDOM = this.parent.attachShadow({mode: 'open'}); this._render(); };
            !!HTMLElement.prototype.attachShadow ? attach() : loadScript('https://cdn.rawgit.com/webcomponents/shadydom/master/shadydom.min.js', () => loadScript('https://cdn.rawgit.com/webcomponents/shadycss/master/scoping-shim.min.js', () => attach() ) );
            
        })();
    }

    protected _render() : void{
        '_render override';
    }
}