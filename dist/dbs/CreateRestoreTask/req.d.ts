export interface CreateRestoreTaskRequest {
    /**
     * 备份计划ID。
     * @example `dbs1hvb0ww****`
     */
    "BackupPlanId": string;
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
    "DestinationEndpointInstanceType": string;
    /**
     * 数据库实例的地域。
     * >**DestinationEndpointInstanceType**为RDS、ECS、DDS、Express、Agent时，该参数必传。
     * @example `cn-hangzhou`
     */
    "DestinationEndpointRegion"?: string;
    /**
     * 数据库实例ID。
     * > **DestinationEndpointInstanceType**为RDS、ECS、DDS、Express时，该参数必传。
     * @example `rm-bp1p8c29*****`
     */
    "DestinationEndpointInstanceID"?: string;
    /**
     * 数据库连接地址。
     * > **DestinationEndpointInstanceType**为express、agent、other，该参数必传。
     * @example `rm-bp*****9jv8pxero.mysql.rds.aliyuncs.com`
     */
    "DestinationEndpointIP"?: string;
    /**
     * 数据库端口。
     * > **DestinationEndpointInstanceType**为express、agent、other、ECS，该参数必传。
     * @example `3306`
     */
    "DestinationEndpointPort"?: number;
    /**
     * 数据库名称。
     * > 数据库类型为PostgreSQL、MongoDB时，该参数必传。
     * @example `test`
     */
    "DestinationEndpointDatabaseName"?: string;
    /**
     * 数据库账号。
     * > 数据库类型为Redis，或者数据库所在位置为agent且数据库类型为MSSQL时该参数非必须，其他场景均必传。
     * @example `test`
     */
    "DestinationEndpointUserName"?: string;
    /**
     * 密码。
     * > 数据库类型为Redis，或者数据库所在位置为agent且数据库类型为MSSQL时该参数非必须，其他场景均必传。
     * @example `Test`
     */
    "DestinationEndpointPassword"?: string;
    /**
     * 备份网关ID。
     * > **DestinationEndpointInstanceType**为agent时，该参数必传。
     * @example `4312****`
     */
    "BackupGatewayId"?: number;
    /**
     * 恢复对象。
     * - 详情请参见下面的**RestoreObjects**参数定义，当数据库所在位置为agent时，该参数非必须，其他场景均必传。
     * - 传入模板：`[{ "DBName": "待恢复库名", "NewDBName": "目标待恢复库名" }] `
     * > 使用本API接口恢复对象仅支持恢复到数据库级别，如需配置指定表的恢复，请前往控制台进行操作。具体请参见[恢复数据库](~~85543~~)。
     * @example `MySQL表级别恢复示例如下：
    [{\"DBName\":\"dbname\", \"NewDBName\":\"dbname1\"}]`
     */
    "RestoreObjects"?: string;
    /**
     * 恢复时间，取值：1554560477000。
     * @example `1554560477000`
     */
    "RestoreTime"?: number;
    /**
     * 恢复所使用的全量备份集ID，和RestoreTime互斥。
     * @example `dbs1hvb0w*****`
     */
    "BackupSetId"?: string;
    /**
     * 恢复任务名称。
     * @example `test`
     */
    "RestoreTaskName": string;
    /**
     * Oracle SID名称。
     * > 数据库类型为Oracle时，该参数必传。
     * @example `test`
     */
    "DestinationEndpointOracleSID"?: string;
    /**
     * **DestinationEndpointInstanceType**为agent且备份计划为MySQL时必传。
     * @example `test`
     */
    "RestoreDir"?: string;
    /**
     * 数据库程序目录。
     * @example `test`
     */
    "RestoreHome"?: string;
    /**
     * 同名对象冲突处理方式，当前支持：
     * **renamenew**：遇到同名对象则重命名
     * @example `renamenew`
     */
    "DuplicateConflict"?: string;
    /**
     * 跨阿里云账号备份的UID。
     * @example `2749528728********`
     */
    "CrossAliyunId"?: string;
    /**
     * 跨阿里云账号备份的RAM角色名称。
     * @example `test123`
     */
    "CrossRoleName"?: string;
    /**
     * 用于保证请求的幂等性，防止重复提交请求。
     * @example `ETnLKlblzczshOTUbOC********`
     */
    "ClientToken"?: string;
}
