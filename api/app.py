from flask import Flask
from flask_restplus import Resource, Api, fields

app = Flask(__name__)
api = Api(app, doc=False)

@api.route('/ping')
@api.response(200, 'Success', fields.String)
class Ping(Resource):
    def get(self):
        return 'pong';

if __name__ == '__main__':
    app.run()
