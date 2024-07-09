export interface ExecJobResponse {
    /**
     * 请求ID。
     * @example `67DD9A98-9CCC-5BE8-8C9E-B45E72F4****`
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
     * @example `0b87b7e716575071334387401e****`
     */
    TraceId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 任务ID。
         * @example `manual-3db7a8fa-5d40-4edc-92e4-49d50eab****`
         */
        Data: string;
        /**
         * 附加信息。取值说明如下：
         * - 请求正常，返回**success**。
         * - 请求异常，返回具体异常错误码。
         * @example `success`
         */
        Msg: string;
        /**
         * 执行任务是否成功。取值说明如下：
         * - **true**：执行成功。
         * - **false**：执行失败。
         * @example `true`
         */
        Success: string;
        /**
         * 接口状态或POP错误码。取值说明如下：
         * - **2xx**：成功。
         * - **3xx**：重定向。
         * - **4xx**：请求错误。
         * - **5xx**：服务器错误。
         * @example `200`
         */
        Code: string;
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
     * 执行任务是否成功。取值说明如下：
     * - **true**：执行成功。
     * - **false**：执行失败。
     * @example `true`
     */
    Success: boolean;
}
