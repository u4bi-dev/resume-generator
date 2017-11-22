// IE not Support

// export default function loadScript(src){

//     return new Promise(function(resolve, reject) {
//         const script = document.createElement('script');
    
//         script.async = false;
//         script.src = src;
//         script.onload = resolve;
//         script.onerror = reject;
    
//         document.head.appendChild(script);
//     });

// }

export default function loadScript(url, callback){
    
    const script : any = document.createElement('script');
    script.type = 'text/javascript';

    if(script.readyState){ // IE
        script.onreadystatechange = () => {
            if(script.readyState == 'loaded' || script.readyState == 'complete'){
                script.onreadystatechange = null;
                
                callback();
                
            }
        };
    } else script.onload = () => callback();

    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}