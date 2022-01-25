// Ngambil link web yang dibuka
var link = document.location.href

// Cek link web kalo url nya ada base 64 yg ciri2nya =aHR
if (link.includes('=aHR')){

	// Pisahin linknya ke array dengan pemisah '='
	let linkParts = link.split('=');

	// Filter array biar cuma ngambil base64nya yg aHR
	let encodedLink = linkParts.filter( el => el.includes('aHR'));
	 
	// Decode linknya pake fungsi atob() bawaan JS
	let decodedLink = atob(encodedLink);

	// Stop loading webnya biar ngga redirect
	window.stop();

	// Redirect ke link aslinya
	document.location.href = decodedLink;
}

// One liner
// !document.location.href.includes('=aHr') ? '' :  window.stop() && (document.location.href(atob(document.location.href.split('=').filter(el => el.startsWith('aHR'))[0])))
