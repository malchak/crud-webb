class UserSerializer < ActiveModel::Serializer
	attributes :id, :firstName, :lastName, :quote 
end