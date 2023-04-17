#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import Flask, request, make_response, jsonify
from flask_migrate import Migrate
from flask_restful import Api, Resource

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
        pass
    
api.add_resource(Drivers, '/drivers')

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

if __name__ == '__main__':
    app.run(port=5555, debug=True)
