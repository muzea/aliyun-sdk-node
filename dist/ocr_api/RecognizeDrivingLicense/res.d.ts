export interface RecognizeDrivingLicenseResponse {
    /**
     * 请求唯一 ID
     * @example `43A29C77-405E-4CC0-BC55-EE694AD00655`
     */
    RequestId: string;
    /**
     * 返回数据
     * @example `{"algo_version": "7a6241b9ccce3746da42ff09ee692b27721728bb", "data": {"face": {"algo_version": "7a6241b9ccce3746da42ff09ee692b27721728bb", "angle": 0, "data": {"licenseNumber": "370123198908181127", "name": "庄严", "sex": "男", "nationality": "中国", "address": "山东省诸城市百尺河镇百尺河村", "birthDate": "1989-08-18", "initialIssueDate": "2009-08-07", "approvedType": "C1", "issueAuthority": "山东省潍坊市公安局交通警察支队", "validFromDate": "2015-08-07", "validPeriod": "2015-08-07至2025-08-07"}, "ftype": 0, "height": 416, "orgHeight": 416, "orgWidth": 609, "prism_keyValueInfo": [{"key": "licenseNumber", "keyProb": 100, "value": "370123198908181127", "valuePos": [{"x": 244, "y": 81}, {"x": 453, "y": 80}, {"x": 454, "y": 101}, {"x": 245, "y": 103}], "valueProb": 100}, {"key": "name", "keyProb": 100, "value": "庄严", "valuePos": [{"x": 81, "y": 115}, {"x": 188, "y": 113}, {"x": 188, "y": 142}, {"x": 82, "y": 144}], "valueProb": 100}, {"key": "sex", "keyProb": 100, "value": "男", "valuePos": [{"x": 325, "y": 120}, {"x": 351, "y": 120}, {"x": 351, "y": 146}, {"x": 325, "y": 146}], "valueProb": 100}, {"key": "nationality", "keyProb": 100, "value": "中国", "valuePos": [{"x": 446, "y": 120}, {"x": 496, "y": 120}, {"x": 496, "y": 146}, {"x": 446, "y": 146}], "valueProb": 100}, {"key": "address", "keyProb": 100, "value": "山东省诸城市百尺河镇百尺河村", "valuePos": [{"x": 89, "y": 157}, {"x": 452, "y": 155}, {"x": 452, "y": 182}, {"x": 89, "y": 184}], "valueProb": 100}, {"key": "birthDate", "keyProb": 100, "value": "1989-08-18", "valuePos": [{"x": 242, "y": 234}, {"x": 369, "y": 234}, {"x": 369, "y": 259}, {"x": 242, "y": 259}], "valueProb": 100}, {"key": "initialIssueDate", "keyProb": 100, "value": "2009-08-07", "valuePos": [{"x": 276, "y": 276}, {"x": 402, "y": 276}, {"x": 402, "y": 301}, {"x": 276, "y": 301}], "valueProb": 100}, {"key": "approvedType", "keyProb": 100, "value": "C1", "valuePos": [{"x": 301, "y": 318}, {"x": 361, "y": 318}, {"x": 361, "y": 338}, {"x": 301, "y": 338}], "valueProb": 100}, {"key": "issueAuthority", "keyProb": 100, "value": "山东省潍坊市公安局交通警察支队", "valuePos": [{"x": 36, "y": 235}, {"x": 162, "y": 235}, {"x": 162, "y": 347}, {"x": 36, "y": 347}], "valueProb": 100}, {"key": "validFromDate", "keyProb": 100, "value": "2015-08-07", "valuePos": [{"x": 120, "y": 359}, {"x": 249, "y": 359}, {"x": 249, "y": 384}, {"x": 120, "y": 384}], "valueProb": 100}, {"key": "validPeriod", "keyProb": 100, "value": "2015-08-07至2025-08-07", "valuePos": [{"x": 298, "y": 359}, {"x": 426, "y": 359}, {"x": 426, "y": 384}, {"x": 298, "y": 384}], "valueProb": 100}], "sliceRect": {"x0": 12, "y0": 0, "x1": 620, "y1": 2, "x2": 618, "y2": 411, "x3": 16, "y3": 416}, "width": 609}}, "height": 416, "orgHeight": 416, "orgWidth": 629, "width": 629}`
     */
    Data: string;
    /**
     * 状态码（如果识别成功，Code字段不会返回）
     * @example `unmatchedImageType`
     */
    Code: string;
    /**
     * 错误信息 （如果识别成功，Message字段不会返回）
     * @example `The type of image didn't match the api.`
     */
    Message: string;
}
