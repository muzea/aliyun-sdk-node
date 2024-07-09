export interface CreateAgentResponse {
    /**
     * 状态码描述。
     * @example `successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * 坐席ID。
     * @example `2578****`
     */
    Data: number;
    /**
     * 状态码。返回Success表示请求成功。
     * @example `Success`
     */
    Code: string;
    /**
     * 调用接口是否成功。取值：
     * - **true**：成功。
     * - **false**：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
