console.log('here');

let api = 'https://c1-terminal-metrics.herokuapp.com'
// let api = 'https://localhost:8080'

async function request() {
	let str = window.location.search
	let str_split = str.split(/(\?|&|=|to)+/)
	let times = str_split.filter((val) => !isNaN(val[0]))
	let start = moment.utc(times[0]).format('YYYY-MM-DDTHH:mm:ss')
	let end =  moment.utc(times[1]).format('YYYY-MM-DDTHH:mm:ss')

	console.log()

	const response = await fetch(`${api}/${start}_${end}`, {method:"GET"})
	if (response.status != 200 && response.status != 201)
		return await response.text()
	else
		return await response.json()
}


request();
