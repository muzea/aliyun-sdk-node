export interface QuerySendStatisticsRequest {
    /**
     * 短信发送范围。取值：
     * - **1**：国内短信发送记录。
     * - **2**：国际/港澳台短信发送记录。
     * @example `1`
     */
    "IsGlobe": number;
    /**
     * 开始日期，格式为yyyyMMdd，例如20181225。
     * @example `20201002`
     */
    "StartDate": string;
    /**
     * 结束日期，格式为yyyyMMdd，例如20181225。
     * @example `20201003`
     */
    "EndDate": string;
    /**
     * 当前页码。默认取值为**1**。
     * @example `1`
     */
    "PageIndex": number;
    /**
     * 每页显示的条数。取值范围：**1~50**。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 模板类型。取值：
     * - **0**：验证码。
     * - **1**：通知短信。
     * - **2**：推广短信。（仅支持企业客户）
     * - **3**：国际/港澳台消息。（仅支持企业客户）
     * - **7**：数字短信。
     * @example `0`
     */
    "TemplateType"?: number;
    /**
     * 签名名称。
     * @example `阿里云平台`
     */
    "SignName"?: string;
}
