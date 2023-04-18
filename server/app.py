#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import Flask, request, make_response, jsonify
from flask_migrate import Migrate
from flask_restful import Api, Resource
from sqlalchemy.exc import IntegrityError

# Local imports
from config import app, db, api
from models import db, Driver, Race, DriverRace

# Views go here!
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

migrate = Migrate(app, db)

db.init_app(app)
api = Api(app)


class Home(Resource):
    def get(self):
        return "Welcome to F1 Flask Paced"


api.add_resource(Home, '/')


class Drivers(Resource):
    def get(self):
        d_list = []
        for d in Driver.query.all():
            d_dict = {
                'id': d.id,
                'name': d.name,
                'car_number': d.car_number,
                'team': d.team
            }
            d_list.append(d_dict)
        return make_response(d_list, 200)

    def post(self):
        data = request.get_json()
        new_driver = Driver(
            name=data['name'], car_number=data['car_number'], team=data['team'])

        try:
            db.session.add(new_driver)
            db.session.commit()
        except IntegrityError:
            db.session.rollback()
            return make_response({'error': 'All inputs need valid data'})

        driver_dict = new_driver.to_dict()
        return make_response(driver_dict, 201)


api.add_resource(Drivers, '/drivers')


class DriverByID(Resource):
    def get(self, id):
        d = Driver.query.filter_by(id=id).first()
        if d == None:
            return make_response({'error': 'Driver not found'}, 404)
        return make_response(d.to_dict(), 200)

    def patch(self, id):
        data = request.get_json()
        driver = Driver.query.filter_by(id=id).first()
        if driver == None:
            return make_response({'error': 'Driver not found'}, 404)

        for attr in data:
            setattr(driver, attr, data[attr])

        try:
            db.session.add(driver)
            db.session.commit()
        except IntegrityError:
            db.session.rollback()
            return make_response({'error': 'validation errors'}, 422)

        response_dict = driver.to_dict()

        response = make_response(response_dict, 200)

        return response

    def delete(seld, id):
        driver = Driver.query.filter_by(id=id).first()
        if driver == None:
            return make_response({'error': 'Driver not found'}, 404)

        db.session.delete(driver)
        db.session.commit()

        return make_response('Apartment Deleted', 201)


api.add_resource(DriverByID, '/drivers/<int:id>')


class Races(Resource):
    def get(self):
        r_list = []
        for r in Race.query.all():
            r_dict = {
                'id': r.id,
                'location': r.location,
                'fastest_time': r.fastest_time
            }
            r_list.append(r_dict)
        return make_response(r_list, 200)


api.add_resource(Races, '/races')


class RaceByID(Resource):
    def get(self, id):
        r = Race.query.filter_by(id=id).first()
        if r == None:
            return make_response({'error': 'Race not found'}, 404)
        return make_response(r.to_dict(), 200)


api.add_resource(RaceByID, '/races/<int:id>')


class DriverRaces(Resource):
    def get(self):
        dr_list = []
        for dr in DriverRace.query.all():
            dr_dict = {
                'id': dr.id,
                'driver_id': dr.driver_id,
                'race_id': dr.race_id,
                'time': dr.time
            }
            dr_list.append(dr_dict)
        return make_response(dr_list, 200)


api.add_resource(DriverRaces, '/driver_races')

if __name__ == '__main__':
    app.run(port=5555, debug=True)
