import json
import os
import requests

API_URL = "https://api-inference.huggingface.co/models/mrm8488/bert-tiny-finetuned-sms-spam-detection"
headers = {"Authorization": "Bearer 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"}

def query(payload):
	response = requests.post(API_URL, headers=headers, json=payload)
	return response.json()
	
output = query({
	"inputs": "I like you. I love you",
})

__location__ = os.path.realpath(
    os.path.join(os.getcwd(), os.path.dirname(__file__)))


j = json.dumps(output[0][0])
str = "const obj = " + str(j) + ";" 
file = open(os.path.join(__location__, 'output.js'),'w+')
file.write(str)
print(j)
file.close()