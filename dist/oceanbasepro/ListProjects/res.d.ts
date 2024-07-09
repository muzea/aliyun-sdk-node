export interface ListProjectsResponse {
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
         * 错误码（新）。
         * @example `CM-RESOAT1111
        `
         */
        Code: string;
        /**
         * 包括 FATAL、ERROR、WARNING 和 CRITICAL。
         * @example `ERROR`
         */
        Level: string;
        /**
         * 错误描述（新）。
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
     * 建议（旧）。
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
     * @example `4`
     */
    TotalCount: number;
    /**
     * 请求耗时，单位为秒。
     * @example `1`
     */
    Cost: string;
    /**
     * 项目列表的相关信息。
     */
    Data: {
        /**
         * 传输实例的 ID。
         * @example `g_i4wa7***`
         */
        WorkerGradeId: string;
        /**
         * 传输实例的详情。
         */
        WorkerGradeInfo: {
            /**
             * 传输实例的 ID。
             * @example `g_i4wa7***`
             */
            Id: string;
            /**
             * 传输实例的别名。
             * @example `i5fu***`
             */
            Name: string;
            /**
             * 传输实例的规格。
             * @example `OMS_G2_MIGRATION_LARGE`
             */
            Grade: string;
            /**
             * 传输实例的规格大小。
             * @example `LARGE`
             */
            Spec: string;
            /**
             * 传输实例规格大小的名称。
             * @example `LARGE`
             */
            SpecName: string;
            /**
             * 源端数据源的类型。
             * @example `OB_MYSQL`
             */
            SourceType: string;
            /**
             * 源端数据源所在的地域。
             * @example `ap-southeast-1`
             */
            SourceRegion: string;
            /**
             * 目标端数据源的类型。
             * @example `OB_MYSQL`
             */
            DestType: string;
            /**
             * 目标端数据源所在的地域。
             * @example `ap-southeast-1`
             */
            DestRegion: string;
            /**
             * 数据迁移或数据同步项目的计费类型。
             * @example `POSTPAY`
             */
            ChargeType: string;
            /**
             * 是否开启自动续费。
             * @example `false`
             */
            AutoRenewal: boolean;
            /**
             * 是否已到期。
             * @example `false`
             */
            Expired: boolean;
            /**
             * 到期时间。支持 UTC 时间，格式为 YYYY-MM-DDThh:mm:ss。
             * @example `2024-01-28T15:07:44`
             */
            EndTime: string;
            /**
             * 创建时间。支持 UTC 时间，格式为 YYYY-MM-DDThh:mm:ss。
             * @example `2024-01-28T14:07:44`
             */
            GmtCreate: string;
        };
        /**
         * 数据迁移或数据同步项目的 ID。
         * @example `np_4w****
        `
         */
        Id: string;
        /**
         * 项目的类型，包括 `MIGRATION`（表示数据迁移项目）和 `SYNC`（表示数据同步项目）。
         * @example `MIGRATION`
         */
        Type: string;
        /**
         * 数据迁移或数据同步项目的名称。
         * @example `project_name`
         */
        Name: string;
        /**
         * 标签的集合。
         */
        Labels: {
            /**
             * 标签 ID。
             * @example `l_dfe****
            `
             */
            Id: string;
            /**
             * 标签的名称。
             * @example `label_name`
             */
            Name: string;
            /**
             * 创建人（仅管理员视角下返回）。
             * @example `admin`
             */
            Creator: string;
            /**
             * 标签的类型。1 表示用户标签，0 表示运维标签。
             * @example `1`
             */
            Type: number;
            /**
             * 使用该标签的项目数量。
             * @example `2`
             */
            Count: number;
        }[];
        /**
         * 项目 Owner。
         * @example `admin`
         */
        Owner: string;
        /**
         * 项目的告警等级，包括 `HIGH`（高保护状态）、`MEDIUM`（中保护状态）、`LOW`（低保护状态）和 `IGNORE`（无保护状态）。
         * @example `MEDIUM`
         */
        Importance: string;
        /**
         * 数据迁移或数据同步项目的状态，包括 INIT（未启动）、RUNNING（运行中）、SUSPEND（已暂停）、FAILED（失败）、FINISHED（已完成）、RELEASING（释放中）、RELEASED（已释放）、DELETED（已删除）、RUNNING_MODIFYING（修改中）和 RUNNING_MERGING（合并中）。
         * @example `RUNNING`
         */
        Status: string;
        /**
         * 项目的创建时间，以 UTC + 0 时区的时间格式展示。
         * @example `2023-07-13T06:26:15`
         */
        GmtCreate: string;
        /**
         * 项目的更新时间，以 UTC + 0 时区的时间格式展示。
         * @example `2023-07-13T07:01:27`
         */
        GmtModified: string;
        /**
         * 项目的开始运行时间。
         * @example `2023-07-13T07:02:27`
         */
        GmtStart: string;
        /**
         * 项目的结束运行时间。
         * @example `2023-07-13T08:01:27`
         */
        GmtFinish: string;
        /**
         * 项目的目标端连接信息 ID。
         * @example `null`
         */
        DestConnId: string;
        /**
         * 项目是否处于合并中。
         * @example `false`
         */
        IsMerging: boolean;
        /**
         * 项目是否处于修改中。
         * @example `false`
         */
        IsModifying: boolean;
        /**
         * 是否为子项目。
         * @example `false`
         */
        IsSubProject: boolean;
        /**
         * 源端数据源的类型。
         * @example `MYSQL`
         */
        SourceEndpointType: string;
        /**
         * 目标端数据源的类型。
         * @example `OB_MYSQL`
         */
        SinkEndpointType: string;
        /**
         * 该参数已废弃，建议您调用 `DescribeProject` 接口。
         */
        TransferMapping: {
            /**
             * 传输对象映射模式，包括 `SPECIFIC`（表示指定对象）和 `WILDCARD`（表示匹配规则）。
             * @example `SPECIFIC`
             */
            Mode: string;
        };
        /**
         * 通用的传输配置。
         */
        CommonTransferConfig: {
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
             * 投递至消息队列时，数据 JSON 序列化类型。包括 DEFAULT、CANAL、DATAWORKS_V2、SHAREPLEX、DEFAULT_WITH_SCHEMA、DEBEZIUM、DEBEZIUMFLATTEN 和 DEBEZIUMSMT。
             * @example `DEFAULT`
             */
            MqSerializerType: string;
            /**
             * 投递至消息队列时，分区路由方式。包括 ONE（指定分区投递）、HASH（根据主键/分片列值进行 HASH 分区投递、TABLE（根据库表名进行 HASH 分区投递）。
             * @example `ONE`
             */
            MqPartitionMode: string;
            /**
             * 当 partitionMode 为 ONE 时，该参数表示投递的分区在当前 Topic 下的位置。
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
             * 业务系统标识（可选）。
             * @example `null`
             */
            DataWorksBusinessName: string;
        };
        /**
         * 是否开启结构传输。
         * @example `true`
         */
        EnableStructTransfer: boolean;
        /**
         * 结构传输的配置。
         */
        StructTransferConfig: {
            /**
             * byte/char 转换方案，默认值为 `DO_NOTHING_IF_BYTE_USED`。
             * @example `DO_NOTHING_IF_BYTE_USED`
             */
            ByteCharConvertStrategy: string;
            /**
             * 是否允许索引后置。
             * @example `false`
             */
            DeferIndexCreation: boolean;
        };
        /**
         * 是否开启全量传输。
         * @example `true`
         */
        EnableFullTransfer: boolean;
        /**
         * 是否开启全量校验。
         * @example `true`
         */
        EnableFullVerify: boolean;
        /**
         * 全量传输的配置。
         */
        FullTransferConfig: {
            /**
             * 处理源端无唯一索引表的全量迁移时，是否清空目标表。
             * @example `false`
             */
            NonePkUkTruncateDstTable: boolean;
            /**
             * 目标端表对象存在记录时处理策略，包括 **忽略** 和 **停止迁移**。
             * - 设置为 true，表示选择忽略：当目标端表对象存在数据时，如果原数据与写入数据冲突，数据传输采用将冲突数据记录日志，保留原数据不变的策略进行数据写入。
             * ><notice>选择忽略，全量校验将使用 IN 模式拉取数据，无法校验目标端多数据的场景，并且校验性能存在一定程度降级。></notice>
             * - 设置为 false，表示选择停止迁移：当目标端表对象存在数据时，全量迁移会报错不允许迁移，请处理好目标端数据后再继续迁移。
             * ><notice>如果出错后单击恢复，数据传输将忽略该配置选项，继续迁移表数据，请谨慎操作。></notice>
             * @example `false`
             */
            AllowDestTableNotEmpty: boolean;
            /**
             * 全量迁移并发速度，包括 STEADY、NORMAL 和 FAST。
             * @example `NORMAL`
             */
            FullTransferSpeedMode: string;
            /**
             * 全量校验并发速度，包括 STEADY、NORMAL 和 FAST。
             * @example `NORMAL`
             */
            FullVerifySpeedMode: string;
        };
        /**
         * 是否开启增量传输。
         * @example `true`
         */
        EnableIncrTransfer: boolean;
        /**
         * 是否开启增量校验。
         * @example `true`
         */
        EnableIncrVerify: boolean;
        /**
         * 是否开启反向增量传输。
         * @example `true`
         */
        EnableReverseIncrTransfer: boolean;
        /**
         * 增量同步的配置。
         */
        IncrTransferConfig: {
            /**
             * 增量同步起始位点，秒级时间戳。仅启用增量同步但未启用全量传输时，支持设置该参数。
             * @example `1681004708`
             */
            StartTimestamp: number;
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
        };
        /**
         * 源端节点的连接信息。
         */
        SourceConnectInfo: {
            /**
             * 连接信息的 ID。
             * @example `c_4w3aq****`
             */
            Id: string;
            /**
             * 终端节点的名称。
             * @example `ration12****0obmysql4116892***`
             */
            EndpointName: string;
            /**
             * 终端节点的 ID。
             * @example `e_4w3al***`
             */
            EndpointId: string;
            /**
             * 终端节点的类型，包括 `source`（源端）和 `dest`（目标端）。
             * @example `source`
             */
            EndpointSide: string;
            /**
             * 终端节点的数据库引擎。
             * @example `OB_MYSQL_PUBLIC`
             */
            DbEngine: string;
            /**
             * 终端节点的连接信息。
             * @example `null`
             */
            ConnectionInfo: string;
            /**
             * 连接用户名。
             * @example `oms931mys**`
             */
            Username: string;
            /**
             * 数据库的版本。
             * @example `5.7.27`
             */
            Version: string;
            /**
             * 数据库的时区。
             * @example `UTC`
             */
            Timezone: string;
            /**
             * 字符编码。
             * @example `utf8mb4`
             */
            Charset: string;
            /**
             * nlsLengthSemantics 属性，仅针对 Oracle 和 OceanBase 数据库 Oracle 租户数据源。
             * @example `null`
             */
            NlsLengthSemantics: string;
            /**
             * 操作系统（OceanBase 数据库无该参数）。
             * @example `Linux`
             */
            OperatingSystem: string;
            /**
             * 地域。
             * @example `cn-hangzhou`
             */
            Region: string;
            /**
             * OCP 的名称。
             * @example `null`
             */
            OcpName: string;
            /**
             * 连接额外属性。具体返回字段请参见《附录》模块的内容。
             * @example `null`
             */
            ConnExtraAttributes: any;
            /**
             * Owner。
             * @example `admin`
             */
            Owner: string;
            /**
             * 资源所有者的 UID。
             * @example `1325847***`
             */
            ResourceOwner: string;
            /**
             * IP 地址。
             * @example `xxx.xxx.xxx.1
            `
             */
            Host: string;
            /**
             * 端口。
             * @example `2883`
             */
            Port: number;
        };
        /**
         * 目的端节点的连接信息。
         */
        SinkConnectInfo: {
            /**
             * 连接信息的 ID。
             * @example `c_4w3akx***`
             */
            Id: string;
            /**
             * 终端节点的名称。
             * @example `ation129***9apimysql5616****`
             */
            EndpointName: string;
            /**
             * 终端节点的 ID。
             * @example `e_4w3aic***`
             */
            EndpointId: string;
            /**
             * 终端节点的类型，包括 `source`（源端）和 `dest`（目标端）。
             * @example `sink`
             */
            EndpointSide: string;
            /**
             * 终端节点的数据库引擎。
             * @example `MYSQL_PUBLIC`
             */
            DbEngine: string;
            /**
             * 终端节点的连接信息。
             * @example `null`
             */
            ConnectionInfo: string;
            /**
             * 连接用户名。
             * @example `oms**obmys**`
             */
            Username: string;
            /**
             * 数据库的版本。
             * @example `2.2.77`
             */
            Version: string;
            /**
             * 数据库的时区。
             * @example `+08:00`
             */
            Timezone: string;
            /**
             * 字符编码。
             * @example `utf8mb4`
             */
            Charset: string;
            /**
             * nlsLengthSemantics 属性，仅针对 Oracle 和 OceanBase 数据库 Oracle 租户数据源。
             * @example `null`
             */
            NlsLengthSemantics: string;
            /**
             * 操作系统（OceanBase 数据库无该参数）。
             * @example `Linux`
             */
            OperatingSystem: string;
            /**
             * 地域。
             * @example `cn-hangzhou`
             */
            Region: string;
            /**
             * OCP 名称。
             * @example `null`
             */
            OcpName: string;
            /**
             * 连接额外属性。具体返回字段请参见《附录》模块的内容。
             * @example `null`
             */
            ConnExtraAttributes: any;
            /**
             * Owner。
             * @example `admin`
             */
            Owner: string;
            /**
             * 资源所有者的 UID。
             * @example `1325847***`
             */
            ResourceOwner: string;
            /**
             * IP 地址。
             * @example `xxx.xxx.xxx.1`
             */
            Host: string;
            /**
             * 端口。
             * @example `2883`
             */
            Port: number;
        };
        /**
         * 步骤列表。
         */
        Steps: {
            /**
             * 步骤的运行顺序。
             * @example `1`
             */
            Order: number;
            /**
             * 步骤的名称。
             * @example `TRANSFER_PRECHECK`
             */
            Name: string;
            /**
             * 步骤的描述（预检查/结构迁移/结构同步/全量迁移/全量同步/全量校验/索引迁移/增量日志拉取/增量同步/增量校验/正向切换）。
             * @example `预检查`
             */
            Description: string;
            /**
             * 步骤的运行状态，包括 INIT（初始化）、RUNNING（运行中）、FAILED（失败）、 FINISHED（已完成）、 SUSPEND（已暂停）、MONITORING（持续监控状态，用于增量同步和增量校验的持续监控态）。
             * @example `RUNNING`
             */
            Status: string;
            /**
             * 补充信息（JSON）。
             */
            ExtraInfo: {
                /**
                 * 错误详情。
                 */
                ErrorDetails: {
                    /**
                     * 错误码（新）。
                     * @example `CM-RESOAT1111
                    `
                     */
                    Code: string;
                    /**
                     * 包括 FATAL、ERROR、WARNING 和 CRITICAL。
                     * @example `ERROR`
                     */
                    Level: string;
                    /**
                     * 错误描述（新）。
                     * @example `A system error occurred.`
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
                }[];
                /**
                 * 错误码。
                 * @example `INNER_ERROR`
                 */
                ErrorCode: string;
                /**
                 * 错误描述。
                 * @example `A system error occurred.
                `
                 */
                ErrorMsg: string;
                /**
                 * 错误相关的参数。
                 */
                ErrorParam: any;
                /**
                 * 错误时间。
                 * @example `null`
                 */
                FailedTime: string;
            };
            /**
             * 开始时间，以 UTC + 0 时区的时间格式展示。
             * @example `2020-05-22T17:04:18`
             */
            StartTime: string;
            /**
             * 结束时间，以 UTC + 0 时区的时间格式展示。
             * @example `2020-05-22T17:05:18`
             */
            FinishTime: string;
            /**
             * 步骤的运行进度。
             * @example `100`
             */
            Progress: number;
            /**
             * 各步骤的运行详情。
             * @example `null`
             */
            StepInfo: any;
        }[];
        /**
         * 错误信息等补充信息。
         */
        ExtraInfo: {
            /**
             * 处于 RUNNING 状态的步骤。
             * @example `TRANSFER_PRECHECK`
             */
            RunningStep: string;
            /**
             * 处于 RUNNING 状态的步骤的运行进度。
             * @example `90`
             */
            RunningProgress: number;
            /**
             * 是否开始监控增量。
             * @example `true`
             */
            MonitoringIncr: boolean;
            /**
             * 任务关联 Store 的 Subtopics 列表。
             */
            Subtopics: string[];
            /**
             * 任务关联反向 Store 的 Subtopics 列表。
             */
            ReverseSubtopics: string[];
            /**
             * 起始位点。
             * @example `1689214358`
             */
            LogServiceStartCheckpoint: number;
            /**
             * 日志保存时间。
             * @example `24`
             */
            SourceStoreKeptHour: number;
            /**
             * 增量同步延迟时间。
             * @example `null`
             */
            SyncDelay: number;
            /**
             * 同步延迟的采集时间戳，秒级别。
             * @example `1689214358`
             */
            SyncDelaySampleTimestamp: number;
            /**
             * 是否能够直连源端 OceanBase 数据库。
             * @example `true`
             */
            AccessObSource: boolean;
            /**
             * 是否允许完全覆盖更新配置。
             * @example `true`
             */
            OverwriteConfig: boolean;
            /**
             * 是否忽略不支持的 DDL。
             * @example `true`
             */
            IgnoreUnsupportDdl: boolean;
            /**
             * 记录不同下游消费方的表配置，用于同步任务复用时的配置合并。
             */
            SubDbs: any;
            /**
             * 同步 DataWorks 场景，记录不同下游消费方的表配置，用于同步任务复用时的配置合并。
             */
            SubConds: any;
            /**
             * 配置对象的 ID 列表。
             */
            SubIds: any;
            /**
             * Connector 的最大数量，-1 表示不限制。
             * @example `-1`
             */
            MaxConnectorCount: number;
            /**
             * 是否保存增量。
             * @example `true`
             */
            StoreIncr: boolean;
            /**
             * 增量同步的当前位点，单位为秒级时间戳。
             * @example `1689244596`
             */
            IncrSyncTimestamp: number;
        };
        /**
         * 告警统计信息。
         */
        AlarmStats: {
            /**
             * 被告警的目标。
             * @example `null`
             */
            Target: string;
            /**
             * 是否正在告警。
             * @example `false`
             */
            Alarming: boolean;
            /**
             * 最近告警消息的总数量。
             * @example `0`
             */
            RecentlyTriggerCount: number;
            /**
             * 分规则最近告警消息的数量。
             */
            RuleToRecentlyTriggerCount: any;
            /**
             * 最近告警消息的内容。
             * @example `null`
             */
            AlarmContent: string;
            /**
             * 公有云下，是否开启监控告警开关。
             * @example `true`
             */
            OpenMonitor: boolean;
        };
    }[];
}
