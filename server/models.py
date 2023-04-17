from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    "uq": "uq_%(table_name)s_%(column_0_name)s",
    "ck": "ck_%(table_name)s_%(constraint_name)s",
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy(metadata=metadata)

class Driver(db.Model, SerializerMixin):
    __tablename__ = 'drivers'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    car_number = db.Column(db.Integer)
    team = db.Column(db.String)

    driver_races = db.relationship('DriverRace', backref = 'driver', cascade = 'all, delete-orphan')
    races = association_proxy('driver_races','race')

class Race(db.Model, SerializerMixin):
    __tablename__ = 'races'

    id = db.Column(db.Integer, primary_key=True)
    location = db.Column(db.String)
    fastest_time = db.Column(db.Float)

    driver_races = db.relationship('DriverRace', backref = 'race', cascade = 'all, delete-orphan')
    drivers = association_proxy('driver_races','driver')

class DriverRace(db.Model, SerializerMixin):
    __tablename__ = 'driver_races'

    id = db.Column(db.Integer, primary_key=True)
    driver_id = db.Column(db.Integer, db.ForeignKey('drivers.id'))
    race_id = db.Column(db.Integer, db.ForeignKey('races.id'))
    time = db.Column(db.Float)
