export interface DsgQuerySensResultResponse {
    /**
     * 调用是否成功。
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `400`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `缺少参数`
     */
    ErrorMessage: string;
    /**
     * HTTP返回码。
     * @example `400`
     */
    HttpStatusCode: number;
    /**
     * 返回数据。
     * @example `1234`
     */
    Data: any;
    /**
     * 请求ID，一次请求的唯一标识。
     * @example `900000001`
     */
    RequestId: string;
    /**
     * 错误码。取值同ErrorCode。
     * @example `400`
     */
    DynamicErrorCode: string;
    /**
     * 错误信息。取值同ErrorMessage。
     * @example `缺少参数`
     */
    DynamicErrorMessage: string;
}
