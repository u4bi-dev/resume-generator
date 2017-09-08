import BuilderStyle from './BuilderStyle';

export default function Builder(element, data) {
    
    // TODO : Custom EventListender
    setTimeout( () => {
        
        let get  = element.querySelector('.builder-json'),
            copy = element.querySelector('.builder-json-copy');
        
        get.addEventListener('click', () => copy.value = JSON.stringify(data) );
        
    }, 100);
    
    return `
        ${ BuilderStyle() }
        <div class="builder-wrapper">
            <div class="builder-json">JSON으로 데이터 출력받기</div>
            <input class="builder-json-copy">
        </div>
    `;
}