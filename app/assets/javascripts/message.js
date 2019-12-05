$(function(){
  function buildHTML(message){
    var image = ""
    message.image ? image = `<img src="${message.image}">` :image = ""
  
      var html = `<div class="main-chat__box">
                    <div class="main-chat__box__info">
                      <div class="main-chat__box__info__name">
                        ${message.user_name}
                      </div>
                      <div class="main-chat__box__info__date">
                        ${message.created_at}
                      </div>
                    </div>
                    <div class="main-chat__box__sentence">
                      <p class="lower-message__content">
                        ${message.text}
                      </p>
                      ${image}
                    </div>
                  </div>`
    
    return html;
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST', 
      data:formData,  
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.main-chat').append(html)
      $('.main-chat').animate({scrollTop: $('.main-chat')[0].scrollHeight});
      $('form')[0].reset();
    })
    .fail(function(){
      alert('error')
    })
    .always(function(){
      $(".submit-btn").removeAttr("disabled");
    });
  })
})
