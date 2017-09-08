export default function BuilderStyle(){
           
    return `
    <style>
        .builder-wrapper{
            position:fixed;       
            bottom:0;
            right:0;
            color: #fff;
            text-align:center;
            width: 50px;
            height: 50px;
            -webkit-transition:all .2s;
                    transition:all .2s;            
        }

        .builder-wrapper:hover{
            background-color: rgba(0,0,0,0.6);
            -webkit-box-shadow: 2px 2px 2px 2px #000;            
                    box-shadow: 2px 2px 2px 2px #000;   
            width: 220px;
            height: 170px;                     
        }

        .builder-json{
            font-weight: 550;
            line-height: 55px;
            -webkit-transition:all 0.2s ease;
                    transition:all 0.2s ease;
            width:90%;
        }
        .builder-json:hover{
            background-color:rgba(0,0,0,0.7);
            cursor: pointer;
        }

        .builder-wrapper input{ 
            color:#fff;
            border: 0;
            outline:none;
        }
        
        .builder-json,
        .builder-wrapper input{
            margin:auto;
            margin-top:10px;
            border-radius : 3px;
            background-color: #333;
            text-decoration: none;                        
        }
                            
    </style>      
    `;

}
