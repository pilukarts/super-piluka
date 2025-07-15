from flask import Flask, jsonify
import json

app = Flask(__name__)

@app.route('/api/level/<int:level_id>')
def get_level(level_id):
    with open('levels.json') as f:
        levels = json.load(f)
    return jsonify(levels.get(str(level_id), {}))

if __name__ == '__main__':
    app.run()
