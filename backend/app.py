from flask import Flask, request, jsonify
from flask_cors import CORS
from rag_module import query_rag

app = Flask(__name__)
CORS(app)  # يسمح للطلبات من أي مصدر (مثل React localhost:3000)

@app.route('/api/query', methods=['POST'])
def query():
    data = request.json
    question = data.get('question', '')
    answer = query_rag(question)
    return jsonify({"answer": answer})

if __name__ == '__main__':
    app.run(debug=True)
