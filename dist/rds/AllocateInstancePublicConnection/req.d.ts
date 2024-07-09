export interface AllocateInstancePublicConnectionRequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 外网连接地址的前缀。完整外网连接地址为：`前缀.引擎名.rds.aliyuncs.com`。例如`test1234.mysql.rds.aliyuncs.com`。
     * > 长度5\~40，不能包含汉字和非法字符（\~!#%^&*=+|{};:'",<>/?），建议由字母、数字、短横线（-）组成。
     * @example `test1234`
     */
    "ConnectionStringPrefix": string;
    /**
     * 外网连接端口，取值：**1000~5999**。
     * @example `3306`
     */
    "Port": string;
    /**
     * Babelfish for RDS PostgreSQL TDS端口号。
     * > 该参数仅适用于RDS PostgreSQL实例，Babelfish for RDS PostgreSQL的更多介绍，请参见[Babelfish简介](~~428613~~)。
     * @example `1433`
     */
    "BabelfishPort"?: string;
    /**
     * 专属集群MySQL通用版实例所属的组名。
     * @example `rgc-bp1tkv8****`
     */
    "GeneralGroupName"?: string;
    /**
     * PgBouncer端口。
     * > 该参数仅支持PostgreSQL实例。
     * @example `6432`
     */
    "PGBouncerPort"?: string;
}
