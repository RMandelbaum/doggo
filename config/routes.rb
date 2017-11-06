Rails.application.routes.draw do

  root 'application#home'

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'
  get '/auth/facebook/callback' => 'sessions#create'


  resources :users do
    resources :walks, only: [:new, :create, :index]
  end

   resources :dogs

  get '/walks/urgent_walks' => 'walks#urgent_walk'





end
