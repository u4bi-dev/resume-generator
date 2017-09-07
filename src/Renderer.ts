export class Renderer{
    
    data : Object;

    constructor(){

    }

    render(data) : void{
                        
        this.data = data;

        this._render();
    }

    protected _render() : void{
        '_render override';
    }
}