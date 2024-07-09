export interface ExecuteStatementRequest {
    /**
     * Data API账号的用户凭证，您可调用[DescribeSecrets](~~446624~~)接口获取该参数的值。格式如下：`acs:rds:{{region}}:{{accountId}}:rds-db-credentials/{{secretName}}-{{6 digits random string}}`
     * @example `acs:rds-api:cn-hangzhou:1266348003******:rds-db-credentials/mySecret-Uy****`
     */
    "SecretArn": string;
    /**
     * 用于指向用户希望访问的资源，格式如下：```acs:rds:{{regionId}}:{{accountId}}:dbinstance/{{instanceId}}```
     * 参数说明如下：
     * - regionId：地域ID，可调用[DescribeSecrets](~~446624~~)接口获取。
     * - accountId：阿里云账号ID，可调用[DescribeSecrets](~~446624~~)接口获取。
     * - instanceId：实例ID。
     * @example `acs:rds:cn-hangzhou:1266348003******:dbinstance/rm-1234567890abc****`
     */
    "ResourceArn": string;
    /**
     * 数据库名称。
     * @example `test`
     */
    "Database": string;
    /**
     * 如果调用超时，选择是否继续运行SQL语句，取值如下：
     * - **true**：继续运行
     * - **false**：停止运行
     * > 默认情况下，SQL语句在调用超时后停止运行。
     * @example `true`
     */
    "ContinueAfterTimeout"?: boolean;
    /**
     * 是否将结果集格式化为单个JSON字符串。
     * - 仅允许传入**NONE**或**JSON**。
     * - 默认值为**NONE**。
     * - 此参数仅适用于SELECT语句，对于其他类型的语句将被忽略。
     * - 结果将返回在**formattedRecords**中。
     * @example `JSON`
     */
    "FormatRecordsAs"?: string;
    /**
     * 是否在结果中包含元数据的值，取值如下：
     * - **true**：包含
     * - **false**：不包含
     * @example `true`
     */
    "IncludeResultMetadata"?: boolean;
    /**
     * 需要执行的SQL语句。
     * @example `select * from users`
     */
    "Sql": string;
    /**
     * 已启动的事务ID，您可调用[BeginTransaction](~~446897~~)接口获取该参数的值。
     * @example `8609****-94e1-45ce-8e25-354e3dd8****`
     */
    "TransactionId"?: string;
    /**
     * 待执行SQL语句的参数详情。
     */
    "Parameters"?: any[];
    /**
     * 控制如何返回结果集的选项。
     */
    "ResultSetOptions"?: {
        /**
         * 指定DECIMAL类型返回后，允许显示的数据类型。
         * - **STRING**：将字段转换为String值。
         * - **DOUBLE\_OR\_LONG**：如果它的scale为0，则将字段转换为**Long**值，否则转换为**Double**值。
         * @example `STRING`
         */
        DecimalReturnType: string;
        /**
         * 指定LONG类型返回后，允许显示的数据类型。
         * - 允许取值为**LONG**或**STRING**。
         * - 默认值为**LONG**。
         * - 如果数值的长度或精度可能导致截断或舍入错误，建议请指定**STRING**。
         * @example `STRING`
         */
        LongReturnType: string;
    };
}
