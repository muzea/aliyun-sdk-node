export interface RecognizeShoppingReceiptResponse {
    /**
     * 请求唯一 ID
     * @example `43A29C77-405E-4CC0-BC55-EE694AD00655`
     */
    RequestId: string;
    /**
     * 返回数据
     * @example `{"algo_version": "", "data": {"contactNumber": "", "receiptDate": "2020-04-23", "receiptDetails": [{"amount": "5.30", "itemName": "雕牌超效加酶无砖", "quantity": "", "unitPrice": ""}], "receiptTime": "20:26:00", "shopAddress": "", "shopName": "世纪联华椒江巾府大道店", "totalAmount": "5.00元"}, "ftype": 0, "height": 1042, "orgHeight": 1055, "orgWidth": 690, "prism_keyValueInfo": [{"key": "shopName", "keyProb": 99, "value": "世纪联华椒江巾府大道店", "valuePos": [{"x": 56, "y": 208}, {"x": 452, "y": 230}, {"x": 451, "y": 258}, {"x": 54, "y": 236}], "valueProb": 99}, {"key": "receiptDate", "keyProb": 100, "value": "2020-04-23", "valuePos": [{"x": 300, "y": 644}, {"x": 434, "y": 647}, {"x": 434, "y": 675}, {"x": 299, "y": 671}], "valueProb": 100}, {"key": "receiptTime", "keyProb": 100, "value": "20:26:00", "valuePos": [{"x": 442, "y": 648}, {"x": 553, "y": 651}, {"x": 552, "y": 679}, {"x": 441, "y": 676}], "valueProb": 100}, {"key": "contactNumber", "keyProb": 100, "value": "", "valueProb": 100}, {"key": "shopAddress", "keyProb": 100, "value": "", "valueProb": 100}, {"key": "totalAmount", "keyProb": 100, "value": "5.00元", "valuePos": [{"x": 480, "y": 437}, {"x": 574, "y": 435}, {"x": 574, "y": 466}, {"x": 480, "y": 467}], "valueProb": 100}, {"key": "receiptDetails", "keyProb": 100, "value": "[{\"amount\":\"5.30\",\"itemName\":\"雕牌超效加酶无砖\",\"quantity\":\"\",\"unitPrice\":\"\"}]", "valueProb": 100}], "sliceRect": {"x0": 11, "x1": 690, "x2": 689, "x3": 1, "y0": 13, "y1": 43, "y2": 1055, "y3": 1055}, "width": 689}`
     */
    Data: string;
    /**
     * 错误码
     * @example `noPermission`
     */
    Code: string;
    /**
     * 错误提示
     * @example `You are not authorized to perform this operation.`
     */
    Message: string;
}
