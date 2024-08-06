# HF Market

This is server of the HF Market project

so Setup the project there is few steps

It is recommended to use python 3.8 upto 3.11 

1) First create a virtual env
by using this command in project

*python -m venv venv*

2) In lunix use this command 
    "source ./venv/script/activate"

In windows use this command
"./venv/script/activate"

3) run this command "pip install -r requirements.txt"

5) run command "python manage.py makemigrations"

6) run command "python manage.py migrate"

7) run command "python manage.py runserver 0.0.0.0:8000"

8) open browser and run the project by write this in url http://localhost:8000/join/
