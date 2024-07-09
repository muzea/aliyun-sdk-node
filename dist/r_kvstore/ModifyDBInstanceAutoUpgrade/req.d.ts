export interface ModifyDBInstanceAutoUpgradeRequest {
    /**
     * 实例ID，可调用DescribeDBInstances获取。
     * @example `r-bp1zxszhcgatnx****`
     */
    "DBInstanceId": string;
    /**
     * 小版本自动升级开关，取值：
     * * **1**：开启。
     * * **0**：关闭。
     * @example `0`
     */
    "Value": string;
}
