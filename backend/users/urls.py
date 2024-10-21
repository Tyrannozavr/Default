from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView, TokenVerifyView,
)
from django.urls import path

from users.views import UserRegistrationView, CustomAuthToken, UserAPIView

urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('signUp/', UserRegistrationView.as_view(), name='register'),  #
    path('info/', UserAPIView.as_view(), name='info'),
    # path('login/', CustomAuthToken.as_view(), name='token'),  #
]
