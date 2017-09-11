var Script18 = {}
Script18.name = "Best Practices Example - Namespaces"
Script18.version = "1.0.0"
Script18.releaseDate = "8 SEP 2017"
Script18.author = "Adrian POTHUAUD"
Script18.AlertInfos = function() {
    alert(
        "Hi from " + Script18.name + " ! This script is currently @ version " +
        Script18.version + " released " + Script18.releaseDate +
        " and wrote by " + Script18.author
    )
}
Script18.ConsoleLogInfos = function() {
    console.log(
        "Hi from " + Script18.name + " ! This script is currently @ version " +
        Script18.version + " released " + Script18.releaseDate +
        " and wrote by " + Script18.author
    )
}

$(function() {
    Script18.AlertInfos()
    Script18.ConsoleLogInfos()
})