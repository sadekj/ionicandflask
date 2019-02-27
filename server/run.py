from flask import *
from entities.user import User, validateUser
from database.user import *
from entities.post import Post, validatePost
from database.post import *
import json
app = Flask(__name__)


@app.route('/')
def index():
	response = jsonify({"msg" : "this is a server for CFP to test their ionic applectaions"})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response

@app.route('/addUser/<user>')
def addUserView(user):
	user = json.loads(user)
	if(user):
		response = addUser(validateUser(user))
		response = jsonify(response)
	else:
		response = jsonify({"id":0, "msg" : "Empty User!"})
	# addUser(user)
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response

@app.route('/user/<id>')
def getUserView(id):
	user = getUser(int(id))
	if(user):
		response = jsonify(user.__dict__)
	else:
		response = jsonify({"id":"0","msg":"User Not Found!"})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response

@app.route('/signIn/<user>')
def signInView(user):
	user = json.loads(user)
	response = {'id': 0, 'msg' : 'Wrong username or password!'}
	if(user):
		user = validateUser(user)
		user = signIn(user.username, user.password)
		if(user):
			response = jsonify(user.__dict__)
		else:
			response = jsonify(response)
	# addUser(user)
	response.headers.add('Access-Control-Allow-Origin', '*')
	print(response)
	return response

@app.route('/addPost/<post>')
def addPostView(post):
	post = json.loads(post)
	if(post):
		response = addPost(validatePost(post))
		response = jsonify(response)
	else:
		response = jsonify({'id': 0, "msg" : "Empty Post!"})
	# addUser(user)
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response

@app.route('/post/<id>')
def getPostView(id):
	post = getPost(int(id))
	if(post):
		response = jsonify(post.__dict__)
	else:
		response = jsonify({"id":0,"msg":"Post Not Found!"})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response

@app.route('/posts/<limit>')
def getPostsView(limit):
	posts = getPosts(int(limit))
	if(posts):
		posts = [post.__dict__ for post in posts]
		response = jsonify(posts)
	else:
		response = jsonify({"id":"0","msg":"Post Not Found!"})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response

if __name__ == '__main__':
	app.debug = True
	app.host = '0.0.0.0'
	app.run()