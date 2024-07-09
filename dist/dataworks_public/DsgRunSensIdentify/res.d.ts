export interface DsgRunSensIdentifyResponse {
    /**
     * 错误码。
     * @example `9990030003`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `缺少参数`
     */
    ErrorMessage: string;
    /**
     * 调用是否成功。取值如下：
     * - true：调用成功。
     * - false：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 生成的敏感数据识别任务的任务ID。INT 64类型。
     * @example `1000001`
     */
    Data: any;
    /**
     * HTTP状态码。
     * @example `400`
     */
    HttpStatusCode: number;
    /**
     * 请求的ID。用于定位日志，排查问题。
     * @example `10000001`
     */
    RequestId: string;
}
