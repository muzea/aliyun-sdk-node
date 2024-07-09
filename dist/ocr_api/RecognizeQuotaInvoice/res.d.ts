export interface RecognizeQuotaInvoiceResponse {
    /**
     * 请求唯一 ID
     * @example `43A29C77-405E-4CC0-BC55-EE694AD00655`
     */
    RequestId: string;
    /**
     * 返回数据
     * @example `{ 	"data": { 		"invoiceCode": "153001864058", 		"invoiceNumber": "03555555", 		"AmountInWords": "拾元整", 		"Amount": "10.00", 		"title": "云南通用定额发票", 		"formType": "发票联" 	}, 	"ftype": 0, 	"height": 604, 	"orgHeight": 604, 	"orgWidth": 870, 	"prism_keyValueInfo": [{ 		"key": "invoiceCode", 		"keyProb": 100, 		"value": "153001864058", 		"valuePos": [{ 			"x": 364, 			"y": 259 		}, { 			"x": 364, 			"y": 226 		}, { 			"x": 641, 			"y": 232 		}, { 			"x": 641, 			"y": 265 		}], 		"valueProb": 100 	}, { 		"key": "invoiceNumber", 		"keyProb": 100, 		"value": "03555555", 		"valuePos": [{ 			"x": 366, 			"y": 315 		}, { 			"x": 366, 			"y": 282 		}, { 			"x": 560, 			"y": 286 		}, { 			"x": 560, 			"y": 319 		}], 		"valueProb": 100 	}, { 		"key": "AmountInWords", 		"keyProb": 100, 		"value": "拾元整", 		"valuePos": [{ 			"x": 317, 			"y": 448 		}, { 			"x": 319, 			"y": 394 		}, { 			"x": 556, 			"y": 401 		}, { 			"x": 554, 			"y": 455 		}], 		"valueProb": 100 	}, { 		"key": "Amount", 		"keyProb": 100, 		"value": "10.00", 		"valuePos": [{ 			"x": 317, 			"y": 448 		}, { 			"x": 319, 			"y": 394 		}, { 			"x": 556, 			"y": 401 		}, { 			"x": 554, 			"y": 455 		}], 		"valueProb": 100 	}, { 		"key": "title", 		"keyProb": 100, 		"value": "云南通用定额发票", 		"valuePos": [{ 			"x": 154, 			"y": 113 		}, { 			"x": 155, 			"y": 58 		}, { 			"x": 748, 			"y": 73 		}, { 			"x": 746, 			"y": 129 		}], 		"valueProb": 100 	}, { 		"key": "formType", 		"keyProb": 100, 		"value": "发票联", 		"valuePos": [{ 			"x": 349, 			"y": 191 		}, { 			"x": 351, 			"y": 144 		}, { 			"x": 540, 			"y": 148 		}, { 			"x": 539, 			"y": 196 		}], 		"valueProb": 100 	}], 	"sliceRect": { 		"x0": 0, 		"y0": 1, 		"x1": 870, 		"y1": 20, 		"x2": 867, 		"y2": 604, 		"x3": 0, 		"y3": 596 	}, 	"width": 870 }`
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
