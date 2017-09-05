$(function(){
  $("#login").on('click', function(){
    // id check
    if( $.trim($("#userId").val()) == '' ) {
      alert("아이디를 입력해 주세요.");
      $("#userId").focus();
      return;
    }

    // password check
    if( $.trim($("#password").val()) == '' ) {
      alert("패스워드를 입력해 주세요.");
      $("#password").focus();
      return;
    }

    return;
  });
});
