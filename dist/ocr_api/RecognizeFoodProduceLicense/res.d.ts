export interface RecognizeFoodProduceLicenseResponse {
    /**
     * 请求唯一 ID
     * @example `43A29C77-405E-4CC0-BC55-EE694AD00655`
     */
    RequestId: string;
    /**
     * 返回数据
     * @example `{ 	"data": { 		"producerName": "中山市华夏中药饮片有限公司", 		"creditCode": "", 		"legalRepresentative": "杨文君", 		"officeAddress": "广东省中山市火恒开发区雅和南路3号", 		"productionAddress": "广东省中山市火炬开发区雅柏南路3号", 		"foodType": "水果制品(水果制品)：水产制品(非即食其他食品(汤料)***", 		"licenceNumber": "SC11644200000389", 		"regulatoryAuthority": "中山市食品药品监督管理局", 		"regulatoryPersonnel": "由日常监督管理机构指定", 		"reportHotline": "12331", 		"issueAuthority": "中山市食品药品监督管理局", 		"issueOfficer": "徐世平", 		"issueDate": "201603", 		"validToDate": "2021年03月06日" 	}, 	"ftype": 1, 	"height": 1000, 	"orgHeight": 1000, 	"orgWidth": 1414, 	"prism_keyValueInfo": [{ 		"key": "producerName", 		"keyProb": 100, 		"value": "中山市华夏中药饮片有限公司", 		"valuePos": [{ 			"x": 586, 			"y": 313 		}, { 			"x": 586, 			"y": 338 		}, { 			"x": 321, 			"y": 338 		}, { 			"x": 321, 			"y": 313 		}], 		"valueProb": 100 	}, { 		"key": "creditCode", 		"keyProb": 100, 		"value": "", 		"valueProb": 100 	}, { 		"key": "legalRepresentative", 		"keyProb": 100, 		"value": "杨文君", 		"valuePos": [{ 			"x": 381, 			"y": 418 		}, { 			"x": 381, 			"y": 438 		}, { 			"x": 328, 			"y": 438 		}, { 			"x": 328, 			"y": 418 		}], 		"valueProb": 100 	}, { 		"key": "officeAddress", 		"keyProb": 98, 		"value": "广东省中山市火恒开发区雅和南路3号", 		"valuePos": [{ 			"x": 319, 			"y": 453 		}, { 			"x": 584, 			"y": 452 		}, { 			"x": 584, 			"y": 472 		}, { 			"x": 319, 			"y": 473 		}], 		"valueProb": 98 	}, { 		"key": "productionAddress", 		"keyProb": 100, 		"value": "广东省中山市火炬开发区雅柏南路3号", 		"valuePos": [{ 			"x": 602, 			"y": 498 		}, { 			"x": 602, 			"y": 540 		}, { 			"x": 322, 			"y": 540 		}, { 			"x": 322, 			"y": 498 		}], 		"valueProb": 100 	}, { 		"key": "foodType", 		"keyProb": 99, 		"value": "水果制品(水果制品)：水产制品(非即食其他食品(汤料)***", 		"valuePos": [{ 			"x": 324, 			"y": 578 		}, { 			"x": 613, 			"y": 576 		}, { 			"x": 614, 			"y": 640 		}, { 			"x": 325, 			"y": 642 		}], 		"valueProb": 99 	}, { 		"key": "licenceNumber", 		"keyProb": 100, 		"value": "SC11644200000389", 		"valuePos": [{ 			"x": 1058, 			"y": 316 		}, { 			"x": 1058, 			"y": 336 		}, { 			"x": 890, 			"y": 336 		}, { 			"x": 890, 			"y": 316 		}], 		"valueProb": 100 	}, { 		"key": "regulatoryAuthority", 		"keyProb": 100, 		"value": "中山市食品药品监督管理局", 		"valuePos": [{ 			"x": 889, 			"y": 357 		}, { 			"x": 1133, 			"y": 357 		}, { 			"x": 1133, 			"y": 382 		}, { 			"x": 889, 			"y": 382 		}], 		"valueProb": 100 	}, { 		"key": "regulatoryPersonnel", 		"keyProb": 100, 		"value": "由日常监督管理机构指定", 		"valuePos": [{ 			"x": 1116, 			"y": 413 		}, { 			"x": 1116, 			"y": 437 		}, { 			"x": 891, 			"y": 437 		}, { 			"x": 891, 			"y": 413 		}], 		"valueProb": 100 	}, { 		"key": "reportHotline", 		"keyProb": 100, 		"value": "12331", 		"valuePos": [{ 			"x": 1037, 			"y": 495 		}, { 			"x": 1037, 			"y": 515 		}, { 			"x": 917, 			"y": 515 		}, { 			"x": 917, 			"y": 495 		}], 		"valueProb": 100 	}, { 		"key": "issueAuthority", 		"keyProb": 100, 		"value": "中山市食品药品监督管理局", 		"valuePos": [{ 			"x": 894, 			"y": 535 		}, { 			"x": 1137, 			"y": 535 		}, { 			"x": 1137, 			"y": 557 		}, { 			"x": 894, 			"y": 557 		}], 		"valueProb": 100 	}, { 		"key": "issueOfficer", 		"keyProb": 100, 		"value": "徐世平", 		"valuePos": [{ 			"x": 891, 			"y": 615 		}, { 			"x": 957, 			"y": 613 		}, { 			"x": 958, 			"y": 638 		}, { 			"x": 892, 			"y": 640 		}], 		"valueProb": 100 	}, { 		"key": "issueDate", 		"keyProb": 100, 		"value": "201603", 		"valuePos": [{ 			"x": 959, 			"y": 668 		}, { 			"x": 959, 			"y": 684 		}, { 			"x": 847, 			"y": 684 		}, { 			"x": 847, 			"y": 668 		}], 		"valueProb": 100 	}, { 		"key": "validToDate", 		"keyProb": 100, 		"value": "2021年03月06日", 		"valuePos": [{ 			"x": 235, 			"y": 740 		}, { 			"x": 421, 			"y": 739 		}, { 			"x": 422, 			"y": 754 		}, { 			"x": 236, 			"y": 756 		}], 		"valueProb": 100 	}], 	"sliceRect": { 		"x0": 94, 		"y0": 119, 		"x1": 1305, 		"y1": 120, 		"x2": 1307, 		"y2": 927, 		"x3": 95, 		"y3": 934 	}, 	"width": 1414 }`
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
