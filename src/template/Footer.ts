export default function Footer(data) {
    
    function isLive(bool){
        return !bool ? '<p>Made by <a href="https://github.com/u4bi">@u4bi</a>. Fork me on <a href="https://github.com/u4bi-dev/resume">GitHub Repository</a>.</p>' : '';
    }

    return `
        <footer>
        ${ isLive(data.live) }
        </footer>
    `;
}