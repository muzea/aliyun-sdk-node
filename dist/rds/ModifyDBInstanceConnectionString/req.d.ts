export interface ModifyDBInstanceConnectionStringRequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 实例当前的某个连接地址，可以是内外网连接地址，或者混访模式下的经典网络连接地址。
     * >不支持修改读写分离连接地址。
     * @example `rm-uf6wjk5x****.mysql.rds.aliyuncs.com`
     */
    "CurrentConnectionString": string;
    /**
     * 目标连接地址的前缀，即只能修改**CurrentConnectionString**参数的前缀部分。
     * >长度8~64，不能包含汉字和非法字符（~!#%^&*=+\|{};:'",<>/?），建议由字母、数字、短横线（-）组成。
     * @example `rm-****`
     */
    "ConnectionStringPrefix": string;
    /**
     * 目标端口。
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
     * PgBouncer端口号。
     * > 该参数仅适用于RDS PostgreSQL实例，如果开启了PgBouncer，则支持修改PgBouncer端口号。
     * @example `6432`
     */
    "PGBouncerPort"?: string;
}
