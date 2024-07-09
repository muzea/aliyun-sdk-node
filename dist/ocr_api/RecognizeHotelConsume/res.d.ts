export interface RecognizeHotelConsumeResponse {
    /**
     * 请求唯一ID
     * @example `43A29C77-405E-4CC0-BC55-EE694AD00655`
     */
    RequestId: string;
    /**
     * 返回数据
     * @example `{"data": {"fax": "+862162121xxx", "phone": "+862162121xxx", "postCode": "200051", "roomNo": "3209", "checkInDate": "28OCT20", "departureDate": "30OCT20", "memberNumber": "XXXXXX574L", "totalConsumption": "1,000.00", "name": "享敬的陈庆雷先生", "roomType": "", "numberOfGuests": "", "roomRate": "", "address": "", "consumptionDetails": [{"date": "28OCT20", "item": "房费", "consumption": "500.00", "payment": ""}, {"date": "29QQT20", "item": "房费", "consumption": "500.00", "payment": ""}, {"date": "30QQT20", "item": "支付宝XXXXXXXXXXXXX8512", "consumption": "", "payment": "1,000.00"}]}, "height": 2605, "orgHeight": 2605, "orgWidth": 1974, "prism_keyValueInfo": [{"key": "fax", "keyProb": 100, "value": "+862162121888", "valuePos": [{"x": 1163, "y": 317}, {"x": 1380, "y": 298}, {"x": 1382, "y": 322}, {"x": 1166, "y": 342}], "valueProb": 100}, {"key": "phone", "keyProb": 100, "value": "+862162121234", "valuePos": [{"x": 1158, "y": 281}, {"x": 1375, "y": 266}, {"x": 1377, "y": 295}, {"x": 1159, "y": 309}], "valueProb": 100}, {"key": "postCode", "keyProb": 100, "value": "200051", "valuePos": [{"x": 1336, "y": 2253}, {"x": 1434, "y": 2246}, {"x": 1436, "y": 2274}, {"x": 1339, "y": 2282}], "valueProb": 100}, {"key": "roomNo", "keyProb": 100, "value": "3209", "valuePos": [{"x": 1478, "y": 395}, {"x": 1553, "y": 392}, {"x": 1554, "y": 419}, {"x": 1480, "y": 423}], "valueProb": 100}, {"key": "checkInDate", "keyProb": 99, "value": "28OCT20", "valuePos": [{"x": 1480, "y": 435}, {"x": 1632, "y": 425}, {"x": 1634, "y": 454}, {"x": 1481, "y": 465}], "valueProb": 99}, {"key": "departureDate", "keyProb": 100, "value": "30OCT20", "valuePos": [{"x": 1487, "y": 477}, {"x": 1635, "y": 466}, {"x": 1637, "y": 493}, {"x": 1490, "y": 505}], "valueProb": 100}, {"key": "memberNumber", "keyProb": 100, "value": "XXXXXX574L", "valuePos": [{"x": 383, "y": 1302}, {"x": 556, "y": 1283}, {"x": 558, "y": 1307}, {"x": 386, "y": 1327}], "valueProb": 100}, {"key": "totalConsumption", "keyProb": 100, "value": "1,000.00", "valuePos": [{"x": 1459, "y": 1135}, {"x": 1580, "y": 1126}, {"x": 1582, "y": 1155}, {"x": 1462, "y": 1165}], "valueProb": 100}, {"key": "name", "keyProb": 100, "value": "享敬的陈庆雷先生", "valuePos": [{"x": 53, "y": 523}, {"x": 275, "y": 511}, {"x": 277, "y": 548}, {"x": 54, "y": 559}], "valueProb": 100}, {"key": "roomType", "keyProb": 100, "value": "", "valueProb": 100}, {"key": "numberOfGuests", "keyProb": 100, "value": "", "valueProb": 100}, {"key": "roomRate", "keyProb": 100, "value": "", "valueProb": 100}, {"key": "address", "keyProb": 100, "value": "", "valueProb": 100}, {"key": "consumptionDetails", "keyProb": 100, "value": "[{\"date\":\"28OCT20\",\"item\":\"房费\",\"consumption\":\"500.00\",\"payment\":\"\"},{\"date\":\"29QQT20\",\"item\":\"房费\",\"consumption\":\"500.00\",\"payment\":\"\"},{\"date\":\"30QQT20\",\"item\":\"支付宝XXXXXXXXXXXXX8512\",\"consumption\":\"\",\"payment\":\"1,000.00\"}]", "valueProb": 100}], "width": 1974}`
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
