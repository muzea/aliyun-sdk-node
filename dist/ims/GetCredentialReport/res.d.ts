export interface GetCredentialReportResponse {
    /**
     * 用户凭证报告的生成时间。
     * @example `2020-10-19T15:06:52Z`
     */
    GeneratedTime: string;
    /**
     * 请求ID。
     * @example `7A01826E-7601-44B0-B4DF-2B0C509836DE`
     */
    RequestId: string;
    /**
     * 用户凭证报告内容。
     * 采用Base64编码，解码后是CSV格式的用户凭证报告内容。
     * @example `OVZWK4RMOVZW****`
     */
    Content: string;
    /**
     * 请求返回结果是否被截断。取值：
     * - true
     * - false
     * @example `true`
     */
    IsTruncated: string;
    /**
     * 此参数在`IsTruncated`为true时生效，用于获取截断后的内容。
     * @example `EXAMPLE`
     */
    NextToken: string;
}
