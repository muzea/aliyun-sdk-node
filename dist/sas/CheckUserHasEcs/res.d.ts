export interface CheckUserHasEcsResponse {
    /**
     * 是否含有ECS。取值：
     * - **true**：含有
     * - **false**：未有
     * @example `true`
     */
    Data: boolean;
    /**
     * 返回的查询结果的状态。取值：
     * - **true**：成功
     * - **false**：失败
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
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `BE120DAB-F4E7-4C53-ADC3-A97578ABF384`
     */
    RequestId: string;
}
