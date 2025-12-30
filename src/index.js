import createElement from "./vdomm/createElement";

const vApp = createElement(
    'div',
    {
        attrs: {id : 'app'},
        children: [] 
    }
)
console.log(vApp)