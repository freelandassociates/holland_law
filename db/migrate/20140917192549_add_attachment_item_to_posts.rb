class AddAttachmentItemToPosts < ActiveRecord::Migration
  def self.up
    change_table :refinery_blog_posts do |t|
      t.attachment :item
    end
  end

  def self.down
    drop_attached_file :refinery_blog_posts, :item
  end
end
