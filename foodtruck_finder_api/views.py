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
        
        # Retrieve all food trucks
        all_trucks = FoodTruck.objects.all()
        
        # Calculate distance and filter nearby food trucks
        nearby_trucks = [(truck, geodesic((latitude, longitude), (truck.latitude, truck.longitude)).miles) for truck in all_trucks]
        nearby_trucks = sorted(nearby_trucks, key=lambda x: x[1])  # Sort by distance
        
        # Ensure at least 5 food trucks are returned
        min_trucks_count = 5
        if len(nearby_trucks) < min_trucks_count:
            return Response({"error": "Not enough food trucks found nearby."}, status=status.HTTP_404_NOT_FOUND)
        
        # Serialize and return the 5 closest food trucks
        serializer = FoodTruckSerializer([truck[0] for truck in nearby_trucks[:min_trucks_count]], many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
