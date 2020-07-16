class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.string :title
      t.string :description
      t.string :score
      t.arline :belongs_to

      t.timestamps
    end
  end
end
