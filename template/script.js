$(() => {
  getData();
})

function getData() {
  $.get('https://bajingan.herokuapp.com/post', (data) => {
    addData(data)
  })
}

function addData(data) {
  // console.log(data.length);
  if (data.length == 0)
    $('tbody').append("<tr><td colspan='5'><p style='text-align: center'>Empty Data</p></td></tr>")
  else {
    var i = 1;
    data.forEach((element) => {
      var urlEdit = 'https://bajingan.herokuapp.com/edit/'+element._id;
      var urlDelete = 'https://bajingan.herokuapp.com/delete/'+element._id;
      $('tbody').append(`<tr><td>${i}</td><td>${element.title}</td><td>${element.postAt}</td><td>${element.desc}</td><td><a href='${urlEdit}' class='btn btn-success'>Edit</a> &nbsp<a href='${urlDelete}' class='btn btn-danger'>Delete</a></td><tr>`)
      i++;
    })
  }
}
