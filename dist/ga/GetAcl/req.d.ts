export interface GetAclRequest {
    /**
     * 全球加速实例所在的地域ID，仅取值：**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 访问控制策略组ID。
     * @example `nacl-hp34s2h0xx1ht4nwo****`
     */
    "AclId": string;
}
