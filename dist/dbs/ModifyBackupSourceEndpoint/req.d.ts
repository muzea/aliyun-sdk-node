export interface ModifyBackupSourceEndpointRequest {
    /**
     * 备份计划ID，可通过调用[DescribeBackupPlanList](~~437215~~)接口获取该参数的值。
     * @example `dbs1h****usfa`
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
     * > **SourceEndpointInstanceType**为RDS、ECS、DDS、Express时，该参数必传。
     * @example `rm-bp1p8c29479jv****`
     */
    "SourceEndpointInstanceID"?: string;
    /**
     * 数据库连接地址，可通过调用[DescribeBackupPlanList](~~437215~~)接口获取该参数的值。
     * > **SourceEndpointInstanceType**为Express、Agent、Other时该参数必传。
     * @example `100.*.*.10:3306`
     */
    "SourceEndpointIP"?: string;
    /**
     * 数据库端口，可通过调用[DescribeBackupPlanList](~~437215~~)接口获取该参数的值。
     * > **SourceEndpointInstanceType**为Express、Agent、Other、ECS，该参数必传。
     * @example `3306`
     */
    "SourceEndpointPort"?: number;
    /**
     * 数据库名称。
     * - 数据库类型为PostgreSQL、MongoDB时，该参数必传。
     * - 数据库所在位置为Agent且数据库类型为MSSQL时，该参数必传。
     * @example `test`
     */
    "SourceEndpointDatabaseName"?: string;
    /**
     * 数据库账号，可通过调用[DescribeBackupPlanList](~~437215~~)接口获取该参数的值。
     * 数据库类型为Redis，或者数据库所在位置为Agent且数据库类型为MSSQL时该参数非必须，其他场景均必传。
     * @example `test`
     */
    "SourceEndpointUserName"?: string;
    /**
     * 密码。
     * 数据库类型为Redis，或者数据库所在位置为Agent且数据库类型为MSSQL时该参数非必须，其他场景均必传。
     * @example `test`
     */
    "SourceEndpointPassword"?: string;
    /**
     * 备份网关ID，可通过调用[DescribeBackupPlanList](~~437215~~)接口获取该参数的值。
     * > **SourceEndpointInstanceType**为Agent时，该参数必传。
     * @example `21321323213`
     */
    "BackupGatewayId"?: number;
    /**
     * 备份对象，当数据库所在位置为Agent时，该参数非必须，其他场景均必传。可通过调用[DescribeBackupPlanList](~~437215~~)接口获取该参数的值。
     * @example `[{  "DBName":"待备份库名", "SchemaName":"待备份 Schema 名", "TableIncludes":[{ "TableName":"待备份表表名" }],  "TableExcludes":[{"TableName":"待备份库名不需要备份表的表名" }] } ]`
     */
    "BackupObjects"?: string;
    /**
     * Oracle SID名称，数据库类型为Oracle时，该参数必传。
     * @example `test`
     */
    "SourceEndpointOracleSID"?: string;
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
     * 任意字符串，用于保证请求的幂等性，防止重复提交请求。
     * @example `ETnLKlblzczshOTUbOCzxxxxxxx`
     */
    "ClientToken"?: string;
}
