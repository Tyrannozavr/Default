from django.contrib.auth import get_user_model
from rest_framework import serializers

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

    # def create(self, validated_data):
    #     user = User.objects.create(
    #         email=validated_data['email'],
    #         password=validated_data['password'],
    #     )
    #
    #     user.set_password(validated_data['password'])
    #     user.save()
    #     return user
