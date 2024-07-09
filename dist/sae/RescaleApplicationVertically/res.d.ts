export interface RescaleApplicationVerticallyResponse {
    /**
     * 请求ID。
     * @example `AB521DBB-FA78-42E6-803F-A862EA4F****`
     */
    RequestId: string;
    /**
     * 调用结果的附加信息。
     * @example `success`
     */
    Message: string;
    /**
     * 调用链ID，用于精确查询调用信息。
     * @example `0bc3b6f315637273629117900d****`
     */
    TraceId: string;
    /**
     * 返回结果。
     */
    Data: {
        /**
         * 发布单ID。
         * @example `ffd8cd45-2b5f-415d-b4d0-1003e80b****`
         */
        ChangeOrderId: string;
    };
    /**
     * 错误码。取值说明如下：
     * - 请求成功：不返回**ErrorCode**字段。
     * - 请求失败：返回**ErrorCode**字段。具体信息，请参见本文的**错误码**目录。
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
     * 更改实例规格是否成功。取值说明如下：
     * - **true**：更改成功。
     * - **false**：更改失败。
     * @example `true`
     */
    Success: boolean;
}
