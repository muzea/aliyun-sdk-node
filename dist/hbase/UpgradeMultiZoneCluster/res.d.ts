export interface UpgradeMultiZoneClusterResponse {
    /**
     * 返回要升级的多个组件中触发升级的组件。
     * @example `LINDORM`
     */
    UpgradingComponents: string;
    /**
     * 请求Id。
     * @example `C532A4D4-9451-4460-BB3E-300FEC852D3F`
     */
    RequestId: string;
}
