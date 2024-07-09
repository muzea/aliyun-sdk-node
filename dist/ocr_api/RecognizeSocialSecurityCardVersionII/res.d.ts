export interface RecognizeSocialSecurityCardVersionIIResponse {
    /**
     * 请求唯一 ID
     * @example `43A29C77-405E-4CC0-BC55-EE694AD00655`
     */
    RequestId: string;
    /**
     * 返回数据
     * @example `{"data": {"title": "山东省人力资源和社会保障厅", "name": "读小光", "idNumber": "123456789098****", "cardNumber": "K1234567", "bankAccount": "621756600000000****", "issueDate": "2019年11月", "validPeriod": "10年"}, "ftype": 0, "height": 773, "orgHeight": 773, "orgWidth": 1080, "prism_keyValueInfo": [{"key": "title", "keyProb": 100, "value": "山东省人力资源和社会保障厅", "valuePos": [{"x": 688, "y": 61}, {"x": 688, "y": 95}, {"x": 338, "y": 98}, {"x": 337, "y": 64}], "valueProb": 100}, {"key": "name", "keyProb": 100, "value": "读小光", "valuePos": [{"x": 426, "y": 181}, {"x": 521, "y": 180}, {"x": 521, "y": 212}, {"x": 427, "y": 214}], "valueProb": 100}, {"key": "idNumber", "keyProb": 100, "value": "123456789098****", "valuePos": [{"x": 580, "y": 238}, {"x": 851, "y": 237}, {"x": 851, "y": 265}, {"x": 581, "y": 267}], "valueProb": 100}, {"key": "cardNumber", "keyProb": 100, "value": "K1234567", "valuePos": [{"x": 727, "y": 289}, {"x": 727, "y": 318}, {"x": 587, "y": 318}, {"x": 587, "y": 289}], "valueProb": 100}, {"key": "bankAccount", "keyProb": 100, "value": "621756600000000****", "valuePos": [{"x": 201, "y": 478}, {"x": 918, "y": 478}, {"x": 918, "y": 535}, {"x": 201, "y": 535}], "valueProb": 100}, {"key": "issueDate", "keyProb": 100, "value": "2019年11月", "valuePos": [{"x": 689, "y": 344}, {"x": 689, "y": 377}, {"x": 519, "y": 377}, {"x": 519, "y": 344}], "valueProb": 100}, {"key": "validPeriod", "keyProb": 100, "value": "10年", "valuePos": [{"x": 588, "y": 398}, {"x": 588, "y": 432}, {"x": 522, "y": 432}, {"x": 522, "y": 398}], "valueProb": 100}], "sliceRect": {"x0": 37, "y0": 98, "x1": 1050, "y1": 105, "x2": 1058, "y2": 760, "x3": 22, "y3": 762}, "width": 1080}`
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
