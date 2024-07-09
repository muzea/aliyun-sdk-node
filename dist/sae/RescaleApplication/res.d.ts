export interface RescaleApplicationResponse {
    /**
     * 调用结果的附加信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `91F93257-7A4A-4BD3-9A7E-2F6EAE6D****`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Data: {
        /**
         * 发布单ID。
         * @example `0e09829f-4914-4612-bc88-6f52fd81****`
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
     * 应用扩缩是否成功。取值说明如下：
     * - **true**：扩缩成功。
     * - **false**：扩缩失败。
     * @example `true`
     */
    Success: boolean;
}
