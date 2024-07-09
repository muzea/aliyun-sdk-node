export interface ChangeChatAgentStatusResponse {
    /**
     * 状态码描述。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `DF6A3FB7-A5AA-43BE-A65B`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 当前客服状态。取值：
     * - **0**：下班
     * - **3**：小休
     * @example `0`
     */
    Data: string;
    /**
     * 状态码。
     * @example `Success`
     */
    Code: string;
    /**
     * 接口调用是否成功。
     * @example `true`
     */
    Success: boolean;
}
