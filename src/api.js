async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/mrm8488/bert-tiny-finetuned-sms-spam-detection",
		{
			headers: { },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}

query({"inputs": "Dear HDFC USER Your Account Will be block today due to incomplete kyc please open link and update your PAN Card details https://rb.gy/bxdpoz HDFC."}).then((response) => {
	var str=JSON.stringify(response);
	console.log(str);
	// console.log(str[1]['score']);
	// for(var i=0;i<str.length;i++){
	// 	console.log(str[i]);
	// }
});