export interface CreateProjectModifyRecordsRequest {
    /**
     * 数据迁移或数据同步项目的 ID。
     * @example `np_fe****`
     */
    "Id": string;
    /**
     * 数据库对象列表。
     */
    "Databases": {
        /**
         * 数据库的 ID。
         * @example `db_id`
         */
        Id: string;
        /**
         * 数据库的名称。
         * @example `db_name`
         */
        Name: string;
        /**
         * 数据库的映射名称。
         * @example `mapped_db`
         */
        MappedName: string;
        /**
         * 当前数据库中传输表对象的配置。Mode 为 WILDCARD 时，该参数表示具体黑名单或白名单的配置，表和视图共用。
         */
        Tables: {
            /**
             * 表的名称。
             * @example `table_name`
             */
            Name: string;
            /**
             * 表的映射名称。
             * @example `mapped_table`
             */
            MappedName: string;
            /**
             * 表的 ID。
             * @example `table_id`
             */
            Id: string;
            /**
             * 通过标准的 SQL 语句中的 `WHERE` 子句，用于配置行过滤。
             * @example `id<1`
             */
            WhereClause: string;
            /**
             * 过滤列集合。
             */
            FilterColumns: string[];
            /**
             * 分片键列集合。
             */
            ShardColumns: string[];
            /**
             * ADB 数据源的映射信息。
             */
            AdbTableSchema: {
                /**
                 * 主键列集合。
                 */
                PrimaryKeys: string[];
                /**
                 * 分布键列集合。
                 */
                DistributedKeys: string[];
                /**
                 * 分区表达式。
                 * @example `PARTITION BY VALUE('id')`
                 */
                PartitionStatement: string;
                /**
                 * 表的生命周期。
                 * @example `30`
                 */
                PartitionLifeCycle: string;
            };
        }[];
        /**
         * 当前数据库中传输视图对象的配置列表。
         */
        Views: {
            /**
             * 视图的名称。
             * @example `view_name`
             */
            Name: string;
            /**
             * 视图的映射名称。
             * @example `mapped_view`
             */
            MappedName: string;
            /**
             * 视图的 ID。
             * @example `view_id`
             */
            Id: string;
            /**
             * 通过标准的 SQL 语句中的 `WHERE` 子句，用于配置行过滤。
             * @example `id<1`
             */
            WhereClause: string;
            /**
             * 过滤列集合。
             */
            FilterColumns: string[];
            /**
             * 分片键列集合。
             */
            ShardColumns: string[];
            /**
             * ADB 数据源的映射信息。
             */
            AdbTableSchema: {
                /**
                 * 主键列集合。
                 */
                PrimaryKeys: string[];
                /**
                 * 分布键列集合。
                 */
                DistributedKeys: string[];
                /**
                 * 分区表达式。
                 * @example `PARTITION BY VALUE('id')`
                 */
                PartitionStatement: string;
                /**
                 * 表的生命周期。
                 * @example `30`
                 */
                PartitionLifeCycle: string;
            };
        }[];
        /**
         * 具体表对象的配置集合。`mode` 为 `WILDCARD` 时，该参数表示具体表对象的重命名、行过滤配置。
         */
        SpecificTables: {
            /**
             * 表的名称。
             * @example `table_name`
             */
            Name: string;
            /**
             * 表的映射名称。
             * @example `mapped_table`
             */
            MappedName: string;
            /**
             * 表的 ID。
             * @example `table_id`
             */
            Id: string;
            /**
             * 通过标准的 SQL 语句中的 `WHERE` 子句，用于配置行过滤。
             * @example `id<1`
             */
            WhereClause: string;
            /**
             * 过滤列集合。
             */
            FilterColumns: string[];
            /**
             * 分片键列集合。
             */
            ShardColumns: string[];
            /**
             * ADB 数据源的映射信息。
             */
            AdbTableSchema: {
                /**
                 * 主键列集合。
                 */
                PrimaryKeys: string[];
                /**
                 * 分布键列集合。
                 */
                DistributedKeys: string[];
                /**
                 * 分区表达式。
                 * @example `PARTITION BY VALUE('id')`
                 */
                PartitionStatement: string;
                /**
                 * 表的生命周期。
                 * @example `30`
                 */
                PartitionLifeCycle: string;
            };
        }[];
        /**
         * 具体视图对象的配置列表。`mode` 为 `WILDCARD` 时，该参数表示具体视图对象的重命名配置。
         */
        SpecificViews: {
            /**
             * 视图的名称。
             * @example `view_name`
             */
            Name: string;
            /**
             * 视图的映射名称。
             * @example `mapped_view`
             */
            MappedName: string;
            /**
             * 视图的 ID。
             * @example `view_id`
             */
            Id: string;
            /**
             * 通过标准的 SQL 语句中的 `WHERE` 子句，用于配置行过滤。
             * @example `id <1`
             */
            WhereClause: string;
            /**
             * 过滤列集合。
             */
            FilterColumns: string[];
            /**
             * 分片键列集合。
             */
            ShardColumns: string[];
            /**
             * ADB 数据源的映射信息。
             */
            AdbTableSchema: {
                /**
                 * 主键列集合。
                 */
                PrimaryKeys: string[];
                /**
                 * 分布键列集合。
                 */
                DistributedKeys: string[];
                /**
                 * 分区表达式。
                 * @example `PARTITION BY VALUE('id')`
                 */
                PartitionStatement: string;
                /**
                 * 表的生命周期。
                 * @example `30`
                 */
                PartitionLifeCycle: string;
            };
        }[];
    }[];
}
