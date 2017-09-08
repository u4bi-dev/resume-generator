export default function EduAndCertSection(data) {
    
    function item(){
        
        let edu = '',
            cert = '';
        
        data.edu = data.edu || [];
        data.cert = data.cert || [];

        data.edu.map( (data) => { 
            let html = `
                 <h3>${ data.title || '' }</h3>
                 <h4>${ data.name || '' } &bull; ${ data.date = data.date || {} , data.date.start || '' } - ${ data.date.end || '' }</h4>
             `;

            edu += html;
        });

        data.cert.map( (data) => { 
            let html = `
                <h3>${ data.title || '' }</h3>
                <h4>${ data.name || '' } &bull; ${ data.date || '' }</h4>
            `;

            cert += html;            
        });        
        
        return `
            <div>
                ${ edu || '' }
                ${ cert || '' }
            </div>         
        `;

    }
    
    return `
        <section>
        <header>
            <h2>Education and Certification</h2>
        </header>
        ${ item() }
        </section>           
    `;
}