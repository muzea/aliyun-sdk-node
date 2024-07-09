export interface ModifySecurityEventMarkMissIndividuallyResponse {
    /**
     * 返回的查询结果的状态。取值：
     * - **true**：成功
     * - **false**：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 处理告警事件的返回码。
     * - **200**：表示处理成功。
     * - 其它：表示处理失败。
     * @example `200`
     */
    Code: string;
    /**
     * 请求结果返回信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `A37B852F-E346-5FF2-82BD-D1F1DXXXXXX`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求处理的耗时，单位毫秒。
     * @example `1`
     */
    TimeCost: number;
}
