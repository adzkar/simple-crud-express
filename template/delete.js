const listAllData = () => {
  fetch('https://bajingan.herokuapp.com/post')
    .then(res => res.json())
    .then(data => console.log(data))
}
