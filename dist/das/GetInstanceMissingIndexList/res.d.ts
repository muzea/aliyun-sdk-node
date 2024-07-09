export interface GetInstanceMissingIndexListResponse {
    /**
     * 返回的状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 请求返回消息。
     * > 请求成功时该参数返回**Successful**，请求失败时会返回请求异常信息（如错误码等）。
     * @example `Successful`
     */
    Message: string;
    /**
     * 详细信息列表。
     */
    Data: {
        /**
         * 返回信息列表。
         */
        List: {
            /**
             * 预测建立了缺失索引后，用户的平均CPU开销节约百分比。
             * @example `4.67`
             */
            AvgTotalUserCost: number;
            /**
             * 预测建立了缺失索引后，用户的平均查询性能提升百分比。
             * @example `98.3
            `
             */
            AvgUserImpact: number;
            /**
             * 数据库名称。
             * @example `testdb`
             */
            DatabaseName: string;
            /**
             * 相等列。缺失索引被使用来做等于查询的列。
             * @example `col1,col2,col3`
             */
            EqualityColumns: string;
            /**
             * 包含列。缺失索引包含列。
             * @example `col3,col4`
             */
            IncludedColumns: string;
            /**
             * 索引个数。索引缺失表目前所拥有的索引个数。
             * @example `1`
             */
            IndexCount: number;
            /**
             * 用户最后查找时间。缺失索引用户最后的查找时间点。
             * @example `1702023327000`
             */
            LastUserSeek: number;
            /**
             * 对象名。
             * @example `stu`
             */
            ObjectName: string;
            /**
             * 总页数。
             * @example `5025`
             */
            ReservedPages: number;
            /**
             * 总空间大小。
             * @example `39.26`
             */
            ReservedSize: number;
            /**
             * 记录数。
             * @example `226945`
             */
            RowCount: number;
            /**
             * 架构名。
             * @example `dbo`
             */
            SchemaName: string;
            /**
             * 扫描次数。
             * @example `0`
             */
            SystemScans: number;
            /**
             * 查找次数。
             * @example `0`
             */
            SystemSeeks: number;
            /**
             * 编译次数。
             * @example `2392`
             */
            UniqueCompiles: number;
            /**
             * 用户扫描次数。索引缺失表被扫描的次数。
             * @example `0`
             */
            UserScans: number;
            /**
             * 用户查找次数。索引缺失被查找的次数。
             * @example `1081`
             */
            UserSeeks: number;
            /**
             * 不等列。缺失索引被使用来做不等于查询的列。
             * @example `2392`
             */
            InequalityColumns: string;
            /**
             * 索引创建语句。您可以使用这个语句来创建缺失索引。
             * @example `CREATE INDEX [IX_CLOUDDBA_school_dbo_stu@col1_@col2] ON [school].[dbo].[stu]([col1],[col2],[col3]) INCLUDE ([col4],[col5]) WITH (FILLFACTOR = 90, ONLINE = OFF);`
             */
            CreateIndex: string;
        }[];
        /**
         * 页码。
         * @example `1`
         */
        PageNo: number;
        /**
         * 每页数量。
         * @example `10`
         */
        PageSize: number;
        /**
         * 总记录数。
         * @example `16`
         */
        Total: number;
    };
    /**
     * 请求ID。
     * @example `0A74B755-98B7-59DB-8724-1321B394****`
     */
    RequestId: string;
    /**
     * 请求是否执行成功：
     * - **true**：执行成功。
     * - **false**：执行失败。
     * @example `true`
     */
    Success: string;
}
