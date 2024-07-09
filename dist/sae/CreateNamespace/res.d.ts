export interface CreateNamespaceResponse {
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
     * @example `0a981dd515966966104121683d****`
     */
    TraceId: string;
    /**
     * 命名空间信息。
     */
    Data: {
        /**
         * 命名空间描述信息。
         * @example `desc`
         */
        NamespaceDescription: string;
        /**
         * 命名空间ID。
         * @example `cn-beijing:test`
         */
        NamespaceId: string;
        /**
         * 命名空间名称。
         * @example `name`
         */
        NamespaceName: string;
        /**
         * 命名空间所在地域。
         * @example `cn-beijing`
         */
        RegionId: string;
        /**
         * 短版命名空间ID。
         * @example `test`
         */
        NameSpaceShortId: string;
        EnableMicroRegistration: boolean;
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
     * 创建命名空间是否成功。取值说明如下：
     * - **true**：创建成功。
     * - **false**：创建失败。
     * @example `true`
     */
    Success: boolean;
}
