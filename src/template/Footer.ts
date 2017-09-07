export default function Footer(data) {
    
    return `
        <footer>
        <p><a href="mailto:${ data.email }">contact me</a>.</p>
        <p>Made by <a href="https://github.com/u4bi">@u4bi</a>. Fork me on <a href="https://github.com/u4bi-dev/resume">GitHub Repository</a>.</p>
        </footer>
    `;
}