export interface ModifyLogBackupPolicyRequest {
    /**
     * 资源组ID。
     * @example `rg-acfm4f7oger****`
     */
    "ResourceGroupId"?: string;
    /**
     * AnalyticDB MySQL数仓版（3.0）集群ID。
     * @example `am-bp1r053byu48p****`
     */
    "DBClusterId": string;
    /**
     * 是否开启日志备份。取值说明：
     * - **Enable**：开启。
     * - **Disable**：关闭。
     * @example `Enable`
     */
    "EnableBackupLog": string;
    /**
     * 数据备份保留天数，取值范围：7~730。
     * > 此参数不填写，默认为7天。
     * @example `30`
     */
    "LogBackupRetentionPeriod"?: string;
}
