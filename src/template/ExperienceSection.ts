export default function ExperienceSection(data) {
    
    function item(){
        
        let result = '';

        data.map( (data) => {
            
            let html = `
                <div>
                    <a  ${ data.link ? 'href="'+data.link : '' } " target="_blank" ><h3>${ data.name || '' }</a></h3></a>
                    <h4>${ data.job || '' } &bull; ${ data.date = data.date || {} , data.date.start || '' } &mdash; ${ data.date.end || '' } - ${ data.address || '' }</h4>
                    <ul>
                        ${ list(data.bios || [] ) }
                    </ul>
                </div>
            `;

            result += html;         
        });

        return result;
    }

    function list(data){
        let result = '';

        data.map( (data) => {

            let html = `
                <li>
                    ${ data }
                </li>
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