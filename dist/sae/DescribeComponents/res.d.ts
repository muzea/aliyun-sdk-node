export interface DescribeComponentsResponse {
    /**
     * 请求ID。
     * @example `91F93257-7A4A-4BD3-9A7E-2F6EAE6D****`
     */
    RequestId: string;
    /**
     * 附加信息。
     * @example `success`
     */
    Message: string;
    /**
     * 调用链ID，用于精确查询调用信息。
     * @example `0a98a02315955564772843261e****`
     */
    TraceId: string;
    /**
     * 支持的应用组件信息。
     */
    Data: {
        /**
         * 组件类型。
         * @example `JDK`
         */
        Type: string;
        /**
         * 组件ID。
         * @example `Open JDK 8`
         */
        ComponentKey: string;
        /**
         * 组件描述。
         * @example `Open JDK 8`
         */
        ComponentDescription: string;
        /**
         * 组件是否过期。取值说明如下：
         * - **true**：组件已过期。
         * - **false**：组件未过期。
         * @example `false`
         */
        Expired: boolean;
    }[];
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
     * 获取组件版本是否成功。取值说明如下：
     * - **true**：获取成功。
     * - **false**：获取失败。
     * @example `true`
     */
    Success: boolean;
}
