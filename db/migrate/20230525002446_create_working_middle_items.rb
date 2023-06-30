class CreateWorkingMiddleItems < ActiveRecord::Migration[6.1]
  def change
    create_table :working_middle_items do |t|
      t.string :working_middle_item_name
      t.string :working_middle_item_short_name
      t.integer :working_middle_item_category_id
      t.integer :working_subcategory_id
      t.string :working_middle_specification
      t.integer :working_unit_id
      t.string :working_unit_name
      t.float :working_unit_price
      t.integer :execution_unit_price
      t.integer :material_id
      t.string :working_material_name
      t.float :execution_material_unit_price
      t.float :material_unit_price
      t.float :execution_labor_unit_price
      t.float :labor_unit_price
      t.integer :labor_unit_price_standard
      t.float :labor_productivity_unit
      t.float :labor_productivity_unit_total
      t.integer :material_quantity
      t.integer :accessory_cost
      t.integer :material_cost_total
      t.integer :labor_cost_total
      t.integer :other_cost
      t.integer :seq

      t.timestamps null: false
    end
  end
end
