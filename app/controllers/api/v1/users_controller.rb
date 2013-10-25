class Api::V1::UsersController < ApplicationController
	respond_to :json

	def index
		respond_with User.all
	end

	def show
		respond_with User.find(params[:id])
	end

	private

	def user_params
		params.require(:user).permit(:first_name)
	end
end
