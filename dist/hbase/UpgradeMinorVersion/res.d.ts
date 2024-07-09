export interface UpgradeMinorVersionResponse {
    /**
     * 成功升级的组件。
     * @example `HADOOP`
     */
    UpgradingComponents: string;
    /**
     * 请求ID。
     * @example `7B8EC240-BB13-4DBC-B955-F90170E82609`
     */
    RequestId: string;
}
