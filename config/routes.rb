Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :messages, only: [:index]
    end
  end
  root 'root#index'
end
