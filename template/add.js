$(() => {
  check('input[name=title]', '#titlestatus');
  check('textarea[name=desc]', '#descstatus');
})

function check(param, param2) {
  const input = $(param);
  const status = $(param2);
  input.on('input', () => {
    const length = input.val().length;
    if(length == 0) {
      input.addClass('is-invalid').removeClass('is-valid')
      status.html('Don\'t Empty').removeClass('valid-feedback').addClass('invalid-feedback')
    }
    else {
      input.addClass('is-valid').removeClass('is-invalid')
      status.html('Nice :)').removeClass('invalid-feedback').addClass('valid-feedback')
    }
  })
}
