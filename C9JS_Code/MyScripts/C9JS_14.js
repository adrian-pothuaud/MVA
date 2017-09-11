var changeText = function(_DomElement, newText) {
    _DomElement.text(newText)
}

var changeHTML = function(_DomElement, _html) {
    _DomElement.html(_html)
}

var addBefore = function(_DomElement, _html) {
    _DomElement.prepend(_html)
}

var addAfter = function(_DomElement, _html) {
    _DomElement.append(_html)
}

var changeElementText = function(selector, newText) {
    console.log("Attempting to change text of an element")
    console.log("Given selector : ")
    console.log(selector)
    console.log("Element : ")
    console.log($(selector))
    console.log("Given new Text : " + newText)
    changeText($(selector), newText)
}

var changeElementHTML = function(selector, newHtml) {
    console.log("Attempting to change HTML of an element")
    console.log("Given selector : ")
    console.log(selector)
    console.log("Element : ")
    console.log($(selector))
    console.log("Given new HTML : " + newHtml)
    changeHTML($(selector), newHtml)
}

var addBeforeElement = function(selector, newHtml) {
    console.log("Attempting to prepend HTML to an element")
    console.log("Given selector : ")
    console.log(selector)
    console.log("Element : ")
    console.log($(selector))
    console.log("Given new HTML : " + newHtml)
    addBefore($(selector), newHtml)
}

var addAfterElement = function(selector, newHtml) {
    console.log("Attempting to append HTML to an element")
    console.log("Given selector : ")
    console.log(selector)
    console.log("Element : ")
    console.log($(selector))
    console.log("Given new HTML : " + newHtml)
    addAfter($(selector), newHtml)
}

$(document).ready(function() {
    console.log("Document is ready");
    // attach on-click events
    console.log("Attaching on click events ...")
    $('#section1 > button').click(
        function() {
            console.log("First btn clicked !")
            changeElementText(
                '#section1 > .toBeChanged',
                $('#newText').val()
            )
        }
    )
    console.log("Event attached on first btn")
    $('#section2 > button').click(
        function() {
            console.log("Second btn clicked !")
            changeElementHTML(
                '#section2 > .toBeChanged',
                $('#newHTML').val()
            )
        }
    )
    console.log("Event attached on second btn")
    $('#section3 > button').click(
        function() {
            console.log("third btn clicked !")
            changeElementText(
                '#section3 > .toBeChanged',
                $('#prependHTML').val()
            )
        }
    )
    console.log("Event attached on third btn")
    $('#section4 > button').click(
        function() {
            console.log("fourth btn clicked !")
            changeElementText(
                '#section4 > .toBeChanged',
                $('#appendHTML').val()
            )
        }
    )
    console.log("Event attached on fourth btn")
    $('#section5 > button').click(
        function() {
            console.log("5th button clicked !")
            $('#section5 > .toBeChanged').css("color", $('#newColor').val())
        }
    )
    console.log("Event attached on 5th btn")
})