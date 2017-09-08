##### install
```
npm install
```

##### build
```
npm run build
```

##### resume.js
```javascript
    const resume = new Resume(element);
    resume.render(data);
```

##### JSON Rule
```json
{
    "header" : {
        "avatar" : "https://avatars3.githubusercontent.com/u/21367010?v=4&s=460",
        "name": "Myungjae Yu",
        "job" : "Frontend Developer",
        "bio" : "A lonely wolf-like developer",
        "email" : "u4bi@daum.net",
        "icon" : {
            "github"    : "https://github.com/u4bi",
            "linkdin"   : "https://github.com/u4bi",
            "facebook"  : "https://github.com/u4bi",
            "instagram" : "https://github.com/u4bi",
            "twitter"   : "https://github.com/u4bi",
            "website"   : "https://github.com/u4bi"
        }
    },
    "projects" : [
        {
            "name" : "Test Project 1",
            "date" : {
                "start" : "2017/09/06",
                "end"   : "2017/09/07"
            },
            "bio" : "Test Web Project"
        }
    ],
    "skills" : [
        { 
            "title" : "Programming Languages",
            "entry" : [
                "Test Languages 1",
                "Test Languages 2"
            ]
        }
    ],
    "experience" : [
        {
            "name" : "Test Company 1",
            "date" : {
                "start" : "2017/09/06",
                "end"   : "2017/09/07"
            },
            "address" : "Yeoksam, Seoul",
            "bios" : [
                "Test Comment 1",
                "Test Comment 2",
            ]
        }
    ],
    "eduandcert" : {
        "edu" : [
            {
                "title" : "Test College",
                "name"  : "Test lang",
                "date" : {
                    "start" : "2017/09/06",
                    "end" : "2017/09/07"
                }
            }
            
        ],
        "cert" : [
            {
                "title" : "Test Campus",
                "name" : "Test lang",
                "date" : "2017/09/07"
            }
            
        ]
    },
    "footer" : {
        
    }
}

```