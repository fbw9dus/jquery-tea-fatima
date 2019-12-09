// Work on your tasks here



    var submit = $('.submit')
    var modal=$('.modal')
    submit.on('click',event=>{
modal.show()
    })
    modal.on('click',event =>{
        console.log("modal click")
        modal.hide()
    })

      