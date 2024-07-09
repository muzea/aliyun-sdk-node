export interface ConfigureDtsJobRequest {
    /**
     * DTS实例名称。
     * @example `rdsmysql_to_mysql`
     */
    "DtsJobName": string;
    /**
     * 源实例类型，取值：
     * **阿里云数据库**
     * - **RDS**：RDS MySQL、RDS SQL Server、RDS PostgreSQL、RDS MariaDB。
     * - **PolarDB**：PolarDB MySQL版。
     * - **REDIS**：云数据库Redis。
     * - **DISTRIBUTED_POLARDBX10**：PolarDB-X 1.0（原DRDS）。
     * - **POLARDBX20**：PolarDB-X 2.0。
     * - **MONGODB**：云数据库MongoDB。
     * - **DISTRIBUTED_DMSLOGICDB**：数据管理DMS逻辑库。
     * **自建数据库**
     * - **OTHER**：有公网IP的自建数据库。
     * - **ECS**：ECS上的自建数据库。
     * - **EXPRESS**：通过专线接入的自建数据库。
     * - **CEN**：通过云企业网CEN接入的自建数据库。
     * - **DG**：通过数据库网关接入的自建数据库。
     * > - 如源实例为PolarDB PostgreSQL版（兼容Oracle）集群，则源实例类型需选择**OTHER**或者**EXPRESS**，作为自建数据库，且通过公网IP或者专线的方式接入。
     * - 关于支持的源库和目标库对应情况，请参见<props="china">[支持的数据库](~~131497~~)</props><props="intl">[支持的源和目标数据库](~~176064~~)</props>。
     * - 当源实例为自建数据库时，您还需要执行相应的准备工作，请参见[准备工作概览](~~146958~~)。
     * @example `RDS`
     */
    "SourceEndpointInstanceType": string;
    /**
     * 源实例ID。
     * 如源实例为阿里云数据库（如RDS MySQL），则您需要传入阿里云数据库的ID（如RDS MySQL的实例ID）。
     * 如源实例为自建数据库，则根据**SourceEndpointInstanceType**的取值不同，本参数的取值有所变化，例如**SourceEndpointInstanceType**取值为：
     * - **ECS**，则该参数需传入ECS的实例ID。
     * - **DG**，则该参数需传入数据库网关ID。
     * - **EXPRESS**、**CEN**：则该参数需传入已和源库互联的VPC ID。
     * > 取值为**CEN**时，您还需要在预留参数Reserve中传入云企业网CEN的实例ID。配置方式，请参见[Reserve参数说明](~~273111~~)。
     * @example `rm-bp1imrtn6fq7h****`
     */
    "SourceEndpointInstanceID"?: string;
    /**
     * 源实例的数据库类型。
     * - **MYSQL**：MySQL数据库（包括RDS MySQL和自建MySQL）。
     * - **MARIADB**：RDS MariaDB。
     * - **PolarDB**：PolarDB MySQL版。
     * - **POLARDB_O**：PolarDB PostgreSQL版（兼容Oracle）。
     * - **POLARDBX10**：PolarDB-X 1.0（原DRDS）。
     * - **POLARDBX20**：云原生分布式数据库PolarDB-X 2.0。
     * - **ORACLE**：自建Oracle。
     * - **POSTGRESQL**：PostgreSQL数据库（包括RDS PostgreSQL和自建PostgreSQL）。
     * - **MSSQL**：SQL Server数据库（包括RDS SQL Server和自建SQL Server）。
     * - **MONGODB**：MongoDB数据库（包括自建MongoDB和云数据库MongoDB）。
     * - **DB2**：自建DB2 LUW。
     * - **AS400**：自建Db2 for i。
     * - **DMSPOLARDB**：数据管理DMS逻辑库。
     * - **HBASE**：自建HBase数据库。
     * - **TERADATA**：Teradata数据库。
     * - **TiDB**：TiDB数据库。
     * - **REDIS**：Redis数据库（包括自建Redis和云数据库Redis）。
     * > - 默认取值为**MYSQL**。
     * -  当源实例的数据库类型取值为**MONGODB**时，您还需要在预留参数Reserve中传入部分信息。配置方式，请参见[Reserve参数说明](~~273111~~)。
     * @example `MYSQL`
     */
    "SourceEndpointEngineName"?: string;
    /**
     * 源实例区域，详情请参见[支持的地域列表](~~141033~~)。
     * > 如源为阿里云数据库，则该参数必须传入。
     * @example `cn-hangzhou`
     */
    "SourceEndpointRegion"?: string;
    /**
     * 源实例的IP地址。
     * > 当**SourceEndpointInstanceType**为**OTHER**、**EXPRESS**、**DG**、**CEN**时，本参数才可用且必须传入。
     * @example `172.16.**.***`
     */
    "SourceEndpointIP"?: string;
    /**
     * 源实例的数据库服务端口。
     * > 当源实例为自建数据库时，本参数才可用且必须传入。
     * @example `3306`
     */
    "SourceEndpointPort"?: string;
    /**
     * Oracle数据库的SID信息。
     * > 当**SourceEndpointEngineName**取值为**Oracle**，且**Oracle**数据库为非RAC实例时，本参数才可用且必须传入。
     * @example `testsid`
     */
    "SourceEndpointOracleSID"?: string;
    /**
     * 源实例中迁移对象所属的数据库名称。
     * > 当源实例或者源实例的数据库类型为PolarDB PostgreSQL版（兼容Oracle）、PostgreSQL、MongoDB数据库时，本参数才可用且必须传入。
     * @example `dtstestdatabase`
     */
    "SourceEndpointDatabaseName"?: string;
    /**
     * 源库的数据库账号。
     * > - 大部分情况下，您需要传入源库的数据库账号。
     * - 迁移或同步不同的数据库所需的权限有所差异，具体权限要求，请参见[准备用于数据迁移的数据库账号](~~175878~~)、[准备用于数据同步的数据库账号 ](~~213152~~)。
     * @example `dtstest`
     */
    "SourceEndpointUserName"?: string;
    /**
     * 源库数据库账号密码。
     * @example `Test123456`
     */
    "SourceEndpointPassword"?: string;
    /**
     * 源实例所属的阿里云账号ID。
     * > 传入本参数即代表执行跨阿里云账号的数据迁移或同步，同时您还需要传入**SourceEndpointRole**参数。
     * @example `140692647406****`
     */
    "SourceEndpointOwnerID"?: string;
    /**
     * 源实例所属云账号配置的角色名称。
     * > 执行跨阿里云账号的数据迁移或同步时须传入本参数，该角色所需的权限及授权方式，请参见[跨阿里云账号数据迁移或同步时如何配置RAM授权](~~48468~~)。
     * @example `ram-for-dts`
     */
    "SourceEndpointRole"?: string;
    /**
     * 目标实例类型，取值：
     * **阿里云数据库**
     * - **RDS**：RDS MySQL、RDS SQLServer、RDS PostgreSQL、RDS MariaDB。
     * - **PolarDB**：PolarDB MySQL版。
     * - **DISTRIBUTED_POLARDBX10**：PolarDB-X 1.0（原DRDS）。
     * - **POLARDBX20**：PolarDB-X 2.0。
     * - **REDIS**：云数据库Redis。
     * - **ADS**：AnalyticDB MySQL 2.0、3.0。
     * - **MONGODB**：云数据库MongoDB。
     * - **GREENPLUM**：AnalyticDB PostgreSQL。
     * - **DATAHUB**：阿里云流数据处理平台DataHub。
     * - **ELK**：阿里云检索分析服务Elasticsearch。
     * - **Tablestore**：表格存储Tablestore。
     * - **ODPS**：MaxCompute。
     * **自建数据库**
     * - **OTHER**：有公网IP的自建数据库。
     * - **ECS**：ECS上的自建数据库。
     * - **EXPRESS**：通过专线接入的自建数据库。
     * - **CEN**：通过云企业网CEN接入的自建数据库。
     * - **DG**：通过数据库网关接入的自建数据库。
     * > - 如目标实例为PolarDB PostgreSQL版（兼容Oracle）集群，则目标实例类型需选择**OTHER**或者**EXPRESS**，作为自建数据库，且通过公网IP或者专线的方式接入。
     * - 目标实例为消息队列Kafka版，则目标实例类型需选择**ECS**或者**EXPRESS**，作为自建数据库，且通过ECS或者专线的方式接入。
     * - 关于支持的源库和目标库对应情况，请参见<props="china">[支持的数据库](~~131497~~)</props><props="intl">[支持的源和目标数据库](~~176064~~)</props>。
     * - 当目标实例为自建数据库时，您还需要执行相应的准备工作，请参见[准备工作概览](~~146958~~)。
     * @example `EXPRESS`
     */
    "DestinationEndpointInstanceType": string;
    /**
     * 目标实例ID。
     *  如目标实例为云数据库（如RDS MySQL），则您需要传入云数据库的实例ID（如RDS MySQL的实例ID）。
     *  如目标实例为自建数据库，则根据**DestinationEndpointInstanceType**的取值不同，本参数的取值有所变化，例如**DestinationEndpointInstanceType**取值为：
     * - **ECS**，则该参数需传入ECS的实例ID。
     * - **DG**，则该参数需传入数据库网关ID。
     * - **EXPRESS**、**CEN**：则该参数需传入已和源库互联的VPC ID。
     * > 取值为**CEN**时，您还需要在预留参数Reserve中传入云企业网CEN的实例ID。配置方式，请参见[Reserve参数说明](~~273111~~)。
     * @example `vpc-bp1opxu1zkhn00gzv****`
     */
    "DestinationEndpointInstanceID"?: string;
    /**
     * 目标实例的数据库类型。
     * - **MYSQL**：MySQL数据库（包括RDS MySQL和自建MySQL）。
     * - **MARIADB**：RDS MariaDB。
     * - **PolarDB**：PolarDB MySQL版。
     * - **POLARDB_O**：PolarDB PostgreSQL版（兼容Oracle）。
     * - **POLARDBX10**：PolarDB-X 1.0（原DRDS）。
     * - **POLARDBX20**：云原生分布式数据库PolarDB-X 2.0。
     * - **ORACLE**：自建Oracle。
     * - **PostgreSQL**：PostgreSQL数据库（包括RDS PostgreSQL、自建PostgreSQL）。
     * - **MSSQL**：SQL Server数据库（包括RDS SQL Server和自建SQL Server）。
     * - **ADS**：AnalyticDB MySQL 2.0。
     * - **ADB30**：AnalyticDB MySQL 3.0。
     * - **MONGODB**：MongoDB数据库（包括自建MongoDB和云数据库MongoDB）。
     * - **GREENPLUM**：AnalyticDB PostgreSQL。
     * - **KAFKA**：Kafka数据库（包括消息队列Kafka版和自建Kafka）。
     * - **DATAHUB**：阿里云流式数据服务DataHub。
     * - **DB2**：自建DB2 LUW。
     * - **AS400**：Db2 for i。
     * - **ODPS**：MaxCompute。
     * - **Tablestore**：表格存储Tablestore。
     * - **ELK**：阿里云检索分析服务Elasticsearch。
     * - **REDIS**：Redis数据库（包括自建Redis和云数据库Redis）。
     * > - 默认取值为**MYSQL**。
     * - 当目标实例的数据库类型取值为**KAFKA**、**MONGODB**、**PolarDB**时，您还需要在预留参数Reserve中传入部分信息。配置方式，请参见[Reserve参数说明](~~273111~~)。
     * @example `MYSQL`
     */
    "DestinationEndpointEngineName"?: string;
    /**
     * 目标实例区域，请参见[支持的地域列表](~~141033~~)。
     * > 如目标为阿里云数据库，则该参数必须传入。
     * @example `cn-hangzhou`
     */
    "DestinationEndpointRegion"?: string;
    /**
     * 目标实例的IP地址。
     * > 当**DestinationEndpointInstanceType**为**OTHER**、**EXPRESS**、**DG**、**CEN**时，本参数才可用且必须传入。
     * @example `172.16.**.***`
     */
    "DestinationEndpointIP"?: string;
    /**
     * 目标实例的数据库服务端口。
     * > 当目标实例为自建数据库时，本参数才可用且必须传入。
     * @example `3306`
     */
    "DestinationEndpointPort"?: string;
    /**
     * 目标实例中迁移对象所属的数据库名称。
     * > - 当目标实例或目标数据库的类型为PolarDB PostgreSQL版（兼容Oracle）、AnalyticDB PostgreSQL、PostgreSQL、MaxCompute、MongoDB数据库时，本参数才可用且必须传入。
     * - 若目标库为MaxCompute，您需要填写为MaxCompute实例的Project。
     * @example `dtstestdata`
     */
    "DestinationEndpointDataBaseName"?: string;
    /**
     * 目标库的数据库账号。
     * > - 大部分情况下，您需要传入目标库的数据库账号。
     * - 迁移或同步不同的数据库所需的权限有所差异，具体权限要求，请参见[准备用于数据迁移的数据库账号](~~175878~~)、[准备用于数据同步的数据库账号](~~213152~~)。
     * - 若目标库为MaxCompute，您需要填写为阿里云账号（主账号）的AccessKey ID。获取方式，请参见[创建AccessKey](~~116401~~)。
     * @example `dtstest`
     */
    "DestinationEndpointUserName"?: string;
    /**
     * 目标库数据库账号密码。
     * > 若目标库为MaxCompute，您需要填写为阿里云账号（主账号）的AccessKey Secret。获取方式，请参见[创建AccessKey](~~116401~~)。
     * @example `Test123456`
     */
    "DestinationEndpointPassword"?: string;
    /**
     * 目标RDS MySQL实例所属的阿里云账号ID。
     * > - 当前仅目标实例为RDS MySQL时可以配置。
     * - 传入本参数即代表执行跨阿里云账号的数据迁移或同步，同时您还需要传入**DestinationEndpointRole**参数。
     * @example `140692647406****`
     */
    "DestinationEndpointOwnerID"?: string;
    /**
     * 目标实例所属云账号配置的角色名称。
     * > 执行跨阿里云账号的数据迁移或同步时须传入本参数，该角色所需的权限及授权方式，请参见[跨阿里云账号数据迁移或同步时如何配置RAM授权](~~48468~~)。
     * @example `ram-for-dts`
     */
    "DestinationEndpointRole"?: string;
    /**
     * 是否执行库表结构迁移或初始化，取值：
     * - **true**：是，为默认值。
     * - **false**：否。
     * > 若**JobType**取值为**CHECK**，只能取值为**false**。
     * @example `true`
     */
    "StructureInitialization": boolean;
    /**
     * 是否执行全量数据迁移或全量数据初始化，取值：
     * - **true**：是，为默认值。
     * - **false**：否。
     * > 若**JobType**取值为**CHECK**，只能取值为**false**。
     * @example `true`
     */
    "DataInitialization": boolean;
    /**
     * 是否执行增量数据迁移或同步，取值：
     * - **false**：否，为默认值。
     * - **true**：是。
     * > 若**JobType**取值为**CHECK**，只能取值为**false**。
     * @example `true`
     */
    "DataSynchronization": boolean;
    /**
     * 待迁移或同步的对象，格式为JSON串。详细定义说明，请参见[迁移、同步或订阅对象说明](~~209545~~)。
     * > DbList最多支持传入10 MB的数据。
     * @example `{"dtstest":{"name":"dtstest","all":true}}`
     */
    "DbList"?: string;
    /**
     * DTS预留参数，格式为JSON字符串，您可以传入本参数完善源目库信息（如目标Kafka数据库的数据存储格式、云企业网CEN的实例ID）。更多信息，请参见[Reserve参数说明](~~273111~~)。
     * @example `{      "srcInstanceId": "cen-9kqshqum*******"  }`
     */
    "Reserve"?: string;
    /**
     * 增量数据迁移的启动位点或者同步位点，格式为Unix时间戳，单位为秒。
     * @example `1610540493`
     */
    "Checkpoint"?: string;
    /**
     * Oracle数据库的SID信息。
     * > 当**DestinationEndpointEngineName**取值为**Oracle**，且**Oracle**数据库为非RAC实例时，本参数才可用且必须传入。
     * @example `testsid`
     */
    "DestinationEndpointOracleSID"?: string;
    /**
     * 任务类型，取值为：
     * - **MIGRATION**：数据迁移。
     * - **SYNC**：数据同步。
     * - **CHECK**：数据校验（单独购买）。
     * > 若取值为**MIGRATION**或**SYNC**，您也可以在迁移或同步实例中配置数据校验任务。
     * @example `SYNC`
     */
    "JobType": string;
    /**
     * 迁移或同步任务ID。
     * > 可调用[DescribeDtsJobs](~~209702~~)获取任务ID。
     * @example `k2gm967v16f****`
     */
    "DtsJobId"?: string;
    /**
     * 迁移或同步实例ID。
     * > 可调用[DescribeDtsJobs](~~209702~~)获取实例ID。
     * @example `dtsk2gm967v16f****`
     */
    "DtsInstanceId"?: string;
    /**
     * 延迟报警的联系人手机号码，多个手机号码以英文逗号（,）分隔。
     * >-  本参数目前只支持中国站，仅支持中国内地手机号码，且最多传入10个手机号码。
     * - 国际站不支持手机告警，仅支持[通过云监控平台为DTS任务设置报警规则](~~175876~~)。
     * @example `1361234****,1371234****`
     */
    "DelayPhone"?: string;
    /**
     * 触发延迟报警的阈值，单位为秒且需为整数，可根据业务需要设置阈值，建议设置10秒以上，避免因网络、数据库负载等原因导致的延迟波动。
     * > 当**DelayNotice**取值为**true**时，本参数必须传入。
     * @example `10`
     */
    "DelayRuleTime"?: number;
    /**
     * 是否监控延迟状态，取值：
     * - **true**：是。
     * - **false**：否。
     * @example `true`
     */
    "DelayNotice"?: boolean;
    /**
     * 异常报警的联系人手机号码，多个手机号码以英文逗号（,）分隔。
     * >-  本参数目前只支持中国站，仅支持中国内地手机号码，且最多传入10个手机号码。
     * - 国际站不支持手机告警，仅支持[通过云监控平台为DTS任务设置报警规则](~~175876~~)。
     * @example `1361234****,1371234****`
     */
    "ErrorPhone"?: string;
    /**
     * 是否监控异常状态，取值：
     * - **true**：是。
     * - **false**：否。
     * @example `true`
     */
    "ErrorNotice"?: boolean;
    /**
     * 同步方向，取值：
     * - **Forward**：正向。
     * - **Reverse**：反向。
     * > - 默认取值为**Forward**。
     * - 只有当同步任务的同步拓扑为双向时，本参数传入**Reverse**才会生效。
     * @example `Forward`
     */
    "SynchronizationDirection"?: string;
    /**
     * DTS实例所属的地域，请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * DTS专属集群ID。
     * > 当传入专属集群的ID时，任务调度到相应的集群上。
     * @example `dtscluster_atyl3b5214uk***`
     */
    "DedicatedClusterId"?: string;
    /**
     * 任务文件的OSS地址。
     * @example `http://db-list-os-file.oss-cn-shanghai.aliyuncs.com/8e42_121852**********_79dd3aeabe2f43cdb**************`
     */
    "FileOssUrl"?: string;
    /**
     * 数据校验任务的参数，格式为JSON字符串，如参数限制或告警配置等信息。更多信息请参见[DataCheckConfigure参数说明](~~459023~~)。
     * @example `{"fullCheckModel":1,"fullCheckRatio":20,"checkMaximumHourEnable":1,"checkMaximumHour":1,"fullCheckErrorNotice":true,"fullCheckValidFailNotice":true,"fullCheckNoticeValue":8,"incrementalCheckErrorNotice":true,"incrementalCheckValidFailNotice":true,"incrementalCheckValidFailNoticeTimes":2,"incrementalCheckValidFailNoticePeriod":1,"incrementalCheckValidFailNoticeValue":1,"incrementalCheckDelayNotice":true,"incrementalCheckDelayNoticeTimes":2,"incrementalCheckDelayNoticePeriod":1,"incrementalCheckDelayNoticeValue":60,"fullDataCheck":true,"incrementalDataCheck":true,"dataCheckNoticePhone":"13126800****","dataCheckDbList":"{"dts":{"name":"dts","all":true}}"}`
     */
    "DataCheckConfigure"?: string;
    /**
     * 是否为灾备实例，取值：
     * - **true**：是。
     * - **false**：否。
     * @example `true`
     */
    "DisasterRecoveryJob"?: boolean;
    /**
     * 数据投递链路交换机实例ID。
     * @example `vsw-bp10df3mxae6lpmku****`
     */
    "SourceEndpointVSwitchID"?: string;
    /**
     * DTS实例的环境标签，取值为：
     * - **normal**：**普通**
     * - **online**：**线上**
     * @example `normal`
     */
    "DtsBisLabel"?: string;
    /**
     * 源库通过SSL安全连接时，CA证书的路径。
     * > 当前暂不支持此功能，请勿传入此参数。
     * @example `****`
     */
    "SrcCaCertificateOssUrl"?: string;
    /**
     * 源库通过SSL安全连接时，CA证书的密钥。
     * > 当前暂不支持此功能，请勿传入此参数。
     * @example `****`
     */
    "SrcCaCertificatePassword"?: string;
    /**
     * 目标库通过SSL安全连接时，CA证书的路径。
     * > 当前暂不支持此功能，请勿传入此参数。
     * @example `****`
     */
    "DestCaCertificateOssUrl"?: string;
    /**
     * 目标库通过SSL安全连接时，CA证书的密钥。
     * > 当前暂不支持此功能，请勿传入此参数。
     * @example `****`
     */
    "DestCaCertificatePassword"?: string;
    /**
     * DU下限。
     * > 仅Serverless实例支持。
     * @example `1`
     */
    "MinDu"?: number;
    /**
     * DU上限。
     * > 仅Serverless实例支持。
     * @example `16`
     */
    "MaxDu"?: number;
    /**
     * 源库通过SSL安全连接时，客户端证书的路径。
     * > 当前暂不支持此功能，请勿传入此参数。
     * @example `****`
     */
    "SrcClientCertOssUrl"?: string;
    /**
     * 源库通过SSL安全连接时，客户端证书私钥的路径。
     * > 当前暂不支持此功能，请勿传入此参数。
     * @example `****`
     */
    "SrcClientKeyOssUrl"?: string;
    /**
     * 源库通过SSL安全连接时，客户端证书私钥的密码。
     * > 当前暂不支持此功能，请勿传入此参数。
     * @example `****`
     */
    "SrcClientPassword"?: string;
    /**
     * 目标库通过SSL安全连接时，客户端证书的路径。
     * > 当前暂不支持此功能，请勿传入此参数。
     * @example `****`
     */
    "DestClientCertOssUrl"?: string;
    /**
     * 目标库通过SSL安全连接时，客户端证书私钥的路径。
     * > 当前暂不支持此功能，请勿传入此参数。
     * @example `****`
     */
    "DestClientKeyOssUrl"?: string;
    /**
     * 目标库通过SSL安全连接时，客户端证书私钥的密码。
     * > 当前暂不支持此功能，请勿传入此参数。
     * @example `****`
     */
    "DestClientPassword"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmzawhxxc****`
     */
    "ResourceGroupId"?: string;
}
