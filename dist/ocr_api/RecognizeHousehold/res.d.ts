export interface RecognizeHouseholdResponse {
    /**
     * 请求唯一 ID
     * @example `43A29C77-405E-4CC0-BC55-EE694AD00655`
     */
    RequestId: string;
    /**
     * 返回数据
     * @example `{"angle": 0, "data": {"sectionNo": "4401030023005", "householdType": "居民户口家庭户", "householderName": "张无忌", "householderCommunity": "", "householdNumber": "000028901", "address": "广东省广州市荔湾区芳村大道中350号", "Registrar": "罗敏", "issueDate": "2012年04月17日"}, "ftype": 0, "height": 606, "orgHeight": 606, "orgWidth": 920, "prism_keyValueInfo": [{"key": "sectionNo", "keyProb": 100, "value": "4401030023005", "valuePos": [{"x": 106, "y": 5}, {"x": 289, "y": 4}, {"x": 289, "y": 28}, {"x": 107, "y": 30}], "valueProb": 100}, {"key": "householdType", "keyProb": 100, "value": "居民户口家庭户", "valuePos": [{"x": 137, "y": 46}, {"x": 317, "y": 43}, {"x": 317, "y": 73}, {"x": 138, "y": 76}], "valueProb": 100}, {"key": "householderName", "keyProb": 100, "value": "张无忌", "valuePos": [{"x": 523, "y": 48}, {"x": 523, "y": 74}, {"x": 457, "y": 74}, {"x": 457, "y": 48}], "valueProb": 100}, {"key": "householderCommunity", "keyProb": 100, "value": "", "valueProb": 100}, {"key": "householdNumber", "keyProb": 100, "value": "000028901", "valuePos": [{"x": 225, "y": 108}, {"x": 225, "y": 126}, {"x": 145, "y": 126}, {"x": 145, "y": 108}], "valueProb": 100}, {"key": "address", "keyProb": 100, "value": "广东省广州市荔湾区芳村大道中350号", "valuePos": [{"x": 379, "y": 88}, {"x": 807, "y": 84}, {"x": 807, "y": 114}, {"x": 379, "y": 119}], "valueProb": 100}, {"key": "Registrar", "keyProb": 100, "value": "罗敏", "valuePos": [{"x": 332, "y": 499}, {"x": 332, "y": 529}, {"x": 279, "y": 529}, {"x": 279, "y": 499}], "valueProb": 100}, {"key": "issueDate", "keyProb": 100, "value": "2012年04月17日", "valuePos": [{"x": 738, "y": 497}, {"x": 738, "y": 538}, {"x": 462, "y": 538}, {"x": 462, "y": 497}], "valueProb": 100}], "sliceRect": {"x0": 1, "y0": 7, "x1": 918, "y1": 4, "x2": 920, "y2": 600, "x3": 5, "y3": 606}, "width": 920}`
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
