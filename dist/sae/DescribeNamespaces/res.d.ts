export interface DescribeNamespacesResponse {
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
     * 命名空间信息列表。
     */
    Data: {
        /**
         * 当前页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 命名空间总数。
         * @example `100`
         */
        TotalSize: number;
        /**
         * 分页查询时设置的每页数量。
         * @example `10`
         */
        PageSize: number;
        /**
         * 命名空间列表。
         */
        Namespaces: {
            /**
             * 命名空间描述。
             * @example `desc`
             */
            NamespaceDescription: string;
            /**
             * ACM专用AccessKey ID，用于操作ACM某个命名空间内的数据。更多信息，请参见[阿里云AccessKey和ACM专用AccessKey的区别](~~68941~~)。
             * @example `b34dbe3315c64f9f99b58ea447ec****`
             */
            AccessKey: string;
            /**
             * ACM专用AccessKey Secret，用于操作ACM某个命名空间内的数据。更多信息，请参见[阿里云AccessKey和ACM专用AccessKey的区别](~~68941~~)。
             * @example `G/w6sseK7+nb3S6HBmANDBMD****`
             */
            SecretKey: string;
            /**
             * 命名空间ID。默认命名空间不可查询、更改或删除。
             * @example `cn-beijing:test`
             */
            NamespaceId: string;
            /**
             * 主机服务地址。
             * @example `addr-bj-internal.edas.aliyun.com`
             */
            AddressServerHost: string;
            /**
             * 命名空间名称。
             * @example `name`
             */
            NamespaceName: string;
            /**
             * 租户ID。
             * @example `838cad95-973f-48fe-830b-2a8546d7****`
             */
            TenantId: string;
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
        }[];
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
     * 查询命名空间列表是否成功。取值说明如下：
     * - **true**：查询成功。
     * - **false**：查询失败。
     * @example `true`
     */
    Success: boolean;
}
