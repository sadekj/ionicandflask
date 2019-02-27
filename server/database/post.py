from database.connect import db
from entities.post import Post
posts_table = db['posts']
def addPost(post):
	response = {'id': '0', 'msg' : 'Something went wrong!'}
	id = posts_table.insert(post.__dict__)
	if id and id >0:
		response = {'id': id, 'msg':'Post is added!'}
	return response
	

def getPost(id):
	post = posts_table.find_one(id=id)
	if(post):
		post = Post(**(post))
	return post

def getPostsByuserid(userid):
	enPosts = []
	dbPosts = posts_table.find(userid=userid)
	for post in dbPosts:
		enPosts.append(Post(**(post)))
	return enPosts

def getPosts(limit=0):
	enPosts = []
	dbPosts = None
	if(limit <= 0):
		dbPosts = db.query("select u.username as username, u.fname as fname, u.lname as lname, p.userid as userid, p.content as content from users u, posts p where u.id=p.userid order by userid DESC;")
	else:
		dbPosts = db.query("select u.username as username, u.fname as fname, u.lname as lname, p.userid as userid, p.content as content from users u, posts p where u.id=p.userid order by userid DESC limit "+str(limit)+";")
	for post in dbPosts:
		enPosts.append(Post(**post))
	return enPosts