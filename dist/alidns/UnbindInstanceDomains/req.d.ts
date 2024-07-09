export interface UnbindInstanceDomainsRequest {
    /**
     * 用户语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 域名列表。
     * 使用“ , ”号隔开多个域名，最多100个域名。
     * @example `example.com,example.net`
     */
    "DomainNames": string;
    /**
     * 实例ID。
     * @example `dns-cn-9lb38ldq9**`
     */
    "InstanceId": string;
}
