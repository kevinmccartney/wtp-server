# lifted from
# https://github.com/noirbizarre/flask-restplus/issues/357#issuecomment-396864652
from app import api, app
from flask import json
import json
import os

file_dir = os.path.dirname(os.path.abspath(__file__))

app.config["SERVER_NAME"] = "localhost"
app.app_context().__enter__()

with open(f'{file_dir}/docs/swagger.json', 'w+') as file:
    file.write(json.dumps(api.__schema__, indent=2))
