// Code for Block and Inline-Block section


let border = false

const displayNone = () => {
    let these = document.querySelectorAll('.displayOne')
    these.forEach(element => {
        element.style.display = 'none'
    })
}

const displayBlock = () => {
    let these = document.querySelectorAll('.displayOne')
    these.forEach(element => {
        element.style.display = 'block'
    })
}

const displayInlineBlock = () => {
    let these = document.querySelectorAll('.displayOne')
    these.forEach(element => {
        element.style.display = 'inline-block'
    })
}

const displayBorder = () => {
    let these = document.querySelectorAll('.displayOne')
    if (!border){
        these.forEach(element => {
        element.style.border = '1px solid red'
        })
        border = true
    } else {
        these.forEach(element => {
            element.style.border = '0px solid red'
            })
        border = false
    }
    console.log(border)
}

// Code for Display Flex Section

const flexMeFlex = () => {
    flexMe.style.display = 'flex'
    flexMeButton.style = 'background-color: green'
    blockMeButton.style = 'background-color: '
}

const flexMeBlock = () => {
    flexMe.style.display = 'block'
    flexMeButton.style = 'background-color: '
    blockMeButton.style = 'background-color: green'
}

const resetButtons = htmlClass => {
    let these = document.querySelectorAll('.'+htmlClass)
    these.forEach(element => {
        element.style = 'background-color: '
    })
}

const justifyMe = (htmlClass, property, button) => {
    resetButtons(htmlClass)
    button.style = 'background-color: green'
    flexMe.style.justifyContent = property
}

const alignMe = (htmlClass, property, button) => {
    resetButtons(htmlClass)
    button.style = 'background-color: green'
    flexMe.style.alignItems = property
}

// Code Flex Wrap Section

const wrapMeFlex = () => {
    wrap.style.display = 'flex'
    wrapMeFlexButton.style = 'background-color: green'
    wrapMeBlockButton.style = 'background-color: '
    
}

const wrapMeBlock = () => {
    wrap.style.display = 'block'
    wrapMeFlexButton.style = 'background-color: '
    wrapMeBlockButton.style = 'background-color: green'
    wrapMeUnwrapButton.style = 'background-color: '
    wrapMeWrapButton.style = 'background-color: '
}

const wrapIt = () => {
    wrap.style = `display: flex; flex-wrap: wrap; gap: ${gapValue}px`
    wrapMeWrapButton.style = 'background-color: green'
    wrapMeUnwrapButton.style = 'background-color: '
    wrapMeFlexButton.style = 'background-color: green'
    wrapMeBlockButton.style = 'background-color: '
}

const unWrapIt = () => {
    wrap.style = `display: flex; flex-wrap: nowrap; gap: ${gapValue}px`
    wrapMeWrapButton.style = 'background-color: '
    wrapMeUnwrapButton.style = 'background-color: green'
    wrapMeFlexButton.style = 'background-color: green'
    wrapMeBlockButton.style = 'background-color: '
}

let gapValue = 0

const changeGap = amount => {
    gapValue += amount
    flexTheGap(gapValue)
    gapAmount.innerText = gapValue
}

const flexTheGap = amount => {
    wrap.style.gap = `${amount}px`
}

// Code for Box Model

let ninjaMargin = 0
const changeMargin = amount => {
    ninjaMargin += amount
    htmlNinjaMargin.innerText = ninjaMargin
    let these = document.querySelectorAll('.boxNinja')
    these.forEach(element => {
        element.style.margin = `${ninjaMargin}px`
    })
}

let ninjaPadding = 0
const changePadding = amount => {
    ninjaPadding += amount
    htmlNinjaPadding.innerText = ninjaPadding
    let these = document.querySelectorAll('.boxNinja')
    these.forEach(element => {
        element.style.padding = `${ninjaPadding}px`
    })
}

let ninjaBorder = 0
const changeBorder = amount => {
    ninjaBorder += amount
    htmlNinjaBorder.innerText = ninjaBorder
    let these = document.querySelectorAll('.boxNinja')
    these.forEach(element => {
        element.style.border = `${ninjaBorder}px solid red`
    })
}