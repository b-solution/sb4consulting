Rails.application.routes.draw do

  namespace :back_end do
    resources :events
    resources :services
    get 'admins/index'
    get '/', to: "admins#index"
    resources :contacts, except: [:new, :create, :edit, :destroy, :update] do
      member do
        get 'archive'
      end
    end
    resources :pages, except: [:index, :show, :new, :create, :destroy] do
      collection do
        get 'aboutus'
      end
    end
  end

  get 'services/:identifier',  controller: 'services', action: "show"

  devise_for :admins
  resources :contacts, except: [:index, :edit, :update, :destroy]
  get 'contact-us', to: 'contacts#new'
  get 'our-services', to: 'welcome#services'
  get 'about-us', to: 'welcome#aboutus'
  get 'select_locale', to: 'application#select_locale'
  get 'news', to: 'welcome#news'
  get 'welcome/index'
  root to: 'welcome#index'

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
