export interface DeleteContainerDefenseRuleResponse {
    /**
     * 删除成功的规则数。
     * @example `1`
     */
    Data: number;
    /**
     * 接口调用是否成功。取值：
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
     * @example `47365EC5-**-6DEA1788EB11`
     */
    RequestId: string;
    /**
     * HTTP请求返回的响应状态码，200表示请求发送成功。
     * @example `200`
     */
    HttpStatusCode: number;
}