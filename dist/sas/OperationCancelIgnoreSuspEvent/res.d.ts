export interface OperationCancelIgnoreSuspEventResponse {
    /**
     * 告警事件处理的结果状态。取值：
     * - **true**：处理成功。
     * - **false**：处理失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果代码，**200**表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 错误码的详细信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 本次请求的ID。
     * @example `CE500770-42D3-442E-9DDD-156E0F9F3B45`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 执行任务花费的时间，单位为秒。
     * @example `1`
     */
    TimeCost: number;
}
