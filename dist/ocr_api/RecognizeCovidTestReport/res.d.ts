export interface RecognizeCovidTestReportResponse {
    /**
     * 请求唯一 ID
     * @example `43A29C77-405E-4CC0-BC55-EE694AD00655`
     */
    RequestId: string;
    /**
     * 返回数据
     * @example `{"data": {"name": "张德周", "idNumber": "612401********22010", "samplingDate": "2022-03-30", "samplingTime": "330", "testOrganization": "", "testItem": "", "testResult": ""}, "ftype": 0, "height": 991, "orgHeight": 998, "orgWidth": 1076, "prism_keyValueInfo": [{"key": "name", "keyProb": 100, "value": "张德周", "valuePos": [{"x": 291, "y": 465}, {"x": 473, "y": 463}, {"x": 474, "y": 526}, {"x": 291, "y": 527}], "valueProb": 100}, {"key": "idNumber", "keyProb": 91, "value": "612401********22010", "valuePos": [{"x": 791, "y": 180}, {"x": 791, "y": 227}, {"x": 300, "y": 226}, {"x": 300, "y": 179}], "valueProb": 91}, {"key": "samplingDate", "keyProb": 100, "value": "2022-03-30", "valuePos": [{"x": 597, "y": 775}, {"x": 597, "y": 826}, {"x": 296, "y": 826}, {"x": 296, "y": 775}], "valueProb": 100}, {"key": "samplingTime", "keyProb": 100, "value": "330", "valuePos": [{"x": 412, "y": 684}, {"x": 413, "y": 741}, {"x": 268, "y": 742}, {"x": 268, "y": 686}], "valueProb": 100}, {"key": "testOrganization", "keyProb": 100, "value": "", "valueProb": 100}, {"key": "testItem", "keyProb": 100, "value": "", "valueProb": 100}, {"key": "testResult", "keyProb": 28, "value": "", "valuePos": [{"x": 417, "y": 873}, {"x": 417, "y": 941}, {"x": 298, "y": 941}, {"x": 298, "y": 873}], "valueProb": 28}], "sliceRect": {"x0": 0, "y0": 10, "x1": 1076, "y1": 6, "x2": 1076, "y2": 995, "x3": 0, "y3": 996}, "width": 1076}`
     */
    Data: string;
    /**
     * 错误码（如果识别成功，不会返回此字段）
     * @example `noPermission`
     */
    Code: string;
    /**
     * 错误提示（如果识别成功，不会返回此字段）
     * @example `You are not authorized to perform this operation.`
     */
    Message: string;
}
