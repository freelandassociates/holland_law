class ContactUs < ActionMailer::Base
  default from: "from@example.com"

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.contact_us.contact_from_website.subject
  #
  def contact_from_website
    @greeting = "Hi"

    mail to: "to@example.org"
  end
end
