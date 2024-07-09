export interface UpgradeDBInstanceMajorVersionPrecheckRequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `pgm-bp1c808s731l****`
     */
    "DBInstanceId": string;
    /**
     * 目标实例版本，必须大于当前实例版本。
     * @example `12.0`
     */
    "TargetMajorVersion": string;
}
