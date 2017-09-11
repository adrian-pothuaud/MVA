RetrieveData = {
    SayHello: function() {
        alert("Hello !")
    },
    AttachOnClickEvent: function() {
        $('#clickable').click(function() {
            console.log("button clicked !")
            $.ajax({
                url: 'data19.json',
                dataType: 'json',
                success: function(data) {
                    console.log("Data retrieved from JSON !")
                    console.log(data)
                    var items = []
                    $.each(data, function(key, value) {
                        items.push("<li>key : " + key + " value : " + value + "</li>")
                    })
                    console.log("Items processed")
                    console.log(items)
                    $('#loadedData').html(items.join(''))
                },
                statusCode: {
                    404: function() {
                        alert('There was a problem with the server. Try again soon !')
                    }
                }
            })
        })
    }
}

$(function() {
    RetrieveData.SayHello()
    RetrieveData.AttachOnClickEvent()
})