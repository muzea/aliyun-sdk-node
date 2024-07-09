export interface RecognizeTrainInvoiceResponse {
    /**
     * 请求唯一 ID
     * @example `43A29C77-405E-4CC0-BC55-EE694AD00655`
     */
    RequestId: string;
    /**
     * 返回数据
     * @example `{"data": {"departureStation": "杭州东站", "arrivalStation": "南京南站", "trainNumber": "G7608", "departureTime": "2016年10月15日14:10开", "seatNumber": "12车05F号", "fare": "117.5", "seatType": "二等座", "passengerInfo": "3201061982****0417曹思培", "passengerName": "曹思培", "ticketNumber": "12H010481", "ticketCode": "90041000121016H010481", "saleInfo": "杭州东站售", "ticketGate": "检票口3A"}, "ftype": 0, "height": 900, "orgHeight": 900, "orgWidth": 1200, "prism_keyValueInfo": [{"key": "departureStation", "keyProb": 100, "value": "杭州东站", "valuePos": [{"x": 107, "y": 138}, {"x": 108, "y": 78}, {"x": 288, "y": 81}, {"x": 287, "y": 141}], "valueProb": 100}, {"key": "arrivalStation", "keyProb": 100, "value": "南京南站", "valuePos": [{"x": 576, "y": 147}, {"x": 578, "y": 87}, {"x": 760, "y": 90}, {"x": 759, "y": 151}], "valueProb": 100}, {"key": "trainNumber", "keyProb": 100, "value": "G7608", "valuePos": [{"x": 379, "y": 140}, {"x": 379, "y": 96}, {"x": 537, "y": 99}, {"x": 537, "y": 144}], "valueProb": 100}, {"key": "departureTime", "keyProb": 100, "value": "2016年10月15日14:10开", "valuePos": [{"x": 72, "y": 221}, {"x": 73, "y": 179}, {"x": 467, "y": 187}, {"x": 466, "y": 230}], "valueProb": 100}, {"key": "seatNumber", "keyProb": 100, "value": "12车05F号", "valuePos": [{"x": 564, "y": 233}, {"x": 565, "y": 193}, {"x": 734, "y": 195}, {"x": 733, "y": 235}], "valueProb": 100}, {"key": "fare", "keyProb": 99, "value": "117.5", "valuePos": [{"x": 242, "y": 233}, {"x": 242, "y": 271}, {"x": 78, "y": 273}, {"x": 77, "y": 234}], "valueProb": 99}, {"key": "seatType", "keyProb": 100, "value": "二等座", "valuePos": [{"x": 729, "y": 241}, {"x": 730, "y": 282}, {"x": 620, "y": 283}, {"x": 619, "y": 242}], "valueProb": 100}, {"key": "passengerInfo", "keyProb": 100, "value": "3201061982****0417曹思培", "valuePos": [{"x": 69, "y": 422}, {"x": 69, "y": 376}, {"x": 567, "y": 382}, {"x": 566, "y": 428}], "valueProb": 100}, {"key": "passengerName", "keyProb": 100, "value": "曹思培", "valuePos": [{"x": 69, "y": 422}, {"x": 69, "y": 376}, {"x": 567, "y": 382}, {"x": 566, "y": 428}], "valueProb": 100}, {"key": "ticketNumber", "keyProb": 100, "value": "12H010481", "valuePos": [{"x": 55, "y": 77}, {"x": 56, "y": 33}, {"x": 318, "y": 39}, {"x": 317, "y": 83}], "valueProb": 100}, {"key": "ticketCode", "keyProb": 100, "value": "90041000121016H010481", "valuePos": [{"x": 74, "y": 565}, {"x": 75, "y": 530}, {"x": 404, "y": 536}, {"x": 403, "y": 571}], "valueProb": 100}, {"key": "saleInfo", "keyProb": 100, "value": "杭州东站售", "valuePos": [{"x": 425, "y": 572}, {"x": 426, "y": 530}, {"x": 603, "y": 535}, {"x": 602, "y": 576}], "valueProb": 100}, {"key": "ticketGate", "keyProb": 100, "value": "检票口3A", "valuePos": [{"x": 664, "y": 79}, {"x": 666, "y": 34}, {"x": 833, "y": 40}, {"x": 832, "y": 85}], "valueProb": 100}], "sliceRect": {"x0": 61, "y0": 93, "x1": 1016, "y1": 108, "x2": 1010, "y2": 708, "x3": 51, "y3": 696}, "width": 1200}`
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
