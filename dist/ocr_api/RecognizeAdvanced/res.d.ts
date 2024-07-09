export interface RecognizeAdvancedResponse {
    /**
     * 请求唯一 ID
     * @example `43A29C77-405E-4CC0-BC55-EE694AD00655`
     */
    RequestId: string;
    /**
     * 返回数据
     * @example `{ 	"content": "2017年河北区实验小学", 	"height": 3509, 	"orgHeight": 3509, 	"orgWidth": 2512, 	"prism_version": "1.0.9", 	"prism_wnum": 126, 	"prism_wordsInfo": [{ 		"angle": -89, 		"direction": 0, 		"height": 541, 		"pos": [{ 			"x": 982, 			"y": 223 		}, { 			"x": 1522, 			"y": 223 		}, { 			"x": 1522, 			"y": 266 		}, { 			"x": 982, 			"y": 266 		}], 		"prob": 99, 		"width": 43, 		"word": "2017年河北区实验小学", 		"x": 1230, 		"y": -26 	}], 	"width": 2512 }`
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
