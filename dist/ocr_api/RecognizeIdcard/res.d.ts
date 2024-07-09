export interface RecognizeIdcardResponse {
    /**
     * 请求唯一 ID
     * @example `86B83935-DD36-195B-B6E4-D07BE370C8B6`
     */
    RequestId: string;
    /**
     * 返回数据
     * @example `{"algo_version": "48f3e265513a79d5f9bc26f0c010476bbd856b2d", "data": {"face": {"algo_version": "48f3e265513a79d5f9bc26f0c010476bbd856b2d", "angle": 0, "data": {"address": "四川省攀枝花市榕树街277号", "birthDate": "1986年1月9日", "ethnicity": "汉", "idNumber": "510124198809071234", "name": "王銘宇", "sex": "男"}, "ftype": 0, "height": 397, "orgHeight": 397, "orgWidth": 619, "prism_keyValueInfo": [{"key": "name", "keyProb": 100, "value": "王銘宇", "valuePos": [{"x": 139, "y": 75}, {"x": 194, "y": 75}, {"x": 194, "y": 94}, {"x": 139, "y": 94}], "valueProb": 100}, {"key": "sex", "keyProb": 100, "value": "男", "valuePos": [{"x": 139, "y": 122}, {"x": 159, "y": 122}, {"x": 159, "y": 144}, {"x": 139, "y": 144}], "valueProb": 100}, {"key": "ethnicity", "keyProb": 100, "value": "汉", "valuePos": [{"x": 260, "y": 122}, {"x": 282, "y": 122}, {"x": 282, "y": 142}, {"x": 260, "y": 142}], "valueProb": 100}, {"key": "birthDate", "keyProb": 100, "value": "1986年1月9日", "valuePos": [{"x": 141, "y": 170}, {"x": 303, "y": 168}, {"x": 304, "y": 183}, {"x": 142, "y": 185}], "valueProb": 100}, {"key": "address", "keyProb": 100, "value": "四川省攀枝花市榕树街277号", "valuePos": [{"x": 141, "y": 221}, {"x": 385, "y": 221}, {"x": 385, "y": 241}, {"x": 141, "y": 241}], "valueProb": 100}, {"key": "idNumber", "keyProb": 100, "value": "510124198809071234", "valuePos": [{"x": 226, "y": 338}, {"x": 543, "y": 336}, {"x": 543, "y": 355}, {"x": 227, "y": 356}], "valueProb": 100}], "sliceRect": {"x0": 10, "x1": 623, "x2": 629, "x3": 10, "y0": 17, "y1": 18, "y2": 398, "y3": 412}, "warning": {"completenessScore": 100, "isCopy": 0, "isReshoot": 0, "qualityScore": 89.296059, "tamperScore": 99.99968}, "width": 619}}, "height": 416, "orgHeight": 416, "orgWidth": 629, "width": 629}`
     */
    Data: string;
    /**
     * 状态码（如果识别成功，不会返回此字段）
     * @example `如果识别成功，不会返回此字段`
     */
    Code: string;
    /**
     * 详细信息（如果识别成功，不会返回此字段）
     * @example `如果识别成功，不会返回此字段`
     */
    Message: string;
}
