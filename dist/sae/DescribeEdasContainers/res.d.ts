export interface DescribeEdasContainersResponse {
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
     * 调用链ID，用于精确查询调用信息。
     * @example `0a98a02315955564772843261e****`
     */
    TraceId: string;
    /**
     * 组件列表。
     */
    Data: {
        /**
         * 微服务组件是否禁用。取值说明如下：
         * - **true**：表示组件被禁用。
         * - **false**：表示组件未被禁用。
         * @example `false`
         */
        Disabled: boolean;
        /**
         * HSF框架中应用运行环境版本，例如Ali-Tomcat容器。
         * @example `3.5.3`
         */
        EdasContainerVersion: string;
    }[];
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
     * 获取应用微服务容器组件列表是否成功。取值说明如下：
     * - **true**：表示获取成功。
     * - **false**：表示获取失败。
     * @example `true`
     */
    Success: boolean;
}
