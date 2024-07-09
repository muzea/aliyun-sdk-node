export interface DescribeUpgradeMajorVersionPrecheckTaskRequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `pgm-bp1c808s731l****`
     */
    "DBInstanceId": string;
    /**
     * 表示大版本升级前检查报告每页显示的记录数。
     * 取值范围：
     * - 30（默认值）
     * - 50
     * - 100
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 表示显示升级前检查报告的页码。
     * 取值范围：大于0且不超过Integer的最大值。默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 目标实例版本。必须大于当前实例版本。
     * @example `12.0`
     */
    "TargetMajorVersion"?: string;
    /**
     * 升级前检查任务ID，调用UpgradeDBInstanceMajorVersionPrecheck接口执行升级前检查后，从返回参数**TaskId**中获取。
     * @example `416980000`
     */
    "TaskId"?: number;
}
