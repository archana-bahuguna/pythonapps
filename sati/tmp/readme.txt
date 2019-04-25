#***********************************************************
Steps used to move flask app from dev to production:
Followed this website- (Except installing Flask/supervisor/python 3)
http://blog.notfaqs.com/2017/08/aws-ec2-setup-python-3-flask-gunicorn.html
Following steps-(19th May 2018)
#***********************************************************
AWS EC2: Setup Python 3 + Flask + Gunicorn + Supervisor + Nginx on an Amazon Linux AMI instance
Connect to your Linux instance
AWS user guide

Install Python 3.x
First thing first, update yum
sudo yum update

You can check which Python 3.x package is available:
sudo yum list | grep python3

Install Python 3.5 and pip
sudo yum install python35
sudo yum install python35-pip 

Once installed, you can access it via python3 or python35, e.g.
python3 --version 

(Optional) create a symbolic link to pip-3.5 as pip3
sudo ln -s /usr/bin/pip-3.5 /usr/bin/pip3

Setup virtual environment
Create a directory for our project
mkdir my_project
cd my_project

Try to create a virtual environment named env, you would get the following error:
pyvenv3 env
Error: Command '['/home/ec2-user/my_project/env/bin/python3.5', '-Im', 'ensurepip', '--upgrade', '--default-pip']' returned non-zero exit status 1

There's some issues with ensurepip. So we are going to setup the environment without pip, and then install it manually
pyvenv3 --without-pip env
source env/bin/activate
curl https://bootstrap.pypa.io/get-pip.py | python
deactivate
source env/bin/activate

Setup Flask and Gunicorn
Install flask and gunicorn 
pip3 install flask gunicorn

Let's create a simple flask app. Create a file named hello.py with the following content.
from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World!"

if __name__ == "__main__":
    app.run(host="0.0.0.0")

Start the flask server
python3 hello.py

Open another ssh terminal and ping the server. It should return Hello World!
curl http://127.0.0.1:5000

If you want to check this via your browser, you would need to update the security group through AWS Console and open port 5000 to your IP.

Now close the flask server and launch it through gunicorn instead.
gunicorn --bind 0.0.0.0:8000 hello:app

In the command above, hello is name of the script, while app is the name of the flask app within hello.py.

Do another sanity check (notice the port has changed to 8000)
curl http://127.0.0.1:8000

Setup Supervisor
Install Supervisor 
sudo easy_install supervisor

As a sanity check, print a sample Supervisor configuration
echo_supervisord_conf

Save the sample to /etc/
sudo echo_supervisord_conf > /etc/supervisord.conf

We need to make 2 changes to the config
1. Make /tmp/supervisor.sock writable for all users by updating chmod under unix_http_server to avoid this error
[unix_http_server]
chmod=0766

2. Add the following block for our flask app
[program:hello]
command = /home/ec2-user/my_project/env/bin/gunicorn hello:app
directory = /home/ec2-user/my_project/
user = ec2-user

Refresh configuration
supervisorctl reread
supervisorctl update
supervisorctl start hello

You can now use supervisor to control gunicorn
supervisorctl start hello
supervisorctl status hello
supervisorctl stop hello

Do another sanity check
curl http://127.0.0.1:8000

Now make supervisor to run on startup automatically

Create a a new config file
sudo nano /etc/init.d/supervisord

Copy-n-paste the content from here

We need to make 2 changes to the config
1. Update prefix path at line 27 so it can locate supervisor properly
PREFIX=/usr/local

2. Update line 41 from -n to -S (to set a soft limit) in order to avoid this error
ulimit -S 96000

Make it runnable
sudo chmod +x /etc/init.d/supervisord

Make supervisor starts automatically
chkconfig --add supervisord
chkconfig supervisord on
chkconfig --list supervisord 

Now if you reboot the instance, supervisord should start automatically. You can check its status.
service supervisord status

Setup nginx
Install nginx
sudo yum install nginx

Create a server config 
sudo nano /etc/nginx/conf.d/hello.conf

Copy-n-paste the following content
server_names_hash_bucket_size   128;

server {
    listen 80 default_server;
    #server_name _;
    access_log  /var/log/nginx/hello.log;

    location / {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
  }

Edit the main conf
sudo nano /etc/nginx/nginx.conf

(Optional) comment out the first 2 lines of the server block to route all traffic to our hello.conf. Otherwise, you would need to set the proper server_name in hello.conf
server {
#listen 80 default_server;
#listen [::]:80 default_server; 

Check for errors
sudo nginx -t

Make nginx to run on startup automatically
chkconfig nginx on
chkconfig --list nginx

Check status of nginx
service nginx status

Start nginx
sudo service nginx start
sudo service nginx reload

Once you update your security group setting on AWS Console to open up port 80, you should be able to see the Hello World! message when you browse to your EC2 instance public domain name.

For debugging
sudo tail -n 7 /var/log/messages
sudo tail -n 7 /var/log/nginx/access.log
sudo tail -n 7 /var/log/nginx/error.log
sudo tail -n 7 /var/log/nginx/hello.log
ps -u ec2-user

