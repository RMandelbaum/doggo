module DogHelper

  def time_format
    Walk.time.strftime('%W: %I %p')
  end

end
