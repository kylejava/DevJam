from flask import Flask, render_template, flash, request, redirect, url_for, session
import json
import requests
app = Flask(__name__)


@app.route('/' , methods = ['GET' , 'POST'])
def index():
    return render_template('index.html')





@app.route('/user_login' , methods = ['GET' , 'POST'])
def user_index():

    return render_template('login.html')


@app.route('/user_sign_up' , methods = ['GET' , 'POST'])
def user_sign_up():
    return render_template('createAccount.html')

@app.route('/user_table' , methods = ['GET' , 'POST'])
def user_table():
    return render_template('user_table.html')



@app.route('/about' , methods = ['GET' , 'POST'])
def about():
    return render_template('about.html')

if __name__ == "__main__":
    app.run(debug=True)
