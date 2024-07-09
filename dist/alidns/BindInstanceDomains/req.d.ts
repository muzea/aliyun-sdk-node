export interface BindInstanceDomainsRequest {
    /**
     * 用户语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 实例ID。
     * @example `sdfasdf`
     */
    "InstanceId": string;
    /**
     * 域名列表。
     * > " , ” 号隔开多个域名，最多100个域名。
     * @example `example.com,example.net`
     */
    "DomainNames": string;
}
