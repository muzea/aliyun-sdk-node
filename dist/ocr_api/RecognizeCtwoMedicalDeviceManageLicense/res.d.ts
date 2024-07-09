export interface RecognizeCtwoMedicalDeviceManageLicenseResponse {
    /**
     * 请求唯一 ID
     * @example `43A29C77-405E-4CC0-BC55-EE694AD00655`
     */
    RequestId: string;
    /**
     * 返回数据
     * @example `{"algo_server": ["ocr_other/prism?src=test&op=c2_medical_device_op_record&pro=basic,nostamp,figure,key_eng&requestid=9391C776-9DA9-5B31-90E1-045BF472A7BD"], "data": {"recordNumber": "穗食药监械经营各20180000号", "companyName": "广东某某集团有限公司", "officeAddress": "广州市天河区广棠西路", "businessAddress": "广州市天河区广案西路", "warehouseAddress": "广州市天河区广西路", "businessType": "批零兼营", "legalRepresentative": "读小光", "responsiblePerson": "读大光", "businessScope": "批零兼营：第二类医疗器械(不含体外诊断试剂)**", "recordationAuthority": "", "recordationDate": "2018年08月98日"}, "figure": [{"type": "round_stamp", "x": 527, "y": 787, "w": 150, "h": 152, "box": {"x": 602, "y": 863, "w": 151, "h": 149, "angle": -89}, "points": [{"x": 528, "y": 787}, {"x": 677, "y": 788}, {"x": 676, "y": 939}, {"x": 527, "y": 938}]}], "height": 998, "orgHeight": 998, "orgWidth": 740, "prism_keyValueInfo": [{"key": "recordNumber", "keyProb": 99, "value": "穗食药监械经营各20180000号", "valuePos": [{"x": 633, "y": 118}, {"x": 633, "y": 129}, {"x": 440, "y": 129}, {"x": 440, "y": 117}], "valueProb": 99}, {"key": "companyName", "keyProb": 100, "value": "广东某某集团有限公司", "valuePos": [{"x": 473, "y": 170}, {"x": 474, "y": 181}, {"x": 339, "y": 183}, {"x": 338, "y": 171}], "valueProb": 100}, {"key": "officeAddress", "keyProb": 100, "value": "广州市天河区广棠西路", "valuePos": [{"x": 411, "y": 228}, {"x": 411, "y": 239}, {"x": 278, "y": 239}, {"x": 278, "y": 228}], "valueProb": 100}, {"key": "businessAddress", "keyProb": 99, "value": "广州市天河区广案西路", "valuePos": [{"x": 418, "y": 278}, {"x": 418, "y": 290}, {"x": 279, "y": 290}, {"x": 279, "y": 278}], "valueProb": 99}, {"key": "warehouseAddress", "keyProb": 100, "value": "广州市天河区广西路", "valuePos": [{"x": 278, "y": 328}, {"x": 418, "y": 327}, {"x": 419, "y": 340}, {"x": 279, "y": 342}], "valueProb": 100}, {"key": "businessType", "keyProb": 100, "value": "批零兼营", "valuePos": [{"x": 450, "y": 385}, {"x": 450, "y": 396}, {"x": 396, "y": 396}, {"x": 396, "y": 385}], "valueProb": 100}, {"key": "legalRepresentative", "keyProb": 100, "value": "读小光", "valuePos": [{"x": 438, "y": 441}, {"x": 438, "y": 451}, {"x": 400, "y": 451}, {"x": 400, "y": 441}], "valueProb": 100}, {"key": "responsiblePerson", "keyProb": 100, "value": "读大光", "valuePos": [{"x": 436, "y": 503}, {"x": 436, "y": 513}, {"x": 398, "y": 513}, {"x": 398, "y": 503}], "valueProb": 100}, {"key": "businessScope", "keyProb": 100, "value": "批零兼营：第二类医疗器械(不含体外诊断试剂)**", "valuePos": [{"x": 215, "y": 635}, {"x": 541, "y": 634}, {"x": 542, "y": 646}, {"x": 216, "y": 648}], "valueProb": 100}, {"key": "recordationAuthority", "keyProb": 100, "value": "", "valueProb": 100}, {"key": "recordationDate", "keyProb": 99, "value": "2018年08月98日", "valuePos": [{"x": 561, "y": 865}, {"x": 669, "y": 864}, {"x": 670, "y": 877}, {"x": 562, "y": 879}], "valueProb": 99}], "width": 740}`
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
