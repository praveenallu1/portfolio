from flask import Flask, jsonify, render_template_string

app = Flask(__name__)

@app.route("/")
def home():
    return render_template_string(
        """
        <h1>Hello, World — I’m Praveen Allu!</h1>
        <p>This Flask site will evolve into my portfolio.</p>
        """
    )

@app.route("/api/health")
def health():
    return jsonify(status="ok")

# run locally only if executed directly (not when imported)
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001, debug=True)
