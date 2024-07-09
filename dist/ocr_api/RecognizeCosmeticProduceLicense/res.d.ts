export interface RecognizeCosmeticProduceLicenseResponse {
    /**
     * 请求唯一ID
     * @example `AA91C84E-7DB9-1951-B8FE-D830076A0473`
     */
    RequestId: string;
    /**
     * 返回数据
     * @example `{"data": {"title": "化妆品生产许可证", "enterpriseName": "广州康薇化妆品制造有限公司", "creditCode": "91440111347388120Y", "officeAddress": "广州市白云区太和镇秀盛路38号B栋", "legalRepresentative": "唐国强", "responsiblePerson": "", "safetyManager": "许泉本", "productionAddress": "广州市白云区太和镇秀盛路38号B栋", "licenceNumber": "粤妆20160890", "licensedItemScope": "一般液态单元(护发清洁类、护肤水类、啫喱类);膏霜乳液单元(护肤清洁类、护发类)", "regulatoryAuthority": "", "regulatoryPersonnel": "", "reportHotline": "", "issueOfficer": "", "issueAuthority": "广东省药品监督管理局", "issueDate": "2021-05-25", "validToDate": "2026-05-24"}, "ftype": 0, "height": 683, "orgHeight": 683, "orgWidth": 1021, "prism_keyValueInfo": [{"key": "title", "keyProb": 100, "value": "化妆品生产许可证", "valuePos": [{"x": 207, "y": 163}, {"x": 651, "y": 162}, {"x": 651, "y": 209}, {"x": 208, "y": 211}], "valueProb": 100}, {"key": "enterpriseName", "keyProb": 100, "value": "广州康薇化妆品制造有限公司", "valuePos": [{"x": 406, "y": 230}, {"x": 406, "y": 249}, {"x": 199, "y": 249}, {"x": 199, "y": 230}], "valueProb": 100}, {"key": "creditCode", "keyProb": 100, "value": "91440111347388120Y", "valuePos": [{"x": 345, "y": 269}, {"x": 345, "y": 284}, {"x": 200, "y": 284}, {"x": 200, "y": 269}], "valueProb": 100}, {"key": "officeAddress", "keyProb": 100, "value": "广州市白云区太和镇秀盛路38号B栋", "valuePos": [{"x": 202, "y": 293}, {"x": 448, "y": 292}, {"x": 449, "y": 309}, {"x": 203, "y": 311}], "valueProb": 100}, {"key": "legalRepresentative", "keyProb": 100, "value": "唐国强", "valuePos": [{"x": 250, "y": 341}, {"x": 250, "y": 358}, {"x": 202, "y": 358}, {"x": 202, "y": 341}], "valueProb": 100}, {"key": "responsiblePerson", "keyProb": 100, "value": "", "valueProb": 100}, {"key": "safetyManager", "keyProb": 100, "value": "许泉本", "valuePos": [{"x": 250, "y": 378}, {"x": 250, "y": 395}, {"x": 200, "y": 395}, {"x": 200, "y": 378}], "valueProb": 100}, {"key": "productionAddress", "keyProb": 100, "value": "广州市白云区太和镇秀盛路38号B栋", "valuePos": [{"x": 200, "y": 404}, {"x": 448, "y": 403}, {"x": 448, "y": 420}, {"x": 201, "y": 422}], "valueProb": 100}, {"key": "licenceNumber", "keyProb": 100, "value": "粤妆20160890", "valuePos": [{"x": 711, "y": 226}, {"x": 711, "y": 244}, {"x": 613, "y": 244}, {"x": 613, "y": 226}], "valueProb": 100}, {"key": "licensedItemScope", "keyProb": 100, "value": "一般液态单元(护发清洁类、护肤水类、啫喱类);膏霜乳液单元(护肤清洁类、护发类)", "valuePos": [{"x": 612, "y": 258}, {"x": 837, "y": 257}, {"x": 838, "y": 310}, {"x": 613, "y": 311}], "valueProb": 100}, {"key": "regulatoryAuthority", "keyProb": 100, "value": "", "valueProb": 100}, {"key": "regulatoryPersonnel", "keyProb": 100, "value": "", "valueProb": 100}, {"key": "reportHotline", "keyProb": 100, "value": "", "valueProb": 100}, {"key": "issueOfficer", "keyProb": 100, "value": "", "valueProb": 100}, {"key": "issueAuthority", "keyProb": 99, "value": "广东省药品监督管理局", "valuePos": [{"x": 775, "y": 414}, {"x": 775, "y": 433}, {"x": 614, "y": 433}, {"x": 614, "y": 414}], "valueProb": 99}, {"key": "issueDate", "keyProb": 99, "value": "2021-05-25", "valuePos": [{"x": 751, "y": 483}, {"x": 751, "y": 494}, {"x": 626, "y": 494}, {"x": 626, "y": 483}], "valueProb": 99}, {"key": "validToDate", "keyProb": 100, "value": "2026-05-24", "valuePos": [{"x": 747, "y": 387}, {"x": 748, "y": 398}, {"x": 622, "y": 400}, {"x": 621, "y": 388}], "valueProb": 100}], "sliceRect": {"x0": 89, "y0": 32, "x1": 956, "y1": 30, "x2": 955, "y2": 620, "x3": 89, "y3": 620}, "width": 1021}`
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
