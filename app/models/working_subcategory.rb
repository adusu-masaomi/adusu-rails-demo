class WorkingSubcategory < ApplicationRecord
  belongs_to :working_category
  def self.ransackable_attributes(auth_object = nil)
    ["created_at", "id", "name", "seq", "updated_at", "working_category_id"]
  end
  def self.ransackable_associations(auth_object = nil)
    ["working_category"]
  end
end
