$(".service-t-grid .nav-pills .nav-link").click(function(){
    let heading= $(this).attr("data-heading")
    let content = $(this).attr("data-content")
    $(".service-t-grid-content").html(`<h3>${heading}</h3><p>${content}</p>`)
})