import typescript from 'rollup-plugin-typescript';

export default {
    entry: './src/App.ts',
    format: 'umd',
    moduleName: 'resume',
    // sourceMap: 'inline',
    dest: 'dist/resume.js',
    plugins: [
        typescript()
    ]
}