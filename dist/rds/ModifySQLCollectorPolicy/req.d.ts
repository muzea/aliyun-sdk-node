interface ModifySQLCollectorPolicyRequest {
    "RegionId"?: string;
    /**
    * 实例ID。
    * @example `rm-uf6wjk5xxxxxxx`
    */ "DBInstanceId": string;
    /**
    * 开启或关闭SQL审计，取值：**Enable | Disable**
    * @example `Enable`
    */ "SQLCollectorStatus": string;
    "OwnerId"?: number;
    "ClientToken"?: string;
    "StoragePeriod"?: number;
}
export { ModifySQLCollectorPolicyRequest };