#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc


# Remote library imports
# from faker import Faker

# Local imports
from app import app
from models import db, Driver, Race, DriverRace


with app.app_context():
        


    d1=Driver(name = "Lewis Hamilton", car_number = 7, team = "Mercedes")
    d2=Driver(name = "Max Verstappen", car_number = 1, team = "Red Bull")
    d3=Driver(name = "Carlos Sainz", car_number = 5, team = "Ferrari")
    d4=Driver(name = "Fernando Alonso", car_number = 10, team = "Aston Martin")


# location = db.Column(db.String)
#     fastest_time = db.Column(db.Float)
    r1 = Race(location = "Miami International Autodrome", fastest_time =91.361)
    r2 = Race(location = "Circuit de Monaco", fastest_time =72.909)
    r3 = Race(location = "Silverstone Circuit", fastest_time =87.097)
    r4 = Race(location = "Red Bull Ring", fastest_time =65.619)
    

#  driver_id = db.Column(db.Integer, db.ForeignKey('drivers.id'))
#     race_id = db.Column(db.Integer, db.ForeignKey('races.id'))
#     time = db.Column(db.Float)
    DriverRace.query.delete()

    dr1 = DriverRace(driver_id = 1, race_id = 2, time = 75.505)
    dr2 = DriverRace(driver_id = 2, race_id = 1, time = 92.114)
    dr3 = DriverRace(driver_id = 3, race_id = 3, time = 88.099)
    dr4 = DriverRace(driver_id = 4, race_id = 4, time = 68.101)



    # db.session.add_all([dr1, dr2, dr3, dr4])
    # db.session.commit()



# if __name__ == '__main__':
#     # fake = Faker()
#     with app.app_context():
#         print("Starting seed...")
        # Seed code goes here!
