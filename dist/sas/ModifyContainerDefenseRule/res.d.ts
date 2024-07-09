export interface ModifyContainerDefenseRuleResponse {
    /**
     * 修改成功的规则ID。
     * @example `100`
     */
    Data: number;
    /**
     * 接口调用的结果状态。取值：
     * - **true**：接口调用成功。
     * - **false**：接口调用失败。
     * @example `True`
     */
    Success: boolean;
    /**
     * 结果代码，**200**表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 请求结果返回信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `768DFBE5-*A5DC35**`
     */
    RequestId: string;
    /**
     * HTTP请求返回的响应状态码，200表示请求成功。
     * @example `200`
     */
    HttpStatusCode: number;
}
