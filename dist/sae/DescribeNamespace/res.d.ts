export interface DescribeNamespaceResponse {
    /**
     * 请求ID。
     * @example `91F93257-7A4A-4BD3-9A7E-2F6EAE6D****`
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
     * @example `0a981dd515966966104121683d****`
     */
    TraceId: string;
    /**
     * 命名空间信息。
     */
    Data: {
        /**
         * 命名空间描述。
         * @example `desc`
         */
        NamespaceDescription: string;
        /**
         * 命名空间ID。默认命名空间不可查询、更改或删除。
         * @example `cn-beijing:test`
         */
        NamespaceId: string;
        /**
         * 命名空间名称。
         * @example `name`
         */
        NamespaceName: string;
        /**
         * 地域。
         * @example `cn-beijing`
         */
        RegionId: string;
        /**
         * 短版命名空间ID。
         * @example `test`
         */
        NameSpaceShortId: string;
        /**
         * 是否已启用SAE内置注册中心：
         * - **true**
         * - **false**
         * @example `true`
         */
        EnableMicroRegistration: boolean;
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
     * 查询命名空间信息是否成功。取值说明如下：
     * - **true**：查询成功。
     * - **false**：查询失败。
     * @example `true`
     */
    Success: boolean;
}
