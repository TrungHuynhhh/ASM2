router.post("/update", function (req, res, next) {
    var id = req.body.id;
    Book.findById(id, function (err, book) {
      if (err) { console.log(err) }
      book.title = req.body.title
      book.description = req.body.description
      book.author = req.body.author
      book.save()
    })
    res.redirect('/')
  })