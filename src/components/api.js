const url = "https://api-inference.huggingface.co/models/mrm8488/bert-tiny-finetuned-sms-spam-detection";

const data = {
    "inputs": "Hello, this is a spam message!"
};

let str;

fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {}
})
    .then(response => response.json())
    .then(data => {
        str = data[0][0].score;
        console.log(str); // Move the console.log() statement here
        exports.str = str; // Export the str variable
    })
    .catch(error => console.error(error));
