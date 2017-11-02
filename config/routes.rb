Rails.application.routes.draw do

  root 'application#home'

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'

  resources :users
  resources :dogs

  #nested resources
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
