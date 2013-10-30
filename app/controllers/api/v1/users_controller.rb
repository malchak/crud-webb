class Api::V1::UsersController < ApplicationController
	respond_to :json

	def index
		respond_with User.all
	end

	def show
		respond_with User.find(params[:id])
	end

	def create
		respond_with User.create(user_params)
	end

	def edit
		user = User.find(params[:id])
		user.updat_attributes(params[:user])
		render json: user
	end
	
	private

	def user_params
		params.require(:user).permit(:firstName, :lastName, :quote)
	end
end
