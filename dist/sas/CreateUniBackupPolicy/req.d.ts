export interface CreateUniBackupPolicyRequest {
    /**
     * 防勒索备份策略的名称。
     * @example `mysql-policy`
     */
    "PolicyName": string;
    /**
     * ECS实例的ID。
     * >调用[DescribeUniBackupDatabase](~~DescribeUniBackupDatabase~~)接口可以获取该参数。
     * @example `i-bp1fu4aqltf1huhc****`
     */
    "InstanceId": string;
    /**
     * 数据库防勒索所备份服务器的UUID。
     * > 您可以调用[DescribeCloudCenterInstances](~~141932~~)接口获取服务器的UUID。
     * @example `045cad48-eb08-4047-a70c-713aec7b****`
     */
    "Uuid"?: string;
    /**
     * 数据库类型，取值如下：
     * - **MYSQL**
     * - **ORACLE**
     * - **MSSQL**
     * @example `MYSQL`
     */
    "DatabaseType": string;
    /**
     * 备份保留天数。
     * @example `7`
     */
    "Retention": number;
    /**
     * 备份网络带宽限制。单位为字节。
     * @example `5242880`
     */
    "SpeedLimiter": number;
    /**
     * 数据库账户名称。
     * @example `admin`
     */
    "AccountName"?: string;
    /**
     * 数据库账户密码。
     * @example `Pass****`
     */
    "AccountPassword"?: string;
    /**
     * 数据库是否用户添加。取值：
     * - **true**：是
     * - **false**：否
     * @example `true`
     */
    "DatabaseAddByUser"?: string;
    /**
     * 备份策略防护的服务器所在的地域。
     * @example `cn-hangzhou`
     */
    "UniRegionId": string;
    /**
     * 全量备份策略。格式为JSON格式。包含以下字段：
     * - **start**：备份开始时间
     * - **interval**：间隔周期
     * - **type**：间隔周期单位
     * - **days**：周中执行日期
     * @example `{"days":[4],"interval":1,"planType":"weekly","startTime":"22:00:00"}`
     */
    "FullPlan": any;
    /**
     * 增量备份策略。格式为JSON格式。包含以下字段：
     * - **start**：备份开始时间
     * - **interval**：间隔周期
     * - **type**：间隔周期单位
     * - **days**：周中执行日期
     * @example `{"interval":1,"planType":"daily","startTime":"23:30:00"}`
     */
    "IncPlan": any;
}
