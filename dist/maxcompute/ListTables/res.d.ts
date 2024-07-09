export interface ListTablesResponse {
    /**
     * 请求ID。
     * @example `0a06dd4516687375802853481ec9fd`
     */
    requestId: string;
    /**
     * 返回数据。
     */
    data: {
        /**
         * 表信息。
         */
        tables: {
            /**
             * 表名称。
             * @example `sale_detail`
             */
            name: string;
            /**
             * 表所有者。
             * @example `188785396123****`
             */
            owner: string;
            /**
             * 表类型。
             * @example `internal
            `
             */
            type: string;
            /**
             * 归属schema。
             * @example `default`
             */
            schema: string;
            /**
             * 创建时间。
             * @example `2022-01-17T07:07:47Z`
             */
            creationTime: number;
            /**
             * 生成视图的语句。
             * @example `select shop_name, sum(total_price)
            from sale_detail group by shop_name`
             */
            viewText: string;
            /**
             * 展示名称。
             * @example `sale_detail`
             */
            displayName: string;
            /**
             * 项目名称。
             * @example `projectA
            `
             */
            projectName: string;
            /**
             * DDL最近更新时间。
             * @example `2023-11-21T02:05:56Z
            `
             */
            lastDDLTime: number;
            /**
             * 数据最近更新时间。
             * @example `2023-11-21T02:05:56Z`
             */
            lastModifiedTime: number;
            /**
             * 数据最近访问时间。
             * @example `2023-12-21T02:05:56Z`
             */
            lastAccessTime: number;
            /**
             * 生命周期。
             * @example `-1`
             */
            lifecycle: string;
            /**
             * 是否外部表。
             * @example `False`
             */
            isExternalTable: boolean;
            /**
             * 大小。
             * @example `5372`
             */
            size: number;
            /**
             * 表说明。
             * @example `sale_detail`
             */
            tableComment: string;
            /**
             * 表的label级别。
             * @example `0`
             */
            tableLabel: string;
            /**
             * 创建表的DDL语句。
             * @example `create table if not exists sale_detail(
             shop_name     STRING,
             customer_id   STRING,
             total_price   DOUBLE)
            partitioned by (sale_date STRING, region STRING); `
             */
            createTableDDL: string;
            /**
             * 列信息。
             */
            nativeColumns: {
                /**
                 * 列名。
                 * @example `shop_name`
                 */
                name: string;
                /**
                 * 类型。
                 * @example `STRING`
                 */
                type: string;
                /**
                 * 列Label等级。
                 * @example `0`
                 */
                label: string;
                /**
                 * 备注。
                 * @example `商店名称`
                 */
                comment: string;
            }[];
            /**
             * 分区列信息。
             */
            partitionColumns: {
                /**
                 * 列名。
                 * @example `sale_date`
                 */
                name: string;
                /**
                 * 类型。
                 * @example `STRING`
                 */
                type: string;
                /**
                 * 列Label等级。
                 * @example `0`
                 */
                label: string;
                /**
                 * 备注。
                 * @example `销售日期`
                 */
                comment: string;
            }[];
            /**
             * 是否物化视图。
             * @example `false`
             */
            materializedView: boolean;
            /**
             * 是否允许通过物化视图执行查询改写操作。
             * @example `false`
             */
            rewriteEnabled: boolean;
            /**
             * 是否开启自动刷新物化视图。
             * @example `false`
             */
            autoRefreshEnabled: boolean;
            /**
             * 是否因为源表数据有变化，导致物化视图数据无效。
             * @example `false`
             */
            isOutdated: boolean;
            /**
             * 物理大小。
             * @example `2763`
             */
            physicalSize: number;
            /**
             * 文件数量。
             * @example `200`
             */
            fileNum: number;
            /**
             * 外部表解析器。
             * @example `com.aliyun.odps.CsvStorageHandler`
             */
            storageHandler: string;
            /**
             * 外部表地址
             * @example `oss://oss-cn-hangzhou-internal.aliyuncs.com/oss-mc-test/Demo1/`
             */
            location: string;
            /**
             * RAM中AliyunODPSDefaultRole的ARN信息。
             * @example `acs:ram::xxxxx:role/aliyunodpsdefaultrole`
             */
            odpsPropertiesRolearn: string;
            /**
             * 描述MaxCompute将访问的Tablestore表的列，包括主键和属性列。
             * @example `:o_orderkey,:o_orderdate,o_custkey,o_orderstatus,o_totalprice`
             */
            tablestoreColumnsMapping: string;
            /**
             * 需要访问的Tablestore表名称。
             * @example `ots_tpch_orders`
             */
            tablesotreTableName: string;
            /**
             * 是否忽略表头。
             * @example `true`
             */
            odpsSqlTextOptionFlushHeader: boolean;
            /**
             * 忽略表头前N行。
             * @example `1`
             */
            odpsTextOptionHeaderLinesCount: number;
        }[];
        /**
         * 设定结果从marker之后按字母排序的第一个开始返回。
         * @example `cHlvZHBzX3VkZl8xMDExNV8xNDU3NDI4NDkzKg==`
         */
        marker: string;
        /**
         * 每页返回的最大结果数。
         * @example `10`
         */
        maxItem: number;
    };
}
