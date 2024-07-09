export interface ModifyDBInstanceConnectionStringRequest {
    /**
     * 实例ID。
     * @example `gp-t4n2qg19bnn98****`
     */
    "DBInstanceId": string;
    /**
     * 连接地址。
     * @example `gp-test`
     */
    "ConnectionStringPrefix": string;
    /**
     * 端口号，例如5432。
     * @example `5432`
     */
    "Port": string;
    /**
     * 当前的连接地址。
     * @example `gp-t4n2qg19bnn98****-master.gpdb.rds.aliyuncs.com`
     */
    "CurrentConnectionString": string;
}
