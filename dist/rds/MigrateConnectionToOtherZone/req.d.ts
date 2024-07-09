export interface MigrateConnectionToOtherZoneRequest {
    /**
     * 实例ID。可通过DescribeDBInstances接口查询获取。
     * @example `rm-bp1oypo6ky19y****`
     */
    "DBInstanceId": string;
    /**
     * 实例连接地址，创建时指定，用于生成连接串使用。
     * @example `rm-bp1oypo6ky19y****`
     */
    "ConnectionString": string;
    /**
     * 可用区ID。
     * @example `cn-hangzhou-i`
     */
    "ZoneId": string;
}
