export interface BatchStopApplicationsResponse {
    /**
     * 请求ID。
     * @example `7BD8F4C7-D84C-4D46-9885-8212997E****`
     */
    RequestId: string;
    /**
     * 附加信息。取值说明如下：
     * - 请求正常，返回**success**。
     * - 请求异常，返回具体异常错误码。
     * @example `success`
     */
    Message: string;
    /**
     * 调用链ID，用于精确查询调用信息。
     * @example `0bc3b6e215637275918588187d****`
     */
    TraceId: string;
    /**
     * 返回结果。
     */
    Data: {
        /**
         * 变更单ID。
         * @example `4a815998-b468-4bea-b7d8-59f52a44****`
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
     * 批量停止应用是否成功。取值说明如下：
     * - **true**：停止成功。
     * - **false**：停止失败。
     * @example `true`
     */
    Success: boolean;
}
