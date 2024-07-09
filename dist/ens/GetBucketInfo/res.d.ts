export interface GetBucketInfoResponse {
    /**
     * 请求ID。
     * @example `C5831388-2D4B-46F4-A96B-D4E6BD06E7521`
     */
    RequestId: string;
    /**
     * Bucket信息列表。
     */
    BucketInfo: {
        /**
         * Bucket读写权限类型：
         * - **public-read-write**：公共读写
         * - **public-read**：公共读
         * - **private**：私有（默认值）
         * @example `private`
         */
        BucketAcl: string;
        /**
         * Bucket名称。
         * @example `test`
         */
        BucketName: string;
        /**
         * 备注。
         * @example `das`
         */
        Comment: string;
        /**
         * Bucket创建时间。按照ISO8601标准表示，并需要使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
         * @example `2022-10-12T05:45:00Z`
         */
        CreateTime: string;
        /**
         * 单节点存储，取值：sink
         * @example `sink`
         */
        LogicalBucketType: string;
        /**
         * Bucket修改时间。按照ISO8601标准表示，并需要使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
         * @example `2022-10-12T06:45:00Z`
         */
        ModifyTime: string;
    };
}
