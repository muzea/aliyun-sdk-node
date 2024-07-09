export interface GetMetaTableBasicInfoResponse {
    /**
     * 请求返回码。
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
     * @example `0bc1411515937`
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
         * 表的名称。
         * @example `table_name`
         */
        TableName: string;
        /**
         * 表的收藏次数。仅当Extension参数取值为true时才会返回该参数，并且该参数仅对odps数据类型生效。
         * @example `6`
         */
        FavoriteCount: number;
        /**
         * 表的描述。
         * @example `test table`
         */
        Comment: string;
        /**
         * 字段的个数。
         * @example `3`
         */
        ColumnCount: number;
        /**
         * 创建表的时间。
         * @example `1589870294000`
         */
        CreateTime: number;
        /**
         * 工作空间的ID。
         * @example `232`
         */
        ProjectId: number;
        /**
         * 表所有者的ID。
         * @example `123`
         */
        OwnerId: string;
        /**
         * 环境类型，取值如下：
         * - 0表示开发表。
         * - 1表示生产表。
         * @example `1`
         */
        EnvType: number;
        /**
         * 数据库的名称。
         * @example `abc`
         */
        DatabaseName: string;
        /**
         * 表的可见性：
         * - 0表示目标表对工作空间成员可见。
         * - 1表示目标表对租户内成员可见。
         * - 2表示目标表对租户间成员均可见。
         * - 3表示目标表仅对责任人可见。
         * @example `1`
         */
        IsVisible: number;
        /**
         * 表的唯一标识。
         * @example `odps.engine_name.table_name`
         */
        TableGuid: string;
        /**
         * 表的读取次数。仅当Extension参数取值为true时才会返回该参数，并且该参数仅对odps数据类型生效。
         * @example `3`
         */
        ReadCount: number;
        /**
         * EMR集群的ID。
         * @example `abc`
         */
        ClusterId: string;
        /**
         * 是否为分区表，取值如下：
         * - true：是分区表。
         * - false：不是分区表。
         * @example `true`
         */
        IsPartitionTable: boolean;
        /**
         * 是否为视图，取值如下：
         * - true：是视图。
         * - false：不是视图。
         * @example `false`
         */
        IsView: boolean;
        /**
         * 表的生命周期。单位为天。
         * @example `5`
         */
        LifeCycle: number;
        /**
         * 工作空间的名称。
         * @example `test`
         */
        ProjectName: string;
        /**
         * 表的浏览次数。仅当Extension参数取值为true时才会返回该参数，并且该参数仅对odps数据类型生效。
         * @example `2`
         */
        ViewCount: number;
        /**
         * 最近一次访问表的时间。
         * @example `1589870294000`
         */
        LastAccessTime: number;
        /**
         * 表占用的存储空间。单位为Byte。
         * @example `10`
         */
        DataSize: number;
        /**
         * 最近一次更新表的时间。
         * @example `1589870294000`
         */
        LastModifyTime: number;
        /**
         * 最近一次变更表结构的时间。
         * @example `1589870294000`
         */
        LastDdlTime: number;
        /**
         * Hive分区。
         * @example `ab`
         */
        PartitionKeys: string;
        /**
         * Hive数据库的存储地址。
         * @example `hdfs://`
         */
        Location: string;
        /**
         * 表的中文名称。
         * @example `中文名`
         */
        Caption: string;
        /**
         * 租户ID。
         * @example `12345`
         */
        TenantId: number;
        /**
         * 表Schema信息。在ODPS，用户启动了三层模型需要填写Schema信息
         * @example `default`
         */
        Schema: string;
    };
}
