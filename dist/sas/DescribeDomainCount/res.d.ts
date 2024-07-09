export interface DescribeDomainCountResponse {
    /**
     * 资产中的根网站数量。
     * @example `5`
     */
    RootDomainsCount: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `C286491D-4A2F-589A-B63B-D2AD3DA9BD71`
     */
    RequestId: string;
    /**
     * 资产中的子域名数量。
     * @example `5`
     */
    SubDomainsCount: number;
    /**
     * 查询到的域名资产的总数量。
     * @example `10`
     */
    TotalDomainsCount: number;
}
