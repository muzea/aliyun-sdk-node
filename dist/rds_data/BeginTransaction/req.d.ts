export interface BeginTransactionRequest {
    /**
     * Data API账号的用户凭证，您可调用[DescribeSecrets](~~446624~~)接口获取该参数的值。格式如下：`acs:rds:{{region}}:{{accountId}}:rds-db-credentials/{{secretName}}-{{6 digits random string}}`
     * @example `acs:rds:cn-hangzhou:1335786916******:rds-db-credent****​/zha***Test03-21****`
     */
    "SecretArn": string;
    /**
     * 用于指向用户希望访问的资源，格式如下：```acs:rds:{{regionId}}:{{accountId}}:dbinstance/{{instanceId}}```
     * 参数说明如下：
     * - regionId：地域ID，可调用[DescribeSecrets](~~446624~~)接口获取。
     * - accountId：阿里云账号ID，可调用[DescribeSecrets](~~446624~~)接口获取。
     * - instanceId：实例ID。
     * @example `acs:rds:cn-hangzhou:13357869165******:dbinstance/rm-bp1m7l3j633******`
     */
    "ResourceArn": string;
    /**
     * 数据库名称。
     * @example `test`
     */
    "Database": string;
}
