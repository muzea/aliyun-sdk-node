export interface ModifyDtsJobEndpointRequest {
    /**
     * DTS实例所属的地域。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * DTS任务ID，可调用[DescribeDtsJobs](~~209702~~)查询。
     * > 若不填入此参数，则必须填入**DtsInstanceId**。
     * @example `m4312mab158****`
     */
    "DtsJobId"?: string;
    /**
     * DTS实例的ID。
     * > 若不填入此参数，则必须填入**DtsJobId**。
     * @example `dtsaw012y2g15q****`
     */
    "DtsInstanceId"?: string;
    /**
     * 同步方向，取值：
     * - **Forward**（默认值）：正向。
     * - **Reverse**：反向。
     * @example `Forward`
     */
    "SynchronizationDirection"?: string;
    /**
     * 待修改的数据库实例，取值：
     * - **src**：源库实例。
     * - **dest**：目标库实例。
     * @example `src`
     */
    "Endpoint": string;
    /**
     * 数据库实例所属的地域。
     * @example `cn-hangzhou`
     */
    "EndpointRegionId"?: string;
    /**
     * 数据库实例类型，取值为：
     * - **rds**：RDS MySQL或RDS SQL Server。
     * - **polardb**：PolarDB MySQL。
     * - **mongodb**：云数据库MongoDB（副本集）。
     * - **distributed_mongodb**：云数据库MongoDB（分片集群）。
     * - **greenplum**：云原生数据仓库AnalyticDB PostgreSQL版。
     * - **kafka**：云消息队列Kafka版。
     * - **ecs**：ECS自建的数据库（仅限支持的数据库类型）。
     * - **express**：专线接入的数据库（仅限支持的数据库类型）。
     * - **other**：公网接入的数据库（仅限支持的数据库类型）。
     * > - 当前支持的数据库类型有MySQL、PolarDB MySQL版、MongoDB、SQL Server、Kafka和AnalyticDB PostgreSQL版。
     * - 若数据库为MongoDB（分片集群），则新数据库的Shard数量需与原来的MongoDB（分片集群）相同。
     * - 传入的参数大小写不敏感。
     * @example `rds`
     */
    "EndpointInstanceType": string;
    /**
     * 数据库实例的ID。
     * @example `rm-bp10k50h8374w****`
     */
    "EndpointInstanceId"?: string;
    /**
     * 数据库实例的IP。
     * @example `172.168.XX.XXX`
     */
    "EndpointIp"?: string;
    /**
     * 数据库实例的端口。
     * @example `3306`
     */
    "EndpointPort"?: string;
    /**
     * 是否修改账号密码。
     * @example `false`
     */
    "ModifyAccount"?: boolean;
    /**
     * 数据库账号。
     * @example `dtstest`
     */
    "Username"?: string;
    /**
     * 数据库密码。
     * @example `DTStest****`
     */
    "Password"?: string;
    /**
     * 鉴权数据库名称。
     * > 当数据库实例为MongoDB时，本参数才可用且必须传入。
     * @example `admin`
     */
    "Database"?: string;
    /**
     * MongoDB分片集群实例的Shard的账号。
     * > 当源数据库实例为MongoDB（分片集群架构）时，本参数才可用且必须传入。
     * @example `shard`
     */
    "ShardUsername"?: string;
    /**
     * MongoDB分片集群实例的Shard的密码。
     * > 当源数据库实例为MongoDB（分片集群架构）时，本参数才可用且必须传入。
     * @example `DTStest****`
     */
    "ShardPassword"?: string;
    /**
     * 跨阿里云账号角色名。
     * > 执行跨阿里云账号的数据同步时须传入本参数，该角色所需的权限及授权方式，请参见[跨阿里云账号数据迁移或同步时如何配置RAM授权](~~48468~~)。
     * @example `ram-for-dts`
     */
    "RoleName"?: string;
    /**
     * 数据库实例所属的阿里云账号（主账号）的ID。
     * >  传入本参数即代表执行跨阿里云账号的数据同步，同时您还需要传入**RoleName**参数。
     * @example `150780020300****`
     */
    "AliyunUid"?: string;
    /**
     * 是否只进行预检查，取值为：
     * - **true**：是。预检查通过后，实例不进行变更操作。
     * - **false**：否。预检查通过后，修改DTS任务的数据库实例并运行。
     * @example `true`
     */
    "DryRun"?: boolean;
    /**
     * 资源组ID。
     * @example `rg-acfmzawhxxc****`
     */
    "ResourceGroupId"?: string;
}
