class User:
	id = 0
	username = ''
	password = ''
	fname = ''
	lname = ''
	email = ''
	def __init__(self, id, username, password, fname, lname, email):
		self.id = id
		self.username = username
		self.password = password
		self.fname = fname
		self.lname = lname
		self.email = email
	def __init__(self, **entries): 
		self.__dict__.update(entries)
	def to_json(self):
		return str(self.__dict__).replace("'","\"")
	def __str__(self):
		return self.to_json()
	def __repr__(self):
		return self.__str__()

def validateUser(user):
	validUser = {}
	if 'id' in user:
		validUser['id'] = int(user['id'])
	if 'username' in user:
		validUser['username'] = user['username']
	if 'password' in user:
		validUser['password'] = user['password']
	if 'fname' in user:
		validUser['fname'] = user['fname']
	if 'lname' in user:
		validUser['lname'] = user['lname']
	if 'email' in user:
		validUser['email'] = user['email']

	return User(**validUser)
			