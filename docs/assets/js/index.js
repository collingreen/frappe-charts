let bar_data = {
	"labels": ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
	"datasets": [{
			"color": "orange",
			"values": [50804, 10000, 20000, 61500, 82936.88, 24010, 4000, 6000, 25840, 50804.82, 116820, 6000],
			"formatted": ["₹ 0.00", "₹ 0.00", "₹ 0.00", "₹ 61,500.00", "₹ 82,936.88", "₹ 24,010.00", "₹ 0.00", "₹ 0.00", "₹ 25,840.00", "₹ 5,08,048.82", "₹ 1,16,820.00", "₹ 0.00"],
		},
		// {
		// 	"color": "blue",
		// 	"values": [108048, 0, 0, 101500, 50000.88, 24010, 0, 0, 25840, 108048.82, 51682, 0],
		// 	"formatted": ["₹ 0.00", "₹ 0.00", "₹ 0.00", "₹ 61,500.00", "₹ 82,936.88", "₹ 24,010.00", "₹ 0.00", "₹ 0.00", "₹ 25,840.00", "₹ 5,08,048.82", "₹ 1,16,820.00", "₹ 0.00"],
		// }
	]
}

let line_data = {
	"labels": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
	"datasets": [{
			"color": "green",
			"values": [25, 40, 30, 35, 48, 52, 17]
		}
	]
};

let more_line_data = {
	0: {
		values: [25, 40, 30, 35, 48, 52, 17]
	},
	1: {
		values: [35, 48, 40, 30, 52, 17, 25]
	},
	2: {
		values: [5, 48, 52, 17, 25, 40, 30]
	},
	3: {
		values: [25, 40, 30, 35, 48, 52, 17]
	},
	4: {
		values: [35, 48, 40, 30, 52, 17, 72]
	},
	5: {
		values: [5, 48, 52, 17, 72, 40, 30]
	},
	6: {
		values: [72, 40, 30, 35, 48, 52, 17]
	},
	7: {
		values: [35, 48, 40, 30, 52, 17, 25]
	},
	8: {
		values: [5, 48, 52, 17, 25, 40, 30]
	},
	9: {
		values: [25, 40, 30, 35, 48, 52, 17]
	},
	10: {
		values: [35, 48, 40, 30, 52, 17, 25]
	},
	11: {
		values: [5, 48, 52, 17, 25, 40, 30]
	}
}

let bar_chart = new FrappeChart ({
	parent: "#charts-1",
	data: bar_data,
	type: 'bar',
	height: 140,
	is_navigable: 1
})

let line_chart = new FrappeChart ({
	parent: "#charts-2",
	data: line_data,
	type: 'line',
	height: 140,
	is_navigable: 0
})

bar_chart.parent.addEventListener('data-select', (e) => {
	line_chart.update_values([more_line_data[e.index]]);
});

console.log("chart", bar_chart);