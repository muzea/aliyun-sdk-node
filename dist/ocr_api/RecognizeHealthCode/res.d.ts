export interface RecognizeHealthCodeResponse {
    /**
     * 请求唯一 ID
     * @example `43A29C77-405E-4CC0-BC55-EE694AD00655`
     */
    RequestId: string;
    /**
     * 返回数据
     * @example `{"data": {"name": "读小光", "idNumber": "*********83X", "date": "03-30", "time": "05:58:03", "color": "绿色", "remarks": "绿色:勤洗手、常通风、戴口罩,出现发热咳嗽等症状请及时就医"}, "ftype": 0, "height": 1981, "orgHeight": 1981, "orgWidth": 1237, "prism_keyValueInfo": [{"key": "name", "keyProb": 100, "value": "读小光", "valuePos": [{"x": 153, "y": 213}, {"x": 154, "y": 155}, {"x": 311, "y": 157}, {"x": 310, "y": 216}], "valueProb": 100}, {"key": "idNumber", "keyProb": 100, "value": "*********83X", "valuePos": [{"x": 785, "y": 152}, {"x": 1209, "y": 150}, {"x": 1209, "y": 213}, {"x": 786, "y": 215}], "valueProb": 100}, {"key": "date", "keyProb": 100, "value": "03-30", "valuePos": [{"x": 516, "y": 470}, {"x": 516, "y": 577}, {"x": 179, "y": 577}, {"x": 179, "y": 470}], "valueProb": 100}, {"key": "time", "keyProb": 100, "value": "05:58:03", "valuePos": [{"x": 1053, "y": 470}, {"x": 1054, "y": 574}, {"x": 540, "y": 576}, {"x": 539, "y": 472}], "valueProb": 100}, {"key": "color", "keyProb": 16, "value": "绿色", "valuePos": [{"x": 91, "y": 1473}, {"x": 1112, "y": 1469}, {"x": 1113, "y": 1560}, {"x": 92, "y": 1563}], "valueProb": 100}, {"key": "remarks", "keyProb": 100, "value": "绿色:勤洗手、常通风、戴口罩,出现发热咳嗽等症状请及时就医", "valuePos": [{"x": 91, "y": 1473}, {"x": 1112, "y": 1469}, {"x": 1113, "y": 1560}, {"x": 92, "y": 1563}], "valueProb": 100}], "sliceRect": {"x0": 0, "y0": 0, "x1": 1237, "y1": 0, "x2": 1233, "y2": 1981, "x3": 0, "y3": 1981}, "width": 1237}`
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
