# chat-space DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|username|string|null: false|
### Association
- has_many :posts
- has_many :groups, through: :groups_users
- has_many :groups_users

## postsテーブル
|Column|Type|Options|
|------|----|-------|
|img|text||
|text|text|null: false|
|user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- has_many :comments

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|groupname|string|null: false|
|username|string||
### Association
- has_many :users, through: :groups_users
- has_many :groups_users

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group
