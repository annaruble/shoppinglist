from flask import Flask, request, jsonify, Response
import random, json

app = Flask(__name__)

@app.route("/getlist", methods=['GET'])
def getlist():
    with open("jsonStore.txt", 'r') as file:
        lst = file.read()
    return lst
    file.close()
#read json from a files

@app.route("/savelist", methods=['POST'])
def savelist():
    jsondata = request.get_json()
    with open("jsonStore.txt", 'w') as file:
        file.write(json.dumps(lst))
    return "saved"


if __name__ == '__main__':
    app.run()
#write json to a file

#app.run(debug=True, port=5001)

###########
#deploy on pythonanywhere.com
# 1) get local storage going in the new structure
# 2) write the endpoints to save and get
# 3) update your javascript to use fetch to save and 
