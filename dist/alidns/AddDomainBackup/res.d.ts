export interface AddDomainBackupResponse {
    /**
     * 备份周期。
     * @example `HOUR`
     */
    PeriodType: string;
    /**
     * 唯一请求识别码。
     * @example `FD552816-FCC8-4832-B4A2-2DA0C2BA1688`
     */
    RequestId: string;
    /**
     * 域名名称。
     * @example `dns-example.top`
     */
    DomainName: string;
}
