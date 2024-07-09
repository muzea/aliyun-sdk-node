export interface AddGtmAddressPoolResponse {
    /**
     * 唯一请求识别码。
     * @example `6856BCF6-11D6-4D7E-AC53-FD579933522B`
     */
    RequestId: string;
    /**
     * 地址池ID。
     * @example `hraf3x`
     */
    AddrPoolId: string;
    /**
     * 健康检查配置ID。
     * @example `hraf14`
     */
    MonitorConfigId: string;
}
