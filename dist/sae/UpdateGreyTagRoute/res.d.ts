export interface UpdateGreyTagRouteResponse {
    /**
     * 请求ID。
     * @example `9D29CBD0-45D3-410B-9826-52F86F90****`
     */
    RequestId: string;
    /**
     * 调用结果的附加信息。
     * @example `success`
     */
    Message: string;
    /**
     * 调用链ID，用于精确查询调用信息。
     * @example `0a98a02315955564772843261e****`
     */
    TraceId: string;
    /**
     * 灰度规则信息。
     */
    Data: {
        /**
         * 灰度规则ID，全局唯一。
         * @example `1`
         */
        GreyTagRouteId: number;
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
     * 查询变更单信息是否成功。取值说明如下：
     * - **true**：表示查询成功。
     * - **false**：表示查询失败。
     * @example `true`
     */
    Success: boolean;
}
