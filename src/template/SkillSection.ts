export default function SkillSection(data) {
    
    function item(){
        
        let result = '';

        data.map( (data) => {
            
            let html = `
                <div>
                    <h4>${ data.title }</h4>
                    <p><span>${ data.entry }</span></p>
                </div>
            `;

            result += html;         
        });

        return result;
    }
    
    return ` 
        <section>
        <header>
            <h2>Skills</h2>
        </header>
        ${ item() }         
        </section>         
    `;
}