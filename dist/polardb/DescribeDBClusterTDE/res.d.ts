export interface DescribeDBClusterTDEResponse {
    /**
     * 是否开通TDE加密，取值：
     * * **Enabled**：开通
     * * **Disabled**：关闭
     * @example `Enabled`
     */
    TDEStatus: string;
    /**
     * 请求ID。
     * @example `E37D1508-EC3B-4E06-A24A-C7AC31******`
     */
    RequestId: string;
    /**
     * 集群ID。
     * @example `pc-***************`
     */
    DBClusterId: string;
    /**
     * 自定义密钥ID。
     * @example `2a4f4ac2-****-****-****-************`
     */
    EncryptionKey: string;
    /**
     * 是否开启自动加密所有新建的表。取值：
     * - **ON**：开启
     * - **OFF**：关闭
     * @example `ON`
     */
    EncryptNewTables: string;
    /**
     * TDE密钥所在的地域。
     * @example `cn-beijing`
     */
    TDERegion: string;
}
