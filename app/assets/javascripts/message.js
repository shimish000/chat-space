$(function(){
  function buildHTML(message){
    var image = ""
    message.image ? image = `<img src="${message.image}">` :image = ""
  
      var html = `<div class="main-chat__box" data-message-id="${message.id}">
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
  }; 

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
  var reloadMessages = function(){
    if (window.location.href.match(/\/groups\/\d+\/messages/)){
    var last_message_id = $('.main-chat__box:last').data("message-id");
    $.ajax({
      url: "api/messages",
      type: "get",
      dataType: "json",
      data: {id: last_message_id}
    })
      .done(function(messages){
        var insertHTML = '';
        $.each(messages,function(i,message){
          insertHTML += buildHTML(message)
        });
        $('.main-chat__box').append(insertHTML)
        $('.main-chat__box').animate({scrollTop: $('.main-chat__box')[0].scrollHeight}, 'fast')
      })
      .fail(function(){
        console.log('error');
      });
    }
  }
  setInterval(reloadMessages, 7000);
});
