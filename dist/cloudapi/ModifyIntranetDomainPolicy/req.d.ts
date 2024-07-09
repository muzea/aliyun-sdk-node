export interface ModifyIntranetDomainPolicyRequest {
    /**
     * API分组ID，系统生成，全局唯一
     * @example `523e8dc7bbe04613b5b1d726c2a7889d`
     */
    "GroupId": string;
    /**
     * 是否开启内网VPC域名
     * - TRUE：开通内网VPC域名
     * - FALSE：关闭内网VPC域名
     * @example `true`
     */
    "VpcIntranetEnable": boolean;
}
