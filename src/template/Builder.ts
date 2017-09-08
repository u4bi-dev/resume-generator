import BuilderStyle from './BuilderStyle';
import Template from '../Template';
import Loader from '../Loader';

export default function Builder(element, data) {
    
    // TODO : Custom EventListender
    setTimeout( () => {
        
        let get  = element.querySelector('.builder-json.get'),
            copy = element.querySelector('.builder-wrapper input'),
            load = element.querySelector('.builder-json.load'),
            put  = element.querySelector('.builder-prompt input'),            
            success = element.querySelector('.builder-prompt .success');
        
        get.addEventListener('click', () => copy.value = JSON.stringify(data) );

        copy.addEventListener('click', (e) => e.target.setSelectionRange(0 , e.target.value.length) );

        load.addEventListener('click', () => {
            success.parentElement.style.display = 'inline';
            put.focus();
        });

        success.addEventListener('click', () => {
            
            element.innerHTML = Template(element, Loader(put.value));
            
            success.parentElement.style.display = 'none';
            copy.value = '';

        });

    }, 100);
    
    return `
        ${ BuilderStyle() }
        <div class="builder-wrapper">
            <div class="builder-json get">JSON으로 데이터 출력받기</div>
            <input>
            <div class="builder-json load">데이터 불러오기</div>            
        </div>

        <div class="builder-prompt">
            <p>JSON 데이터를 등록해주세요</p>
            <input placeholder="HTTP Link or JSON Object">
            <p class="success">확인</p>
        </div>
    `;
}