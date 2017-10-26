$(document).ready(function () {
	var _authorization = {
		"Authorization": $.cookie('access_token')
	};
	var _appKey = $("body").attr('data-appKey');
});

function editSzPrice() {
	var request = $.ajax({

		url: '/webresources/api/v3/sites/current/securezones/51',
		data: JSON.stringify({
			"name": "SZ API UPDATED 1",
			"sellAccess": true,
			"costPerPeriod": 199.99,
			"orderCountryCode": "AU",
			"cycleType": 1
		}),
		type: "PUT",
		contentType: "application/json",
		headers: {
			"Authorization": BCAPI.Helper.Site.getAccessToken()
		}
	});
	request.done(function (data) {
		console.log("Request Complete");
	});
	request.fail(function (jqXHR) {
		console.log("Request failed.");
		console.log("Error code: " + jqXHR.status);
		console.log("Error text: " + jqXHR.statusText);
		console.log("Response text: " + jqXHR.responseText);
	});

	console.log("Price hard coded to change to 199.99");
	
	//reload the window.
	window.location.reload();

}

