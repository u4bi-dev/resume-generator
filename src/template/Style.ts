export default function Style(){
           
    return `
    <style>
        @media(min-width: 600px){
        .top-bar h2{ float:left;margin:0 }
        .top-bar ul{ border-top: none !important; text-align: right !important; }
        .top-content{ font-size:1.125rem }
        }
        *{ box-sizing: border-box; }
        
        :host{
        display: block;
        color: #333;
        line-height: 1.5;
        margin:0;
        font-family : Arial, Helvetica, sans-serif;        
        }

        .wrapper {
        max-width: 728px;
        padding: 0 24px;
        margin: 0 auto;
        }

        /* @ 상단 헤더단
        */
        .top-header{
        padding: 1.5rem 0; 
        }     
    
        .top-header h1{
        text-align: center;
        font-size: 2.4rem;
        font-weight: 900;        
        }
        
        .top-avatar {
            width: 95px;
            max-width: 100%;
            overflow: hidden;
            border-radius : 100px;
            margin: 0 auto;
            display: block;
        }

        .top-bar{
        border-top: 4px solid #c7c7c7;
        border-bottom: 2px solid #c7c7c7;
        }

        .top-bar h2{
        font-weight: 300;
        font-size: 1.75rem;
        line-height: 2rem;
        text-align: center;
        margin: 0 0 .5rem;        
        }

        .top-bar ul{
        margin: 0;
        padding: 0;
        position: relative;
        top: 4px;
        text-align: center;
        border-top: 2px solid #c7c7c7;
        padding-top: .4rem;
        }

        .top-bar li{
        display: inline-block;
        margin-left: 5px;
        }
        
        .top-button{
        border-radius : 3px;
        background-color: #efefef;
        text-decoration: none;
        text-align: center;
        display: block;
        margin: 1.2rem auto;
        width: 220px;
        font-size: 1.375rem;
        color: #333;
        line-height: 55px;        
        -webkit-transition:all 0.2s ease;
        -moz-transition:all 0.2s ease;
        transition:all 0.2s ease;
        }
        
        .top-button:hover{
        background-color:#333;
        color:#fff;
        }


        /* @ 섹터단
        */
        section{
        margin: 0 0 3rem;
        }

        section header{
        border-top: 4px solid #c7c7c7;
        border-bottom: 2px solid #c7c7c7;
        padding: .2rem 0 .4rem;
        margin-bottom: 1.5rem;
        }

        section header h2{
        font-weight: 900;
        font-size: 1.75rem;
        margin: 0;
        }

        section div{
        margin-bottom: 2rem;
        }

        section h4{
        font-size: 1.025rem;
        margin: 0 0 .75rem;
        line-height: 1;
        }

        section h3{
        font-weight: 700;
        margin: 0 0 .75rem;
        font-size: 1.25rem;
        line-height: 1;
        }

        section p{
        margin: .75rem 0 0;
        }
    
        .skills-wrapper{
        max-width:500px;
        }

        /* @ 푸터단
        */
        footer{
        border-top: 4px solid #c7c7c7;
        padding-top: 1.5rem;
        text-align: center;
        margin-bottom: 3rem;
        }

        footer p{
        margin: 0;
        font-size: .875rem;
        color: #999;
        }

        footer a{
        font-weight: 700;
        color: #333;
        }

        /* @ SVG 아이콘
        */
        a:hover svg path{
        fill:#333;
        -webkit-transition:all 0.2s ease;
        -moz-transition:all 0.2s ease;
        transition:all 0.2s ease;
        }
        
        /* @ font Family
        */
        .top-header h1,
        section h2{ 
        font-family : "Arial Black", Gadget, sans-serif;
        }
    
        section h4{ 
        font-family : "Courier New", Courier, monospace;	
        }
                     
    </style>      
    `;

}
