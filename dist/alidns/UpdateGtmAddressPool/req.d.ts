export interface UpdateGtmAddressPoolRequest {
    /**
     * 语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 地址池ID。
     * @example `1234abc`
     */
    "AddrPoolId": string;
    /**
     * 地址池名称。
     * @example `名称`
     */
    "Name"?: string;
    /**
     * 地址池类型：
     * - IP：ipv4地址
     * - DOMAIN：域名
     * @example `IP`
     */
    "Type": string;
    /**
     * 最小可用地址数量
     * @example `2`
     */
    "MinAvailableAddrNum"?: number;
    /**
     * 地址池列表。
     */
    "Addr": {
        /**
         * 地址池地址。
         * @example `1.1.XX.XX`
         */
        Value: string;
        /**
         * 地址池权重。
         * @example `1`
         */
        LbaWeight: number;
        /**
         * 模式。
         * - **SMART**：智能返回
         * - **ONLINE**：永远在线
         * - **OFFLINE**：永远离线
         * @example `SMART`
         */
        Mode: string;
    }[];
}
