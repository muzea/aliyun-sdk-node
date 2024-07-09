export interface CreateBackupPolicyResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `24A20733-10A0-4AF6-BE6B-E3322413BB68`
     */
    RequestId: string;
    /**
     * 防护策略信息。
     */
    BackupPolicy: {
        /**
         * 防勒索防护策略编号。
         * @example `1301575`
         */
        Id: string;
        /**
         * 策略状态。取值：
         * - **enabled**：开启防护。
         * - **disabled**：关闭防护。
         * > 创建后默认是开启防护。
         * @example `enabled`
         */
        Status: string;
    };
}
