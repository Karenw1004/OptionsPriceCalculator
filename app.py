from flask import Flask, render_template,jsonify,Blueprint,request
from flask_cors import CORS, cross_origin
import os
from dotenv import load_dotenv
from flask_pymongo import PyMongo
app = Flask(__name__)
load_dotenv(verbose=True)
#need SECRET_KEY to encrypt cookies and save send them to the browser
app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")
app.config["MONGO_DBNAME"] = os.getenv("MONGO_DBNAME")
app.config["MONGO_URI"] = os.getenv("MONGO_URI")

# need CORS(cross origin requests) 
# Explanation can be found at documentation
CORS(app)

#TODO:Register the blueprints(get and post)
mongo = PyMongo(app,retryWrites=False)
@app.route("/all",methods=["GET"])
def all():
    # #collection name
    price = mongo.db.price
    price_all = price.find({})
    data = []
    for element in price_all:
        print("here")
        element['_id'] = str(element['_id'])
        data.append(element)
    return jsonify({ "data" : data })

@app.route("/")
def index():
    # return render_template("index.html")
    return jsonify({"Message" : "Entered Index Page"})

@app.errorhandler(404)
def page_not_found(e):
    return render_template("404.html"),404
    
if __name__ == "__main__":
    app.run(debug=True)