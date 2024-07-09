export interface RecognizePaymentRecordResponse {
    /**
     * 请求唯一ID
     * @example `43A29C77-405E-4CC0-BC55-EE694AD00655`
     */
    RequestId: string;
    /**
     * 返回数据
     * @example `{"data": {"recipientName": "中国铁路网络有限公司", "totalAmount": "-198.00", "paymentMethod": "花呗", "description": "火车票", "paymentTime": "2019-07-21 12:45", "orderNumber": "2019072122001457521050262559"}, "ftype": 0, "height": 1184, "orgHeight": 1263, "orgWidth": 674, "prism_keyValueInfo": [{"key": "recipientName", "keyProb": 100, "value": "中国铁路网络有限公司", "valuePos": [{"x": 158, "y": 146}, {"x": 448, "y": 136}, {"x": 450, "y": 166}, {"x": 160, "y": 177}], "valueProb": 100}, {"key": "totalAmount", "keyProb": 100, "value": "-198.00", "valuePos": [{"x": 207, "y": 204}, {"x": 406, "y": 198}, {"x": 407, "y": 246}, {"x": 208, "y": 252}], "valueProb": 100}, {"key": "paymentMethod", "keyProb": 100, "value": "花呗", "valuePos": [{"x": 502, "y": 364}, {"x": 561, "y": 362}, {"x": 562, "y": 392}, {"x": 502, "y": 393}], "valueProb": 100}, {"key": "description", "keyProb": 100, "value": "火车票", "valuePos": [{"x": 517, "y": 492}, {"x": 603, "y": 489}, {"x": 604, "y": 518}, {"x": 519, "y": 522}], "valueProb": 100}, {"key": "paymentTime", "keyProb": 100, "value": "2019-07-21 12:45", "valuePos": [{"x": 389, "y": 564}, {"x": 607, "y": 555}, {"x": 608, "y": 580}, {"x": 391, "y": 590}], "valueProb": 100}, {"key": "orderNumber", "keyProb": 100, "value": "2019072122001457521050262559", "valuePos": [{"x": 179, "y": 638}, {"x": 606, "y": 620}, {"x": 607, "y": 644}, {"x": 181, "y": 663}], "valueProb": 100}], "sliceRect": {"x0": 2, "y0": 99, "x1": 631, "y1": 75, "x2": 669, "y2": 1251, "x3": 33, "y3": 1258}, "width": 668}`
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
