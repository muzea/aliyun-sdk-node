export interface InsertListRequest {
    /**
     * Data API账号的用户凭证，您可调用[DescribeSecrets](https://help.aliyun.com/document_detail/446624.html)接口获取该参数的值。格式如下：`acs:rds:{{region}}:{{accountId}}:rds-db-credentials/{{secretName}}-{{6 digits random string}}`。
     * @example `acs:rds-api:cn-hangzhou:1266348003******:rds-db-credenti***​/mySecret-Uy****`
     */
    "SecretArn": string;
    /**
     * 用于指向用户希望访问的资源，格式如下：```acs:rds:{{regionId}}:{{accountId}}:dbinstance/{{instanceId}}```
     * 参数说明如下：
     * - regionId：地域ID，可调用[DescribeSecrets](https://help.aliyun.com/document_detail/446624.html)接口获取。
     * - accountId：阿里云账号ID，可调用[DescribeSecrets](https://help.aliyun.com/document_detail/446624.html)接口获取。
     * - instanceId：实例ID。
     * @example `acs:rds:cn-hangzhou:1266348003******:dbinstance/rm-1234567890abc****`
     */
    "ResourceArn": string;
    /**
     * 数据库名称。
     * @example `test_db`
     */
    "Database"?: string;
    /**
     * 表名称。
     * @example `user`
     */
    "Table": string;
    /**
     * 需要提交的事务ID，您可调用**BeginTransaction**接口获取该参数的值。
     * @example `8609****-94e1-45ce-8e25-354e3dd8****`
     */
    "TransactionId"?: string;
    /**
     * 要批量插入的数据，数据结构为array数组，每一项为一条记录
     */
    "Records"?: any[];
}
