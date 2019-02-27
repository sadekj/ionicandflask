class Post:
	id = 0
	content = ""
	userid = ""
	datetime = ""
	def __init__(self, id, content, userid, datetime):
		self.id = id
		self.content = content
		self.userid = userid
		self.datetime = datetime
	def __init__(self, **entries): 
		self.__dict__.update(entries)
	def to_json(self):
		return str(self.__dict__).replace("'","\"")
	def __str__(self):
		return self.to_json()
	def __repr__(self):
		return self.__str__()

def validatePost(post):
	validPost = {}
	if 'id' in post:
		validPost['id'] = int(post['id'])
	if 'content' in post:
		validPost['content'] = post['content']
	if 'userid' in post:
		validPost['userid'] = post['userid']
	if 'datetime' in post:
		validPost['datetime'] = post['datetime']

	return Post(**validPost)