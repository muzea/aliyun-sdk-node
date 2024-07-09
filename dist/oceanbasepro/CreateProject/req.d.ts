export interface CreateProjectRequest {
    /**
     * 是否使用 OSS 方式创建。
     * @example `true`
     */
    "UseOss"?: boolean;
    /**
     * 通过 GetUploadOssUrl 获取的 Osskey。
     * @example `open_api_create_project/oacp_xxx`
     */
    "OssKey"?: string;
    /**
     * 数据迁移或数据同步项目的 ID。
     * @example `np_fe****`
     */
    "Id": string;
    /**
     * 数据迁移或数据同步项目的名称。
     * @example `test`
     */
    "Name": string;
    /**
     * 项目的类型，包括 `MIGRATION`（表示数据迁移项目）和 `SYNC`（表示数据同步项目）。
     * @example `MIGRATION`
     */
    "Type": string;
    /**
     * 标签 ID 的集合，最多支持 5 个。
     * @example `MIGRATION`
     */
    "LabelIds"?: string[];
    /**
     * 传输实例的 ID。
     * @example `g_abcdefj***`
     */
    "WorkerGradeId": string;
    /**
     * 源端数据源的 ID。您需要调用 `ListDataSource` 接口获取 ID，格式为 e_****。
     * @example `e_4j0c12z****`
     */
    "SourceEndpointId": string;
    /**
     * 目标端数据源的 ID。您需要调用 `ListDataSource` 接口获取 ID，格式为 e_****。
     * @example `e_4j0cz****`
     */
    "SinkEndpointId": string;
    /**
     * 传输对象的映射信息。
     */
    "TransferMapping": {
        /**
         * 传输对象映射模式，包括 `SPECIFIC`（表示指定对象）和 `WILDCARD`（表示匹配规则）。
         * @example `SPCEIFIC`
         */
        Mode: string;
        /**
         * 数据库的信息。
         */
        Databases: {
            /**
             * 数据库的 ID。
             * @example `gez3***`
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
             * 映射对象所在的集群，源端为 OceanBase 数据源时生效。
             * ><notice>该参数已废弃。></notice>
             * @example `cluster_name`
             */
            ClusterName: string;
            /**
             * 映射对象所在的租户，源端为 OceanBase 数据源时生效。><notice>该参数已废弃。></notice>
             * @example `tenant_name`
             */
            TenantName: string;
            /**
             * 当前数据库中传输表对象的配置。`Mode` 为 `WILDCARD` 时，该参数表示具体黑名单或白名单的配置，表和视图共用。
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
                 * @example `e_4l085bu7***`
                 */
                Id: string;
                /**
                 * 标准的 SQL 语句中的 `WHERE` 子句，用于配置行过滤。
                 * @example `id > 1`
                 */
                WhereClause: string;
                /**
                 * 过滤列集合。
                 */
                FilterColumns: string[];
                /**
                 * 分片列集合。
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
                 * @example `e_4himpq4z***`
                 */
                Id: string;
                /**
                 * 标准的 SQL 语句中的 `WHERE` 子句，用于配置行过滤。
                 * @example `id>1`
                 */
                WhereClause: string;
                /**
                 * 过滤列集合。
                 */
                FilterColumns: string[];
                /**
                 * 分片列集合。
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
                 * @example `e_4azdil4lu7***`
                 */
                Id: string;
                /**
                 * 通过标准的 SQL 语句中的 `WHERE` 子句，用于配置行过滤。
                 * @example `id<5`
                 */
                WhereClause: string;
                /**
                 * 过滤列集合。
                 */
                FilterColumns: string[];
                /**
                 * 分片列集合。
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
             * 具体视图对象的配置。`mode` 为 `WILDCARD` 时，该参数表示具体视图对象的重命名配置。
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
                 * @example `e_3wsmjv49a***`
                 */
                Id: string;
                /**
                 * 标准的 SQL 语句中的 `WHERE` 子句，用于配置行过滤。
                 * @example `id<5`
                 */
                WhereClause: string;
                /**
                 * 过滤列集合。
                 */
                FilterColumns: string[];
                /**
                 * 分片列集合。
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
        /**
         * 匹配规则模式：数据库对象黑名单列表。
         */
        DatabasesBlack: {
            /**
             * 数据库的 ID。
             * @example `e_3y6v5v1x94f4`
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
             * 映射对象所在的集群，源端为 OceanBase 数据源时生效。><notice>该参数已废弃。></notice>
             * @example `cluster_name`
             */
            ClusterName: string;
            /**
             * 映射对象所在的租户，源端为 OceanBase 数据源时生效。><notice>该参数已废弃。></notice>
             * @example `tenant_name`
             */
            TenantName: string;
            /**
             * 当前数据库中传输表对象的配置。`Mode` 为 `WILDCARD` 时，该参数表示具体黑名单或白名单的配置，表和视图共用。
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
                 * @example `e_474hmh5iqo***`
                 */
                Id: string;
                /**
                 * 标准的 SQL 语句中的 `WHERE` 子句，用于配置行过滤。
                 * @example `id<1`
                 */
                WhereClause: string;
                /**
                 * 过滤列集合。
                 */
                FilterColumns: string[];
                /**
                 * 分片列集合。
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
                     * @example `PARTITION BY VALUE('id')
                    `
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
                 * @example `e_4azdil4lu7mo`
                 */
                Id: string;
                /**
                 * 通过标准的 SQL 语句中的 `WHERE` 子句，用于配置行过滤。
                 * @example `id<5`
                 */
                WhereClause: string;
                /**
                 * 过滤列集合。
                 */
                FilterColumns: string[];
                /**
                 * 分片列集合。
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
                     * @example `PARTITION BY VALUE('id')
                    `
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
                 * 表的 ID。
                 * @example `e_4himpq4zf***`
                 */
                Id: string;
                /**
                 * 表的映射名称。
                 * @example `mapped_table`
                 */
                MappedName: string;
                /**
                 * 标准的 SQL 语句中的 WHERE 子句，用于配置行过滤。
                 * @example `id<1`
                 */
                WhereClause: string;
                /**
                 * 过滤列集合。
                 */
                FilterColumns: string[];
                /**
                 * 分片列集合。
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
             * 具体视图对象的配置集合。`mode` 为 `WILDCARD` 时，该参数表示具体视图对象的重命名配置。
             */
            SpecificViews: {
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
                 * 视图的 ID。
                 * @example `e_474hmh5iqo***`
                 */
                Id: string;
                /**
                 * 标准的 SQL 语句中的 `WHERE` 子句，用于配置行过滤。
                 * @example `id<1`
                 */
                WhereClause: string;
                /**
                 * 过滤列集合。
                 */
                FilterColumns: string[];
                /**
                 * 分片列集合。
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
                     * @example `PARTITION BY VALUE('id')
                    `
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
        /**
         * 匹配规则模式：表和视图的通配白名单列表。
         */
        TableAndViewWhiteList: string[];
        /**
         * 匹配规则模式：表和视图的通配黑名单列表。
         */
        TableAndViewBlackList: string[];
    };
    /**
     * 通用的传输配置。
     */
    "CommonTransferConfig"?: {
        /**
         * 支持的表类型。包括 ALL（所有表）、WITH_UNIQUE_ROW_ID（有唯一行标识的表）和 WITHOUT_UNIQUE_ROW_ID（无唯一行标识的表），默认值为 ALL。
         * @example `ALL`
         */
        TableCategory: string;
        /**
         * 是否为容灾双活场景。
         * @example `false`
         */
        ActiveActive: boolean;
        /**
         * 投递至消息队列时，数据 JSON 序列化类型。包括 DEFAULT、CANAL、DATAWORKS_V2、SHAREPLEX、DEFAULT_WITH_SCHEMA、DEBEZIUM、DEBEZIUMFlatten 和 DEBEZIUMSMT。
         * @example `DEFAULT`
         */
        MqSerializerType: string;
        /**
         * 投递至消息队列时，分区路由方式。包括 ONE（指定分区投递）、HASH（根据主键/分片列值进行 HASH 分区投递、TABLE（根据库表名进行 HASH 分区投递）。
         * @example `ONE`
         */
        MqPartitionMode: string;
        /**
         * 当 `partitionMode` 为 `ONE` 时，该参数表示投递的分区在当前 Topic 下的位置。
         * @example `0`
         */
        MqPartition: number;
        /**
         * 投递至消息队列 DataHub 时，指定 Topic 的类型。
         * @example `TUPLE`
         */
        DatahubTopicType: string;
        /**
         * 指定生产组名（目标端为 ROCKETMQ 时生效），默认值为 OMS。
         * @example `OMS`
         */
        RocketMqProducerGroup: string;
        /**
         * 设置消息 tag（目标端为 ROCKETMQ 时生效），默认 default->default_tag。
         * @example `default_tag`
         */
        RocketMqMsgTags: string;
        /**
         * 是否开启消息追踪（目标端为 ROCKETMQ 时生效）。
         * @example `false`
         */
        RocketMqEnableMsgTrace: boolean;
        /**
         * 设置消息投递超时时间（目标端为 ROCKETMQ 时生效）。
         * @example `null`
         */
        RocketMqSendMsgTimeout: number;
        /**
         * 业务系统标识。
         * @example `null`
         */
        DataWorksBusinessName: string;
        /**
         * 是否同步源端数据所在的 Schema 到目标端（预期目标端表上会创建一个附加列，用于接收 Schema 名称，该字段见 `syncSchemaColumnName` 参数）。
         * @example `true`
         */
        SyncSchema: boolean;
        /**
         * 如果开启同步 Schema 到目标端的功能，您可以指定同步到目标端的列名（需要在目标端预先创建该列）。
         * @example `source_schema_name`
         */
        SyncSchemaColumnName: string;
        /**
         * 自定义列数组（目标端需要预先创建对应的列）。
         */
        CustomColumns: {
            /**
             * 列的名称。
             * @example `test_column`
             */
            ColumnName: string;
            /**
             * 列值表达式。
             * @example `test`
             */
            Expression: string;
        }[];
        SinkStoreFormat: string;
        SourceStoreFormat: string;
    };
    /**
     * 是否允许结构传输。
     * @example `true`
     */
    "EnableStructTransfer"?: boolean;
    /**
     * 结构传输的配置。
     */
    "StructTransferConfig"?: {
        /**
         * byte/char 转换方案，默认值为 `DO_NOTHING_IF_BYTE_USED`。
         * @example `DO_NOTHING_IF_BYTE_USED`
         */
        ByteCharConvertStrategy: string;
        /**
         * 是否允许索引后置。
         * @example `true`
         */
        DeferIndexCreation: boolean;
    };
    /**
     * 是否开启全量传输。
     * @example `true`
     */
    "EnableFullTransfer"?: boolean;
    /**
     * 是否开启全量校验。
     * @example `true`
     */
    "EnableFullVerify"?: boolean;
    /**
     * 全量传输的配置。
     */
    "FullTransferConfig"?: {
        /**
         * 处理源端无唯一索引表的全量迁移时，是否清空目标表。
         * 场景：PolarDB-X 1.0 数据库多链路无主键表汇聚至同一目标端表，避免前面若干条链路有部分数据后，另一条链路刚启动便清空了历史的迁移数据。
         * @example `true`
         */
        NonePkUkTruncateDstTable: boolean;
        /**
         * 目标端表对象存在记录时处理策略，包括 **忽略** 和 **停止迁移**。
         * - 设置为 true，表示选择忽略：当目标端表对象存在数据时，如果原数据与写入数据冲突，数据传输采用将冲突数据记录日志，保留原数据不变的策略进行数据写入。
         * ><notice>选择忽略，全量校验将使用 IN 模式拉取数据，无法校验目标端多数据的场景，并且校验性能存在一定程度降级。></notice>
         * - 设置为 false，表示选择停止迁移：当目标端表对象存在数据时，全量迁移会报错不允许迁移，请处理好目标端数据后再继续迁移。
         * ><notice>如果出错后单击恢复，数据传输将忽略该配置选项，继续迁移表数据，请谨慎操作。></notice>
         * @example `true`
         */
        AllowDestTableNotEmpty: boolean;
        /**
         * 全量迁移并发速度，包括 STEADY、NORMAL 和 FAST。
         * ><notice>如果有全量迁移步骤，则 FullTransferSpeedMode 必传，可以传 NORMAL。></notice>
         * @example `NORMAL`
         */
        FullTransferSpeedMode: string;
        /**
         * 全量校验并发速度，包括 STEADY、NORMAL 和 FAST。
         * ><notice>如果有全量校验步骤，则 FullVerifySpeedMode 必传，可以传 NORMAL。></notice>
         * @example `NORMAL`
         */
        FullVerifySpeedMode: string;
        /**
         * 写入并发数。
         * @example `64`
         */
        WriteWorkerNum: number;
        /**
         * 读取并发数。
         * @example `64`
         */
        ReadWorkerNum: number;
        /**
         * 全量传输阶段限制能达到的最大传输速率，单位为记录数/秒。输入 null 时，表示不限制 RPS。
         * @example `null`
         */
        ThrottleRps: number;
        /**
         * 全量传输阶段限制能达到的最大传输流量，单位为字节/秒。输入 null 时，表示不限制 IOPS。
         * @example `null`
         */
        ThrottleIOPS: number;
    };
    /**
     * 是否开启增量同步。
     * @example `true`
     */
    "EnableIncrTransfer"?: boolean;
    /**
     * 是否开启反向增量。
     * @example `true`
     */
    "EnableReverseIncrTransfer"?: boolean;
    /**
     * 增量同步的配置。
     */
    "IncrTransferConfig"?: {
        /**
         * 增量同步起始位点。仅启用增量同步但未启用全量传输时，支持设置该参数。
         * @example `1689201369`
         */
        StartTimestamp: string;
        /**
         * 有增量同步阶段时，同步的增量数据类型。
         */
        RecordTypeWhiteList: string[];
        /**
         * 有增量同步阶段且增量日志拉取组件为 Store 时，日志的保存时间。单位为小时，默认 7 天，最长支持 365 天。
         * @example `24`
         */
        StoreLogKeptHour: number;
        /**
         * 有增量同步阶段且增量日志拉取组件为 Store 时，是否开启事务内序号编排。
         * @example `true`
         */
        EnableSequencingWithinTxn: boolean;
        /**
         * 增量同步的线程数，默认值为 64。
         * @example `64`
         */
        IncrSyncConcurrency: number;
        /**
         * 是否开启增量记录（DML、DDL）统计。
         * @example `true`
         */
        EnableIncrSyncStatistics: boolean;
        /**
         * 增量传输阶段限制能达到的最大传输速率，单位为记录数/秒。输入 null 时，表示不限制 RPS。
         * @example `null`
         */
        ThrottleRps: number;
        /**
         * 增量传输阶段限制能达到的最大传输流量，单位为字节/秒。输入 null 时，表示不限制 IOPS。
         * @example `null`
         */
        ThrottleIOPS: number;
        /**
         * 支持的 DDL 类型。
         */
        SupportDDLTypes: string[];
    };
    /**
     * 反向增量传输配置。
     */
    "ReverseIncrTransferConfig"?: {
        /**
         * 反向增量同步位点。
         * @example `1684771200`
         */
        StartTimestamp: string;
        /**
         * 有反向增量同步阶段时，同步的增量数据类型。
         */
        RecordTypeWhiteList: string[];
        /**
         * 有反向增量同步阶段，且增量日志拉取组件为 Store 时的日志保存时间，单位为小时。默认 7 天，最长 365 天。
         * @example `24`
         */
        StoreLogKeptHour: number;
        /**
         * 有反向增量同步阶段，且增量日志拉取组件为 Store 时，是否开启事务内序号编排。
         * @example `true`
         */
        EnableSequencingWithinTxn: boolean;
        /**
         * 反向增量同步线程数，默认值为 64。
         * @example `64`
         */
        IncrSyncConcurrency: number;
        /**
         * 是否开启反向增量记录（DML、DDL）统计。
         * @example `true`
         */
        EnableIncrSyncStatistics: boolean;
        /**
         * 反向增量传输阶段限制能达到的最大传输速率，单位：记录数/秒，输入 null 时不限制RPS
         * @example `null`
         */
        ThrottleRps: number;
        /**
         * 反向增量传输阶段限制能达到的最大传输流量，单位：字节/秒，输入 null 时不限制 IOPS。
         * @example `null`
         */
        ThrottleIOPS: number;
        /**
         * 支持的 DDL 类型。
         */
        SupportDDLTypes: string[];
    };
}
