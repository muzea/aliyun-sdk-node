export interface DescribeDtsJobDetailResponse {
    /**
     * 迁移或同步任务的状态。
     * 迁移任务的状态，返回值为：
     * - **NotStarted**：未启动。
     * - **Migrating**：迁移中。
     * - **Failed**：迁移失败。
     * - **Finished**：迁移完成。
     * 同步任务的状态，返回值为：
     * - **NotStarted**：未启动。
     * - **Prechecking**：预检查中。
     * - **PrecheckFailed**：预检查失败。
     * - **Initializing**：同步初始化中。
     * - **InitializeFailed**：同步初始化失败。
     * - **synchronizing**：同步中。
     * - **Failed**：同步失败。
     * - **Suspending**：暂停。
     * - **Modifying**：同步对象变更中。
     * - **Finished**：完成。
     * @example `Migrating`
     */
    Status: string;
    /**
     * 迁移、同步或订阅任务名称。
     * @example `api_test`
     */
    DtsJobName: string;
    /**
     * 任务结束时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2023-06-16T10:34:17Z`
     */
    FinishTime: string;
    /**
     * 任务失败的错误提示。
     * @example `DTS-070211: Connect Source DB failed. cause by [com.mysql.jdbc.exceptions.jdbc4.MySQLNonTransientConnectionException:Could not create connection to database server. Attempted reconnect 3 times. Giving up.][com.mysql.jdbc.exceptions.jdbc4.CommunicationsException:Communications link failure\n\nThe last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server.][java.net.ConnectException:Connection timed out (Connection timed out)] About more information in [https://yq.aliyun.com/articles/499178].`
     */
    ErrorMessage: string;
    /**
     * 迁移、同步或订阅任务ID。
     * @example `i03e3zty16i****`
     */
    DtsJobId: string;
    /**
     * 任务创建时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2022-03-16T08:01:19Z`
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
     * 如源实例为PolarDB-X 1.0时，您需要输入其下挂RDS MySQL的数量。
     * @example `2`
     */
    DatabaseCount: number;
    /**
     * 链路规格。
     * > 关于各链路规格的说明及性能测试情况请参见[数据迁移链路规格说明](~~26606~~)，[数据同步链路规格说明](~~26605~~)。
     * @example `xlarge`
     */
    DtsJobClass: string;
    /**
     * 订阅实例中保存的数据范围的截止时间点，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2022-03-26T14:03:21Z`
     */
    EndTimestamp: string;
    /**
     * 是否为新版订阅，new（新版订阅）。
     * > 该参数仅在新版订阅实例中返回。
     * @example `new`
     */
    AppName: string;
    /**
     * 消费客户端所属网络类型：
     * - **CLASSIC**：经典网络。
     * - **VPC**：专有网络。
     * @example `VPC`
     */
    DestNetType: string;
    /**
     * 订阅Topic。
     * > 当该订阅实例为新版，且调用[CreateConsumerGroup](~~122863~~)接口创建了消费组时，才会返回本参数。
     * @example `cn_hangzhou_rm_bp1162kryivb8****_dtstest_version2`
     */
    SubscribeTopic: string;
    /**
     * 迁移、同步或订阅实例ID。
     * @example `dtsi03e3zty16i****`
     */
    DtsInstanceID: string;
    /**
     * 请求ID。
     * @example `29207299-7C41-493A-BA4F-2FAC5DE4****`
     */
    RequestId: string;
    /**
     * 错误码，本参数即将下线。
     * @example `200`
     */
    Code: number;
    /**
     * 增量数据迁移的启动位点或者同步位点，格式为Unix时间戳，单位为秒。
     * @example `1616405159`
     */
    Checkpoint: number;
    /**
     * 增量数据迁移或者同步的延迟时间，单位为毫秒。
     * @example `0`
     */
    Delay: number;
    /**
     * 实例的到期时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * > 当**PayType**参数的返回值为**PrePaid**时才会返回本参数。
     * @example `2023-06-16T08:01:19Z`
     */
    ExpireTime: string;
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
     * 调用错误时返回的错误信息。
     * @example `The Value of Input Parameter %s is not valid.`
     */
    ErrMessage: string;
    /**
     * 下游消费客户端信息，由IP地址和DTS随机生成的随机数组成。
     * @example `114.***.***.**:dts********`
     */
    ConsumptionClient: string;
    /**
     * 迁移、同步或订阅对象，详细定义说明，请参见[迁移、同步或订阅对象说明](~~209545~~)。
     * @example `{\"dtstestdata\":{\"all\":true,\"name\":\"dtstestdata\",\"state\":\"normal\"}}`
     */
    DbObject: string;
    /**
     * 动态错误信息，用于替换返回参数**ErrMessage**错误信息中的**%s**。
     * > 如果**ErrMessage**返回**The Value of Input Parameter %s is not valid**，且**DynamicMessage**返回**DtsJobId**，则代表所传入的请求参数**DtsJobId**不合法。
     * @example `DtsJobId`
     */
    DynamicMessage: string;
    /**
     * 订阅任务的下游消费时间点，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2022-03-23T07:30:31Z`
     */
    ConsumptionCheckpoint: string;
    /**
     * ETL任务的算子信息。
     * > 当任务为ETL时，才会返回本参数。
     * @example `{ 	"cells ": [{\"shape\":\"edge\",\"attrs\":{\"line\":{\"stroke\":\"#b1b1b1\",\"strokeWidth\":1,\"targetMarker\":{\"name\":\"block\",\"args\":{\"size\":\"8\"}},\"strokeDasharray\":\"\"}},\"id\":\"cd1ec473-f9b9-4e9b-a742-ac23f442****\",\"source\":{\"cell\":\"8b261182-bfab-4803-ad8e-6bb08e3e****\",\"port\":\"out1\"},\"target\":{\"cell\":\"b36770df-f48c-4d6b-9644-54c5e924****\",\"port\":\"in1\"},\"zIndex\":7 	}] }`
     */
    EtlCalculator: string;
    /**
     * 状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 订阅实例中保存的数据范围的起始时间点，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2022-03-15T08:25:34Z`
     */
    BeginTimestamp: string;
    /**
     * 资源组ID。
     * @example `rg-acfmzawhxxc****`
     */
    GroupId: string;
    /**
     * 同步方向，取值：
     * - **Forward**：正向。
     * - **Reverse**：反向。
     * > - 默认取值为**Forward**。
     * - 只有当数据同步实例的同步拓扑为双向同步时，本参数传入**Reverse**才会生效。
     * @example `Forward`
     */
    SynchronizationDirection: string;
    /**
     * 同步方向，返回值：
     * - **Forward**：正向。
     * - **Reverse**：反向。
     * > 当数据同步实例的拓扑为双向时，才会返回本参数。
     * @example `Forward`
     */
    DtsJobDirection: string;
    /**
     * 是否子任务，返回值：
     * - **true**：是。
     * - **false**：否。
     * @example `false`
     */
    DemoJob: boolean;
    /**
     * 源实例连接信息。
     */
    SourceEndpoint: {
        /**
         * Oracle数据库的SID信息。
         * > 当源实例的**EngineName**取值为**Oracle**，且Oracle数据库为非RAC实例时，才会返回本参数。
         * @example `testsid`
         */
        OracleSID: string;
        /**
         * 是否使用SSL安全连接，返回值：
         * - **DISABLE**：未使用SSL安全连接。
         * - **ENABLE_WITH_CERTIFICATE**：使用SSL安全连接，并上传CA证书。
         * - **ENABLE_ONLY_4_MONGODB_ALTAS**：使用SSL安全连接AWS MongoDB Altas。
         * - **ENABLE_ONLY_4_KAFKA_SCRAM_SHA_256**：使用SCRAM-SHA-256连接Kafka。
         * @example `DISABLE`
         */
        SslSolutionEnum: string;
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
         * 源实例所属云账号配置的角色名称。
         * @example `ram-for-dts`
         */
        RoleName: string;
        /**
         * 源实例类型。
         * @example `RDS`
         */
        InstanceType: string;
        /**
         * 源实例的数据库服务端口。
         * @example `3306`
         */
        Port: string;
        /**
         * 源实例的数据库类型。
         * @example `MySQL`
         */
        EngineName: string;
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
         * 源实例所属的阿里云账号ID。
         * @example `140692647406****`
         */
        AliyunUid: string;
        /**
         * 源实例的数据库账号。
         * @example `dtstest`
         */
        UserName: string;
        /**
         * 是否可以修改密码，返回值为：
         * - **true**：是。
         * - **false**：否。
         * @example `false`
         */
        CanModifyPassword: boolean;
    };
    /**
     * 目标实例的连接信息。
     */
    DestinationEndpoint: {
        /**
         * 是否使用SSL安全连接，返回值：
         * - **DISABLE**：未使用SSL安全连接。
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
         * 目标实例中迁移对象所属数据库的名称。
         * @example `dtstestdata`
         */
        DatabaseName: string;
        /**
         * 目标实例所在区域，详情请参见[支持的地域列表](~~141033~~)。
         * @example `cn-hangzhou`
         */
        Region: string;
        /**
         * 目标实例的连接地址。
         * @example `172.16.XX.XX`
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
        /**
         * 是否可以修改密码，返回值为：
         * - **true**：是。
         * - **false**：否。
         * @example `false`
         */
        CanModifyPassword: boolean;
    };
    /**
     * 迁移类型或同步初始化类型。
     */
    MigrationMode: {
        /**
         * 是否执行数据加工，返回值：
         * - **true**：是。
         * - **false**：否。
         * @example `false`
         */
        DataExtractTransformLoad: boolean;
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
     * 订阅任务的连接地址。
     */
    SubscriptionHost: {
        /**
         * 订阅任务的专有网络VPC（Virtual Private Cloud）连接信息，格式为`地址：端口号`。
         * @example `dts-cn-****-vpc.aliyuncs.com:18003`
         */
        VpcHost: string;
        /**
         * 订阅任务的公网连接信息，格式为`地址：端口号`。
         * @example `dts-cn-****.aliyuncs.com:18001`
         */
        PublicHost: string;
        /**
         * 订阅任务的私网连接信息，格式为`地址：端口号`。
         * @example `dts-cn-****-internal.aliyuncs.com:18002`
         */
        PrivateHost: string;
    };
    /**
     * 订阅数据的类型。
     */
    SubscriptionDataType: {
        /**
         * 订阅数据是否包含DML语句，返回值：
         * - **true**：是。
         * - **false**：否。
         * @example `true`
         */
        Dml: boolean;
        /**
         * 订阅数据是否包含DDL语句，返回值：
         * - **true**：是。
         * - **false**：否。
         * @example `true`
         */
        Ddl: boolean;
    };
    /**
     * 分布式子任务的信息，如主任务不是分布式任务，此项为null。
     * > 目前仅当主任务为同步任务时，才会有此字段，其他任务暂时不支持。
     */
    SubDistributedJob: {
        /**
         * 同步子任务信息。
         */
        SubSyncJob: any[];
        /**
         * DTS实例ID。
         * @example `dtsnjuc14kp12u****`
         */
        DtsInstanceID: string;
        /**
         * DTS任务ID。
         * @example `m06j1g92124****`
         */
        DtsJobId: string;
        /**
         * DTS实例名称。
         * @example `dtstest****`
         */
        DtsJobName: string;
        /**
         * 资源组ID。
         * @example `rg-acfmzawhxxc****`
         */
        GroupId: string;
        /**
         * 如源实例为PolarDB-X 1.0时，您需要输入其下挂RDS MySQL的数量。
         * @example `2`
         */
        DatabaseCount: number;
        /**
         * 链路规格。
         * @example `xlarge`
         */
        DtsJobClass: string;
        /**
         * 同步方向，返回值：
         * - **Forward**：正向。
         * - **Reverse**：反向。
         * > 当数据同步实例的拓扑为双向时，才会返回本参数。
         * @example `Forward`
         */
        DtsJobDirection: string;
        /**
         * 同步方向，取值：
         * - **Forward**：正向。
         * - **Reverse**：反向。
         * > - 默认取值为**Forward**。
         * - 只有当数据同步实例的同步拓扑为双向同步时，本参数传入**Reverse**才会生效。
         * @example `Forward`
         */
        SynchronizationDirection: string;
        /**
         * 支付类型：
         * - **PrePaid**：预付费。
         * - **PostPaid**：后付费。
         * @example `PrePaid`
         */
        PayType: string;
        /**
         * 实例的到期时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * > 当**PayType**参数的返回值为**PrePaid**时才会返回本参数。
         * @example `2023-06-16T08:01:19Z`
         */
        ExpireTime: string;
        /**
         * 任务创建时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2023-01-12T08:34:11Z`
         */
        CreateTime: string;
        /**
         * 任务结束时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2023-06-16T10:34:17Z`
         */
        FinishTime: string;
        /**
         * 源实例连接信息。
         */
        SourceEndpoint: {
            /**
             * 源实例ID。
             * @example `dtsnjuc14kp12u****`
             */
            InstanceID: string;
            /**
             * 源实例所在区域，详情请参见[支持的地域列表](~~141033~~)。
             * @example `cn-hangzhou`
             */
            Region: string;
            /**
             * 源实例类型。
             * @example `RDS`
             */
            InstanceType: string;
            /**
             * 源实例的数据库类型。
             * @example `MySQL`
             */
            EngineName: string;
            /**
             * 源实例的连接地址。
             * @example `192.168.XX.XX`
             */
            Ip: string;
            /**
             * 源实例的数据库服务端口。
             * @example `3306`
             */
            Port: string;
            /**
             * 源实例中迁移对象所属数据库的名称。
             * @example `dtstestdata`
             */
            DatabaseName: string;
            /**
             * Oracle数据库的SID信息。
             * > 当目标实例的**EngineName**取值为**Oracle**，且Oracle数据库为非RAC实例时，才会返回本参数。
             * @example `testsid`
             */
            OracleSID: string;
            /**
             * 源实例的数据库账号。
             * @example `dtstest`
             */
            UserName: string;
            /**
             * 是否使用SSL安全连接，返回值：
             * - **DISABLE**：未使用SSL安全连接。
             * - **ENABLE_WITH_CERTIFICATE**：使用SSL安全连接，并上传CA证书。
             * - **ENABLE_ONLY_4_MONGODB_ALTAS**：使用SSL安全连接AWS MongoDB Altas。
             * - **ENABLE_ONLY_4_KAFKA_SCRAM_SHA_256**：使用SCRAM-SHA-256连接Kafka。
             * @example `DISABLE`
             */
            SslSolutionEnum: string;
            /**
             * 源实例所属云账号配置的角色名称。
             * @example `ram-for-dts`
             */
            RoleName: string;
            /**
             * 源实例所属的阿里云账号ID。
             * @example `140692647406****`
             */
            AliyunUid: string;
        };
        /**
         * 目标实例的连接信息。
         */
        DestinationEndpoint: {
            /**
             * 目标实例ID。
             * @example `rm-bp1f9guj5rhzq****`
             */
            InstanceID: string;
            /**
             * 目标实例所在区域，详情请参见[支持的地域列表](~~141033~~)。
             * @example `cn-hangzhou`
             */
            Region: string;
            /**
             * 目标实例类型。
             * @example `RDS`
             */
            InstanceType: string;
            /**
             * 目标实例的数据库类型。
             * @example `MySQL`
             */
            EngineName: string;
            /**
             * 目标实例的连接地址。
             * @example `192.168.XX.XX`
             */
            Ip: string;
            /**
             * 目标实例的数据库服务端口。
             * @example `3306`
             */
            Port: string;
            /**
             * 目标实例中迁移对象所属数据库的名称。
             * @example `dtstestdata`
             */
            DatabaseName: string;
            /**
             * Oracle数据库的SID信息。
             * > 当目标实例的**EngineName**取值为**Oracle**，且Oracle数据库为非RAC实例时，才会返回本参数。
             * @example `testid`
             */
            OracleSID: string;
            /**
             * 目标实例的数据库账号。
             * @example `dtstest`
             */
            UserName: string;
            /**
             * 是否使用SSL安全连接，返回值：
             * - **DISABLE**：未使用SSL安全连接。
             * - **ENABLE_WITH_CERTIFICATE**：使用SSL安全连接，并上传CA证书。
             * - **ENABLE_ONLY_4_MONGODB_ALTAS**：使用SSL安全连接AWS MongoDB Altas。
             * - **ENABLE_ONLY_4_KAFKA_SCRAM_SHA_256**：使用SCRAM-SHA-256连接Kafka。
             * @example `DISABLE`
             */
            SslSolutionEnum: string;
            /**
             * 目标实例所属云账号配置的角色名称。
             * @example `ram-for-dts`
             */
            RoleName: string;
            /**
             * 目标实例所属的阿里云账号ID。
             * @example `140692647406****`
             */
            AliyunUid: string;
        };
        /**
         * 迁移、同步或订阅对象，详细定义说明，请参见[迁移、同步或订阅对象说明](~~209545~~)。
         * @example `{\"dtstestdata\":{\"all\":true,\"name\":\"dtstestdata\",\"state\":\"normal\"}}`
         */
        DbObject: string;
        /**
         * 迁移类型或同步初始化类型。
         */
        MigrationMode: {
            /**
             * 是否执行库表结构迁移或初始化，返回值：
             * - **true**：是。
             * - **false**：否。
             * @example `true`
             */
            StructureInitialization: boolean;
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
             * 是否执行数据加工，返回值：
             * - **true**：是。
             * - **false**：否。
             * @example `false`
             */
            DataExtractTransformLoad: boolean;
        };
        /**
         * 迁移或同步任务的状态。
         * 迁移任务的状态，返回值为：
         * - **NotStarted**：未启动。
         * - **Migrating**：迁移中。
         * - **Failed**：迁移失败。
         * - **Finished**：迁移完成。
         * 同步任务的状态，返回值为：
         * - **NotStarted**：未启动。
         * - **Prechecking**：预检查中。
         * - **PrecheckFailed**：预检查失败。
         * - **Initializing**：同步初始化中。
         * - **InitializeFailed**：同步初始化失败。
         * - **Synchronizing**：同步中。
         * - **Failed**：同步失败。
         * - **Suspending**：暂停。
         * - **Modifying**：同步对象变更中。
         * - **Finished**：完成。
         * @example `Finished`
         */
        Status: string;
        /**
         * 任务失败的错误提示。
         * @example `DTS-070211: Connect Source DB failed. cause by ****`
         */
        ErrorMessage: string;
        /**
         * 增量数据迁移或者同步的延迟时间，单位为毫秒。
         * @example `0`
         */
        Delay: number;
        /**
         * 标签集合。
         */
        TagList: {
            /**
             * 主键。
             * @example `2`
             */
            Id: number;
            /**
             * 创建时间。
             * @example `2022-03-16T08:01:19Z`
             */
            GmtCreate: string;
            /**
             * 修改时间。
             * @example `2022-03-16T08:01:19Z`
             */
            GmtModified: string;
            /**
             * 数据迁移、同步和订阅的实例ID。
             * @example `dtsnjuc14kp12u****`
             */
            ResourceId: string;
            /**
             * 资源类型。
             * @example `ALIYUN::DTS::INSTANCE`
             */
            ResourceType: string;
            /**
             * 任务所在区域，详情请参见[支持的地域列表](~~141033~~)。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 阿里云账号ID。
             * @example `191448876515****`
             */
            AliUid: number;
            /**
             * 标签键tagkey
             * @example `key1`
             */
            TagKey: string;
            /**
             * 标签值tagvalue
             * @example `value1`
             */
            TagValue: string;
            /**
             * 标签类型，取值：
             * - **System**：系统创建的标签。
             * - **Custom**：用户添加的标签。
             * > 当值为空时，默认返回可公示的标签。
             * @example `System`
             */
            TagCategory: string;
            /**
             * 任务所在地域。
             * > 一般是指目标端地域。
             * @example `cn-hangzhou`
             */
            SrcRegion: string;
            /**
             * 标签的可见性，取值：
             * - **0**：public
             * - **1**：private
             * @example `0`
             */
            Scope: string;
            /**
             * 标签操作者。
             * @example `191448876515****`
             */
            Creator: number;
        }[];
        /**
         * 增量数据迁移的启动位点或者同步位点，格式为Unix时间戳，单位为秒。
         * @example `1616405159`
         */
        Checkpoint: string;
        /**
         * 预检查状态。
         */
        PrecheckStatus: {
            /**
             * 预检查状态，返回值为：
             * - **NotStarted**：未启动。
             * - **Prechecking**：预检查中。
             * - **PrecheckFailed**：预检查失败。
             * - **Finished**：完成。
             * @example `Finished`
             */
            Status: string;
            /**
             * 预检查整体进度，单位为百分比。
             * @example `100`
             */
            Percent: string;
            /**
             * 任务失败的错误提示。
             * @example `DTS-070211: Connect Source DB failed. cause by ****`
             */
            ErrorMessage: string;
            /**
             * 各预检查项的执行情况。
             */
            Detail: {
                /**
                 * 预检查项目。
                 * @example `CHECK_CONN_SRC`
                 */
                CheckItem: string;
                /**
                 * 预检查项目描述。
                 * @example `CHECK_CONN_SRC_DETAIL`
                 */
                CheckItemDescription: string;
                /**
                 * 预检查结果，返回值为：
                 * - **Success**：通过该项检查。
                 * - **Failed**：未通过该项检查。
                 * @example `Success`
                 */
                CheckResult: string;
                /**
                 * 预检查未通过的错误提示。
                 * > 当**CheckResult**参数返回值为**Failed**时，才会返回本参数。
                 * @example `Original error: Access denied for user 'dtstest'@'100.104.***.**' (using password: YES)`
                 */
                FailedReason: string;
                /**
                 * 预检查未通过时对应的修复方法。
                 * > 当**CheckResult**参数返回值为**Failed**时，才会返回本参数。
                 * @example `CHECK_ERROR_DEST_CONN_REPAIR2`
                 */
                RepairMethod: string;
            }[];
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
             * 任务失败的错误提示。
             * @example `DTS-070211: Connect Source DB failed. cause by ****`
             */
            ErrorMessage: string;
            /**
             * 库表结构初始化进度，单位为百分比。
             * @example `100`
             */
            Percent: string;
            /**
             * 已完成库表结构初始化的表的数量。
             * @example `1`
             */
            Progress: string;
            /**
             * 是否显示提升升级规格，返回值：
             * - **true**：是。
             * - **false**：否。
             * @example `true`
             */
            NeedUpgrade: boolean;
        };
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
             * 全量数据迁移或初始化失败的错误提示。
             * @example `DTS-070211: Connect Source DB failed. cause by ****`
             */
            ErrorMessage: string;
            /**
             * 全量数据迁移或初始化进度，单位为百分比。
             * @example `100`
             */
            Percent: string;
            /**
             * 已完成全量数据迁移或初始化的记录数。
             * @example `16`
             */
            Progress: string;
            /**
             * 是否显示提升升级规格，返回值：
             * - **true**：是。
             * - **false**：否。
             * @example `true`
             */
            NeedUpgrade: boolean;
        };
        /**
         * 增量数据迁移或同步的状态。
         */
        DataSynchronizationStatus: {
            /**
             * 增量数据迁移或同步状态，返回值为：
             * - **NotStarted**：未启动。
             * - **Migrating**：迁移或同步中。
             * - **Suspending**：暂停中。
             * - **Checking**：检查中。
             * - **Failed**：迁移或同步失败。
             * - **Finished**：迁移或同步完成。
             * - **Catched**：无延迟。
             * @example `Catched`
             */
            Status: string;
            /**
             * 任务失败的错误提示。
             * @example `DTS-070211: Connect Source DB failed. cause by ****`
             */
            ErrorMessage: string;
            /**
             * 增量数据迁移或同步进度。
             * @example `95`
             */
            Percent: string;
            /**
             * 每秒增量同步或迁移至目标表的数据行数和数据量。
             * @example `0.00RPS/(0.000MB/s)`
             */
            Progress: string;
            /**
             * 是否显示提升升级规格，返回值：
             * - **true**：是。
             * - **false**：否。
             * @example `true`
             */
            NeedUpgrade: boolean;
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
             * 任务失败的错误提示。
             * @example `DTS-070211: Connect Source DB failed. cause by ****`
             */
            ErrorMessage: string;
            /**
             * 全量数据迁移或初始化进度，单位为百分比。
             * @example `100`
             */
            Percent: string;
            /**
             * 已完成全量数据迁移或初始化的记录数。
             * @example `16`
             */
            Progress: string;
            /**
             * 是否显示提升升级规格，返回值：
             * - **true**：是。
             * - **false**：否。
             * @example `true`
             */
            NeedUpgrade: boolean;
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
         * 反向同步任务执行详情。
         * > 当该任务为数据同步，且拓扑类型为双向时，才会返回该参数合集。
         */
        ReverseJob: {
            /**
             * DTS实例ID。
             * @example `dtsnjuc14kp12u****`
             */
            DtsInstanceID: string;
            /**
             * DTS任务ID。
             * @example `m06j1g92124****`
             */
            DtsJobId: string;
            /**
             * DTS实例名称。
             * @example `dtstest****`
             */
            DtsJobName: string;
            /**
             * 资源组ID。
             * @example `rg-acfmzawhxxc****`
             */
            GroupId: string;
            /**
             * 如源实例为PolarDB-X 1.0时，您需要输入其下挂RDS MySQL的数量。
             * @example `2`
             */
            DatabaseCount: number;
            /**
             * 链路规格。
             * @example `xlarge`
             */
            DtsJobClass: string;
            /**
             * 同步方向，返回值：
             * - **Forward**：正向。
             * - **Reverse**：反向。
             * > 当数据同步实例的拓扑为双向时，才会返回本参数。
             * @example `Forward`
             */
            DtsJobDirection: string;
            /**
             * 同步方向，取值：
             * - **Forward**：正向。
             * - **Reverse**：反向。
             * > - 默认取值为**Forward**。
             * - 只有当数据同步实例的同步拓扑为双向同步时，本参数传入**Reverse**才会生效。
             * @example `Forward`
             */
            SynchronizationDirection: string;
            /**
             * 支付类型：
             * - **PrePaid**：预付费。
             * - **PostPaid**：后付费。
             * @example `PrePaid`
             */
            PayType: string;
            /**
             * 实例的到期时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * > 当**PayType**参数的返回值为**PrePaid**时才会返回本参数。
             * @example `2023-06-16T08:01:19Z`
             */
            ExpireTime: string;
            /**
             * 任务创建时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2023-01-12T08:34:11Z`
             */
            CreateTime: string;
            /**
             * 任务结束时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2023-06-16T10:34:17Z`
             */
            FinishTime: string;
            /**
             * 源实例连接信息。
             */
            SourceEndpoint: {
                /**
                 * 源实例ID。
                 * @example `rm-bp2f3huj5rhzq****`
                 */
                InstanceID: string;
                /**
                 * 源实例所在区域，详情请参见[支持的地域列表](~~141033~~)。
                 * @example `cn-hangzhou`
                 */
                Region: string;
                /**
                 * 源实例类型。
                 * @example `RDS`
                 */
                InstanceType: string;
                /**
                 * 源实例的数据库类型。
                 * @example `MySQL`
                 */
                EngineName: string;
                /**
                 * 源实例的连接地址。
                 * @example `192.168.XX.XX`
                 */
                Ip: string;
                /**
                 * 源实例的数据库服务端口。
                 * @example `3306`
                 */
                Port: string;
                /**
                 * 源实例中迁移对象所属数据库的名称。
                 * @example `dtstestdata`
                 */
                DatabaseName: string;
                /**
                 * Oracle数据库的SID信息。
                 * > 当目标实例的**EngineName**取值为**Oracle**，且Oracle数据库为非RAC实例时，才会返回本参数。
                 * @example `testsid`
                 */
                OracleSID: string;
                /**
                 * 源实例的数据库账号。
                 * @example `dtstest`
                 */
                UserName: string;
                /**
                 * 是否使用SSL安全连接，返回值：
                 * - **DISABLE**：未使用SSL安全连接。
                 * - **ENABLE_WITH_CERTIFICATE**：使用SSL安全连接，并上传CA证书。
                 * - **ENABLE_ONLY_4_MONGODB_ALTAS**：使用SSL安全连接AWS MongoDB Altas。
                 * - **ENABLE_ONLY_4_KAFKA_SCRAM_SHA_256**：使用SCRAM-SHA-256连接Kafka。
                 * @example `DISABLE`
                 */
                SslSolutionEnum: string;
                /**
                 * 源实例所属云账号配置的角色名称。
                 * @example `ram-for-dts`
                 */
                RoleName: string;
                /**
                 * 源实例所属的阿里云账号ID。
                 * @example `140692647406****`
                 */
                AliyunUid: string;
            };
            /**
             * 目标实例的连接信息。
             */
            DestinationEndpoint: {
                /**
                 * 目标实例ID。
                 * @example `rm-bp1f9guj5rhzq****`
                 */
                InstanceID: string;
                /**
                 * 目标实例所在区域，详情请参见[支持的地域列表](~~141033~~)。
                 * @example `cn-hangzhou`
                 */
                Region: string;
                /**
                 * 目标实例类型。
                 * @example `RDS`
                 */
                InstanceType: string;
                /**
                 * 目标实例的数据库类型。
                 * @example `MySQL`
                 */
                EngineName: string;
                /**
                 * 目标实例的连接地址。
                 * @example `192.168.XX.XX`
                 */
                Ip: string;
                /**
                 * 目标实例的数据库服务端口。
                 * @example `3306`
                 */
                Port: string;
                /**
                 * 目标实例中迁移对象所属数据库的名称。
                 * @example `dtstestdata`
                 */
                DatabaseName: string;
                /**
                 * Oracle数据库的SID信息。
                 * > 当目标实例的**EngineName**取值为**Oracle**，且Oracle数据库为非RAC实例时，才会返回本参数。
                 * @example `testsid`
                 */
                OracleSID: string;
                /**
                 * 目标实例的数据库账号。
                 * @example `dtstest`
                 */
                UserName: string;
                /**
                 * 是否使用SSL安全连接，返回值：
                 * - **DISABLE**：未使用SSL安全连接。
                 * - **ENABLE_WITH_CERTIFICATE**：使用SSL安全连接，并上传CA证书。
                 * - **ENABLE_ONLY_4_MONGODB_ALTAS**：使用SSL安全连接AWS MongoDB Altas。
                 * - **ENABLE_ONLY_4_KAFKA_SCRAM_SHA_256**：使用SCRAM-SHA-256连接Kafka。
                 * @example `DISABLE`
                 */
                SslSolutionEnum: string;
                /**
                 * 目标例所属云账号配置的角色名称。
                 * @example `ram-for-dts`
                 */
                RoleName: string;
                /**
                 * 目标实例所属的阿里云账号ID。
                 * @example `140692647406****`
                 */
                AliyunUid: string;
            };
            /**
             * 迁移、同步或订阅对象，详细定义说明，请参见[迁移、同步或订阅对象说明](~~209545~~)。
             * @example `{\"dtstestdata\":{\"all\":true,\"name\":\"dtstestdata\",\"state\":\"normal\"}}`
             */
            DbObject: string;
            /**
             * 迁移类型或同步初始化类型。
             */
            MigrationMode: {
                /**
                 * 是否执行库表结构迁移或初始化，返回值：
                 * - **true**：是。
                 * - **false**：否。
                 * @example `true`
                 */
                StructureInitialization: boolean;
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
                 * 是否执行数据加工，返回值：
                 * - **true**：是。
                 * - **false**：否。
                 * @example `false`
                 */
                DataExtractTransformLoad: boolean;
            };
            /**
             * 迁移或同步任务的状态。
             * 迁移任务的状态，返回值为：
             * - **NotStarted**：未启动。
             * - **Migrating**：迁移中。
             * - **Failed**：迁移失败。
             * - **Finished**：迁移完成。
             * 同步任务的状态，返回值为：
             * - **NotStarted**：未启动。
             * - **Prechecking**：预检查中。
             * - **PrecheckFailed**：预检查失败。
             * - **Initializing**：同步初始化中。
             * - **InitializeFailed**：同步初始化失败。
             * - **Synchronizing**：同步中。
             * - **Failed**：同步失败。
             * - **Suspending**：暂停。
             * - **Modifying**：同步对象变更中。
             * - **Finished**：完成。
             * @example `Finished`
             */
            Status: string;
            /**
             * 任务失败的错误提示。
             * @example `DTS-070211: Connect Source DB failed. cause by ****`
             */
            ErrorMessage: string;
            /**
             * 增量数据迁移或者同步的延迟时间，单位为毫秒。
             * @example `0`
             */
            Delay: number;
            /**
             * 标签集合。
             */
            TagList: {
                /**
                 * 主键。
                 * @example `2`
                 */
                Id: number;
                /**
                 * 创建时间。
                 * @example `2022-03-16T08:01:19Z`
                 */
                GmtCreate: string;
                /**
                 * 修改时间。
                 * @example `2022-03-16T08:01:19Z`
                 */
                GmtModified: string;
                /**
                 * 数据迁移、同步和订阅的实例ID。
                 * @example `dtsnjuc14kp12u****`
                 */
                ResourceId: string;
                /**
                 * 资源类型。
                 * @example `ALIYUN::DTS::INSTANCE`
                 */
                ResourceType: string;
                /**
                 * 任务所属地域ID，请参见[支持的地域列表](~~141033~~)。
                 * @example `cn-hangzhou`
                 */
                RegionId: string;
                /**
                 * 阿里云账号ID。
                 * @example `191448876515****`
                 */
                AliUid: number;
                /**
                 * 标签键。
                 * @example `key1`
                 */
                TagKey: string;
                /**
                 * 标签值。
                 * @example `value1`
                 */
                TagValue: string;
                /**
                 * 标签类型，取值：
                 * - **System**：系统创建的标签。
                 * - **Custom**：用户添加的标签。
                 * > 当值为空时，默认返回可公示的标签。
                 * @example `System`
                 */
                TagCategory: string;
                /**
                 * 任务所在地域。
                 * > 一般是指目标端地域。
                 * @example `cn-hangzhou`
                 */
                SrcRegion: string;
                /**
                 * 标签的可见性，取值：
                 * - **0**：public
                 * - **1**：private
                 * @example `0`
                 */
                Scope: string;
                /**
                 * 标签操作者。
                 * @example `191448876515****`
                 */
                Creator: number;
            }[];
            /**
             * 增量数据迁移的启动位点或者同步位点，格式为Unix时间戳，单位为秒。
             * @example `1616405159`
             */
            Checkpoint: string;
            /**
             * 预检查状态。
             */
            PrecheckStatus: {
                /**
                 * 预检查状态，返回值为：
                 * - **NotStarted**：未启动。
                 * - **Prechecking**：预检查中。
                 * - **PrecheckFailed**：预检查失败。
                 * - **Finished**：完成。
                 * @example `Finished`
                 */
                Status: string;
                /**
                 * 预检查整体进度，单位为百分比。
                 * @example `100`
                 */
                Percent: string;
                /**
                 * 任务失败的错误提示。
                 * @example `DTS-070211: Connect Source DB failed. cause by ****`
                 */
                ErrorMessage: string;
                /**
                 * 各预检查项的执行情况。
                 */
                Detail: {
                    /**
                     * 预检查项目。
                     * @example `CHECK_CONN_SRC`
                     */
                    CheckItem: string;
                    /**
                     * 预检查项目描述。
                     * @example `CHECK_CONN_SRC_DETAIL`
                     */
                    CheckItemDescription: string;
                    /**
                     * 检查结果，返回值：
                     * - **Success**：通过该项检查。
                     * - **Failed**：未通过该项检查。
                     * @example `Success`
                     */
                    CheckResult: string;
                    /**
                     * 预检查未通过的错误提示。
                     * > 当**CheckResult**参数返回值为**Failed**时，才会返回本参数。
                     * @example `Original error: Access denied for user 'dtstest'@'100.104.***.**' (using password: YES)`
                     */
                    FailedReason: string;
                    /**
                     * 预检查未通过时对应的修复方法。
                     * > 当**CheckResult**参数返回值为**Failed**时，才会返回本参数。
                     * @example `CHECK_ERROR_DEST_CONN_REPAIR2`
                     */
                    RepairMethod: string;
                }[];
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
                 * 任务失败的错误提示。
                 * @example `DTS-070211: Connect Source DB failed. cause by ****`
                 */
                ErrorMessage: string;
                /**
                 * 库表结构初始化进度，单位为百分比。
                 * @example `100`
                 */
                Percent: string;
                /**
                 * 已完成库表结构初始化的表的数量。
                 * @example `1`
                 */
                Progress: string;
                /**
                 * 是否显示提升升级规格，返回值：
                 * - **true**：是。
                 * - **false**：否。
                 * @example `true`
                 */
                NeedUpgrade: boolean;
            };
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
                 * 全量数据迁移或初始化失败的错误提示。
                 * @example `DTS-070211: Connect Source DB failed. cause by ****`
                 */
                ErrorMessage: string;
                /**
                 * 全量数据迁移或初始化进度，单位为百分比。
                 * @example `100`
                 */
                Percent: string;
                /**
                 * 已完成全量数据迁移或初始化的记录数。
                 * @example `16`
                 */
                Progress: string;
                /**
                 * 是否显示提升升级规格，返回值：
                 * - **true**：是。
                 * - **false**：否。
                 * @example `true`
                 */
                NeedUpgrade: boolean;
            };
            /**
             * 增量数据迁移或同步的状态。
             */
            DataSynchronizationStatus: {
                /**
                 * 增量数据迁移或同步状态，返回值为：
                 * - **NotStarted**：未启动。
                 * - **Migrating**：迁移或同步中。
                 * - **Suspending**：暂停中。
                 * - **Checking**：检查中。
                 * - **Failed**：迁移或同步失败。
                 * - **Finished**：迁移或同步完成。
                 * - **Catched**：无延迟。
                 * @example `Catched`
                 */
                Status: string;
                /**
                 * 任务失败的错误提示。
                 * @example `DTS-070211: Connect Source DB failed. cause by ****`
                 */
                ErrorMessage: string;
                /**
                 * 增量数据迁移或同步进度。
                 * @example `95`
                 */
                Percent: string;
                /**
                 * 每秒增量同步或迁移至目标表的数据行数和数据量。
                 * @example `0.00RPS/(0.000MB/s)`
                 */
                Progress: string;
                /**
                 * 是否显示提升升级规格，返回值：
                 * - **true**：是。
                 * - **false**：否。
                 * @example `true`
                 */
                NeedUpgrade: boolean;
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
                 * 任务失败的错误提示。
                 * @example `DTS-070211: Connect Source DB failed. cause by ****`
                 */
                ErrorMessage: string;
                /**
                 * 全量数据迁移或初始化进度，单位为百分比。
                 * @example `100`
                 */
                Percent: string;
                /**
                 * 已完成全量数据迁移或初始化的记录数。
                 * @example `16`
                 */
                Progress: string;
                /**
                 * 是否显示提升升级规格，返回值：
                 * - **true**：是。
                 * - **false**：否。
                 * @example `true`
                 */
                NeedUpgrade: boolean;
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
             * 反向同步任务执行详情。
             * > 当该任务为数据同步，且拓扑类型为双向时，才会返回该参数合集。
             * @example `****`
             */
            ReverseJob: any;
            /**
             * DTS预留参数，格式为JSON串，您可以传入本参数实现特殊需求（例如是否自动启动预检查）。更多信息，请参见[MigrationReserved参数说明](~~176470~~)。
             * @example `{\"srcHostPorts\":\"\",\"whitelist.dms.online.ddl.enable\":false,\"filterDDL\":false,\"sqlparser.dms.original.ddl\":true,\"srcOracleType\":\"sid\",\"maxRetryTime\":43200,\"destSSL\":\"0\",\"destOracleType\":\"sid\",\"srcSSL\":\"0\",\"dbListCaseChangeMode\":\"default\",\"SourceEngineVersion\":\"8.0.18\",\"srcNetType\":\"VPC\",\"destNetType\":\"VPC\",\"srcVpcNetMappingInst\":\"172.16.1**.**:10803\",\"destVpcNetMappingInst\":\"172.16.1**.**:11077\",\"useJobTask\":\"1\"}`
             */
            Reserved: string;
            /**
             * 订阅任务的连接地址。
             */
            SubscriptionHost: {
                /**
                 * 订阅任务的公网连接信息，格式为`地址：端口号`。
                 * @example `dts-cn-****.aliyuncs.com:18001`
                 */
                PublicHost: string;
                /**
                 * 订阅任务的私网连接信息，格式为`地址：端口号`。
                 * @example `dts-cn-****-internal.aliyuncs.com:18002`
                 */
                PrivateHost: string;
                /**
                 * 订阅任务的专有网络VPC（Virtual Private Cloud）连接信息，格式为`地址：端口号`。
                 * @example `dts-cn-****.aliyuncs.com:18001`
                 */
                VpcHost: string;
            };
            /**
             * 订阅Topic。
             * > 当该订阅实例为新版，且调用[CreateConsumerGroup](~~122863~~)接口创建了消费组时，才会返回本参数。
             * @example `cn_hangzhou_rm_bp1162kryivb8****_dtstest_version2`
             */
            SubscribeTopic: string;
            /**
             * 订阅任务的下游消费时间点，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2022-03-23T07:30:31Z`
             */
            ConsumptionCheckpoint: string;
            /**
             * 订阅实例中保存的数据范围的起始时间点，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2022-03-15T08:25:34Z`
             */
            BeginTimestamp: string;
            /**
             * 订阅实例中保存的数据范围的截止时间点，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2022-03-26T14:03:21Z`
             */
            EndTimestamp: string;
            /**
             * 下游消费客户端信息，由IP地址和DTS随机生成的随机数组成。
             * @example `114.***.***.**:dts********`
             */
            ConsumptionClient: string;
            /**
             * 消费客户端所属网络类型：
             * - **CLASSIC**：经典网络。
             * - **VPC**：专有网络。
             * @example `VPC`
             */
            DestNetType: string;
            /**
             * 订阅数据的类型。
             */
            SubscriptionDataType: {
                /**
                 * 订阅数据是否包含DDL语句，返回值：
                 * - **true**：是。
                 * - **false**：否。
                 * @example `true`
                 */
                Ddl: boolean;
                /**
                 * 订阅数据是否包含DML语句，返回值：
                 * - **true**：是。
                 * - **false**：否。
                 * @example `true`
                 */
                Dml: boolean;
            };
            /**
             * 是否为新版订阅，new（新版订阅）。
             * > 该参数仅在新版订阅实例中返回。
             * @example `new`
             */
            AppName: string;
            /**
             * ETL任务的算子信息。
             * > 当任务为ETL时，才会返回本参数。
             * @example `{ "cells ": [{\"shape\":\"edge\",\"attrs\":{\"line\":{\"stroke\":\"#b1b1b1\",\"strokeWidth\":1,\"targetMarker\":{\"name\":\"block\",\"args\":{\"size\":\"8\"}},\"strokeDasharray\":\"\"}},\"id\":\"cd1ec473-f9b9-4e9b-a742-ac23f442****\",\"source\":{\"cell\":\"8b261182-bfab-4803-ad8e-6bb08e3e****\",\"port\":\"out1\"},\"target\":{\"cell\":\"b36770df-f48c-4d6b-9644-54c5e924****\",\"port\":\"in1\"},\"zIndex\":7 }] }`
             */
            EtlCalculator: string;
            /**
             * 由于任务异常，DTS正在重试。
             */
            RetryState: {
                /**
                 * 任务ID。
                 * @example `ta7w132u12h****`
                 */
                JobId: string;
                /**
                 * 最大重试时间，单位为秒。
                 * @example `7200`
                 */
                MaxRetryTime: number;
                /**
                 * 已重试时间，单位为秒。
                 * @example `3600`
                 */
                RetryTime: number;
                /**
                 * 已重试次数。
                 * @example `5`
                 */
                RetryCount: number;
                /**
                 * 是否在重试中，返回值：
                 * - **true**：是。
                 * - **false**：否。
                 * @example `true`
                 */
                Retrying: boolean;
                /**
                 * 实例进展。
                 * @example `03`
                 */
                Module: string;
                /**
                 * 重试目标，返回值：
                 * - **srcDB**：源数据库。
                 * - **destDB**：目标数据库。
                 * - **inner_module**：DTS内部模块。
                 * @example `srcDB`
                 */
                RetryTarget: string;
                /**
                 * 报错信息。
                 * @example `CHECK__ERROR_SAME_OBJ`
                 */
                ErrMsg: string;
            };
            /**
             * 任务来源：
             * - **PTS任务**
             * - **DMS任务**
             * - **DTS任务**
             * @example `DTS任务`
             */
            OriginType: string;
            /**
             * DTS实例的任务类型，取值：
             * - **online**：迁移。
             * - **SYNC**：同步。
             * - **SUBSCRIBE**：订阅。
             * @example `SYNC`
             */
            JobType: string;
            /**
             * 是否子任务，返回值：
             * - **true**：是。
             * - **false**：否。
             * @example `false`
             */
            IsDemoJob: boolean;
            /**
             * 任务类型。
             * @example `rds`
             */
            TaskType: string;
            /**
             * DU下限。
             * > 仅Serverless实例支持。
             * @example `1`
             */
            MinDu: number;
            /**
             * DU上限。
             * > 仅Serverless实例支持。
             * @example `16`
             */
            MaxDu: number;
        };
        /**
         * DTS预留参数，格式为JSON串，您可以传入本参数实现特殊需求（例如是否自动启动预检查）。更多信息，请参见[MigrationReserved参数说明](~~176470~~)。
         * @example `{\"srcHostPorts\":\"\",\"whitelist.dms.online.ddl.enable\":false,\"filterDDL\":false,\"sqlparser.dms.original.ddl\":true,\"srcOracleType\":\"sid\",\"maxRetryTime\":43200,\"destSSL\":\"0\",\"destOracleType\":\"sid\",\"srcSSL\":\"0\",\"dbListCaseChangeMode\":\"default\",\"SourceEngineVersion\":\"8.0.18\",\"srcNetType\":\"VPC\",\"destNetType\":\"VPC\",\"srcVpcNetMappingInst\":\"172.16.1**.**:10803\",\"destVpcNetMappingInst\":\"172.16.1**.**:11077\",\"useJobTask\":\"1\"}`
         */
        Reserved: string;
        /**
         * 订阅任务的连接地址。
         */
        SubscriptionHost: {
            /**
             * 订阅任务的公网连接信息，格式为`地址：端口号`。
             * @example `dts-cn-****.aliyuncs.com:18001`
             */
            PublicHost: string;
            /**
             * 订阅任务的私网连接信息，格式为`地址：端口号`。
             * @example `dts-cn-****-internal.aliyuncs.com:18002`
             */
            PrivateHost: string;
            /**
             * 订阅任务的专有网络VPC（Virtual Private Cloud）连接信息，格式为`地址：端口号`。
             * @example `dts-cn-****.aliyuncs.com:18001`
             */
            VpcHost: string;
        };
        /**
         * 订阅Topic。
         * > 当该订阅实例为新版，且调用[CreateConsumerGroup](~~122863~~)接口创建了消费组时，才会返回本参数。
         * @example `cn_hangzhou_rm_bp1162kryivb8****_dtstest_version2`
         */
        SubscribeTopic: string;
        /**
         * 订阅任务的下游消费时间点，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2022-03-23T07:30:31Z`
         */
        ConsumptionCheckpoint: string;
        /**
         * 订阅实例中保存的数据范围的起始时间点，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2022-03-15T08:25:34Z`
         */
        BeginTimestamp: string;
        /**
         * 订阅实例中保存的数据范围的截止时间点，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2022-03-26T14:03:21Z`
         */
        EndTimestamp: string;
        /**
         * 下游消费客户端信息，由IP地址和DTS随机生成的随机数组成。
         * @example `114.***.***.**:dts********`
         */
        ConsumptionClient: string;
        /**
         * 消费客户端所属网络类型：
         * - **CLASSIC**：经典网络。
         * - **VPC**：专有网络。
         * @example `VPC`
         */
        DestNetType: string;
        /**
         * 订阅数据的类型。
         */
        SubscriptionDataType: {
            /**
             * 订阅数据是否包含DDL语句，返回值：
             * - **true**：是。
             * - **false**：否。
             * @example `true`
             */
            Ddl: boolean;
            /**
             * 订阅数据是否包含DML语句，返回值：
             * - **true**：是。
             * - **false**：否。
             * @example `true`
             */
            Dml: boolean;
        };
        /**
         * 是否为新版订阅，new（新版订阅）。
         * > 该参数仅在新版订阅实例中返回。
         * @example `new`
         */
        AppName: string;
        /**
         * ETL任务的算子信息。
         * > 当任务为ETL时，才会返回本参数。
         * @example `{ "cells ": [{\"shape\":\"edge\",\"attrs\":{\"line\":{\"stroke\":\"#b1b1b1\",\"strokeWidth\":1,\"targetMarker\":{\"name\":\"block\",\"args\":{\"size\":\"8\"}},\"strokeDasharray\":\"\"}},\"id\":\"cd1ec473-f9b9-4e9b-a742-ac23f442****\",\"source\":{\"cell\":\"8b261182-bfab-4803-ad8e-6bb08e3e****\",\"port\":\"out1\"},\"target\":{\"cell\":\"b36770df-f48c-4d6b-9644-54c5e924****\",\"port\":\"in1\"},\"zIndex\":7 }] }`
         */
        EtlCalculator: string;
        /**
         * 由于任务异常，DTS正在重试。
         */
        RetryState: {
            /**
             * 任务ID。
             * @example `ta7w132u12h****`
             */
            JobId: string;
            /**
             * 最大重试时间，单位为秒。
             * @example `7200`
             */
            MaxRetryTime: number;
            /**
             * 已重试时间，单位为秒。
             * @example `3600`
             */
            RetryTime: number;
            /**
             * 已重试次数。
             * @example `5`
             */
            RetryCount: number;
            /**
             * 是否在重试中，返回值：
             * - **true**：是。
             * - **false**：否。
             * @example `true`
             */
            Retrying: boolean;
            /**
             * 实例进展。
             * @example `03`
             */
            Module: string;
            /**
             * 重试目标，返回值：
             * - **srcDB**：源数据库。
             * - **destDB**：目标数据库。
             * - **inner_module**：DTS内部模块。
             * @example `srcDB`
             */
            RetryTarget: string;
            /**
             * 报错信息。
             * @example `CHECK__ERROR_SAME_OBJ`
             */
            ErrMsg: string;
        };
        /**
         * 任务来源：
         * - **PTS任务**
         * - **DMS任务**
         * - **DTS任务**
         * @example `DTS任务`
         */
        OriginType: string;
        /**
         * DTS实例的任务类型，取值：
         * - **online**：迁移。
         * - **SYNC**：同步。
         * - **SUBSCRIBE**：订阅。
         * @example `SYNC`
         */
        JobType: string;
        /**
         * 是否子任务，返回值：
         * - **true**：是。
         * - **false**：否。
         * @example `false`
         */
        IsDemoJob: boolean;
        /**
         * 任务类型。
         * @example `rds`
         */
        TaskType: string;
        /**
         * DU下限。
         * > 仅Serverless实例支持。
         * @example `1`
         */
        MinDu: number;
        /**
         * DU上限。
         * > 仅Serverless实例支持。
         * @example `16`
         */
        MaxDu: number;
    }[];
    /**
     * 同步子任务信息。
     */
    SubSyncJob: {
        /**
         * 同步子任务信息。
         */
        SubSyncJob: any[];
        /**
         * DTS实例ID。
         * @example `dtsnjuc14kp12u****`
         */
        DtsInstanceID: string;
        /**
         * DTS任务ID。
         * @example `m06j1g92124****`
         */
        DtsJobId: string;
        /**
         * DTS实例名称。
         * @example `dtstest****`
         */
        DtsJobName: string;
        /**
         * 资源组ID。
         * @example `rg-acfmzawhxxc****`
         */
        GroupId: string;
        /**
         * 如源实例为PolarDB-X 1.0时，您需要输入其下挂RDS MySQL的数量。
         * @example `2`
         */
        DatabaseCount: number;
        /**
         * 链路规格。
         * @example `xlarge`
         */
        DtsJobClass: string;
        /**
         * 同步方向，返回值：
         * - **Forward**：正向。
         * - **Reverse**：反向。
         * > 当数据同步实例的拓扑为双向时，才会返回本参数。
         * @example `Forward`
         */
        DtsJobDirection: string;
        /**
         * 同步方向，取值：
         * - **Forward**：正向。
         * - **Reverse**：反向。
         * > - 默认取值为**Forward**。
         * - 只有当数据同步实例的同步拓扑为双向同步时，本参数传入**Reverse**才会生效。
         * @example `Forward`
         */
        SynchronizationDirection: string;
        /**
         * 支付类型：
         * - **PrePaid**：预付费。
         * - **PostPaid**：后付费。
         * @example `PrePaid`
         */
        PayType: string;
        /**
         * 实例的到期时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * > 当**PayType**参数的返回值为**PrePaid**时才会返回本参数。
         * @example `2023-06-16T08:01:19Z`
         */
        ExpireTime: string;
        /**
         * 任务创建时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2023-01-12T08:34:11Z`
         */
        CreateTime: string;
        /**
         * 任务结束时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2023-06-16T10:34:17Z`
         */
        FinishTime: string;
        /**
         * 源实例连接信息。
         */
        SourceEndpoint: {
            /**
             * 源实例ID。
             * @example `rm-bp2f3huj5rhzq****`
             */
            InstanceID: string;
            /**
             * 源实例所在区域，详情请参见[支持的地域列表](~~141033~~)。
             * @example `cn-hangzhou`
             */
            Region: string;
            /**
             * 源实例类型。
             * @example `RDS`
             */
            InstanceType: string;
            /**
             * 源实例的数据库类型。
             * @example `MySQL`
             */
            EngineName: string;
            /**
             * 源实例的连接地址。
             * @example `192.168.XX.XX`
             */
            Ip: string;
            /**
             * 源实例的数据库服务端口。
             * @example `3306`
             */
            Port: string;
            /**
             * 源实例中迁移对象所属数据库的名称。
             * @example `dtstestdata`
             */
            DatabaseName: string;
            /**
             * Oracle数据库的SID信息。
             * > 当目标实例的**EngineName**取值为**Oracle**，且Oracle数据库为非RAC实例时，才会返回本参数。
             * @example `testsid`
             */
            OracleSID: string;
            /**
             * 源实例的数据库账号。
             * @example `dtstest`
             */
            UserName: string;
            /**
             * 是否使用SSL安全连接，返回值：
             * - **DISABLE**：未使用SSL安全连接。
             * - **ENABLE_WITH_CERTIFICATE**：使用SSL安全连接，并上传CA证书。
             * - **ENABLE_ONLY_4_MONGODB_ALTAS**：使用SSL安全连接AWS MongoDB Altas。
             * - **ENABLE_ONLY_4_KAFKA_SCRAM_SHA_256**：使用SCRAM-SHA-256连接Kafka。
             * @example `DISABLE`
             */
            SslSolutionEnum: string;
            /**
             * 源实例所属云账号配置的角色名称。
             * @example `ram-for-dts`
             */
            RoleName: string;
            /**
             * 源实例所属的阿里云账号ID。
             * @example `140692647406****`
             */
            AliyunUid: string;
        };
        /**
         * 目标实例的连接信息。
         */
        DestinationEndpoint: {
            /**
             * 目标实例ID。
             * @example `rm-bp1f9guj5rhzq****`
             */
            InstanceID: string;
            /**
             * 目标实例所在区域，详情请参见[支持的地域列表](~~141033~~)。
             * @example `cn-hangzhou`
             */
            Region: string;
            /**
             * 目标实例类型。
             * @example `RDS`
             */
            InstanceType: string;
            /**
             * 目标实例的数据库类型。
             * @example `MySQL`
             */
            EngineName: string;
            /**
             * 目标实例的连接地址。
             * @example `192.168.XX.XX`
             */
            Ip: string;
            /**
             * 目标实例的数据库服务端口。
             * @example `3306`
             */
            Port: string;
            /**
             * 目标实例中迁移对象所属数据库的名称。
             * @example `dtstestdata`
             */
            DatabaseName: string;
            /**
             * Oracle数据库的SID信息。
             * > 当目标实例的**EngineName**取值为**Oracle**，且Oracle数据库为非RAC实例时，才会返回本参数。
             * @example `testsid`
             */
            OracleSID: string;
            /**
             * 目标实例的数据库账号。
             * @example `dtstest`
             */
            UserName: string;
            /**
             * 是否使用SSL安全连接，返回值：
             * - **DISABLE**：未使用SSL安全连接。
             * - **ENABLE_WITH_CERTIFICATE**：使用SSL安全连接，并上传CA证书。
             * - **ENABLE_ONLY_4_MONGODB_ALTAS**：使用SSL安全连接AWS MongoDB Altas。
             * - **ENABLE_ONLY_4_KAFKA_SCRAM_SHA_256**：使用SCRAM-SHA-256连接Kafka。
             * @example `DISABLE`
             */
            SslSolutionEnum: string;
            /**
             * 目标实例所属云账号配置的角色名称。
             * @example `ram-for-dts`
             */
            RoleName: string;
            /**
             * 目标实例所属的阿里云账号ID。
             * @example `140692647406****`
             */
            AliyunUid: string;
        };
        /**
         * 迁移、同步或订阅对象，详细定义说明，请参见[迁移、同步或订阅对象说明](~~209545~~)。
         * @example `{\"dtstestdata\":{\"all\":true,\"name\":\"dtstestdata\",\"state\":\"normal\"}}`
         */
        DbObject: string;
        /**
         * 迁移类型或同步初始化类型。
         */
        MigrationMode: {
            /**
             * 是否执行库表结构迁移或初始化，返回值：
             * - **true**：是。
             * - **false**：否。
             * @example `true`
             */
            StructureInitialization: boolean;
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
             * 是否执行数据加工，返回值：
             * - **true**：是。
             * - **false**：否。
             * @example `false`
             */
            DataExtractTransformLoad: boolean;
        };
        /**
         * 迁移或同步任务的状态。
         * 迁移任务的状态，返回值为：
         * - **NotStarted**：未启动。
         * - **Migrating**：迁移中。
         * - **Failed**：迁移失败。
         * - **Finished**：迁移完成。
         * 同步任务的状态，返回值为：
         * - **NotStarted**：未启动。
         * - **Prechecking**：预检查中。
         * - **PrecheckFailed**：预检查失败。
         * - **Initializing**：同步初始化中。
         * - **InitializeFailed**：同步初始化失败。
         * - **Synchronizing**：同步中。
         * - **Failed**：同步失败。
         * - **Suspending**：暂停。
         * - **Modifying**：同步对象变更中。
         * - **Finished**：完成。
         * @example `Finished`
         */
        Status: string;
        /**
         * 任务失败的错误提示。
         * @example `DTS-070211: Connect Source DB failed. cause by ****`
         */
        ErrorMessage: string;
        /**
         * 增量数据迁移或者同步的延迟时间，单位为毫秒。
         * @example `0`
         */
        Delay: number;
        /**
         * 标签集合。
         */
        TagList: {
            /**
             * 主键。
             * @example `2`
             */
            Id: number;
            /**
             * 创建时间。
             * @example `2022-03-16T08:01:19Z`
             */
            GmtCreate: string;
            /**
             * 修改时间。
             * @example `2022-03-16T08:01:19Z`
             */
            GmtModified: string;
            /**
             * 数据迁移、同步和订阅的实例ID。
             * @example `dtsnjuc14kp12u****`
             */
            ResourceId: string;
            /**
             * 资源类型。
             * @example `ALIYUN::DTS::INSTANCE`
             */
            ResourceType: string;
            /**
             * 任务所属地域ID，请参见[支持的地域列表](~~141033~~)。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 阿里云账号ID。
             * @example `191448876515****`
             */
            AliUid: number;
            /**
             * 标签键。
             * @example `key1`
             */
            TagKey: string;
            /**
             * 标签值。
             * @example `value1`
             */
            TagValue: string;
            /**
             * 标签类型，取值：
             * - **System**：系统创建的标签。
             * - **Custom**：用户添加的标签。
             * > 当值为空时，默认返回可公示的标签。
             * @example `System`
             */
            TagCategory: string;
            /**
             * 任务所在地域。
             * > 一般是指目标端地域。
             * @example `cn-hangzhou`
             */
            SrcRegion: string;
            /**
             * 标签的可见性，取值：
             * - **0**：public
             * - **1**：private
             * @example `0`
             */
            Scope: string;
            /**
             * 标签操作者。
             * @example `191448876515****`
             */
            Creator: number;
        }[];
        /**
         * 增量数据迁移的启动位点或者同步位点，格式为Unix时间戳，单位为秒。
         * @example `1616405159`
         */
        Checkpoint: string;
        /**
         * 预检查状态。
         */
        PrecheckStatus: {
            /**
             * 预检查状态，返回值为：
             * - **NotStarted**：未启动。
             * - **Prechecking**：预检查中。
             * - **PrecheckFailed**：预检查失败。
             * - **Finished**：完成。
             * @example `Finished`
             */
            Status: string;
            /**
             * 预检查整体进度，单位为百分比。
             * @example `100`
             */
            Percent: string;
            /**
             * 任务失败的错误提示。
             * @example `DTS-070211: Connect Source DB failed. cause by ****`
             */
            ErrorMessage: string;
            /**
             * 各预检查项的执行情况。
             */
            Detail: {
                /**
                 * 预检查项目。
                 * @example `CHECK_CONN_SRC`
                 */
                CheckItem: string;
                /**
                 * 预检查项目描述。
                 * @example `CHECK_CONN_SRC_DETAIL`
                 */
                CheckItemDescription: string;
                /**
                 * 检查结果，返回值：
                 * - **Success**：通过该项检查。
                 * - **Failed**：未通过该项检查。
                 * @example `Success`
                 */
                CheckResult: string;
                /**
                 * 预检查未通过的错误提示。
                 * > 当**CheckResult**参数返回值为**Failed**时，才会返回本参数。
                 * @example `Original error: Access denied for user 'dtstest'@'100.104.***.**' (using password: YES)`
                 */
                FailedReason: string;
                /**
                 * 预检查未通过时对应的修复方法。
                 * > 当**CheckResult**参数返回值为**Failed**时，才会返回本参数。
                 * @example `CHECK_ERROR_DEST_CONN_REPAIR2`
                 */
                RepairMethod: string;
            }[];
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
             * 任务失败的错误提示。
             * @example `DTS-070211: Connect Source DB failed. cause by ****`
             */
            ErrorMessage: string;
            /**
             * 库表结构初始化进度，单位为百分比。
             * @example `100`
             */
            Percent: string;
            /**
             * 已完成库表结构初始化的表的数量。
             * @example `1`
             */
            Progress: string;
            /**
             * 是否显示提升升级规格，返回值：
             * - **true**：是。
             * - **false**：否。
             * @example `true`
             */
            NeedUpgrade: boolean;
        };
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
             * 全量数据迁移或初始化失败的错误提示。
             * @example `DTS-070211: Connect Source DB failed. cause by ****`
             */
            ErrorMessage: string;
            /**
             * 全量数据迁移或初始化进度，单位为百分比。
             * @example `100`
             */
            Percent: string;
            /**
             * 已完成全量数据迁移或初始化的记录数。
             * @example `16`
             */
            Progress: string;
            /**
             * 是否显示提升升级规格，返回值：
             * - **true**：是。
             * - **false**：否。
             * @example `true`
             */
            NeedUpgrade: boolean;
        };
        /**
         * 增量数据迁移或同步的状态。
         */
        DataSynchronizationStatus: {
            /**
             * 增量数据迁移或同步状态，返回值为：
             * - **NotStarted**：未启动。
             * - **Migrating**：迁移或同步中。
             * - **Suspending**：暂停中。
             * - **Checking**：检查中。
             * - **Failed**：迁移或同步失败。
             * - **Finished**：迁移或同步完成。
             * - **Catched**：无延迟。
             * @example `Catched`
             */
            Status: string;
            /**
             * 任务失败的错误提示。
             * @example `DTS-070211: Connect Source DB failed. cause by ****`
             */
            ErrorMessage: string;
            /**
             * 增量数据迁移或同步进度。
             * @example `95`
             */
            Percent: string;
            /**
             * 每秒增量同步或迁移至目标表的数据行数和数据量。
             * @example `0.00RPS/(0.000MB/s)`
             */
            Progress: string;
            /**
             * 是否显示提升升级规格，返回值：
             * - **true**：是。
             * - **false**：否。
             * @example `true`
             */
            NeedUpgrade: boolean;
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
             * 任务失败的错误提示。
             * @example `DTS-070211: Connect Source DB failed. cause by ****`
             */
            ErrorMessage: string;
            /**
             * 全量数据迁移或初始化进度，单位为百分比。
             * @example `100`
             */
            Percent: string;
            /**
             * 已完成全量数据迁移或初始化的记录数。
             * @example `16`
             */
            Progress: string;
            /**
             * 是否显示提升升级规格，返回值：
             * - **true**：是。
             * - **false**：否。
             * @example `true`
             */
            NeedUpgrade: boolean;
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
         * 反向同步任务执行详情。
         * > 当该任务为数据同步，且拓扑类型为双向时，才会返回该参数合集。
         */
        ReverseJob: {
            /**
             * DTS实例ID。
             * @example `dtsnjuc14kp12u****`
             */
            DtsInstanceID: string;
            /**
             * DTS任务ID。
             * @example `m06j1g92124****`
             */
            DtsJobId: string;
            /**
             * DTS实例名称。
             * @example `dtstest****`
             */
            DtsJobName: string;
            /**
             * 资源组ID。
             * @example `rg-acfmzawhxxc****`
             */
            GroupId: string;
            /**
             * 如源实例为PolarDB-X 1.0时，您需要输入其下挂RDS MySQL的数量。
             * @example `2`
             */
            DatabaseCount: number;
            /**
             * 链路规格。
             * @example `xlarge`
             */
            DtsJobClass: string;
            /**
             * 同步方向，返回值：
             * - **Forward**：正向。
             * - **Reverse**：反向。
             * > 当数据同步实例的拓扑为双向时，才会返回本参数。
             * @example `Forward`
             */
            DtsJobDirection: string;
            /**
             * 同步方向，取值：
             * - **Forward**：正向。
             * - **Reverse**：反向。
             * > - 默认取值为**Forward**。
             * - 只有当数据同步实例的同步拓扑为双向同步时，本参数传入**Reverse**才会生效。
             * @example `Forward`
             */
            SynchronizationDirection: string;
            /**
             * 支付类型：
             * - **PrePaid**：预付费。
             * - **PostPaid**：后付费。
             * @example `PrePaid`
             */
            PayType: string;
            /**
             * 实例的到期时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * > 当**PayType**参数的返回值为**PrePaid**时才会返回本参数。
             * @example `2023-06-16T08:01:19Z`
             */
            ExpireTime: string;
            /**
             * 任务创建时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2023-01-12T08:34:11Z`
             */
            CreateTime: string;
            /**
             * 任务结束时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2023-06-16T10:34:17Z`
             */
            FinishTime: string;
            /**
             * 源实例连接信息。
             */
            SourceEndpoint: {
                /**
                 * 实例ID。
                 * @example `rm-bp2f3huj5rhzq****`
                 */
                InstanceID: string;
                /**
                 * 源实例所在区域，详情请参见[支持的地域列表](~~141033~~)。
                 * @example `cn-hangzhou`
                 */
                Region: string;
                /**
                 * 源实例类型。
                 * @example `RDS`
                 */
                InstanceType: string;
                /**
                 * 源实例的数据库类型。
                 * @example `MySQL`
                 */
                EngineName: string;
                /**
                 * 源实例的连接地址。
                 * @example `192.168.XX.XX`
                 */
                Ip: string;
                /**
                 * 源实例的数据库服务端口。
                 * @example `3306`
                 */
                Port: string;
                /**
                 * 源实例中迁移对象所属数据库的名称。
                 * @example `dtstestdata`
                 */
                DatabaseName: string;
                /**
                 * Oracle数据库的SID信息。
                 * > 当目标实例的**EngineName**取值为**Oracle**，且Oracle数据库为非RAC实例时，才会返回本参数。
                 * @example `testsid`
                 */
                OracleSID: string;
                /**
                 * 源实例的数据库账号。
                 * @example `dtstest`
                 */
                UserName: string;
                /**
                 * 是否使用SSL安全连接，返回值：
                 * - **DISABLE**：未使用SSL安全连接。
                 * - **ENABLE_WITH_CERTIFICATE**：使用SSL安全连接，并上传CA证书。
                 * - **ENABLE_ONLY_4_MONGODB_ALTAS**：使用SSL安全连接AWS MongoDB Altas。
                 * - **ENABLE_ONLY_4_KAFKA_SCRAM_SHA_256**：使用SCRAM-SHA-256连接Kafka。
                 * @example `DISABLE`
                 */
                SslSolutionEnum: string;
                /**
                 * 源实例所属云账号配置的角色名称。
                 * @example `ram-for-dts`
                 */
                RoleName: string;
                /**
                 * 源实例所属的阿里云账号ID。
                 * @example `140692647406****`
                 */
                AliyunUid: string;
            };
            /**
             * 目标实例的连接信息。
             */
            DestinationEndpoint: {
                /**
                 * 目标实例ID。
                 * @example `rm-bp1f9guj5rhzq****`
                 */
                InstanceID: string;
                /**
                 * 目标实例所在区域，详情请参见[支持的地域列表](~~141033~~)。
                 * @example `cn-hangzhou`
                 */
                Region: string;
                /**
                 * 目标实例类型。
                 * @example `RDS`
                 */
                InstanceType: string;
                /**
                 * 目标实例的数据库类型。
                 * @example `MySQL`
                 */
                EngineName: string;
                /**
                 * 目标实例的连接地址。
                 * @example `192.168.XX,XX`
                 */
                Ip: string;
                /**
                 * 目标实例的数据库服务端口。
                 * @example `3306`
                 */
                Port: string;
                /**
                 * 目标实例中迁移对象所属数据库的名称。
                 * @example `dtstestdata`
                 */
                DatabaseName: string;
                /**
                 * Oracle数据库的SID信息。
                 * > 当目标实例的**EngineName**取值为**Oracle**，且Oracle数据库为非RAC实例时，才会返回本参数。
                 * @example `testsid`
                 */
                OracleSID: string;
                /**
                 * 目标实例的数据库账号。
                 * @example `dtstest`
                 */
                UserName: string;
                /**
                 * 是否使用SSL安全连接，返回值：
                 * - **DISABLE**：未使用SSL安全连接。
                 * - **ENABLE_WITH_CERTIFICATE**：使用SSL安全连接，并上传CA证书。
                 * - **ENABLE_ONLY_4_MONGODB_ALTAS**：使用SSL安全连接AWS MongoDB Altas。
                 * - **ENABLE_ONLY_4_KAFKA_SCRAM_SHA_256**：使用SCRAM-SHA-256连接Kafka。
                 * @example `DISABLE`
                 */
                SslSolutionEnum: string;
                /**
                 * 目标实例所属云账号配置的角色名称。
                 * @example `ram-for-dts`
                 */
                RoleName: string;
                /**
                 * 目标实例所属的阿里云账号ID。
                 * @example `140692647406****`
                 */
                AliyunUid: string;
            };
            /**
             * 迁移、同步或订阅对象，详细定义说明，请参见[迁移、同步或订阅对象说明](~~209545~~)。
             * @example `{\"dtstestdata\":{\"all\":true,\"name\":\"dtstestdata\",\"state\":\"normal\"}}`
             */
            DbObject: string;
            /**
             * 迁移类型或同步初始化类型。
             */
            MigrationMode: {
                /**
                 * 是否执行库表结构迁移或初始化，返回值：
                 * - **true**：是。
                 * - **false**：否。
                 * @example `true`
                 */
                StructureInitialization: boolean;
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
                 * 是否执行数据加工，返回值：
                 * - **true**：是。
                 * - **false**：否。
                 * @example `false`
                 */
                DataExtractTransformLoad: boolean;
            };
            /**
             * 迁移或同步任务的状态。
             * 迁移任务的状态，返回值为：
             * - **NotStarted**：未启动。
             * - **Migrating**：迁移中。
             * - **Failed**：迁移失败。
             * - **Finished**：迁移完成。
             * 同步任务的状态，返回值为：
             * - **NotStarted**：未启动。
             * - **Prechecking**：预检查中。
             * - **PrecheckFailed**：预检查失败。
             * - **Initializing**：同步初始化中。
             * - **InitializeFailed**：同步初始化失败。
             * - **Synchronizing**：同步中。
             * - **Failed**：同步失败。
             * - **Suspending**：暂停。
             * - **Modifying**：同步对象变更中。
             * - **Finished**：完成。
             * @example `Finished`
             */
            Status: string;
            /**
             * 任务失败的错误提示。
             * @example `DTS-070211: Connect Source DB failed. cause by ****`
             */
            ErrorMessage: string;
            /**
             * 增量数据迁移或者同步的延迟时间，单位为毫秒。
             * @example `0`
             */
            Delay: number;
            /**
             * 标签集合。
             */
            TagList: {
                /**
                 * 主键。
                 * @example `2`
                 */
                Id: number;
                /**
                 * 创建时间。
                 * @example `2022-03-16T08:01:19Z`
                 */
                GmtCreate: string;
                /**
                 * 修改时间。
                 * @example `2022-03-16T08:01:19Z`
                 */
                GmtModified: string;
                /**
                 * 数据迁移、同步和订阅的实例ID。
                 * @example `dtsnjuc14kp12u****`
                 */
                ResourceId: string;
                /**
                 * 资源类型。
                 * @example `ALIYUN::DTS::INSTANCE`
                 */
                ResourceType: string;
                /**
                 * 任务所属地域ID，请参见[支持的地域列表](~~141033~~)。
                 * @example `cn-hangzhou`
                 */
                RegionId: string;
                /**
                 * 阿里云账号ID。
                 * @example `191448876515****`
                 */
                AliUid: number;
                /**
                 * 标签键。
                 * @example `key1`
                 */
                TagKey: string;
                /**
                 * 标签值。
                 * @example `value1`
                 */
                TagValue: string;
                /**
                 * 标签类型，取值：
                 * - **System**：系统创建的标签。
                 * - **Custom**：用户添加的标签。
                 * > 当值为空时，默认返回可公示的标签。
                 * @example `System`
                 */
                TagCategory: string;
                /**
                 * 任务所在地域。
                 * > 一般是指目标端地域。
                 * @example `cn-hangzhou`
                 */
                SrcRegion: string;
                /**
                 * 标签的可见性，取值：
                 * - **0**：public
                 * - **1**：private
                 * @example `0`
                 */
                Scope: string;
                /**
                 * 标签操作者。
                 * @example `191448876515****`
                 */
                Creator: number;
            }[];
            /**
             * 增量数据迁移的启动位点或者同步位点，格式为Unix时间戳，单位为秒。
             * @example `1616405159`
             */
            Checkpoint: string;
            /**
             * 预检查状态。
             */
            PrecheckStatus: {
                /**
                 * 预检查状态，返回值为：
                 * - **NotStarted**：未启动。
                 * - **Prechecking**：预检查中。
                 * - **PrecheckFailed**：预检查失败。
                 * - **Finished**：完成。
                 * @example `Finished`
                 */
                Status: string;
                /**
                 * 预检查整体进度，单位为百分比。
                 * @example `100`
                 */
                Percent: string;
                /**
                 * 任务失败的错误提示。
                 * @example `DTS-070211: Connect Source DB failed. cause by ****`
                 */
                ErrorMessage: string;
                /**
                 * 各预检查项的执行情况。
                 */
                Detail: {
                    /**
                     * 预检查项目。
                     * @example `CHECK_CONN_SRC`
                     */
                    CheckItem: string;
                    /**
                     * 预检查项目描述。
                     * @example `CHECK_CONN_SRC_DETAIL`
                     */
                    CheckItemDescription: string;
                    /**
                     * 检查结果，返回值：
                     * - **Success**：通过该项检查。
                     * - **Failed**：未通过该项检查。
                     * @example `Success`
                     */
                    CheckResult: string;
                    /**
                     * 预检查未通过的错误提示。
                     * > 当**CheckResult**参数返回值为**Failed**时，才会返回本参数。
                     * @example `Original error: Access denied for user 'dtstest'@'100.104.***.**' (using password: YES)`
                     */
                    FailedReason: string;
                    /**
                     * 预检查未通过时对应的修复方法。
                     * > 当**CheckResult**参数返回值为**Failed**时，才会返回本参数。
                     * @example `CHECK_ERROR_DEST_CONN_REPAIR2`
                     */
                    RepairMethod: string;
                }[];
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
                 * 任务失败的错误提示。
                 * @example `DTS-070211: Connect Source DB failed. cause by ****`
                 */
                ErrorMessage: string;
                /**
                 * 库表结构初始化进度，单位为百分比。
                 * @example `100`
                 */
                Percent: string;
                /**
                 * 已完成库表结构初始化的表的数量。
                 * @example `1`
                 */
                Progress: string;
                /**
                 * 是否显示提升升级规格，返回值：
                 * - **true**：是。
                 * - **false**：否。
                 * @example `true`
                 */
                NeedUpgrade: boolean;
            };
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
                 * 全量数据迁移或初始化失败的错误提示。
                 * @example `DTS-070211: Connect Source DB failed. cause by ****`
                 */
                ErrorMessage: string;
                /**
                 * 全量数据迁移或初始化进度，单位为百分比。
                 * @example `100`
                 */
                Percent: string;
                /**
                 * 已完成全量数据迁移或初始化的记录数。
                 * @example `16`
                 */
                Progress: string;
                /**
                 * 是否显示提升升级规格，返回值：
                 * - **true**：是。
                 * - **false**：否。
                 * @example `true`
                 */
                NeedUpgrade: boolean;
            };
            /**
             * 增量数据迁移或同步的状态。
             */
            DataSynchronizationStatus: {
                /**
                 * 增量数据迁移或同步状态，返回值为：
                 * - **NotStarted**：未启动。
                 * - **Migrating**：迁移或同步中。
                 * - **Suspending**：暂停中。
                 * - **Checking**：检查中。
                 * - **Failed**：迁移或同步失败。
                 * - **Finished**：迁移或同步完成。
                 * - **Catched**：无延迟。
                 * @example `Finished`
                 */
                Status: string;
                /**
                 * 任务失败的错误提示。
                 * @example `DTS-070211: Connect Source DB failed. cause by ****`
                 */
                ErrorMessage: string;
                /**
                 * 增量数据迁移或同步进度。
                 * @example `95`
                 */
                Percent: string;
                /**
                 * 每秒增量同步或迁移至目标表的数据行数和数据量。
                 * @example `0.00RPS/(0.000MB/s)`
                 */
                Progress: string;
                /**
                 * 是否显示提升升级规格，返回值：
                 * - **true**：是。
                 * - **false**：否。
                 * @example `true`
                 */
                NeedUpgrade: boolean;
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
                 * 任务失败的错误提示。
                 * @example `DTS-070211: Connect Source DB failed. cause by ****`
                 */
                ErrorMessage: string;
                /**
                 * 全量数据迁移或初始化进度，单位为百分比。
                 * @example `100`
                 */
                Percent: string;
                /**
                 * 已完成全量数据迁移或初始化的记录数。
                 * @example `16`
                 */
                Progress: string;
                /**
                 * 是否显示升级实例规格，返回值：
                 * - **true**：需要。
                 * - **false**：不需要。
                 * @example `true`
                 */
                NeedUpgrade: boolean;
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
             * 反向同步任务执行详情。
             * > 当该任务为数据同步，且拓扑类型为双向时，才会返回该参数合集。
             * @example `****`
             */
            ReverseJob: any;
            /**
             * DTS预留参数，格式为JSON串，您可以传入本参数实现特殊需求（例如是否自动启动预检查）。更多信息，请参见[MigrationReserved参数说明](~~176470~~)。
             * @example `{\"srcHostPorts\":\"\",\"whitelist.dms.online.ddl.enable\":false,\"filterDDL\":false,\"sqlparser.dms.original.ddl\":true,\"srcOracleType\":\"sid\",\"maxRetryTime\":43200,\"destSSL\":\"0\",\"destOracleType\":\"sid\",\"srcSSL\":\"0\",\"dbListCaseChangeMode\":\"default\",\"SourceEngineVersion\":\"8.0.18\",\"srcNetType\":\"VPC\",\"destNetType\":\"VPC\",\"srcVpcNetMappingInst\":\"172.16.1**.**:10803\",\"destVpcNetMappingInst\":\"172.16.1**.**:11077\",\"useJobTask\":\"1\"}`
             */
            Reserved: string;
            /**
             * 订阅任务的连接地址。
             */
            SubscriptionHost: {
                /**
                 * 订阅任务的公网连接信息，格式为`地址：端口号`。
                 * @example `dts-cn-****.aliyuncs.com:18001`
                 */
                PublicHost: string;
                /**
                 * 订阅任务的私网连接信息，格式为`地址：端口号`。
                 * @example `dts-cn-****-internal.aliyuncs.com:18002`
                 */
                PrivateHost: string;
                /**
                 * 订阅任务的专有网络VPC（Virtual Private Cloud）连接信息，格式为`地址：端口号`。
                 * @example `dts-cn-****.aliyuncs.com:18001`
                 */
                VpcHost: string;
            };
            /**
             * 订阅Topic。
             * > 当该订阅实例为新版，且调用[CreateConsumerGroup](~~122863~~)接口创建了消费组时，才会返回本参数。
             * @example `cn_hangzhou_rm_bp1162kryivb8****_dtstest_version2`
             */
            SubscribeTopic: string;
            /**
             * 订阅任务的下游消费时间点，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2022-03-23T07:30:31Z`
             */
            ConsumptionCheckpoint: string;
            /**
             * 订阅实例中保存的数据范围的起始时间点，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2022-03-15T08:25:34Z`
             */
            BeginTimestamp: string;
            /**
             * 订阅实例中保存的数据范围的截止时间点，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2022-03-26T14:03:21Z`
             */
            EndTimestamp: string;
            /**
             * 下游消费客户端信息，由IP地址和DTS随机生成的随机数组成。
             * @example `114.***.***.**:dts********`
             */
            ConsumptionClient: string;
            /**
             * 消费客户端所属网络类型：
             * - **CLASSIC**：经典网络。
             * - **VPC**：专有网络。
             * @example `VPC`
             */
            DestNetType: string;
            /**
             * 订阅数据的类型。
             */
            SubscriptionDataType: {
                /**
                 * 订阅数据是否包含DDL语句，返回值：
                 * - **true**：是。
                 * - **false**：否。
                 * @example `true`
                 */
                Ddl: boolean;
                /**
                 * 订阅数据是否包含DML语句，返回值：
                 * - **true**：是。
                 * - **false**：否。
                 * @example `true`
                 */
                Dml: boolean;
            };
            /**
             * 是否为新版订阅，new（新版订阅）。
             * > 该参数仅在新版订阅实例中返回。
             * @example `new`
             */
            AppName: string;
            /**
             * ETL任务的算子信息。
             * > 当任务为ETL时，才会返回本参数。
             * @example `{ "cells ": [{\"shape\":\"edge\",\"attrs\":{\"line\":{\"stroke\":\"#b1b1b1\",\"strokeWidth\":1,\"targetMarker\":{\"name\":\"block\",\"args\":{\"size\":\"8\"}},\"strokeDasharray\":\"\"}},\"id\":\"cd1ec473-f9b9-4e9b-a742-ac23f442****\",\"source\":{\"cell\":\"8b261182-bfab-4803-ad8e-6bb08e3e****\",\"port\":\"out1\"},\"target\":{\"cell\":\"b36770df-f48c-4d6b-9644-54c5e924****\",\"port\":\"in1\"},\"zIndex\":7 }] }`
             */
            EtlCalculator: string;
            /**
             * 由于任务异常，DTS正在重试。
             */
            RetryState: {
                /**
                 * 任务ID。
                 * @example `ta7w132u12h****`
                 */
                JobId: string;
                /**
                 * 最大重试时间，单位为秒。
                 * @example `7200`
                 */
                MaxRetryTime: number;
                /**
                 * 已重试时间，单位为秒。
                 * @example `3600`
                 */
                RetryTime: number;
                /**
                 * 已重试次数。
                 * @example `5`
                 */
                RetryCount: number;
                /**
                 * 是否在重试中，返回值：
                 * - **true**：是。
                 * - **false**：否。
                 * @example `true`
                 */
                Retrying: boolean;
                /**
                 * 实例进展。
                 * @example `03`
                 */
                Module: string;
                /**
                 * 重试目标，返回值：
                 * - **srcDB**：源数据库。
                 * - **destDB**：目标数据库。
                 * - **inner_module**：DTS内部模块。
                 * @example `srcDB`
                 */
                RetryTarget: string;
                /**
                 * 报错信息。
                 * @example `CHECK__ERROR_SAME_OBJ`
                 */
                ErrMsg: string;
            };
            /**
             * 任务来源：
             * - **PTS任务**
             * - **DMS任务**
             * - **DTS任务**
             * @example `DTS任务`
             */
            OriginType: string;
            /**
             * DTS实例的任务类型，取值：
             * - **online**：迁移。
             * - **SYNC**：同步。
             * - **SUBSCRIBE**：订阅。
             * @example `SYNC`
             */
            JobType: string;
            /**
             * 是否子任务，返回值：
             * - **true**：是。
             * - **false**：否。
             * @example `false`
             */
            IsDemoJob: boolean;
            /**
             * 任务类型。
             * @example `rds`
             */
            TaskType: string;
        };
        /**
         * DTS预留参数，格式为JSON串，您可以传入本参数实现特殊需求（例如是否自动启动预检查）。更多信息，请参见[MigrationReserved参数说明](~~176470~~)。
         * @example `{\"srcHostPorts\":\"\",\"whitelist.dms.online.ddl.enable\":false,\"filterDDL\":false,\"sqlparser.dms.original.ddl\":true,\"srcOracleType\":\"sid\",\"maxRetryTime\":43200,\"destSSL\":\"0\",\"destOracleType\":\"sid\",\"srcSSL\":\"0\",\"dbListCaseChangeMode\":\"default\",\"SourceEngineVersion\":\"8.0.18\",\"srcNetType\":\"VPC\",\"destNetType\":\"VPC\",\"srcVpcNetMappingInst\":\"172.16.1**.**:10803\",\"destVpcNetMappingInst\":\"172.16.1**.**:11077\",\"useJobTask\":\"1\"}`
         */
        Reserved: string;
        /**
         * 订阅任务的连接地址。
         */
        SubscriptionHost: {
            /**
             * 订阅任务的公网连接信息，格式为`地址：端口号`。
             * @example `dts-cn-****.aliyuncs.com:18001`
             */
            PublicHost: string;
            /**
             * 订阅任务的私网连接信息，格式为`地址：端口号`。
             * @example `dts-cn-****-internal.aliyuncs.com:18002`
             */
            PrivateHost: string;
            /**
             * 订阅任务的专有网络VPC（Virtual Private Cloud）连接信息，格式为`地址：端口号`。
             * @example `dts-cn-****.aliyuncs.com:18001`
             */
            VpcHost: string;
        };
        /**
         * 订阅Topic。
         * > 当该订阅实例为新版，且调用[CreateConsumerGroup](~~122863~~)接口创建了消费组时，才会返回本参数。
         * @example `cn_hangzhou_rm_bp1162kryivb8****_dtstest_version2`
         */
        SubscribeTopic: string;
        /**
         * 订阅任务的下游消费时间点，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2022-03-23T07:30:31Z`
         */
        ConsumptionCheckpoint: string;
        /**
         * 订阅实例中保存的数据范围的起始时间点，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2022-03-15T08:25:34Z`
         */
        BeginTimestamp: string;
        /**
         * 订阅实例中保存的数据范围的截止时间点，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2022-03-26T14:03:21Z`
         */
        EndTimestamp: string;
        /**
         * 下游消费客户端信息，由IP地址和DTS随机生成的随机数组成。
         * @example `114.***.***.**:dts********`
         */
        ConsumptionClient: string;
        /**
         * 消费客户端所属网络类型：
         * - **CLASSIC**：经典网络。
         * - **VPC**：专有网络。
         * @example `VPC`
         */
        DestNetType: string;
        /**
         * 订阅数据的类型。
         */
        SubscriptionDataType: {
            /**
             * 订阅数据是否包含DDL语句，返回值：
             * - **true**：是。
             * - **false**：否。
             * @example `true`
             */
            Ddl: boolean;
            /**
             * 订阅数据是否包含DML语句，返回值：
             * - **true**：是。
             * - **false**：否。
             * @example `true`
             */
            Dml: boolean;
        };
        /**
         * 是否为新版订阅，new（新版订阅）。
         * > 该参数仅在新版订阅实例中返回。
         * @example `new`
         */
        AppName: string;
        /**
         * ETL任务的算子信息。
         * > 当任务为ETL时，才会返回本参数。
         * @example `{ "cells ": [{\"shape\":\"edge\",\"attrs\":{\"line\":{\"stroke\":\"#b1b1b1\",\"strokeWidth\":1,\"targetMarker\":{\"name\":\"block\",\"args\":{\"size\":\"8\"}},\"strokeDasharray\":\"\"}},\"id\":\"cd1ec473-f9b9-4e9b-a742-ac23f442****\",\"source\":{\"cell\":\"8b261182-bfab-4803-ad8e-6bb08e3e****\",\"port\":\"out1\"},\"target\":{\"cell\":\"b36770df-f48c-4d6b-9644-54c5e924****\",\"port\":\"in1\"},\"zIndex\":7 }] }`
         */
        EtlCalculator: string;
        /**
         * 由于任务异常，DTS正在重试。
         */
        RetryState: {
            /**
             * 任务ID。
             * @example `ta7w132u12h****`
             */
            JobId: string;
            /**
             * 最大重试时间，单位为秒。
             * @example `7200`
             */
            MaxRetryTime: number;
            /**
             * 已重试时间，单位为秒。
             * @example `3600`
             */
            RetryTime: number;
            /**
             * 已重试次数。
             * @example `5`
             */
            RetryCount: number;
            /**
             * 是否在重试中，返回值：
             * - **true**：是。
             * - **false**：否。
             * @example `true`
             */
            Retrying: boolean;
            /**
             * 实例进展。
             * @example `03`
             */
            Module: string;
            /**
             * 重试目标，返回值：
             * - **srcDB**：源数据库。
             * - **destDB**：目标数据库。
             * - **inner_module**：DTS内部模块。
             * @example `srcDB`
             */
            RetryTarget: string;
            /**
             * 报错信息。
             * @example `CHECK__ERROR_SAME_OBJ`
             */
            ErrMsg: string;
        };
        /**
         * 任务来源：
         * - **PTS任务**
         * - **DMS任务**
         * - **DTS任务**
         * @example `DTS任务`
         */
        OriginType: string;
        /**
         * DTS实例的任务类型，取值：
         * - **online**：迁移。
         * - **SYNC**：同步。
         * - **SUBSCRIBE**：订阅。
         * @example `SYNC`
         */
        JobType: string;
        /**
         * 是否子任务，返回值：
         * - **true**：是。
         * - **false**：否。
         * @example `false`
         */
        IsDemoJob: boolean;
        /**
         * 任务类型。
         * @example `rds`
         */
        TaskType: string;
        /**
         * DU下限。
         * > 仅Serverless实例支持。
         * @example `1`
         */
        MinDu: number;
        /**
         * DU上限。
         * > 仅Serverless实例支持。
         * @example `16`
         */
        MaxDu: number;
    }[];
    /**
     * 指示任务的类型，取值：
     * - **sync**：同步任务。
     * - **subSync**：修改同步对象产生的子任务。
     * > 一般与**TaskType**搭配使用。
     * @example `sync`
     */
    JobType: string;
    /**
     * 指示任务的业务类型。
     * > 一般与**JobType**搭配使用。
     * @example `Distributed_xxx`
     */
    TaskType: string;
    /**
     * 专属集群ID。
     * @example `dtsxxxxx`
     */
    DedicatedClusterId: string;
    /**
     * 增量数据迁移或同步的状态。
     */
    DataSynchronizationStatus: {
        /**
         * 增量数据迁移或同步状态，返回值为：
         * - **NotStarted**：未启动。
         * - **Migrating**：迁移或同步中。
         * - **Suspending**：暂停中。
         * - **Checking**：检查中。
         * - **Failed**：迁移或同步失败。
         * - **Finished**：迁移或同步完成。
         * - **Catched**：无延迟。
         * @example `Catched`
         */
        Status: string;
        /**
         * 是否显示升级实例规格，返回值：
         * - **true**：需要。
         * - **false**：不需要。
         * @example `true`
         */
        NeedUpgrade: boolean;
        /**
         * 增量数据迁移或同步进度，单位为百分比。
         * @example `95`
         */
        Percent: string;
        /**
         * 每秒增量同步或迁移至目标表的数据行数和数据量。
         * @example `0.00RPS/(0.000MB/s)`
         */
        Progress: string;
        /**
         * 增量数据迁移或同步失败的错误提示。
         * @example `任务失败太久无法恢复`
         */
        ErrorMessage: string;
    };
    /**
     * 具体项目启动时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2022-03-30T03:36:11.000`
     */
    BootTime: string;
    /**
     * Binlog信息。
     * @example `****`
     */
    Binlog: string;
    /**
     * 当前位点。
     * @example `156629109****`
     */
    BinlogSite: string;
    /**
     * 位点范围。
     * @example `****`
     */
    BinlogTime: string;
    /**
     * 最后一次更新的时间戳。
     * @example `156629109****`
     */
    LastUpdateTime: string;
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
         * 已重试时间，单位为秒。
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
     * DTS实例的环境标签，返回值为：
     * - **normal**：**普通**
     * - **online**：**线上**
     * @example `normal`
     */
    DtsBisLabel: string;
    /**
     * 数据投递通道信息。
     */
    DataDeliveryChannelInfo: {
        /**
         * 投递通道的公网地址。
         * @example `dts-****.aliyuncs.com:18***`
         */
        PublicDproxyUrl: string;
        /**
         * 投递通道的VPC网络地址。
         * @example `dts-****.aliyuncs.com:18***`
         */
        VpcDproxyUrl: string;
        /**
         * 投递的目标Topic。
         * @example `cn_hangzhou_******_data_delivery_version2`
         */
        Topic: string;
        /**
         * 投递通道所在区域。
         * @example `cn-hangzhou`
         */
        Region: string;
        /**
         * 投递Topic的分片数。
         * @example `3`
         */
        PartitionNum: number;
    };
    /**
     * DU下限。
     * > 仅Serverless实例支持。
     * @example `1`
     */
    MinDu: number;
    /**
     * DU上限。
     * > 仅Serverless实例支持。
     * @example `16`
     */
    MaxDu: number;
}
