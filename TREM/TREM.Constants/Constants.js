const Constants = Object.freeze({
	Default_Configurations: {
		"general.locale": {
			type  : "select",
			value : "zh-TW",
		},
		"accept.eew.CWB": {
			type  : "toggle",
			value : true,
		},
		"accept.eew.NIED": {
			type  : "toggle",
			value : true,
		},
		"accept.eew.JMA": {
			type  : "toggle",
			value : true,
		},
		"accept.eew.KMA": {
			type  : "toggle",
			value : true,
		},
		"accept.eew.SCDZJ": {
			type  : "toggle",
			value : true,
		},
		"accept.eew.FJDZJ": {
			type  : "toggle",
			value : true,
		},
		"shock.smoothing": {
			type  : "toggle",
			value : true,
		},
		"auto.waveSpeed": {
			type  : "toggle",
			value : true,
		},
		"compatibility.hwaccel": {
			type  : "toggle",
			value : true,
		},
		"Real-time.show": {
			type  : "toggle",
			value : true,
		},
		"Real-time.cover": {
			type  : "toggle",
			value : true,
		},
		"eew.show": {
			type  : "toggle",
			value : true,
		},
		"eew.cover": {
			type  : "toggle",
			value : true,
		},
		"audio.eew": {
			type  : "toggle",
			value : true,
		},
		"audio.eew.volume": {
			type  : "range",
			value : 1,
		},
		"audio.report": {
			type  : "toggle",
			value : true,
		},
		"audio.report.volume": {
			type  : "range",
			value : 1,
		},
		"audio.realtime": {
			type  : "toggle",
			value : true,
		},
		"audio.realtime.volume": {
			type  : "range",
			value : 1,
		},
		"Real-time.station": {
			type  : "select",
			value : "L-711-6732340-12",
		},
		"report.cover": {
			type  : "toggle",
			value : true,
		},
		"eew.Intensity": {
			type  : "select",
			value : "0",
		},
		"map.autoZoom": {
			type  : "toggle",
			value : true,
		},
		"report.show": {
			type  : "toggle",
			value : true,
		},
		"earthquake.siteEffect": {
			type  : "toggle",
			value : true,
		},
		"shock.p": {
			type  : "toggle",
			value : true,
		},
		"webhook.url": {
			type  : "string",
			value : "",
		},
		"webhook.body": {
			type  : "string",
			value : JSON.stringify({
				username   : "TREM | 臺灣即時地震監測",
				avatar_url : "https://raw.githubusercontent.com/ExpTechTW/API/%E4%B8%BB%E8%A6%81%E7%9A%84-(main)/image/Icon/ExpTech.png",
				embeds     : [
					{
						author: {
							name: "TREM | 臺灣即時地震監測",
						},
						title       : "",
						description : "%Time% 左右發生顯著有感地震\n\n東經: %EastLongitude% 度\n北緯: %NorthLatitude% 度\n深度: %Depth% 公里\n規模: %Scale%\n\n發報單位: %Provider%\n\n慎防強烈搖晃，就近避難 [趴下、掩護、穩住]",
						color       : 4629503,
						image       : {
							url: "",
						},
					},
				],
			}),
		},
		"location.city": {
			type  : "select",
			value : "臺南市",
		},
		"location.town": {
			type  : "select",
			value : "歸仁區",
		},
		"theme.color": {
			type  : "color",
			value : "#6750A4",
		},
		"theme.dark": {
			type  : "toggle",
			value : true,
		},
	},
});

module.exports = Constants;