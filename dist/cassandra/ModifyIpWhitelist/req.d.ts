export interface ModifyIpWhitelistRequest {
    /**
     * 集群ID。
     * @example `cds-bp1b136j****5d51`
     */
    "ClusterId": string;
    /**
     * IP地址列表。
     * @example `192.***.0.23,30.15.***.133`
     */
    "IpList": string;
}
