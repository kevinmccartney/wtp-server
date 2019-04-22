FROM python:3.6.3

ENV FLASK_APP app.py

COPY ./src/server/ ./

RUN pip install -r /requirements.txt

EXPOSE 5000

CMD [ "uwsgi", "--ini", "app.ini" ]
