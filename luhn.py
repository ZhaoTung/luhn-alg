from flask import Flask, render_template, url_for

app = Flask(__name__, template_folder=r'./templates')


@app.route('/', methods=['GET'])
def luhn():
    return render_template('cardvail.html')

if __name__ == '__main__':
    app.run(debug=True)
