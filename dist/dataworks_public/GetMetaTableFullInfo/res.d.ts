export interface GetMetaTableFullInfoResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 错误信息。
     * @example `The specified parameters are invalid.`
     */
    ErrorMessage: string;
    /**
     * 请求ID。用于定位日志，排查问题。
     * @example `0bc1411515937****`
     */
    RequestId: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `1031203110005`
     */
    ErrorCode: string;
    /**
     * 业务数据。
     */
    Data: {
        /**
         * 表的名称。
         * @example `table_name`
         */
        TableName: string;
        /**
         * 表的备注信息。
         * @example `comment`
         */
        Comment: string;
        /**
         * 表的生命周期，单位为天。
         * @example `5`
         */
        LifeCycle: number;
        /**
         * 创建表的时间。该结果显示为时间戳，您可以根据使用的时区将时间戳转换为相应日期。
         * @example `1589870293000`
         */
        CreateTime: number;
        /**
         * 表所在工作空间的名称。
         * @example `test`
         */
        ProjectName: string;
        /**
         * 表所在工作空间的ID。
         * @example `22`
         */
        ProjectId: number;
        /**
         * 表所有者的ID。
         * @example `123`
         */
        OwnerId: string;
        /**
         * 环境类型，取值如下：
         * - 0表示开发环境的表。
         * - 1表示生产环境的表。
         * @example `1`
         */
        EnvType: number;
        /**
         * 最后一次访问表的时间。该结果显示为时间戳，您可以根据使用的时区将时间戳转换为相应日期。
         * @example `1589870294000`
         */
        LastAccessTime: number;
        /**
         * 表占用的存储空间，单位为字节（B）。
         * @example `10`
         */
        DataSize: number;
        /**
         * 最后更新表的时间。该结果显示为时间戳，您可以根据使用的时区将时间戳转换为相应日期。
         * @example `1589870294000`
         */
        LastModifyTime: number;
        /**
         * 数据库的名称。
         * @example `abc`
         */
        DatabaseName: string;
        /**
         * 表是否可见，取值如下：
         * - 0表示该表对工作空间成员可见。
         * - 1表示该表对租户内可见。
         * - 2表示该表在租户间均可见。
         * - 3表示该表仅对责任人可见。
         * @example `1`
         */
        IsVisible: number;
        /**
         * 字段的总数。
         * @example `22`
         */
        TotalColumnCount: number;
        /**
         * 表的唯一标识。
         * @example `odps.engine_name.table_name`
         */
        TableGuid: string;
        /**
         * 分区键。
         * @example `abc`
         */
        PartitionKeys: string;
        /**
         * 最后变更表结构的时间。该结果显示为时间戳，您可以根据使用的时区将时间戳转换为相应日期。
         * @example `1589870294000`
         */
        LastDdlTime: number;
        /**
         * Hive表的存储地址。
         * @example `hdfs://localhost:777/user/hadoop/test.txt`
         */
        Location: string;
        /**
         * EMR集群的ID。
         * @example `C-010A704DA760****`
         */
        ClusterId: string;
        /**
         * 租户ID。
         * @example `12345`
         */
        TenantId: number;
        Schema: string;
        /**
         * 字段列表。
         */
        ColumnList: {
            /**
             * 字段的名称。
             * @example `1`
             */
            ColumnName: string;
            /**
             * 字段的唯一标识。
             * @example `odps.engine_name.table_name.1`
             */
            ColumnGuid: string;
            /**
             * 字段是否为分区字段，取值如下：
             * - true，是分区字段。
             * - false，不是分区字段。
             * @example `true`
             */
            IsPartitionColumn: boolean;
            /**
             * 字段的备注。
             * @example `comment`
             */
            Comment: string;
            /**
             * 字段的类型。
             * @example `string`
             */
            ColumnType: string;
            /**
             * 字段是否为主键，取值如下：
             * - true，是主键。
             * - false，不是主键。
             * @example `false`
             */
            IsPrimaryKey: boolean;
            /**
             * 字段的排序。
             * @example `1`
             */
            Position: number;
            /**
             * 字段的描述信息。
             * @example `data comment`
             */
            Caption: string;
            /**
             * 字段是否为外键，取值如下：
             * - true，是外键。
             * - false，不是外键。
             * @example `true`
             */
            IsForeignKey: boolean;
        }[];
    };
}
