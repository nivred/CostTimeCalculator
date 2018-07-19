from flask import Flask, render_template
from data import Rates

app = Flask(__name__)

Rates = Rates()

@app.route('/api/rates')
def rates():
    return Rates

if __name__ == '__main__':
    app.run(debug=True)
