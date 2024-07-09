export interface CreateBaselineResponse {
    /**
     * 调用是否成功。取值如下：
     * - true：调用成功。
     * - false：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `401`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `The specified parameters are invalid.`
     */
    ErrorMessage: string;
    /**
     * HTTP返回码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 基线的id。
     * @example `100003`
     */
    Data: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `F05080B0-CCE6-5D22-B284-34A51C5D4E28`
     */
    RequestId: string;
}
