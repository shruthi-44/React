function createElement(reactelement,container){
    const domelement=document.createElement(reactelement.type)
    domelement.innerHTML=reactelement.children
    // domelement.setAttribute('href',reactelement.props.href)
    // domelement.setAttribute('target',reactelement.props.target)
    for(const prop in reactelement.props){
        if(prop!="children"){
            domelement.setAttribute(prop,reactelement.props[prop])
        }
    }
    container.appendChild(domelement)
}

const reactelement={
    type:'a',
    props:{
        href:'https://www.google.com',
        target:'_blank'
    },
    children:'Click me'
}

const maincontainer=document.querySelector('#root')
createElement(reactelement,maincontainer)

