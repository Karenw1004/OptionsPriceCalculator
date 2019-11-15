from flask import Flask, render_template,jsonify,Blueprint
from flask_cors import CORS, cross_origin
import os
from dotenv import load_dotenv

app = Flask(__name__)
load_dotenv(verbose=True)
#need SECRET_KEY to encrypt cookies and save send them to the browser
app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")

# need CORS(cross origin requests) 
# Explanation can be found at documentation
CORS(app)

#Register the blueprints(get and post)

@app.route("/")
def index():
    # return render_template("index.html")
    return jsonify({"Message" : "Entered Index Page"})

@app.errorhandler(404)
def page_not_found(e):
    return render_template("404.html"),404
    
if __name__ == "__main__":
    app.run(debug=True)