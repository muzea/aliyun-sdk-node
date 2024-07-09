export interface EditRecognizeRuleResponse {
    /**
     * 调用是否成功。
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
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
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 返回结果，JSON格式数据。
     * @example `{ "HttpStatusCode": 200, "Success": true }`
     */
    Data: any;
    /**
     * 请求ID，一次请求的唯一标识。
     * @example `10000001`
     */
    RequestId: string;
}
