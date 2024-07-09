export interface RecognizeTradeMarkCertificationResponse {
    /**
     * 请求唯一 ID
     * @example `43A29C77-405E-4CC0-BC55-EE694AD00655`
     */
    RequestId: string;
    /**
     * 返回数据
     * @example `{ 	"data": { 		"validToDate": "", 		"registeredAddress": "天津空港物流加工区外环北路1号2-A008室", 		"registrationDate": "", 		"registrant": "阿里巴巴读光团队", 		"approvedRightScope": "", 		"iprNumber": "3917439", 		"certificateNumber": "2C3917439ZC'" 	}, 	"figure": [{ 		"type": "round_stamp", 		"x": 1128, 		"y": 1689, 		"w": 300, 		"h": 307, 		"box": { 			"x": 0, 			"y": 0, 			"w": 0, 			"h": 0, 			"angle": -90 		}, 		"points": [{ 			"x": 1129, 			"y": 1689 		}, { 			"x": 1428, 			"y": 1691 		}, { 			"x": 1427, 			"y": 1996 		}, { 			"x": 1128, 			"y": 1995 		}] 	}, { 		"type": "round_stamp", 		"x": 1538, 		"y": 714, 		"w": 82, 		"h": 245, 		"box": { 			"x": 0, 			"y": 0, 			"w": 0, 			"h": 0, 			"angle": -90 		}, 		"points": [{ 			"x": 1538, 			"y": 714 		}, { 			"x": 1620, 			"y": 714 		}, { 			"x": 1620, 			"y": 959 		}, { 			"x": 1538, 			"y": 959 		}] 	}], 	"height": 2340, 	"orgHeight": 2340, 	"orgWidth": 1654, 	"prism_keyValueInfo": [{ 		"key": "validToDate", 		"keyProb": 100, 		"value": "", 		"valueProb": 100 	}, { 		"key": "registeredAddress", 		"keyProb": 100, 		"value": "天津空港物流加工区外环北路1号2-A008室", 		"valuePos": [{ 			"x": 962, 			"y": 1651 		}, { 			"x": 962, 			"y": 1684 		}, { 			"x": 421, 			"y": 1684 		}, { 			"x": 421, 			"y": 1651 		}], 		"valueProb": 100 	}, { 		"key": "registrationDate", 		"keyProb": 100, 		"value": "", 		"valueProb": 100 	}, { 		"key": "registrant", 		"keyProb": 100, 		"value": "阿里巴巴读光团队", 		"valuePos": [{ 			"x": 744, 			"y": 1502 		}, { 			"x": 744, 			"y": 1535 		}, { 			"x": 435, 			"y": 1535 		}, { 			"x": 435, 			"y": 1502 		}], 		"valueProb": 100 	}, { 		"key": "approvedRightScope", 		"keyProb": 100, 		"value": "", 		"valueProb": 100 	}, { 		"key": "iprNumber", 		"keyProb": 100, 		"value": "3917439", 		"valuePos": [{ 			"x": 1402, 			"y": 304 		}, { 			"x": 1402, 			"y": 341 		}, { 			"x": 1149, 			"y": 341 		}, { 			"x": 1149, 			"y": 304 		}], 		"valueProb": 100 	}, { 		"key": "certificateNumber", 		"keyProb": 97, 		"value": "2C3917439ZC'", 		"valuePos": [{ 			"x": 505, 			"y": 350 		}, { 			"x": 505, 			"y": 371 		}, { 			"x": 376, 			"y": 371 		}, { 			"x": 376, 			"y": 350 		}], 		"valueProb": 97 	}], 	"width": 1654 }`
     */
    Data: string;
    /**
     * 状态码
     * @example `200`
     */
    Code: string;
    /**
     * 详细信息
     * @example `message`
     */
    Message: string;
}
