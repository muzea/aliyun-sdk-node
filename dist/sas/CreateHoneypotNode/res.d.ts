export interface CreateHoneypotNodeResponse {
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
     * @example `028CF634-5268-5660-9575-48C9ED6BF880`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 创建蜜罐管理节点返回数据。
     */
    HoneypotNode: {
        /**
         * 管理节点ID。
         * @example `37a15ff1-3475-4897-aa6c-f7fd9122****`
         */
        NodeId: string;
    };
}
