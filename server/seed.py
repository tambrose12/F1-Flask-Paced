#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc


# Remote library imports
# from faker import Faker

# Local imports
from app import app
from models import db, Driver, Race, DriverRace


with app.app_context():

    Driver.query.delete()
    Race.query.delete()
    DriverRace.query.delete()
    db.session.commit()

    d1 = Driver(name="Lewis Hamilton", car_number=7, team="Mercedes", driver_image = 'https://static.wikia.nocookie.net/f1wikia/images/9/9f/LewisHam.png/revision/latest/scale-to-width-down/1000?cb=20220309110334') 
    d2 = Driver(name="Max Verstappen", car_number=1, team="Red Bull", driver_image = 'https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/verstappen.jpg.img.1920.medium.jpg/1677069646195.jpg')
    d3 = Driver(name="Carlos Sainz", car_number=5, team="Ferrari", driver_image = 'https://static.wikia.nocookie.net/f1wikia/images/6/68/CarlosSainz.png/revision/latest/scale-to-width-down/1000?cb=20220310043500')
    d4 = Driver(name="Fernando Alonso", car_number=10, team="Aston Martin", driver_image = 'https://static.wikia.nocookie.net/f1wikia/images/1/16/FER.jpg/revision/latest/scale-to-width-down/1000?cb=20230305170132')
    d5 = Driver(name="Lando Norris", car_number=4, team="McLaren", driver_image = 'https://static.wikia.nocookie.net/f1wikia/images/e/e6/Memelord.png/revision/latest/scale-to-width-down/1000?cb=20220310044758')

    # # location = db.Column(db.String)
    # #     fastest_time = db.Column(db.Float)
    r1 = Race(location = "Miami International Autodrome", fastest_time =91.361, track_image='https://media.formula1.com/image/upload/f_auto/q_auto/v1677244985/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Miami_Circuit.png.transform/7col-retina/image.png')
    r2 = Race(location = "Circuit de Monaco", fastest_time =72.909, track_image='https://media.formula1.com/image/upload/f_auto/q_auto/v1677244984/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Monoco_Circuit.png.transform/7col-retina/image.png')
    r3 = Race(location = "Silverstone Circuit", fastest_time =87.097, track_image='https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Great_Britain_Circuit.png.transform/7col-retina/image.png')
    r4 = Race(location = "Red Bull Ring", fastest_time =65.619, track_image='https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Austria_Circuit.png.transform/7col-retina/image.png')

    # #  driver_id = db.Column(db.Integer, db.ForeignKey('drivers.id'))
    # #     race_id = db.Column(db.Integer, db.ForeignKey('races.id'))
    # #     time = db.Column(db.Float)
    #     DriverRace.query.delete()

    dr1 = DriverRace(driver_id = 1, race_id = 2, time = 75.505)
    dr2 = DriverRace(driver_id = 2, race_id = 1, time = 92.114)
    dr3 = DriverRace(driver_id = 3, race_id = 3, time = 88.099)
    dr4 = DriverRace(driver_id = 4, race_id = 4, time = 68.101)

    db.session.add_all([r1,r2,r3,r4,dr1,dr2,dr3,dr4, d1,d2,d3,d4,d5])
    db.session.commit()

    # if __name__ == '__main__':
    #     # fake = Faker()
    #     with app.app_context():
    #         print("Starting seed...")
    # Seed code goes here!
