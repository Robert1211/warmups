console.log("connected");


const addWord = function(word="word") {
  let $container = $('.container')
  let $word = $(`<p>${word}</p>`).css({
    color: "blue",
    fontSize: "100px",
    left: "20px",
    top: "50px"
  })

  $word.appendTo( $container )
  // .fadeOut(2000, function() {
    // $(this).remove()
  // })
}
