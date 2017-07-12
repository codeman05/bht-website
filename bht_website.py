from flask import Flask, render_template, url_for

app = Flask(__name__)

# Page Links
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/mission/')
def our_mission():
    return render_template('our_mission.html')

@app.route('/news/')
def news():
    return render_template('news.html')

@app.route('/crew/')
def crew():
    return render_template('crew.html')

@app.route('/faqs/')
def faqs():
    return render_template('faqs.html')

@app.route('/location/')
def maps():
    return render_template('maps.html')

@app.route('/what-we-do/')
def what_we_do():
    return render_template('what_we_do.html')

@app.route('/services/air-filtration-testing/')
def air_filtration_testing():
    return render_template('air_filtration_testing.html')

@app.route('/services/emissions-testing/')
def emissions_testing():
    return render_template('emissions_testing.html')

@app.route('/services/environmental-testing/')
def environmental_testing():
    return render_template('environmental_testing.html')

@app.route('/services/playday/')
def play_day():
    return render_template('play_day.html')

@app.route('/services/test-dusts/')
def test_dusts():
    return render_template('test_dusts.html')

@app.route('/contact-us/')
def contact_us():
    return render_template('contact_us.html')




