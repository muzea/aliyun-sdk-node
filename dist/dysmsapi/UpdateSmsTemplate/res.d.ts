export interface UpdateSmsTemplateResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `819BE656-D2E0-4858-8B21-B2E477085AAF`
     */
    RequestId: string;
    /**
     * 请求状态码。
     * * 返回OK代表请求成功。
     * * 其他错误码，请参见本章节的**错误码**列表或产品[API错误码](~~101346~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码的描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 短信模板名称。
     * @example `验证码`
     */
    TemplateName: string;
    /**
     * 短信模板Code。
     * @example `SMS_152550****`
     */
    TemplateCode: string;
    /**
     * 工单号。
     * 审核人员查询审核时会用到此参数。您需要审核加急时需要提供此工单号。
     * @example `20041271****`
     */
    OrderId: string;
}
