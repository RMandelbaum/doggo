Rails.application.routes.draw do

  root 'application#home'

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'

  resources :users do
    resources :walks, only: [:new, :index, :create]
  end

  resources :dogs do
    resources :walks
  end

  resources :walks


  #nested resources
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
#
# GET `/dogs/:dog_id`
# GET '/dogs/:dog_id/walks/new'
# GET '/dogs/:dog_id/walks', to: 'walks#index'
# POT '/'
# Get '/'
#
# get '/walks'  to: 'Walks#index'
#
# def index
#   if @dog = Dogi.find_by(id: params[:dog_id])
#     @walks = @dog.walks
#   else
#     @walks = Walk.all
#   end
# end
