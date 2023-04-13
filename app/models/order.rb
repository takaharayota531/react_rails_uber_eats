# 注文用のクラス
class Order < ApplicationRecord
  has_many :line_foods

  validates :total_price, numericality: { greater_than: 0 }

  def save_with_update_line_foods!(line_foods)
    ActiveRecord::Base.transaction do
      line_foods.each do |_line_food|
        line_foods.update!(active: false, order: self)
      end
      save!
    end
  end
end
