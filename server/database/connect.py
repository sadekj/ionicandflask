import dataset

db = dataset.connect('sqlite:///:memory:', engine_kwargs={'connect_args':{'check_same_thread':False}})
# db = dataset.connect('postgresql://postgres:postgres@localhost/CFPBLOG')
