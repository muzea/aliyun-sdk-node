export interface CreateDIJobRequest {
    /**
     * DataWorks工作空间ID。您可以通过[ListProjects](~~178393~~)接口获取工作空间ID。
     * @example `10000`
     */
    "ProjectId"?: number;
    /**
     * 任务名称。
     * @example `mysql_to_holo_sync_8772`
     */
    "JobName"?: string;
    /**
     * 任务描述。
     * @example `mysql同步到hologres`
     */
    "Description"?: string;
    /**
     * 同步类型，可选的枚举值有：
     * - FullAndRealtimeIncremental（全量和实时增量）
     * - RealtimeIncremental（实时增量）
     * - Full（全量）
     * - OfflineIncremental（离线增量）
     * - FullAndOfflineIncremental（全量+离线增量）
     * @example `FullAndRealtimeIncremental`
     */
    "MigrationType"?: string;
    /**
     * 源端数据源类型，枚举值：MySQL。
     * @example `MySQL`
     */
    "SourceDataSourceType"?: string;
    /**
     * 目标端数据源类型，枚举值：Hologres、Hive。
     * @example `Hologres`
     */
    "DestinationDataSourceType"?: string;
    /**
     * 源端数据源设置，目前仅支持单个数据源。
     */
    "SourceDataSourceSettings"?: {
        /**
         * 数据源名称。
         * @example `mysql_datasource_1`
         */
        DataSourceName: string;
        /**
         * 数据源属性。
         */
        DataSourceProperties: any;
    }[];
    /**
     * 目标端数据源设置，目前仅支持单个数据源。
     */
    "DestinationDataSourceSettings"?: {
        /**
         * 数据源名称。
         * @example `holo_datasource_1`
         */
        DataSourceName: string;
        /**
         * 数据源属性。
         */
        DataSourceProperties: any;
    }[];
    /**
     * 资源设置。
     */
    "ResourceSettings"?: {
        /**
         * 离线同步资源。
         */
        OfflineResourceSettings: {
            /**
             * 离线同步使用的数据集成资源组标识。
             * @example `S_res_group_111_222`
             */
            ResourceGroupIdentifier: string;
        };
        /**
         * 实时同步资源。
         */
        RealtimeResourceSettings: {
            /**
             * 实时同步使用的数据集成资源组标识。
             * @example `S_res_group_111_222`
             */
            ResourceGroupIdentifier: string;
        };
        RequestedCu: number;
    };
    /**
     * 同步对象转换规则定义列表，列表中每个元素为一条转换规则定义。
     */
    "TransformationRules"?: {
        /**
         * 规则名称，当动作类型和动作作用的目标类型相同时，规则名称需保证唯一性。
         * @example `rename_rule_1`
         */
        RuleName: string;
        /**
         * 动作类型，可选的枚举值：
         * - DefinePrimaryKey（定义主键）
         * - Rename（重命名）
         * - AddColumn（增加列）
         * - HandleDml（DML处理）
         * - DefineIncrementalCondition（定义增量条件）
         * - DefineCycleScheduleSettings（定义周期调度设置）
         * - DefineRuntimeSettings（定义高级配置参数）
         * - DefinePartitionKey（定义分区列）
         * @example `Rename`
         */
        RuleActionType: string;
        /**
         * 动作作用的目标类型，可选的枚举值：
         * - Table（表）
         * - Schema（schema）
         * @example `Table`
         */
        RuleTargetType: string;
        /**
         * 规则表达式，json string格式。
         * 重命名规则（Rename）示例：
         * {"expression":"${srcDatasourceName}_${srcDatabaseName}_0922","variables":\[{"variableName":"srcDatabaseName","variableRules":\[{"from":"fromdb","to":"todb"}\]}\]}
         * - expression：为重命名转换规则表达式，表达式内支持变量包括：${srcDatasourceName}（源端数据源名）、${srcDatabaseName}（源端库名）、${srcTableName}（源端表名）。
         * - variables：为重命名转换规则表达式中各变量的生成规则，参数默认值为对应含义在源端的原始值，可按需定义一组字符串替换规则对原始值进行改写。variableName：变量名，不含${}。variableRules：变量生成规则组，按顺序串行执行替换，from原始字符串；to替换后字符串。
         * 在目标端增加指定列并赋值规则（AddColumn）示例：
         * {"columns":\[{"columnName":"my_add_column","columnValueType":"Constant","columnValue":"123"}\]}
         * - 如不指定，默认规则为不加列不复制。
         * - columnName：附加的列名称。
         * - columnValueType：附加的列取值类型，包括Constant（常量）、Variable（变量）。
         * - columnValue：附加的列取值。当valueType=Constant时，value为自定义常量，String类型。当valueType=Variable时，value为内置变量。内置变量可选值包括：EXECUTE_TIME（执行时间，Long类型）、DB_NAME_SRC（源端数据库名称，String类型）、DATASOURCE_NAME_SRC（源端数据源名称，String类型）、TABLE_NAME_SRC（源端表名，String类型）、DB_NAME_DEST（目标端数据库名称，String类型）、DATASOURCE_NAME_DEST（目标端数据源名称，String类型）、TABLE_NAME_DEST（目标端表名，String类型）、DB_NAME_SRC_TRANSED（转换后的数据库名称，String类型）。
         * 指定目标端表的主键列列名（DefinePrimaryKey）示例：
         * {"columns":\["ukcolumn1","ukcolumn2"\]}
         * - 如不指定默认使用源端主键列。
         * - 当目标端为已有表：数据集成系统不会修改目标端表结构，如果指定的主键列不在目标端的列集合中，任务启动会报错提示。
         * - 当目标端为自动建表：数据集成系统会自动创建目标端表结构，表结构包含定义的主键列。当指定的主键列不在目标端的列集合中时，任务启动会报错提示。
         * DML处理规则（HandleDml）示例：
         * {"dmlPolicies":\[{"dmlType":"Delete","dmlAction":"Filter","filterCondition":"id > 1"}\]}
         * - 如不指定，默认规则为Insert、Update、Delete均为Normal
         * - dmlType：DML操作类型，Insert（插入）、Update（更新）、Delete（删除）
         * - dmlAction：DML处理策略，Normal（正常处理）、Ignore（忽略）、Filter（有条件的正常处理，当dmlType=Update/Delete时使用）、LogicalDelete（逻辑删除）
         * - filterCondition：DML过滤条件，当dmlAction=Filter时使用
         * @example `{"expression":"${srcDatasoureName}_${srcDatabaseName}"}`
         */
        RuleExpression: string;
    }[];
    /**
     * 同步对象转换映射列表，列表中每个元素描述了一组源端同步对象选择规则列表和在该组同步对象上应用的同步对象转换规则列表。
     */
    "TableMappings"?: {
        /**
         * 源端对象选择规则，支持多条。
         */
        SourceObjectSelectionRules: {
            /**
             * 对象类型，可选的枚举值：
             * - Table（表）
             * - Database（数据库）
             * @example `Table`
             */
            ObjectType: string;
            /**
             * 表达式。
             * @example `mysql_table_1`
             */
            Expression: string;
        }[];
        /**
         * 源端对象上应用的转换规则列表。
         */
        TransformationRules: {
            /**
             * 规则名称，在一种动作类型+动作作用的目标类型下规则名称唯一。
             * @example `rename_rule_1`
             */
            RuleName: string;
            /**
             * 动作类型，可选的枚举值：
             * - DefinePrimaryKey（定义主键）
             * - Rename（重命名）
             * - AddColumn（增加列）
             * - HandleDml（DML处理）
             * - DefineIncrementalCondition（定义增量条件）
             * - DefineCycleScheduleSettings（定义周期调度设置）
             * - DefineRuntimeSettings（定义高级配置参数）
             * - DefinePartitionKey（定义分区列）
             * @example `Rename`
             */
            RuleActionType: string;
            /**
             * 动作作用的目标类型，可选的枚举值：
             * - Table（表）
             * - Schema（schema）
             * @example `Table`
             */
            RuleTargetType: string;
        }[];
    }[];
    /**
     * 同步任务维度的设置，含DDL处理策略、源端和目标端列数据类型映射策略、任务运行时参数等。
     */
    "JobSettings"?: {
        /**
         * DDL处理设置。
         */
        DdlHandlingSettings: {
            /**
             * DDL类型，可选的枚举值：
             * - RenameColumn（重命名列）
             * - ModifyColumn（重命名列）
             * - CreateTable（重命名列）
             * - TruncateTable（清空表）
             * - DropTable（删除表）
             * - DropColumn（删除列）
             * - AddColumn（新增列）
             * @example `AddColumn`
             */
            Type: string;
            /**
             * 处理动作，可选的枚举值：
             *
             * - Ignore（忽略）
             * - Critical（报错）
             * - Normal（正常处理）
             * @example `Critical`
             */
            Action: string;
        }[];
        /**
         * 列类型映射，多值。
         */
        ColumnDataTypeSettings: {
            /**
             * 源端类型。
             * @example `bigint`
             */
            SourceDataType: string;
            /**
             * 目标端类型。
             * @example `text`
             */
            DestinationDataType: string;
        }[];
        /**
         * 运行时设置，多值。
         */
        RuntimeSettings: {
            /**
             * 设置名称，可选的枚举值：
             * - runtime.offline.speed.limit.mb（离线批量任务限流大小，当runtime.offline.speed.limit.enable=true时有效）
             * - runtime.offline.speed.limit.enable（离线批量任务是否开启限流）
             * - dst.offline.connection.max（离线批量任务写端最大连接数）
             * - runtime.offline.concurrent（离线批量同步任务并发度）
             * - dst.realtime.connection.max（实时任务写端最大连接数）
             * - runtime.enable.auto.create.schema（是否自动在目标端创建schema）
             * - src.offline.datasource.max.connection（离线批量任务源端最大连接数）
             * - runtime.realtime.concurrent（实时任务并发度）
             * @example `runtime.offline.concurrent`
             */
            Name: string;
            /**
             * 设置取值。
             * @example `1`
             */
            Value: string;
        }[];
        /**
         * 周期调度设置。
         */
        CycleScheduleSettings: {
            /**
             * 需要周期调度的同步类型。取值范围：
             * - Full：全量
             * - OfflineIncremental：离线增量
             * @example `Full`
             */
            CycleMigrationType: string;
            /**
             * 调度参数。
             * @example `bizdate=$bizdate
            `
             */
            ScheduleParameters: string;
        };
        /**
         * 通道相关任务设置，Json String形式。
         * @example `{"structInfo":"MANAGED","storageType":"TEXTFILE","writeMode":"APPEND","partitionColumns":[{"columnName":"pt","columnType":"STRING","comment":""}],"fieldDelimiter":""}
        `
         */
        ChannelSettings: string;
        /**
         * 同步任务导入设置。
         */
        ImportRuleSettings: {
            /**
             * 任务配置导入来源。取值范围：
             * Datastudio：数据开发中的同步任务
             * @example `Datastudio`
             */
            Source: string;
            /**
             * 待导入任务ID。
             * @example `10000`
             */
            FileId: string;
        };
    };
    /**
     * 系统调试使用，默认false。
     * @example `false`
     */
    "SystemDebug"?: string;
}
