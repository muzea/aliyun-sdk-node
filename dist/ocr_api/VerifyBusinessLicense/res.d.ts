export interface VerifyBusinessLicenseResponse {
    /**
     * 请求唯一 ID
     * @example `43A29C77-405E-4CC0-BC55-EE694AD00655`
     */
    RequestId: string;
    /**
     * 返回数据
     * @example `{"code":"0","data":true,"message":"法人姓名、社会信用代码一致"}`
     */
    Data: string;
}
