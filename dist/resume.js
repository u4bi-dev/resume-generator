(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Resume = factory());
}(this, (function () { 'use strict';

function __extends(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var Renderer = (function () {
    function Renderer() {
    }
    Renderer.prototype.render = function (data) {
        this.data = data;
        this._render();
    };
    Renderer.prototype._render = function () {
        '_render override';
    };
    return Renderer;
}());

function Style() {
    return "\n    <style>\n        @media(min-width: 600px){\n        .top-bar h2{ float:left;margin:0 }\n        .top-bar ul{ border-top: none !important; text-align: right !important; }\n        .top-content{ font-size:1.125rem }\n        }\n        *{ box-sizing: border-box; }\n\n        body{\n        display: block;\n        color: #333;\n        line-height: 1.5;\n        margin:0;\n        }\n\n        .wrapper {\n        max-width: 728px;\n        padding: 0 24px;\n        margin: 0 auto;\n        }\n\n        /* @ \uC0C1\uB2E8 \uD5E4\uB354\uB2E8\n        */\n        .top-header{\n        padding: 1.5rem 0; \n        }\n\n        .top-header h1{\n        text-align: center;\n        font-size: 2.4rem;\n        font-weight: 900;\n        }\n\n        .top-bar{\n        border-top: 4px solid #c7c7c7;\n        border-bottom: 2px solid #c7c7c7;\n        }\n\n        .top-bar h2{\n        font-weight: 300;\n        font-size: 1.75rem;\n        line-height: 2rem;\n        text-align: center;\n        margin: 0 0 .5rem;\n        }\n\n        .top-bar ul{\n        margin: 0;\n        padding: 0;\n        position: relative;\n        top: 4px;\n        text-align: center;\n        border-top: 2px solid #c7c7c7;\n        padding-top: .4rem;\n        }\n\n        .top-bar li{\n        display: inline-block;\n        margin-left: 5px;\n        }\n\n        /* @ \uC139\uD130\uB2E8\n        */\n        section{\n        margin: 0 0 3rem;\n        }\n\n        section header{\n        border-top: 4px solid #c7c7c7;\n        border-bottom: 2px solid #c7c7c7;\n        padding: .2rem 0 .4rem;\n        margin-bottom: 1.5rem;\n        }\n\n        section header h2{\n        font-weight: 900;\n        font-size: 1.75rem;\n        margin: 0;\n        }\n\n        section div{\n        margin-bottom: 2rem;\n        }\n\n        section h4{\n        font-size: 1.025rem;\n        margin: 0 0 .75rem;\n        line-height: 1;\n        }\n\n        section h3{\n        font-weight: 700;\n        margin: 0 0 .75rem;\n        font-size: 1.25rem;\n        line-height: 1;\n        }\n\n        section p{\n        margin: .75rem 0 0;\n        }\n\n        /* @ \uD478\uD130\uB2E8\n        */\n        footer{\n        border-top: 4px solid #c7c7c7;\n        padding-top: 1.5rem;\n        text-align: center;\n        margin-bottom: 3rem;\n        }\n\n        footer p{\n        margin: 0;\n        font-size: .875rem;\n        color: #999;\n        }\n\n        footer a{\n        font-weight: 700;\n        color: #333;\n        }\n\n        /* @ SVG \uC544\uC774\uCF58\n        */\n        a:hover svg path{\n        fill:#333;\n        -webkit-transition:all 0.2s ease;\n        -moz-transition:all 0.2s ease;\n        transition:all 0.2s ease;\n        }        \n    </style>      \n    ";
}

var iconPath = {
    "github": "M14.01,0C6.27,0-0.01,6.28-0.01,14.02 c0,6.19,4.02,11.45,9.59,13.3c0.7,0.13,0.96-0.3,0.96-0.68c0-0.33-0.01-1.21-0.02-2.38c-3.9,0.85-4.72-1.88-4.72-1.88 c-0.64-1.62-1.56-2.05-1.56-2.05c-1.27-0.87,0.1-0.85,0.1-0.85c1.41,0.1,2.15,1.44,2.15,1.44c1.25,2.14,3.28,1.52,4.08,1.16 c0.13-0.91,0.49-1.52,0.89-1.87c-3.11-0.35-6.38-1.56-6.38-6.93c0-1.53,0.55-2.78,1.44-3.76C6.37,9.17,5.89,7.74,6.65,5.81 c0,0,1.18-0.38,3.85,1.44c1.12-0.31,2.32-0.47,3.51-0.47c1.19,0.01,2.39,0.16,3.51,0.47c2.68-1.81,3.85-1.44,3.85-1.44 c0.76,1.93,0.28,3.35,0.14,3.71c0.9,0.98,1.44,2.23,1.44,3.76c0,5.38-3.28,6.57-6.4,6.92c0.5,0.43,0.95,1.29,0.95,2.6 c0,1.87-0.02,3.39-0.02,3.84c0,0.37,0.25,0.81,0.96,0.67c5.56-1.86,9.58-7.11,9.58-13.3C28.03,6.28,21.75,0,14.01,0z",
    "linkdin": "M18.82,15.09v3.61h-2.09v-3.37c0-0.85-0.3-1.42-1.06-1.42c-0.58,0-0.92,0.39-1.07,0.77 c-0.06,0.13-0.07,0.32-0.07,0.51v3.52h-2.09c0,0,0.03-5.71,0-6.3h2.09v0.89c0,0.01-0.01,0.01-0.01,0.02h0.01V13.3 c0.28-0.43,0.77-1.04,1.89-1.04C17.79,12.25,18.82,13.16,18.82,15.09z M9.18,18.7h2.09v-6.3H9.18V18.7z M10.24,9.36 c-0.72,0-1.19,0.47-1.19,1.09c0,0.61,0.45,1.09,1.16,1.09h0.01c0.73,0,1.18-0.48,1.18-1.09C11.39,9.84,10.95,9.36,10.24,9.36z M28,14c0,7.73-6.27,14-14,14S0,21.73,0,14S6.27,0,14,0S28,6.27,28,14z M20.93,8.02c0-0.55-0.46-1-1.02-1H8.09 c-0.57,0-1.02,0.45-1.02,1v11.96c0,0.55,0.46,1,1.02,1h11.82c0.57,0,1.02-0.45,1.02-1V8.02z",
    "facebook": "M14,0C6.27,0,0,6.27,0,14s6.27,14,14,14s14-6.27,14-14S21.73,0,14,0z M20.99,20.22 c0,0.43-0.35,0.77-0.77,0.77h-3.56v-5.42h1.82l0.27-2.11h-2.09v-1.35c0-0.61,0.17-1.03,1.05-1.03l1.12,0V9.2 c-0.19-0.03-0.86-0.08-1.63-0.08c-1.61,0-2.71,0.98-2.71,2.79v1.56h-1.82v2.11h1.82v5.42h-6.7c-0.43,0-0.77-0.35-0.77-0.77V7.78 c0-0.43,0.35-0.77,0.77-0.77h12.44c0.43,0,0.77,0.35,0.77,0.77V20.22z",
    "instagram": "M9.89,7.35h0.49v3.05H9.89V7.35z M7.35,8.26v2.15h0.49V7.44C7.55,7.58,7.35,7.89,7.35,8.26z M18.22,10.3h1.36c0.51,0,0.92-0.41,0.92-0.92V8.38c0-0.51-0.41-0.92-0.92-0.92h-1.36c-0.51,0-0.92,0.41-0.92,0.92v0.99 C17.31,9.87,17.72,10.3,18.22,10.3z M8.2,7.35h0.49v3.05H8.2V7.35z M9.05, 7.35h0.49v3.05H9.05V7.35z M14-0.01 C6.26-0.01-0.01,6.27-0.01,14S6.26,28.01,14,28.01S28.01,21.73,28.01,14S21.74-0.01,14-0.01z M6.63,7.93c0-0.71,0.58-1.3,1.3-1.3 h12.14c0.71,0,1.3,0.59,1.3,1.3v3.05h-4.56c-0.64-0.85-1.66-1.39-2.81-1.39s-2.16,0.55-2.81,1.39H6.63V7.93z M17.09,13.1 c0,1.7-1.39,3.09-3.09,3.09s-3.09-1.39-3.09-3.09s1.39-3.09,3.09-3.09C15.7,10.01,17.09,11.39,17.09,13.1z M21.37,20.07 c0,0.71-0.59,1.3-1.3,1.3H7.93c-0.71,0-1.3-0.59-1.3-1.3V11.5h4.24c-0.25,0.48-0.39,1.02-0.39,1.6c0,1.94,1.58,3.52,3.52,3.52 s3.52-1.58,3.52-3.52c0-0.57-0.14-1.12-0.39-1.6h4.24L21.37,20.07L21.37,20.07z M14,10.58c1.39,0,2.52,1.13,2.52,2.52 s-1.13,2.52-2.52,2.52s-2.52-1.13-2.52-2.52S12.61,10.58,14,10.58z",
    "twitter": "M14,0C6.27,0,0,6.27,0,14s6.27,14,14,14s14-6.27,14-14S21.73,0,14,0z M20.69,10.57 c0.01,0.15,0.01,0.3,0.01,0.45c0,4.56-3.47,9.82-9.82,9.82c-1.95,0-3.76-0.57-5.29-1.55c0.27,0.03,0.54,0.05,0.82,0.05 c1.62,0,3.11-0.55,4.29-1.48c-1.51-0.03-2.79-1.03-3.23-2.4c0.21,0.04,0.43,0.06,0.65,0.06c0.31,0,0.62-0.04,0.91-0.12 c-1.58-0.32-2.77-1.71-2.77-3.39c0-0.01,0-0.03,0-0.04c0.47,0.26,1,0.41,1.56,0.43c-0.93-0.62-1.54-1.68-1.54-2.87 c0-0.63,0.17-1.23,0.47-1.74c1.7,2.09,4.25,3.46,7.12,3.61c-0.06-0.25-0.09-0.52-0.09-0.79c0-1.91,1.55-3.45,3.45-3.45 c0.99,0,1.89,0.42,2.52,1.09c0.79-0.15,1.53-0.44,2.19-0.84c-0.26,0.81-0.81,1.48-1.52,1.91c0.7-0.08,1.36-0.27,1.98-0.54 C21.95,9.47,21.37,10.08,20.69,10.57z"
};

function Template$1(data) {
    function icon(item) {
        var result = '';
        Object.keys(item).map(function (entry) {
            var html = "<li>\n                <a href=\"" + item[entry] + "\" itemprop=\"url\" target=\"_blank\">\n            \n                <svg class=\"icon\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                    viewBox=\"0 0 28 28\" enable-background=\"new 0 0 28 28\" xml:space=\"preserve\" width=\"28\">\n                \n                    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#D1CECC\" d=\"" + iconPath[entry] + "\"/>\n                \n                </svg>\n\n                </a>\n            </li>";
            result += html;
        });
        return result;
    }
    return " \n        <header class=\"top-header\">\n        <h1>" + data.name + "</h1>\n        <div class=\"top-bar\">\n            <h2>" + data.job + "</h2>\n            <ul>\n                " + icon(data.icon) + "\n            </ul>\n        </div>\n        <div class=\"top-content\"><p>" + data.bio + "</p></div>\n        </header>\n    ";
}

function Footer(data) {
    return "\n        <footer>\n        <p><a href=\"mailto:" + data.email + "\">contact me</a>.</p>\n        <p>Made by <a href=\"https://github.com/u4bi\">@u4bi</a>. Fork me on <a href=\"https://github.com/u4bi-dev/resume\">GitHub Repository</a>.</p>\n        </footer>\n    ";
}

function ProjectSection(data) {
    function item() {
        var result = '';
        data.map(function (data) {
            var html = "\n                <div>\n                    <h3>" + data.name + "</a></h3>\n                    <h4>" + data.date.start + " &mdash; " + data.date.end + "</h4>\n                    <p>" + data.bio + "</p>\n                </div>\n            ";
            result += html;
        });
        return result;
    }
    return "\n        <section>\n        <header>\n            <h2>Projects</h2>\n        </header>\n        " + item() + "\n        </section>    \n    ";
}

function SkillSection(data) {
    function item() {
        var result = '';
        data.map(function (data) {
            var html = "\n                <div>\n                    <h4>" + data.title + "</h4>\n                    <p><span>" + data.entry + "</span></p>\n                </div>\n            ";
            result += html;
        });
        return result;
    }
    return " \n        <section>\n        <header>\n            <h2>Skills</h2>\n        </header>\n        " + item() + "         \n        </section>         \n    ";
}

function ExperienceSection(data) {
    function item() {
        var result = '';
        data.map(function (data) {
            var html = "\n                <div>\n                    <h3>" + data.name + "</a></h3>\n                    <h4>" + data.date.start + " &mdash; " + data.date.end + " - " + data.address + "</h4>\n                    <ul>\n                        <li>" + data.bios + "</li>\n                    </ul>\n                </div>\n            ";
            result += html;
        });
        return result;
    }
    return "\n        <section>\n        <header>\n            <h2>Experience</h2>\n        </header>\n        " + item() + "\n        </section>            \n    ";
}

function EduAndCertSection(data) {
    function item() {
        var edu = '', cert = '';
        data.edu.map(function (data) {
            var html = "\n                 <h3>" + data.title + "</h3>\n                 <h4>" + data.name + " &bull; " + data.date.start + " - " + data.date.end + "</h4>\n             ";
            edu += html;
        });
        data.cert.map(function (data) {
            var html = "\n                <h3>" + data.title + "</h3>\n                <h4>" + data.name + " &bull; " + data.date + "</h4>\n            ";
            cert += html;
        });
        return "\n            <div>\n                " + edu + "\n                " + cert + "\n            </div>         \n        ";
    }
    return "\n        <section>\n        <header>\n            <h2>Education and Certification</h2>\n        </header>\n        " + item() + "\n        </section>           \n    ";
}

function Template(data) {
    return "\n        " + Style() + "\n        <div class=\"wrapper\">\n          <!-- \uC0C1\uB2E8 \uD5E4\uB354 -->\n          " + Template$1(data.header) + "\n          <!-- \uD504\uB85C\uC81D\uD2B8 \uC139\uC158 -->\n          " + ProjectSection(data.projects) + "\n          <!-- \uAE30\uC220 \uC139\uC158 -->\n          " + SkillSection(data.skills) + "\n          <!-- \uACBD\uD5D8 \uC139\uC158 -->\n          " + ExperienceSection(data.experience) + " \n          <!-- \uAD50\uC721 \uBC0F \uC778\uC99D \uC139\uC158 -->\n          " + EduAndCertSection(data.eduandcert) + "\n          <!-- \uD558\uB2E8 \uD478\uD130 -->\n          " + Footer(data.footer) + "\n\n        </div>        \n        ";
}

var Resume$1 = (function (_super) {
    __extends(Resume, _super);
    function Resume(parent) {
        _super.call(this);
        if (!parent)
            throw 'invalid parent';
        this.parent = parent;
    }
    Resume.prototype._render = function () {
        if (!this.parent)
            throw 'invalid parent element';
        this.shadowDOM = this.parent.attachShadow({ mode: 'open' });
        this.shadowDOM.innerHTML = Template(this.data);
    };
    return Resume;
}(Renderer));

return Resume$1;

})));
