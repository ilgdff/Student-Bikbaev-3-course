from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('content.html')

@app.route('/greeting')
def greeting():
    return render_template('greeting.html', username="Ильгис")

@app.route('/fruits')
def fruits():
    fruits_list = ['Яблоки', 'Груши', 'Апельсины', 'Бананы', 'Манго']
    return render_template('fruits.html', fruits=fruits_list)

@app.route('/table')
def table():
    developers = [
        ['имя', 'возраст', 'специализация'],
        ['Ильгис', '23', 'Python'],
        ['Борис', '27', 'PHP'],
        ['Владимир', '21', 'C++']
    ]
    return render_template('table.html', developers=developers)

@app.route('/all')
def all_in_one():
    data = {
        'username': "Ильгис",
        'fruits': ['Яблоки', 'Груши', 'Апельсины', 'Бананы', 'Манго'],
        'developers': [
            ['имя', 'возраст', 'специализация'],
            ['Андрей', '23', 'Python'],
            ['Борис', '27', 'PHP'],
            ['Владимир', '21', 'C++']
        ]
    }
    return render_template('all_in_one.html', **data)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001)