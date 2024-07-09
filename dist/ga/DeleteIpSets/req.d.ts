export interface DeleteIpSetsRequest {
    /**
     * 全球加速实例所在的地域，仅取值**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 要删除的加速地域的ID。
     * @example `ips-bp11c9mpphtb1xkds****`
     */
    "IpSetIds": string[];
}
