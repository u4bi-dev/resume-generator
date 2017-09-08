import BuilderStyle from './BuilderStyle';

export default function Builder(data) {

    console.log('builder data', data);

    return `
        ${ BuilderStyle() }
        <div class="builder-wrapper">
            <div class="builder-json">JSON으로 데이터 출력받기</div>
            <input class="builder-json-copy">
        </div>
    `;
}