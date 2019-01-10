console.log('here');

async function request() {
	// const response = await fetch(`https://c1-terminal-metrics.herokuapp.com/leaderboard/get/test`)
	const response = await fetch('https://localhost:8080/time=2019-01-03T01:03:29.586Zto2019-01-11T01:03:29.586Z&season=current#leaderboard', {
		method:"GET"
	})
	console.log(await response.status);
	if (response.status != 200 && response.status != 201)
		return await response.text()
	else {
		data = await response.json()
		console.log(data)
		return data
	}
}

request();
