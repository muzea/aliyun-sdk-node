export interface RecognizeTaxiInvoiceResponse {
    /**
     * 请求唯一 ID
     * @example `43A29C77-405E-4CC0-BC55-EE694AD00655`
     */
    RequestId: string;
    /**
     * 返回数据
     * @example `{ 	"data": { 		"licensePlateNumber": "B-30T76", 		"date": "2018-09-28", 		"invoiceCode": "150001583910", 		"invoiceNumber": "22566685", 		"mileage": "22.8", 		"fare": "¥57.00", 		"dropOffTime": "01：40", 		"pickUpTime": "01：19" 	}, 	"ftype": 0, 	"height": 982, 	"orgHeight": 982, 	"orgWidth": 364,  	"width": 364 }`
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
