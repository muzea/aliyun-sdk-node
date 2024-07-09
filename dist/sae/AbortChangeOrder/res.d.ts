export interface AbortChangeOrderResponse {
    /**
     * 请求ID。
     * @example `91F93257-7A4A-4BD3-9A7E-2F6EAE6D****`
     */
    RequestId: string;
    /**
     * 调用结果的附加信息。
     * @example `success`
     */
    Message: string;
    /**
     * 调用链ID。
     * @example `0a98a02315955564772843261e****`
     */
    TraceId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 变更单ID。
         * @example `be2e1c76-682b-4897-98d3-1d8d6478****`
         */
        ChangeOrderId: string;
    };
    /**
     * 错误码。取值说明如下：
     * - 请求成功：不返回**ErrorCode**字段。
     * - 请求失败：返回**ErrorCode**字段。具体信息，请参见本文的**错误码**列表。
     * @example `空`
     */
    ErrorCode: string;
    /**
     * 接口状态或POP错误码。取值说明如下：
     * - **2xx**：成功。
     * - **3xx**：重定向。
     * - **4xx**：请求错误。
     * - **5xx**：服务器错误。
     * @example `200`
     */
    Code: string;
    /**
     * 终止变更单是否成功。取值说明如下：
     * - **true**：终止成功。
     * - **false**：终止失败。
     * @example `true`
     */
    Success: boolean;
}
