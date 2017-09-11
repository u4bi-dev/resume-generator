export default function Loader(data) {
    
    let json = '{}';
    
    if(!data) return json;
    if(typeof data === 'object' ) return data;

    data.charAt(0) === '{' && data.charAt(data.length-1) === '}' ? json = data : ( () => {
        
        if(data.replace(/(\s*)/g, '').length === 0) return json;

	    let xhttp = window['XMLHttpRequest'] ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

        xhttp.onreadystatechange = (e) => {
            if(e.currentTarget['readyState'] === 4)
                json = e.currentTarget['status'] === 200 ? e.currentTarget['response'] : '{}';        
        };

        xhttp.open('GET', data, false);
        xhttp.send();
                
    })();

    return JSON.parse(json);
}