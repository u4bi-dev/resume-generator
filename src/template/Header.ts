import iconPath from '../model/mock-icon-path';

export default function Template(data) {
    
    function icon(item){
        let result = '';

        Object.keys(item).map( (entry) => {
            
            let html = `<li>
                <a href="${ item[entry] }" itemprop="url" target="_blank">
            
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 28 28" enable-background="new 0 0 28 28" xml:space="preserve" width="28">
                
                    <path fill-rule="evenodd" clip-rule="evenodd" fill="#D1CECC" d="${ iconPath[entry] }"/>
                
                </svg>

                </a>
            </li>`;

            result += html;

        });

        return result;        
    }

    return ` 
        <header class="top-header">
        
        <img src="${ data.avatar }" class="top-avatar">
        
        <h1>${ data.name }</h1>
        <div class="top-bar">
            <h2>${ data.job }</h2>
            <ul>
                ${ icon(data.icon) }
            </ul>
        </div>
        <div class="top-content"><p>${ data.bio }</p></div>
        </header>
    `;
}