class Airline < ApplicationRecord
  has_many :reviews
  validates :name, presence: true, length: { maximum: 255 }
  before_create :slugify

  def slugify
    self.slug = name.parameterize
  end

  def avg_score
		return 0 unless reviews.count.positive?
	  reviews.average(:score).round(2).to_f
	end

end
