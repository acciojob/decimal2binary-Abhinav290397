function decimalToBinary(num) {
  //Write you code here
	let temp = num;
	let str = "";
	while (temp != 1) {
		let rem = temp%2;
		str += rem;
		temp = Math.floor(temp/2);
	}
	str += '1';
    let ans = "";
	for(let i=str.length-1;i>=0;i--){
		ans += str.charAt(i);
	}
	return ans;
}

window.decimalToBinary = decimalToBinary;
