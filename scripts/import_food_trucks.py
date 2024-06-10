import csv
import os
from django.conf import settings
from foodtruck_finder_api.models import FoodTruck

def run():
    csv_file_path = os.path.join(settings.BASE_DIR, 'datasets', 'food_trucks.csv')
    with open(csv_file_path, newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            FoodTruck.objects.create(
                name=row['Applicant'],
                latitude=float(row['Latitude']),
                longitude=float(row['Longitude']),
                description=row['FoodItems']
            )
    print('Successfully imported food trucks')
