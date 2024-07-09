export interface DeleteSmsTemplateResponse {
    /**
     * 请求状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[API错误码](~~101346~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码的描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `CCA2BCFF-2BA7-427C-90EE-AC6994748607`
     */
    RequestId: string;
    /**
     * 已删除的模板Code。
     * @example `SMS_152550****`
     */
    TemplateCode: string;
}
