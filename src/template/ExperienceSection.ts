export default function ExperienceSection(data) {
    
    function item(){
        
        let result = '';

        data.map( (data) => {
            
            let html = `
                <div>
                    <h3>${ data.name }</a></h3>
                    <h4>${ data.date.start } &mdash; ${ data.date.end } - ${ data.address }</h4>
                    <ul>
                        <li>${ data.bios }</li>
                    </ul>
                </div>
            `;

            result += html;         
        });

        return result;
    }
    
    return `
        <section>
        <header>
            <h2>Experience</h2>
        </header>
        ${ item() }
        </section>            
    `;
}