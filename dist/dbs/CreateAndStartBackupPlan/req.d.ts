export interface CreateAndStartBackupPlanRequest {
    /**
     *
     * 备份计划ID。
     * @example `dbstooi0*******`
     */
    "BackupPlanId"?: string;
    /**
     * DBS支持地域，可调用[DescribeRegions](~~437238~~)接口查看。
     * @example `cn-hangzhou`
     */
    "Region"?: string;
    /**
     * 备份计划的规格，取值：
     * - **micro**
     * - **small**
     * - **medium**
     * - **large**
     * - **xlarge**
     * > 规格越高，备份与恢复的性能越高。更多信息，请参见[规格说明](~~84372~~)。
     * @example `micro`
     */
    "InstanceClass": string;
    /**
     * 数据库类型，取值：
     * - **MySQL**
     * - **MSSQL**
     * - **Oracle**
     * - **MariaDB**
     * - **PostgreSQL**
     * - **DRDS**
     * - **MongoDB**
     * - **Redis**
     * @example `MySQL`
     */
    "DatabaseType": string;
    /**
     * 备份方式，取值：
     * - **logical**：逻辑备份
     * - **physical**：物理备份
     * - **duplication**：转储备份
     * @example `logical`
     */
    "BackupMethod": string;
    /**
     * 指定预付费实例为包年或者包月类型，取值：
     * - **Year**：包年
     * - **Month**：包月
     * @example `Year`
     */
    "Period"?: string;
    /**
     * 指定购买时长，取值：
     * - 当参数**Period**为**Year**时，**UsedTime**取值为1~5。
     * - 当参数**Period**为**Month**时，**UsedTime**取值为1~11。
     * @example `1`
     */
    "UsedTime"?: number;
    /**
     * 支付方式，取值：
     * - **postpay**：后付费（按量付费）
     * - **prepay**：预付费（包年包月）
     * > 默认**prepay**，目前只有**BackupMethod**为**duplication**时支持**postpay**。
     * @example `postpay`
     */
    "PayType"?: string;
    /**
     * 数据库地域。
     * > 当**PayType**为**postpay**时，该参数必选。
     * @example `cn-hangzhou`
     */
    "DatabaseRegion"?: string;
    /**
     * 存储地域。
     * > 当**PayType**为**postpay**时，该参数必选。
     * @example `cn-hangzhou`
     */
    "StorageRegion"?: string;
    /**
     * 数据库实例类型，取值：
     * - **RDS**
     * - **PolarDB**
     * - **DDS**：阿里云MongoDB
     * - **Kvstore**：阿里云Redis
     * - **Other**：通过IP:Port接入的数据库
     * - **dg**：无公网IP:Port的自建数据库（通过数据库网关DG接入）
     * > 当**PayType**为**postpay**时，必选。
     * @example `RDS`
     */
    "InstanceType"?: string;
    /**
     * 该参数暂未开放使用。
     * @example `无`
     */
    "StorageType"?: string;
    /**
     * 用于备注请求来源，默认值为OpenApi，无需手动设置。
     * @example `OpenApi`
     */
    "FromApp"?: string;
    /**
     * 数据库所在位置，取值：
     * - **RDS**
     * - **ECS**
     * - **Express**：通过专线/VPN网关/智能网关接入的数据库
     * - **Agent**：通过备份网关接入的数据库
     * - **DDS**：云MongoDB
     * - **Other**：通过IP:Port直连的数据库
     * - **dg**：无公网IP:Port的自建数据库（通过数据库网关DG接入）
     * @example `RDS`
     */
    "SourceEndpointInstanceType": string;
    /**
     * 数据库地域。
     * > **SourceEndpoint**.**InstanceType**为**RDS**、**ECS**、**DDS**、**Express**、**Agent**时，该参数必传。
     * @example `cn-hangzhou`
     */
    "SourceEndpointRegion"?: string;
    /**
     * 数据库实例ID。
     * > **SourceEndpoint**.**InstanceType**为**RDS**、**ECS**、**DDS**、**Express**时，该参数必传。
     * @example `rm-uf6wjk5xxxxxxxxxx`
     */
    "SourceEndpointInstanceID"?: string;
    /**
     * 数据库连接地址。
     * > **SourceEndpoint**.**InstanceType**为**express**、**agent**、**other**时，该参数必传。
     * @example `rm-uf6wjk5xxxxxxx.mysql.rds.aliyuncs.com`
     */
    "SourceEndpointIP"?: string;
    /**
     * 数据库端口。
     * > **SourceEndpoint**.**InstanceType**为**express**、**agent**、**other**、**ECS**时，该参数必传。
     * @example `3306`
     */
    "SourceEndpointPort"?: number;
    /**
     * 数据库名称。
     * > 数据库类型为**PostgreSQL**、**MongoDB**时，该参数必传。
     * @example `testRDS`
     */
    "SourceEndpointDatabaseName"?: string;
    /**
     * 数据库账号。
     * > 数据库类型为**Redis**，或者数据库所在位置为**agent**且数据库类型为**MSSQL**时该参数非必须，其他场景均必传。
     * @example `testRDS`
     */
    "SourceEndpointUserName"?: string;
    /**
     * 密码。
     * > 数据库类型为**Redis**，或者数据库所在位置为**agent**且数据库类型为**MSSQL**时该参数非必须，其他场景均必传。
     * @example `testPassword`
     */
    "SourceEndpointPassword"?: string;
    /**
     * 备份网关ID。
     * > - **SourceEndpoint**.**InstanceType**为**agent**时，该参数必传。
     * > - 如何创建备份网关，请参见[添加备份网关](~~93250~~)。
     * > - 您可以通过[DescribeBackupGatewayList](~~437230~~)查看已有备份网关列表。
     * @example `23313123312`
     */
    "BackupGatewayId"?: number;
    /**
     * OSS Bucket名称。
     * 默认：系统自动生成新的名称。
     * @example `TestOssBucket`
     */
    "OSSBucketName"?: string;
    /**
     * 备份对象。
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
     * > 支持选择多个取值，用英文逗号（,）分开。
     * @example `Monday`
     */
    "BackupPeriod"?: string;
    /**
     * 全量备份开始时间，格式为<i>HH:mm</i>（UTC时间）。
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
     * > 仅选择**物理备份**时需要传入该参数。
     * @example `1000`
     */
    "BackupLogIntervalSeconds"?: number;
    /**
     * 备份数据保留时间，取值：0~1825，默认为730天。
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
     * 自定义备份计划名称。
     * @example `dbstooi0*******`
     */
    "BackupPlanName": string;
    /**
     * Oracle SID名称，数据库类型为Oracle时，该参数必传。
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
     * 磁盘IO限制， 单位为KB/s。
     * > 该参数仅对MySQL物理备份生效。
     * @example `262144`
     */
    "BackupSpeedLimit"?: number;
    /**
     * 网络带宽限制，单位为KB/s，最大允许10 GB。
     * > 该参数仅对MySQL物理备份生效。
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
     * 跨阿里云账号备份的UID。
     * @example `1648821913******`
     */
    "CrossAliyunId"?: string;
    /**
     * 跨阿里云账号备份的RAM角色名称。
     * @example `test123`
     */
    "CrossRoleName"?: string;
    /**
     * 用于保证请求的幂等性，防止重复提交请求。
     * @example `ASDASDASDSADASFCZXVZ`
     */
    "ClientToken"?: string;
    /**
     * 资源组ID。
     * @example `rg-aekzecovzti****`
     */
    "ResourceGroupId"?: string;
}
