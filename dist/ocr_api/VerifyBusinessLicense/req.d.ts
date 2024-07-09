export interface VerifyBusinessLicenseRequest {
    /**
     * 企业注册号或统一社会信用代码
     * @example `91330110MA2AXY0E7F`
     */
    "CreditCode": string;
    /**
     * 企业名称
     * @example `阿里巴巴达摩院（杭州）科技有限公司`
     */
    "CompanyName": string;
    /**
     * 企业法人姓名
     * @example `周明`
     */
    "LegalPerson": string;
}
