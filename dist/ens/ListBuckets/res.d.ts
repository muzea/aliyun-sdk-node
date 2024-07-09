export interface ListBucketsResponse {
    /**
     * 请求ID。
     * @example `435769C7-AA6F-4DC5-B3DB-A3DC0DE7E853`
     */
    RequestId: string;
    /**
     * Bucket信息列表
     */
    BucketInfos: {
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
         * @example `numb`
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
        /**
         * 节点区域ID。
         * @example `cn-dalian-unicom`
         */
        EnsRegionId: string;
    }[];
    /**
     * 命中条件Bucket总数。
     * @example `1`
     */
    TotalCount: number;
}
