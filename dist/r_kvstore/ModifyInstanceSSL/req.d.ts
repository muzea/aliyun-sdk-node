export interface ModifyInstanceSSLRequest {
    /**
     * 实例ID。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId": string;
    /**
     * 修改TLS（SSL）设置，取值：
     * * **Disable**：关闭。
     * * **Enable**：开启。
     * * **Update**：更新证书。
     * @example `Enable`
     */
    "SSLEnabled": string;
}
