from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Home redirects to login page
@app.route('/')
def home():
    return redirect(url_for('login'))

# Login page (GET to show form, POST to process login)
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        # Collect form data
        name = request.form.get('name')
        email = request.form.get('email')
        phone = request.form.get('phone')
        password = request.form.get('password')

        # ⚠️ For now, we don’t validate credentials
        # Later you can add DB validation here
        return redirect(url_for('main_page'))

    return render_template('login.html')

# Main page (after login)
@app.route('/main')
def main_page():
    return render_template('main.html')


if __name__ == '__main__':
    app.run(debug=True)
