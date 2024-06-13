"""
To get the Nearby food trucks directly from the CLI instead of using Frontend.
"""

import requests


def run(*args):
    if len(args) != 2:
        print("Usage: python manage.py runscript find_food_trucks --script-args <latitude> <longitude>")
        return

    try:
        latitude = float(args[0])
        longitude = float(args[1])
    except ValueError:
        print("Invalid latitude or longitude. Please provide valid numbers.")
        return

    url = f'http://localhost:8000/foodtruck_finder_api/nearby-foodtrucks/?latitude={latitude}&longitude={longitude}'
    response = requests.get(url)

    if response.status_code == 200:
        food_trucks = response.json()
        if food_trucks:
            for truck in food_trucks:
                print(f"Name: {truck['name']}")
                print(f"Description: {truck['description']}")
                print(f"Location: ({truck['latitude']}, {truck['longitude']})")
                print('---')
        else:
            print('No food trucks found at the specified location.')
    else:
        print('Failed to fetch food trucks.')
