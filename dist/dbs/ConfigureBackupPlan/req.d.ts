export interface ConfigureBackupPlanRequest {
    /**
     * 备份计划ID，可通过调用[DescribeBackupPlanList](~~437215~~)接口获取该参数的值。
     * @example `dbstooi0*******`
     */
    "BackupPlanId": string;
    /**
     * 数据库所在位置，可通过调用[DescribeBackupPlanList](~~437215~~)接口获取该参数的值。取值如下：
     * - **RDS**
     * - **ECS**
     * - **Express**：通过专线/VPN网关/智能网关接入的数据库
     * - **Agent**：通过备份网关接入的数据库
     * - **DDS**：云MongoDB
     * - **Other**：通过IP:Port直连的数据库
     * @example `RDS`
     */
    "SourceEndpointInstanceType": string;
    /**
     * 数据库地域，可通过调用[DescribeBackupPlanList](~~437215~~)接口获取该参数的值。
     * > **SourceEndpointInstanceType**为RDS、ECS、DDS、Express、Agent时，该参数必传。
     * @example `cn-hangzhou`
     */
    "SourceEndpointRegion"?: string;
    /**
     * 数据库实例ID，可通过调用[DescribeBackupPlanList](~~437215~~)接口获取该参数的值。
     * > **SourceEndpoint**.**InstanceType**为**RDS**、**ECS**、**DDS**、**Express**时，该参数必传。
     * @example `rm-uf6wjk5*********`
     */
    "SourceEndpointInstanceID"?: string;
    /**
     * 数据库连接地址，可通过调用[DescribeBackupPlanList](~~437215~~)接口获取该参数的值。
     * > **SourceEndpointInstanceType**为**express**、**agent**、**other**时，该参数必传。
     * @example `rm-uf6wjk5*******.mysql.rds.aliyuncs.com`
     */
    "SourceEndpointIP"?: string;
    /**
     * 数据库端口，可通过调用[DescribeBackupPlanList](~~437215~~)接口获取该参数的值。
     * > **SourceEndpoint**.**InstanceType**为**express**、**agent**、**other**、**ECS**时，该参数必传。
     * @example `3306`
     */
    "SourceEndpointPort"?: number;
    /**
     * 数据库名称，可通过调用[DescribeBackupPlanList](~~437215~~)接口获取该参数的值。
     * > 数据库类型为**PostgreSQL**、**MongoDB**时，该参数必传。
     * @example `testRDS`
     */
    "SourceEndpointDatabaseName"?: string;
    /**
     * 数据库账号。
     * > 数据库类型为**Redis**，或者数据库所在位置为**agent**且数据库类型为**SQL Server**时该参数非必须，其他场景均必传。
     * @example `testRDS`
     */
    "SourceEndpointUserName"?: string;
    /**
     * 密码。
     * > 数据库类型为**Redis**，或者数据库所在位置为**agent**且数据库类型为**SQL Server**时该参数非必须，其他场景均必传。
     * @example `testPassword`
     */
    "SourceEndpointPassword"?: string;
    /**
     * 备份网关ID，可通过调用[DescribeBackupPlanList](~~437215~~)接口获取该参数的值。
     * > **SourceEndpointInstanceType**为**agent**时，该参数必传。
     * @example `23313123312`
     */
    "BackupGatewayId"?: number;
    /**
     * OSS Bucket名称。
     * > 系统默认自动生成新的名称。
     * @example `TestOssBucket`
     */
    "OSSBucketName"?: string;
    /**
     * 备份对象，可通过调用[DescribeBackupPlanList](~~437215~~)接口获取该参数的值。
     * @example `[     {         "DBName":"待备份库名",         "SchemaName":"待备份 Schema 名",         "TableIncludes":[{             "TableName":"待备份表表名"         }],         "TableExcludes":[{             "TableName":"待备份库名不需要备份表的表名"         }]     } ]`
     */
    "BackupObjects"?: string;
    /**
     * 全量备份周期，取值：
     * - **Monday**：周一
     * - **Tuesday**：周二
     * - **Wednesday**：周三
     * - **Thursday**：周四
     * - **Friday**：周五
     * - **Saturday**：周六
     * - **Sunday**：周日
     * @example `Monday`
     */
    "BackupPeriod"?: string;
    /**
     * 全量备份开始时间，格式为<i>HH:mm</i>Z（UTC时间）。可通过调用[DescribeBackupPlanList](~~437215~~)接口获取该参数的值。
     * @example `14:22`
     */
    "BackupStartTime"?: string;
    /**
     * 是否开启增量日志备份，取值：
     * - **true**：开启
     * - **false**：关闭
     * @example `true`
     */
    "EnableBackupLog"?: boolean;
    /**
     * 增量时间间隔，以秒（s）为单位。
     * > 仅支持物理备份。
     * @example `1000`
     */
    "BackupLogIntervalSeconds"?: number;
    /**
     * 备份数据保留时间，取值：0 ~ 1825，默认为730天。
     * @example `730`
     */
    "BackupRetentionPeriod"?: number;
    /**
     * 转为低频访问存储时间，默认为180天。
     * @example `180`
     */
    "DuplicationInfrequentAccessPeriod"?: number;
    /**
     * 转为归档冷备存储时间，默认为365天。
     * @example `365`
     */
    "DuplicationArchivePeriod"?: number;
    /**
     * 自定义备份计划名称，可通过调用[DescribeBackupPlanList](~~437215~~)接口获取该参数的值。
     * @example `dbstooi0*******`
     */
    "BackupPlanName": string;
    /**
     * Oracle SID名称。
     * > 数据库类型为Oracle时，该参数必传。
     * @example `test`
     */
    "SourceEndpointOracleSID"?: string;
    /**
     * 内置存储类型：
     * - 空（默认）：备份数据存储在用户OSS上。
     * - system ：备份数据存储在DBS的内置OSS上。
     * @example `无`
     */
    "BackupStorageType"?: string;
    /**
     * 磁盘IO限制 ， 单位为KB/s。
     * > 仅对MySQL物理备份生效。
     * @example `262144`
     */
    "BackupSpeedLimit"?: number;
    /**
     * 网络带宽限制， 单位为KB/s ，最大允许10GB。
     * > 仅对MySQL物理备份生效。
     * @example `262144`
     */
    "BackupRateLimit"?: number;
    /**
     * 全量备份周期，取值：
     * - **simple**：周期备份，和BackupPeriod、BackupStartTime配合使用。
     * - **manual**：手动备份。
     * > 默认为**simple**。
     * @example `simple`
     */
    "BackupStrategyType"?: string;
    /**
     * 跨阿里云账号备份的UID，可通过调用[DescribeRestoreTaskList](~~437228~~)接口获取该参数的值。
     * @example `2xxx7778xxxxxxxxxx`
     */
    "CrossAliyunId"?: string;
    /**
     * 跨阿里云账号备份的RAM角色名称，可通过调用[DescribeRestoreTaskList](~~437228~~)接口获取该参数的值。
     * @example `test123`
     */
    "CrossRoleName"?: string;
    /**
     * 是否开启自动备份。
     * - **true**：开启
     * - **false**：不开启
     * @example `false`
     */
    "AutoStartBackup"?: boolean;
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCzxxxxxxx`
     */
    "ClientToken"?: string;
    /**
     * 资源组ID。
     * @example `rg-aekzecovzti****`
     */
    "ResourceGroupId"?: string;
}
