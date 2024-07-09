export interface ModifyDBInstanceSSLRequest {
    /**
     * 实例ID。
     * @example `dds-bp2235****`
     */
    "DBInstanceId": string;
    /**
     * 对SSL功能执行的操作，取值说明：
     * - **Open**：开启SSL加密。
     * - **Close**：关闭SSL加密。
     * - **Update**：更新SSL证书。
     *
     * @example `Open`
     */
    "SSLAction": string;
}
