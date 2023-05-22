# Flask-Paced F1 Racing

# Languages

Python, JavaScript, React, Flask, SQLite3, SQLAlchemy, CSS

# Summary

Created a race-fans web application with mock stats to track drivers and races.

Generated back-end with Python and Flask / SQL Alchemy to create databases from the Python models. Front-end built with React.js components and styled with CSS.

# Frontend

"HOME" page is a simple welcome page.
![image](https://github.com/tambrose12/F1-Flask-Paced/assets/112665601/cede5f30-d7e3-4a82-bd9e-cba7e6923630)

"DRIVERS" page show all drivers and their most basic info. Users have the option to "Ban" a driver, which deletes the driver from the front-end and the back-end database. A form to Add a new driver to the list is at the bottom of the page.

Clicking on a specific driver will take you to that driver's specific link and show more detailed information about the driver.

"RACES" page shows a list of Circuits with their basic information. Similar to the Drivers page, this page has a form to Add a new race/circut to the list. You can also click on a specific track/circut to be taken to that specific circuit link and see more details about that race.

The "STATS" page shows a list of mock stats that show certain drivers' best lap time for a certain Race/Grand Prix. Users also have the ability to add driver stats with a form at the bottom of the page.
![image](https://github.com/tambrose12/F1-Flask-Paced/assets/112665601/62a80c46-45ca-4f1f-9688-c55bea2bdb8d)
![image](https://github.com/tambrose12/F1-Flask-Paced/assets/112665601/1cec67de-691f-446b-9c37-9952f10de8c7)
![image](https://github.com/tambrose12/F1-Flask-Paced/assets/112665601/a1b50ae4-ba24-40e3-b32b-df21e0344a32)
![image](https://github.com/tambrose12/F1-Flask-Paced/assets/112665601/cb317379-6f6d-4c6c-a6d4-a0b25e058704)
![image](https://github.com/tambrose12/F1-Flask-Paced/assets/112665601/b4f9d4ba-3509-497f-9d3a-86cc9aed7e28)
![image](https://github.com/tambrose12/F1-Flask-Paced/assets/112665601/5f8420e0-7c97-48ab-9c25-bee7216d2f70)
![image](https://github.com/tambrose12/F1-Flask-Paced/assets/112665601/6ff1fd95-e3ac-466e-8a53-30a074410cbf)


# Models

Each table in our database has an id column which serves as the primary key.

## Driver

name: Driver's name represented as a string

car_number: Driver's car number represented as an integer
team: Driver's team represented as a string
driver_image: Url for the driver's image represented as a string
country: Driver's country represented as a string
podiums: Driver's podiums represented as an integer
dob: Driver's date of birth represented as an integer
bio: Driver's bio represented as an integer

## Race

location: Race's location represented as a string
fastest_time: Fastest time recorded for this race represented as a float
track_image: Url for the Race's image represented as a string
track_length: Length of race represented as a float
first_event: Race's first event represented as a string
laps: Total laps for the race represented as an integer
details: Race details represented as a string

## DriverRace

driver_id: A foreign key representing the id of the driver assocaited with the join
race_id: A foreign keu representing the id of the race associated with the join
time: Driver's recorded time for the race represented as a float






