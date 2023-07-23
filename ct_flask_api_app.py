# Import the dependencies.
import numpy as np
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from datetime import timedelta, datetime
from flask import Flask, jsonify
import pandas as pd
import pprint

#################################################
# Database Setup
#################################################

engine = create_engine(f"postgresql://postgres:postgres@localhost:5432/ct_overdose_deaths")

# reflect an existing database into a new model
Base = automap_base()

# reflect the tables

conn = engine.connect()
ct = pd.read_sql("SELECT * FROM ct_overdose_deaths", conn)
# print(ct)


#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

@app.route("/api/data")
def dashboard():
    # display charts and map
    ct = pd.read_sql("SELECT * FROM ct_overdose_deaths", conn)
    json_object = ct.set_index('ID').to_dict(orient='index')
    # test_data_list = [data[0] for data in test_data]
    # pprint.pprint(test_data_json[0])
    print("hello")
    
    return json_object





if __name__ == '__main__':
    app.run(threaded=False, debug=True)