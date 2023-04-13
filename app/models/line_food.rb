# 仮注文に関するクラス
class LineFood < ApplicationRecord
  belongs_to :food
  belongs_to :restaurant
  belongs_to :order

  validates :count, numericality: { greater_than: 0 }

  scope :active, -> { where(active: true) }
  scope :other_restaurant, ->(picked_restaurant_id) { where.not(restaurant_id: picked_restaurant_id) }

  # controllerではなくmodelに定義することで様々なところから呼び出すことができる
  def total_amount
    food.price * count
  end
end
