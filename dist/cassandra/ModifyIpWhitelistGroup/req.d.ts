export interface ModifyIpWhitelistGroupRequest {
    /**
     * 集群ID。
     * @example `cds-uf6ig2gf****7pw9`
     */
    "ClusterId": string;
    /**
     * 白名单列表。
     * @example `218.30.***.40,192.***.0.23`
     */
    "IpList"?: string;
    /**
     * 白名单分组名称。
     * @example `test`
     */
    "GroupName": string;
    /**
     * IP版本。可取值：ipV4/ ipV6。
     * @example `6`
     */
    "IpVersion": number;
}
