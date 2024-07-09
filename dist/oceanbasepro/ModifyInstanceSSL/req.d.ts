export interface ModifyInstanceSSLRequest {
    /**
     * OceanBase 集群 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId": string;
    /**
     * 修改 SSL 状态，取值范围：
     * - open：开启 SSL 加密。
     * - update：更新 CA 证书。
     * - close：关闭 SSL 加密。
     * @example `open`
     */
    "EnableSSL": string;
}
