// Work on your tasks here


var modalContent=$('.modal-content')
    var submit = $('.submit')
    var modal=$('.modal')
    submit.on('click',event=>{
modal.show()
    })
    modal.on('click',event =>{
        console.log("modal click")
        modal.hide()
    })

    modalContent.on('click',event=>{
        event.stopPropagation()
      })
     