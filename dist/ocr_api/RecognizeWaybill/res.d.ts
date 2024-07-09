export interface RecognizeWaybillResponse {
    /**
     * 请求唯一 ID
     * @example `43A29C77-405E-4CC0-BC55-EE694AD00655`
     */
    RequestId: string;
    /**
     * 返回数据
     * @example `{ 	"data": { 		"recipientName": "郭涛", 		"recipientPhoneNumber": "1892187****", 		"recipientAddress": "河北省承德市承德县三家镇马场村", 		"senderName": "孙女士", 		"senderPhoneNumber": "1378989****", 		"senderAddress": "上海市浦东新区张江镇" 	}, 	"height": 640, 	"orgHeight": 640, 	"orgWidth": 480,  	"width": 480 }`
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
