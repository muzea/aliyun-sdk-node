export interface SwitchServiceRequest {
    /**
     * 实例ID。
     * @example `ld-uf6r2hn2zrxxxxxx`
     */
    "ClusterId": string;
    /**
     * 服务名称。
     * @example `HBaseProxy`
     */
    "ServiceName": string;
    /**
     * - open: 开通
     * - close：关闭
     * @example `open`
     */
    "Operate": string;
}
