export interface RecognizeBankAccountLicenseResponse {
    /**
     * 请求唯一 ID
     * @example `43A29C77-405E-4CC0-BC55-EE694AD00655`
     */
    RequestId: string;
    /**
     * 返回数据
     * @example `{ 	"data": { 		"bankAccount": "689163495证异户称", 		"legalRepresentative": "王嘉琪", 		"depositaryBank": "中国民生银行股份有限公司上海武宁支行", 		"approvalNumber": "J2900193652101", 		"customerName": "杭州读光技术团队有限责任公司", 		"permitNumber": "2900-02611984", 		"title": "开户许可证" 	}, 	"height": 1000, 	"orgHeight": 1000, 	"orgWidth": 1375, 	"prism_keyValueInfo": [{ 		"key": "bankAccount", 		"keyProb": 96, 		"value": "689163495证异户称", 		"valuePos": [{ 			"x": 505, 			"y": 640 		}, { 			"x": 505, 			"y": 658 		}, { 			"x": 331, 			"y": 658 		}, { 			"x": 331, 			"y": 640 		}], 		"valueProb": 96 	}, { 		"key": "legalRepresentative", 		"keyProb": 100, 		"value": "王嘉琪", 		"valuePos": [{ 			"x": 591, 			"y": 545 		}, { 			"x": 591, 			"y": 562 		}, { 			"x": 522, 			"y": 562 		}, { 			"x": 522, 			"y": 545 		}], 		"valueProb": 100 	}, { 		"key": "depositaryBank", 		"keyProb": 100, 		"value": "中国民生银行股份有限公司上海武宁支行", 		"valuePos": [{ 			"x": 841, 			"y": 513 		}, { 			"x": 1200, 			"y": 505 		}, { 			"x": 1201, 			"y": 550 		}, { 			"x": 842, 			"y": 558 		}], 		"valueProb": 100 	}, { 		"key": "approvalNumber", 		"keyProb": 100, 		"value": "J2900193652101", 		"valuePos": [{ 			"x": 247, 			"y": 257 		}, { 			"x": 411, 			"y": 252 		}, { 			"x": 412, 			"y": 269 		}, { 			"x": 248, 			"y": 274 		}], 		"valueProb": 100 	}, { 		"key": "customerName", 		"keyProb": 100, 		"value": "杭州读光技术团队有限责任公司", 		"valuePos": [{ 			"x": 445, 			"y": 351 		}, { 			"x": 777, 			"y": 351 		}, { 			"x": 777, 			"y": 368 		}, { 			"x": 445, 			"y": 368 		}], 		"valueProb": 100 	}, { 		"key": "permitNumber", 		"keyProb": 100, 		"value": "2900-02611984", 		"valuePos": [{ 			"x": 1175, 			"y": 260 		}, { 			"x": 1175, 			"y": 277 		}, { 			"x": 989, 			"y": 277 		}, { 			"x": 989, 			"y": 260 		}], 		"valueProb": 100 	}, { 		"key": "title", 		"keyProb": 100, 		"value": "开户许可证", 		"valuePos": [{ 			"x": 910, 			"y": 165 		}, { 			"x": 910, 			"y": 204 		}, { 			"x": 454, 			"y": 203 		}, { 			"x": 454, 			"y": 164 		}], 		"valueProb": 100 	}], 	"width": 1375 }`
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
