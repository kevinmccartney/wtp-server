from flask import Flask
from flask_restplus import Api, Resource

flask_app = Flask(__name__)
app = Api(app = flask_app)

name_space = app.namespace('main', description='Main APIs')

@app.route('/')
def hello_world():
    return 'Hello, World!'

if __name__ == "__main__":
    app.run(host='0.0.0.0')

