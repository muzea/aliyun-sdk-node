export interface GetMetaTablePartitionResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 错误信息。
     * @example `The connection does not exist.`
     */
    ErrorMessage: string;
    /**
     * 请求ID。
     * @example `0bc1ec92159376`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `Invalid.Tenant.ConnectionNotExists`
     */
    ErrorCode: string;
    /**
     * 业务数据。
     */
    Data: {
        /**
         * 请求的数据页数，用于翻页。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 每页显示的条数，默认为10条，最大100条。
         * @example `10`
         */
        PageSize: number;
        /**
         * 分区的总数。
         * @example `100`
         */
        TotalCount: number;
        /**
         * 实例列表。
         */
        DataEntityList: {
            /**
             * 分区的目录。
             * @example `abc`
             */
            PartitionPath: string;
            /**
             * 分区的大小，单位为Byte。
             * @example `19`
             */
            DataSize: number;
            /**
             * 分区的名称。
             * @example `pt=20170614`
             */
            PartitionName: string;
            /**
             * 备注信息。
             * @example `备注`
             */
            Comment: string;
            /**
             * 修改分区的时间，单位为毫秒。
             * @example `1590032868000`
             */
            ModifiedTime: number;
            /**
             * 创建分区的时间，单位为毫秒。
             * @example `1590032868000`
             */
            CreateTime: number;
            /**
             * 分区的数据量。
             * @example `233`
             */
            RecordCount: number;
            /**
             * 分区的类型。
             * @example `abc`
             */
            PartitionType: string;
            /**
             * 分区的唯一标识。
             * @example `odps.engine_name.table_name.pt=20170614`
             */
            PartitionGuid: string;
            /**
             * Hive分区的地址。
             * @example `abc`
             */
            PartitionLocation: string;
            /**
             * 表的唯一标识。
             * @example `odps.engine_name.table_name`
             */
            TableGuid: string;
        }[];
    };
}
