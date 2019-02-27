from database.connect import db
from entities.user import User
users_table = db['users']
def addUser(user):
	found = getUser(user.id)
	response = {'msg':'Found user with this ID!'}
	if not found :
		found = getUserByUsername(user.username)
		response = {'msg':'Found user with this username!'}
	if not found :
		found = getUserByEmail(user.email)
		response = {'msg':'Found user with this email!'}
	if not found :
		users_table.insert(user.__dict__)
		response = {'msg':'User added!'}
	return response
	

def getUser(id):
	user = users_table.find_one(id=id)
	if(user):
		user = User(**(user))
		user.password=''
	return user

def getUserByUsername(username):
	user = users_table.find_one(username=username)
	if(user):
		user = User(**(user))
		user.password=''
	return user

def signIn(username,password):
	user = users_table.find_one(username=username)
	if(user):
		user = User(**(user))
		if(password == user.password):
			user.password=''
	return user

def getUserByEmail(email):
	user = users_table.find_one(email=email)
	if(user):
		user = User(**(user))
		user.password=''
	return user