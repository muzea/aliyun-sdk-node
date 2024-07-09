export interface DsgDesensPlanAddOrUpdateResponse {
    /**
     * 调用是否成功。取值如下：
     * true：调用成功。
     * false：调用失败。
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
     * 新增或编辑的执行结果。
     * @example `true`
     */
    Data: boolean;
    /**
     * 请求的ID。用于定位日志，排查问题。
     * @example `102400001`
     */
    RequestId: string;
}
