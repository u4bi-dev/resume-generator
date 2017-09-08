import BuilderStyle from './BuilderStyle';
import Template from '../Template';

export default function Builder(element, data) {
    
    // TODO : Custom EventListender
    setTimeout( () => {
        
        let get  = element.querySelector('.builder-json.get'),
            copy = element.querySelector('.builder-json-copy'),
            load = element.querySelector('.builder-json.load');
        
        get.addEventListener('click', () => copy.value = JSON.stringify(data) );

        copy.addEventListener('click', (e) => e.target.setSelectionRange(0 , e.target.value.length) );

        load.addEventListener('click', () => {

            let json = prompt('불러오실 JSON 데이터를 등록해주세요', '');            
            if(json === null || json === '') throw 'invalid JSON string';

            element.innerHTML = Template(element, JSON.parse(json));
            copy.value = '';

        });

    }, 100);
    
    return `
        ${ BuilderStyle() }
        <div class="builder-wrapper">
            <div class="builder-json get">JSON으로 데이터 출력받기</div>
            <input class="builder-json-copy">
            <div class="builder-json load">데이터 불러오기</div>            
        </div>
    `;
}