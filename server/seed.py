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

    d1 = Driver(name="Lewis Hamilton", car_number=7, team="Mercedes", driver_image = 'https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/hamilton.jpg', country = 'United Kingdom', podiums = 192, dob='07/01/1985', bio = ("Lewis Hamilton is a British racing driver born on January 7, 1985, in Stevenage, England.\n"
                "He is considered one of the greatest drivers in the history of Formula One. He has won seven World Drivers' Championships, tying Michael Schumacher's record for the most\n"
                "championships won by a driver. Hamilton's success in Formula One has made him a household name, and he is widely regarded as one of the most talented and accomplished drivers of his generation.\n"
                "In addition to his racing career, Hamilton is also a fashion icon and has been involved in various fashion and design projects. He has also pursued music interests, released several songs, and collaborated with various artists.\n"
                "Overall, Lewis Hamilton is a true icon in the world of sports, known for his incredible talent and dedication to his craft, as well as his commitment to making a positive impact in the world.")) 
    
    d2 = Driver(name="Max Verstappen", car_number=1, team="Red Bull", driver_image = 'https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/verstappen.jpg', country='Neatherlands', podiums = 80, dob='30/09/1997', bio=("Verstappen began his racing career in karting and quickly progressed to single-seater racing.\n"
                "He made his Formula One debut in 2015 with the Toro Rosso team, becoming the youngest driver ever to compete in the sport at 17.\n"
                "Verstappen made an immediate impact in his rookie season and became the youngest driver to score points in a Grand Prix race.\n"
                "In 2016, Verstappen was promoted to the Red Bull Racing team and won his first Grand Prix race in Spain, becoming the youngest driver ever to win a race in Formula One.\n"
                "He has since established himself as one of the top drivers in the sport, known for his aggressive driving style and ability to overtake his rivals. Off the track,\n"
                "Verstappen is known for his passion for sim racing and his involvement in esports. He has also been involved in various charitable initiatives and has used his platform to raise awareness of environmental issues."))

    d3 = Driver(name="Carlos Sainz", car_number=5, team="Ferrari", driver_image = 'https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/sainz.jpg', country = "Spain", podiums=15, dob="01/09/1994", bio= ("Sainz began his racing career in karting and quickly progressed to single-seater racing. He won the Formula Renault 2.0 Eurocup championship in 2011, and then moved up to Formula Three,\n"
                "where he competed for several years before making his debut in Formula One with the Toro Rosso team in 2015.\n"
                "Sainz quickly showed his potential in Formula One, and was known for his impressive performances and aggressive driving style.\n"
                "In 2017, he moved to the Renault team, where he continued to perform well and establish himself as a top driver.\n"
                "In 2021, he joined the Ferrari team, where he is expected to continue to be a strong contender in the sport.Off the track, Sainz is known for his passion for cycling and his involvement in various charitable initiatives. He is a regular participant in charity cycling events and has used his platform to raise awareness of environmental issues."))

    d4 = Driver(name="Fernando Alonso", car_number=10, team="Aston Martin", driver_image = 'https://static.wikia.nocookie.net/f1wikia/images/1/16/FER.jpg', country="Spain", podiums=101, dob="29/07/1981",bio= ("Alonso began his racing career in karting and quickly progressed to single-seater racing. He made his Formula One debut in 2001 with the Minardi team,\n"
                "and then moved to the Renault team, where he won his first World Drivers' Championship in 2005. Alonso then won the championship again in 2006, becoming the youngest driver ever to win two championships at the time.\n"
                "In addition to his success in Formula One, Alonso has also competed in other racing series, including the World Endurance Championship and the Indianapolis 500. He is known for his versatility as a driver and his ability to adapt quickly to different types of racing.\n"
                "Off the track, Alonso is known for his passion for cycling and involvement in various charitable initiatives. He has also pursued music interests, released several songs, and collaborated with various artists.") )
    
    d5 = Driver(name="Lando Norris", car_number=4, team="McLaren", driver_image = 'https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/norris.jpg', country="United Kingdom", podiums = 6, dob= "13/11/1999", bio=("Norris began his racing career in karting and quickly progressed to single-seater racing. He won the Formula Renault Eurocup championship in 2016 and then moved up to Formula Three,\n"
                "where he finished in second place in the championship in 2017. In 2018, Norris debuted in Formula One with the McLaren team and quickly showed his potential as a top driver.\n"
                "He finished in the points in his first race and went on to score several more points finishes throughout the season. In 2019, Norris continued to perform well,\n"
                "scoring his first career podium finish with a third-place finish in the Bahrain Grand Prix. He also established himself as a fan favorite, known for his outgoing personality and engaging social media presence.\n"
                "Off the track, Norris is known for his love of gaming and his involvement in various charitable initiatives. He has raised money for several charities through his streaming and gaming activities and has also used his platform to raise awareness of mental health issues."))

    d6 = Driver(name="Nico Hulckenberg", car_number=27, team="Haas F1 Team", driver_image = 'https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/hulkenberg.jpg', country="Germany", podiums=0, dob="19/08/1987",bio= ("Hulkenberg began his racing career in karting and quickly progressed to single-seater racing.\n"
                "He won the Formula BMW ADAC championship in 2005 and then moved up to Formula Three, where he won the championship in 2008. In 2010, Hulkenberg debuted in Formula One with the Williams team,\n"
                "showing his potential as a top driver by securing a pole position at the Brazilian Grand Prix. He then moved to Force India, where he scored several podium finishes and established himself as a consistent performer.\n"
                "In 2017, Hulkenberg joined the Renault team, where he continued to perform well and establish himself as a top driver. He also holds the record for the most starts in Formula One without ever achieving a podium finish.\n"  
                "Off the track, Hulkenberg is known for his love of fitness and his involvement in various charitable initiatives. He is a keen triathlete and has participated in several Ironman competitions, and has also raised money for various charities through his racing activities.") )
    
    d7 = Driver(name="Valtteri Bottas", car_number=77, team="Alfa Romeo", driver_image = 'https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/bottas.jpg', country="Finland", podiums=67, dob="28/08/1989", bio=("Bottas began his racing career in karting and quickly progressed to single-seater racing. He won the Formula Renault Eurocup championship in 2008 and then moved up to Formula Three,\n"
                "where he finished third place in the championship in 2009. In 2010, Bottas became a test driver for the Williams team and then became a full-time race driver for the team in 2013.\n"
                "He scored his first podium finish in Formula One in 2014 and then went on to win his first Grand Prix in 2017, driving for the Mercedes team. In 2019, Bottas performed well,\n"
                "winning four Grand Prix and finishing second in the World Drivers' Championship. He also helped Mercedes win the Constructors' Championship for the sixth year.\n"
                "Off the track, Bottas is known for his love of fitness and his involvement in various charitable initiatives. He is a keen triathlete and has participated in several Ironman competitions, and has also raised money for various charities through his racing activities.") )
    
    d8 = Driver(name="Pierre Gasly", car_number=12, team="Alpine", driver_image = 'https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/gasly.jpg', country="France", podiums=3, dob="07/02/1996", bio= ("Gasly began his racing career in karting and quickly progressed to single-seater racing.\n"
                "He won the Eurocup Formula Renault 2.0 championship in 2013 and then moved up to Formula Three, where he finished in second place in the championship in 2015.\n"
                "In 2017, Gasly debuted in Formula One with the Toro Rosso team, where he quickly showed his potential as a top driver. He scored his first championship points in only his fourth race and then finished in fourth place in the Bahrain Grand Prix in 2018.\n"
                "In 2019, Gasly was promoted to the Red Bull Racing team, where he struggled to match the performance of his teammate, Max Verstappen. However, he was then demoted back to the Toro Rosso team for the remainder of the season, where he performed well and even scored his first Grand Prix win at the Italian Grand Prix.") )
    
    d9 = Driver(name="Yuki Tsunoda", car_number=22, team="Alpha Tauri", driver_image = 'https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/tsunoda.jpg', country="Japan", podiums=0, dob="11/05/2000", bio= ("Tsunoda began his racing career in karting and then moved up to single-seater racing.\n"
                "He won the Japanese Formula 4 championship in 2018 and then moved up to the European Formula 3 championship, where he finished in ninth place in the championship in 2019. In 2020, Tsunoda made his debut in the FIA Formula 2 championship,\n"
                "where he quickly impressed by winning his first race at the Red Bull Ring in Austria. He finished in third place in the championship, earning enough points to qualify for a Super License and secure his place in Formula One for the 2021 season.\n"
                "Tsunoda made his debut in Formula One with the AlphaTauri team in 2021, becoming the first Japanese driver to race in the sport since Kamui Kobayashi in 2014. He has shown his potential as a top driver by scoring points in only his second race and continuing to perform well throughout the season.") )
    
    d10 = Driver(name="Alexander Albon", car_number=23, team="Williams", driver_image = 'https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/albon.jpg', country="Thailand", podiums=2, dob="23/03/1996",bio= ("Albon began his racing career in karting and then moved up to single-seater racing.\n"
                "He won the Eurocup Formula Renault 2.0 championship in 2016 and then moved up to the FIA Formula 2 championship,\n"
                "where he finished in third place in the championship in 2018. In 2019, Albon made his debut in Formula One with the Toro Rosso team, where he was impressed with his consistent performances and ability to score points. He was then promoted to the Red Bull Racing team for the remainder of the season, where he continued to perform well.\n"
                "In 2020, Albon continued to drive for the Red Bull Racing team but struggled to match the performance of his teammate, Max Verstappen. Sergio Perez then replaced him for the 2021 season and has since moved to the DTM championship. Off the track, Albon is known for his love of fitness and involvement in various charitable initiatives.\n"
                "He is also a keen gamer and has competed in virtual racing events.") )
    
    d11 = Driver(name="Sergio Perez", car_number=11, team="Red Bull", driver_image = 'https://static.wikia.nocookie.net/f1wikia/images/a/a5/CHE.jpg', country="Mexico", podiums=28, dob="",bio= ("Perez began his kart racing career and then moved up to single-seater racing. He won the British Formula 3 championship in 2010 and then debuted in Formula One with the Sauber team in 2011.\n"
                "Perez established himself as a critical driver for the Force India team, scoring numerous podium finishes and helping the team to achieve strong results in the championship. He continued to drive for the team when it was rebranded as Racing Point in 2019 and then as Aston Martin in 2021.\n"
                "In 2021, Perez was signed by the Red Bull Racing team as a teammate to Max Verstappen. He has impressed with his strong performances and ability to support Verstappen in the team's fight for the championship. Off the track, Perez is known for his involvement in various charitable initiatives,\n"
                "including his Sergio Perez Foundation, which supports children's education and health projects in Mexico."))
    
    d12 = Driver(name="Charles Leclerc", car_number=16, team="Ferrari", driver_image = 'https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/leclerc.jpg', country="Monaco", podiums=24, dob="16/10/1997",bio= ("Leclerc began his racing career in karting and   then moved up to single-seater racing.\n"
                "He won the GP3 Series championship in 2016 and then the FIA Formula 2 championship in 2017 before making his debut in Formula One with the Sauber team in 2018. Leclerc was quickly impressed with his speed and talent,\n"
                "earning a reputation as a driver to watch. He secured his first pole position and a podium finish at the 2019 Bahrain Grand Prix and then went on to score his first victory at the 2019 Belgian Grand Prix.\n"
                "In 2021, Leclerc continues to drive for the Ferrari team and has continued to impress with his performances on the track. He has established himself as one of the key drivers in the championship, regularly competing for podium finishes and challenging the dominant Mercedes and Red Bull teams.\n"
                "Off the track, Leclerc is known for his love of gaming and his involvement in various charitable initiatives. He is also an ambassador for the Prince Albert II of Monaco Foundation, which works to protect the environment and promote sustainable development.") )
    

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

    db.session.add_all([d1,d2,d3,d4,d5, d6, d7, d8, d9, d10, d11, d12])
    db.session.commit()

    # if __name__ == '__main__':
    #     # fake = Faker()
    #     with app.app_context():
    #         print("Starting seed...")
    # Seed code goes here!
