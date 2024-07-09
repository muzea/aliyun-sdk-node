export interface DescribeDtsJobsResponse {
    /**
     * 状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `621BB4F8-3016-4FAA-8D5A-5D3163CC****`
     */
    RequestId: string;
    /**
     * 调用出错时返回的错误码。
     * @example `InternalError`
     */
    ErrCode: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 当前页可展示的最大记录数。
     * @example `20`
     */
    PageRecordCount: number;
    /**
     * 所有符合条件的DTS实例数量。
     * @example `15`
     */
    TotalRecordCount: number;
    /**
     * 调用错误时返回的错误信息。
     * @example `The Value of Input Parameter %s is not valid.`
     */
    ErrMessage: string;
    /**
     * 动态错误信息，用于替换返回参数**ErrMessage**错误信息中的**%s**。
     * > 如果**ErrMessage**返回**The Value of Input Parameter %s is not valid**，且**DynamicMessage**返回**Type**，则代表所传入的请求参数**Type**不合法。
     * @example `Type`
     */
    DynamicMessage: string;
    /**
     * 页码。
     * @example `2`
     */
    PageNumber: number;
    /**
     * 动态错误码，本参数即将下线。
     * @example `403`
     */
    DynamicCode: string;
    /**
     * 任务列表及各任务执行详情。
     */
    DtsJobList: {
        /**
         * DTS实例状态，取值：
         * 迁移任务状态：
         * - **NotStarted**：未启动。
         * - **Prechecking**：预检查中。
         * - **PrecheckFailed**：预检查失败。
         * - **PreCheckPass**：预检查通过。
         * - **NotConfigured**：未配置。
         * - **Migrating**：迁移中。
         * - **Suspending**：暂停中。
         * - **MigrationFailed**：迁移失败。
         * - **Finished**：完成。
         * - **Retrying**：重试中。
         * - **Upgrade**：升级中。
         * - **Locked**：锁定中。
         * - **Downgrade**：降级中。
         * 同步任务状态：
         * - **NotStarted**：未启动。
         * - **Prechecking**：预检查中。
         * - **PrecheckFailed**：预检查失败。
         * - **PreCheckPass**：预检查通过。
         * - **NotConfigured**：未配置。
         * - **Initializing**：同步初始化中。
         * - **InitializeFailed**：同步初始化失败。
         * - **Synchronizing**：同步中。
         * - **Failed**：同步失败。
         * - **Suspending**：暂停中。
         * - **Modifying**：修改同步对象中。
         * - **ModifyFailed**：修改同步对象失败。
         * - **Finished**：完成。
         * - **Retrying**：重试中。
         * - **Upgrade**：升级中。
         * - **Locked**：锁定中。
         * - **Downgrade**：降级中。
         * 订阅任务的状态：
         * - **NotConfigured**：未配置。
         * - **NotStarted**：未启动。
         * - **Prechecking**：预检查中。
         * - **PrecheckFailed**：预检查失败。
         * - **PreCheckPass**：预检查通过。
         * - **Starting**：启动中。
         * - **Normal**：正常。
         * - **Retrying**：重试中。
         * - **Abnormal**：异常。
         * - **Upgrade**：升级中。
         * - **Locked**：锁定中。
         * - **Downgrade**：降级中。
         * @example `Migrating`
         */
        Status: string;
        /**
         * 任务来源：
         * - **PTS任务**
         * - **DMS任务**
         * - **DTS任务**
         * @example `DTS任务`
         */
        OriginType: string;
        /**
         * 迁移、同步或订阅任务名称。
         * @example `RDS间迁移`
         */
        DtsJobName: string;
        /**
         * 增量数据迁移或者同步的延迟时间。
         * > 如查询迁移任务，该参数的单位为毫秒，如查询同步任务，该参数的单位为秒。
         * @example `0`
         */
        Delay: number;
        /**
         * 任务失败的错误提示。
         * @example `DTS-070211: Connect Source DB failed. cause by [com.mysql.jdbc.exceptions.jdbc4.MySQLNonTransientConnectionException:Could not create connection to database server. Attempted reconnect 3 times. Giving up.][com.mysql.jdbc.exceptions.jdbc4.CommunicationsException:Communications link failure\n\nThe last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server.][java.net.ConnectException:Connection timed out (Connection timed out)] About more information in [https://yq.aliyun.com/articles/499178].`
         */
        ErrorMessage: string;
        /**
         * 实例的到期时间，<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * > 当**PayType**参数的返回值为**PrePaid**时才会返回本参数。
         * @example `2022-03-16T08:01:19Z`
         */
        ExpireTime: string;
        /**
         * 迁移、同步或订阅任务ID。
         * @example `i03e3zty16i****`
         */
        DtsJobId: string;
        /**
         * 任务创建时间，<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2021-03-16T08:01:19Z`
         */
        CreateTime: string;
        /**
         * 实例的付费类型，返回值：
         * - **PrePaid**：包年包月（预付费）。
         * - **PostPaid**：按量付费（后付费）。
         * @example `PrePaid`
         */
        PayType: string;
        /**
         * DTS预留参数，格式为JSON串，您可以传入本参数实现特殊需求（例如是否自动启动预检查）。更多信息，请参见[MigrationReserved参数说明](~~176470~~)。
         * @example `{\"srcHostPorts\":\"\",\"whitelist.dms.online.ddl.enable\":false,\"filterDDL\":false,\"sqlparser.dms.original.ddl\":true,\"srcOracleType\":\"sid\",\"maxRetryTime\":43200,\"destSSL\":\"0\",\"destOracleType\":\"sid\",\"srcSSL\":\"0\",\"dbListCaseChangeMode\":\"default\",\"SourceEngineVersion\":\"8.0.18\",\"srcNetType\":\"VPC\",\"destNetType\":\"VPC\",\"srcVpcNetMappingInst\":\"172.16.1**.**:10803\",\"destVpcNetMappingInst\":\"172.16.1**.**:11077\",\"useJobTask\":\"1\"}`
         */
        Reserved: string;
        /**
         * 下游消费客户端信息，由IP地址和DTS随机生成的随机数组成。
         * @example `114...:dts******`
         */
        ConsumptionClient: string;
        /**
         * 迁移、同步或订阅对象，详细定义说明，请参见[迁移、同步或订阅对象说明](~~209545~~)。
         * @example `{"dtstestdata": { "name": "dtstestdata", "all": true }}`
         */
        DbObject: string;
        /**
         * 链路规格。
         * > 关于各链路规格的说明及性能测试情况请参见[数据迁移链路规格说明](~~26606~~)，[数据同步链路规格说明](~~26605~~)。
         * @example `large`
         */
        DtsJobClass: string;
        /**
         * 订阅实例的下游消费时间点，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2021-03-23T07:30:31Z`
         */
        ConsumptionCheckpoint: string;
        /**
         * 订阅实例中保存的数据范围的截止时间点，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2021-03-26T14:03:21Z`
         */
        EndTimestamp: string;
        /**
         * 是否为新版订阅，**new**（新版订阅）。
         * > 该参数仅在新版订阅实例中返回。
         * @example `new`
         */
        AppName: string;
        /**
         * 订阅实例中保存的数据范围的起始时间点，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2021-03-15T08:25:34Z	`
         */
        BeginTimestamp: string;
        /**
         * 迁移、同步或订阅实例ID。
         * @example `dtsi03e3zty16i****`
         */
        DtsInstanceID: string;
        /**
         * 同步方向，返回值：
         * - **Forward**：正向。
         * - **Reverse**：反向。
         * > 当数据同步实例的拓扑为双向时，才会返回本参数。
         * @example `Forward`
         */
        DtsJobDirection: string;
        /**
         * 增量数据迁移的启动位点或者同步位点，格式为Unix时间戳，单位为秒。
         * @example `1616899019`
         */
        Checkpoint: string;
        /**
         * 标签集合。
         */
        TagList: {
            /**
             * 标签的值。
             * @example `testvalue`
             */
            TagValue: string;
            /**
             * 标签的键。
             * @example `testkey`
             */
            TagKey: string;
        }[];
        /**
         * 全量数据迁移或初始化的状态。
         */
        DataInitializationStatus: {
            /**
             * 全量数据迁移或初始化状态，取值包括：
             * - **NotStarted**：未启动。
             * - **Migrating**：迁移或初始化中。
             * - **Failed**：迁移或初始化失败。
             * - **Finished**：迁移或初始化完成。
             * @example `Finished`
             */
            Status: string;
            /**
             * 全量数据迁移或初始化进度，单位为百分比。
             * @example `100`
             */
            Percent: string;
            /**
             * 全量数据迁移或初始化失败的错误提示。
             * @example `java.lang.NumberFormatException: For input string: ""`
             */
            ErrorMessage: string;
            /**
             * 已完成全量数据迁移或初始化的记录数。
             * @example `44755`
             */
            Progress: string;
        };
        /**
         * 增量数据迁移或同步的状态。
         */
        DataSynchronizationStatus: {
            /**
             * 增量数据迁移或同步状态，返回值为：
             * - **NotStarted**：未启动。
             * - **Migrating**：迁移或同步中。
             * - **Failed**：迁移或同步失败。
             * - **Finished**：迁移或同步完成。
             * - **Catched**：无延迟。
             * @example `Catched`
             */
            Status: string;
            /**
             * 是否需要升级实例规格，返回值：
             * - **true**：需要。
             * - **false**：不需要。
             * > 如需升级实例规格，请调用[TransferInstanceClass](~~281093~~)进行升级。
             * @example `true`
             */
            NeedUpgrade: boolean;
            /**
             * 增量数据迁移或同步进度，单位为百分比。
             * @example `95`
             */
            Percent: string;
            /**
             * 已完成增量数据迁移或同步的记录数。
             * @example `0/0`
             */
            Progress: string;
            /**
             * 增量数据迁移或同步失败的错误提示。
             * @example `任务失败太久无法恢复	`
             */
            ErrorMessage: string;
        };
        /**
         * ETL任务的状态。
         * > 配置ETL任务后，才会返回该参数集合。
         */
        DataEtlStatus: {
            /**
             * ETL任务状态，返回值为：
             * - **NotStarted**：未启动。
             * - **Migrating**：执行中。
             * - **Failed**：执行失败。
             * - **Finished**：完成。
             * - **Catched**：无延迟。
             * @example `Finished`
             */
            Status: string;
            /**
             * ETL任务进度，单位为百分比。
             * @example `95`
             */
            Percent: string;
            /**
             * ETL任务失败的错误提示。
             * @example `任务失败太久无法恢复	`
             */
            ErrorMessage: string;
            /**
             * 已完成ETL任务的记录数。
             * @example `0/0`
             */
            Progress: string;
        };
        /**
         * 目标实例的连接信息。
         */
        DestinationEndpoint: {
            /**
             * 是否使用SSL安全连接，返回值：
             * - **DISABLE**：不使用SSL安全连接。
             * - **ENABLE_WITH_CERTIFICATE**：使用SSL安全连接，并上传CA证书。
             * - **ENABLE_ONLY_4_MONGODB_ALTAS**：使用SSL安全连接AWS MongoDB Altas。
             * - **ENABLE_ONLY_4_KAFKA_SCRAM_SHA_256**：使用SCRAM-SHA-256连接Kafka。
             * @example `DISABLE`
             */
            SslSolutionEnum: string;
            /**
             * Oracle数据库的SID信息。
             * > 当目标实例的**EngineName**取值为**Oracle**，且Oracle数据库为非RAC实例时，才会返回本参数。
             * @example `testsid`
             */
            OracleSID: string;
            /**
             * 目标实例所在区域，详情请参见[支持的地域列表](~~141033~~)。
             * @example `cn-hangzhou`
             */
            Region: string;
            /**
             * 目标实例中迁移对象所属数据库的名称。
             * @example `dtstestdata`
             */
            DatabaseName: string;
            /**
             * 目标实例的连接地址。
             * @example `172.16.88.***`
             */
            Ip: string;
            /**
             * 目标实例ID。
             * @example `rm-bp1imrtn6fq7h****`
             */
            InstanceID: string;
            /**
             * 目标实例的数据库服务端口。
             * @example `3306`
             */
            Port: string;
            /**
             * 目标实例类型。
             * @example `RDS`
             */
            InstanceType: string;
            /**
             * 目标实例的数据库账号。
             * @example `dtstest`
             */
            UserName: string;
            /**
             * 目标实例的数据库类型。
             * @example `MySQL`
             */
            EngineName: string;
        };
        /**
         * 迁移类型或同步初始化类型。
         */
        MigrationMode: {
            /**
             * 是否执行全量数据迁移或全量数据初始化，返回值：
             * - **true**：是。
             * - **false**：否。
             * @example `true`
             */
            DataInitialization: boolean;
            /**
             * 是否执行增量数据迁移或同步，返回值：
             * - **true**：是。
             * - **false**：否。
             * @example `true`
             */
            DataSynchronization: boolean;
            /**
             * 是否执行库表结构迁移或初始化，返回值：
             * - **true**：是。
             * - **false**：否。
             * @example `true`
             */
            StructureInitialization: boolean;
            /**
             * 是否进行全量数据校验，返回值为：
             * - **true**：是。
             * - **false**：否。
             * @example `true`
             */
            FullDataCheck: boolean;
            /**
             * 是否进行增量数据校验，返回值为：
             * - **true**：是。
             * - **false**：否。
             * @example `true`
             */
            IncDataCheck: boolean;
        };
        /**
         * 迁移或同步链路的性能信息。
         */
        Performance: {
            /**
             * 每秒迁移或同步SQL语句的次数，包括BEGIN、COMMIT 、DML语句（INSERT、DELETE、UPDATE）及DDL语句。
             * @example `100`
             */
            Rps: string;
            /**
             * 每秒迁移或同步数据的流量，单位为MB/s。
             * @example `1`
             */
            Flow: string;
        };
        /**
         * 预检查状态。
         */
        PrecheckStatus: {
            /**
             * 预检查状态，返回值：
             * - **NotStarted**：未启动。
             * - **Suspending**：暂停中。
             * - **Checking**：预检查中。
             * - **Failed**：预检查失败。
             * - **Finished**：预检查完成。
             * @example `Finished`
             */
            Status: string;
            /**
             * 预检查整体进度，单位为百分比。
             * @example `100`
             */
            Percent: string;
            /**
             * 预检查失败的提示信息。
             * @example `CHECK__ERROR_SAME_OBJ.`
             */
            ErrorMessage: string;
            /**
             * 各预检查项的执行情况。
             */
            Detail: {
                /**
                 * 检查结果，返回值：
                 * - **Success**：通过该项检查。
                 * - **Failed**：未通过该项检查。
                 * @example `Success`
                 */
                CheckResult: string;
                /**
                 * 预检查项目描述。
                 * @example `CHECK_CONN_SRC_DETAIL`
                 */
                CheckItemDescription: string;
                /**
                 * 预检查项目。
                 * @example `CHECK_CONN_SRC`
                 */
                CheckItem: string;
                /**
                 * 预检查未通过时对应的修复方法。
                 * > 当**CheckResult**参数返回值为**Failed**时，才会返回本参数。
                 * @example `CHECK_ERROR_DEST_CONN_REPAIR2`
                 */
                RepairMethod: string;
                /**
                 * 预检查未通过的错误提示。
                 * > 当**CheckResult**参数返回值为**Failed**时，才会返回本参数。
                 * @example `Original error: Access denied for user 'dtstest'@'100.104.***.**' (using password: YES)`
                 */
                FailedReason: string;
            }[];
        };
        /**
         * 反向同步任务执行详情。
         * > 当该任务为数据同步，且拓扑类型为双向时，才会返回该参数合集。
         */
        ReverseJob: {
            /**
             * 反向同步任务状态，取值：
             * - **NotStarted**：未启动。
             * - **Prechecking**：预检查中。
             * - **PrecheckFailed**：预检查失败。
             * - **PreCheckPass**：预检查通过。
             * - **NotConfigured**：未配置。
             * - **Initializing**：同步初始化中。
             * - **InitializeFailed**：同步初始化失败。
             * - **Synchronizing**：同步中。
             * - **Failed**：同步失败。
             * - **Suspending**：暂停中。
             * - **Modifying**：修改同步对象中。
             * - **ModifyFailed**：修改同步对象失败。
             * - **Finished**：完成。
             * - **Retrying**：重试中。
             * - **Upgrade**：升级中。
             * - **Locked**：锁定中。
             * - **Downgrade**：降级中。
             * @example `Synchronizing`
             */
            Status: string;
            /**
             * 同步任务名称。
             * @example `RDS间迁移`
             */
            DtsJobName: string;
            /**
             * 增量数据同步的延迟时间，单位为秒。
             * @example `0`
             */
            Delay: number;
            /**
             * 任务失败的错误提示。
             * @example `DTS-070211: Connect Source DB failed. cause by [com.mysql.jdbc.exceptions.jdbc4.MySQLNonTransientConnectionException:Could not create connection to database server. Attempted reconnect 3 times. Giving up.][com.mysql.jdbc.exceptions.jdbc4.CommunicationsException:Communications link failure\n\nThe last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server.][java.net.ConnectException:Connection timed out (Connection timed out)] About more information in [https://yq.aliyun.com/articles/499178].`
             */
            ErrorMessage: string;
            /**
             * 同步任务ID。
             * @example `i03e3zty16i****`
             */
            DtsJobId: string;
            /**
             * 实例的到期时间，<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * > 当**PayType**参数的返回值为**PrePaid**时才会返回本参数。
             * @example `2023-03-16T08:01:19Z`
             */
            ExpireTime: string;
            /**
             * 任务创建时间，<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2022-03-16T08:01:19Z`
             */
            CreateTime: string;
            /**
             * 实例的付费类型，返回值：
             * - **PrePaid**：包年包月（预付费）。
             * - **PostPaid**：按量付费（后付费）。
             * @example `PostPaid`
             */
            PayType: string;
            /**
             * DTS预留参数，格式为JSON串，您可以传入本参数实现特殊需求（例如是否自动启动预检查）。更多信息，请参见[MigrationReserved参数说明](~~176470~~)。
             * @example `{\"srcHostPorts\":\"\",\"whitelist.dms.online.ddl.enable\":false,\"filterDDL\":false,\"sqlparser.dms.original.ddl\":true,\"srcOracleType\":\"sid\",\"maxRetryTime\":43200,\"destSSL\":\"0\",\"destOracleType\":\"sid\",\"srcSSL\":\"0\",\"dbListCaseChangeMode\":\"default\",\"SourceEngineVersion\":\"8.0.18\",\"srcNetType\":\"VPC\",\"destNetType\":\"VPC\",\"srcVpcNetMappingInst\":\"172.16.1**.**:10803\",\"destVpcNetMappingInst\":\"172.16.1**.**:11077\",\"useJobTask\":\"1\"}`
             */
            Reserved: string;
            /**
             * 同步对象的库表结构定义，格式为JSON串，且支持一定的正则表达式。更多相关介绍和示例，请参见迁移、同步或订阅对象配置说明。
             * @example `{"dtstestdata": { "name": "dtstestdata", "all": true }}`
             */
            DbObject: string;
            /**
             * 链路规格。
             * > 关于各链路规格的说明及性能测试情况请参见[数据同步链路规格说明](~~26605~~)。
             * @example `large`
             */
            DtsJobClass: string;
            /**
             * 同步实例ID。
             * @example `dtsi03e3zty16i****`
             */
            DtsInstanceID: string;
            /**
             * 同步方向，固定为**Reverse**（反向）。
             * @example `Reverse`
             */
            DtsJobDirection: string;
            /**
             * 增量数据同步位点，格式为Unix时间戳，单位为秒。
             * @example `1616980369`
             */
            Checkpoint: string;
            /**
             * 全量数据初始化的状态。
             */
            DataInitializationStatus: {
                /**
                 * 全量数据初始化状态，取值包括：
                 * - **NotStarted**：未启动。
                 * - **Migrating**：初始化中。
                 * - **Failed**：初始化失败。
                 * - **Finished**：初始化完成。
                 * @example `Finished`
                 */
                Status: string;
                /**
                 * 全量数据初始化进度，单位为百分比。
                 * @example `100`
                 */
                Percent: string;
                /**
                 * 全量数据初始化失败的错误提示。
                 * @example `java.lang.NumberFormatException: For input string: ""`
                 */
                ErrorMessage: string;
                /**
                 * 已完成全量数据初始化的记录数。
                 * @example `43071`
                 */
                Progress: string;
            };
            /**
             * 增量数据同步的状态。
             */
            DataSynchronizationStatus: {
                /**
                 * 增量数据同步状态。
                 * @example `Migrating`
                 */
                Status: string;
                /**
                 * 是否需要升级实例规格，返回值：
                 * - **true**：需要。
                 * - **false**：不需要。
                 * > 如需升级实例规格，请调用[TransferInstanceClass](~~281093~~)进行升级。
                 * @example `true`
                 */
                NeedUpgrade: boolean;
                /**
                 * 增量数据同步进度，单位为百分比。
                 * @example `100`
                 */
                Percent: string;
                /**
                 * 已完成增量数据迁移或同步的记录数。
                 * @example `20001`
                 */
                Progress: string;
                /**
                 * 增量数据同步失败的错误提示。
                 * @example `任务失败太久无法恢复`
                 */
                ErrorMessage: string;
            };
            /**
             * 目标实例的连接信息。
             */
            DestinationEndpoint: {
                /**
                 * 是否使用SSL安全连接，返回值：
                 * - **DISABLE**：不使用SSL安全连接。
                 * - **ENABLE_WITH_CERTIFICATE**：使用SSL安全连接，并上传CA证书。
                 * - **ENABLE_ONLY_4_MONGODB_ALTAS**：使用SSL安全连接AWS MongoDB Altas。
                 * - **ENABLE_ONLY_4_KAFKA_SCRAM_SHA_256**：使用SCRAM-SHA-256连接Kafka。
                 * @example `DISABLE`
                 */
                SslSolutionEnum: string;
                /**
                 * Oracle数据库的SID信息。
                 * > 当目标实例的**EngineName**取值为**Oracle**，且Oracle数据库为非RAC实例时，才会返回本参数。
                 * @example `testsid`
                 */
                OracleSID: string;
                /**
                 * 目标实例所在区域，详情请参见[支持的地域列表](~~141033~~)。
                 * @example `cn-hangzhou`
                 */
                Region: string;
                /**
                 * 目标实例中同步对象所属数据库的名称。
                 * @example `dtstestdata`
                 */
                DatabaseName: string;
                /**
                 * 目标实例的连接地址。
                 * @example `172.16.88.***`
                 */
                Ip: string;
                /**
                 * 目标实例ID。
                 * @example `rm-bp1162kryivb8****`
                 */
                InstanceID: string;
                /**
                 * 目标实例的数据库服务端口。
                 * @example `3306`
                 */
                Port: string;
                /**
                 * 目标实例类型。
                 * @example `RDS`
                 */
                InstanceType: string;
                /**
                 * 目标实例的数据库账号。
                 * @example `dtstest`
                 */
                UserName: string;
                /**
                 * 目标实例的数据库类型。
                 * @example `MySQL`
                 */
                EngineName: string;
            };
            /**
             * 同步初始化类型。
             */
            MigrationMode: {
                /**
                 * 是否执行全量数据初始化，返回值：
                 * - **true**：是。
                 * - **false**：否。
                 * @example `true`
                 */
                DataInitialization: boolean;
                /**
                 * 是否执行增量数据同步，返回值：
                 * - **true**：是。
                 * - **false**：否。
                 * @example `true`
                 */
                DataSynchronization: boolean;
                /**
                 * 是否执行库表结构初始化，返回值：
                 * - **true**：是。
                 * - **false**：否。
                 * @example `true`
                 */
                StructureInitialization: boolean;
                /**
                 * 是否进行全量数据校验，返回值为：
                 * - **true**：是。
                 * - **false**：否。
                 * @example `true`
                 */
                FullDataCheck: boolean;
                /**
                 * 是否进行增量数据校验，返回值为：
                 * - **true**：是。
                 * - **false**：否。
                 * @example `true`
                 */
                IncDataCheck: boolean;
            };
            /**
             * 同步链路的性能信息。
             */
            Performance: {
                /**
                 * 每秒同步SQL语句的次数，包括BEGIN、COMMIT 、DML语句（INSERT、DELETE、UPDATE）及DDL语句。
                 * @example `100`
                 */
                Rps: string;
                /**
                 * 每秒同步数据的流量，单位为MB/s。
                 * @example `1`
                 */
                Flow: string;
            };
            /**
             * 预检查状态。
             */
            PrecheckStatus: {
                /**
                 * 预检查状态，返回值：
                 * - **NotStarted**：未启动。
                 * - **Suspending**：暂停中。
                 * - **Checking**：预检查中。
                 * - **Failed**：预检查失败。
                 * - **Finished**：预检查完成。
                 * @example `Finished`
                 */
                Status: string;
                /**
                 * 预检查整体进度，单位为百分比。
                 * @example `100`
                 */
                Percent: string;
                /**
                 * 预检查失败的提示信息。
                 * @example `CHECK__ERROR_SAME_OBJ.`
                 */
                ErrorMessage: string;
                /**
                 * 各预检查项的执行情况。
                 */
                Detail: {
                    /**
                     * 检查结果，返回值：
                     * - **Success**：通过该项检查。
                     * - **Failed**：未通过该项检查。
                     * @example `Success`
                     */
                    CheckResult: string;
                    /**
                     * 预检查项目描述。
                     * @example `CHECK_CONN_SRC_DETAIL`
                     */
                    CheckItemDescription: string;
                    /**
                     * 预检查项目。
                     * @example `CHECK_CONN_SRC`
                     */
                    CheckItem: string;
                    /**
                     * 预检查未通过时对应的修复方法。
                     * @example `CHECK_ERROR_DEST_CONN_REPAIR2`
                     */
                    RepairMethod: string;
                    /**
                     * 预检查未通过的错误提示。
                     * @example `Original error: Access denied for user 'dtstest'@'100.104.***.**' (using password: YES)`
                     */
                    FailedReason: string;
                }[];
            };
            /**
             * 源实例连接信息。
             */
            SourceEndpoint: {
                /**
                 * 是否使用SSL安全连接，返回值：
                 * - **DISABLE**：不使用SSL安全连接。
                 * - **ENABLE_WITH_CERTIFICATE**：使用SSL安全连接，并上传CA证书。
                 * - **ENABLE_ONLY_4_MONGODB_ALTAS**：使用SSL安全连接AWS MongoDB Altas。
                 * - **ENABLE_ONLY_4_KAFKA_SCRAM_SHA_256**：使用SCRAM-SHA-256连接Kafka。
                 * @example `DISABLE`
                 */
                SslSolutionEnum: string;
                /**
                 * Oracle数据库的SID信息。
                 * > 当源实例的**EngineName**取值为**Oracle**，且Oracle数据库为非RAC实例时，才会返回本参数。
                 * @example `testsid`
                 */
                OracleSID: string;
                /**
                 * 源实例所在区域，详情请参见[支持的地域列表](~~141033~~)。
                 * @example `cn-hangzhou`
                 */
                Region: string;
                /**
                 * 源实例中迁移对象所属数据库的名称。
                 * @example `dtstestdata`
                 */
                DatabaseName: string;
                /**
                 * 源实例的连接地址。
                 * @example `172.16.88.***`
                 */
                Ip: string;
                /**
                 * 源实例ID。
                 * @example `rm-bp1imrtn6fq7h****`
                 */
                InstanceID: string;
                /**
                 * 源实例的数据库服务端口。
                 * @example `3306`
                 */
                Port: string;
                /**
                 * 源实例类型。
                 * @example `RDS`
                 */
                InstanceType: string;
                /**
                 * 源实例的数据库账号。
                 * @example `dtstest`
                 */
                UserName: string;
                /**
                 * 源实例的数据库类型。
                 * @example `MySQL`
                 */
                EngineName: string;
            };
            /**
             * 库表结构初始化状态。
             */
            StructureInitializationStatus: {
                /**
                 * 库表结构初始化状态，取值包括：
                 * - **NotStarted**：未启动。
                 * - **Migrating**：初始化中。
                 * - **Failed**：初始化失败。
                 * - **Finished**：初始化完成。
                 * @example `Finished`
                 */
                Status: string;
                /**
                 * 库表结构初始化进度，单位为百分比。
                 * @example `100`
                 */
                Percent: string;
                /**
                 * 库表结构初始化失败的错误提示。
                 * @example `DTS-1020042 Execute sql error sql: ERROR: type "geometry" does not exist;`
                 */
                ErrorMessage: string;
                /**
                 * 已完成库表结构初始化的表的数量。
                 * @example `1`
                 */
                Progress: string;
            };
            /**
             * 已使用的DTS专属集群资源，单位为Du。
             * @example `15`
             */
            DuUsage: number;
            /**
             * 实例的当前cpu使用率。单位：%。
             * @example `90`
             */
            CpuUsage: string;
            /**
             * 已使用的内存，单位为mb。
             * @example `500`
             */
            MemUsage: string;
            /**
             * DTS专属集群ID。
             * @example `dtscluster_dpwl3**********`
             */
            DedicatedClusterId: string;
            /**
             * 报错信息。
             */
            ErrorDetails: {
                /**
                 * 错误码。
                 * @example `DTS-31009`
                 */
                ErrorCode: string;
                /**
                 * 帮助文档的URL。
                 * @example `https://**.ali**.com/**`
                 */
                HelpUrl: string;
            }[];
            /**
             * ETL任务的安全位点。
             * @example `1610540493`
             */
            EtlSafeCheckpoint: string;
            /**
             * Serverless实例的DU下限。
             * @example `1`
             */
            MinDu: number;
            /**
             * Serverless实例的DU上限。
             * @example `16`
             */
            MaxDu: number;
            /**
             * 全量校验状态信息。
             */
            FullDataCheckStatus: {
                /**
                 * 全量校验任务的状态，返回值为：
                 * - **NotStarted**：未开始。
                 * - **Checking**：校验中。
                 * - **Failed**：校验失败。
                 * - **Finished**：校验完成。
                 * - **Inconsistency**：运行成功结果存在不一致数据。
                 * @example `Checking`
                 */
                Status: string;
                /**
                 * 全量校验任务的进度，单位为百分比。
                 * @example `100`
                 */
                Percent: string;
                /**
                 * 任务失败的错误提示。
                 * @example `java.lang.NumberFormatException: For input string: ""`
                 */
                ErrorMessage: string;
                /**
                 * 全量校验任务进展。
                 * @example `1 rows/s (row: 5/5, table: 1/1)`
                 */
                Progress: string;
            };
            /**
             * 增量校验状态信息。
             */
            IncDataCheckStatus: {
                /**
                 * 增量校验任务的状态，返回值为：
                 * - **Catched**：无延迟。
                 * - **NotStarted**：未开始。
                 * - **Checking**：校验中。
                 * - **Failed**：校验失败。
                 * - **Inconsistency**：运行成功结果存在不一致数据。
                 * @example `Checking`
                 */
                Status: string;
                /**
                 * 增量校验任务的进度，单位为百分比。
                 * @example `95`
                 */
                Percent: string;
                /**
                 * 任务失败的错误提示。
                 * @example `java.lang.NumberFormatException: For input string: ""`
                 */
                ErrorMessage: string;
                /**
                 * 增量校验任务的进展。
                 * @example `1 rows/s (row: 5/5, table: 1/1)`
                 */
                Progress: string;
            };
        };
        /**
         * 源实例连接信息。
         */
        SourceEndpoint: {
            /**
             * 是否使用SSL安全连接，返回值：
             * - **DISABLE**：不使用SSL安全连接。
             * - **ENABLE_WITH_CERTIFICATE**：使用SSL安全连接，并上传CA证书。
             * - **ENABLE_ONLY_4_MONGODB_ALTAS**：使用SSL安全连接AWS MongoDB Altas。
             * - **ENABLE_ONLY_4_KAFKA_SCRAM_SHA_256**：使用SCRAM-SHA-256连接Kafka。
             * @example `DISABLE`
             */
            SslSolutionEnum: string;
            /**
             * Oracle数据库的SID信息。
             * > 当源实例的**EngineName**取值为**Oracle**，且Oracle数据库为非RAC实例时，才会返回本参数。
             * @example `testsid`
             */
            OracleSID: string;
            /**
             * 源实例所在区域，详情请参见[支持的地域列表](~~141033~~)。
             * @example `cn-hangzhou`
             */
            Region: string;
            /**
             * 源实例中迁移对象所属数据库的名称。
             * @example `dtstestdata`
             */
            DatabaseName: string;
            /**
             * 源实例的连接地址。
             * @example `172.16.88.***`
             */
            Ip: string;
            /**
             * 源实例ID。
             * @example `rm-bp1162kryivb8****`
             */
            InstanceID: string;
            /**
             * 源实例的数据库服务端口。
             * @example `3306`
             */
            Port: string;
            /**
             * 源实例类型。
             * @example `RDS`
             */
            InstanceType: string;
            /**
             * 源实例的数据库账号。
             * @example `dtstest`
             */
            UserName: string;
            /**
             * 源实例的数据库类型。
             * @example `MySQL`
             */
            EngineName: string;
        };
        /**
         * 库表结构迁移或初始化状态。
         */
        StructureInitializationStatus: {
            /**
             * 库表结构迁移或初始化状态，取值包括：
             * - **NotStarted**：未启动。
             * - **Migrating**：迁移或初始化中。
             * - **Failed**：迁移或初始化失败。
             * - **Finished**：迁移或初始化完成。
             * @example `Finished`
             */
            Status: string;
            /**
             * 库表结构迁移或初始化进度，单位为百分比。
             * @example `100`
             */
            Percent: string;
            /**
             * 库表结构迁移或初始化失败的错误提示。
             * @example `DTS-1020042 Execute sql error sql: ERROR: type "geometry" does not exist;`
             */
            ErrorMessage: string;
            /**
             * 已完成库表结构迁移或初始化的表的数量。
             * @example `1`
             */
            Progress: string;
        };
        /**
         * 由于任务异常，DTS正在重试。
         */
        RetryState: {
            /**
             * 已重试次数。
             * @example `5`
             */
            RetryCount: number;
            /**
             * 最大重试时间，单位为秒。
             * @example `7200`
             */
            MaxRetryTime: number;
            /**
             * 重试失败的错误提示。
             * @example `Unexpected error`
             */
            ErrMessage: string;
            /**
             * 重试目标，返回值：
             * - **srcDB**：源数据库。
             * - **destDB**：目标数据库。
             * - **inner_module**：DTS内部模块。
             * @example `srcDB`
             */
            RetryTarget: string;
            /**
             * 已重试时间，单位秒。
             * @example `3600`
             */
            RetryTime: number;
            /**
             * 实例进展。
             * @example `03`
             */
            Module: string;
            /**
             * 任务ID。
             * @example `bi6e22ay243****`
             */
            JobId: string;
            /**
             * 任务是否在重试中，返回值：
             * - **true**：是。
             * - **false**：否。
             * @example `false`
             */
            Retrying: boolean;
            /**
             * 错误码帮助文档的ID。
             * @example `462133`
             */
            MigrationErrHelpDocId: string;
            /**
             * 错误码帮助文档的Key。
             * @example `DTS-RETRY-ERR-0046`
             */
            MigrationErrHelpDocKey: string;
            /**
             * 错误码的Code。
             * @example `dts.retry.err.0046`
             */
            MigrationErrCode: string;
            /**
             * 错误码的类型。
             * @example `ForeignKey`
             */
            MigrationErrType: string;
            /**
             * 错误信息。
             * @example `dts.retry.err.0046.msg`
             */
            MigrationErrMsg: string;
            /**
             * 错误解决方法。
             * @example `dts.retry.err.0046.workaround`
             */
            MigrationErrWorkaround: string;
        };
        /**
         * DTS任务类型，取值：
         * - **MIGRATION**：迁移。
         * - **SYNC**：同步。
         * - **SUBSCRIBE**：订阅。
         * @example `MIGRATION`
         */
        JobType: string;
        /**
         * 已使用的DTS专属集群资源，单位为Du。
         * @example `15`
         */
        DuUsage: number;
        /**
         * 实例的当前cpu使用率。单位：%。
         * @example `1`
         */
        CpuUsage: string;
        /**
         * 已使用的内存。单位：mb。
         * @example `500`
         */
        MemUsage: string;
        /**
         * DTS专属集群ID。
         * @example `dtscluster_ft7y3**********`
         */
        DedicatedClusterId: string;
        /**
         * 报错信息。
         */
        ErrorDetails: {
            /**
             * 错误码。
             * @example `DTS-31009`
             */
            ErrorCode: string;
            /**
             * 帮助文档的URL。
             * @example `https://**.ali**.com/**`
             */
            HelpUrl: string;
        }[];
        /**
         * 物理迁移上云的任务进程状态。
         */
        DataCloudStatus: {
            /**
             * 任务的状态，详情请参见本接口请求参数**Status**的描述。
             * @example `Migrating`
             */
            Status: string;
            /**
             * 是否需要升级实例规格，返回值：
             * - **true**：需要。
             * - **false**：不需要。
             * @example `false`
             */
            NeedUpgrade: boolean;
            /**
             * 任务进度，单位为百分比。
             * @example `85`
             */
            Percent: string;
            /**
             * 已经完成迁移的表数量。
             * @example `1`
             */
            Progress: string;
            /**
             * 任务失败的错误提示。
             * @example `framework: DTS-31009: In process of processing data ****`
             */
            ErrorMessage: string;
        };
        /**
         * 资源组ID。
         * @example `rg-acfmzawhxxc****`
         */
        ResourceGroupId: string;
        /**
         * 资源组名称。
         * @example `default resource group`
         */
        ResourceGroupDisplayName: string;
        /**
         * 错误信息。
         * @example `dts.retry.err.0046.msg`
         */
        MigrationErrMsg: string;
        /**
         * 错误码帮助文档的ID。
         * @example `462133`
         */
        MigrationErrHelpDocId: string;
        /**
         * 错误解决方法。
         * @example `dts.retry.err.0046.workaround`
         */
        MigrationErrWorkaround: string;
        /**
         * 错误码的Code。
         * @example `dts.retry.err.0046`
         */
        MigrationErrCode: string;
        /**
         * 错误码帮助文档的Key。
         * @example `DTS-RETRY-ERR-0046`
         */
        MigrationErrHelpDocKey: string;
        /**
         * 错误码的类型。
         * @example `ForeignKey`
         */
        MigrationErrType: string;
        /**
         * ETL任务安全位点。
         * @example `1610540493`
         */
        EtlSafeCheckpoint: string;
        /**
         * 全量校验状态信息。
         */
        FullDataCheckStatus: {
            /**
             * 全量校验任务的状态，返回值为：
             * - **NotStarted**：未开始。
             * - **Checking**：校验中。
             * - **Failed**：校验失败。
             * - **Finished**：校验完成。
             * @example `Checking`
             */
            Status: string;
            /**
             * 全量校验任务的进度，单位为百分比。
             * @example `100`
             */
            Percent: string;
            /**
             * 任务失败的错误提示。
             * @example `java.lang.NumberFormatException: For input string: ""`
             */
            ErrorMessage: string;
            /**
             * 全量校验任务进展。
             * @example `1 rows/s (row: 5/5, table: 1/1)`
             */
            Progress: string;
        };
        /**
         * 增量校验状态信息。
         */
        IncDataCheckStatus: {
            /**
             * 增量校验任务的状态，返回值为：
             * - **Catched**：无延迟。
             * - **NotStarted**：未开始。
             * - **Checking**：校验中。
             * - **Failed**：校验失败。
             * @example `Checking`
             */
            Status: string;
            /**
             * 增量校验任务的进度，单位为百分比。
             * @example `95`
             */
            Percent: string;
            /**
             * 任务失败的错误提示。
             * @example `java.lang.NumberFormatException: For input string: ""`
             */
            ErrorMessage: string;
            /**
             * 增量校验任务的进展。
             * @example `1 rows/s (row: 5/5, table: 1/1)`
             */
            Progress: string;
        };
        /**
         * DTS实例的环境标签，返回值为：
         * - **normal**：**普通**
         * - **online**：**线上**
         * @example `normal`
         */
        DtsBisLabel: string;
        /**
         * Serverless实例的DU下限。
         * @example `1`
         */
        MinDu: number;
        /**
         * Serverless实例的DU上限。
         * @example `16`
         */
        MaxDu: number;
    }[];
    /**
     * 任务列表及各任务执行详情。
     */
    EtlDemoList: {
        /**
         * DTS实例状态，取值：
         * 迁移任务状态：
         * - **NotStarted**：未启动。
         * - **Prechecking**：预检查中。
         * - **PrecheckFailed**：预检查失败。
         * - **PreCheckPass**：预检查通过。
         * - **NotConfigured**：未配置。
         * - **Migrating**：迁移中。
         * - **Suspending**：暂停中。
         * - **MigrationFailed**：迁移失败。
         * - **Finished**：完成。
         * - **Retrying**：重试中。
         * - **Upgrade**：升级中。
         * - **Locked**：锁定中。
         * - **Downgrade**：降级中。
         * 同步任务状态：
         * - **NotStarted**：未启动。
         * - **Prechecking**：预检查中。
         * - **PrecheckFailed**：预检查失败。
         * - **PreCheckPass**：预检查通过。
         * - **NotConfigured**：未配置。
         * - **Initializing**：同步初始化中。
         * - **InitializeFailed**：同步初始化失败。
         * - **Synchronizing**：同步中。
         * - **Failed**：同步失败。
         * - **Suspending**：暂停中。
         * - **Modifying**：修改同步对象中。
         * - **ModifyFailed**：修改同步对象失败。
         * - **Finished**：完成。
         * - **Retrying**：重试中。
         * - **Upgrade**：升级中。
         * - **Locked**：锁定中。
         * - **Downgrade**：降级中。
         * 订阅任务的状态：
         * - **NotConfigured**：未配置。
         * - **NotStarted**：未启动。
         * - **Prechecking**：预检查中。
         * - **PrecheckFailed**：预检查失败。
         * - **PreCheckPass**：预检查通过。
         * - **Starting**：启动中。
         * - **Normal**：正常。
         * - **Retrying**：重试中。
         * - **Abnormal**：异常。
         * - **Upgrade**：升级中。
         * - **Locked**：锁定中。
         * - **Downgrade**：降级中。
         * @example `Migrating`
         */
        Status: string;
        /**
         * 标注任务来源：
         * - **PTS任务**
         * - **DMS任务**
         * - **DTS任务**
         * @example `DTS任务`
         */
        OriginType: string;
        /**
         * 迁移、同步或订阅任务名称。
         * @example `RDS间迁移`
         */
        DtsJobName: string;
        /**
         * 增量数据迁移或者同步的延迟时间。
         * > 如查询迁移任务，该参数的单位为毫秒，如查询同步任务，该参数的单位为秒。
         * @example `0`
         */
        Delay: number;
        /**
         * 任务失败的错误提示。
         * @example `DTS-070211: Connect Source DB failed. cause by [com.mysql.jdbc.exceptions.jdbc4.MySQLNonTransientConnectionException:Could not create connection to database server. Attempted reconnect 3 times. Giving up.][com.mysql.jdbc.exceptions.jdbc4.CommunicationsException:Communications link failure\n\nThe last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server.][java.net.ConnectException:Connection timed out (Connection timed out)] About more information in [https://yq.aliyun.com/articles/499178].`
         */
        ErrorMessage: string;
        /**
         * 实例的到期时间，<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * > 当**PayType**参数的返回值为**PrePaid**时才会返回本参数。
         * @example `2022-03-16T08:01:19Z`
         */
        ExpireTime: string;
        /**
         * 迁移、同步或订阅任务ID。
         * @example `i03e3zty16i****`
         */
        DtsJobId: string;
        /**
         * 任务创建时间，<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2021-03-16T08:01:19Z`
         */
        CreateTime: string;
        /**
         * 实例的付费类型，返回值：
         * - **PrePaid**：包年包月（预付费）。
         * - **PostPaid**：按量付费（后付费）。
         * @example `PrePaid`
         */
        PayType: string;
        /**
         * DTS预留参数，格式为JSON串，您可以传入本参数实现特殊需求（例如是否自动启动预检查）。更多信息，请参见[MigrationReserved参数说明](~~176470~~)。
         * @example `{\"srcHostPorts\":\"\",\"whitelist.dms.online.ddl.enable\":false,\"filterDDL\":false,\"sqlparser.dms.original.ddl\":true,\"srcOracleType\":\"sid\",\"maxRetryTime\":43200,\"destSSL\":\"0\",\"destOracleType\":\"sid\",\"srcSSL\":\"0\",\"dbListCaseChangeMode\":\"default\",\"SourceEngineVersion\":\"8.0.18\",\"srcNetType\":\"VPC\",\"destNetType\":\"VPC\",\"srcVpcNetMappingInst\":\"172.16.1**.**:10803\",\"destVpcNetMappingInst\":\"172.16.1**.**:11077\",\"useJobTask\":\"1\"}`
         */
        Reserved: string;
        /**
         * 下游消费客户端信息，由IP地址和DTS随机生成的随机数组成。
         * @example `114...:dts******`
         */
        ConsumptionClient: string;
        /**
         * 迁移、同步或订阅对象，详细定义说明，请参见[迁移、同步或订阅对象说明](~~209545~~)。
         * @example `{"dtstestdata": { "name": "dtstestdata", "all": true }}`
         */
        DbObject: string;
        /**
         * 链路规格。
         * > 关于各链路规格的说明及性能测试情况请参见[数据迁移链路规格说明](~~26606~~)，[数据同步链路规格说明](~~26605~~)。
         * @example `large`
         */
        DtsJobClass: string;
        /**
         * 订阅实例的下游消费时间点，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2021-03-23T07:30:31Z`
         */
        ConsumptionCheckpoint: string;
        /**
         * 订阅实例中保存的数据范围的截止时间点，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2021-03-26T14:03:21Z`
         */
        EndTimestamp: string;
        /**
         * 是否为新版订阅，**new**（新版订阅）。
         * > 该参数仅在新版订阅实例中返回。
         * @example `new`
         */
        AppName: string;
        /**
         * 订阅实例中保存的数据范围的起始时间点，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2021-03-15T08:25:34Z`
         */
        BeginTimestamp: string;
        /**
         * 迁移、同步或订阅实例ID。
         * @example `dtsi03e3zty16i****`
         */
        DtsInstanceID: string;
        /**
         * 同步方向，返回值：
         * - **Forward**：正向。
         * - **Reverse**：反向。
         * > 当数据同步实例的拓扑为双向时，才会返回本参数。
         * @example `Forward`
         */
        DtsJobDirection: string;
        /**
         * 增量数据迁移的启动位点或者同步位点，格式为Unix时间戳，单位为秒。
         * @example `1616899019`
         */
        Checkpoint: string;
        /**
         * 标签集合。
         */
        TagList: {
            /**
             * 标签的值。
             * @example `testvalue`
             */
            TagValue: string;
            /**
             * 标签的键。
             * @example `testkey`
             */
            TagKey: string;
        }[];
        /**
         * 全量数据迁移或初始化的状态。
         */
        DataInitializationStatus: {
            /**
             * 全量数据迁移或初始化状态，取值包括：
             * - **NotStarted**：未启动。
             * - **Migrating**：迁移或初始化中。
             * - **Failed**：迁移或初始化失败。
             * - **Finished**：迁移或初始化完成。
             * @example `Finished`
             */
            Status: string;
            /**
             * 全量数据迁移或初始化进度，单位为百分比。
             * @example `100`
             */
            Percent: string;
            /**
             * 全量数据迁移或初始化失败的错误提示。
             * @example `java.lang.NumberFormatException: For input string: ""`
             */
            ErrorMessage: string;
            /**
             * 已完成全量数据迁移或初始化的记录数。
             * @example `44755`
             */
            Progress: string;
        };
        /**
         * 增量数据迁移或同步的状态。
         */
        DataSynchronizationStatus: {
            /**
             * 增量数据迁移或同步状态，返回值为：
             * - **NotStarted**：未启动。
             * - **Migrating**：迁移或同步中。
             * - **Failed**：迁移或同步失败。
             * - **Finished**：迁移或同步完成。
             * - **Catched**：无延迟。
             * @example `Catched`
             */
            Status: string;
            /**
             * 是否需要升级实例规格，返回值：
             * - **true**：需要。
             * - **false**：不需要。
             * > 如需升级实例规格，请调用[TransferInstanceClass](~~281093~~)进行升级。
             * @example `true`
             */
            NeedUpgrade: boolean;
            /**
             * 增量数据迁移或同步进度，单位为百分比。
             * @example `95`
             */
            Percent: string;
            /**
             * 已完成增量数据迁移或同步的记录数。
             * @example `0/0`
             */
            Progress: string;
            /**
             * 增量数据迁移或同步失败的错误提示。
             * @example `任务失败太久无法恢复`
             */
            ErrorMessage: string;
        };
        /**
         * ETL任务的状态。
         * > 配置ETL任务后，才会返回该参数集合。
         */
        DataEtlStatus: {
            /**
             * ETL任务状态，返回值为：
             * - **NotStarted**：未启动。
             * - **Migrating**：执行中。
             * - **Failed**：执行失败。
             * - **Finished**：完成。
             * - **Catched**：无延迟。
             * @example `Finished`
             */
            Status: string;
            /**
             * ETL任务进度，单位为百分比。
             * @example `95`
             */
            Percent: string;
            /**
             * ETL任务失败的错误提示。
             * @example `任务失败太久无法恢复`
             */
            ErrorMessage: string;
            /**
             * 已完成ETL任务的记录数。
             * @example `0/0`
             */
            Progress: string;
        };
        /**
         * 目标实例的连接信息。
         */
        DestinationEndpoint: {
            /**
             * 是否使用SSL安全连接，返回值：
             * - **DISABLE**：不使用SSL安全连接。
             * - **ENABLE_WITH_CERTIFICATE**：使用SSL安全连接，并上传CA证书。
             * - **ENABLE_ONLY_4_MONGODB_ALTAS**：使用SSL安全连接AWS MongoDB Altas。
             * - **ENABLE_ONLY_4_KAFKA_SCRAM_SHA_256**：使用SCRAM-SHA-256连接Kafka。
             * @example `DISABLE`
             */
            SslSolutionEnum: string;
            /**
             * Oracle数据库的SID信息。
             * > 当目标实例的**EngineName**取值为**Oracle**，且Oracle数据库为非RAC实例时，才会返回本参数。
             * @example `testsid`
             */
            OracleSID: string;
            /**
             * 目标实例所在区域，详情请参见[支持的地域列表](~~141033~~)。
             * @example `cn-hangzhou`
             */
            Region: string;
            /**
             * 目标实例中迁移对象所属数据库的名称。
             * @example `dtstestdata`
             */
            DatabaseName: string;
            /**
             * 目标实例的连接地址。
             * @example `172.16.88.***`
             */
            Ip: string;
            /**
             * 目标实例ID。
             * @example `rm-bp1imrtn6fq7h****`
             */
            InstanceID: string;
            /**
             * 目标实例的数据库服务端口。
             * @example `3306`
             */
            Port: string;
            /**
             * 目标实例类型。
             * @example `RDS`
             */
            InstanceType: string;
            /**
             * 目标实例的数据库账号。
             * @example `dtstest`
             */
            UserName: string;
            /**
             * 目标实例的数据库类型。
             * @example `MySQL`
             */
            EngineName: string;
        };
        /**
         * 迁移类型或同步初始化类型。
         */
        MigrationMode: {
            /**
             * 是否执行全量数据迁移或全量数据初始化，返回值：
             * - **true**：是。
             * - **false**：否。
             * @example `true`
             */
            DataInitialization: boolean;
            /**
             * 是否执行增量数据迁移或同步，返回值：
             * - **true**：是。
             * - **false**：否。
             * @example `true`
             */
            DataSynchronization: boolean;
            /**
             * 是否执行库表结构迁移或初始化，返回值：
             * - **true**：是。
             * - **false**：否。
             * @example `true`
             */
            StructureInitialization: boolean;
        };
        /**
         * 迁移或同步链路的性能信息。
         */
        Performance: {
            /**
             * 每秒迁移或同步SQL语句的次数，包括BEGIN、COMMIT 、DML语句（INSERT、DELETE、UPDATE）及DDL语句。
             * @example `100`
             */
            Rps: string;
            /**
             * 每秒迁移或同步数据的流量，单位为MB/s。
             * @example `1`
             */
            Flow: string;
        };
        /**
         * 预检查状态。
         */
        PrecheckStatus: {
            /**
             * 预检查状态，返回值：
             * - **NotStarted**：未启动。
             * - **Suspending**：暂停中。
             * - **Checking**：预检查中。
             * - **Failed**：预检查失败。
             * - **Finished**：预检查完成。
             * @example `Finished`
             */
            Status: string;
            /**
             * 预检查整体进度，单位为百分比。
             * @example `100`
             */
            Percent: string;
            /**
             * 预检查失败的提示信息。
             * @example `CHECK__ERROR_SAME_OBJ.`
             */
            ErrorMessage: string;
            /**
             * 各预检查项的执行情况。
             */
            Detail: {
                /**
                 * 检查结果，返回值：
                 * - **Success**：通过该项检查。
                 * - **Failed**：未通过该项检查。
                 * @example `Success`
                 */
                CheckResult: string;
                /**
                 * 预检查项目描述。
                 * @example `CHECK_CONN_SRC_DETAIL`
                 */
                CheckItemDescription: string;
                /**
                 * 预检查项目。
                 * @example `CHECK_CONN_SRC`
                 */
                CheckItem: string;
                /**
                 * 预检查未通过时对应的修复方法。
                 * > 当**CheckResult**参数返回值为**Failed**时，才会返回本参数。
                 * @example `CHECK_ERROR_DEST_CONN_REPAIR2`
                 */
                RepairMethod: string;
                /**
                 * 预检查未通过的错误提示。
                 * > 当**CheckResult**参数返回值为**Failed**时，才会返回本参数。
                 * @example `Original error: Access denied for user 'dtstest'@'100.104.***.**' (using password: YES)`
                 */
                FailedReason: string;
            }[];
        };
        /**
         * 反向同步任务执行详情。
         * > 当该任务为数据同步，且拓扑类型为双向时，才会返回该参数合集。
         */
        ReverseJob: {
            /**
             * 反向同步任务状态，取值：
             * - **NotStarted**：未启动。
             * - **Prechecking**：预检查中。
             * - **PrecheckFailed**：预检查失败。
             * - **PreCheckPass**：预检查通过。
             * - **NotConfigured**：未配置。
             * - **Initializing**：同步初始化中。
             * - **InitializeFailed**：同步初始化失败。
             * - **Synchronizing**：同步中。
             * - **Failed**：同步失败。
             * - **Suspending**：暂停中。
             * - **Modifying**：修改同步对象中。
             * - **ModifyFailed**：修改同步对象失败。
             * - **Finished**：完成。
             * - **Retrying**：重试中。
             * - **Upgrade**：升级中。
             * - **Locked**：锁定中。
             * - **Downgrade**：降级中。
             * @example `Synchronizing`
             */
            Status: string;
            /**
             * 同步任务名称。
             * @example `RDS间迁移`
             */
            DtsJobName: string;
            /**
             * 增量数据同步的延迟时间，单位为秒。
             * @example `0`
             */
            Delay: number;
            /**
             * 任务失败的错误提示。
             * @example `DTS-070211: Connect Source DB failed. cause by [com.mysql.jdbc.exceptions.jdbc4.MySQLNonTransientConnectionException:Could not create connection to database server. Attempted reconnect 3 times. Giving up.][com.mysql.jdbc.exceptions.jdbc4.CommunicationsException:Communications link failure\n\nThe last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server.][java.net.ConnectException:Connection timed out (Connection timed out)] About more information in [https://yq.aliyun.com/articles/499178].`
             */
            ErrorMessage: string;
            /**
             * 同步任务ID。
             * @example `i03e3zty16i****`
             */
            DtsJobId: string;
            /**
             * 实例的到期时间，<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * > 当**PayType**参数的返回值为**PrePaid**时才会返回本参数。
             * @example `2022-03-16T08:01:19Z`
             */
            ExpireTime: string;
            /**
             * 任务创建时间，<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2021-03-16T08:01:19Z`
             */
            CreateTime: string;
            /**
             * 实例的付费类型，返回值：
             * - **PrePaid**：包年包月（预付费）。
             * - **PostPaid**：按量付费（后付费）。
             * @example `PostPaid`
             */
            PayType: string;
            /**
             * DTS预留参数，格式为JSON串，您可以传入本参数实现特殊需求（例如是否自动启动预检查）。更多信息，请参见[MigrationReserved参数说明](~~176470~~)。
             * @example `{\"srcHostPorts\":\"\",\"whitelist.dms.online.ddl.enable\":false,\"filterDDL\":false,\"sqlparser.dms.original.ddl\":true,\"srcOracleType\":\"sid\",\"maxRetryTime\":43200,\"destSSL\":\"0\",\"destOracleType\":\"sid\",\"srcSSL\":\"0\",\"dbListCaseChangeMode\":\"default\",\"SourceEngineVersion\":\"8.0.18\",\"srcNetType\":\"VPC\",\"destNetType\":\"VPC\",\"srcVpcNetMappingInst\":\"172.16.1**.**:10803\",\"destVpcNetMappingInst\":\"172.16.1**.**:11077\",\"useJobTask\":\"1\"}`
             */
            Reserved: string;
            /**
             * 同步对象的库表结构定义，格式为JSON串，且支持一定的正则表达式。更多相关介绍和示例，请参见迁移、同步或订阅对象配置说明。
             * @example `{"dtstestdata": { "name": "dtstestdata", "all": true }}	`
             */
            DbObject: string;
            /**
             * 链路规格。
             * > 关于各链路规格的说明及性能测试情况请参见[数据同步链路规格说明](~~26605~~)。
             * @example `large`
             */
            DtsJobClass: string;
            /**
             * 同步实例ID。
             * @example `dtsi03e3zty16i****`
             */
            DtsInstanceID: string;
            /**
             * 同步方向，固定为**Reverse**（反向）。
             * @example `Reverse`
             */
            DtsJobDirection: string;
            /**
             * 增量数据同步位点，格式为Unix时间戳，单位为秒。
             * @example `1616980369`
             */
            Checkpoint: string;
            /**
             * 全量数据初始化的状态。
             */
            DataInitializationStatus: {
                /**
                 * 全量数据初始化状态，取值包括：
                 * - **NotStarted**：未启动。
                 * - **Migrating**：初始化中。
                 * - **Failed**：初始化失败。
                 * - **Finished**：初始化完成。
                 * @example `Finished`
                 */
                Status: string;
                /**
                 * 全量数据初始化进度，单位为百分比。
                 * @example `100`
                 */
                Percent: string;
                /**
                 * 全量数据初始化失败的错误提示。
                 * @example `java.lang.NumberFormatException: For input string: ""	`
                 */
                ErrorMessage: string;
                /**
                 * 已完成全量数据初始化的记录数。
                 * @example `43071`
                 */
                Progress: string;
            };
            /**
             * 增量数据同步的状态。
             */
            DataSynchronizationStatus: {
                /**
                 * 增量数据同步状态。
                 * @example `Migrating`
                 */
                Status: string;
                /**
                 * 是否需要升级实例规格，返回值：
                 * - **true**：需要。
                 * - **false**：不需要。
                 * > 如需升级实例规格，请调用[TransferInstanceClass](~~281093~~)进行升级。
                 * @example `true`
                 */
                NeedUpgrade: boolean;
                /**
                 * 增量数据同步进度，单位为百分比。
                 * @example `100`
                 */
                Percent: string;
                /**
                 * 已完成增量数据迁移或同步的记录数。
                 * @example `20001`
                 */
                Progress: string;
                /**
                 * 增量数据同步失败的错误提示。
                 * @example `任务失败太久无法恢复`
                 */
                ErrorMessage: string;
            };
            /**
             * 目标实例的连接信息。
             */
            DestinationEndpoint: {
                /**
                 * 是否使用SSL安全连接，返回值：
                 * - **DISABLE**：不使用SSL安全连接。
                 * - **ENABLE_WITH_CERTIFICATE**：使用SSL安全连接，并上传CA证书。
                 * - **ENABLE_ONLY_4_MONGODB_ALTAS**：使用SSL安全连接AWS MongoDB Altas。
                 * - **ENABLE_ONLY_4_KAFKA_SCRAM_SHA_256**：使用SCRAM-SHA-256连接Kafka。
                 * @example `DISABLE`
                 */
                SslSolutionEnum: string;
                /**
                 * Oracle数据库的SID信息。
                 * > 当目标实例的**EngineName**取值为**Oracle**，且Oracle数据库为非RAC实例时，才会返回本参数。
                 * @example `testsid`
                 */
                OracleSID: string;
                /**
                 * 目标实例所在区域，详情请参见[支持的地域列表](~~141033~~)。
                 * @example `cn-hangzhou`
                 */
                Region: string;
                /**
                 * 目标实例中同步对象所属数据库的名称。
                 * @example `dtstestdata`
                 */
                DatabaseName: string;
                /**
                 * 目标实例的连接地址。
                 * @example `172.16.88.***	`
                 */
                Ip: string;
                /**
                 * 目标实例ID。
                 * @example `rm-bp1162kryivb8****`
                 */
                InstanceID: string;
                /**
                 * 目标实例的数据库服务端口。
                 * @example `3306`
                 */
                Port: string;
                /**
                 * 目标实例类型。
                 * @example `RDS`
                 */
                InstanceType: string;
                /**
                 * 目标实例的数据库账号。
                 * @example `dtstest`
                 */
                UserName: string;
                /**
                 * 目标实例的数据库类型。
                 * @example `MySQL`
                 */
                EngineName: string;
            };
            /**
             * 迁移类型或同步初始化类型。
             */
            MigrationMode: {
                /**
                 * 是否执行全量数据迁移或全量数据初始化，返回值：
                 * - **true**：是。
                 * - **false**：否。
                 * @example `true`
                 */
                DataInitialization: boolean;
                /**
                 * 是否执行增量数据迁移或同步，返回值：
                 * - **true**：是。
                 * - **false**：否。
                 * @example `true`
                 */
                DataSynchronization: boolean;
                /**
                 * 是否执行库表结构迁移或初始化，返回值：
                 * - **true**：是。
                 * - **false**：否。
                 * @example `true`
                 */
                StructureInitialization: boolean;
            };
            /**
             * 迁移或同步链路的性能信息。
             */
            Performance: {
                /**
                 * 每秒迁移或同步SQL语句的次数，包括BEGIN、COMMIT 、DML语句（INSERT、DELETE、UPDATE）及DDL语句。
                 * @example `100`
                 */
                Rps: string;
                /**
                 * 每秒迁移或同步数据的流量，单位为MB/s。
                 * @example `1`
                 */
                Flow: string;
            };
            /**
             * 预检查状态。
             */
            PrecheckStatus: {
                /**
                 * 预检查状态，返回值：
                 * - **NotStarted**：未启动。
                 * - **Suspending**：暂停中。
                 * - **Checking**：预检查中。
                 * - **Failed**：预检查失败。
                 * - **Finished**：预检查完成。
                 * @example `Finished`
                 */
                Status: string;
                /**
                 * 预检查整体进度，单位为百分比。
                 * @example `100`
                 */
                Percent: string;
                /**
                 * 预检查失败的提示信息。
                 * @example `CHECK__ERROR_SAME_OBJ`
                 */
                ErrorMessage: string;
                /**
                 * 各预检查项的执行情况。
                 */
                Detail: {
                    /**
                     * 检查结果，返回值：
                     * - **Success**：通过该项检查。
                     * - **Failed**：未通过该项检查。
                     * @example `Success`
                     */
                    CheckResult: string;
                    /**
                     * 预检查项目描述。
                     * @example `CHECK_CONN_SRC_DETAIL`
                     */
                    CheckItemDescription: string;
                    /**
                     * 预检查项目。
                     * @example `CHECK_CONN_SRC`
                     */
                    CheckItem: string;
                    /**
                     * 预检查未通过时对应的修复方法。
                     * > 当**CheckResult**参数返回值为**Failed**时，才会返回本参数。
                     * @example `CHECK_ERROR_DEST_CONN_REPAIR2`
                     */
                    RepairMethod: string;
                    /**
                     * 预检查未通过的错误提示。
                     * > 当**CheckResult**参数返回值为**Failed**时，才会返回本参数。
                     * @example `Original error: Access denied for user 'dtstest'@'100.104.***.**' (using password: YES)`
                     */
                    FailedReason: string;
                }[];
            };
            /**
             * 源实例连接信息。
             */
            SourceEndpoint: {
                /**
                 * 是否使用SSL安全连接，返回值：
                 * - **DISABLE**：不使用SSL安全连接。
                 * - **ENABLE_WITH_CERTIFICATE**：使用SSL安全连接，并上传CA证书。
                 * - **ENABLE_ONLY_4_MONGODB_ALTAS**：使用SSL安全连接AWS MongoDB Altas。
                 * - **ENABLE_ONLY_4_KAFKA_SCRAM_SHA_256**：使用SCRAM-SHA-256连接Kafka。
                 * @example `DISABLE`
                 */
                SslSolutionEnum: string;
                /**
                 * Oracle数据库的SID信息。
                 * > 当源实例的**EngineName**取值为**Oracle**，且Oracle数据库为非RAC实例时，才会返回本参数。
                 * @example `testsid`
                 */
                OracleSID: string;
                /**
                 * 源实例所在区域，详情请参见[支持的地域列表](~~141033~~)。
                 * @example `cn-hangzhou`
                 */
                Region: string;
                /**
                 * 源实例中迁移对象所属数据库的名称。
                 * @example `dtstestdata`
                 */
                DatabaseName: string;
                /**
                 * 源实例的连接地址。
                 * @example `172.16.88.***`
                 */
                Ip: string;
                /**
                 * 源实例ID。
                 * @example `rm-bp1imrtn6fq7h****`
                 */
                InstanceID: string;
                /**
                 * 源实例的数据库服务端口。
                 * @example `3306`
                 */
                Port: string;
                /**
                 * 源实例类型。
                 * @example `RDS`
                 */
                InstanceType: string;
                /**
                 * 源实例的数据库账号。
                 * @example `dtstest`
                 */
                UserName: string;
                /**
                 * 源实例的数据库类型。
                 * @example `MySQL`
                 */
                EngineName: string;
            };
            /**
             * 库表结构初始化状态。
             */
            StructureInitializationStatus: {
                /**
                 * 库表结构初始化状态，取值包括：
                 * - **NotStarted**：未启动。
                 * - **Migrating**：初始化中。
                 * - **Failed**：初始化失败。
                 * - **Finished**：初始化完成。
                 * @example `Finished`
                 */
                Status: string;
                /**
                 * 库表结构初始化进度，单位为百分比。
                 * @example `100`
                 */
                Percent: string;
                /**
                 * 库表结构初始化失败的错误提示。
                 * @example `DTS-1020042 Execute sql error sql: ERROR: type "geometry" does not exist;`
                 */
                ErrorMessage: string;
                /**
                 * 已完成库表结构初始化的表的数量。
                 * @example `1`
                 */
                Progress: string;
            };
            /**
             * ETL任务安全位点。
             * @example `1610540493`
             */
            EtlSafeCheckpoint: string;
        };
        /**
         * 源实例连接信息。
         */
        SourceEndpoint: {
            /**
             * 是否使用SSL安全连接，返回值：
             * - **DISABLE**：不使用SSL安全连接。
             * - **ENABLE_WITH_CERTIFICATE**：使用SSL安全连接，并上传CA证书。
             * - **ENABLE_ONLY_4_MONGODB_ALTAS**：使用SSL安全连接AWS MongoDB Altas。
             * - **ENABLE_ONLY_4_KAFKA_SCRAM_SHA_256**：使用SCRAM-SHA-256连接Kafka。
             * @example `DISABLE`
             */
            SslSolutionEnum: string;
            /**
             * Oracle数据库的SID信息。
             * > 当源实例的**EngineName**取值为**Oracle**，且Oracle数据库为非RAC实例时，才会返回本参数。
             * @example `testsid`
             */
            OracleSID: string;
            /**
             * 源实例所在区域，详情请参见[支持的地域列表](~~141033~~)。
             * @example `cn-hangzhou`
             */
            Region: string;
            /**
             * 源实例中迁移对象所属数据库的名称。
             * @example `dtstestdata`
             */
            DatabaseName: string;
            /**
             * 源实例的连接地址。
             * @example `172.16.88.***`
             */
            Ip: string;
            /**
             * 源实例ID。
             * @example `rm-bp1162kryivb8****`
             */
            InstanceID: string;
            /**
             * 源实例的数据库服务端口。
             * @example `3306`
             */
            Port: string;
            /**
             * 源实例类型。
             * @example `RDS`
             */
            InstanceType: string;
            /**
             * 源实例的数据库账号。
             * @example `dtstest`
             */
            UserName: string;
            /**
             * 源实例的数据库类型。
             * @example `MySQL`
             */
            EngineName: string;
        };
        /**
         * 库表结构迁移或初始化状态。
         */
        StructureInitializationStatus: {
            /**
             * 库表结构迁移或初始化状态，取值包括：
             * - **NotStarted**：未启动。
             * - **Migrating**：迁移或初始化中。
             * - **Failed**：迁移或初始化失败。
             * - **Finished**：迁移或初始化完成。
             * @example `Finished`
             */
            Status: string;
            /**
             * 库表结构迁移或初始化进度，单位为百分比。
             * @example `100`
             */
            Percent: string;
            /**
             * 库表结构迁移或初始化失败的错误提示。
             * @example `DTS-1020042 Execute sql error sql: ERROR: type "geometry" does not exist;`
             */
            ErrorMessage: string;
            /**
             * 已完成库表结构迁移或初始化的表的数量。
             * @example `1`
             */
            Progress: string;
        };
        /**
         * 由于任务异常，DTS正在重试。
         */
        RetryState: {
            /**
             * 已重试次数。
             * @example `5`
             */
            RetryCount: number;
            /**
             * 最大重试时间，单位为秒。
             * @example `7200`
             */
            MaxRetryTime: number;
            /**
             * 重试失败的错误提示。
             * @example `Unexpected error`
             */
            ErrMessage: string;
            /**
             * 重试目标，返回值：
             * - **srcDB**：源数据库。
             * - **destDB**：目标数据库。
             * - **inner_module**：DTS内部模块。
             * @example `srcDB`
             */
            RetryTarget: string;
            /**
             * 已重试时间，单位秒。
             * @example `3600`
             */
            RetryTime: number;
            /**
             * 实例进展。
             * @example `03`
             */
            Module: string;
            /**
             * 任务ID。
             * @example `bi6e22ay243****`
             */
            JobId: string;
            /**
             * 任务是否在重试中，返回值：
             * - **true**：是。
             * - **false**：否。
             * @example `false`
             */
            Retrying: boolean;
        };
        /**
         * DTS实例的任务类型，取值：
         * - **MIGRATION**：迁移。
         * - **SYNC**：同步。
         * - **SUBSCRIBE**：订阅。
         * @example `MIGRATION`
         */
        JobType: string;
        /**
         * 资源组ID。
         * @example `rg-acfmzawhxxc****`
         */
        ResourceGroupId: string;
        /**
         * 资源组名称。
         * @example `default resource group`
         */
        ResourceGroupDisplayName: string;
        /**
         * ETL任务安全位点。
         * @example `1610540493`
         */
        EtlSafeCheckpoint: string;
    }[];
}
