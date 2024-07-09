export interface ConfigureSynchronizationJobRequest {
    /**
     * 数据同步实例所在地域的ID，详情请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 同步任务名称。
     * >建议配置具有业务意义的名称（无唯一性要求），便于后续识别。
     * @example `MySQL同步`
     */
    "SynchronizationJobName"?: string;
    /**
     * 数据同步实例ID，可以通过调用[DescribeSynchronizationJobs](~~49454~~)接口查询。
     * @example `dtsz4ao1dor13d****`
     */
    "SynchronizationJobId": string;
    /**
     * 同步方向，取值：
     * - **Forward**：正向。
     * - **Reverse**：反向。
     * > - 默认取值为**Forward**。
     * - 只有当数据同步实例的同步拓扑为双向同步时，本参数传入**Reverse**才会生效。
     * @example `Forward`
     */
    "SynchronizationDirection"?: string;
    /**
     * 源实例ID。
     * @example `rm-bp1i99e8l7913****`
     */
    "SourceEndpoint.InstanceId"?: string;
    /**
     * 源实例类型，取值为：
     * - **RDS**：阿里云RDS实例。
     * - **Redis**：阿里云Redis实例。
     * - **PolarDB**：阿里云PolarDB集群（仅支持MySQL或兼容Oracle语法的引擎）。
     * - **ECS**：ECS上的自建数据库。
     * - **Express**：通过专线接入的自建数据库。
     * - **dg**：通过数据库网关DG接入的自建数据库。
     * - **cen**：通过云企业网CEN接入的自建数据库。
     * > 默认取值为**RDS**。
     * @example `RDS`
     */
    "SourceEndpoint.InstanceType"?: string;
    /**
     * 源库的IP地址。
     * > 当**SourceEndpoint.InstanceType**取值为**ECS**、**Express**、**dg**或**cen**时，本参数才可用且必须传入。
     * @example `172.16.88.***`
     */
    "SourceEndpoint.IP"?: string;
    /**
     * 源库的数据库服务端口。
     * > 当**SourceEndpoint.InstanceType**取值为**ECS**、**Express**、**dg**或**cen**时，本参数才可用且必须传入。
     * @example `3306`
     */
    "SourceEndpoint.Port"?: string;
    /**
     * 源库的数据库账号。
     * > - 当**SourceEndpoint.InstanceType**取值为**ECS**、**Express**、**dg**或**cen**时，本参数才可用且必须传入。
     * - 当**SourceEndpoint.InstanceType**取值为**Redis**时，本参数无需传入。
     * - 同步不同的数据库所需的权限有所差异，详情请参见[DTS数据同步方案概览](~~140954~~)中对应的配置案例。
     * @example `dtstestaccount`
     */
    "SourceEndpoint.UserName"?: string;
    /**
     * 源库数据库账号密码。
     * > 当**SourceEndpoint.InstanceType**取值为**ECS**、**Express**、**dg**或**cen**时，本参数必须传入。
     * @example `Test123456`
     */
    "SourceEndpoint.Password"?: string;
    /**
     * 同步目标实例的实例ID
     * > 当**DestinationEndpoint.InstanceType**取值为**MaxCompute**或**DataHub**时，本参数传入MaxCompute实例或DataHub的Project名称。
     * 当目标实例为阿里云分析型数据库MySQL版时，传入分析型数据库MySQL版的集群ID。
     * @example `rm-bp1r46452ai50****`
     */
    "DestinationEndpoint.InstanceId"?: string;
    /**
     * 目标实例类型，取值为：
     * - **Redis**：阿里云Redis实例。
     * - **RDS**：阿里云RDS实例。
     * - **PolarDB**：阿里云PolarDB集群（仅支持MySQL或兼容Oracle语法的引擎）。
     * - **ECS**：ECS上的自建数据库。
     * - **Express**：通过专线接入的本地数据库。
     * - **DataHub**：阿里云DataHub实例。
     * - **MaxCompute**：阿里云MaxCompute实例。
     * - **AnalyticDB**：云原生数据仓库AnalyticDB MySQL  3.0和2.0版本。
     * - **Greenplum**：云原生数据仓库ADB PostgreSQL版（原分析型数据库PostgreSQL版）。
     * > 默认取值为**RDS**。
     * @example `RDS`
     */
    "DestinationEndpoint.InstanceType"?: string;
    /**
     * 目标库的IP地址。
     * > 当**DestinationEndpoint.InstanceType**取值为**Express**、**dg**或**cen**时，本参数必须传入本参数才可用且必须传入。
     * @example `172.16.88.***`
     */
    "DestinationEndpoint.IP"?: string;
    /**
     * 目标库的数据库服务端口。
     * > 当**DestinationEndpoint.InstanceType**取值为**ECS**、**Express**、**dg**或**cen**时，本参数才可用且必须传入。
     * @example `3306`
     */
    "DestinationEndpoint.Port"?: string;
    /**
     * 目标库的数据库账号。
     * > - 同步不同的数据库所需的权限有所差异，详情请参见[DTS数据同步方案概览](~~140954~~)中对应的配置案例。
     * - 当**DestinationEndpoint.InstanceType**取值为**ECS**、**Express**、**dg**或**cen**时，本参数必须传入。
     * - 当**DestinationEndpoint.InstanceType**取值为RDS且数据库版本为MySQL 5.5或MySQL 5.6，无需传入本参数和**DestinationEndpoint.Password**参数。
     * - 当**DestinationEndpoint.InstanceType**取值为**Redis**时，无需传入本参数。
     * @example `dtstestaccount`
     */
    "DestinationEndpoint.UserName"?: string;
    /**
     * 目标库数据库账号密码。
     * > - 当**DestinationEndpoint.InstanceType**取值为**ECS**、**Express**、**dg**或**cen**时，本参数必须传入。
     * @example `Test654321`
     */
    "DestinationEndpoint.Password"?: string;
    /**
     * 是否执行结构初始化，取值：
     * - **true**：是。
     * - **false**：否。
     * > 默认取值：**true**。
     * @example `true`
     */
    "StructureInitialization": boolean;
    /**
     * 是否执行全量数据初始化，取值：
     * - **true**：是。
     * - **false**：否。
     * > 默认取值：**true**。
     * @example `true`
     */
    "DataInitialization": boolean;
    /**
     * 同步对象，格式为JSON串且支持一定的正则表达式，详细说明，请参见[同步对象配置说明](~~141901~~)。
     * @example `[{"DBName":"dtstestdata","TableIncludes":[{"TableName":"customer"}]}]`
     */
    "SynchronizationObjects": string;
    /**
     * 源RDS实例所属的阿里云账号ID。
     * > 传入本参数即代表执行跨阿里云账号的数据同步，同时您还需要传入**SourceEndpoint.Role**参数。
     * @example `140692647406****`
     */
    "SourceEndpoint.OwnerID"?: string;
    /**
     * 源实例所属云账号配置的角色名称。
     * > 执行跨阿里云账号的数据同步时须传入本参数，该角色所需的权限及授权方式请参见[跨阿里云账号数据迁移或同步时如何配置RAM授权](~~48468~~)。
     * @example `ram-for-dts`
     */
    "SourceEndpoint.Role"?: string;
    /**
     * 设置增量日志表是否包含以增量更新时间对应年份信息定义的分区，取值：**true**或**false**。
     * > 当**DestinationEndpoint.InstanceType**参数取值为**Maxcompute**时，本参数才可用。
     * @example `true`
     */
    "PartitionKey.ModifyTime_Year"?: boolean;
    /**
     * 设置增量日志表是否包含以增量更新时间对应月份信息定义的分区，取值：**true**或**false**。
     * > 当**DestinationEndpoint.InstanceType**参数取值为**Maxcompute**时，本参数才可用。
     * @example `true`
     */
    "PartitionKey.ModifyTime_Month"?: boolean;
    /**
     * 设置增量日志表是否包含以增量更新时间对应日期信息定义的分区，取值：**true**或**false**。
     * > 当**DestinationEndpoint.InstanceType**参数取值为**Maxcompute**时，本参数才可用。
     * @example `true`
     */
    "PartitionKey.ModifyTime_Day"?: boolean;
    /**
     * 设置增量日志表是否包含以增量更新时间对应小时信息定义的分区，取值：**true**或**false**。
     * > 当**DestinationEndpoint.InstanceType**参数取值为**Maxcompute**时，本参数才可用。
     * @example `true`
     */
    "PartitionKey.ModifyTime_Hour"?: boolean;
    /**
     * 设置增量日志表是否包含以增量更新时间对应分钟信息定义的分区，取值：**true**或**false**。
     * > 当**DestinationEndpoint.InstanceType**参数取值为**Maxcompute**时，本参数才可用。
     * @example `true`
     */
    "PartitionKey.ModifyTime_Minute"?: boolean;
    /**
     * DTS预留参数，格式为JSON串，您可以传入本参数实现特殊需求（例如是否自动启动预检查）。更多信息，请参见[MigrationReserved参数说明](~~176470~~)。
     * > 如在Redis企业版实例间的数据同步可使用该参数，更多信息，请参见[调用OpenAPI配置Redis企业版实例间单向或双向数据同步](~~155967~~)。
     * @example `{     "autoStartModulesAfterConfig": "none",     "targetTableMode": 2 }`
     */
    "MigrationReserved"?: string;
    /**
     * 同步位点。
     * @example `1610540493`
     */
    "Checkpoint"?: string;
    /**
     * 阿里云主账号ID，无需设置，该参数即将下线。
     * @example `12323344****`
     */
    "AccountId"?: string;
    /**
     * 源实例中的同步对象所属数据库名称。
     * @example `dtstestdata`
     */
    "SourceEndpoint.DatabaseName"?: string;
    /**
     * 目标实例中的同步对象所属数据库名称。
     * @example `dtstestdata`
     */
    "DestinationEndpoint.DataBaseName"?: string;
    "ResourceGroupId"?: string;
}
