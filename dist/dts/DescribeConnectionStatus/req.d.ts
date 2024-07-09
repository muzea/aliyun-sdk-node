export interface DescribeConnectionStatusRequest {
    /**
     * 当**SourceEndpointEngineName**为**Oracle**时，才需要传入本参数，取值为：
     * - **SID**：非集群架构。
     * - **RAC**：集群架构。
     * > 该参数为非必填参数。
     * @example `SID`
     */
    "SourceEndpointArchitecture"?: string;
    /**
     * 源实例类别：
     * - **RDS**：RDS实例。
     * - **LocalInstance**：本地自建数据库。
     * - **ECS**：ECS上的自建数据库。
     * - **Express**：通过专线接入的自建数据库。
     * - **dg**：通过DG网关接入的数据库。
     * - **MongoDB**：阿里云MongoDB实例。
     * - **POLARDB**：阿里云PolarDB MySQL集群。
     * - **PolarDB_o**：阿里云PolarDB O引擎集群。
     * @example `RDS`
     */
    "SourceEndpointInstanceType": string;
    /**
     * 源实例ID。
     * @example `rm-bp1imrtn6fq7h****`
     */
    "SourceEndpointInstanceID"?: string;
    /**
     * 源实例数据库引擎类型，取值包括：**MySQL**、**TiDB**、**SQLServer**、**PostgreSQL**、**Oracle**、**MongoDB**、**Redis**。
     * > 默认取值为**MySQL**。
     * @example `MySQL`
     */
    "SourceEndpointEngineName"?: string;
    /**
     * 源实例所属地域，详情请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "SourceEndpointRegion"?: string;
    /**
     * 源库的连接地址。
     * > 当**SourceEndpointInstanceType**取值为**LocalInstance**或**Express**时，本参数才可用且必须传入。
     * @example `172.16.88.***	`
     */
    "SourceEndpointIP"?: string;
    /**
     * 源库的服务端口。
     * >  当**SourceEndpointInstanceType**取值为**ECS**、**LocalInstance**或**Express**时，本参数才可用且必须传入。
     * @example `3306`
     */
    "SourceEndpointPort"?: string;
    /**
     * Oracle数据库的SID信息。
     * > 当**SourceEndpointEngineName**取值为**Oracle**，且Oracle数据库为非RAC实例时，本参数才可用且必须传入。
     * @example `testsid`
     */
    "SourceEndpointOracleSID"?: string;
    /**
     * 待迁移的数据库名称或鉴权数据库名称。
     * >- 当**SourceEndpointEngineName**取值为**PostgreSQL**或**MongoDB**，或者**SourceEndpointInstanceType**为**PolarDB_o**时，本参数才可用且必须传入。
     * - 当**SourceEndpointEngineName**取值为**PostgreSQL**或**DRDS**时，传入待迁移的数据库名称；取值为**MongoDB**时，传入数据库账号的鉴权数据库名称。
     * - 当**SourceEndpointInstanceType**取值为**PolarDB_o**时，传入待迁移的数据库名称。
     * @example `dtstestdata`
     */
    "SourceEndpointDatabaseName"?: string;
    /**
     * 源库的数据库账号。
     * > 迁移或同步不同的数据库所需的权限有所差异，详情请参见[迁移方案概览](~~26618~~)或[同步方案概览](~~130744~~)中对应的配置案例。
     * @example `dtstest`
     */
    "SourceEndpointUserName"?: string;
    /**
     * 源库数据库账号的密码。
     * @example `Test123456`
     */
    "SourceEndpointPassword"?: string;
    /**
     * 目标库的实例类型，取值：
     * > - **ECS**：ECS上的自建数据库。
     * - **LocalInstance**：有公网IP的自建数据库。
     * - **RDS**：阿里云RDS实例。
     * - **DRDS**：阿里云PolarDB-X实例。
     * - **MongoDB**：阿里云MongoDB实例。
     * - **Redis**：阿里云Redis实例。
     * - **PetaData**：阿里云HybridDB for MySQL实例。
     * - **POLARDB**：阿里云PolarDB MySQL集群。
     * - **PolarDB_o**：阿里云PolarDB O引擎集群。
     * - **AnalyticDB**：阿里云云原生数据仓库AnalyticDB MySQL 3.0和2.0版本。
     * - **Greenplum**：阿里云云原生数据仓库AnalyticDB PostgreSQL。
     * @example `PolarDB_o`
     */
    "DestinationEndpointInstanceType": string;
    /**
     * 目标实例ID。
     * @example `testsid`
     */
    "DestinationEndpointInstanceID"?: string;
    /**
     * 目标库的数据库类型。取值：**MySQL**、**DRDS**、**SQLServer**、**PostgreSQL**、**PPAS**、**MongoDB**或**Redis**。
     * > 当**DestinationEndpointInstanceType**取值为**RDS**、**DRDS**、**ECS**、**LocalInstance**或**Express**时，本参数才可用且必须传入。
     * @example `MySQL`
     */
    "DestinationEndpointEngineName"?: string;
    /**
     * 目标实例所属地域，详情请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "DestinationEndpointRegion"?: string;
    /**
     * 目标库连接地址。
     * >  当**DestinationEndpointInstanceType**取值为**LocalInstance**或**Express**时，本参数才可用且必须传入。
     * @example `172.16.88.***	`
     */
    "DestinationEndpointIP"?: string;
    /**
     * 源库的服务端口。
     * > 当**SourceEndpointInstanceType**取值为**ECS**、**LocalInstance**或**Express**时，本参数才可用且必须传入。
     * @example `3306`
     */
    "DestinationEndpointPort"?: string;
    /**
     * 待迁入的数据库名称或鉴权数据库名称。
     * > - 当**DestinationEndpointEngineName**取值为**PostgreSQL**、**DRDS**或**MongoDB**时，或者**DestinationEndpointInstanceType**取值为**PolarDB_o**时，本参数才可用且必须传入。
     * - 当**DestinationEndpointEngineName**取值为**PostgreSQL**或**DRDS**时，传入待迁移的数据库名称；取值为**MongoDB**时，传入数据库账号的鉴权数据库名称。
     * - 当**DestinationEndpointInstanceType**取值为**PolarDB_o**时，传入待迁移的数据库名称。
     * @example `dtstestdata`
     */
    "DestinationEndpointDatabaseName"?: string;
    /**
     * 目标库的数据库账号。
     * > 迁移或同步不同的数据库所需的权限有所差异，详情请参见[迁移方案概览](~~26618~~)或[同步方案概览](~~130744~~)中对应的配置案例。
     * @example `dtstest`
     */
    "DestinationEndpointUserName"?: string;
    /**
     * 目标库数据库账号的密码。
     * @example `Test123456`
     */
    "DestinationEndpointPassword"?: string;
    /**
     * 当**DestinationEndpointEngineName**为**Oracle**时，才需要传入本参数，取值为：
     * - **SID**：非集群架构。
     * - **RAC**：集群架构。
     * > 该参数的类型应为String，且为非必填参数。
     * @example `SID`
     */
    "DestinationEndpointOracleSID"?: string;
    /**
     * 当**SourceEndpointEngineName**为**Oracle**时，才需要传入本参数，取值为：
     * - **SID**：非集群架构。
     * - **RAC**：集群架构。
     * > 该参数的类型应为String，且为非必填参数。
     * @example `SID`
     */
    "DestinationEndpointArchitecture"?: string;
    /**
     * DTS实例所在地域，详情请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
