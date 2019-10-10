interface DescribeDBInstanceIPArrayListRequest {
    "RegionId"?: string;
    /**
    * 实例ID。
    * @example `rm-uf6wjk5xxxxxxx`
    */ "DBInstanceId": string;
    "OwnerId"?: number;
    /**
    * 白名单的网络类型，取值：
    * * **Classic**：高安全白名单模式下的经典网络；
    * * **VPC**：高安全白名单模式下的专有网络；
    * * **MIX**：通用白名单模式。
    * 默认返回所有网络类型的白名单IP。
    * @example `VPC`
    */ "WhitelistNetworkType"?: string;
}
export { DescribeDBInstanceIPArrayListRequest };