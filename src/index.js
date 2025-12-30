import createElement from "./vdomm/createElement.js";
import render from "./vdomm/render.js";
import mount from "./vdomm/mount.js";

const vApp = createElement(
    'div',
    {
        attrs: {id : 'app'},
        children: [
            createElement(
                'img',
                {
                    attrs: {
                     src : "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3bHNreDRjZWNxZ2liaTA4bm4xYzVmejNvdzNiNWdiNzM3aGRiZDhsayZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/MDJ9IbxxvDUQM/giphy.gif"
                    }
                }
            )
        ] 
    }
)

const $app = render(vApp)
mount($app, document.getElementById("app"))
console.log($app)