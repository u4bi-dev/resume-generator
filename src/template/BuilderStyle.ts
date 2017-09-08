export default function BuilderStyle(){
           
    return `
    <style>
        .builder-wrapper{
            bottom:0;
            right:0;
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

        .builder-prompt{
            display: none;
            bottom:50%;
            left:50%;
            margin-bottom: -40px;
            margin-left: -110px;
            width: 220px;
            height: 80px;
            background-color: rgba(0,0,0,0.9);
            -webkit-box-shadow: 2px 2px 2px 2px #000;
                    box-shadow: 2px 2px 2px 2px #000;
            border-radius : 3px;
        }
        
        .builder-wrapper,
        .builder-prompt{
            position:fixed;
            color: #fff;
            text-align:center;
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
        
        .builder-prompt p{
            margin:0;
            margin-top: 5px;
        }

        .builder-prompt p,
        .builder-prompt input{
            font-size: .9rem;
        }
        
        .builder-prompt .success{
            margin:auto;
            margin-top: 5px;
            width:fit-content;
            cursor: pointer;
        }

        .builder-wrapper input,
        .builder-prompt input{ 
            color:#fff;
            border: 0;
            outline:none;
        }
        
        .builder-json,
        .builder-wrapper input,
        .builder-prompt input{
            margin:auto;
            margin-top:10px;
            border-radius : 3px;
            background-color: #333;
            text-decoration: none;
        }
        
    </style>
    `;

}
