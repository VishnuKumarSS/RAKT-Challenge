from django.urls import path
from .views import NearbyFoodTrucksView

urlpatterns = [
    path('nearby-foodtrucks/', NearbyFoodTrucksView.as_view(), name='nearby-food-trucks'),
]
