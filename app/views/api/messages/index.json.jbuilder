json.array! @messages do |message|
  json.content message.content
  json.image message.image.url
  json.created_at message.created_at.strftime("%y年%m月%d日 %h時%m分")
  json.user_name message.user.name
  json.id message.id
end