export interface ModifyDBInstanceSSLRequest {
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的详情，包括实例ID。
     * @example `gp-xxxxxxxxxxx`
     */
    "DBInstanceId": string;
    /**
     * 加密的连接串，对于ECS实例，该参数默认采用泛域名，会加密所有的连接串。
     * @example `gp-xxxxxxxxxxx-master.gpdbmaster.singapore.rds.aliyuncs.com`
     */
    "ConnectionString"?: string;
    /**
     *  SSL状态：
     * - 0：关闭
     * - 1：开启
     * - 2：更新
     * @example `1`
     */
    "SSLEnabled": number;
}
