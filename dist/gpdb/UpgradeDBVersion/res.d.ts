export interface UpgradeDBVersionResponse {
    /**
     * 任务ID。
     * @example `101450956`
     */
    TaskId: string;
    /**
     * 请求ID。
     * @example `25C11EE5-B7E8-481A-A07C-BD619971A570`
     */
    RequestId: string;
    /**
     * 此参数已废弃，无返回参数值。
     * @example `null`
     */
    DBInstanceId: string;
    /**
     * 实例名称。
     * @example `gp-wz9kmr708m155j***`
     */
    DBInstanceName: string;
}
