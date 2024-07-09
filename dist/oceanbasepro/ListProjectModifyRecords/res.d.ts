export interface ListProjectModifyRecordsResponse {
    /**
     * 是否调用成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误详情。
     */
    ErrorDetail: {
        /**
         * 错误码（旧）。
         * @example `INNER_ERROR`
         */
        Code: string;
        /**
         * 包括 FATAL、ERROR、WARNING 和 CRITICAL。
         * @example `ERROR`
         */
        Level: string;
        /**
         * 错误描述（旧）。
         * @example `A system error occurred.
        `
         */
        Message: string;
        /**
         * 用于填充 Message 中的占位符。
         */
        ExtraContext: any;
        /**
         * 错误信息的 Key。
         * @example `null`
         */
        MessageMcmsKey: string;
        /**
         * 用于填充 MessageMcmsKey 中的占位符。
         */
        MessageMcmsContext: any;
        /**
         * 错误原因。
         * @example `null`
         */
        Reason: string;
        /**
         * 错误原因的 Key。
         * @example `null`
         */
        ReasonMcmsKey: string;
        /**
         * 错误原因的上下文。
         */
        ReasonMcmsContext: any;
        /**
         * 建议（新）。
         * @example `Contact the administrator. `
         */
        Proposal: string;
        /**
         * 建议内容的 Key。
         * @example `null`
         */
        ProposalMcmsKey: string;
        /**
         * 建议内容的上下文。
         */
        ProposalMcmsContext: any;
        /**
         * 上游错误详情，用于处理 HTTP 请求。
         * @example `null`
         */
        UpstreamErrorDetail: any;
    };
    /**
     * 错误码（旧）。
     * @example `INNER_ERROR`
     */
    Code: string;
    /**
     * 错误描述（旧）。
     * @example `A system error occurred.
    `
     */
    Message: string;
    /**
     * 建议。
     * @example `Contact the administrator. `
     */
    Advice: string;
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C`
     */
    RequestId: string;
    /**
     * 页序号，分页查询时生效。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 页大小，分页查询时生效。
     * @example `10`
     */
    PageSize: number;
    /**
     * 总数，分页查询时生效。
     * @example `100`
     */
    TotalCount: number;
    /**
     * 请求耗时，单位为秒。
     * @example `30`
     */
    Cost: string;
    /**
     * 项目修改记录的相关信息。
     */
    Data: {
        /**
         * 修改记录的 ID。
         * @example `344000005`
         */
        Id: number;
        /**
         * 子项目的 ID（增加表时产生）。
         * @example `np_598qm***`
         */
        SubProjectId: string;
        /**
         * 合并父子项目的工单 ID，用于增加表的场景。
         * @example `id`
         */
        MergeRequestId: number;
        /**
         * 更新父项目工单 ID，用于减表或已有表对象更新的场景。
         * @example `id`
         */
        UpdateRequestId: number;
        /**
         * 修改记录任务类型，包括 INCREASE_OBJECT（增加对象）和 DECREASE_OBJECT（减少对象）。
         * @example `INCREASE_OBJECT`
         */
        Type: string;
        /**
         * 修改记录的状态，包括：
         * - PENDING：待执行
         * - MODIFYING：修改中（减表修改父项目工单的执行，加表创建子项目）
         * - RUNNING：运行中（子项目运行中）
         * - MERGING：合并中（父子项目符合合并条件）
         * - TERMINATED：已终止
         * - SUCCESS：成功
         * - FAILED：失败
         * - CANCEL：已取消
         * @example `PENDING`
         */
        Status: string;
        /**
         * 错误详情。
         */
        ErrorDetail: {
            /**
             * 错误码（旧）。
             * @example `INNER_ERROR`
             */
            Code: string;
            /**
             * 包括 FATAL、ERROR、WARNING 和 CRITICAL。
             * @example `ERROR`
             */
            Level: string;
            /**
             * 错误描述（旧）。
             * @example `A system error occurred.
            `
             */
            Message: string;
            /**
             * 用于填充 Message 中的占位符。
             */
            ExtraContext: any;
            /**
             * 错误信息的 Key。
             * @example `null`
             */
            MessageMcmsKey: string;
            /**
             * 用于填充 MessageMcmsKey 中的占位符。
             */
            MessageMcmsContext: any;
            /**
             * 错误原因。
             * @example `null`
             */
            Reason: string;
            /**
             * 错误原因的 Key。
             * @example `null`
             */
            ReasonMcmsKey: string;
            /**
             * 错误原因的上下文。
             */
            ReasonMcmsContext: any;
            /**
             * 建议（新）。
             * @example `null`
             */
            Proposal: string;
            /**
             * 建议内容的 Key。
             * @example `null`
             */
            ProposalMcmsKey: string;
            /**
             * 建议内容的上下文。
             */
            ProposalMcmsContext: any;
            /**
             * 上游错误详情，用于处理 HTTP 请求。
             * @example `null`
             */
            UpstreamErrorDetail: any;
        };
        /**
         * 减少的对象（同步）。
         */
        Databases: {
            /**
             * 数据库的映射名称。
             * @example `mapped_db`
             */
            MappedName: string;
            /**
             * 数据库的名称。
             * @example `db_name`
             */
            Name: string;
            /**
             * 数据库的 ID。
             * @example `db_id`
             */
            Id: string;
            /**
             * 当前数据库中传输表对象的配置。
             */
            Tables: {
                /**
                 * 表或 Topic 的映射名称。
                 * @example `mapped_name`
                 */
                MappedName: string;
                /**
                 * 表的名称。
                 * @example `table_name`
                 */
                Name: string;
                /**
                 * 表的 ID。
                 * @example `table_id`
                 */
                Id: string;
                /**
                 * 通过标准的 SQL 语句中的 `WHERE` 子句，用于配置行过滤。
                 * @example `id < 1`
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
                 * 待传输列的列表。
                 */
                Columns: {
                    /**
                     * 列的名称。
                     * @example `col_name`
                     */
                    ColumnName: string;
                    /**
                     * 列的映射名称。
                     * @example `mapped_col`
                     */
                    MappedName: string;
                    /**
                     * 列的位置。
                     * @example `null`
                     */
                    Position: number;
                    /**
                     * 列的类型。
                     * @example `FLOAT`
                     */
                    ColumnType: string;
                    /**
                     * 列类型的引申（包括 INT8, INT16, INT24, INT32, INT64, BIGINT, BOOLEAN, FLOAT, DOUBLE, DECIMAL, NUMBER, SMALL_MONEY, MONEY, DEC_FLOAT, REAL, UCHAR_STRING, GRAPHIC_STRING, CHAR_STRING, NCHAR_STRING, VAR_GRAPHIC_STRING, VAR_UCHAR_STRING, VAR_STRING, VAR_CHAR_STRING, VAR_NCHAR_STRING, ROW_ID, UROWID, TEXT, NTEXT, UTEXT, TINY_TEXT, MEDIUM_TEXT, LONG_TEXT, BINARY_BYTES, VAR_BINARY_BYTES, RAW, LONG_RAW, BIT, VAR_BIT, BLOB, TINY_BLOB, MEDIUM_BLOB, LONG_BLOB, BFILE, IMAGE, JSONB, UUID, ENUM, SET, INTERVAL_DAY_TO_SECOND, INTERVAL_YEAR_TO_MONTH, INTERVAL_DATE_TIME, CLOB, NCLOB, XML, JSON, LONG_VAR_CHAR, LONG_VAR_GRAPHIC, GEOGRAPHY, GEOMETRY, POINT, LSEG, BOX, PATH, CIRCLE, LINESTRING, POLYGON, MULTIPOINT, MULTILINESTRING, MULTIPOLYGON, GEOMETRYCOLLECTION, CIDR, INET, MACADDR, MACADDR8, TSVERCTOR, TSQUERY, YEAR, DATE, MYSQL_NEW_DATE, TIME, TIME_WITH_NANOS, TIME_WITH_TIMEZONE, SMALL_DATETIME, DATETIME, DATETIME_WITH_NONAS, TIMESTAMP_IN_LONG, TIMESTAMP_IN_LONG_WITH_NANOS, TIMESTAMP, TIMESTAMP_WITH_NANOS, TIMESTAMP_WITH_TIMEZONE, TIMESTAMP_WITH_LOCAL_TIMEZONE, ZONED_DATETIME, OID, REGCLASS, REGCOLLATION, REGCONFIG, REGDICTIONARY, REGNAMESPACE, REGOPER, REGOPERATOR, REGROLE, REGTYPE, INT4RANGE, INT8RANGE, NUMRANGE, TSRANGE, TSTZRANGE, DATERANGE, STRUCT, LIST, NULL, CUSTOM_TYPE, UNIQUEIDENTIFIER, UNSUPPORTED_TYPE）。
                     * @example `INT8`
                     */
                    RecordFieldType: string;
                    /**
                     * 数据库记录的列类型的原始字符串。
                     * @example `null`
                     */
                    RawColumnType: string;
                    /**
                     * 索引的类型，包括 PRI、UNI 和 MUL。
                     * @example `PRI`
                     */
                    ColumnKey: string;
                    /**
                     * 是否可以为空。
                     * @example `true`
                     */
                    Nullable: boolean;
                    /**
                     * 默认值。
                     * @example `null`
                     */
                    DefaultValue: string;
                    /**
                     * 列的长度。
                     * @example `null`
                     */
                    DataLength: number;
                    /**
                     * 列的精度。
                     * @example `64`
                     */
                    DataPrecision: number;
                    /**
                     * 小数点。
                     * @example `null`
                     */
                    DataScale: number;
                    /**
                     * 列的字符编码。
                     * @example `utf8`
                     */
                    Encoding: string;
                    /**
                     * 列的注释。
                     * @example `comments`
                     */
                    ColumnComment: string;
                    /**
                     * 是否为隐藏列。
                     * @example `false`
                     */
                    IsGenerateField: boolean;
                    /**
                     * 包括 DATABASE 和 TABLE。
                     * @example `DATABASE`
                     */
                    Type: string;
                }[];
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
                    PartitionLifeCycle: number;
                };
            }[];
            /**
             * 当前数据库中传输视图对象的配置列表。
             */
            Views: {
                /**
                 * 视图的映射名称。
                 * @example `mapped_view`
                 */
                MappedName: string;
                /**
                 * 表的名称。
                 * @example `table_name`
                 */
                Name: string;
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
                 * 待传输列的列表。
                 */
                Columns: {
                    /**
                     * 列的名称。
                     * @example `col_name`
                     */
                    ColumnName: string;
                    /**
                     * 列的映射名称。
                     * @example `mapped_name`
                     */
                    MappedName: string;
                    /**
                     * 列的位置。
                     * @example `null`
                     */
                    Position: number;
                    /**
                     * 列的类型。
                     * @example `FLOAT`
                     */
                    ColumnType: string;
                    /**
                     * 列类型的引申。
                     * @example `INT8`
                     */
                    RecordFieldType: string;
                    /**
                     * 数据库记录的列类型的原始字符串。
                     * @example `null`
                     */
                    RawColumnType: string;
                    /**
                     * 索引的类型，包括 PRI、UNI 和 MUL。
                     * @example `PRI`
                     */
                    ColumnKey: string;
                    /**
                     * 是否可以为空。
                     * @example `false`
                     */
                    Nullable: boolean;
                    /**
                     * 默认值。
                     * @example `null`
                     */
                    DefaultValue: string;
                    /**
                     * 列的长度。
                     * @example `null`
                     */
                    DataLength: number;
                    /**
                     * 列的精度。
                     * @example `64`
                     */
                    DataPrecision: number;
                    /**
                     * 小数点。
                     * @example `null`
                     */
                    DataScale: number;
                    /**
                     * 列的字符编码。
                     * @example `utf16`
                     */
                    Encoding: string;
                    /**
                     * 列的注释。
                     * @example `comments`
                     */
                    ColumnComment: string;
                    /**
                     * 是否为隐藏列。
                     * @example `false`
                     */
                    IsGenerateField: boolean;
                    /**
                     * 包括 DATABASE 和 TABLE。
                     * @example `DATABASE`
                     */
                    Type: string;
                }[];
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
                    PartitionLifeCycle: number;
                };
            }[];
            /**
             * 具体表对象的配置集合。
             */
            SpecificTables: {
                /**
                 * 表或 Topic 的映射名称。
                 * @example `mapped_name`
                 */
                MappedName: string;
                /**
                 * 表的名称。
                 * @example `table_name`
                 */
                Name: string;
                /**
                 * 表的 ID。
                 * @example `table_id`
                 */
                Id: string;
                /**
                 * 通过标准的 SQL 语句中的 `WHERE` 子句，用于配置行过滤。
                 * @example `id<3`
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
                 * 待传输列的列表。
                 */
                Columns: {
                    /**
                     * 列的名称。
                     * @example `col_name`
                     */
                    ColumnName: string;
                    /**
                     * 列的映射名称。
                     * @example `mapped_name`
                     */
                    MappedName: string;
                    /**
                     * 列的位置。
                     * @example `null`
                     */
                    Position: number;
                    /**
                     * 列的类型。
                     * @example `FLOAT`
                     */
                    ColumnType: string;
                    /**
                     * 列类型的引申。
                     * @example `INT8`
                     */
                    RecordFieldType: string;
                    /**
                     * 数据库记录的列类型的原始字符串。
                     * @example `null`
                     */
                    RawColumnType: string;
                    /**
                     * 索引的类型，包括 PRI、UNI 和 MUL。
                     * @example `PRI`
                     */
                    ColumnKey: string;
                    /**
                     * 是否可以为空。
                     * @example `false`
                     */
                    Nullable: boolean;
                    /**
                     * 默认值。
                     * @example `null`
                     */
                    DefaultValue: string;
                    /**
                     * 列的长度。
                     * @example `null`
                     */
                    DataLength: number;
                    /**
                     * 列的精度。
                     * @example `64`
                     */
                    DataPrecision: number;
                    /**
                     * 小数点。
                     * @example `null`
                     */
                    DataScale: number;
                    /**
                     * 列的字符编码。
                     * @example `utf16`
                     */
                    Encoding: string;
                    /**
                     * 列的注释。
                     * @example `comments`
                     */
                    ColumnComment: string;
                    /**
                     * 是否为隐藏列。
                     * @example `false`
                     */
                    IsGenerateField: boolean;
                    /**
                     * 包括 DATABASE 和 TABLE。
                     * @example `DATABASE`
                     */
                    Type: string;
                }[];
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
                    PartitionLifeCycle: number;
                };
            }[];
            /**
             * 具体视图对象的配置列表。
             */
            SpecificViews: {
                /**
                 * 表或 Topic 的映射名称。
                 * @example `mapped_name`
                 */
                MappedName: string;
                /**
                 * 表的名称。
                 * @example `table_name`
                 */
                Name: string;
                /**
                 * 表的 ID。
                 * @example `table_id`
                 */
                Id: string;
                /**
                 * 通过标准的 SQL 语句中的 `WHERE` 子句，用于配置行过滤。
                 * @example `id < 1`
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
                 * 待传输列的列表。
                 */
                Columns: {
                    /**
                     * 列的名称。
                     * @example `col_name`
                     */
                    ColumnName: string;
                    /**
                     * 列的映射名称。
                     * @example `mapped_name`
                     */
                    MappedName: string;
                    /**
                     * 列的位置。
                     * @example `null`
                     */
                    Position: number;
                    /**
                     * 列的类型。
                     * @example `FLOAT`
                     */
                    ColumnType: string;
                    /**
                     * 列类型的引申。
                     * @example `INT8`
                     */
                    RecordFieldType: string;
                    /**
                     * 数据库记录的列类型的原始字符串。
                     * @example `null`
                     */
                    RawColumnType: string;
                    /**
                     * 索引的类型，包括 PRI、UNI 和 MUL。
                     * @example `PRI`
                     */
                    ColumnKey: string;
                    /**
                     * 是否可以为空。
                     * @example `true`
                     */
                    Nullable: boolean;
                    /**
                     * 默认值。
                     * @example `null`
                     */
                    DefaultValue: string;
                    /**
                     * 列的长度。
                     * @example `null`
                     */
                    DataLength: number;
                    /**
                     * 列的精度。
                     * @example `64`
                     */
                    DataPrecision: number;
                    /**
                     * 小数点。
                     * @example `null`
                     */
                    DataScale: number;
                    /**
                     * 列的字符编码。
                     * @example `utf16`
                     */
                    Encoding: string;
                    /**
                     * 列的注释。
                     * @example `comments`
                     */
                    ColumnComment: string;
                    /**
                     * 是否为隐藏列。
                     * @example `false`
                     */
                    IsGenerateField: boolean;
                    /**
                     * 包括 DATABASE 和 TABLE。
                     * @example `DATABASE`
                     */
                    Type: string;
                }[];
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
                    PartitionLifeCycle: number;
                };
            }[];
        }[];
        /**
         * 减少的对象（迁移）。
         */
        MigrationObjectsInfo: {
            /**
             * 是否为通配模式。
             * @example `true`
             */
            WildcardMode: boolean;
            /**
             * 待迁移表的列表。
             */
            Tables: {
                /**
                 * 数据库的名称。
                 * @example `schema_name`
                 */
                Schema: string;
                /**
                 * 迁移对象的名称。
                 * @example `table_name`
                 */
                Name: string;
            }[];
            /**
             * 待迁移表的黑名单列表。
             */
            TablesBlack: {
                /**
                 * 数据库的名称。
                 * @example `schema_name`
                 */
                Schema: string;
                /**
                 * 对象名称。
                 * @example `table_name`
                 */
                Name: string;
            }[];
            /**
             * 待迁移视图的列表。
             */
            Views: {
                /**
                 * 数据库的名称。
                 * @example `schema_name`
                 */
                Schema: string;
                /**
                 * 对象名称。
                 * @example `view_name`
                 */
                Name: string;
            }[];
            /**
             * 待迁移视图的黑名单列表。
             */
            ViewsBlack: {
                /**
                 * 数据库的名称。
                 * @example `schema_name`
                 */
                Schema: string;
                /**
                 * 对象名称。
                 * @example `view_name`
                 */
                Name: string;
            }[];
        };
        /**
         * 减少对象对应的匹配规则（迁移）。
         */
        OmsProjectMappingInfo: {
            /**
             * Schema 映射信息列表。
             */
            SchemaMappings: {
                /**
                 * 源端 Schema 的名称。
                 * @example `source_name`
                 */
                SourceName: string;
                /**
                 * Schema 的映射名称。
                 * @example `mapped_schema`
                 */
                DestName: string;
            }[];
            /**
             * 表映射信息列表。
             */
            TableMappings: {
                /**
                 * 源端 Schema 的名称。
                 * @example `source_schema`
                 */
                SourceSchema: string;
                /**
                 * 源端的对象名称。
                 * @example `source_name`
                 */
                SourceName: string;
                /**
                 * 对象的映射名称。
                 * @example `dest_name`
                 */
                DestName: string;
            }[];
            /**
             * 列的映射信息列表。
             */
            ColumnMappings: {
                /**
                 * 源端 Schema 的名称。
                 * @example `source_schema`
                 */
                SourceSchema: string;
                /**
                 * 源端表的名称。
                 * @example `source_table`
                 */
                SourceTable: string;
                /**
                 * 源端对象的名称。
                 * @example `source_name`
                 */
                SourceName: string;
                /**
                 * 目标端对象的名称。
                 * @example `dest_name`
                 */
                DestName: string;
            }[];
            /**
             * 视图的映射信息列表。
             */
            ViewMappings: {
                /**
                 * 源端 Schema 的名称。
                 * @example `schema_name`
                 */
                SourceSchema: string;
                /**
                 * 源端对象的名称。
                 * @example `source_name`
                 */
                SourceName: string;
                /**
                 * 对象的映射名称。
                 * @example `dest_name`
                 */
                DestName: string;
            }[];
        };
        /**
         * 减少对象的 ETL 信息（迁移）。
         */
        TableEtlList: {
            /**
             * 租户的名称。
             * @example `tenant_name`
             */
            TenantName: string;
            /**
             * 源端数据库的名称。
             * @example `db_name`
             */
            Database: string;
            /**
             * 目标端数据库的名称。
             * @example `dest_db`
             */
            DestDatabase: string;
            /**
             * 源端表的名称。
             * @example `table_name`
             */
            TableName: string;
            /**
             * 目标端表或 Topic 的名称。
             * @example `dest_name`
             */
            DestName: string;
            /**
             * 通过标准的 SQL 语句中的 `WHERE` 子句，用于配置行过滤。
             * @example `id>1`
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
             * 针对逻辑表下，逻辑表的 ID。
             * @example `null`
             */
            LogicTableId: string;
            /**
             * 针对物理表下传递 endpointId。
             * @example `null`
             */
            SourceEndpointId: string;
        }[];
        /**
         * 项目的更新时间，以 UTC + 0 时区的时间格式展示。
         * @example `2023-07-13T06:26:15`
         */
        GmtModified: string;
    }[];
}
