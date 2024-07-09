export interface ConfigureMigrationJobRequest {
    /**
     * 数据迁移实例所在地域的ID，详情请参见[支持的地域列表](~~141033~~)。
     * > 与目标库所属的地域ID保持一致。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 数据迁移实例ID，可以通过调用**DescribeMigrationJobs**接口查询。
     * @example `dtsl3m1213ye7l****`
     */
    "MigrationJobId": string;
    /**
     * 迁移任务名称，不超过32个字符。建议配置具有业务意义的名称（无唯一性要求），便于后续识别。
     * @example `MySQL_TO_RDS`
     */
    "MigrationJobName": string;
    /**
     * 源库的实例类型，取值：
     * - **RDS**：阿里云RDS实例。
     * - **ECS**：ECS上的自建数据库。
     * - **LocalInstance**：有公网IP的自建数据库。
     * - **Express**：通过专线/VPN网关/智能接入网关接入的自建数据库。
     * - **dg**：通过数据库网关DG接入的自建数据库。
     * - **cen**：通过云企业网CEN接入的自建数据库。
     * - **MongoDB**：阿里云MongoDB实例。
     * - **POLARDB**：阿里云PolarDB MySQL、PolarDB PostgreSQL。
     * - **PolarDB_o**：阿里云PolarDB O引擎集群。
     * @example `RDS`
     */
    "SourceEndpoint.InstanceType": string;
    /**
     * 源库的实例ID。
     * > - 当**SourceEndpoint.InstanceType**取值为**RDS**、**ECS**、**Express**、**MongoDB**、**POLARDB**或**PolarDB_o**时，本参数才可用且必须传入对应的实例ID（例如取值为**ECS**，则本参数传入ECS实例的ID）。
     * - 当**SourceEndpoint.InstanceType**取值为**Express**时，本参数传入VPC ID（即专有网络ID）。
     * @example `rm-bp1i99e8l7913****`
     */
    "SourceEndpoint.InstanceID"?: string;
    /**
     * 源库的数据库类型，取值：**MySQL**、**TiDB**、**SQLServer**、**PostgreSQL**、**Oracle**、**MongoDB**、**Redis**、**POLARDB**、**polardb_pg**。
     * > 当**DestinationEndpoint.InstanceType**取值为**RDS**、**POLARDB**、**ECS**、**LocalInstance**或**Express**时，本参数才可用且必须传入。
     * @example `MySQL`
     */
    "SourceEndpoint.EngineName"?: string;
    /**
     * 源库所属的地域ID。
     * > 当**SourceEndpoint.InstanceType**取值为**LocalInstance**时，您可以传入**cn-hangzhou**或者离自建数据库地物理距离最近的地域ID，详情请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "SourceEndpoint.Region"?: string;
    /**
     * 源库的连接地址。
     * > 当**SourceEndpoint.InstanceType**取值为**LocalInstance**或**Express**时，本参数才可用且必须传入。
     * @example `172.16.88.***	`
     */
    "SourceEndpoint.IP"?: string;
    /**
     * 源库的服务端口。
     * > 当**SourceEndpoint.InstanceType**取值为**ECS**、**LocalInstance**或**Express**时，本参数才可用且必须传入。
     * @example `3306`
     */
    "SourceEndpoint.Port"?: string;
    /**
     * Oracle数据库的SID信息。
     * > 当**SourceEndpoint.EngineName**取值为**Oracle**，且**Oracle**数据库为非RAC实例时，本参数才可用且必须传入。
     * @example `testsid`
     */
    "SourceEndpoint.OracleSID"?: string;
    /**
     * 待迁移的数据库名称或鉴权数据库名称。
     * > - 当**SourceEndpoint.EngineName**取值为**PostgreSQL**或**MongoDB**时，本参数才可用且必须传入。
     * - 当**SourceEndpoint.EngineName**取值为**PostgreSQL**时，传入待迁移的数据库名称；取值为**MongoDB**时，传入数据库账号的鉴权数据库名称。
     * @example `dtstestdatabase`
     */
    "SourceEndpoint.DatabaseName"?: string;
    /**
     * 源库的数据库账号。
     * > 迁移不同的数据库所需的权限有所差异，详情请参见[迁移方案概览](~~26618~~)中对应的配置案例。
     * @example `dtstestaccount`
     */
    "SourceEndpoint.UserName"?: string;
    /**
     * 源库数据库账号的密码。
     * @example `Test123456`
     */
    "SourceEndpoint.Password"?: string;
    /**
     * 源实例所属的阿里云账号ID。
     * > 仅在配置跨阿里云账号的数据迁移时本参数才可用，且必须传入。
     * @example `140692647406****`
     */
    "SourceEndpoint.OwnerID"?: string;
    /**
     * 当源实例与目标实例所属阿里云账号不同时，需传入该参数，来指定源实例的授权角色，以允许目标实例阿里云账号访问源实例的实例信息。
     * > 角色所需的权限及授权方式，请参见[跨阿里云账号数据迁移或同步时如何配置RAM授权](~~48468~~)。
     * @example `ram-for-dts`
     */
    "SourceEndpoint.Role"?: string;
    /**
     * 目标库的实例类型，取值：
     * - **ECS**：ECS上的自建数据库。
     * - **LocalInstance**：有公网IP的自建数据库。
     * - **RDS**：阿里云RDS实例。
     * - **DRDS**：阿里云PolarDB-X实例。
     * - **MongoDB**：阿里云MongoDB实例。
     * - **Redis**：阿里云Redis实例。
     * - **PetaData**：阿里云HybridDB for MySQL实例。
     * - **POLARDB**：阿里云PolarDB MySQL、PolarDB PostgreSQL。
     * - **PolarDB_o**：阿里云PolarDB O引擎集群。
     * - **AnalyticDB**：阿里云云原生数据仓库AnalyticDB MySQL 3.0和2.0版本。
     * - **Greenplum**：阿里云云原生数据仓库AnalyticDB PostgreSQL。
     * @example `RDS`
     */
    "DestinationEndpoint.InstanceType": string;
    /**
     * 目标实例ID。
     * > 当**DestinationEndpoint.InstanceType**取值为**RDS**、**ECS**、**MongoDB**、**Redis**、**DRDS**、**PetaData**、**OceanBase**、**POLARDB**、**PolarDB_o**、**AnalyticDB**或**Greenplum**时，本参数才可用且必须传入对应的实例ID（例如取值为**ECS**，则需要传入ECS实例ID）。
     * @example `rm-bp1r46452ai50****`
     */
    "DestinationEndpoint.InstanceID"?: string;
    /**
     * 目标库的数据库类型。取值：**MySQL**、**DRDS**、**SQLServer**、**PostgreSQL**、**PPAS**、**MongoDB**、**Redis**、**POLARDB**、**polardb_pg**
     * > 当**DestinationEndpoint.InstanceType**取值为**RDS**、**POLARDB**、**ECS**、**LocalInstance**或**Express**时，本参数才可用且必须传入。
     * @example `MySQL`
     */
    "DestinationEndpoint.EngineName"?: string;
    /**
     * 目标库所属的地域ID。
     * > 当**DestinationEndpoint.InstanceType**取值为**LocalInstance**时，您可以传入**cn-hangzhou**或者离自建数据库地物理距离最近的地域ID，详情请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "DestinationEndpoint.Region"?: string;
    /**
     * 目标库的连接地址。
     * > 当**DestinationEndpoint.InstanceType**取值为**LocalInstance**或**Express**时，本参数才可用且必须传入。
     * @example `172.16.88.***`
     */
    "DestinationEndpoint.IP"?: string;
    /**
     * 目标库的服务端口。
     * > 当**DestinationEndpoint.InstanceType**取值为**ECS**、**LocalInstance**或**Express**时，本参数才可用且必须传入。
     * @example `3306`
     */
    "DestinationEndpoint.Port"?: string;
    /**
     * 待迁入的数据库名称或鉴权数据库名称。
     * > - 当**DestinationEndpoint.EngineName**取值为**PostgreSQL**、**DRDS**或**MongoDB**时，本参数才可用且必须传入。
     * - 当**DestinationEndpoint.EngineName**取值为**PostgreSQL**或**DRDS**时，传入待迁移的数据库名称；取值为**MongoDB**时，传入数据库账号的鉴权数据库名称。
     * @example `dtstestdatabase`
     */
    "DestinationEndpoint.DataBaseName"?: string;
    /**
     * 目标库的数据库账号。
     * > 迁移不同的数据库所需的权限有所差异，详情请参见[迁移方案概览](~~26618~~)中对应的配置案例。
     * @example `dtstestaccount`
     */
    "DestinationEndpoint.UserName"?: string;
    /**
     * 目标库数据库账号的密码。
     * @example `Test123456`
     */
    "DestinationEndpoint.Password"?: string;
    /**
     * 是否进行结构迁移，取值：
     * - **true**：是。
     * - **false**：否。
     * > DTS对结构迁移的支持情况因数据库类型不同而有所差异，详情请参见[支持的数据库和迁移类型](~~26618~~)。
     * @example `true`
     */
    "MigrationMode.StructureIntialization": boolean;
    /**
     * 是否进行全量数据迁移，取值：
     * - **true**：是。
     * - **false**：否。
     * > DTS对全量数据迁移的支持情况因数据库类型不同而有所差异，详情请参见[支持的数据库和迁移类型](~~26618~~)。
     * @example `true`
     */
    "MigrationMode.DataIntialization": boolean;
    /**
     * 是否进行增量数据迁移，取值：
     * - **true**：是。
     * - **false**：否。
     * > DTS对增量数据迁移的支持情况因数据库类型不同而有所差异，详情请参见[支持的数据库和迁移类型](~~26618~~)。
     * @example `true`
     */
    "MigrationMode.DataSynchronization": boolean;
    /**
     * 待迁移的对象，格式为JSON串，且支持一定的正则表达式。
     * 更多相关介绍和示例请参见[迁移对象配置说明](~~141227~~)。
     * @example `[{"DBName":"dtstestdata","TableIncludes":[{"TableName":"customer"}]}]`
     */
    "MigrationObject": string;
    /**
     * DTS预留参数，格式为JSON串，您可以传入本参数实现特殊需求（例如是否自动启动预检查）。更多信息，请参见[MigrationReserved参数说明](~~176470~~)。
     * @example `{     "autoStartModulesAfterConfig": "none",     "targetTableMode": 2 }`
     */
    "MigrationReserved"?: string;
    /**
     * 增量数据迁移的启动位点，格式为Unix时间戳，单位为秒。
     * @example `111`
     */
    "Checkpoint"?: string;
    /**
     * 阿里云主账号ID，无需设置，该参数即将下线。
     * @example `12323344****`
     */
    "AccountId"?: string;
    /**
     * Oracle数据库的SID信息。
     * > 当**DestinationEndpoint.EngineName**取值为**Oracle**，且**Oracle**数据库为非RAC实例时，本参数才可用且必须传入。
     * @example `testsid`
     */
    "DestinationEndpoint.OracleSID"?: string;
    "ResourceGroupId"?: string;
}
