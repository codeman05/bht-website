from flask import Flask, render_template, url_for
app = Flask(__name__)

# Page Links
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about/')
def about_us():
    return render_template('about_us.html')

@app.route('/news/')
def air_filtration_news():
    return render_template('air_filtration_news.html')

@app.route('/crew/')
def blue_heaven_crew():
    return render_template('blue_heaven_crew')

@app.route('/faqs/')
def faqs():
    return render_template('faqs')

@app.route('/location/')
def maps():
    return render_template('maps')

@app.route('/services/')
def services_offered():
    return render_template('services_offered')


