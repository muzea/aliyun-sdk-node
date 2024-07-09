export interface DsgQueryDefaultTemplatesResponse {
    /**
     * 调用是否成功。取值如下：
     * - true：调用成功。
     * - false：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `1029030003`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `param error`
     */
    ErrorMessage: string;
    /**
     * HTTP状态码。
     * @example `400`
     */
    HttpStatusCode: number;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 敏感字段类型。
         * @example `phone`
         */
        DataType: string;
        /**
         * 支持的脱敏方式及参数说明列表。
         */
        DesensPlanTemplate: any;
    }[];
    /**
     * 请求的ID。用于定位日志，排查问题。
     * @example `102400001`
     */
    RequestId: string;
}
