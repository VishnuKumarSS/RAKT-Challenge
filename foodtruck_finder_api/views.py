from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import FoodTruck
from .serializers import FoodTruckSerializer
from geopy.distance import geodesic

class NearbyFoodTrucksView(APIView):

    def get(self, request):
        latitude = float(request.GET.get('latitude'))
        longitude = float(request.GET.get('longitude'))
        all_trucks = FoodTruck.objects.all()
        nearby_trucks = [truck for truck in all_trucks if geodesic((latitude, longitude), (truck.latitude, truck.longitude)).miles < 1]
        serializer = FoodTruckSerializer(nearby_trucks, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
