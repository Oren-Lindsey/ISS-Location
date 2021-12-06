from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template("index.html")

@app.route('/kilometers')
def kilo():
    return render_template("kilo.html")


app.run(host='0.0.0.0', port=8080)
