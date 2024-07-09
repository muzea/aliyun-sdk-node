export interface ModifyGlobalSecurityIPGroupRequest {
    /**
     * 地域ID，您可以调用[DescribeRegions](~~61933~~)查询。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * IP白名单模板名称。
     * @example `dps`
     */
    "GlobalIgName": string;
    /**
     * IP白名单模板ID。
     * @example `g-fwjk62egbsrp4sftxmmr`
     */
    "GlobalSecurityGroupId": string;
    /**
     * 白名单模板内的IP地址。
     * > 多个IP地址需要用英文逗号隔开，所有IP白名单累积支持添加1000个IP地址或地址段。
     * @example `27.16.214.10,111.60.117.181`
     */
    "GIpList": string;
}
