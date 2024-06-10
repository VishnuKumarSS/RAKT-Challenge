# Food Truck Finder

### 1. Create and activate a virtual environment:
```bash
python -m venv venv
source venv/bin/activate   # On Windows use `venv\Scripts\activate`
```

### 2. Install dependencies:
```bash
pip install -r requirements.txt
```

### 3. Run migrations:

```bash
python manage.py migrate
```

### 4. Load food truck data:

```bash
python manage.py runscript import_food_trucks
```

### 5. Start the development server:

```bash
python manage.py runserver
```


## API Usage

**Endpoint usage:** Get Nearby Food Trucks

**URL:** /foodtruck_finder_api/nearby-foodtrucks/

**Method:** GET

**Parameters:**

* latitude (float): Latitude of the location.
* longitude (float): Longitude of the location.

Example Request:
```bash
curl -X GET "http://localhost:8000/foodtruck_finder_api/nearby-foodtrucks/?latitude=37.7749&longitude=-122.4194"
```

Example Response:
```json
[
    {
        "name": "Joe's Tacos",
        "latitude": 37.775,
        "longitude": -122.418,
        "description": "Best tacos in town!"
    },
    {
        "name": "Curry Up Now",
        "latitude": 37.776,
        "longitude": -122.417,
        "description": "Delicious Indian street food."
    },
    ...
]
```
