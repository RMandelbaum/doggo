Rails.application.routes.draw do

  root 'application#home'

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'
  get '/auth/facebook/callback' => 'sessions#create'


  resources :users do
    resources :walks, only: [:new, :index, :create]
  end

  resources :dogs do
    resources :walks
  end

  resources :walks do
    member do 
      put 'reserved'
    end
  end



end
