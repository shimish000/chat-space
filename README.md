# README
## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|group_user_id|integer|null: false, foreign_key: true|
|post_id|integer|null: false, foreign_key: true|
### Association

- belongs_to :group
- belongs_to :user
- belongs_to :user
