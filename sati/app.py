import models
from views import app

if __name__ == '__main__':

    models.db_init()
    #app.run('0.0.0.0', 8001) #to allow reqs to come from public for Flask dev server
    #app.run('0.0.0.0', 80) #Your security settings on Ec2 allow reqs on TCP-5000-5999

#    app.run('127.0.0.1', 8000) #Use for debugging and testing, run nginx with this-not gunicorn

    app.run() #To run with gunicorn + nginx- Ip/port is provided to nginx/gunicorn
