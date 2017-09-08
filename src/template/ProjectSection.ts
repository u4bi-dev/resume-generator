export default function ProjectSection(data) {
    
    function item(){
        
        let result = '';

        data.map( (data) => {
            
            let html = `
                <div>
                    <h3>${ data.name || '' }</a></h3>
                    <h4>${ data.date = data.date || {} , data.date.start || '' } &mdash; ${ data.date.end || '' }</h4>
                    <p>${ data.bio || '' }</p>
                </div>
            `;

            result += html;         
        });

        return result;
    }
    
    return `
        <section>
        <header>
            <h2>Projects</h2>
        </header>
        ${ item() }
        </section>    
    `;
}